javascript:void function () {
  window.__IdMapToolCSS = `
:host {
  all: initial;
}
.idmap-root {
  position: fixed;
  inset: 0;
  pointer-events: none;
}
#idmap-canvas {
  position: fixed;
  inset: 0;
  pointer-events: none;
}
.idmap-labels {
  position: fixed;
  inset: 0;
  pointer-events: none;
}
.idmap-labels .idmap-label {
  pointer-events: auto;
}

/* Control panel */
.idmap-panel {
  position: fixed;
  top: 12px;
  right: 18px;
  background: #111827dd;
  color: #e5e7eb;
  padding: 10px 10px 14px 10px;
  border-radius: 8px;
  border: 2px solid #1f2937;
  font-family: "Arial", sans-serif;
  pointer-events: auto;
  font-size: 18px;
  max-width: 365px;
}
.idmap-panel-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 6px;
}
.idmap-panel-buttons {
  display: flex;
  gap: 6px;
}
.idmap-btn {
  background: #1f2937;
  color: #e5e7eb;
  border: 2px solid #334155;
  padding: 3px 6px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
.idmap-btn:hover {
  background: #374151;
}
.idmap-btn-danger {
  background: #7f1d1d;
  border-color: #7f1d1d;
}
.idmap-btn-danger:hover {
  background: #991b1b;
}

/* Filters */
.idmap-filters {
  margin-top: 6px;
}
.idmap-filters label {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  margin-bottom: 2px;
}

/* Sidebar */
.idmap-sidebar {
  position: fixed;
  margin-top: 58px;
  top: 100px;
  right: 18px;
  width: 350px;
  max-height: 65vh;
  overflow: auto;
  background: #020617f2;
  color: #e5e7eb;
  border-radius: 10px;
  border: 2px solid #1f2937;
  padding: 18px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Arial", sans-serif;
  pointer-events: auto;
  font-size: 18px;
}
.idmap-sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.idmap-sidebar-item {
  cursor: pointer;
  padding: 8px 8px 6px 8px;
  border-radius: 6px;
  margin-bottom: 8px;
  border: 2px solid transparent;
  background: #00000020;
}
.idmap-sidebar-item.active {
  background: #0f172a;
  border-color: #38bdf8;
}
.idmap-sidebar-item-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  gap: 6px;
}
.idmap-sidebar-item-title span.label {
  font-weight: 600;
  white-space: normal !important;
  overflow-wrap: break-word;
  word-break: break-word;
  max-width: 240px;
  line-height: 1.3;
}
.idmap-sidebar-meta {
  font-size: 16px;
  opacity: 0.8;
}

/* Label hover – pink so it doesn’t clash with approved green */
.idmap-label:hover {
  background: #ff4fa3 !important;
}

/* Per-item tri-state switch */
.idmap-switch {
  position: relative;
  width: 38px;
  height: 20px;
  background: #475569; /* neutral slate */
  border-radius: 999px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  padding: 2px;
  transition: background 0.2s;
}
.idmap-switch-thumb {
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 999px;
  transition: transform 0.2s;
}

/* PASS state (green) */
.idmap-switch.pass {
  background: #22c55e;
}
.idmap-switch.pass .idmap-switch-thumb {
  transform: translateX(18px);
}

/* FAIL state (red) */
.idmap-switch.fail {
  background: #ef4444;
}
.idmap-switch.fail .idmap-switch-thumb {
  transform: translateX(0);
}

/* UNSET (center) */
.idmap-switch.unset {
  background: #475569;
}
.idmap-switch.unset .idmap-switch-thumb {
  transform: translateX(9px);
}

/* PASS / FAIL text next to per-item switch */
.idmap-switch-label {
  font-size: 15px;
  font-weight: 600;
  opacity: 0.9;
}

/* Row tinting */
.idmap-sidebar-item.pass {
  background: rgba(34, 197, 94, 0.15) !important;
  border-color: #22c55e !important;
}
.idmap-sidebar-item.fail {
  background: rgba(239, 68, 68, 0.15) !important;
  border-color: #ef4444 !important;
}

/* Advanced panel (slide-out right) */
.idmap-advanced-panel {
  position: fixed;
  top: 80px;
  right: 18px;
  width: 360px;
  max-height: 70vh;
  background: #020617f2;
  color: #e5e7eb;
  border-radius: 10px;
  border: 2px solid #1f2937;
  padding: 14px 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Arial", sans-serif;
  font-size: 16px;
  pointer-events: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
  transform: translateX(120%);
  opacity: 0;
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;
  z-index: 2147483647;
}
.idmap-advanced-panel.open {
  transform: translateX(0);
  opacity: 1;
}
.idmap-advanced-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.idmap-advanced-title {
  font-weight: 600;
  color: #38bdf8;
}
.idmap-advanced-close {
  background: transparent;
  border: none;
  color: #e5e7eb;
  font-size: 20px;
  cursor: pointer;
}
.idmap-advanced-body {
  max-height: calc(70vh - 40px);
  overflow: auto;
}
.idmap-advanced-section-title {
  font-weight: 600;
  margin-bottom: 4px;
}
.idmap-advanced-help {
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 8px;
}
.idmap-advanced-list {
  border-top: 1px solid #1f2937;
  padding-top: 6px;
  margin-top: 6px;
}
.idmap-advanced-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}
.idmap-advanced-row code {
  font-size: 13px;
  background: #020617;
  padding: 2px 4px;
  border-radius: 4px;
}

/* Fail-all / reset buttons */
.idmap-btn[data-action="fail-all"] {
  background: #7f1d1d;
  border-color: #7f1d1d;
}
.idmap-btn[data-action="fail-all"]:hover {
  background: #991b1b;
}
.idmap-btn[data-action="reset-all"] {
  background: #4b5563;
  border-color: #4b5563;
}
.idmap-btn[data-action="reset-all"]:hover {
  background: #6b7280;
}

.idmap-sidebar-meta {
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  max-width: 100%;
  display: block;
  line-height: 1.3;
}
.idmap-sidebar-item-title .label {
  white-space: normal !important;
  overflow-wrap: break-word;
  word-break: break-word;
  max-width: 240px;
}
.idmap-sidebar-item {
  overflow-wrap: break-word;
  word-break: break-word;
}
.idmap-btn[data-action="pass-all"] {
  background: #4ade80;      /* light green */
  border-color: #4ade80;
  color: #0f172a;           /* dark text to keep it readable */
}

.idmap-btn[data-action="pass-all"]:hover {
  background: #22c55e;      /* slightly stronger green on hover */
  border-color: #22c55e;
}


`;

  (function () {
    // ─────────────────────────────────────
    // Configuration
    // ─────────────────────────────────────
    const baseIgnoreSelectors = [
      "[data-idmap-ignore]",
      "script",
      "style",
      "div.c-skip-links__group",
      ".c-accordion__button",
      ".c-accordion__content",
      ".c-page__head *",
      ".c-page__foot *",
      "[id^='reference-']",
      "[id^='reference-'] *"
    ];

    const config = {
      include: {
        interactive: ["a", "button", "[role=button]", "input[type=button]", "input[type=submit]"],
        formControls: ["input:not([type=hidden])", "select", "textarea"],
        containers: ["section[id]", "article[id]", "nav[id]", "aside[id]", "div.card[id]", "div[role=group][id]"]
      },
      requireId: ["a", "button", "[role=button]", "input[type=button]", "input[type=submit]"],
      meaninglessIdPatterns: [
        /^c-[A-Za-z0-9]+(-[A-Za-z0-9]+)*__([A-Za-z0-9]+(-[A-Za-z0-9]+)*)$/,
        /^[A-Za-z]-[0-9a-f]{10,12}-[A-Za-z0-9]{10,14}(-[A-Za-z]+)?$/
      ],
      style: {
        overlayZIndex: 2147483647,
        defaultBlue: "#3b82f6",
        duplicateRed: "#ff3366",
        missingOrange: "#ffaa00",
        approvedGreen: "#22c55e",
        rejectedPurple: "#ef4444", // now red (fail)
        highlight: "#48ec69ff",
        backgroundPanel: "#111827dd",
        backgroundSidebar: "#020617f2",
        textColor: "#e5e7eb",
        accentColor: "#38bdf8",
        fontFamily: "system-ui,-apple-system,BlinkMacSystemFont,'Arial',sans-serif"
      }
    };

    // ─────────────────────────────────────
    // State
    // ─────────────────────────────────────
    let hostElement;
    let shadowRoot;
    let canvas;
    let ctx;
    let labelsLayer;
    let controlPanel;
    let sidebar;
    let advancedPanel;
    let advancedOpen = false;

    let items = [];
    let selectedIndex = null;
    let lastTickTime = 0;

    const LABEL_OFFSET = 20;
    const approvedSet = new Set();
    const rejectedSet = new Set();

    const filtersState = {
      showDuplicatesOnly: false,
      showMissingOnly: false
    };

    // per-session ignore config
    let ignoreState = baseIgnoreSelectors.map((selector) => ({
      selector,
      enabled: true
    }));

    function getActiveIgnoreSelectors() {
      return ignoreState.filter((e) => e.enabled).map((e) => e.selector);
    }

    // ─────────────────────────────────────
    // Helpers
    // ─────────────────────────────────────
    function elementMatchesAnySelector(el, selectors) {
      return selectors.some((selector) => {
        try {
          return el.matches(selector);
        } catch (e) {
          return false;
        }
      });
    }

    function isElementHidden(el) {
      if (!el.isConnected) return true;

      const style = getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden") return true;
      if (parseFloat(style.opacity || "1") === 0) return true;

      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return true;

      return false;
    }

    function isIgnoredElement(el) {
      const ignores = getActiveIgnoreSelectors();
      return elementMatchesAnySelector(el, ignores);
    }

    function isRectOnScreen(rect) {
      if (!rect) return false;
      return (
        rect.bottom >= 0 &&
        rect.top <= window.innerHeight &&
        rect.right >= 0 &&
        rect.left <= window.innerWidth
      );
    }

    function hasMeaninglessId(id) {
      if (!id) return false;
      return config.meaninglessIdPatterns.some((re) => re.test(id));
    }

    function getElementLabel(el) {
      const text = (el.innerText || el.textContent || "").trim();
      if (text) return text;

      const aria = (el.getAttribute("aria-label") || "").trim();
      if (aria) return aria;

      return "(no label)";
    }

    // Filter logic helper: OR between duplicates / missing
    function passesCurrentFilters(item) {
      const wantsDupes = filtersState.showDuplicatesOnly;
      const wantsMissing = filtersState.showMissingOnly;

      if (!wantsDupes && !wantsMissing) return true;

      const isDuplicate = item.duplicate;
      const isMissing = item.missingId || item.meaningless;

      if (wantsDupes && isDuplicate) return true;
      if (wantsMissing && isMissing) return true;

      return false;
    }

    // ─────────────────────────────────────
    // Core: find & classify elements
    // ─────────────────────────────────────
    function collectCandidatesFromDOM() {
      const selectors = Array.from(new Set(Object.values(config.include).flat()));
      const result = [];
      const seen = new Set();

      selectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((el) => {
          if (seen.has(el)) return;
          if (isIgnoredElement(el)) return;
          seen.add(el);
          result.push(el);
        });
      });

      return result;
    }

    function buildItemListFromElements(elements) {
      const list = [];
      const idMap = Object.create(null);

      elements.forEach((el) => {
        const id = (el.getAttribute("id") || "").trim();
        const requiresId = elementMatchesAnySelector(el, config.requireId);
        const hidden = isElementHidden(el);
        const meaningless = hasMeaninglessId(id);
        const missingId = requiresId && (!id || meaningless);

        const item = {
          el,
          id,
          label: getElementLabel(el),
          title: el.getAttribute("title") || "",
          ariaLabel: el.getAttribute("aria-label") || "",
          href: el.getAttribute("href") || "",
          requiresId,
          meaningless,
          missingId,
          hidden,
          duplicate: false,
          rect: null,
          visible: false,
          labelEl: null
        };

        if (id && !meaningless) {
          if (!idMap[id]) idMap[id] = [];
          idMap[id].push(item);
        }

        list.push(item);
      });

      // Duplicates
      Object.values(idMap).forEach((itemsWithSameId) => {
        if (itemsWithSameId.length > 1) {
          itemsWithSameId.forEach((item) => {
            item.duplicate = true;
          });
        }
      });

      items = list;
      return list;
    }

    function updateItemRects() {
      items.forEach((item) => {
        if (item.hidden) {
          item.rect = null;
          item.visible = false;
        } else {
          const rect = item.el.getBoundingClientRect();
          item.rect = rect;
          item.visible = rect.width > 0 && rect.height > 0;
        }
      });
    }

    function getFilteredItemsForSidebar() {
      return items.filter((item) => {
        if (item.hidden) return false;
        if (!item.rect || !item.visible) return false;
        if (!passesCurrentFilters(item)) return false;
        return true;
      });
    }

    function getVisibleItemsOnScreen() {
      return items.filter((item) => {
        if (item.hidden) return false;
        if (!item.rect || !item.visible) return false;
        if (!isRectOnScreen(item.rect)) return false;
        if (!passesCurrentFilters(item)) return false;
        return true;
      });
    }

    // ─────────────────────────────────────
    // Drawing overlay
    // ─────────────────────────────────────
    function resizeCanvasToViewport() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function renderOverlay() {
      resizeCanvasToViewport();
      updateItemRects();

      const visibleItems = getVisibleItemsOnScreen();

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      visibleItems.forEach((item) => {
        const rect = item.rect;
        let color = config.style.defaultBlue;

        if (item.duplicate) {
          color = config.style.duplicateRed;
        } else if (item.missingId || item.meaningless) {
          color = config.style.missingOrange;
        }

        if (approvedSet.has(item.el)) color = config.style.approvedGreen;
        if (rejectedSet.has(item.el)) color = config.style.rejectedPurple;

        ctx.strokeStyle = color;
        ctx.lineWidth = 4;
        ctx.strokeRect(rect.x, rect.y - LABEL_OFFSET, rect.width, rect.height + LABEL_OFFSET);
      });

      // Clear labels layer
      labelsLayer.innerHTML = "";
      const labelElements = [];

      visibleItems.forEach((item) => {
        const rect = item.rect;
        const span = document.createElement("span");
        span.className = "idmap-label";
        span.dataset.index = String(items.indexOf(item));
        span.textContent = item.id || "(no id)";

        // Pinned near top-left of the box
        span.style.position = "fixed";
        span.style.left = rect.x + "px";
        span.style.top = rect.y - 20 + "px";
        span.style.zIndex = String(config.style.overlayZIndex + 2);
        span.style.fontSize = "16px";
        span.style.padding = "2px 4px";
        span.style.borderRadius = "3px";
        span.style.whiteSpace = "nowrap";
        span.style.maxWidth = "240px";
        span.style.overflow = "hidden";
        span.style.textOverflow = "ellipsis";
        span.style.color = "#fff";
        span.style.cursor = "pointer";

        let bgColor = config.style.defaultBlue;
        if (item.duplicate) {
          bgColor = config.style.duplicateRed;
        } else if (item.missingId || item.meaningless) {
          bgColor = config.style.missingOrange;
        }
        if (approvedSet.has(item.el)) bgColor = config.style.approvedGreen;
        if (rejectedSet.has(item.el)) bgColor = config.style.rejectedPurple;

        span.style.background = bgColor;

        span.addEventListener("mouseenter", () => {
          setSelectedIndex(items.indexOf(item));
        });
        span.addEventListener("mouseleave", () => {
          setSelectedIndex(null);
        });
        span.addEventListener("click", (evt) => {
          evt.stopPropagation();
          scrollToItemIndex(items.indexOf(item));
        });

        labelsLayer.appendChild(span);
        item.labelEl = span;
        labelElements.push(span);
      });

      avoidLabelOverlap(labelElements);
    }

    function renderSelectionHighlight() {
      renderOverlay();

      if (selectedIndex == null) return;

      const item = items[selectedIndex];
      if (!item || !item.rect || !isRectOnScreen(item.rect)) return;

      const rect = item.rect;
      ctx.strokeStyle = config.style.highlight;
      ctx.lineWidth = 4;
      ctx.strokeRect(rect.x, rect.y - LABEL_OFFSET, rect.width, rect.height + LABEL_OFFSET);
    }

    // ─────────────────────────────────────
    // Label overlap handling
    // ─────────────────────────────────────
    function avoidLabelOverlap(labelEls) {
      if (!labelEls.length) return;

      function getItemRect(labelEl) {
        const idx = Number(labelEl.dataset.index);
        const item = items[idx];
        return item && item.rect ? item.rect : null;
      }

      labelEls.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);

      function rectsOverlap(r1, r2) {
        return !(
          r1.right <= r2.left ||
          r1.left >= r2.right ||
          r1.bottom <= r2.top ||
          r1.top >= r2.bottom
        );
      }

      for (let i = 0; i < labelEls.length; i++) {
        const el = labelEls[i];
        const elItemRect = getItemRect(el);
        if (!elItemRect) continue;

        let elRect = el.getBoundingClientRect();

        for (let j = 0; j < i; j++) {
          const other = labelEls[j];
          const otherRect = other.getBoundingClientRect();

          if (!rectsOverlap(elRect, otherRect)) continue;

          const delta = otherRect.bottom - elRect.top + 2;
          const currentTop = parseFloat(el.style.top || "0");
          let newTop = currentTop + delta;

          const labelHeight = elRect.height;
          const elementTop = elItemRect.top;
          const elementBottom = elItemRect.bottom;
          const maxTop = elementBottom - labelHeight;

          if (newTop < elementTop) newTop = elementTop;
          if (newTop > maxTop) newTop = maxTop;

          el.style.top = newTop + "px";
          elRect = el.getBoundingClientRect();
        }
      }
    }

    // ─────────────────────────────────────
    // Selection + sidebar wiring
    // ─────────────────────────────────────
    function setSelectedIndex(index) {
      selectedIndex = typeof index === "number" ? index : null;
      updateSidebarSelectionState();
      updateLabelSelectionState();
      renderSelectionHighlight();
    }

    function updateSidebarSelectionState() {
      if (!sidebar) return;
      sidebar.querySelectorAll(".idmap-sidebar-item").forEach((el) => {
        const idx = Number(el.dataset.index);
        el.classList.toggle("active", idx === selectedIndex);
      });
    }

    function updateLabelSelectionState() {
      labelsLayer.querySelectorAll(".idmap-label").forEach((el) => {
        const idx = Number(el.dataset.index);
        el.style.outline = idx === selectedIndex
          ? `2px solid ${config.style.highlight}`
          : "none";
      });
    }

    function scrollToItemIndex(index) {
      const item = items[index];
      if (!item || !item.el) return;

      item.el.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      setTimeout(() => {
        setSelectedIndex(index);
      }, 300);
    }

    function renderSidebarList() {
      const body = sidebar.querySelector("[data-role=body]");
      const countEl = sidebar.querySelector("[data-role=count]");
      body.innerHTML = "";

      const filtered = getFilteredItemsForSidebar();
      countEl.textContent = `${filtered.length} found`;

      filtered.forEach((item) => {
        const index = items.indexOf(item);
        const row = document.createElement("div");
        row.className = "idmap-sidebar-item";
        row.dataset.index = String(index);
        if (index === selectedIndex) row.classList.add("active");

        let color = config.style.defaultBlue;
        if (item.duplicate) {
          color = config.style.duplicateRed;
        } else if (item.missingId || item.meaningless) {
          color = config.style.missingOrange;
        }
        if (approvedSet.has(item.el)) color = config.style.approvedGreen;
        if (rejectedSet.has(item.el)) color = config.style.rejectedPurple;

        const isApproved = approvedSet.has(item.el);
        const isRejected = rejectedSet.has(item.el);

        row.classList.toggle("pass", isApproved);
        row.classList.toggle("fail", isRejected);

        const titleHtml = `
  <div class="idmap-sidebar-item-title">
    <span class="label" style="color:${color};">${item.label}</span>
    <span class="passfail-toggle" data-idx="${index}" style="display:flex;align-items:center;gap:6px;">
      <div class="idmap-switch ${
        isApproved ? "pass" :
        isRejected ? "fail" :
        "unset"
      }">
        <div class="idmap-switch-thumb"></div>
      </div>
      <span class="idmap-switch-label">${
        isApproved ? "PASS" :
        isRejected ? "FAIL" :
        ""
      }</span>
    </span>
  </div>
`;

        let metaHtml = "";
        if (item.id) {
          metaHtml += `<div class="idmap-sidebar-meta">id="${item.id}"</div>`;
        }
        if (item.href) {
          metaHtml += `<div class="idmap-sidebar-meta">href="${item.href}"</div>`;
        }
        if (item.title) {
          metaHtml += `<div class="idmap-sidebar-meta">title="${item.title}"</div>`;
        }
        if (item.ariaLabel) {
          metaHtml += `<div class="idmap-sidebar-meta">aria-label="${item.ariaLabel}"</div>`;
        }

        row.innerHTML = titleHtml + metaHtml;

        row.addEventListener("mouseenter", () => setSelectedIndex(index));
        row.addEventListener("mouseleave", () => setSelectedIndex(null));
        row.addEventListener("click", (evt) => {
          if (
            evt.target instanceof HTMLElement &&
            evt.target.closest(".passfail-toggle")
          ) {
            return;
          }
          scrollToItemIndex(index);
        });

        body.appendChild(row);
      });

      // per-item PASS / FAIL / UNSET toggle handler
      body.querySelectorAll(".passfail-toggle").forEach((btn) => {
        btn.addEventListener("click", (evt) => {
          evt.stopPropagation();
          const idx = Number(btn.dataset.idx);
          const item = items[idx];
          if (!item) return;

          const isApproved = approvedSet.has(item.el);
          const isRejected = rejectedSet.has(item.el);

          if (!isApproved && !isRejected) {
            // UNSET → PASS
            approvedSet.add(item.el);
          } else if (isApproved) {
            // PASS → FAIL
            approvedSet.delete(item.el);
            rejectedSet.add(item.el);
          } else {
            // FAIL → UNSET
            rejectedSet.delete(item.el);
          }

          renderSidebarList();
          renderSelectionHighlight();
        });
      });
    }

    // ─────────────────────────────────────
    // Advanced panel rendering / events
    // ─────────────────────────────────────
    function renderAdvancedIgnoreList() {
      if (!advancedPanel) return;
      const listEl = advancedPanel.querySelector("[data-role=ignore-list]");
      if (!listEl) return;
      listEl.innerHTML = "";

      ignoreState.forEach((entry, idx) => {
        const row = document.createElement("label");
        row.className = "idmap-advanced-row";
        const safeSelector = entry.selector
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");

        row.innerHTML = `
          <input type="checkbox" data-ignore-idx="${idx}" ${entry.enabled ? "checked" : ""}/>
          <code>${safeSelector}</code>
        `;
        listEl.appendChild(row);
      });
    }

    function toggleAdvanced(open) {
      advancedOpen = typeof open === "boolean" ? open : !advancedOpen;
      if (!advancedPanel) return;
      advancedPanel.classList.toggle("open", advancedOpen);
      if (advancedOpen) {
        renderAdvancedIgnoreList();
      }
    }

    // ─────────────────────────────────────
    // Export RTF
    // ─────────────────────────────────────



function exportResultsAsText() {
  const lines = [];
  const add = (t = "") => lines.push(t);

  // Only include items visible in the sidebar for review
  const reviewItems = getFilteredItemsForSidebar();

  // Buckets
  const failReviewer = [];
  const failDuplicate = [];
  const failMissing = [];
  const pass = [];
  const unset = [];

  reviewItems.forEach(item => {
    const isPass = approvedSet.has(item.el);
    const isFail = rejectedSet.has(item.el);

    const autoReason =
      item.duplicate ? "duplicate-id" :
      (item.missingId || item.meaningless) ? "missing-id" :
      "";

    const e = {
      label: item.label || "",
      id: item.id || "",
      href: item.href || ""
    };

    if (isFail) {
      if (autoReason === "duplicate-id") {
        failDuplicate.push({ ...e, reason: autoReason });
      } else if (autoReason === "missing-id") {
        failMissing.push({ ...e, reason: autoReason });
      } else {
        failReviewer.push({ ...e, reason: "" }); // reviewer fail
      }
      return;
    }

    if (isPass) {
      pass.push(e);
      return;
    }

    unset.push(e);
  });

  add("LinksMap Results");
  add("------------------------------");
  add("");

  // FAIL — reviewer
  if (failReviewer.length) {
    add("FAIL — reviewer");
    add("------------------------------");
    failReviewer.forEach(e => {
      add(`FAIL    ${e.label}`);
      add(`id="${e.id}"`);
      add(`href="${e.href}"`);
      add("reason=");
      add("");
    });
    add("");
  }

  // FAIL — duplicate-id
  if (failDuplicate.length) {
    add("FAIL — duplicate-id");
    add("------------------------------");
    failDuplicate.forEach(e => {
      add(`FAIL    ${e.label}`);
      add(`id="${e.id}"`);
      add(`href="${e.href}"`);
      add(`reason=${e.reason}`);
      add("");
    });
    add("");
  }

  // FAIL — missing-id
  if (failMissing.length) {
    add("FAIL — missing-id");
    add("------------------------------");
    failMissing.forEach(e => {
      add(`FAIL    ${e.label}`);
      add(`id="${e.id}"`);
      add(`href="${e.href}"`);
      add(`reason=${e.reason}`);
      add("");
    });
    add("");
  }

  // PASS
  if (pass.length) {
    add("PASS");
    add("------------------------------");
    pass.forEach(e => {
      add(`PASS    ${e.label}`);
      add(`id="${e.id}"`);
      add(`href="${e.href}"`);
      add("");
    });
    add("");
  }

  // UNSET
  if (unset.length) {
    add("UNSET");
    add("------------------------------");
    unset.forEach(e => {
      add(`UNSET   ${e.label}`);
      add(`id="${e.id}"`);
      add(`href="${e.href}"`);
      add("");
    });
  }

  // Download file
  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "linksmap-results.txt";
  a.click();
  URL.revokeObjectURL(url);
}



    // ─────────────────────────────────────
    // Scroll / resize
    // ─────────────────────────────────────
    function handleScrollOrResizeTick() {
      const now = performance.now();
      if (now - lastTickTime > 40) {
        renderSelectionHighlight();
        renderSidebarList();
        lastTickTime = now;
      }
    }

    // ─────────────────────────────────────
    // UI bootstrap (Shadow DOM)
    // ─────────────────────────────────────
    function initializeUI() {
      const styleEl = document.createElement("style");
      styleEl.textContent = window.__IdMapToolCSS || "";

      const root = document.createElement("div");
      root.className = "idmap-root";

      canvas = document.createElement("canvas");
      canvas.id = "idmap-canvas";
      ctx = canvas.getContext("2d");

      labelsLayer = document.createElement("div");
      labelsLayer.className = "idmap-labels";

      controlPanel = document.createElement("div");
      controlPanel.className = "idmap-panel";
      controlPanel.innerHTML = `
        <div class="idmap-panel-header">
          <div class="idmap-panel-buttons">
            <button class="idmap-btn" data-action="toggle-sidebar">Show / Hide Sidebar</button>
            <button class="idmap-btn" data-action="export">Export Results</button>
            <button class="idmap-btn" data-action="rescan">Rescan</button>
            <button class="idmap-btn" data-action="open-advanced" aria-label="Config">⚙</button>
            <button class="idmap-btn idmap-btn-danger" data-action="close">✕</button>
          </div>
        </div>
        <div class="idmap-filters">
          <label><input type="checkbox" data-filter="duplicates"> Show duplicates only</label>
          <label><input type="checkbox" data-filter="missing"> Show missing only</label>
        </div>
      `;

      sidebar = document.createElement("div");
      sidebar.className = "idmap-sidebar";
      sidebar.innerHTML = `
        <div class="idmap-sidebar-header">
          <div>Links</div>
          <div style="display:flex;align-items:center;gap:8px;">
            <div data-role="count">0 found</div>
           <button class="idmap-btn" data-action="fail-all" style="padding:2px 6px;font-size:14px;">Fail All</button>
<button class="idmap-btn" data-action="pass-all" style="padding:2px 6px;font-size:14px;">Pass All</button>
<button class="idmap-btn" data-action="reset-all" style="padding:2px 6px;font-size:14px;">Reset</button>

            </div>
        </div>
        <div data-role="body"></div>
      `;

      advancedPanel = document.createElement("div");
      advancedPanel.className = "idmap-advanced-panel";
      advancedPanel.innerHTML = `
        <div class="idmap-advanced-header">
          <div class="idmap-advanced-title">Advanced config</div>
          <button class="idmap-advanced-close" data-advanced-action="close" aria-label="Close config">&times;</button>
        </div>
        <div class="idmap-advanced-body">
          <div class="idmap-advanced-section">
            <div class="idmap-advanced-section-title">Ignore selectors</div>
            <div class="idmap-advanced-help">
              Toggle these off if you temporarily want ID Map to include elements it normally ignores (for this session only).
            </div>
            <div class="idmap-advanced-list" data-role="ignore-list"></div>
          </div>
        </div>
      `;

      root.appendChild(canvas);
      root.appendChild(labelsLayer);
      root.appendChild(controlPanel);
      root.appendChild(sidebar);
      root.appendChild(advancedPanel);

      shadowRoot.appendChild(styleEl);
      shadowRoot.appendChild(root);

      // Panel buttons
      controlPanel.addEventListener("click", (evt) => {
        const btn = evt.target.closest("button[data-action]");
        if (!btn) return;
        const action = btn.dataset.action;
        if (action === "close") {
          destroyOverlay();
        } else if (action === "rescan") {
          rescanAllElements();
        } else if (action === "export") {
  exportResultsAsText();
} else if (action === "toggle-sidebar") {
          sidebar.style.display = sidebar.style.display === "none" ? "" : "none";
        } else if (action === "open-advanced") {
          toggleAdvanced();
        }
      });

      // Sidebar: Fail All & Reset handlers
      sidebar.addEventListener("click", (evt) => {
  const failBtn = evt.target.closest("button[data-action='fail-all']");
  const passBtn = evt.target.closest("button[data-action='pass-all']");
  const resetBtn = evt.target.closest("button[data-action='reset-all']");


        if (failBtn) {
          const filtered = getFilteredItemsForSidebar(); // only visible/filtered items
          filtered.forEach((item) => {
            approvedSet.delete(item.el);
            rejectedSet.add(item.el);
          });
          renderSidebarList();
          renderSelectionHighlight();
          return;
        }

if (passBtn) {
  const filtered = getFilteredItemsForSidebar(); // only visible/filtered items
  filtered.forEach((item) => {
    rejectedSet.delete(item.el);
    approvedSet.add(item.el);
  });
  renderSidebarList();
  renderSelectionHighlight();
  return;
}


        if (resetBtn) {
          // Clear all PASS/FAIL globally
          approvedSet.clear();
          rejectedSet.clear();
          renderSidebarList();
          renderSelectionHighlight();
        }
      });

      // Advanced panel events
      advancedPanel.addEventListener("click", (evt) => {
        const btn = evt.target.closest("[data-advanced-action='close']");
        if (btn) {
          toggleAdvanced(false);
        }
      });

      advancedPanel.addEventListener("change", (evt) => {
        const target = evt.target;
        if (target instanceof HTMLInputElement && target.hasAttribute("data-ignore-idx")) {
          const idx = Number(target.dataset.ignoreIdx);
          const entry = ignoreState[idx];
          if (!entry) return;
          entry.enabled = target.checked;
          rescanAllElements();
        }
      });

      const duplicatesCheckbox = controlPanel.querySelector("input[data-filter='duplicates']");
      const missingCheckbox = controlPanel.querySelector("input[data-filter='missing']");

      duplicatesCheckbox.addEventListener("change", (evt) => {
        filtersState.showDuplicatesOnly = evt.target.checked;
        renderSidebarList();
        renderSelectionHighlight();
      });

      missingCheckbox.addEventListener("change", (evt) => {
        filtersState.showMissingOnly = evt.target.checked;
        renderSidebarList();
        renderSelectionHighlight();
      });
    }

    // ─────────────────────────────────────
    // Rescan + destroy
    // ─────────────────────────────────────
    function rescanAllElements() {
      const elements = collectCandidatesFromDOM();
      buildItemListFromElements(elements);
      updateItemRects();
      renderSelectionHighlight();
      renderSidebarList();
    }

    function destroyOverlay() {
      window.removeEventListener("scroll", handleScrollOrResizeTick);
      window.removeEventListener("resize", handleScrollOrResizeTick);

      if (hostElement && hostElement.parentNode) {
        hostElement.parentNode.removeChild(hostElement);
      }

      window.__IdMapTool = null;
      console.log("[IdMapTool] Overlay removed.");
    }

    // ─────────────────────────────────────
    // Entry point / toggle
    // ─────────────────────────────────────
    if (window.__IdMapTool && window.__IdMapTool.destroy) {
      window.__IdMapTool.destroy();
      return;
    }

    hostElement = document.createElement("div");
    hostElement.style.position = "fixed";
    hostElement.style.inset = "0";
    hostElement.style.pointerEvents = "none";
    hostElement.style.zIndex = String(config.style.overlayZIndex);

    shadowRoot = hostElement.attachShadow({ mode: "open" });
    document.documentElement.appendChild(hostElement);

    initializeUI();
    rescanAllElements();

    window.addEventListener("scroll", handleScrollOrResizeTick, { passive: true });
    window.addEventListener("resize", handleScrollOrResizeTick);

    window.__IdMapTool = {
      destroy: destroyOverlay,
      rescan: rescanAllElements,
      config
    };

    console.log("[IdMapTool] Overlay active. Run again to remove.");
  })();
}();
