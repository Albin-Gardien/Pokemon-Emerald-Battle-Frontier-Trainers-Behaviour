"use strict";

// One viewport-clamped bubble avoids clipping inside tables/cards and accordions.
// Each trigger also has its own screen-reader description, available without hover.
const helpTooltipState = { bubble: null, trigger: null, pinned: false, hovered: false, bubbleHovered: false, nextId: 0 };

function closeHelpTooltip() {
    helpTooltipState.trigger?.setAttribute("aria-expanded", "false");
    if (helpTooltipState.bubble) { helpTooltipState.bubble.hidden = true; }
    helpTooltipState.trigger = null;
    helpTooltipState.pinned = false;
    helpTooltipState.hovered = false;
    helpTooltipState.bubbleHovered = false;
}

function positionHelpTooltip() {
    const { bubble, trigger } = helpTooltipState;
    if (!trigger || !bubble || bubble.hidden) { return; }
    if (!trigger.isConnected) { closeHelpTooltip(); return; }
    const anchor = trigger.getBoundingClientRect();
    const bounds = bubble.getBoundingClientRect();
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    bubble.style.left = `${Math.max(12, Math.min(anchor.left, width - bounds.width - 12))}px`;
    const below = anchor.bottom + 8;
    bubble.style.top = `${Math.max(12, below + bounds.height <= height - 12
        ? below : Math.min(anchor.top - bounds.height - 8, height - bounds.height - 12))}px`;
}

function showHelpTooltip(trigger, text) {
    if (!helpTooltipState.bubble) { return; }
    if (helpTooltipState.trigger !== trigger) { closeHelpTooltip(); }
    helpTooltipState.trigger = trigger;
    helpTooltipState.bubble.textContent = text;
    helpTooltipState.bubble.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    positionHelpTooltip();
}

function closeUnattendedHelpTooltip() {
    const state = helpTooltipState;
    if (!state.pinned && !state.hovered && !state.bubbleHovered && document.activeElement !== state.trigger) {
        closeHelpTooltip();
    }
}

function createHelpTooltip(text) {
    const wrapper = document.createElement("span");
    wrapper.className = "help-tooltip";
    const description = document.createElement("span");
    description.className = "help-description";
    description.id = `help-description-${++helpTooltipState.nextId}`;
    description.textContent = text;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "help-button";
    button.textContent = "?";
    button.setAttribute("aria-label", translate("ui", "helpLabel"));
    button.setAttribute("aria-describedby", description.id);
    button.setAttribute("aria-expanded", "false");
    button.addEventListener("mouseenter", () => {
        showHelpTooltip(button, text);
        helpTooltipState.hovered = true;
    });
    button.addEventListener("mouseleave", () => {
        if (helpTooltipState.trigger !== button) { return; }
        helpTooltipState.hovered = false;
        setTimeout(closeUnattendedHelpTooltip, 100);
    });
    button.addEventListener("focus", () => showHelpTooltip(button, text));
    button.addEventListener("blur", () => {
        if (helpTooltipState.trigger === button) { closeHelpTooltip(); }
    });
    button.addEventListener("click", (event) => {
        // A help button in a label/summary must not change the associated control.
        event.preventDefault();
        event.stopPropagation();
        if (helpTooltipState.trigger === button && helpTooltipState.pinned) {
            closeHelpTooltip();
        } else {
            showHelpTooltip(button, text);
            helpTooltipState.pinned = true;
        }
    });
    wrapper.append(button, description);
    return wrapper;
}

function setHelpTooltip(mount, text) {
    if (!mount) { return; }
    if (helpTooltipState.trigger && mount.contains(helpTooltipState.trigger)) { closeHelpTooltip(); }
    mount.replaceChildren();
    mount.hidden = !text;
    if (text) { mount.appendChild(createHelpTooltip(text)); }
}

function applyHelpTooltipsLanguage() {
    closeHelpTooltip();
    document.querySelectorAll("[data-help]").forEach((mount) => {
        setHelpTooltip(mount, translate("ui", mount.dataset.help));
    });
}

function bindHelpTooltipEvents() {
    const bubble = document.createElement("div");
    bubble.className = "help-bubble";
    bubble.hidden = true;
    bubble.setAttribute("aria-hidden", "true");
    document.body.appendChild(bubble);
    helpTooltipState.bubble = bubble;
    bubble.addEventListener("mouseenter", () => { helpTooltipState.bubbleHovered = true; });
    bubble.addEventListener("mouseleave", () => {
        helpTooltipState.bubbleHovered = false;
        closeUnattendedHelpTooltip();
    });
    document.addEventListener("click", (event) => {
        if (!helpTooltipState.bubble.contains(event.target)) { closeHelpTooltip(); }
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") { closeHelpTooltip(); }
    });
    window.addEventListener("resize", positionHelpTooltip);
    // Closing on scroll also covers nested table/card scrolling.
    document.addEventListener("scroll", closeHelpTooltip, true);
}
