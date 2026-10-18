"use strict";

// Informational reference only. A team hint cannot safely discard individual sets.
const factoryHintState = { style: "", type: "" };

function getFactoryHintCategories() {
    return window.factoryHints?.styles.filter((style) => style.minimum) ?? [];
}

function getFactoryHintStyleLabel(style) {
    return translate("ui", `factoryHintStyle${style.id}`);
}

function renderFactoryHints(container) {
    const data = window.factoryHints;
    if (!data || !window.factoryPools) {
        const missing = document.createElement("p");
        missing.className = "facility-data-status";
        missing.textContent = translate("ui", data ? "factoryDataMissing" : "factoryHintsMissing");
        container.appendChild(missing);
        return;
    }

    const controls = document.createElement("div");
    controls.className = "factory-hint-controls";
    const output = document.createElement("div");
    output.className = "factory-hint-output";
    output.setAttribute("aria-live", "polite");

    function buildSelect(id, key, help, value, options, onChange) {
        const field = document.createElement("div");
        field.className = "factory-hint-field";
        const caption = document.createElement("div");
        caption.className = "factory-hint-label";
        const label = document.createElement("label");
        label.htmlFor = id;
        label.textContent = translate("ui", key);
        caption.append(label, createHelpTooltip(help));
        const select = document.createElement("select");
        select.id = id;
        select.className = "factory-hint-select";
        for (const option of options) {
            const node = document.createElement("option");
            node.value = option.value;
            node.textContent = option.label;
            select.appendChild(node);
        }
        select.value = value;
        select.addEventListener("change", () => { onChange(select.value); renderOutput(); });
        field.append(caption, select);
        return field;
    }

    controls.appendChild(buildSelect("factory-hint-style", "factoryHintStyleLabel", formatFacilityText("factoryHintStrategyHelp", {
        flexible: getFactoryHintStyleLabel(data.styles.find((style) => style.id === 8))
    }),
        factoryHintState.style, [
            { value: "", label: translate("ui", "factoryHintUnknown") },
            ...data.styles.map((style) => ({ value: String(style.id), label: getFactoryHintStyleLabel(style) }))
        ], (value) => { factoryHintState.style = value; }));
    controls.appendChild(buildSelect("factory-hint-type", "factoryHintTypeLabel", translate("ui", "factoryHintTypeHelp"),
        factoryHintState.type, [
            { value: "", label: translate("ui", "factoryHintUnknown") },
            { value: "none", label: translate("ui", "factoryHintNoType") },
            ...Object.keys(typeColors).filter((id) => id !== "mystery" && id !== "unknown")
                .map((id) => ({ value: id, label: translateEntity("types", id) }))
        ], (value) => { factoryHintState.type = value; }));

    function renderOutput() {
        closeHelpTooltip();
        rememberFacilityInfoSections(output);
        output.replaceChildren();
        if (factoryHintState.type) {
            const type = document.createElement("p");
            type.className = "factory-hint-threshold";
            type.textContent = factoryHintState.type === "none" ? translate("ui", "factoryHintNoTypeResult") :
                formatFacilityText("factoryHintTypeResult", { type: translateEntity("types", factoryHintState.type) });
            output.appendChild(type);
        }
        const style = data.styles.find((entry) => String(entry.id) === factoryHintState.style);
        if (!style) { return; }
        if (style.minimum) {
            output.appendChild(buildFactoryHintCategory(style));
            return;
        }
        const result = document.createElement("p");
        result.className = "factory-hint-threshold";
        result.textContent = translate("ui", style.id === 0 ? "factoryHintNoneResult" : "factoryHintFlexibleResult");
        output.appendChild(result);
        // These two phrases summarize all categories; no single move list applies.
        for (const category of getFactoryHintCategories()) {
            const section = createFacilityInfoSection(`factory-hint-${category.id}`, getFactoryHintStyleLabel(category));
            section.content.appendChild(buildFactoryHintCategory(category, false));
            output.appendChild(section.details);
        }
    }

    container.append(controls, output);
    renderOutput();
}

function buildFactoryHintCategory(style, showTitle = true) {
    const card = document.createElement("section");
    card.className = "factory-hint-category";
    card.dataset.hintStyle = String(style.id);
    if (showTitle) {
        const heading = document.createElement("h3");
        heading.className = "factory-hint-category-title";
        heading.textContent = getFactoryHintStyleLabel(style);
        card.appendChild(heading);
    }
    const threshold = document.createElement("p");
    threshold.className = "factory-hint-threshold";
    threshold.textContent = formatFacilityText("factoryHintThreshold", { count: style.minimum });
    if (style.moves.length !== style.effectiveMoves.length) {
        const firstStyle = window.factoryHints.styles.find((entry) => entry.effectiveMoves?.includes("snatch"));
        threshold.appendChild(createHelpTooltip(formatFacilityText("factoryHintSnatchHelp", {
            style: getFactoryHintStyleLabel(firstStyle)
        })));
    }
    const list = document.createElement("ul");
    list.className = "factory-hint-moves";
    for (const moveId of style.effectiveMoves) {
        const move = window.factoryHints.moves[moveId];
        const item = document.createElement("li");
        item.dataset.moveId = moveId;
        // Existing project names take precedence. The reference includes all 149
        // moves, even those absent from the player's existing moves.js catalogue.
        item.textContent = window.moves?.[moveId]?.names?.[currentLang] ??
            window.appTranslations.moves?.[moveId]?.[currentLang] ?? move.names[currentLang] ?? move.names.en;
        applyTypeColor(item, getMoveType(moveId) ?? move.type);
        list.appendChild(item);
    }
    card.append(threshold, list);
    return card;
}
