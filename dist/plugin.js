"use strict";
var plugins = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugin.js
  var plugin_exports = {};
  __export(plugin_exports, {
    Plugin: () => Plugin
  });

  // ../../_panel-system/tokens.css
  var tokens_default = "/*\n * Thymer Plugin Panel \u2014 Design Tokens\n *\n * Canonical CSS custom properties for the plugin panel system.\n * Plugins consume this verbatim; component CSS reads from these vars.\n *\n * See _panel-system/DESIGN.md for rationale.\n *\n * Accent inherits from Thymer's active theme through --tps-accent. Plugins\n * must not declare their own panel accent.\n */\n\n.tps-panel {\n  /* \u2500\u2500 Color: read directly from Thymer's exposed vars \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  /* Verified against plugin-collection-icons (which uses these directly): Thymer\n     exposes --text-default, --text-muted, --border-subtle, --bg-hover, etc.\n     Hardcoded values are last-resort fallbacks if the var isn't present. */\n  --tps-text:           var(--text-default,   #e8e8e8);\n  --tps-text-muted:     var(--text-muted,     #9a9a9a);\n  --tps-text-faint:     var(--text-subtle,    #888);\n\n  --tps-bg-input:       var(--input-bg,       rgba(127,127,127,0.06));\n  --tps-bg-hover:       var(--bg-hover,       rgba(127,127,127,0.06));\n  --tps-bg-active:      var(--bg-active,      rgba(127,127,127,0.12));\n\n  --tps-divider:        var(--border-subtle,  rgba(255,255,255,0.07));\n  --tps-border:         var(--border-default, rgba(255,255,255,0.14));\n  --tps-border-strong:  var(--border-strong,  rgba(255,255,255,0.22));\n\n  /* \u2500\u2500 Color: accent \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n   * Always follows the user's Thymer theme. The cascade prefers the most\n   * specific Thymer-exposed variable, falling back through softer signals\n   * to a neutral text-tinted accent if Thymer exposes nothing. Plugins\n   * MUST NOT hardcode their own accent.\n   */\n  --tps-accent:         var(--accent-color,\n                        var(--color-accent,\n                        var(--theme-accent,\n                        var(--color-primary,\n                          currentColor))));\n  --tps-accent-soft:    color-mix(in srgb, var(--tps-accent) 15%, transparent);\n  --tps-accent-strong:  color-mix(in srgb, var(--tps-accent) 80%, var(--tps-text));\n\n  /* \u2500\u2500 Color: semantic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-danger:         #ef4444;\n  --tps-danger-soft:    rgba(239, 68, 68, 0.15);\n  --tps-warning:        #f59e0b;\n  --tps-success:        #10b981;\n\n  /* \u2500\u2500 Typography \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  /* Font is INHERITED from Thymer's panel chrome (see components.css). Don't\n     override \u2014 that fights both the body font and the .ti icon font. */\n\n  --tps-fs-title:       18px;\n  --tps-fs-lede:        13px;\n  --tps-fs-section:     11px;\n  --tps-fs-hint:        12px;\n  --tps-fs-label:       13px;\n  --tps-fs-desc:        12px;\n  --tps-fs-body:        13px;\n  --tps-fs-value:       12px;\n  --tps-fs-button:      12px;\n  --tps-fs-list-header: 10px;\n\n  --tps-lh-tight:       1;\n  --tps-lh-snug:        1.2;\n  --tps-lh-base:        1.4;\n  --tps-lh-loose:       1.5;\n\n  --tps-fw-regular:     400;\n  --tps-fw-medium:      500;\n  --tps-fw-semibold:    600;\n  --tps-fw-bold:        700;\n\n  --tps-ls-section:     0.06em;\n  --tps-ls-list:        0.08em;\n  --tps-ls-title:       0;\n\n  /* \u2500\u2500 Spacing (8px scale) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-space-1:        4px;\n  --tps-space-2:        8px;\n  --tps-space-3:        12px;\n  --tps-space-4:        16px;\n  --tps-space-5:        24px;\n  --tps-space-6:        32px;\n  --tps-space-7:        48px;\n\n  /* \u2500\u2500 Radii \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-radius-sm:      4px;\n  --tps-radius-md:      6px;\n  --tps-radius-lg:      8px;\n  --tps-radius-pill:    999px;\n  --tps-radius-circle:  50%;\n\n  /* \u2500\u2500 Motion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-ease-out:       cubic-bezier(0.2, 0.6, 0.2, 1);\n  --tps-ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);\n  --tps-dur-fast:       80ms;\n  --tps-dur-base:       160ms;\n\n  /* \u2500\u2500 Shadows (used sparingly \u2014 slider thumb only) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-shadow-thumb:   0 1px 3px rgba(0, 0, 0, 0.3);\n\n  /* \u2500\u2500 Component dimensions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-control-h-sm:   28px;\n  --tps-control-h-md:   32px;\n  --tps-input-w:        64px;\n  --tps-num-step-w:     28px;\n  --tps-swatch-size:    22px;\n  --tps-thumb-size:     16px;\n  --tps-track-h:        6px;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .tps-panel {\n    --tps-dur-fast:     1ms;\n    --tps-dur-base:     1ms;\n  }\n}\n";

  // ../../_panel-system/components.css
  var components_default = `/*
 * Thymer Plugin Panel \u2014 Component Primitives
 *
 * All primitives scope under .tps-panel. Plugin-specific styles live elsewhere.
 * Reads tokens from tokens.css.
 */

/* \u2500\u2500 Panel root \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Inherit Thymer's font + sizing \u2014 DO NOT override. plugin-collection-icons
   demonstrates the right approach: simply \`font-family: inherit\`. Forcing a
   custom var fights both Thymer's body font AND the .ti icon font. */
.tps-panel {
  font-family: inherit;
  font-size: var(--tps-fs-body);
  line-height: var(--tps-lh-base);
  color: var(--tps-text);
  padding: 0 var(--tps-space-5) var(--tps-space-7);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}

.tps-panel *,
.tps-panel *::before,
.tps-panel *::after {
  box-sizing: border-box;
}

/* Mono opt-ins are explicit per-element, never via a panel-wide override. */
.tps-panel .tps-num-input,
.tps-panel .tps-slider-value,
.tps-panel .tps-mono,
.tps-panel .tps-mono * {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
}

/* \u2500\u2500 Title block \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-title {
  font-size: var(--tps-fs-title);
  line-height: var(--tps-lh-snug);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-title);
  color: var(--tps-text);
  margin: 0 0 var(--tps-space-1);
}

.tps-lede {
  font-size: var(--tps-fs-lede);
  line-height: var(--tps-lh-loose);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

/* \u2500\u2500 Canonical plugin header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-plugin-header {
  position: relative;
  margin: var(--tps-space-5) 0 var(--tps-space-5);
  padding: 18px var(--tps-space-4);
  overflow: hidden;
  background:
    linear-gradient(to right,
      #f26548  8%, #f26548 28%,
      #fbac56 28%, #fbac56 48%,
      #fff460 48%, #fff460 68%,
      #f067a6 68%, #f067a6 88%,
      #03bdf2 88%
    ) top left / 100% 1px no-repeat,
    linear-gradient(to right,
      #f26548  0%, #f26548 12%,
      #fbac56 12%, #fbac56 32%,
      #fff460 32%, #fff460 52%,
      #f067a6 52%, #f067a6 72%,
      #03bdf2 72%, #03bdf2 92%
    ) bottom left / 100% 1px no-repeat,
    var(--tps-panel-bg, var(--bg-default, var(--plg-ci-theme-bg, transparent)));
  border-left: 1px solid #f26548;
  border-right: 1px solid #03bdf2;
}

.tps-plugin-header-logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 var(--tps-space-2, 8px);
}

.tps-plugin-header-logo-icon {
  flex: 0 0 auto;
  font-size: 30px;
  line-height: 1;
  color: var(--tps-accent, currentColor);
}

.tps-plugin-header-title {
  font-size: 22px;
  line-height: var(--tps-lh-snug, 1.2);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: 0;
  color: var(--tps-text, var(--text-default, #e8e8e8));
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-version {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: baseline;
  align-self: baseline;
  font-size: 11px;
  line-height: inherit;
  font-weight: var(--tps-fw-medium, 500);
  letter-spacing: 0;
  color: var(--tps-text-faint, var(--text-subtle, #888)) !important;
  white-space: nowrap;
}

.tps-plugin-header-lede {
  font-size: 14px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted, var(--text-muted, #9a9a9a));
  margin: 0 0 var(--tps-space-4, 16px);
}

.tps-plugin-header-attr {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--tps-space-3, 12px);
  width: 100%;
  font-size: 11.5px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted, var(--text-muted, #888));
  margin: 0;
}

.tps-plugin-header-link-group {
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
}

.tps-plugin-header-icon,
.tps-plugin-header-attr .ti {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  font-size: 12px;
  line-height: 1;
  color: var(--tps-text-muted, var(--text-muted, #888));
  transform: translateY(2px);
}

.tps-plugin-header-iconify {
  background-color: currentColor;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.tps-plugin-header-iconify-github {
  --tps-iconify-github: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E");
  -webkit-mask-image: var(--tps-iconify-github);
  mask-image: var(--tps-iconify-github);
}

.tps-plugin-header-link {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              text-decoration-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              filter var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-link--blue,
.tps-plugin-header-link--blue:hover {
  color: #03bdf2;
  text-decoration-color: #03bdf2;
}

.tps-plugin-header-link--pink,
.tps-plugin-header-link--pink:hover {
  color: #f067a6;
  text-decoration-color: #f067a6;
}

.tps-plugin-header-link--muted,
.tps-plugin-header-link--muted:hover {
  color: var(--tps-text-faint, var(--text-subtle, #888)) !important;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
}

.tps-plugin-header-link:hover {
  text-decoration: none;
  text-decoration-color: transparent;
  filter: brightness(1.2);
}

/* \u2500\u2500 Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-section {
  padding: var(--tps-space-6) 0 0;
}

.tps-section:first-of-type {
  padding-top: 0;
}

.tps-section + .tps-section {
  border-top: 1px solid var(--tps-divider);
}

.tps-section-label {
  display: block;
  font-size: var(--tps-fs-section);
  line-height: var(--tps-lh-tight);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-2);
}

.tps-section-hint {
  font-size: var(--tps-fs-hint);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

.tps-section-body {
  display: flex;
  flex-direction: column;
  gap: var(--tps-space-3);
  margin-top: var(--tps-space-2);
}

.tps-section-body:first-child {
  margin-top: 0;
}

/* When the body is full of list rows (mode rows), drop the gap and the top
   margin entirely so the first row's hover background sits flush under the
   section label and adjacent rows tile with no dead space between them. */
.tps-section-body:has(> .tps-list-row),
.tps-section-body:has(> .tps-opt) {
  margin-top: 0;
  gap: 0;
}

/* Collapsible variant: header is a button, body is hidden when closed */

.tps-section--collapsible > .tps-section-header {
  display: flex;
  align-items: center;
  gap: var(--tps-space-2);
  width: 100%;
  padding: 0;
  margin: 0 0 var(--tps-space-2);
  background: transparent;
  border: 0;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.tps-section--collapsible > .tps-section-header:hover .tps-section-label {
  color: var(--tps-text);
}

.tps-section--collapsible > .tps-section-header .tps-section-label {
  margin: 0;
}

.tps-section-chev {
  display: inline-block;
  width: 10px;
  font-size: 10px;
  line-height: 1;
  color: var(--tps-text-faint);
  transition: transform var(--tps-dur-base) var(--tps-ease-out);
}

.tps-section--collapsible[data-open="true"] .tps-section-chev {
  transform: rotate(90deg);
}

.tps-section-summary {
  margin-left: auto;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  font-weight: var(--tps-fw-regular);
  letter-spacing: 0;
  text-transform: none;
}

.tps-section--collapsible[data-open="false"] > .tps-section-body {
  display: none;
}

/* \u2500\u2500 Option row (checkbox / radio + label + desc) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-opt {
  display: grid;
  grid-template-columns: 18px 1fr;
  column-gap: var(--tps-space-3);
  row-gap: 2px;
  align-items: start;
  padding: 6px 10px;
  margin: 0 -10px;
  border-radius: var(--tps-radius-md);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

/* Stack option rows tight so the hover background of one meets the next
   without a visible gap above. Outer section gap is handled by the section
   itself, not by spacing between opts. */
.tps-section-body > .tps-opt + .tps-opt {
  margin-top: 0;
}
.tps-section-body:has(> .tps-opt) {
  gap: 0;
}

.tps-opt:hover {
  background: var(--tps-bg-hover);
}

.tps-opt > input[type="checkbox"],
.tps-opt > input[type="radio"] {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: var(--tps-accent);
  cursor: pointer;
}

.tps-opt > .tps-opt-label {
  grid-column: 2;
  grid-row: 1;
  font-size: var(--tps-fs-label);
  line-height: var(--tps-lh-base);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text);
  transition: color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-opt > .tps-opt-desc {
  grid-column: 2;
  grid-row: 2;
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
}

.tps-opt > input:checked ~ .tps-opt-label {
  color: var(--tps-accent);
}

/* \u2500\u2500 Numeric stepper \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-num {
  display: flex;
  align-items: center;
  gap: var(--tps-space-1);
}

.tps-num-label {
  flex: 0 0 auto;
  min-width: 0;
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  margin-right: var(--tps-space-2);
}

.tps-num-step,
.tps-num-input,
.tps-num-reset {
  font-family: inherit;
  font-size: var(--tps-fs-button);
  height: var(--tps-control-h-sm);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm);
  background: transparent;
  color: var(--tps-text);
  transition: border-color var(--tps-dur-fast) var(--tps-ease-out),
              background-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-num-step {
  width: var(--tps-num-step-w);
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.tps-num-step:hover {
  border-color: var(--tps-border);
  background: var(--tps-bg-hover);
}

.tps-num-step:active {
  background: var(--tps-bg-active);
}

.tps-num-input {
  width: var(--tps-input-w);
  padding: 0 var(--tps-space-2);
  background: var(--tps-bg-input);
  text-align: center;
  font-variant-numeric: tabular-nums;
  -moz-appearance: textfield;
}

.tps-num-input::-webkit-outer-spin-button,
.tps-num-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.tps-num-input:focus {
  outline: none;
  border-color: var(--tps-accent);
}

.tps-num-unit {
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  margin: 0 var(--tps-space-2);
}

.tps-num-reset {
  font-size: 11px;
  color: var(--tps-text-muted);
  padding: 0 var(--tps-space-2);
  cursor: pointer;
}

.tps-num-reset:hover {
  color: var(--tps-text);
  border-color: var(--tps-border);
}

.tps-num-reset[hidden] {
  display: none !important;
}

/* Stacked layout: label / control row in a 200px / 1fr grid */

.tps-num-grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  column-gap: var(--tps-space-3);
  row-gap: var(--tps-space-2);
}

.tps-num-grid > .tps-num-label {
  margin: 0;
  text-align: left;
}

.tps-num-grid > .tps-num {
  justify-self: start;
}

/* \u2500\u2500 Slider row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-slider {
  display: grid;
  grid-template-columns: 90px 1fr 56px auto;
  align-items: center;
  gap: var(--tps-space-3);
}

.tps-slider-label {
  font-size: var(--tps-fs-section);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tps-slider-input {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-slider-input::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-divider);
}

.tps-slider-input::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-divider);
}

.tps-slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid rgba(0, 0, 0, 0.3);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-slider-input::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid rgba(0, 0, 0, 0.3);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-input:active::-webkit-slider-thumb {
  cursor: grabbing;
}

.tps-slider-value {
  font-family: var(--tps-font-mono);
  font-size: var(--tps-fs-value);
  color: var(--tps-text);
  text-align: right;
  font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Swatch + grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-swatch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--tps-swatch-size));
  gap: var(--tps-space-2) 6px;
}

.tps-swatch {
  width: var(--tps-swatch-size);
  height: var(--tps-swatch-size);
  border-radius: var(--tps-radius-circle);
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
  transition: transform var(--tps-dur-fast) var(--tps-ease-out),
              box-shadow var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-swatch:hover {
  transform: scale(1.1);
}

.tps-swatch[aria-pressed="true"] {
  box-shadow: 0 0 0 2px var(--tps-accent);
}

/* \u2500\u2500 List rows \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-list {
  display: flex;
  flex-direction: column;
}

.tps-list-header {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  font-size: var(--tps-fs-list-header);
  font-weight: var(--tps-fw-bold);
  letter-spacing: var(--tps-ls-list);
  text-transform: uppercase;
  color: var(--tps-text-faint);
}

.tps-list-row {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-list-row:last-child {
  border-bottom: 0;
}

.tps-list-row:hover {
  background: var(--tps-bg-hover);
}

.tps-list-name {
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* \u2500\u2500 Tabs / segmented control \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-tabs {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-1);
  padding: 0;
}

.tps-tab {
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-2);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text-muted);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-tab:hover {
  background: var(--tps-bg-hover);
  color: var(--tps-text);
}

.tps-tab[aria-pressed="true"],
.tps-tab[aria-selected="true"] {
  background: var(--tps-accent-soft);
  color: var(--tps-accent);
  border-color: color-mix(in srgb, var(--tps-accent) 50%, transparent);
}

/* \u2500\u2500 Buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--tps-space-1);
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-3);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  border-radius: var(--tps-radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-button--md { height: var(--tps-control-h-md); padding: 0 var(--tps-space-4); }

.tps-button--primary {
  background: var(--tps-accent);
  color: #0b0b0b;
}

.tps-button--primary:hover {
  filter: brightness(1.08);
}

.tps-button--ghost {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text);
}

.tps-button--ghost:hover {
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-button--danger {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text-muted);
}

.tps-button--danger:hover {
  background: var(--tps-danger-soft);
  border-color: color-mix(in srgb, var(--tps-danger) 40%, transparent);
  color: var(--tps-danger);
}

/* \u2500\u2500 Focus rings (custom controls only \u2014 native inputs use accent-color) \u2500 */

.tps-tab:focus-visible,
.tps-button:focus-visible,
.tps-num-step:focus-visible,
.tps-num-reset:focus-visible,
.tps-swatch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

/* \u2500\u2500 Inset card variant (rare \u2014 for palette-picker body, etc.) \u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-card {
  padding: var(--tps-space-3);
  border-radius: var(--tps-radius-lg);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
}
`;

  // ../../_panel-system/helpers.js
  var PANEL_CSS = tokens_default + "\n" + components_default;
  function h(tag, props, ...children) {
    const el = document.createElement(tag);
    const dom = (
      /** @type {any} */
      el
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class" || k === "className") {
          el.className = v;
        } else if (k === "style" && typeof v === "object") {
          Object.assign(el.style, v);
        } else if (k === "dataset" && typeof v === "object") {
          for (const dk in v) el.dataset[dk] = v[dk];
        } else if (k.startsWith("on") && typeof v === "function") {
          el.addEventListener(k.slice(2).toLowerCase(), v);
        } else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            el.setAttribute(k, v);
          }
        } else {
          el.setAttribute(k, v === true ? "" : String(v));
        }
      }
    }
    appendChildren(el, children);
    return el;
  }
  __name(h, "h");
  function appendChildren(parent, children) {
    for (const c of children) {
      if (c == null || c === false) continue;
      if (Array.isArray(c)) {
        appendChildren(parent, c);
        continue;
      }
      parent.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
  }
  __name(appendChildren, "appendChildren");
  function panel({ pluginClass } = {}, children = []) {
    const cls = ["tps-panel", pluginClass].filter(Boolean).join(" ");
    return h("div", { class: cls }, ...children);
  }
  __name(panel, "panel");
  function pluginHeader({ title: heading, lede: ledeText, icon = "", version = "1.0" }) {
    const iconClass = icon ? icon.startsWith("ti-") ? icon : `ti-${icon}` : "";
    return h(
      "div",
      { class: "tps-plugin-header" },
      iconClass ? h(
        "div",
        { class: "tps-plugin-header-logo", "aria-hidden": "true" },
        h("i", { class: `ti ${iconClass} tps-plugin-header-logo-icon`, "aria-hidden": "true" })
      ) : null,
      h("h1", { class: "tps-plugin-header-title" }, heading),
      ledeText ? h("p", { class: "tps-plugin-header-lede" }, ledeText) : null,
      h(
        "p",
        { class: "tps-plugin-header-attr" },
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-link tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--blue",
            href: "https://akaready.com",
            target: "_blank",
            rel: "noopener noreferrer"
          }, "@akaready")
        ),
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-coffee tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--pink",
            href: "https://buymeacoffee.com/akaready",
            target: "_blank",
            rel: "noopener noreferrer"
          }, "buy me a coffee")
        ),
        version ? h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("span", { class: "tps-plugin-header-icon tps-plugin-header-iconify tps-plugin-header-iconify-github", "aria-hidden": "true" }),
          h("a", { class: "tps-plugin-header-link tps-plugin-header-link--muted tps-plugin-header-version", href: "https://github.com/akaready", target: "_blank", rel: "noopener noreferrer" }, `v${version}`)
        ) : null
      )
    );
  }
  __name(pluginHeader, "pluginHeader");

  // ../../_panel-system/theme-vars.js
  var DEFAULT_THEME_SOURCES = [
    ":root",
    "body",
    ".sidebar--icons",
    ".sidebar",
    ".tps-panel"
  ];
  var COLOR_NAME_HINT = /(^|-)(accent|primary|secondary|text|muted|subtle|border|bg|background|hover|active|input|enum|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|foreground|surface|card|panel|danger|warning|success)($|-)/;
  var CURRENT_THEME_VARS = Object.freeze([
    // Accent / brand (Thymer's primary is --logo-color)
    { name: "--logo-color", label: "Accent" },
    { name: "--accent-color", label: "Accent" },
    { name: "--theme-accent", label: "Theme accent" },
    { name: "--color-accent", label: "Color accent" },
    { name: "--color-primary", label: "Primary" },
    { name: "--primary", label: "Primary" },
    { name: "--accent", label: "Accent" },
    // Text
    { name: "--color-text-900", label: "Text" },
    { name: "--text-default", label: "Text" },
    { name: "--text-muted", label: "Muted text" },
    { name: "--text-subtle", label: "Subtle text" },
    { name: "--text-strong", label: "Strong text" },
    { name: "--text-status-offline", label: "Offline text" },
    { name: "--text-disabled", label: "Disabled text" },
    { name: "--cmdpal-hilite-color", label: "Highlight" },
    // Tag / pill
    { name: "--tag-fg-color", label: "Tag" },
    // Surfaces
    { name: "--bg-default", label: "Background" },
    { name: "--bg-hover", label: "Hover background" },
    { name: "--bg-active", label: "Active background" },
    { name: "--input-bg", label: "Input background" },
    { name: "--panel-bg-color", label: "Panel background" },
    // Borders / dividers
    { name: "--border-default", label: "Border" },
    { name: "--border-subtle", label: "Subtle border" },
    { name: "--border-hover", label: "Hover border" },
    { name: "--border-strong", label: "Strong border" },
    { name: "--sidebar-divider-color", label: "Sidebar divider" },
    { name: "--divider-color", label: "Divider" },
    { name: "--thin-divider-color", label: "Thin divider" },
    { name: "--faint-divider-color", label: "Faint divider" },
    { name: "--titlebar-border-color", label: "Titlebar border" },
    { name: "--selection-border", label: "Selection border" },
    // Enum/tag color family (Thymer's canonical tag palette — full 18 hues)
    { name: "--enum-red-fg", label: "Red" },
    { name: "--enum-orange-fg", label: "Orange" },
    { name: "--enum-amber-fg", label: "Amber" },
    { name: "--enum-yellow-fg", label: "Yellow" },
    { name: "--enum-lime-fg", label: "Lime" },
    { name: "--enum-green-fg", label: "Green" },
    { name: "--enum-teal-fg", label: "Teal" },
    { name: "--enum-cyan-fg", label: "Cyan" },
    { name: "--enum-sky-fg", label: "Sky" },
    { name: "--enum-blue-fg", label: "Blue" },
    { name: "--enum-indigo-fg", label: "Indigo" },
    { name: "--enum-violet-fg", label: "Violet" },
    { name: "--enum-purple-fg", label: "Purple" },
    { name: "--enum-fuchsia-fg", label: "Fuchsia" },
    { name: "--enum-pink-fg", label: "Pink" },
    { name: "--enum-rose-fg", label: "Rose" },
    { name: "--enum-stone-fg", label: "Stone" },
    { name: "--enum-zinc-fg", label: "Zinc" }
  ]);
  function normalizeValue(value) {
    return typeof value === "string" ? value.trim() : "";
  }
  __name(normalizeValue, "normalizeValue");
  function isColorComputedValue(value) {
    return /^(#[0-9a-f]{3,8}|rgba?\(|hsla?\(|color\(|oklch\(|oklab\()/i.test(value.trim());
  }
  __name(isColorComputedValue, "isColorComputedValue");
  function labelFromVarName(name) {
    return name.replace(/^--/, "").replace(/^(color|theme)-/, "").replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
  }
  __name(labelFromVarName, "labelFromVarName");
  function elementOrNull(node) {
    return node instanceof Element ? node : null;
  }
  __name(elementOrNull, "elementOrNull");
  function themeVariableRoots(options = {}) {
    const roots = [];
    const seen = /* @__PURE__ */ new Set();
    const add = /* @__PURE__ */ __name((node) => {
      const el = elementOrNull(node);
      if (!el || seen.has(el)) return;
      seen.add(el);
      roots.push(el);
    }, "add");
    add(document.documentElement);
    add(document.body);
    for (const selector of options.selectors || DEFAULT_THEME_SOURCES) {
      try {
        document.querySelectorAll(selector).forEach(add);
      } catch {
      }
    }
    for (const root of options.roots || []) add(root);
    return roots;
  }
  __name(themeVariableRoots, "themeVariableRoots");
  function readRenderedCssVariables(options = {}) {
    const vars = [];
    for (const root of themeVariableRoots(options)) {
      const styles = getComputedStyle(root);
      const source = root === document.documentElement ? ":root" : root === document.body ? "body" : root.className ? `.${String(root.className).trim().split(/\s+/).join(".")}` : root.tagName.toLowerCase();
      for (let i = 0; i < styles.length; i += 1) {
        const name = styles[i];
        if (!name || !name.startsWith("--")) continue;
        const value = normalizeValue(styles.getPropertyValue(name));
        if (!value) continue;
        vars.push({ name, value, source, root });
      }
    }
    return vars;
  }
  __name(readRenderedCssVariables, "readRenderedCssVariables");
  function resolveRenderedColor(cssColor, root = document.body) {
    const host = elementOrNull(root) || document.body || document.documentElement;
    if (!host) return "";
    const probe = document.createElement("span");
    probe.style.position = "absolute";
    probe.style.pointerEvents = "none";
    probe.style.visibility = "hidden";
    probe.style.color = "transparent";
    host.appendChild(probe);
    const attempts = [cssColor];
    if (cssColor.startsWith("var(")) {
      attempts.push(`rgb(${cssColor})`, `rgba(${cssColor}, 1)`, `hsl(${cssColor})`, `hsla(${cssColor}, 1)`);
    }
    try {
      for (const attempt of attempts) {
        probe.style.color = "";
        probe.style.color = attempt;
        const resolved = getComputedStyle(probe).color;
        if (resolved && resolved !== "rgba(0, 0, 0, 0)" && resolved !== "transparent") return resolved;
      }
    } finally {
      probe.remove();
    }
    return "";
  }
  __name(resolveRenderedColor, "resolveRenderedColor");
  function collectRenderedThemeColors(options = {}) {
    if (options.includeAllNamedColors) return collectAllRenderedColorVariables(options);
    return collectCurrentThemeColors(options);
  }
  __name(collectRenderedThemeColors, "collectRenderedThemeColors");
  function collectCurrentThemeColors(options = {}) {
    const roots = themeVariableRoots(options);
    const rootStyles = roots.map((root) => ({ root, styles: getComputedStyle(root) }));
    const found = [];
    for (const token of CURRENT_THEME_VARS) {
      for (const { root, styles } of rootStyles) {
        const raw = normalizeValue(styles.getPropertyValue(token.name));
        if (!raw) continue;
        const resolved = isColorComputedValue(raw) ? raw : resolveRenderedColor(`var(${token.name})`, root);
        if (!resolved && !isColorComputedValue(raw)) continue;
        found.push({
          name: token.label,
          value: `theme-var:${token.name}`,
          css: resolved || `var(${token.name})`,
          resolved: resolved || raw,
          raw,
          source: token.name
        });
        break;
      }
    }
    const deduped = [];
    const seenColors = /* @__PURE__ */ new Set();
    const accent = chooseThemeAccent(found);
    if (accent) {
      deduped.push({ ...accent, name: "Accent", value: "theme:accent" });
      seenColors.add(accent.resolved);
    }
    for (const item of found) {
      if (seenColors.has(item.resolved)) continue;
      seenColors.add(item.resolved);
      deduped.push(item);
    }
    return deduped;
  }
  __name(collectCurrentThemeColors, "collectCurrentThemeColors");
  function collectAllRenderedColorVariables(options = {}) {
    const found = [];
    const byName = /* @__PURE__ */ new Map();
    for (const item of readRenderedCssVariables(options)) {
      if (byName.has(item.name)) continue;
      byName.set(item.name, item);
    }
    for (const item of byName.values()) {
      const hinted = COLOR_NAME_HINT.test(item.name.toLowerCase());
      const resolved = resolveRenderedColor(`var(${item.name})`, item.root);
      if (!resolved && !hinted) continue;
      if (!resolved && !isColorComputedValue(item.value)) continue;
      found.push({
        name: labelFromVarName(item.name),
        value: `theme-var:${item.name}`,
        css: resolved || `var(${item.name})`,
        resolved: resolved || item.value,
        raw: item.value,
        source: item.name
      });
    }
    const deduped = [];
    const seenColors = /* @__PURE__ */ new Set();
    const accent = chooseThemeAccent(found);
    if (accent) {
      deduped.push({ ...accent, name: "Accent", value: "theme:accent" });
      seenColors.add(accent.resolved);
    }
    for (const item of found) {
      if (seenColors.has(item.resolved)) continue;
      seenColors.add(item.resolved);
      deduped.push(item);
    }
    return deduped;
  }
  __name(collectAllRenderedColorVariables, "collectAllRenderedColorVariables");
  function chooseThemeAccent(colors) {
    const names = ["--logo-color", "--accent-color", "--color-accent", "--theme-accent", "--color-primary", "--accent", "--primary"];
    for (const name of names) {
      const found = colors.find((item) => item.source === name && item.resolved);
      if (found) return found;
    }
    return colors.find((item) => /accent|primary/i.test(item.source) && item.resolved) || null;
  }
  __name(chooseThemeAccent, "chooseThemeAccent");

  // plugin.js
  var PLUGIN_KEY = "sidebarSeperators";
  var MARK_ATTR = "data-plg-sidebar-seperator";
  var PANEL_CLASS = "plg-sidebar-seperators-panel";
  var COLLECTION_COLORS_CLASS = "plg-collection-colors";
  var PANEL_TYPE = "sidebar-seperators-settings";
  var STYLE_ID = "plg-sidebar-seperators-runtime-style";
  var ACTION_BUTTON_CLASS = "plg-sidebar-seperators-action-button";
  var EDIT_BUTTON_CLASS = "plg-sidebar-seperators-edit-button";
  var DELETE_BUTTON_CLASS = "plg-sidebar-seperators-delete-button";
  var ACTION_OVERLAY_CLASS = "plg-sidebar-seperators-action-overlay";
  var ROOT_SELECTOR = ".sidebar--icons, .sidebar";
  var COLLECTION_ROW_SELECTOR = ".sidebar-item-collection[data-guid]";
  var OUTSIDE_HOLD_MS = 3e3;
  var THEME_ACCENT_CSS = "var(--logo-color, var(--accent-color, var(--color-accent, var(--theme-accent, var(--color-primary, #3b82f6)))))";
  var SEPARATOR_COLLECTION_NAME = "\u200B";
  var SIDEBAR_DIVIDER_VAR_VALUE = "theme-var:--sidebar-divider-color";
  var SIDEBAR_DIVIDER_VAR_CSS = "var(--sidebar-divider-color, var(--divider-color, var(--border-default, rgba(127,127,127,0.32))))";
  var BORDER_STYLES = (
    /** @type {const} */
    [
      "solid",
      "dashed",
      "dotted",
      "double",
      "gradient"
    ]
  );
  var ALIGNMENTS = (
    /** @type {const} */
    [
      "left",
      "center",
      "right"
    ]
  );
  var TAILWIND_SHADES = Object.freeze([100, 200, 300, 400, 500, 600, 700, 800, 900]);
  var TAILWIND_FAMILIES = Object.freeze({
    Slate: { 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a" },
    Gray: { 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" },
    Zinc: { 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b" },
    Neutral: { 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717" },
    Red: { 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" },
    Orange: { 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12" },
    Amber: { 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" },
    Yellow: { 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12" },
    Lime: { 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314" },
    Green: { 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d" },
    Emerald: { 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" },
    Teal: { 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a" },
    Cyan: { 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63" },
    Sky: { 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e" },
    Blue: { 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" },
    Indigo: { 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" },
    Violet: { 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" },
    Purple: { 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87" },
    Fuchsia: { 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75" },
    Pink: { 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" },
    Rose: { 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337" }
  });
  var TAILWIND_SWATCHES = Object.freeze([
    { name: "Slate", hex: "#64748b" },
    { name: "Gray", hex: "#6b7280" },
    { name: "Zinc", hex: "#71717a" },
    { name: "Neutral", hex: "#737373" },
    { name: "Red", hex: "#ef4444" },
    { name: "Orange", hex: "#f97316" },
    { name: "Amber", hex: "#f59e0b" },
    { name: "Yellow", hex: "#eab308" },
    { name: "Lime", hex: "#84cc16" },
    { name: "Green", hex: "#22c55e" },
    { name: "Emerald", hex: "#10b981" },
    { name: "Teal", hex: "#14b8a6" },
    { name: "Cyan", hex: "#06b6d4" },
    { name: "Sky", hex: "#0ea5e9" },
    { name: "Blue", hex: "#3b82f6" },
    { name: "Indigo", hex: "#6366f1" },
    { name: "Violet", hex: "#8b5cf6" },
    { name: "Purple", hex: "#a855f7" },
    { name: "Fuchsia", hex: "#d946ef" },
    { name: "Pink", hex: "#ec4899" },
    { name: "Rose", hex: "#f43f5e" }
  ]);
  var TANA_SWATCHES = Object.freeze([
    { name: "White", hex: "#ffffff" },
    { name: "Light", hex: "#d1d5db" },
    { name: "Grey", hex: "#6b7280" },
    { name: "Dark", hex: "#374151" },
    { name: "Pink", hex: "#db2777" },
    { name: "Red", hex: "#b91c1c" },
    { name: "Orange", hex: "#f97316" },
    { name: "Bronze", hex: "#b45309" },
    { name: "Yellow", hex: "#eab308" },
    { name: "Lime", hex: "#65a30d" },
    { name: "Mint", hex: "#34d399" },
    { name: "Steel", hex: "#0369a1" },
    { name: "Blue", hex: "#3b82f6" },
    { name: "Violet", hex: "#5b21b6" },
    { name: "Purple", hex: "#9333ea" },
    { name: "Rose", hex: "#f472b6" }
  ]);
  var COLOR_PALETTE_GROUPS = Object.freeze([
    { id: "tana", name: "Tana", swatches: TANA_SWATCHES },
    { id: "tailwind", name: "Tailwind", swatches: TAILWIND_SWATCHES },
    { id: "pastel", name: "Pastel", swatches: Object.freeze([
      { name: "White", hex: "#ffffff" },
      { name: "Light", hex: "#f3f4f6" },
      { name: "Grey", hex: "#e5e7eb" },
      { name: "Dark", hex: "#cbd5e1" },
      { name: "Blush", hex: "#fecaca" },
      { name: "Peach", hex: "#fed7aa" },
      { name: "Butter", hex: "#fef3c7" },
      { name: "Sage", hex: "#d9f99d" },
      { name: "Mint", hex: "#bbf7d0" },
      { name: "Aqua", hex: "#a5f3fc" },
      { name: "Sky", hex: "#bae6fd" },
      { name: "Lilac", hex: "#e9d5ff" },
      { name: "Pink", hex: "#fbcfe8" },
      { name: "Rose", hex: "#fecdd3" }
    ]) },
    { id: "material", name: "Material", swatches: Object.freeze([
      { name: "White", hex: "#ffffff" },
      { name: "Light", hex: "#e0e0e0" },
      { name: "Grey", hex: "#9e9e9e" },
      { name: "Dark", hex: "#424242" },
      { name: "Red", hex: "#f44336" },
      { name: "Pink", hex: "#e91e63" },
      { name: "Purple", hex: "#9c27b0" },
      { name: "Deep Purple", hex: "#673ab7" },
      { name: "Indigo", hex: "#3f51b5" },
      { name: "Blue", hex: "#2196f3" },
      { name: "Cyan", hex: "#00bcd4" },
      { name: "Teal", hex: "#009688" },
      { name: "Green", hex: "#4caf50" },
      { name: "Lime", hex: "#cddc39" },
      { name: "Yellow", hex: "#ffeb3b" },
      { name: "Amber", hex: "#ffc107" },
      { name: "Orange", hex: "#ff9800" },
      { name: "Deep Orange", hex: "#ff5722" }
    ]) },
    { id: "solarized", name: "Solarized", swatches: Object.freeze([
      { name: "Base 3", hex: "#fdf6e3" },
      { name: "Base 1", hex: "#93a1a1" },
      { name: "Base 01", hex: "#586e75" },
      { name: "Yellow", hex: "#b58900" },
      { name: "Orange", hex: "#cb4b16" },
      { name: "Red", hex: "#dc322f" },
      { name: "Magenta", hex: "#d33682" },
      { name: "Violet", hex: "#6c71c4" },
      { name: "Blue", hex: "#268bd2" },
      { name: "Cyan", hex: "#2aa198" },
      { name: "Green", hex: "#859900" }
    ]) },
    { id: "nord", name: "Nord", swatches: Object.freeze([
      { name: "Snow 6", hex: "#eceff4" },
      { name: "Snow 4", hex: "#d8dee9" },
      { name: "Polar 3", hex: "#4c566a" },
      { name: "Polar 0", hex: "#2e3440" },
      { name: "Frost 7", hex: "#8fbcbb" },
      { name: "Frost 8", hex: "#88c0d0" },
      { name: "Frost 9", hex: "#81a1c1" },
      { name: "Frost 10", hex: "#5e81ac" },
      { name: "Red", hex: "#bf616a" },
      { name: "Orange", hex: "#d08770" },
      { name: "Yellow", hex: "#ebcb8b" },
      { name: "Green", hex: "#a3be8c" },
      { name: "Purple", hex: "#b48ead" }
    ]) },
    { id: "dracula", name: "Dracula", swatches: Object.freeze([
      { name: "Foreground", hex: "#f8f8f2" },
      { name: "Comment", hex: "#6272a4" },
      { name: "Selection", hex: "#44475a" },
      { name: "Background", hex: "#282a36" },
      { name: "Cyan", hex: "#8be9fd" },
      { name: "Green", hex: "#50fa7b" },
      { name: "Yellow", hex: "#f1fa8c" },
      { name: "Orange", hex: "#ffb86c" },
      { name: "Red", hex: "#ff5555" },
      { name: "Pink", hex: "#ff79c6" },
      { name: "Purple", hex: "#bd93f9" }
    ]) }
  ]);
  var THEME_COLORS = Object.freeze([
    { name: "Accent", value: "theme:accent", css: THEME_ACCENT_CSS },
    { name: "Text", value: "var:--text-default", css: "var(--text-default, #cbd5e1)" },
    { name: "Muted text", value: "var:--text-muted", css: "var(--text-muted, rgba(127,127,127,0.72))" },
    { name: "Subtle text", value: "var:--text-subtle", css: "var(--text-subtle, rgba(127,127,127,0.5))" },
    { name: "Border", value: "var:--border-default", css: "var(--border-default, rgba(127,127,127,0.35))" },
    { name: "Subtle border", value: "var:--border-subtle", css: "var(--border-subtle, rgba(127,127,127,0.22))" },
    { name: "Hover border", value: "var:--border-hover", css: "var(--border-hover, rgba(127,127,127,0.45))" },
    { name: "Background", value: "var:--bg-default", css: "var(--bg-default, rgba(127,127,127,0.16))" },
    { name: "Hover bg", value: "var:--bg-hover", css: "var(--bg-hover, rgba(127,127,127,0.12))" },
    { name: "Enum red", value: "var:--enum-red-fg", css: "var(--enum-red-fg, #ef4444)" },
    { name: "Enum orange", value: "var:--enum-orange-fg", css: "var(--enum-orange-fg, #f97316)" },
    { name: "Enum yellow", value: "var:--enum-yellow-fg", css: "var(--enum-yellow-fg, #eab308)" },
    { name: "Enum green", value: "var:--enum-green-fg", css: "var(--enum-green-fg, #22c55e)" },
    { name: "Enum teal", value: "var:--enum-teal-fg", css: "var(--enum-teal-fg, #14b8a6)" },
    { name: "Enum blue", value: "var:--enum-blue-fg", css: "var(--enum-blue-fg, #3b82f6)" },
    { name: "Enum indigo", value: "var:--enum-indigo-fg", css: "var(--enum-indigo-fg, #6366f1)" },
    { name: "Enum violet", value: "var:--enum-violet-fg", css: "var(--enum-violet-fg, #8b5cf6)" },
    { name: "Enum fuchsia", value: "var:--enum-fuchsia-fg", css: "var(--enum-fuchsia-fg, #d946ef)" },
    { name: "Enum pink", value: "var:--enum-pink-fg", css: "var(--enum-pink-fg, #ec4899)" }
  ]);
  var THEME_COLOR_ALIASES = Object.freeze({
    "var:--accent-color": THEME_ACCENT_CSS,
    "var:--color-accent": THEME_ACCENT_CSS,
    "var:--theme-accent": THEME_ACCENT_CSS,
    "var:--color-primary": THEME_ACCENT_CSS
  });
  var DEFAULT_STYLE = Object.freeze({
    borderStyle: "solid",
    color: SIDEBAR_DIVIDER_VAR_VALUE,
    customColor: "#3b82f6",
    thicknessPx: 1,
    doubleGapPx: 2,
    widthPct: 100,
    opacityPct: 100,
    insetPx: 0,
    heightPx: 20,
    offsetYPx: 0,
    alignment: "left",
    gradientPct: 65
  });
  var Plugin = class extends AppPlugin {
    static {
      __name(this, "Plugin");
    }
    /** @type {PluginCommandPaletteCommand | null} */
    _settingsCommand = null;
    /** @type {MutationObserver | null} */
    _observer = null;
    /** @type {string[]} */
    _handlerIds = [];
    /** @type {Map<string, SeparatorEntry>} */
    _separators = /* @__PURE__ */ new Map();
    /** @type {SeparatorStyle} */
    _defaultStyle = { ...DEFAULT_STYLE };
    /** @type {HTMLElement | null} */
    _panelEl = null;
    /** @type {string | null} */
    _activeOverrideGuid = null;
    /** @type {ReturnType<typeof setTimeout> | null} */
    _refreshTimer = null;
    /** @type {ReturnType<typeof setTimeout> | null} */
    _removeTimer = null;
    /** @type {HTMLElement | null} */
    _dragRow = null;
    /** @type {string | null} */
    _dragGuid = null;
    /** @type {{x: number, y: number}} */
    _lastDragPoint = { x: 0, y: 0 };
    /** @type {EventListener | null} */
    _boundDragStart = null;
    /** @type {EventListener | null} */
    _boundDrag = null;
    /** @type {EventListener | null} */
    _boundDragEnd = null;
    /** @type {EventListener | null} */
    _boundSeparatorActivate = null;
    /** @type {Map<string, ReturnType<typeof setTimeout>>} */
    _separatorSaveTimers = /* @__PURE__ */ new Map();
    /** @type {Map<string, SeparatorStyle | null>} */
    _pendingSeparatorStyles = /* @__PURE__ */ new Map();
    /** @type {Map<string, SeparatorStyle | null>} */
    _pendingCollapsedSeparatorStyles = /* @__PURE__ */ new Map();
    /** @type {Set<string>} */
    _nameFixGuids = /* @__PURE__ */ new Set();
    /** @type {HTMLElement | null} */
    _hoverActionOverlayEl = null;
    /** @type {ReturnType<typeof setTimeout> | null} */
    _hoverActionOverlayHideTimer = null;
    /** @type {HTMLElement | null} */
    _activeActionOverlayEl = null;
    /** @type {ReturnType<typeof requestAnimationFrame> | null} */
    _activeOverlayPositionRaf = null;
    /** @type {(() => void) | null} */
    _boundReposition = null;
    _sectionCollapsed = { design: false, color: false, palettes: false };
    _paletteId = "tailwind";
    _tailwindShade = 500;
    /** @type {Record<string, boolean>} */
    _paletteRowRevealed = {};
    _customOpen = false;
    /** @type {string | null} */
    _customGuid = null;
    /** @type {string | null} */
    _draftHex = null;
    /** @type {'HEX' | 'RGB' | 'HSL'} */
    _draftFormat = "HEX";
    /** @type {{name: string, value: string, css: string, resolved: string, raw: string, source: string}[]} */
    _themeColors = [];
    /** @type {number} */
    _themeColorsReadAt = 0;
    /** @type {ResizeObserver | null} */
    _panelResizeObserver = null;
    onLoad() {
      this._defaultStyle = this._normalizeStyle(DEFAULT_STYLE);
      this._activeOverrideGuid = null;
      this.ui.injectCSS(PANEL_CSS);
      this._injectCSS();
      this._ensureRuntimeStyle();
      this._refreshThemeColors(true);
      this._writeRuntimeStyle();
      this._settingsCommand = this.ui.addCommandPaletteCommand({
        label: "Plugin: Sidebar Seperators",
        icon: "settings",
        onSelected: /* @__PURE__ */ __name(() => this._openPanel(), "onSelected")
      });
      this.ui.registerCustomPanelType(PANEL_TYPE, (pluginPanel) => {
        try {
          pluginPanel.setTitle("Sidebar Seperators Settings");
        } catch {
        }
        const root = pluginPanel.getElement();
        if (!root) return;
        this._panelEl = root;
        if (this._panelResizeObserver) this._panelResizeObserver.disconnect();
        this._panelResizeObserver = new ResizeObserver(() => {
          if (this._panelEl) requestAnimationFrame(() => this._checkPaletteOverflow());
        });
        this._panelResizeObserver.observe(root);
        this._renderPanel();
        this._markSidebarRows();
      });
      this._handlerIds = [];
      try {
        this._handlerIds.push(this.events.on("panel.closed", () => this._scheduleRefresh()));
        this._handlerIds.push(this.events.on("panel.navigated", () => this._scheduleRefresh()));
      } catch {
      }
      this._boundDragStart = (event) => {
        if (event instanceof DragEvent) this._onDragStart(event);
      };
      this._boundDrag = (event) => {
        if (event instanceof DragEvent) this._onDrag(event);
      };
      this._boundDragEnd = () => this._finishDrag(false);
      this._boundSeparatorActivate = (event) => this._onSeparatorActivate(event);
      document.addEventListener("dragstart", this._boundDragStart, true);
      document.addEventListener("drag", this._boundDrag, true);
      document.addEventListener("dragend", this._boundDragEnd, true);
      document.addEventListener("click", this._boundSeparatorActivate, true);
      document.addEventListener("dblclick", this._boundSeparatorActivate, true);
      this._observer = new MutationObserver((mutations) => this._onMutations(mutations));
      if (document.body) this._observer.observe(document.body, { childList: true, subtree: true });
      this._refreshSeparators();
    }
    onUnload() {
      if (this._settingsCommand) {
        this._settingsCommand.remove();
        this._settingsCommand = null;
      }
      if (this._observer) {
        this._observer.disconnect();
        this._observer = null;
      }
      if (this._panelResizeObserver) {
        this._panelResizeObserver.disconnect();
        this._panelResizeObserver = null;
      }
      if (this._refreshTimer) {
        clearTimeout(this._refreshTimer);
        this._refreshTimer = null;
      }
      for (const id of this._handlerIds) {
        try {
          this.events.off(id);
        } catch {
        }
      }
      this._handlerIds = [];
      for (const timer of this._separatorSaveTimers.values()) clearTimeout(timer);
      this._separatorSaveTimers.clear();
      this._pendingSeparatorStyles.clear();
      this._pendingCollapsedSeparatorStyles.clear();
      if (this._boundDragStart) document.removeEventListener("dragstart", this._boundDragStart, true);
      if (this._boundDrag) document.removeEventListener("drag", this._boundDrag, true);
      if (this._boundDragEnd) document.removeEventListener("dragend", this._boundDragEnd, true);
      if (this._boundSeparatorActivate) {
        document.removeEventListener("click", this._boundSeparatorActivate, true);
        document.removeEventListener("dblclick", this._boundSeparatorActivate, true);
      }
      this._boundDragStart = null;
      this._boundDrag = null;
      this._boundDragEnd = null;
      this._boundSeparatorActivate = null;
      this._finishDrag(false);
      if (this._boundReposition) {
        window.removeEventListener("scroll", this._boundReposition, true);
        window.removeEventListener("resize", this._boundReposition);
        this._boundReposition = null;
      }
      if (this._activeOverlayPositionRaf) {
        cancelAnimationFrame(this._activeOverlayPositionRaf);
        this._activeOverlayPositionRaf = null;
      }
      this._hideHoverActionOverlay();
      this._hideActiveActionOverlay();
      document.querySelectorAll(`[${MARK_ATTR}]`).forEach((node) => node.removeAttribute(MARK_ATTR));
      document.querySelectorAll(`.plg-sidebar-seperators-poof, .plg-sidebar-seperators-hold, .${ACTION_BUTTON_CLASS}, .${ACTION_OVERLAY_CLASS}`).forEach((node) => node.remove());
      const style = document.getElementById(STYLE_ID);
      if (style) style.remove();
      this._panelEl = null;
    }
    async _addSeparator() {
      let collection = null;
      try {
        collection = await this.data.createCollection();
      } catch {
        collection = null;
      }
      if (!collection) {
        this._toast("Separator was not created.");
        return;
      }
      const conf = collection.getConfiguration ? collection.getConfiguration() : null;
      if (!conf) {
        this._toast("Separator was created, but could not be configured.");
        return;
      }
      conf.name = SEPARATOR_COLLECTION_NAME;
      conf.icon = "layout-list";
      conf.description = "Sidebar separator created by Sidebar Seperators.";
      conf.show_cmdpal_items = false;
      conf.show_sidebar_items = false;
      conf.home = false;
      conf.custom = {
        ...conf.custom || {},
        [PLUGIN_KEY]: {
          isSeparator: true,
          version: 1,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          style: this._normalizeStyle(this._defaultStyle),
          collapsedStyle: this._normalizeStyle(this._defaultStyle)
        }
      };
      try {
        await collection.saveConfiguration(conf);
        const guid = collection.getGuid();
        this._separators.set(collection.getGuid(), {
          collection,
          guid,
          name: conf.name,
          style: this._normalizeStyle(this._defaultStyle),
          collapsedStyle: this._normalizeStyle(this._defaultStyle)
        });
        this._activeOverrideGuid = guid;
        this._writeRuntimeStyle();
        this._markSidebarRows();
        this._scheduleRefresh();
        this._renderPanel();
        this._toast("Separator added.");
      } catch {
        this._toast("Separator was created, but settings were not saved.");
      }
    }
    async _openPanel() {
      if (this._panelEl && document.contains(this._panelEl)) return;
      const active = this.ui.getActivePanel && this.ui.getActivePanel();
      if (active) {
        active.navigateToCustomType(PANEL_TYPE);
        return;
      }
      const panel2 = await this.ui.createPanel();
      if (panel2) panel2.navigateToCustomType(PANEL_TYPE);
    }
    _renderPanel() {
      if (!this._panelEl) return;
      this._refreshThemeColors();
      const selected = this._activeOverrideGuid ? this._separators.get(this._activeOverrideGuid) || null : null;
      const activeStyle = selected && selected.style ? selected.style : this._defaultStyle;
      const body = [
        pluginHeader({
          title: "Sidebar Seperators",
          lede: "Create movable sidebar separators and edit the selected one.",
          icon: "ti-layout-list",
          version: "1.0"
        }),
        this._sidebarPreview(activeStyle, selected),
        h(
          "div",
          { class: `${PANEL_CLASS}__top-actions` },
          h("button", { type: "button", class: `${PANEL_CLASS}__primary`, onClick: /* @__PURE__ */ __name(() => this._addSeparator(), "onClick") }, "Add New Seperator")
        )
      ];
      if (!selected) {
        body.push(h(
          "div",
          { class: `${PANEL_CLASS}__empty-state` },
          h("p", { class: `${PANEL_CLASS}__helper` }, "Select an existing sidebar seperator's pencil icon while this panel is open to edit it, or use Add New Seperator above.")
        ));
      } else {
        body.push(this._renderDesignSection(selected));
        body.push(this._renderColorSection(activeStyle, selected));
        body.push(this._renderPalettesSection());
      }
      this._panelEl.replaceChildren(panel({ pluginClass: PANEL_CLASS }, body));
      this._markSidebarRows();
      requestAnimationFrame(() => this._checkPaletteOverflow());
    }
    /** @param {boolean=} force */
    _refreshThemeColors(force = false) {
      const now = Date.now();
      if (!force && this._themeColors.length && now - this._themeColorsReadAt < 1500) return;
      const roots = [
        this._panelEl,
        document.querySelector(".sidebar--icons"),
        document.querySelector(".sidebar")
      ];
      const colors = collectRenderedThemeColors({ roots });
      this._themeColorsReadAt = now;
      this._themeColors = colors.length ? colors : THEME_COLORS.map((item) => ({
        ...item,
        resolved: item.css,
        raw: item.css,
        source: item.value.replace(/^var:/, "")
      }));
    }
    /**
     * @param {SeparatorEntry} selected
     */
    _renderDesignSection(selected) {
      const expandedStyle = selected.style ? selected.style : this._defaultStyle;
      const collapsedStyle = selected.collapsedStyle ? selected.collapsedStyle : expandedStyle;
      return this._collapsibleSection("design", "Design", () => {
        const summary = h("span", { class: `${PANEL_CLASS}__section-summary` });
        if (this._sectionCollapsed.design) {
          summary.textContent = `${expandedStyle.borderStyle}/${collapsedStyle.borderStyle} \xB7 ${expandedStyle.widthPct}%/${collapsedStyle.widthPct}%`;
        }
        return summary;
      }, () => h(
        "div",
        { class: `${PANEL_CLASS}__design-columns` },
        h(
          "div",
          { class: `${PANEL_CLASS}__design-column` },
          h("div", { class: `${PANEL_CLASS}__state-title` }, "Expanded"),
          this._styleEditor(expandedStyle, (next, render) => this._setActiveStyle(next, render), `sep-expanded-${selected.guid}`, () => this._activeStyleForEdit(expandedStyle))
        ),
        h(
          "div",
          { class: `${PANEL_CLASS}__design-column` },
          h("div", { class: `${PANEL_CLASS}__state-title` }, "Collapsed"),
          this._styleEditor(collapsedStyle, (next, render) => this._setActiveCollapsedStyle(next, render), `sep-collapsed-${selected.guid}`, () => this._activeCollapsedStyleForEdit(collapsedStyle))
        )
      ));
    }
    /**
     * @param {SeparatorStyle} style
     * @param {SeparatorEntry} selected
     */
    _renderColorSection(style, selected) {
      return this._collapsibleSection("color", "Color", () => {
        const summary = h("span", { class: `${PANEL_CLASS}__section-summary` });
        if (this._sectionCollapsed.color) summary.textContent = this._colorSummary(style);
        return summary;
      }, () => this._colorPicker(style, (next, render) => this._setActiveColorStyle(next, render), `sep-color-${selected.guid}`));
    }
    _renderPalettesSection() {
      return this._collapsibleSection("palettes", "Palettes", () => {
        const summary = h("span", { class: `${PANEL_CLASS}__section-summary` });
        if (this._sectionCollapsed.palettes) {
          summary.textContent = this._activePalette().name;
        }
        return summary;
      }, () => this._renderPaletteSelector());
    }
    /**
     * @param {'design' | 'color' | 'palettes'} key
     * @param {string} label
     * @param {() => HTMLElement} renderSummary
     * @param {() => HTMLElement} renderBody
     */
    _collapsibleSection(key, label, renderSummary, renderBody) {
      const collapsed = !!this._sectionCollapsed[key];
      const wrap = h("section", { class: "tps-section tps-section--collapsible", dataset: { open: String(!collapsed) } });
      const header = h(
        "button",
        {
          type: "button",
          class: "tps-section-header",
          "aria-expanded": String(!collapsed),
          title: collapsed ? "Expand" : "Collapse",
          onClick: /* @__PURE__ */ __name(() => {
            this._sectionCollapsed[key] = !collapsed;
            this._renderPanel();
          }, "onClick")
        },
        h("span", { class: "tps-section-chev", "aria-hidden": "true" }, "\u25B8"),
        h("span", { class: "tps-section-label" }, label),
        h("span", { class: "tps-section-summary" }, renderSummary())
      );
      wrap.appendChild(header);
      wrap.appendChild(h("div", { class: "tps-section-body" }, renderBody()));
      return wrap;
    }
    /**
     * @param {SeparatorStyle} style
     * @param {SeparatorEntry | null} selected
     */
    _sidebarPreview(style, selected) {
      const line = this._lineElement(`${PANEL_CLASS}__line`, style);
      line.setAttribute("data-plg-ss-live-line", "1");
      const root = h(
        "div",
        { class: `${PANEL_CLASS}__preview` },
        h("div", { class: `${PANEL_CLASS}__preview-rail` }, line)
      );
      this._applyStyleVars(root, style);
      return root;
    }
    /**
     * @param {SeparatorStyle} style
     * @param {(next: SeparatorStyle, render?: boolean) => void} onChange
     * @param {string} scope
     * @param {() => SeparatorStyle=} getCurrent
     */
    _styleEditor(style, onChange, scope, getCurrent) {
      const current = /* @__PURE__ */ __name(() => getCurrent ? getCurrent() : this._activeStyleForEdit(style), "current");
      return h(
        "div",
        { class: `${PANEL_CLASS}__editor` },
        h(
          "div",
          { class: `${PANEL_CLASS}__field` },
          h("span", { class: `${PANEL_CLASS}__field-label` }, "Border"),
          this._segmented(BORDER_STYLES, style.borderStyle, (value) => {
            onChange(this._normalizeStyle({ ...current(), borderStyle: value }), true);
          })
        ),
        h(
          "div",
          { class: `${PANEL_CLASS}__field` },
          h("span", { class: `${PANEL_CLASS}__field-label` }, "Align"),
          this._segmented(ALIGNMENTS, style.alignment, (value) => {
            onChange(this._normalizeStyle({ ...current(), alignment: value }), true);
          })
        ),
        style.borderStyle === "gradient" ? this._sliderField("Gradient", style.gradientPct, 5, 95, "%", (value) => onChange(this._normalizeStyle({ ...current(), gradientPct: value }))) : null,
        this._numberField("Thickness", style.thicknessPx, 0.5, 8, "px", (value) => onChange(this._normalizeStyle({ ...current(), thicknessPx: value }), false), 0.5),
        style.borderStyle === "double" ? this._numberField("Double gap", style.doubleGapPx, 0.5, 8, "px", (value) => onChange(this._normalizeStyle({ ...current(), doubleGapPx: value }), false), 0.5) : null,
        this._numberField("Width", style.widthPct, 10, 100, "%", (value) => onChange(this._normalizeStyle({ ...current(), widthPct: value }))),
        this._numberField("Opacity", style.opacityPct, 10, 100, "%", (value) => onChange(this._normalizeStyle({ ...current(), opacityPct: value }))),
        this._numberField("Side inset", style.insetPx, 0, 36, "px", (value) => onChange(this._normalizeStyle({ ...current(), insetPx: value }))),
        this._numberField("Row height", style.heightPx, 12, 42, "px", (value) => onChange(this._normalizeStyle({ ...current(), heightPx: value }))),
        this._numberField("Y offset", style.offsetYPx, -16, 16, "px", (value) => onChange(this._normalizeStyle({ ...current(), offsetYPx: value })))
      );
    }
    /**
     * @param {string} label
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @param {string} unit
     * @param {(value: number) => void} onChange
     */
    _sliderField(label, value, min, max, unit, onChange) {
      return h(
        "label",
        { class: `${PANEL_CLASS}__slider` },
        h("span", { class: `${PANEL_CLASS}__field-label` }, label),
        h("input", {
          type: "range",
          min,
          max,
          step: 1,
          value: String(value),
          onInput: /* @__PURE__ */ __name((event) => {
            const target = (
              /** @type {HTMLInputElement} */
              event.target
            );
            const next = this._clampInt(target.value, min, max, value);
            const valueEl = target.parentElement?.querySelector(`.${PANEL_CLASS}__slider-value`);
            if (valueEl) valueEl.textContent = `${next}${unit}`;
            onChange(next);
          }, "onInput")
        }),
        h("span", { class: `${PANEL_CLASS}__slider-value` }, `${value}${unit}`)
      );
    }
    /**
     * @param {readonly string[]} options
     * @param {string} active
     * @param {(value: string) => void} onChange
     */
    _segmented(options, active, onChange) {
      return h(
        "div",
        { class: `${PANEL_CLASS}__segmented`, role: "group" },
        ...options.map((value) => h("button", {
          type: "button",
          class: `${PANEL_CLASS}__seg ${value === active ? "is-active" : ""}`,
          "aria-pressed": String(value === active),
          onClick: /* @__PURE__ */ __name((event) => {
            event.preventDefault();
            onChange(value);
          }, "onClick")
        }, value))
      );
    }
    /**
     * @param {string} label
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @param {string} unit
     * @param {(value: number) => void} onChange
     * @param {number=} step
     */
    _numberField(label, value, min, max, unit, onChange, step = 1) {
      const parseDraft = /* @__PURE__ */ __name((raw) => {
        const trimmed = raw.trim();
        if (trimmed === "" || trimmed === "-" || trimmed === "+") return null;
        const n = Number(trimmed);
        return Number.isFinite(n) ? n : null;
      }, "parseDraft");
      const commit = /* @__PURE__ */ __name(() => {
        const next = this._clampNumber(input.value, min, max, value, step);
        input.value = this._formatNumber(next);
        onChange(next);
      }, "commit");
      const input = h("input", {
        type: "number",
        min,
        max,
        step,
        value: this._formatNumber(value),
        onInput: /* @__PURE__ */ __name((event) => {
          const target = (
            /** @type {HTMLInputElement} */
            event.target
          );
          const next = parseDraft(target.value);
          if (next === null || next < min || next > max) return;
          onChange(this._clampNumber(next, min, max, value, step));
        }, "onInput"),
        onChange: commit,
        onKeyDown: /* @__PURE__ */ __name((event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            commit();
            input.blur();
          } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            event.preventDefault();
            stepValue((event.key === "ArrowUp" ? 1 : -1) * step * (event.shiftKey ? 10 : 1));
          }
        }, "onKeyDown")
      });
      const stepValue = /* @__PURE__ */ __name((delta) => {
        const draft = parseDraft(input.value);
        const base = draft === null ? value : draft;
        const next = this._clampNumber(base + delta, min, max, value, step);
        input.value = this._formatNumber(next);
        onChange(next);
      }, "stepValue");
      return h(
        "div",
        { class: `${PANEL_CLASS}__number` },
        h("span", { class: `${PANEL_CLASS}__field-label` }, label),
        h(
          "span",
          { class: `${PANEL_CLASS}__number-control` },
          h("button", {
            type: "button",
            "aria-label": `Decrease ${label}`,
            onClick: /* @__PURE__ */ __name((event) => {
              event.preventDefault();
              stepValue(-step);
            }, "onClick")
          }, "-"),
          input,
          h("button", {
            type: "button",
            "aria-label": `Increase ${label}`,
            onClick: /* @__PURE__ */ __name((event) => {
              event.preventDefault();
              stepValue(step);
            }, "onClick")
          }, "+"),
          h("span", { class: `${PANEL_CLASS}__number-unit` }, unit)
        )
      );
    }
    /**
     * @param {SeparatorStyle} style
     * @param {(next: SeparatorStyle, render?: boolean) => void} onChange
     * @param {string} scope
     */
    _colorPicker(style, onChange, scope) {
      const current = /* @__PURE__ */ __name(() => this._activeStyleForEdit(style), "current");
      const makeButton = /* @__PURE__ */ __name((item) => {
        const active = style.color === item.value;
        return h(
          "button",
          {
            type: "button",
            class: `${PANEL_CLASS}__color ${active ? "is-active" : ""}`,
            title: item.source ? `${item.name} \xB7 ${item.source}` : item.name,
            "aria-pressed": String(active),
            onClick: /* @__PURE__ */ __name(() => onChange(this._normalizeStyle({ ...current(), color: item.value }), true), "onClick")
          },
          h("span", { class: `${PANEL_CLASS}__color-dot`, style: { background: item.resolved || item.css } }),
          h("span", { class: `${PANEL_CLASS}__color-name` }, item.name)
        );
      }, "makeButton");
      const themeColors = this._themeColors.filter((item) => item.value !== SIDEBAR_DIVIDER_VAR_VALUE);
      const isCustomOpen = this._customOpen && this._customGuid === "__row__";
      const root = h("div", { class: `${PANEL_CLASS}__colors`, dataset: { scope } });
      root.appendChild(h(
        "div",
        { class: `${PANEL_CLASS}__color-hero` },
        this._dividerPresetRow(style, () => onChange(this._normalizeStyle({ ...current(), color: SIDEBAR_DIVIDER_VAR_VALUE }), true)),
        this._renderCustomColorToggle(style, isCustomOpen)
      ));
      if (isCustomOpen) {
        root.appendChild(this._renderCollectionColorCustomPanel("__row__", (hex) => {
          const next = this._normalizeStyle({ ...current(), color: `custom:${hex}`, customColor: hex });
          onChange(next, false);
        }));
      }
      root.appendChild(h(
        "div",
        { class: `${PANEL_CLASS}__colors-group` },
        h("div", { class: `${PANEL_CLASS}__colors-label` }, "Theme variables"),
        themeColors.length ? h("div", { class: `${PANEL_CLASS}__colors-grid` }, ...themeColors.map(makeButton)) : h("div", { class: `${PANEL_CLASS}__empty` }, "No active theme colors found.")
      ));
      const activePalette = this._activePalette();
      root.appendChild(h(
        "div",
        { class: `${PANEL_CLASS}__colors-group` },
        h("div", { class: `${PANEL_CLASS}__colors-label` }, `${activePalette.name} swatches`),
        this._buildCollectionColorSwatchesEl(activePalette.id, activePalette.swatches, style, (value) => {
          onChange(this._normalizeStyle({ ...current(), color: value }), true);
        })
      ));
      return root;
    }
    /**
     * Hero preset at the top of the Color section: tracks --sidebar-divider-color
     * so separators visually match Thymer's other sidebar dividers.
     * @param {SeparatorStyle} style
     * @param {() => void} onSelect
     */
    _dividerPresetRow(style, onSelect) {
      const active = style.color === SIDEBAR_DIVIDER_VAR_VALUE;
      const swatchColor = SIDEBAR_DIVIDER_VAR_CSS;
      return h(
        "button",
        {
          type: "button",
          class: `${PANEL_CLASS}__preset-row ${active ? "is-active" : ""}`,
          "aria-pressed": String(active),
          onClick: /* @__PURE__ */ __name((event) => {
            event.preventDefault();
            if (!active) onSelect();
          }, "onClick")
        },
        h("span", { class: `${PANEL_CLASS}__preset-swatch`, style: { background: swatchColor } }),
        h(
          "span",
          { class: `${PANEL_CLASS}__preset-text` },
          h("span", { class: `${PANEL_CLASS}__preset-title` }, "Match sidebar dividers"),
          h("span", { class: `${PANEL_CLASS}__preset-hint` }, "Uses the same color as Thymer's other sidebar dividers. Updates with your theme.")
        ),
        h("span", { class: `${PANEL_CLASS}__preset-check`, "aria-hidden": "true" }, active ? "\u2713" : "")
      );
    }
    /**
     * Side-by-side partner of the divider preset: a single button that opens
     * the custom hex picker. The panel itself is rendered as a sibling by
     * `_colorPicker` so it spans the full color section width.
     * @param {SeparatorStyle} style
     * @param {boolean} isOpen
     */
    _renderCustomColorToggle(style, isOpen) {
      const isCustomColor = style.color.startsWith("custom:");
      const swatchHex = isCustomColor ? this._hexOrDefault(style.customColor) : isOpen && this._isHex(this._draftHex) ? (
        /** @type {string} */
        this._draftHex
      ) : this._hexOrDefault(style.customColor);
      const labelHex = isCustomColor ? this._hexOrDefault(style.customColor).toUpperCase() : "";
      return h(
        "button",
        {
          type: "button",
          class: `${PANEL_CLASS}__preset-row ${PANEL_CLASS}__custom-row ${isCustomColor || isOpen ? "is-active" : ""}`,
          "aria-pressed": String(isCustomColor || isOpen),
          "aria-expanded": String(isOpen),
          onClick: /* @__PURE__ */ __name((event) => {
            event.preventDefault();
            const nextOpen = !isOpen;
            this._customOpen = nextOpen;
            if (nextOpen) {
              this._customGuid = "__row__";
              this._draftHex = isCustomColor ? this._hexOrDefault(style.customColor) : this._hexOrDefault(this._resolveHexColor(style));
              this._draftFormat = "HEX";
            } else {
              this._customGuid = null;
              this._draftHex = null;
            }
            this._renderPanel();
          }, "onClick")
        },
        h("span", { class: `${PANEL_CLASS}__preset-swatch`, style: { background: swatchHex } }),
        h(
          "span",
          { class: `${PANEL_CLASS}__preset-text` },
          h("span", { class: `${PANEL_CLASS}__preset-title` }, "Custom color"),
          h("span", { class: `${PANEL_CLASS}__preset-hint` }, labelHex || "Pick any hex value")
        ),
        h("span", { class: `${PANEL_CLASS}__preset-check`, "aria-hidden": "true" }, isOpen ? "\u25BE" : isCustomColor ? "\u2713" : "")
      );
    }
    /** @param {SeparatorStyle} style */
    _colorSummary(style) {
      if (style.color === SIDEBAR_DIVIDER_VAR_VALUE) return "Sidebar divider";
      const theme = this._themeColors.find((item) => item.value === style.color) || THEME_COLORS.find((item) => item.value === style.color);
      if (theme) return theme.name;
      if (style.color.startsWith("custom:")) return style.color.slice("custom:".length).toUpperCase();
      for (const palette of this._allPalettes()) {
        if (!style.color.startsWith(`${palette.id}:`)) continue;
        const hex = style.color.slice(palette.id.length + 1).toLowerCase();
        const swatch = palette.swatches.find((item) => item.hex.toLowerCase() === hex);
        return `${palette.name}${swatch ? ` \xB7 ${swatch.name}` : ""}`;
      }
      return "Sidebar divider";
    }
    _tailwindPalette() {
      const shade = TAILWIND_SHADES.includes(this._tailwindShade) ? this._tailwindShade : 500;
      const swatches = Object.entries(TAILWIND_FAMILIES).map(([name, family]) => ({
        name,
        hex: family[
          /** @type {keyof typeof family} */
          shade
        ] || family[500]
      }));
      return { id: "tailwind", name: `Tailwind ${shade}`, swatches };
    }
    _allPalettes() {
      return [
        this._tailwindPalette(),
        ...COLOR_PALETTE_GROUPS.filter((palette) => palette.id !== "tailwind")
      ];
    }
    _activePalette() {
      return this._allPalettes().find((palette) => palette.id === this._paletteId) || this._tailwindPalette();
    }
    /**
     * Palette selector — verbatim port of plugin-collection-colors'
     * `_renderPaletteSelector` (minus the custom-palettes editor and the
     * "+ New custom palette" row, which sidebar-seperators does not need).
     * Dots are inert preview spans. Click anywhere on the row to set that
     * palette as active.
     */
    _renderPaletteSelector() {
      const list = h("div", { class: `${COLLECTION_COLORS_CLASS}__palette-list` });
      for (const p of this._allPalettes()) {
        const isActive = this._paletteId === p.id;
        const row = h("div", {
          class: `${COLLECTION_COLORS_CLASS}__palette-row ${isActive ? "is-active" : ""}`.trim(),
          title: "Click to select"
        });
        const selectPalette = /* @__PURE__ */ __name(() => {
          if (this._paletteId === p.id) return;
          this._paletteId = p.id;
          this._customOpen = false;
          this._customGuid = null;
          this._renderPanel();
        }, "selectPalette");
        const name = h("button", {
          type: "button",
          class: `${COLLECTION_COLORS_CLASS}__palette-row-name`
        }, p.name);
        const dots = h("div", { class: `${COLLECTION_COLORS_CLASS}__palette-row-dots` });
        for (const sw of p.swatches) {
          const dot = h("span", {
            class: `${COLLECTION_COLORS_CLASS}__palette-dot`,
            title: `${sw.name || sw.hex} \xB7 ${sw.hex}`
          });
          dot.style.background = sw.hex;
          dots.appendChild(dot);
        }
        const reveal = h("button", {
          type: "button",
          class: `${COLLECTION_COLORS_CLASS}__palette-row-reveal`,
          title: "Show colors",
          onClick: /* @__PURE__ */ __name((event) => {
            event.stopPropagation();
            if (row.classList.contains("is-truncated") || row.classList.contains("is-revealed")) {
              row.classList.toggle("is-revealed");
            }
          }, "onClick")
        });
        row.appendChild(name);
        row.appendChild(dots);
        row.appendChild(reveal);
        row.addEventListener("click", selectPalette);
        row.style.cursor = "pointer";
        list.appendChild(row);
        if (p.id === "tailwind" && isActive) list.appendChild(this._renderTailwindShadeSelector());
      }
      return list;
    }
    _renderTailwindShadeSelector() {
      const wrap = h(
        "div",
        { class: `${COLLECTION_COLORS_CLASS}__tailwind-shades` },
        h("div", { class: `${COLLECTION_COLORS_CLASS}__tailwind-shades-label` }, "Tailwind shade")
      );
      const seg = h("div", { class: `${COLLECTION_COLORS_CLASS}__tailwind-shades-seg` });
      for (const shade of TAILWIND_SHADES) {
        const active = this._tailwindShade === shade;
        seg.appendChild(h("button", {
          type: "button",
          class: `${COLLECTION_COLORS_CLASS}__shade-btn ${active ? "is-active" : ""}`,
          title: `Use Tailwind ${shade}`,
          onClick: /* @__PURE__ */ __name((event) => {
            event.preventDefault();
            event.stopPropagation();
            this._tailwindShade = shade;
            this._renderPanel();
          }, "onClick")
        }, String(shade)));
      }
      wrap.appendChild(seg);
      return wrap;
    }
    _checkPaletteOverflow() {
      if (!this._panelEl) return;
      for (const row of this._panelEl.querySelectorAll(`.${COLLECTION_COLORS_CLASS}__palette-row`)) {
        if (row.classList.contains("is-revealed")) continue;
        const rowEl = (
          /** @type {HTMLElement} */
          row
        );
        const dots = (
          /** @type {HTMLElement | null} */
          row.querySelector(`.${COLLECTION_COLORS_CLASS}__palette-row-dots`)
        );
        if (!dots) continue;
        const dotCount = dots.children.length;
        if (!dotCount) {
          row.classList.remove("is-truncated");
          continue;
        }
        const DOT_W = 14, DOT_GAP = 4, ROW_GAP = 12, ROW_PAD_X = 10;
        const dotsIdealW = dotCount * DOT_W + Math.max(0, dotCount - 1) * DOT_GAP;
        const name = (
          /** @type {HTMLElement | null} */
          row.querySelector(`.${COLLECTION_COLORS_CLASS}__palette-row-name`)
        );
        const reveal = (
          /** @type {HTMLElement | null} */
          row.querySelector(`.${COLLECTION_COLORS_CLASS}__palette-row-reveal`)
        );
        const rowWidth = rowEl.getBoundingClientRect().width;
        const nameW = name ? name.offsetWidth : 0;
        const revealW = reveal ? Math.max(reveal.offsetWidth, 24) : 0;
        const availableForDots = rowWidth - ROW_PAD_X * 2 - ROW_GAP * 2 - nameW - revealW;
        row.classList.toggle("is-truncated", dotsIdealW > availableForDots);
      }
    }
    /** @param {string} color */
    _tailwindFamilyForColor(color) {
      if (!color.startsWith("tailwind:")) return null;
      const hex = color.slice("tailwind:".length).toLowerCase();
      for (const [familyName, family] of Object.entries(TAILWIND_FAMILIES)) {
        if (Object.values(family).some((value) => value.toLowerCase() === hex)) return familyName;
      }
      return null;
    }
    /**
     * Active-palette swatch picker. Verbatim from plugin-collection-colors'
     * `_buildSwatchesEl` (renamed for namespacing): each swatch is a real
     * button, clicks apply the color. No "no color" or "custom" entries —
     * those are handled by the Match-divider and Custom-color hero cards.
     * @param {string} prefix
     * @param {readonly {name: string, hex: string}[]} swatches
     * @param {SeparatorStyle} style
     * @param {(value: string) => void} onColor
     */
    _buildCollectionColorSwatchesEl(prefix, swatches, style, onColor) {
      const row = h("div", { class: `${COLLECTION_COLORS_CLASS}__swatches` });
      const selected = style.color.startsWith(`${prefix}:`) ? style.color.slice(prefix.length + 1).toLowerCase() : null;
      for (const sw of swatches) {
        const btn = this._buildCollectionColorSwatch({
          activeWhen: selected === sw.hex.toLowerCase(),
          ariaLabel: sw.name,
          onClick: /* @__PURE__ */ __name(() => onColor(`${prefix}:${sw.hex}`), "onClick")
        });
        btn.style.background = sw.hex;
        row.appendChild(btn);
      }
      return h("div", { class: `${COLLECTION_COLORS_CLASS}__swatch-wrapper` }, row);
    }
    /** @param {{activeWhen: boolean, ariaLabel: string, classes?: string, onClick: (event: MouseEvent) => void}} opts */
    _buildCollectionColorSwatch({ activeWhen, ariaLabel, classes = "", onClick }) {
      const btn = h("button", {
        type: "button",
        class: `${COLLECTION_COLORS_CLASS}__swatch ${classes} ${activeWhen ? "is-active" : ""}`.trim(),
        "aria-label": ariaLabel,
        title: ariaLabel,
        onClick: /* @__PURE__ */ __name((event) => {
          event.preventDefault();
          event.stopPropagation();
          onClick(event);
        }, "onClick")
      });
      return (
        /** @type {HTMLButtonElement} */
        btn
      );
    }
    /**
     * Live-updating custom hex picker. SV/hue drags, hex/rgb/hsl typing, and
     * the Random button all push the new color onto the active separator
     * immediately without re-rendering the panel (which would tear the picker
     * out from under the user's pointer/cursor mid-drag/mid-type). Format
     * switches re-render — the input row swaps shape. There is no Apply/Cancel
     * because every edit is already live; users close via the toggle row.
     * @param {string} guid
     * @param {(hex: string, mode: 'live' | 'commit') => void} onApply
     */
    _renderCollectionColorCustomPanel(guid, onApply) {
      const panel2 = h("div", { class: `${COLLECTION_COLORS_CLASS}__custom-panel`, dataset: { customGuid: guid } });
      const draft = (
        /** @type {string} */
        this._isHex(this._draftHex) ? this._draftHex : "#fda4af"
      );
      const [initR, initG, initB] = this._hexToRgb(draft);
      const [initHue, initSat, initVal] = this._rgbToHsv(initR, initG, initB);
      let curHue = initHue;
      let curSat = initSat;
      let curVal = initVal;
      const left = h("div", { class: `${COLLECTION_COLORS_CLASS}__custom-left` });
      const right = h("div", { class: `${COLLECTION_COLORS_CLASS}__custom-right` });
      const sv = h("div", { class: `${COLLECTION_COLORS_CLASS}__sv`, style: { "--hue": String(initHue) } });
      const thumb = h("div", { class: `${COLLECTION_COLORS_CLASS}__sv-thumb`, style: { left: `${initSat * 100}%`, top: `${(1 - initVal) * 100}%` } });
      sv.appendChild(thumb);
      const inputs = h("div", { class: `${COLLECTION_COLORS_CLASS}__inputs` });
      const syncDom = /* @__PURE__ */ __name((skip = null) => {
        const wrapperEl = panel2.closest(`.${PANEL_CLASS}__color-hero`)?.parentElement || panel2.closest(`.${PANEL_CLASS}__colors`) || panel2.parentElement;
        if (wrapperEl instanceof HTMLElement) {
          const presetSwatch = wrapperEl.querySelector(`.${PANEL_CLASS}__custom-row .${PANEL_CLASS}__preset-swatch`);
          if (presetSwatch instanceof HTMLElement && this._draftHex) presetSwatch.style.background = this._draftHex;
          const presetHint = wrapperEl.querySelector(`.${PANEL_CLASS}__custom-row .${PANEL_CLASS}__preset-hint`);
          if (presetHint instanceof HTMLElement && this._draftHex) presetHint.textContent = this._draftHex.toUpperCase();
        }
        if (!this._draftHex) return;
        const [r, g, b] = this._hexToRgb(this._draftHex);
        const [hl, sl, ll] = this._rgbToHsl(r, g, b);
        for (const node of inputs.querySelectorAll("input")) {
          if (node === skip) continue;
          const input = (
            /** @type {HTMLInputElement} */
            node
          );
          const role = input.dataset.role;
          if (role === "hex") input.value = this._draftHex.toUpperCase();
          else if (role === "r") input.value = String(r);
          else if (role === "g") input.value = String(g);
          else if (role === "b") input.value = String(b);
          else if (role === "h") input.value = String(Math.round(hl));
          else if (role === "s") input.value = String(Math.round(sl));
          else if (role === "l") input.value = String(Math.round(ll));
        }
      }, "syncDom");
      const pushLive = /* @__PURE__ */ __name(() => {
        if (this._draftHex) onApply(this._draftHex, "live");
      }, "pushLive");
      const pushCommit = /* @__PURE__ */ __name(() => {
        if (this._draftHex) onApply(this._draftHex, "commit");
      }, "pushCommit");
      const setFromHsv = /* @__PURE__ */ __name((hueArg, sx, vy, skip = null) => {
        curHue = hueArg;
        curSat = sx;
        curVal = vy;
        const [nr, ng, nb] = this._hsvToRgb(hueArg, sx, vy);
        this._draftHex = this._rgbToHex(nr, ng, nb);
        thumb.style.left = `${sx * 100}%`;
        thumb.style.top = `${(1 - vy) * 100}%`;
        sv.style.setProperty("--hue", String(hueArg));
        syncDom(skip);
        pushLive();
      }, "setFromHsv");
      sv.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        sv.setPointerCapture(event.pointerId);
        const onDrag = /* @__PURE__ */ __name((ev) => {
          const rect = sv.getBoundingClientRect();
          const sx = this._clamp01((ev.clientX - rect.left) / rect.width);
          const vy = 1 - this._clamp01((ev.clientY - rect.top) / rect.height);
          setFromHsv(curHue, sx, vy);
        }, "onDrag");
        onDrag(event);
        const move = /* @__PURE__ */ __name((ev) => onDrag(ev), "move");
        const up = /* @__PURE__ */ __name(() => {
          sv.removeEventListener("pointermove", move);
          sv.removeEventListener("pointerup", up);
          try {
            sv.releasePointerCapture(event.pointerId);
          } catch {
          }
          pushCommit();
        }, "up");
        sv.addEventListener("pointermove", move);
        sv.addEventListener("pointerup", up);
        sv.addEventListener("pointercancel", up, { once: true });
      });
      const hue = h("input", { class: `${COLLECTION_COLORS_CLASS}__hue`, type: "range", min: "0", max: "360", step: "1", value: String(initHue) });
      hue.addEventListener("input", () => {
        setFromHsv(Number(hue.value), curSat, curVal);
      });
      hue.addEventListener("change", () => {
        pushCommit();
      });
      const formats = h(
        "div",
        { class: `${COLLECTION_COLORS_CLASS}__formats` },
        .../** @type {const} */
        ["HEX", "RGB", "HSL"].map((format) => h("button", {
          type: "button",
          class: `${COLLECTION_COLORS_CLASS}__format-btn ${this._draftFormat === format ? "is-active" : ""}`,
          onClick: /* @__PURE__ */ __name(() => {
            if (this._draftFormat === format) return;
            this._draftFormat = format;
            this._renderPanel();
          }, "onClick")
        }, format))
      );
      const tryLiveHex = /* @__PURE__ */ __name((raw, skipInput) => {
        const norm = this._normalizeHex(raw);
        if (!norm) return;
        this._draftHex = norm;
        const [r, g, b] = this._hexToRgb(norm);
        const [hueArg, sat, val] = this._rgbToHsv(r, g, b);
        if (sat > 1e-4) curHue = hueArg;
        if (val > 1e-4) curSat = sat;
        curVal = val;
        thumb.style.left = `${curSat * 100}%`;
        thumb.style.top = `${(1 - curVal) * 100}%`;
        sv.style.setProperty("--hue", String(curHue));
        hue.value = String(Math.round(curHue));
        syncDom(skipInput);
        pushLive();
      }, "tryLiveHex");
      if (this._draftFormat === "HEX") {
        const input = h("input", { class: `${COLLECTION_COLORS_CLASS}__hex-input`, type: "text", value: draft.toUpperCase(), maxLength: 7 });
        input.dataset.role = "hex";
        input.addEventListener("input", () => {
          if (this._normalizeHex(input.value)) tryLiveHex(
            input.value,
            /** @type {HTMLInputElement} */
            input
          );
        });
        input.addEventListener("change", () => {
          const norm = this._normalizeHex(input.value);
          if (norm) {
            tryLiveHex(
              norm,
              /** @type {HTMLInputElement} */
              input
            );
            input.value = norm.toUpperCase();
            pushCommit();
          } else {
            input.value = (this._draftHex || draft).toUpperCase();
          }
        });
        inputs.append(input, h("div", { class: `${COLLECTION_COLORS_CLASS}__input-label` }, "HEX"));
      } else if (this._draftFormat === "RGB") {
        const [r, g, b] = this._hexToRgb(draft);
        inputs.append(
          this._customNumField("r", "R", r, 0, 255, (val, mode, skipInput) => {
            const [, , bb] = this._hexToRgb(
              /** @type {string} */
              this._draftHex || draft
            );
            const [, gg] = this._hexToRgb(
              /** @type {string} */
              this._draftHex || draft
            );
            tryLiveHex(this._rgbToHex(val, gg, bb), skipInput);
            if (mode === "commit") pushCommit();
          }),
          this._customNumField("g", "G", g, 0, 255, (val, mode, skipInput) => {
            const [rr, , bb] = this._hexToRgb(
              /** @type {string} */
              this._draftHex || draft
            );
            tryLiveHex(this._rgbToHex(rr, val, bb), skipInput);
            if (mode === "commit") pushCommit();
          }),
          this._customNumField("b", "B", b, 0, 255, (val, mode, skipInput) => {
            const [rr, gg] = this._hexToRgb(
              /** @type {string} */
              this._draftHex || draft
            );
            tryLiveHex(this._rgbToHex(rr, gg, val), skipInput);
            if (mode === "commit") pushCommit();
          })
        );
      } else {
        const [r0, g0, b0] = this._hexToRgb(draft);
        const [hslHue0, hslSat0, hslLight0] = this._rgbToHsl(r0, g0, b0);
        let curHsl = { h: hslHue0, s: hslSat0, l: hslLight0 };
        const apply = /* @__PURE__ */ __name((mode, skipInput) => {
          const [nr, ng, nb] = this._hslToRgb(curHsl.h, curHsl.s, curHsl.l);
          tryLiveHex(this._rgbToHex(nr, ng, nb), skipInput);
          if (mode === "commit") pushCommit();
        }, "apply");
        inputs.append(
          this._customNumField("h", "H", Math.round(hslHue0), 0, 360, (v, mode, skipInput) => {
            curHsl.h = v;
            apply(mode, skipInput);
          }),
          this._customNumField("s", "S", Math.round(hslSat0), 0, 100, (v, mode, skipInput) => {
            curHsl.s = v;
            apply(mode, skipInput);
          }),
          this._customNumField("l", "L", Math.round(hslLight0), 0, 100, (v, mode, skipInput) => {
            curHsl.l = v;
            apply(mode, skipInput);
          })
        );
      }
      const random = h("button", {
        type: "button",
        class: `${COLLECTION_COLORS_CLASS}__random`,
        onClick: /* @__PURE__ */ __name(() => {
          const next = this._randomHex();
          tryLiveHex(
            next,
            /** @type {HTMLInputElement} */
            {}
          );
          pushCommit();
        }, "onClick")
      }, "Random color");
      const actions = h(
        "div",
        { class: `${COLLECTION_COLORS_CLASS}__actions` },
        h("button", {
          type: "button",
          class: `${COLLECTION_COLORS_CLASS}__btn ${COLLECTION_COLORS_CLASS}__btn--ghost`,
          onClick: /* @__PURE__ */ __name(() => {
            this._customOpen = false;
            this._customGuid = null;
            this._draftHex = null;
            this._renderPanel();
          }, "onClick")
        }, "Close")
      );
      left.append(sv, hue);
      right.append(formats, inputs, random, actions);
      panel2.append(left, right);
      return panel2;
    }
    /**
     * Number field for the live custom-color picker. Fires `live` per
     * keystroke (when value is in range) and `commit` on blur, Enter, or
     * arrow-key step. The handler receives the input element so live syncs
     * can avoid clobbering the user's caret.
     * @param {string} role
     * @param {string} label
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @param {(value: number, mode: 'live' | 'commit', skip: HTMLInputElement) => void} onChange
     */
    _customNumField(role, label, value, min, max, onChange) {
      const input = h("input", { type: "number", min: String(min), max: String(max), step: "1", value: String(value) });
      input.dataset.role = role;
      const inEl = (
        /** @type {HTMLInputElement} */
        input
      );
      input.addEventListener("input", () => {
        const n = Number(inEl.value);
        if (!Number.isFinite(n)) return;
        if (n < min || n > max) return;
        onChange(n, "live", inEl);
      });
      input.addEventListener("change", () => {
        const n = this._clampInt(Number(inEl.value), min, max, value);
        inEl.value = String(n);
        onChange(n, "commit", inEl);
      });
      input.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
        event.preventDefault();
        const base = Number.isFinite(Number(inEl.value)) ? Number(inEl.value) : value;
        const next = this._clampInt(base + (event.key === "ArrowUp" ? 1 : -1) * (event.shiftKey ? 10 : 1), min, max, value);
        inEl.value = String(next);
        onChange(next, "commit", inEl);
      });
      return h(
        "div",
        { class: `${COLLECTION_COLORS_CLASS}__num` },
        input,
        h("div", { class: `${COLLECTION_COLORS_CLASS}__num-label` }, label)
      );
    }
    /** @param {string} label @param {number} value @param {number} min @param {number} max @param {(v: number) => void} onCommit */
    _collectionColorNumField(label, value, min, max, onCommit) {
      const input = h("input", { type: "number", min: String(min), max: String(max), step: "1", value: String(value) });
      const commit = /* @__PURE__ */ __name((v) => {
        const next = this._clampInt(v, min, max, value);
        input.value = String(next);
        onCommit(next);
        this._renderPanel();
      }, "commit");
      input.addEventListener("change", () => {
        commit(Number(input.value));
      });
      input.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
        event.preventDefault();
        const base = Number.isFinite(Number(input.value)) ? Number(input.value) : value;
        commit(base + (event.key === "ArrowUp" ? 1 : -1) * (event.shiftKey ? 10 : 1));
      });
      return h(
        "div",
        { class: `${COLLECTION_COLORS_CLASS}__num` },
        input,
        h("div", { class: `${COLLECTION_COLORS_CLASS}__num-label` }, label)
      );
    }
    /**
     * @param {SeparatorStyle} next
     * @param {boolean=} render
     */
    _setActiveStyle(next, render = false) {
      const selected = this._activeOverrideGuid ? this._separators.get(this._activeOverrideGuid) || null : null;
      if (selected) {
        void this._setSeparatorStyle(selected.guid, next, render);
      }
    }
    /**
     * @param {SeparatorStyle} next
     * @param {boolean=} render
     */
    _setActiveCollapsedStyle(next, render = false) {
      const selected = this._activeOverrideGuid ? this._separators.get(this._activeOverrideGuid) || null : null;
      if (selected) {
        void this._setSeparatorCollapsedStyle(selected.guid, next, render);
      }
    }
    /**
     * Shared color changes apply to both expanded and collapsed states.
     * @param {SeparatorStyle} next
     * @param {boolean=} render
     */
    _setActiveColorStyle(next, render = false) {
      const selected = this._activeOverrideGuid ? this._separators.get(this._activeOverrideGuid) || null : null;
      if (!selected) return;
      const colorPatch = { color: next.color, customColor: next.customColor };
      const expanded = this._normalizeStyle({ ...selected.style || this._defaultStyle, ...colorPatch });
      const collapsedBase = selected.collapsedStyle || selected.style || this._defaultStyle;
      const collapsed = this._normalizeStyle({ ...collapsedBase, ...colorPatch });
      selected.style = expanded;
      selected.collapsedStyle = collapsed;
      this._separators.set(selected.guid, selected);
      this._pendingSeparatorStyles.set(selected.guid, expanded);
      this._pendingCollapsedSeparatorStyles.set(selected.guid, collapsed);
      this._writeRuntimeStyle();
      this._markSidebarRows();
      this._updatePanelPreview(expanded);
      if (render) this._renderPanel();
      this._scheduleSeparatorSave(selected.guid);
    }
    /**
     * @param {SeparatorStyle} fallback
     */
    _activeStyleForEdit(fallback) {
      const selected = this._activeOverrideGuid ? this._separators.get(this._activeOverrideGuid) || null : null;
      return selected && selected.style ? selected.style : fallback;
    }
    /**
     * @param {SeparatorStyle} fallback
     */
    _activeCollapsedStyleForEdit(fallback) {
      const selected = this._activeOverrideGuid ? this._separators.get(this._activeOverrideGuid) || null : null;
      return selected && selected.collapsedStyle ? selected.collapsedStyle : fallback;
    }
    /**
     * @param {string} className
     * @param {SeparatorStyle} style
     */
    _lineElement(className, style) {
      const line = h("span", {
        class: className,
        "data-plg-sidebar-seperators-style": style.borderStyle,
        "aria-hidden": "true"
      });
      this._applyStyleVars(line, style);
      return line;
    }
    /**
     * @param {string} guid
     * @param {Partial<SeparatorStyle> | null} style
     * @param {boolean=} render
     */
    async _setSeparatorStyle(guid, style, render = false) {
      const entry = this._separators.get(guid);
      if (!entry) return;
      const normalized = style ? this._normalizeStyle(style) : null;
      entry.style = normalized;
      this._separators.set(guid, entry);
      this._pendingSeparatorStyles.set(guid, normalized);
      this._writeRuntimeStyle();
      this._markSidebarRows();
      if (normalized) this._updatePanelPreview(normalized);
      if (render) this._renderPanel();
      this._scheduleSeparatorSave(guid);
    }
    /**
     * @param {string} guid
     * @param {Partial<SeparatorStyle> | null} style
     * @param {boolean=} render
     */
    async _setSeparatorCollapsedStyle(guid, style, render = false) {
      const entry = this._separators.get(guid);
      if (!entry) return;
      const normalized = style ? this._normalizeStyle(style) : null;
      entry.collapsedStyle = normalized;
      this._separators.set(guid, entry);
      this._pendingCollapsedSeparatorStyles.set(guid, normalized);
      this._writeRuntimeStyle();
      this._markSidebarRows();
      if (normalized) this._updatePanelPreview(normalized);
      if (render) this._renderPanel();
      this._scheduleSeparatorSave(guid);
    }
    /**
     * @param {string} guid
     */
    _scheduleSeparatorSave(guid) {
      const existing = this._separatorSaveTimers.get(guid);
      if (existing) clearTimeout(existing);
      const timer = setTimeout(() => {
        this._separatorSaveTimers.delete(guid);
        void this._saveSeparatorStyleNow(guid);
      }, 800);
      this._separatorSaveTimers.set(guid, timer);
    }
    /**
     * @param {string} guid
     */
    async _saveSeparatorStyleNow(guid) {
      const entry = this._separators.get(guid);
      if (!entry) return;
      const savedStyle = entry.style ? this._normalizeStyle(entry.style) : null;
      const savedCollapsedStyle = entry.collapsedStyle ? this._normalizeStyle(entry.collapsedStyle) : null;
      try {
        const conf = entry.collection.getConfiguration();
        const custom = conf.custom && typeof conf.custom === "object" ? conf.custom : {};
        const marker = this._readMarker(conf) || { isSeparator: true, version: 1 };
        const nextMarker = { ...marker };
        if (savedStyle) nextMarker.style = savedStyle;
        else delete nextMarker.style;
        if (savedCollapsedStyle) nextMarker.collapsedStyle = savedCollapsedStyle;
        else delete nextMarker.collapsedStyle;
        await entry.collection.saveConfiguration({
          ...conf,
          name: SEPARATOR_COLLECTION_NAME,
          custom: {
            ...custom,
            [PLUGIN_KEY]: nextMarker
          }
        });
        if (JSON.stringify(this._pendingSeparatorStyles.get(guid) || null) === JSON.stringify(savedStyle)) {
          this._pendingSeparatorStyles.delete(guid);
        }
        if (JSON.stringify(this._pendingCollapsedSeparatorStyles.get(guid) || null) === JSON.stringify(savedCollapsedStyle)) {
          this._pendingCollapsedSeparatorStyles.delete(guid);
        }
      } catch {
        this._toast("Could not save separator style.");
      }
    }
    /**
     * @param {PluginConfiguration} conf
     * @returns {SeparatorMarker | null}
     */
    _readMarker(conf) {
      const custom = conf && conf.custom && typeof conf.custom === "object" ? conf.custom : {};
      const marker = custom[PLUGIN_KEY];
      return marker && marker.isSeparator === true ? marker : null;
    }
    /**
     * @param {Partial<SeparatorStyle> | null | undefined} raw
     * @returns {SeparatorStyle}
     */
    _normalizeStyle(raw) {
      const src = raw && typeof raw === "object" ? raw : {};
      const borderStyle = BORDER_STYLES.includes(
        /** @type {any} */
        src.borderStyle
      ) ? String(src.borderStyle) : DEFAULT_STYLE.borderStyle;
      const alignment = ALIGNMENTS.includes(
        /** @type {any} */
        src.alignment
      ) ? String(src.alignment) : DEFAULT_STYLE.alignment;
      const color = this._normalizeColor(src.color);
      return {
        borderStyle,
        color,
        customColor: color.startsWith("custom:") ? this._hexOrDefault(color.slice("custom:".length)) : this._hexOrDefault(src.customColor),
        thicknessPx: this._clampNumber(src.thicknessPx, 0.5, 8, DEFAULT_STYLE.thicknessPx, 0.5),
        doubleGapPx: this._clampNumber(src.doubleGapPx, 0.5, 8, DEFAULT_STYLE.doubleGapPx, 0.5),
        widthPct: this._clampInt(src.widthPct, 10, 100, DEFAULT_STYLE.widthPct),
        opacityPct: this._clampInt(src.opacityPct, 10, 100, DEFAULT_STYLE.opacityPct),
        insetPx: this._clampInt(src.insetPx, 0, 36, DEFAULT_STYLE.insetPx),
        heightPx: this._clampInt(src.heightPx, 12, 42, DEFAULT_STYLE.heightPx),
        offsetYPx: this._clampInt(src.offsetYPx, -16, 16, DEFAULT_STYLE.offsetYPx),
        alignment,
        gradientPct: this._clampInt(src.gradientPct, 5, 95, DEFAULT_STYLE.gradientPct)
      };
    }
    /**
     * @param {unknown} value
     */
    _normalizeColor(value) {
      if (typeof value !== "string") return DEFAULT_STYLE.color;
      if (value === "theme:accent") return value;
      if (value.startsWith("theme-var:--")) return value;
      if (Object.prototype.hasOwnProperty.call(THEME_COLOR_ALIASES, value)) return DEFAULT_STYLE.color;
      if (value.startsWith("var:--") && THEME_COLORS.some((item) => item.value === value)) return value;
      if (value.startsWith("custom:") && /^#[0-9a-f]{6}$/i.test(value.slice(value.indexOf(":") + 1))) return value;
      if (COLOR_PALETTE_GROUPS.some((palette) => value.startsWith(`${palette.id}:`)) && /^#[0-9a-f]{6}$/i.test(value.slice(value.indexOf(":") + 1))) return value;
      return DEFAULT_STYLE.color;
    }
    /**
     * @param {unknown} value
     */
    _hexOrDefault(value) {
      return typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value) ? value : DEFAULT_STYLE.customColor;
    }
    /** @param {SeparatorStyle} style */
    _resolveHexColor(style) {
      if (style.color.startsWith("custom:")) return style.color.slice("custom:".length);
      for (const palette of COLOR_PALETTE_GROUPS) {
        if (style.color.startsWith(`${palette.id}:`)) return style.color.slice(palette.id.length + 1);
      }
      return style.customColor;
    }
    /** @param {unknown} value */
    _isHex(value) {
      return typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value);
    }
    /** @param {unknown} input */
    _normalizeHex(input) {
      if (typeof input !== "string") return null;
      let s = input.trim().toLowerCase();
      if (!s.startsWith("#")) s = `#${s}`;
      if (/^#[0-9a-f]{3}$/.test(s)) s = `#${s.slice(1).split("").map((c) => c + c).join("")}`;
      return /^#[0-9a-f]{6}$/.test(s) ? s : null;
    }
    /** @param {number} n */
    _clamp01(n) {
      return Math.max(0, Math.min(1, n));
    }
    /** @param {string} hex @returns {[number, number, number]} */
    _hexToRgb(hex) {
      const h2 = this._normalizeHex(hex) || "#000000";
      return [parseInt(h2.slice(1, 3), 16), parseInt(h2.slice(3, 5), 16), parseInt(h2.slice(5, 7), 16)];
    }
    /** @param {number} r @param {number} g @param {number} b */
    _rgbToHex(r, g, b) {
      const t = /* @__PURE__ */ __name((n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0"), "t");
      return `#${t(r)}${t(g)}${t(b)}`;
    }
    /** @param {number} r @param {number} g @param {number} b @returns {[number, number, number]} */
    _rgbToHsv(r, g, b) {
      r /= 255;
      g /= 255;
      b /= 255;
      const mx = Math.max(r, g, b);
      const mn = Math.min(r, g, b);
      const d = mx - mn;
      let h2 = 0;
      if (d !== 0) {
        if (mx === r) h2 = (g - b) / d % 6;
        else if (mx === g) h2 = (b - r) / d + 2;
        else h2 = (r - g) / d + 4;
        h2 *= 60;
        if (h2 < 0) h2 += 360;
      }
      return [h2, mx === 0 ? 0 : d / mx, mx];
    }
    /** @param {number} h @param {number} s @param {number} v @returns {[number, number, number]} */
    _hsvToRgb(h2, s, v) {
      const c = v * s;
      const hp = (h2 % 360 + 360) % 360 / 60;
      const x = c * (1 - Math.abs(hp % 2 - 1));
      let r = 0, g = 0, b = 0;
      if (hp < 1) {
        r = c;
        g = x;
      } else if (hp < 2) {
        r = x;
        g = c;
      } else if (hp < 3) {
        g = c;
        b = x;
      } else if (hp < 4) {
        g = x;
        b = c;
      } else if (hp < 5) {
        r = x;
        b = c;
      } else {
        r = c;
        b = x;
      }
      const m = v - c;
      return [(r + m) * 255, (g + m) * 255, (b + m) * 255];
    }
    /** @param {number} r @param {number} g @param {number} b @returns {[number, number, number]} */
    _rgbToHsl(r, g, b) {
      r /= 255;
      g /= 255;
      b /= 255;
      const mx = Math.max(r, g, b);
      const mn = Math.min(r, g, b);
      let h2 = 0, s = 0;
      const l = (mx + mn) / 2;
      if (mx !== mn) {
        const d = mx - mn;
        s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
        if (mx === r) h2 = (g - b) / d + (g < b ? 6 : 0);
        else if (mx === g) h2 = (b - r) / d + 2;
        else h2 = (r - g) / d + 4;
        h2 *= 60;
      }
      return [Math.round(h2), Math.round(s * 100), Math.round(l * 100)];
    }
    /** @param {number} h @param {number} s @param {number} l @returns {[number, number, number]} */
    _hslToRgb(h2, s, l) {
      h2 = (h2 % 360 + 360) % 360 / 360;
      s /= 100;
      l /= 100;
      if (s === 0) {
        const v = l * 255;
        return [v, v, v];
      }
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      const f = /* @__PURE__ */ __name((t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      }, "f");
      return [f(h2 + 1 / 3) * 255, f(h2) * 255, f(h2 - 1 / 3) * 255];
    }
    _randomHex() {
      const h2 = Math.floor(Math.random() * 360);
      const [r, g, b] = this._hsvToRgb(h2, 0.65, 0.9);
      return this._rgbToHex(r, g, b);
    }
    /**
     * @param {unknown} value
     * @param {number} min
     * @param {number} max
     * @param {number} fallback
     */
    _clampInt(value, min, max, fallback) {
      const n = Number(value);
      if (!Number.isFinite(n)) return fallback;
      return Math.max(min, Math.min(max, Math.round(n)));
    }
    /**
     * @param {unknown} value
     * @param {number} min
     * @param {number} max
     * @param {number} fallback
     * @param {number=} step
     */
    _clampNumber(value, min, max, fallback, step = 1) {
      const n = Number(value);
      const base = Number.isFinite(n) ? n : fallback;
      const stepped = step > 0 ? Math.round(base / step) * step : base;
      const clamped = Math.max(min, Math.min(max, stepped));
      return Number(clamped.toFixed(3));
    }
    /** @param {number} value */
    _formatNumber(value) {
      return Number.isInteger(value) ? String(value) : String(Number(value.toFixed(3)));
    }
    /**
     * @param {SeparatorStyle} style
     */
    _resolveColor(style) {
      if (style.color === "theme:accent") {
        return "var(--logo-color, var(--accent-color, var(--color-accent, var(--theme-accent, var(--color-primary, currentColor)))))";
      }
      if (style.color === SIDEBAR_DIVIDER_VAR_VALUE) {
        return SIDEBAR_DIVIDER_VAR_CSS;
      }
      if (style.color.startsWith("theme-var:")) {
        const varName = style.color.slice("theme-var:".length);
        return `var(${varName}, currentColor)`;
      }
      if (style.color.startsWith("var:")) {
        const found = THEME_COLORS.find((item) => item.value === style.color);
        if (found) return found.css;
        const alias = THEME_COLOR_ALIASES[
          /** @type {keyof typeof THEME_COLOR_ALIASES} */
          style.color
        ];
        return alias || THEME_COLORS[0].css;
      }
      if (style.color.startsWith("custom:")) return style.color.slice("custom:".length);
      for (const palette of COLOR_PALETTE_GROUPS) {
        if (style.color.startsWith(`${palette.id}:`)) return style.color.slice(palette.id.length + 1);
      }
      return style.customColor;
    }
    /**
     * @param {SeparatorStyle} style
     */
    _styleVars(style) {
      const align = ALIGNMENTS.includes(
        /** @type {any} */
        style.alignment
      ) ? style.alignment : DEFAULT_STYLE.alignment;
      const centered = align === "center";
      const right = align === "right";
      const gradientPct = this._clampInt(style.gradientPct, 5, 95, DEFAULT_STYLE.gradientPct);
      const offsetY = this._clampInt(style.offsetYPx, -16, 16, DEFAULT_STYLE.offsetYPx);
      const doubleGap = this._clampNumber(style.doubleGapPx, 0.5, 8, DEFAULT_STYLE.doubleGapPx, 0.5);
      const gradient = align === "right" ? `linear-gradient(90deg, transparent 0%, var(--plg-ss-color, currentColor) ${100 - gradientPct}%, var(--plg-ss-color, currentColor) 100%)` : align === "center" ? `linear-gradient(90deg, transparent 0%, var(--plg-ss-color, currentColor) ${Math.max(0, 50 - gradientPct / 2)}%, var(--plg-ss-color, currentColor) ${Math.min(100, 50 + gradientPct / 2)}%, transparent 100%)` : `linear-gradient(90deg, var(--plg-ss-color, currentColor) 0%, var(--plg-ss-color, currentColor) ${gradientPct}%, transparent 100%)`;
      return {
        "--plg-ss-color": this._resolveColor(style),
        "--plg-ss-style": style.borderStyle,
        "--plg-ss-thickness": `${style.thicknessPx}px`,
        "--plg-ss-double-gap": `${doubleGap}px`,
        "--plg-ss-width": `${style.widthPct}%`,
        "--plg-ss-opacity": String(style.opacityPct / 100),
        "--plg-ss-inset": `${style.insetPx}px`,
        "--plg-ss-height": `${style.heightPx}px`,
        "--plg-ss-offset-y": `${offsetY}px`,
        "--plg-ss-left": centered ? "50%" : right ? "auto" : "var(--plg-ss-inset)",
        "--plg-ss-right": right ? "var(--plg-ss-inset)" : "auto",
        "--plg-ss-transform": centered ? "translate(-50%, calc(-50% + var(--plg-ss-offset-y, 0px)))" : "translateY(calc(-50% + var(--plg-ss-offset-y, 0px)))",
        "--plg-ss-hover-transform": centered ? "translate(-50%, calc(-50% + var(--plg-ss-offset-y, 0px))) scaleX(1.02)" : "translateY(calc(-50% + var(--plg-ss-offset-y, 0px))) scaleX(1.02)",
        "--plg-ss-justify": align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center",
        "--plg-ss-gradient": gradient
      };
    }
    /**
     * @param {HTMLElement} el
     * @param {SeparatorStyle} style
     */
    _applyStyleVars(el, style) {
      for (const [key, value] of Object.entries(this._styleVars(style))) {
        el.style.setProperty(key, value);
      }
    }
    /**
     * @param {SeparatorStyle} style
     */
    _updatePanelPreview(style) {
      if (!this._panelEl) return;
      this._panelEl.querySelectorAll("[data-plg-ss-live-line]").forEach((node) => {
        if (node instanceof HTMLElement) {
          node.setAttribute("data-plg-sidebar-seperators-style", style.borderStyle);
          this._applyStyleVars(node, style);
        }
      });
      this._panelEl.querySelectorAll(`.${PANEL_CLASS}__preview`).forEach((node) => {
        if (node instanceof HTMLElement) this._applyStyleVars(node, style);
      });
    }
    _ensureRuntimeStyle() {
      if (document.getElementById(STYLE_ID)) return;
      const style = document.createElement("style");
      style.id = STYLE_ID;
      document.head.appendChild(style);
    }
    _writeRuntimeStyle() {
      this._ensureRuntimeStyle();
      const styleEl = document.getElementById(STYLE_ID);
      if (!(styleEl instanceof HTMLStyleElement)) return;
      const defaultVars = this._cssVarBlock(this._defaultStyle);
      const collapsedDefaultVars = this._cssVarBlock(this._defaultStyle);
      const perSeparator = Array.from(this._separators.values()).map((entry) => this._separatorRuntimeRules(entry.guid, entry.style || this._defaultStyle, entry.collapsedStyle || entry.style || this._defaultStyle)).join("\n");
      styleEl.textContent = `
			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"] { ${defaultVars} }
			.sidebar.sidebar-collapsed .sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"],
			.sidebar-collapsed .sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"] { ${collapsedDefaultVars} }
			${perSeparator}
		`;
    }
    /**
     * Cloak known separator rows by guid immediately, before mutation marking
     * catches a freshly re-rendered sidebar row.
     * @param {string} guid
     * @param {SeparatorStyle} expandedStyle
     * @param {SeparatorStyle} collapsedStyle
     */
    _separatorRuntimeRules(guid, expandedStyle, collapsedStyle) {
      const selector = `.sidebar--icons ${COLLECTION_ROW_SELECTOR}[data-guid="${this._cssEscape(guid)}"]`;
      const collapsedSelector = `.sidebar.sidebar-collapsed ${selector}`;
      const collapsedAltSelector = `.sidebar-collapsed ${selector}`;
      return `
			${selector} {
				${this._cssVarBlock(expandedStyle)}
				position: relative !important;
				display: block !important;
				min-height: var(--plg-ss-height, 20px) !important;
				height: var(--plg-ss-height, 20px) !important;
				padding-left: 0 !important;
				padding-right: 0 !important;
				padding-top: 0 !important;
				padding-bottom: 0 !important;
				overflow: hidden !important;
				cursor: grab;
				color: var(--text-default, #cbd5e1) !important;
				font-size: 0 !important;
				line-height: 0 !important;
			}

			${collapsedSelector},
			${collapsedAltSelector} {
				${this._cssVarBlock(collapsedStyle)}
			}

			${selector}:active,
			${selector}.plg-sidebar-seperators-dragging {
				cursor: grabbing;
			}

			${selector} > *,
			${selector} .sidebar-item-icon,
			${selector} .sidebar-item-name,
			${selector} .sidebar-item-title,
			${selector} .sidebar-item-text,
			${selector} .ti {
				visibility: hidden !important;
				opacity: 0 !important;
				pointer-events: none !important;
			}

			${selector}::after {
				content: "";
				display: block;
				position: absolute;
				left: var(--plg-ss-left, 50%);
				right: var(--plg-ss-right, auto);
				top: 50%;
				width: min(var(--plg-ss-width, 88%), calc(100% - (var(--plg-ss-inset, 10px) * 2)));
				border-top: var(--plg-ss-thickness, 1px) var(--plg-ss-style, solid) var(--plg-ss-color, currentColor);
				opacity: var(--plg-ss-opacity, 0.86);
				transform-origin: center;
				transform: var(--plg-ss-transform, translate(-50%, -50%));
				transition: opacity 120ms ease-out, transform 120ms ease-out;
			}

			${selector}:hover::after {
				opacity: var(--plg-ss-opacity, 1);
				transform: var(--plg-ss-hover-transform, translate(-50%, -50%) scaleX(1.02));
			}

			${this._separatorPseudoRules(selector, expandedStyle)}
			${this._separatorPseudoRules(collapsedSelector, collapsedStyle)}
			${this._separatorPseudoRules(collapsedAltSelector, collapsedStyle)}
		`;
    }
    /**
     * @param {string} selector
     * @param {SeparatorStyle} style
     */
    _separatorPseudoRules(selector, style) {
      const reset = `
			${selector}::after {
				border-top: var(--plg-ss-thickness, 1px) var(--plg-ss-style, solid) var(--plg-ss-color, currentColor) !important;
				height: auto !important;
				background: transparent !important;
			}
		`;
      if (style.borderStyle === "gradient") {
        return `${reset}
				${selector}::after {
					border-top: 0 !important;
					height: max(var(--plg-ss-thickness, 1px), 1px) !important;
					background: var(--plg-ss-gradient) !important;
				}
			`;
      }
      if (style.borderStyle === "double") {
        return `${reset}
				${selector}::after {
					border-top: 0 !important;
					height: calc((var(--plg-ss-thickness, 1px) * 2) + var(--plg-ss-double-gap, 2px)) !important;
					background:
						linear-gradient(var(--plg-ss-color, currentColor) 0 0) top / 100% var(--plg-ss-thickness, 1px) no-repeat,
						linear-gradient(var(--plg-ss-color, currentColor) 0 0) bottom / 100% var(--plg-ss-thickness, 1px) no-repeat !important;
				}
			`;
      }
      return reset;
    }
    /**
     * @param {SeparatorStyle} style
     */
    _cssVarBlock(style) {
      const vars = this._styleVars(style);
      return Object.entries(vars).map(([key, value]) => `${key}:${value};`).join("");
    }
    /**
     * @param {DragEvent} event
     */
    _onDragStart(event) {
      if (!(event.target instanceof Element)) return;
      const row = event.target.closest(`${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"]`);
      if (!(row instanceof HTMLElement)) return;
      const guid = row.getAttribute("data-guid");
      if (!guid || !this._separators.has(guid)) return;
      this._dragRow = row;
      this._dragGuid = guid;
      row.classList.add("plg-sidebar-seperators-dragging");
      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = "move";
        try {
          event.dataTransfer.setData("text/plain", guid);
        } catch {
        }
      }
      this._recordDragPoint(event);
    }
    /**
     * @param {DragEvent} event
     */
    _onDrag(event) {
      if (!this._dragGuid || !this._dragRow) return;
      this._recordDragPoint(event);
      if (this._isPointOutsideSidebar(this._lastDragPoint.x, this._lastDragPoint.y)) {
        this._beginHold();
      } else {
        this._cancelHold();
      }
    }
    /**
     * @param {boolean} remove
     */
    async _finishDrag(remove) {
      const guid = this._dragGuid;
      const point = { ...this._lastDragPoint };
      if (this._dragRow) this._dragRow.classList.remove("plg-sidebar-seperators-dragging");
      this._dragRow = null;
      this._dragGuid = null;
      this._cancelHold();
      if (!remove || !guid) return;
      this._poof(point.x, point.y);
      try {
        const plugin = this.data.getPluginByGuid(guid);
        if (plugin && plugin.trashPlugin) plugin.trashPlugin();
        this._separators.delete(guid);
        if (this._activeOverrideGuid === guid) this._activeOverrideGuid = null;
        this._hideHoverActionOverlay();
        this._hideActiveActionOverlay();
        this._writeRuntimeStyle();
        this._scheduleRefresh();
        this._renderPanel();
      } catch {
        this._toast("Could not remove separator.");
      }
    }
    _beginHold() {
      if (this._removeTimer || !this._dragGuid) return;
      document.body.classList.add("plg-sidebar-seperators-holding");
      this._showHoldIndicator();
      this._removeTimer = setTimeout(() => {
        this._removeTimer = null;
        this._finishDrag(true);
      }, OUTSIDE_HOLD_MS);
    }
    _cancelHold() {
      if (this._removeTimer) {
        clearTimeout(this._removeTimer);
        this._removeTimer = null;
      }
      document.body.classList.remove("plg-sidebar-seperators-holding");
      document.querySelectorAll(".plg-sidebar-seperators-hold").forEach((node) => node.remove());
    }
    _showHoldIndicator() {
      if (document.querySelector(".plg-sidebar-seperators-hold")) return;
      const indicator = document.createElement("div");
      indicator.className = "plg-sidebar-seperators-hold";
      indicator.textContent = "Hold to remove";
      document.body.appendChild(indicator);
    }
    /**
     * @param {number} x
     * @param {number} y
     */
    _poof(x, y) {
      const root = document.createElement("div");
      root.className = "plg-sidebar-seperators-poof";
      root.style.left = `${Math.max(12, x || 24)}px`;
      root.style.top = `${Math.max(12, y || 24)}px`;
      for (let i = 0; i < 12; i += 1) {
        const bit = document.createElement("span");
        bit.style.setProperty("--angle", `${i * 30}deg`);
        bit.style.setProperty("--distance", `${18 + i % 4 * 5}px`);
        root.appendChild(bit);
      }
      document.body.appendChild(root);
      setTimeout(() => root.remove(), 700);
    }
    _scheduleRefresh() {
      if (this._refreshTimer) return;
      this._refreshTimer = setTimeout(() => {
        this._refreshTimer = null;
        this._refreshSeparators();
      }, 80);
    }
    /**
     * @param {MutationRecord[]} mutations
     */
    _onMutations(mutations) {
      if (this._panelEl && document.contains(this._panelEl)) {
        const panelEl = this._panelEl;
        const touchesOutsidePanel = mutations.some((mutation) => {
          const target = mutation.target;
          if (target instanceof Node && panelEl.contains(target)) return false;
          for (const node of mutation.addedNodes) {
            if (panelEl.contains(node)) return false;
            if (node instanceof Element && panelEl.contains(node)) return false;
          }
          for (const node of mutation.removedNodes) {
            if (panelEl.contains(node)) return false;
            if (node instanceof Element && panelEl.contains(node)) return false;
          }
          return true;
        });
        if (!touchesOutsidePanel) return;
      }
      if (this._separators.size && this._mutationsTouchSidebarRows(mutations)) {
        this._markSidebarRows();
      }
      this._scheduleRefresh();
    }
    /**
     * @param {MutationRecord[]} mutations
     */
    _mutationsTouchSidebarRows(mutations) {
      for (const mutation of mutations) {
        const target = mutation.target;
        if (target instanceof Element && target.closest(ROOT_SELECTOR)) return true;
        for (const node of mutation.addedNodes) {
          if (!(node instanceof Element)) continue;
          if (node.matches(COLLECTION_ROW_SELECTOR) || node.querySelector(COLLECTION_ROW_SELECTOR) || node.closest(ROOT_SELECTOR)) return true;
        }
        for (const node of mutation.removedNodes) {
          if (!(node instanceof Element)) continue;
          if (node.matches(COLLECTION_ROW_SELECTOR) || node.querySelector(COLLECTION_ROW_SELECTOR) || node.closest(ROOT_SELECTOR)) return true;
        }
      }
      return false;
    }
    async _refreshSeparators() {
      try {
        const before = this._separatorSnapshot(this._separators);
        const collections = await this.data.getAllCollections();
        const next = /* @__PURE__ */ new Map();
        for (const collection of collections || []) {
          const conf = collection && collection.getConfiguration ? collection.getConfiguration() : null;
          if (!conf) continue;
          const marker = this._readMarker(conf);
          if (!marker || !collection.getGuid) continue;
          const guid = collection.getGuid();
          if (conf.name !== SEPARATOR_COLLECTION_NAME && !this._nameFixGuids.has(guid)) {
            this._nameFixGuids.add(guid);
            void this._fixSeparatorCollectionName(collection, conf, guid);
          }
          const style = this._pendingSeparatorStyles.has(guid) ? this._pendingSeparatorStyles.get(guid) || null : marker.style ? this._normalizeStyle(marker.style) : null;
          const collapsedStyle = this._pendingCollapsedSeparatorStyles.has(guid) ? this._pendingCollapsedSeparatorStyles.get(guid) || null : marker.collapsedStyle ? this._normalizeStyle(marker.collapsedStyle) : style;
          next.set(guid, {
            collection,
            guid,
            name: conf.name || collection.getName() || "Separator",
            style,
            collapsedStyle
          });
        }
        this._separators = next;
        if (this._activeOverrideGuid && !this._separators.has(this._activeOverrideGuid)) this._activeOverrideGuid = null;
        this._markSidebarRows();
        this._writeRuntimeStyle();
        if (before !== this._separatorSnapshot(next)) this._renderPanel();
      } catch {
        this._markSidebarRows();
      }
    }
    /**
     * @param {Map<string, SeparatorEntry>} map
     */
    _separatorSnapshot(map) {
      return Array.from(map.values()).map((entry) => `${entry.guid}:${entry.name}:${JSON.stringify(entry.style || null)}:${JSON.stringify(entry.collapsedStyle || null)}`).sort().join("|");
    }
    /**
     * @param {PluginCollectionAPI} collection
     * @param {PluginConfiguration} conf
     * @param {string} guid
     */
    async _fixSeparatorCollectionName(collection, conf, guid) {
      try {
        await collection.saveConfiguration({
          ...conf,
          name: SEPARATOR_COLLECTION_NAME
        });
      } catch {
        this._nameFixGuids.delete(guid);
      }
    }
    _markSidebarRows() {
      const panelOpen = this._isPanelOpen();
      const activeGuids = new Set(this._separators.keys());
      document.querySelectorAll(`[${MARK_ATTR}]`).forEach((node) => {
        if (!(node instanceof HTMLElement)) return;
        const guid = node.getAttribute("data-guid");
        if (guid && activeGuids.has(guid)) return;
        node.removeAttribute(MARK_ATTR);
        node.removeAttribute("data-plg-sidebar-seperators-style");
        node.removeAttribute("data-plg-sidebar-seperators-active");
      });
      if (!panelOpen) {
        this._hideHoverActionOverlay();
        this._hideActiveActionOverlay();
      }
      for (const [guid, entry] of this._separators.entries()) {
        const safeGuid = this._cssEscape(guid);
        document.querySelectorAll(`${COLLECTION_ROW_SELECTOR}[data-guid="${safeGuid}"]`).forEach((node) => {
          if (node instanceof HTMLElement) {
            node.setAttribute(MARK_ATTR, "1");
            node.setAttribute("data-plg-sidebar-seperators-style", (entry.style || this._defaultStyle).borderStyle);
            if (panelOpen && this._activeOverrideGuid === guid) node.setAttribute("data-plg-sidebar-seperators-active", "1");
            else node.removeAttribute("data-plg-sidebar-seperators-active");
            node.setAttribute("title", panelOpen ? "Edit or delete this separator" : "Sidebar separator");
            if (panelOpen) this._ensureSidebarActionButtons(node, guid);
          }
        });
      }
      if (panelOpen) this._showActiveActionOverlay();
      else this._hideActiveActionOverlay();
    }
    _isPanelOpen() {
      return !!(this._panelEl && document.contains(this._panelEl));
    }
    /**
     * @param {HTMLElement} row
     * @param {string} guid
     */
    _ensureSidebarActionButtons(row, guid) {
      if (row.dataset.plgSidebarSeperatorsActionsBound === "1") return;
      row.dataset.plgSidebarSeperatorsActionsBound = "1";
      const show = /* @__PURE__ */ __name(() => this._showHoverActionOverlay(row, row.getAttribute("data-guid") || guid), "show");
      row.addEventListener("mouseenter", show);
      row.addEventListener("focusin", show);
      row.addEventListener("mouseleave", () => this._scheduleHideHoverActionOverlay());
    }
    /**
     * Build a fresh action-overlay element (edit + trash buttons). Two
     * separate overlays use this: a transient `hover` overlay that follows
     * the cursor, and a persistent `active` overlay that stays mounted on
     * the currently-edited separator while the panel is open. Both behave
     * identically functionally; `is-active-editing` adds the breathing ring.
     * @param {string} guid
     * @param {{ active: boolean }} opts
     */
    _buildActionOverlay(guid, { active }) {
      const edit = this._sidebarActionButton("Edit separator", "ti-pencil", EDIT_BUTTON_CLASS);
      const del = this._sidebarActionButton("Delete separator", "ti-trash", DELETE_BUTTON_CLASS);
      const overlay = document.createElement("div");
      overlay.className = ACTION_OVERLAY_CLASS + (active ? " is-active-editing" : "");
      overlay.dataset.guid = guid;
      overlay.append(edit, del);
      edit.onclick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this._activeOverrideGuid = guid;
        const entry = this._separators.get(guid);
        if (entry && !entry.style) entry.style = this._normalizeStyle(this._defaultStyle);
        if (entry && !entry.collapsedStyle) entry.collapsedStyle = entry.style ? this._normalizeStyle(entry.style) : this._normalizeStyle(this._defaultStyle);
        this._renderPanel();
        this._markSidebarRows();
      };
      del.onclick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        void this._deleteSeparator(guid, del);
      };
      return overlay;
    }
    /**
     * @param {HTMLElement} row
     * @param {string} guid
     */
    _showHoverActionOverlay(row, guid) {
      if (!this._isPanelOpen()) return;
      if (this._activeOverrideGuid === guid) return;
      if (this._hoverActionOverlayHideTimer) {
        clearTimeout(this._hoverActionOverlayHideTimer);
        this._hoverActionOverlayHideTimer = null;
      }
      let overlay = this._hoverActionOverlayEl;
      if (!overlay || !document.contains(overlay) || overlay.dataset.guid !== guid) {
        if (overlay) overlay.remove();
        overlay = this._buildActionOverlay(guid, { active: false });
        overlay.addEventListener("mouseenter", () => {
          if (this._hoverActionOverlayHideTimer) {
            clearTimeout(this._hoverActionOverlayHideTimer);
            this._hoverActionOverlayHideTimer = null;
          }
        });
        overlay.addEventListener("mouseleave", () => this._scheduleHideHoverActionOverlay());
        document.body.appendChild(overlay);
        this._hoverActionOverlayEl = overlay;
      }
      this._positionActionOverlay(overlay, row);
    }
    _scheduleHideHoverActionOverlay() {
      if (this._hoverActionOverlayHideTimer) clearTimeout(this._hoverActionOverlayHideTimer);
      this._hoverActionOverlayHideTimer = setTimeout(() => {
        this._hoverActionOverlayHideTimer = null;
        this._hideHoverActionOverlay();
      }, 600);
    }
    _hideHoverActionOverlay() {
      if (this._hoverActionOverlayHideTimer) {
        clearTimeout(this._hoverActionOverlayHideTimer);
        this._hoverActionOverlayHideTimer = null;
      }
      if (this._hoverActionOverlayEl) {
        this._hoverActionOverlayEl.remove();
        this._hoverActionOverlayEl = null;
      }
    }
    /**
     * Mount/refresh the persistent overlay on the actively-edited separator
     * row. Stays put no matter where the pointer roams. Hidden when the
     * panel closes or no separator is active.
     */
    _showActiveActionOverlay() {
      if (!this._isPanelOpen() || !this._activeOverrideGuid) {
        this._hideActiveActionOverlay();
        return;
      }
      const safeGuid = this._cssEscape(this._activeOverrideGuid);
      const row = document.querySelector(`${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"][data-guid="${safeGuid}"]`);
      if (!(row instanceof HTMLElement)) {
        this._hideActiveActionOverlay();
        return;
      }
      let overlay = this._activeActionOverlayEl;
      if (!overlay || !document.contains(overlay) || overlay.dataset.guid !== this._activeOverrideGuid) {
        if (overlay) overlay.remove();
        overlay = this._buildActionOverlay(this._activeOverrideGuid, { active: true });
        document.body.appendChild(overlay);
        this._activeActionOverlayEl = overlay;
      }
      this._positionActionOverlay(overlay, row);
      if (this._hoverActionOverlayEl && this._hoverActionOverlayEl.dataset.guid === this._activeOverrideGuid) {
        this._hideHoverActionOverlay();
      }
      this._ensureRepositionListeners();
    }
    _hideActiveActionOverlay() {
      if (this._activeActionOverlayEl) {
        this._activeActionOverlayEl.remove();
        this._activeActionOverlayEl = null;
      }
    }
    /**
     * @param {HTMLElement} overlay
     * @param {HTMLElement} row
     */
    _positionActionOverlay(overlay, row) {
      const rect = row.getBoundingClientRect();
      overlay.style.left = `${Math.round(rect.right + 6)}px`;
      overlay.style.top = `${Math.round(rect.top + rect.height / 2)}px`;
    }
    /**
     * Keep both overlays positioned correctly when the sidebar scrolls or
     * the window resizes. Bound once, removed on unload.
     */
    _ensureRepositionListeners() {
      if (this._boundReposition) return;
      const reposition = /* @__PURE__ */ __name(() => {
        if (this._activeOverlayPositionRaf) return;
        this._activeOverlayPositionRaf = requestAnimationFrame(() => {
          this._activeOverlayPositionRaf = null;
          if (this._activeActionOverlayEl && this._activeActionOverlayEl.dataset.guid) {
            const safeGuid = this._cssEscape(this._activeActionOverlayEl.dataset.guid);
            const row = document.querySelector(`${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"][data-guid="${safeGuid}"]`);
            if (row instanceof HTMLElement) this._positionActionOverlay(this._activeActionOverlayEl, row);
          }
          if (this._hoverActionOverlayEl && this._hoverActionOverlayEl.dataset.guid) {
            const safeGuid = this._cssEscape(this._hoverActionOverlayEl.dataset.guid);
            const row = document.querySelector(`${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"][data-guid="${safeGuid}"]`);
            if (row instanceof HTMLElement) this._positionActionOverlay(this._hoverActionOverlayEl, row);
          }
        });
      }, "reposition");
      this._boundReposition = reposition;
      window.addEventListener("scroll", reposition, true);
      window.addEventListener("resize", reposition);
    }
    /**
     * @param {string} title
     * @param {string} iconClass
     * @param {string} extraClass
     */
    _sidebarActionButton(title, iconClass, extraClass) {
      const buttonEl = document.createElement("button");
      buttonEl.type = "button";
      buttonEl.className = `${ACTION_BUTTON_CLASS} ${extraClass}`;
      buttonEl.title = title;
      buttonEl.setAttribute("aria-label", title);
      const icon = document.createElement("i");
      icon.className = `ti ${iconClass}`;
      icon.setAttribute("aria-hidden", "true");
      buttonEl.appendChild(icon);
      return buttonEl;
    }
    /**
     * @param {Event} event
     */
    _onSeparatorActivate(event) {
      if (!(event.target instanceof Element)) return;
      const row = event.target.closest(`${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"]`);
      if (!(row instanceof HTMLElement)) return;
      if (event.target.closest(`.${ACTION_BUTTON_CLASS}`)) return;
      event.preventDefault();
      event.stopPropagation();
    }
    /**
     * @param {string} guid
     * @param {HTMLElement | null} source
     */
    async _deleteSeparator(guid, source = null) {
      const entry = this._separators.get(guid);
      if (!entry) return;
      if (source) {
        const rect = source.getBoundingClientRect();
        this._poof(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }
      try {
        const plugin = this.data.getPluginByGuid(guid);
        if (plugin && plugin.trashPlugin) plugin.trashPlugin();
        this._separators.delete(guid);
        if (this._activeOverrideGuid === guid) this._activeOverrideGuid = null;
        this._hideHoverActionOverlay();
        this._hideActiveActionOverlay();
        this._writeRuntimeStyle();
        this._markSidebarRows();
        this._renderPanel();
        this._scheduleRefresh();
      } catch {
        this._toast("Could not delete separator.");
      }
    }
    /**
     * @returns {Promise<number>}
     */
    async _nextSeparatorIndex() {
      try {
        const collections = await this.data.getAllCollections();
        let count = 0;
        for (const collection of collections || []) {
          const conf = collection && collection.getConfiguration ? collection.getConfiguration() : null;
          if (conf && this._readMarker(conf)) count += 1;
        }
        return count + 1;
      } catch {
        return this._separators.size + 1;
      }
    }
    /**
     * @param {DragEvent} event
     */
    _recordDragPoint(event) {
      if (event.clientX || event.clientY) {
        this._lastDragPoint = { x: event.clientX, y: event.clientY };
      }
    }
    /**
     * @param {number} x
     * @param {number} y
     */
    _isPointOutsideSidebar(x, y) {
      if (!x && !y) return false;
      const sidebars = Array.from(document.querySelectorAll(ROOT_SELECTOR)).filter((node) => node instanceof HTMLElement);
      if (!sidebars.length) return false;
      return !sidebars.some((sidebar) => {
        const rect = sidebar.getBoundingClientRect();
        return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      });
    }
    /**
     * @param {string} value
     */
    _cssEscape(value) {
      if (window.CSS && typeof window.CSS.escape === "function") return window.CSS.escape(value);
      return value.replace(/["\\]/g, "\\$&");
    }
    /**
     * @param {string} message
     */
    _toast(message) {
      try {
        if (this.ui.addToaster) this.ui.addToaster({ title: message, dismissible: true, autoDestroyTime: 2200 });
      } catch {
      }
    }
    _injectCSS() {
      this.ui.injectCSS(`
			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"] {
				position: relative !important;
				display: block !important;
				min-height: var(--plg-ss-height, 20px) !important;
				height: var(--plg-ss-height, 20px) !important;
				padding-left: 0 !important;
				padding-right: 0 !important;
				padding-top: 0 !important;
				padding-bottom: 0 !important;
				overflow: hidden !important;
				cursor: grab;
				color: var(--text-default, #cbd5e1) !important;
				font-size: 0 !important;
				line-height: 0 !important;
			}

			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"]:active,
			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"].plg-sidebar-seperators-dragging {
				cursor: grabbing;
			}

			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"] > *,
			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"] .sidebar-item-icon,
			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"] .sidebar-item-name,
			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"] .sidebar-item-title,
			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"] .sidebar-item-text,
			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"] .ti {
				visibility: hidden !important;
				opacity: 0 !important;
				pointer-events: none !important;
			}

			.${ACTION_OVERLAY_CLASS} {
				position: fixed !important;
				z-index: 999999 !important;
				display: inline-flex !important;
				align-items: center !important;
				gap: 4px !important;
				padding: 6px 4px 6px 14px !important;
				margin-left: -14px !important;
				transform: translateY(-50%) !important;
				pointer-events: auto !important;
				background: transparent !important;
			}

			.${ACTION_OVERLAY_CLASS} .${ACTION_BUTTON_CLASS} {
				display: inline-flex !important;
				align-items: center !important;
				justify-content: center !important;
				width: 28px !important;
				height: 28px !important;
				padding: 0 !important;
				border: 1px solid var(--border-default, rgba(127,127,127,0.24)) !important;
				border-radius: 7px !important;
				background: var(--bg-default, rgba(20,20,20,0.88)) !important;
				color: var(--text-default, currentColor) !important;
				font-size: 15px !important;
				line-height: 1 !important;
				visibility: visible !important;
				opacity: 1 !important;
				pointer-events: auto !important;
				cursor: pointer !important;
				transition: opacity 120ms ease-out, background-color 120ms ease-out, border-color 120ms ease-out;
			}

			.${ACTION_OVERLAY_CLASS} .${DELETE_BUTTON_CLASS} {
				color: var(--tps-danger, #ef4444) !important;
			}

			@keyframes plgSidebarSeperatorsBreathe {
				0%, 100% { box-shadow: 0 0 0 0 var(--logo-color, var(--accent-color, rgba(4,209,171,0.55))); }
				50%      { box-shadow: 0 0 0 4px transparent; }
			}

			.${ACTION_OVERLAY_CLASS}.is-active-editing .${EDIT_BUTTON_CLASS} {
				border-color: var(--logo-color, var(--accent-color, rgba(4,209,171,0.85))) !important;
				color: var(--logo-color, var(--accent-color, rgba(4,209,171,1))) !important;
				animation: plgSidebarSeperatorsBreathe 1.6s ease-in-out infinite;
			}

			.${ACTION_OVERLAY_CLASS}.is-active-editing .${ACTION_BUTTON_CLASS}:hover {
				background: color-mix(in srgb, var(--logo-color, var(--accent-color, rgba(4,209,171,1))) 16%, var(--bg-default, rgba(20,20,20,0.88))) !important;
			}

			.${ACTION_OVERLAY_CLASS} .${ACTION_BUTTON_CLASS} .ti {
				visibility: visible !important;
				opacity: 1 !important;
				pointer-events: none !important;
				color: inherit !important;
				font-size: inherit !important;
			}

			.${ACTION_OVERLAY_CLASS} .${ACTION_BUTTON_CLASS}:hover {
				background: var(--bg-hover, rgba(127,127,127,0.12)) !important;
				border-color: var(--border-hover, rgba(127,127,127,0.42)) !important;
			}

			.${ACTION_OVERLAY_CLASS} .${DELETE_BUTTON_CLASS}:hover {
				background: rgba(239, 68, 68, 0.16) !important;
				border-color: rgba(239, 68, 68, 0.42) !important;
			}

			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"]::after {
				content: "";
				display: block;
				position: absolute;
				left: var(--plg-ss-left, 50%);
				right: var(--plg-ss-right, auto);
				top: 50%;
				width: min(var(--plg-ss-width, 88%), calc(100% - (var(--plg-ss-inset, 10px) * 2)));
				border-top: var(--plg-ss-thickness, 1px) var(--plg-ss-style, solid) var(--plg-ss-color, currentColor);
				opacity: var(--plg-ss-opacity, 0.86);
				transform-origin: center;
				transform: var(--plg-ss-transform, translate(-50%, -50%));
				transition: opacity 120ms ease-out, transform 120ms ease-out;
			}

			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"]:hover::after {
				opacity: var(--plg-ss-opacity, 1);
				transform: var(--plg-ss-hover-transform, translate(-50%, -50%) scaleX(1.02));
			}

			.${ACTION_OVERLAY_CLASS}.is-active-editing .${EDIT_BUTTON_CLASS} {
				border-color: color-mix(in srgb, var(--tps-accent, var(--accent-color, currentColor)) 55%, transparent) !important;
				background: color-mix(in srgb, var(--tps-accent, var(--accent-color, currentColor)) 18%, var(--bg-default, rgba(20,20,20,0.88))) !important;
				color: var(--tps-accent, var(--accent-color, var(--text-default, currentColor))) !important;
				animation: plg-sidebar-seperators-edit-heartbeat 1600ms ease-in-out infinite;
			}

			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"].plg-sidebar-seperators-dragging {
				opacity: 0.58;
			}

			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"][data-plg-sidebar-seperators-style="gradient"]::after {
				border-top: 0;
				height: max(var(--plg-ss-thickness, 1px), 1px);
				background: var(--plg-ss-gradient);
			}

			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"][data-plg-sidebar-seperators-style="double"]::after {
				border-top: 0;
				height: calc((var(--plg-ss-thickness, 1px) * 2) + var(--plg-ss-double-gap, 2px));
				background:
					linear-gradient(var(--plg-ss-color, currentColor) 0 0) top / 100% var(--plg-ss-thickness, 1px) no-repeat,
					linear-gradient(var(--plg-ss-color, currentColor) 0 0) bottom / 100% var(--plg-ss-thickness, 1px) no-repeat;
			}

			.${PANEL_CLASS}__editor-card,
			.${PANEL_CLASS}__empty-state,
			.${PANEL_CLASS} .tps-section {
				max-width: 1120px;
			}

			.${PANEL_CLASS}__top-actions {
				max-width: 1120px;
				display: flex;
				justify-content: flex-start;
				margin: -4px 0 12px;
			}

			.${PANEL_CLASS}__primary {
				height: 28px;
				padding: 0 10px;
				border: 1px solid color-mix(in srgb, var(--accent-color, currentColor) 50%, transparent);
				border-radius: 6px;
				background: color-mix(in srgb, var(--accent-color, currentColor) 16%, transparent);
				color: var(--accent-color, var(--text-default, currentColor));
				font: inherit;
				font-size: 12px;
				font-weight: 650;
				cursor: pointer;
			}

			.${PANEL_CLASS}__primary:hover {
				background: color-mix(in srgb, var(--accent-color, currentColor) 24%, transparent);
			}

			.${PANEL_CLASS}__preview {
				max-width: 1120px;
				height: 40px;
				display: flex;
				align-items: center;
				justify-content: var(--plg-ss-justify, center);
				padding-inline: var(--plg-ss-inset, 10px);
				margin: 0 0 14px;
				border: 0;
				border-radius: 0;
				background: transparent;
			}

			.${PANEL_CLASS}__preview-rail {
				display: flex;
				align-items: center;
				justify-content: var(--plg-ss-justify, center);
				width: 100%;
			}

			.${PANEL_CLASS} .tps-plugin-header + .${PANEL_CLASS}__preview + .tps-section,
			.${PANEL_CLASS} .tps-plugin-header + .${PANEL_CLASS}__preview + .${PANEL_CLASS}__top-actions + .tps-section {
				padding-top: 0;
				border-top: 0;
			}

			.${PANEL_CLASS} .tps-section + .tps-section {
				margin-top: 16px;
				padding-top: 16px;
				border-top: 1px solid var(--tps-divider, var(--border-default, rgba(127,127,127,0.12)));
			}

			.${PANEL_CLASS} .tps-section-header {
				display: flex;
				align-items: center;
				gap: 10px;
				width: 100%;
				min-height: 34px;
				padding: 0;
				margin: 0;
				border: 0;
				background: transparent;
				color: inherit;
				font: inherit;
				text-align: left;
				cursor: pointer;
				transform: none !important;
			}

			.${PANEL_CLASS} .tps-section-header:hover {
				background: transparent;
			}

			.${PANEL_CLASS} .tps-section-header:active,
			.${PANEL_CLASS} .tps-section-header:focus {
				transform: none !important;
			}

			.${PANEL_CLASS} .tps-section-chev {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				flex: 0 0 18px;
				width: 18px;
				height: 18px;
				font-size: 16px;
				line-height: 1;
				opacity: 0.75;
				transform-origin: center;
				transition: transform var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out), opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
			}

			.${PANEL_CLASS} .tps-section-header:hover .tps-section-chev {
				opacity: 1;
			}

			.${PANEL_CLASS} .tps-section-label {
				display: flex;
				align-items: center;
				min-height: 18px;
				margin: 0 !important;
				line-height: 18px;
			}

			.${PANEL_CLASS} .tps-section-summary {
				min-height: 18px;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				margin-left: auto;
				min-width: 0;
			}

			.${PANEL_CLASS}__section-summary {
				display: block;
				min-width: 0;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.${PANEL_CLASS} .tps-section-body {
				padding: 8px 0 0;
				margin-top: 0;
				border-top: 0;
			}

			.${PANEL_CLASS}__editor-card {
				display: flex;
				flex-direction: column;
				gap: 12px;
			}

			.${PANEL_CLASS}__design-columns {
				display: grid;
				grid-template-columns: repeat(2, minmax(0, 1fr));
				gap: 24px;
				max-width: 1120px;
			}

			.${PANEL_CLASS}__design-column {
				min-width: 0;
				display: flex;
				flex-direction: column;
				gap: 10px;
			}

			.${PANEL_CLASS}__state-title {
				font-size: 11px;
				line-height: 1;
				font-weight: 700;
				letter-spacing: 0.06em;
				text-transform: uppercase;
				color: var(--text-muted, rgba(127,127,127,0.76));
			}

			.${PANEL_CLASS}__eyebrow {
				font-size: 11px;
				line-height: 1;
				font-weight: 700;
				letter-spacing: 0.06em;
				text-transform: uppercase;
				color: var(--text-muted, rgba(127,127,127,0.76));
			}

			.${PANEL_CLASS}__empty-state {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 10px;
				text-align: center;
				padding: 8px 0 0;
			}

			.${PANEL_CLASS}__helper {
				max-width: 520px;
				margin: 0;
				font-size: 12px;
				line-height: 1.45;
				color: var(--text-muted, rgba(127,127,127,0.76));
			}

			.${PANEL_CLASS}__line {
				content: "";
				position: relative;
				display: block;
				width: min(var(--plg-ss-width, 88%), 100%);
				height: max(var(--plg-ss-thickness, 1px), 2px);
				opacity: var(--plg-ss-opacity, 0.86);
				transform: translateY(var(--plg-ss-offset-y, 0px));
			}

			.${PANEL_CLASS}__line::before {
				content: "";
				position: absolute;
				left: 0;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
				border-top: var(--plg-ss-thickness, 1px) var(--plg-ss-style, solid) var(--plg-ss-color, currentColor);
			}

			.${PANEL_CLASS}__line[data-plg-sidebar-seperators-style="gradient"]::before {
				border-top: 0;
				height: max(var(--plg-ss-thickness, 1px), 1px);
				background: var(--plg-ss-gradient);
			}

			.${PANEL_CLASS}__line[data-plg-sidebar-seperators-style="double"] {
				height: calc((var(--plg-ss-thickness, 1px) * 2) + var(--plg-ss-double-gap, 2px));
			}

			.${PANEL_CLASS}__line[data-plg-sidebar-seperators-style="double"]::before {
				border-top: 0;
				top: 0;
				bottom: 0;
				transform: none;
				background:
					linear-gradient(var(--plg-ss-color, currentColor) 0 0) top / 100% var(--plg-ss-thickness, 1px) no-repeat,
					linear-gradient(var(--plg-ss-color, currentColor) 0 0) bottom / 100% var(--plg-ss-thickness, 1px) no-repeat;
			}

			.${PANEL_CLASS}__editor,
			.${PANEL_CLASS}__colors {
				display: flex;
				flex-direction: column;
				gap: 10px;
			}

			.${PANEL_CLASS}__color-hero {
				display: grid;
				grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
				gap: 10px;
				align-items: stretch;
			}

			.${PANEL_CLASS}__color-hero > .${PANEL_CLASS}__preset-row {
				margin: 0;
			}

			@media (max-width: 520px) {
				.${PANEL_CLASS}__color-hero {
					grid-template-columns: minmax(0, 1fr);
				}
			}

			.${PANEL_CLASS}__preset-row {
				display: grid;
				grid-template-columns: 28px minmax(0, 1fr) 18px;
				align-items: center;
				column-gap: 12px;
				width: 100%;
				padding: 12px 14px;
				margin: 0;
				border: 1px solid var(--tps-border, var(--border-default, rgba(127,127,127,0.18)));
				border-radius: 8px;
				background: var(--tps-bg-input, var(--bg-default, rgba(127,127,127,0.06)));
				color: inherit;
				font: inherit;
				text-align: left;
				cursor: pointer;
				transition: background-color 120ms ease-out, border-color 120ms ease-out, box-shadow 120ms ease-out;
			}

			.${PANEL_CLASS}__preset-row:hover {
				background: var(--tps-bg-hover, var(--bg-hover, rgba(127,127,127,0.08)));
				border-color: var(--tps-border-strong, var(--border-default, rgba(127,127,127,0.32)));
			}

			.${PANEL_CLASS}__preset-row.is-active {
				background: color-mix(in srgb, var(--tps-accent, var(--accent-color, currentColor)) 12%, var(--tps-bg-input, transparent));
				border-color: color-mix(in srgb, var(--tps-accent, var(--accent-color, currentColor)) 50%, transparent);
				box-shadow: 0 0 0 1px color-mix(in srgb, var(--tps-accent, var(--accent-color, currentColor)) 22%, transparent);
			}

			.${PANEL_CLASS}__preset-swatch {
				display: block;
				width: 22px;
				height: 22px;
				border-radius: 999px;
				box-shadow: inset 0 0 0 1px rgba(255,255,255,0.14), 0 0 0 1px rgba(0,0,0,0.18);
			}

			.${PANEL_CLASS}__preset-text {
				display: flex;
				flex-direction: column;
				min-width: 0;
				gap: 2px;
			}

			.${PANEL_CLASS}__preset-title {
				font-size: 13px;
				font-weight: 600;
				color: var(--tps-text, var(--text-default, currentColor));
			}

			.${PANEL_CLASS}__preset-row.is-active .${PANEL_CLASS}__preset-title {
				color: var(--tps-accent, var(--accent-color, currentColor));
			}

			.${PANEL_CLASS}__preset-hint {
				font-size: 11.5px;
				line-height: 1.4;
				color: var(--tps-text-muted, var(--text-muted, rgba(127,127,127,0.76)));
			}

			.${PANEL_CLASS}__preset-check {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 18px;
				height: 18px;
				font-size: 14px;
				font-weight: 700;
				color: var(--tps-accent, var(--accent-color, currentColor));
			}

			.${PANEL_CLASS}__custom-row .${PANEL_CLASS}__preset-hint {
				font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
				font-size: 11.5px;
			}

			.${PANEL_CLASS}__field {
				display: grid;
				grid-template-columns: 90px 1fr;
				gap: 12px;
				align-items: center;
			}

			.${PANEL_CLASS}__design-column .${PANEL_CLASS}__field {
				grid-template-columns: 76px minmax(0, 1fr);
			}

			.${PANEL_CLASS}__segmented {
				display: flex;
				flex-wrap: wrap;
				gap: 4px;
			}

			.${PANEL_CLASS}__seg {
				height: 28px;
				padding: 0 8px;
				border: 1px solid transparent;
				border-radius: 6px;
				background: transparent;
				color: var(--text-muted, rgba(127,127,127,0.76));
				font: inherit;
				font-size: 12px;
				cursor: pointer;
			}

			.${PANEL_CLASS}__seg:hover {
				background: var(--bg-hover, rgba(127,127,127,0.06));
				color: var(--text-default, currentColor);
			}

			.${PANEL_CLASS}__seg.is-active {
				border-color: color-mix(in srgb, var(--accent-color, currentColor) 52%, transparent);
				background: color-mix(in srgb, var(--accent-color, currentColor) 14%, transparent);
				color: var(--accent-color, var(--text-default, currentColor));
			}

			.${PANEL_CLASS}__number {
				display: grid;
				grid-template-columns: 90px auto;
				gap: 12px;
				align-items: center;
			}

			.${PANEL_CLASS}__design-column .${PANEL_CLASS}__number {
				grid-template-columns: 76px auto;
			}

			.${PANEL_CLASS}__slider {
				display: grid;
				grid-template-columns: 90px minmax(120px, 1fr) 42px;
				gap: 12px;
				align-items: center;
				max-width: 520px;
			}

			.${PANEL_CLASS}__design-column .${PANEL_CLASS}__slider {
				grid-template-columns: 76px minmax(80px, 1fr) 38px;
			}

			.${PANEL_CLASS}__slider input {
				width: 100%;
				accent-color: var(--accent-color, currentColor);
			}

			.${PANEL_CLASS}__slider-value {
				font-size: 12px;
				color: var(--text-muted, rgba(127,127,127,0.76));
				font-variant-numeric: tabular-nums;
				text-align: right;
			}

			.${PANEL_CLASS}__number-control {
				display: inline-flex;
				align-items: center;
				gap: 4px;
			}

			.${PANEL_CLASS}__number-control button,
			.${PANEL_CLASS}__number-control input {
				height: 28px;
				border: 1px solid var(--border-subtle, rgba(127,127,127,0.16));
				border-radius: 6px;
				background: transparent;
				color: var(--text-default, currentColor);
				font: inherit;
				font-size: 12px;
			}

			.${PANEL_CLASS}__number-control button {
				width: 28px;
				cursor: pointer;
			}

			.${PANEL_CLASS}__number-control button:hover {
				background: var(--bg-hover, rgba(127,127,127,0.06));
				border-color: var(--border-default, rgba(127,127,127,0.24));
			}

			.${PANEL_CLASS}__number-control input {
				width: 58px;
				padding: 0 6px;
				text-align: center;
			}

			.${PANEL_CLASS}__number-control input::-webkit-outer-spin-button,
			.${PANEL_CLASS}__number-control input::-webkit-inner-spin-button {
				-webkit-appearance: none;
				margin: 0;
			}

			.${PANEL_CLASS}__number-unit {
				font-size: 12px;
				color: var(--text-muted, rgba(127,127,127,0.76));
			}

			.${PANEL_CLASS}__field-label,
			.${PANEL_CLASS}__colors-label,
			.${PANEL_CLASS}__custom-color span {
				font-size: 11px;
				font-weight: 700;
				letter-spacing: 0.06em;
				text-transform: uppercase;
				color: var(--text-muted, rgba(127,127,127,0.76));
			}

			.${PANEL_CLASS}__custom-color {
				display: grid;
				grid-template-columns: 90px auto;
				gap: 12px;
				align-items: center;
			}

			.${PANEL_CLASS}__custom-color input {
				width: 42px;
				height: 28px;
				padding: 0;
				border: 1px solid var(--border-default, rgba(127,127,127,0.2));
				border-radius: 6px;
				background: transparent;
			}

			.${PANEL_CLASS}__colors-group {
				display: flex;
				flex-direction: column;
				gap: 6px;
			}

			.${PANEL_CLASS}__colors-grid {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
				gap: 6px;
			}

			.${PANEL_CLASS}__colors-grid--compact {
				grid-template-columns: repeat(auto-fill, 26px);
			}

			.${PANEL_CLASS}__color {
				display: inline-flex;
				align-items: center;
				gap: 7px;
				min-width: 0;
				height: 28px;
				padding: 0 8px;
				border-radius: 6px;
				border: 1px solid var(--border-subtle, rgba(127,127,127,0.16));
				background: transparent;
				color: var(--text-default, currentColor);
				font: inherit;
				font-size: 12px;
				cursor: pointer;
				pointer-events: auto;
				position: relative;
				z-index: 1;
			}

			.${PANEL_CLASS}__color:hover {
				background: var(--bg-hover, rgba(127,127,127,0.06));
			}

			.${PANEL_CLASS}__color.is-active {
				border-color: color-mix(in srgb, var(--accent-color, currentColor) 52%, transparent);
				background: color-mix(in srgb, var(--accent-color, currentColor) 14%, transparent);
			}

			.${PANEL_CLASS}__color-dot {
				width: 14px;
				height: 14px;
				flex: 0 0 auto;
				border-radius: 999px;
				box-shadow: inset 0 0 0 1px rgba(255,255,255,0.14), 0 0 0 1px rgba(0,0,0,0.1);
			}

			.${PANEL_CLASS}__color--swatch {
				justify-content: center;
				width: 26px;
				height: 26px;
				padding: 0;
			}

			.${PANEL_CLASS}__color-name {
				min-width: 0;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.${COLLECTION_COLORS_CLASS}__palette-list {
				display: flex;
				flex-direction: column;
				border-top: 1px solid var(--tps-divider, var(--border-default, rgba(127,127,127,0.1)));
			}
			.${COLLECTION_COLORS_CLASS}__palette-row {
				display: flex;
				flex-wrap: nowrap;
				align-items: center;
				gap: 12px;
				padding: 8px 0;
				border-bottom: 1px solid var(--tps-divider, var(--border-default, rgba(127,127,127,0.08)));
			}
			.${COLLECTION_COLORS_CLASS}__palette-row.is-truncated .${COLLECTION_COLORS_CLASS}__palette-row-dots {
				display: none;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row:last-child { border-bottom: 0; }
			.${COLLECTION_COLORS_CLASS}__palette-row:hover { background: var(--bg-hover, rgba(127,127,127,0.04)); }
			.${COLLECTION_COLORS_CLASS}__palette-row.is-active {
				background: var(--tps-accent-soft, color-mix(in srgb, var(--tps-accent, var(--accent-color, currentColor)) 12%, transparent));
				padding-left: 8px;
				padding-right: 8px;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row.is-active .${COLLECTION_COLORS_CLASS}__palette-row-name {
				color: var(--tps-accent, var(--accent-color, currentColor));
				font-weight: 600;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row-name {
				display: flex;
				align-items: center;
				gap: 8px;
				border: 0;
				background: transparent;
				color: inherit;
				font: inherit;
				padding: 0;
				text-align: left;
				cursor: pointer;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				flex: 0 0 auto;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row-dots {
				display: flex;
				flex-wrap: nowrap;
				gap: 4px;
				flex: 1 1 auto;
				min-width: 0;
			}
			.${COLLECTION_COLORS_CLASS}__palette-dot {
				width: 14px;
				height: 14px;
				border-radius: 50%;
				box-shadow: inset 0 0 0 1px rgba(255,255,255,0.06);
				flex: 0 0 auto;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row-reveal {
				display: inline-flex !important;
				align-items: center;
				justify-content: center;
				gap: 4px;
				margin-left: auto;
				width: 28px;
				height: 28px;
				padding: 0;
				border-radius: 4px;
				opacity: 0;
				visibility: hidden;
				font-size: 16px;
				line-height: 1;
				flex: 0 0 28px;
				border: 0;
				background: transparent;
				color: inherit;
				cursor: pointer;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row-reveal:hover {
				background: var(--bg-hover, rgba(127,127,127,0.1));
				opacity: 1;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row-reveal::after {
				content: '\u25BE';
				opacity: 0.7;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row.is-revealed .${COLLECTION_COLORS_CLASS}__palette-row-reveal::after {
				content: '\u25B4';
			}
			.${COLLECTION_COLORS_CLASS}__palette-row.is-truncated .${COLLECTION_COLORS_CLASS}__palette-row-reveal,
			.${COLLECTION_COLORS_CLASS}__palette-row.is-revealed .${COLLECTION_COLORS_CLASS}__palette-row-reveal {
				opacity: 0.75;
				visibility: visible;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row.is-truncated,
			.${COLLECTION_COLORS_CLASS}__palette-row.is-revealed {
				cursor: pointer;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row.is-truncated:hover,
			.${COLLECTION_COLORS_CLASS}__palette-row.is-revealed:hover {
				background: var(--bg-hover, rgba(127,127,127,0.06));
			}
			.${COLLECTION_COLORS_CLASS}__palette-row.is-revealed {
				flex-wrap: wrap;
				align-items: flex-start;
				overflow: visible;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row.is-revealed .${COLLECTION_COLORS_CLASS}__palette-row-dots {
				display: flex !important;
				flex-wrap: wrap;
				flex: 1 0 100%;
				width: 100%;
				min-width: 0;
				margin-top: 4px;
				overflow: visible;
			}
			.${COLLECTION_COLORS_CLASS}__tailwind-shades {
				display: flex;
				align-items: flex-start;
				gap: 10px;
				padding: 8px;
				background: var(--tps-accent-soft, color-mix(in srgb, var(--tps-accent, var(--accent-color, currentColor)) 12%, transparent));
			}
			.${COLLECTION_COLORS_CLASS}__tailwind-shades-label {
				flex: 0 0 auto;
				min-height: 28px;
				display: inline-flex;
				align-items: center;
				font-size: 11px;
				font-weight: 600;
				opacity: 0.7;
				text-transform: uppercase;
				letter-spacing: 0.04em;
			}
			.${COLLECTION_COLORS_CLASS}__tailwind-shades-seg {
				display: flex;
				flex: 1 1 auto;
				min-width: 0;
				flex-wrap: wrap;
				gap: 4px;
			}
			.${COLLECTION_COLORS_CLASS}__shade-btn {
				min-width: 44px;
				height: 28px;
				border: 1px solid transparent;
				background: transparent;
				color: inherit;
				padding: 0 8px;
				border-radius: 4px;
				cursor: pointer;
				font: inherit;
				font-size: 12px;
			}
			.${COLLECTION_COLORS_CLASS}__shade-btn:hover,
			.${COLLECTION_COLORS_CLASS}__shade-btn:focus-visible {
				background: var(--tps-bg-hover, var(--bg-hover, rgba(127,127,127,0.1)));
				border-color: var(--tps-border, rgba(127,127,127,0.24));
				color: var(--tps-text, var(--text-default, currentColor));
				outline: none;
			}
			.${COLLECTION_COLORS_CLASS}__shade-btn.is-active {
				background: var(--tps-accent-soft, color-mix(in srgb, var(--tps-accent, var(--accent-color, currentColor)) 15%, transparent));
				border-color: color-mix(in srgb, var(--tps-accent, var(--accent-color, currentColor)) 45%, transparent);
				color: var(--tps-accent, var(--accent-color, currentColor));
				font-weight: 600;
			}

			.${COLLECTION_COLORS_CLASS}__swatch-wrapper {
				width: 100%;
				min-width: 0;
				overflow: visible;
			}
			.${COLLECTION_COLORS_CLASS}__swatch-wrapper.is-compact,
			.${COLLECTION_COLORS_CLASS}__swatch-wrapper.is-open {
				overflow: visible;
			}
			.${COLLECTION_COLORS_CLASS}__swatch-wrapper:not(.is-compact) .${COLLECTION_COLORS_CLASS}__swatches {
				flex-wrap: nowrap;
			}
			.${COLLECTION_COLORS_CLASS}__swatches {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				align-content: flex-start;
				gap: 5px;
				width: 100%;
				max-width: 100%;
				min-width: 0;
				overflow: visible;
				padding: 2px 0;
			}
			.${COLLECTION_COLORS_CLASS}__swatch {
				flex: 0 0 18px;
				width: 18px;
				height: 18px;
				border-radius: 50%;
				border: 0;
				padding: 0;
				cursor: pointer;
				outline: none;
				box-shadow: inset 0 0 0 1px rgba(255,255,255,0.05);
				opacity: 0.42;
				transition: transform 0.08s ease, box-shadow 0.08s ease, opacity 0.08s ease;
			}
			.${COLLECTION_COLORS_CLASS}__swatch:hover { transform: scale(1.1); opacity: 0.78; }
			.${COLLECTION_COLORS_CLASS}__swatch.is-active {
				opacity: 1;
				box-shadow: 0 0 0 2px #ffffff, 0 0 0 3px rgba(0,0,0,0.45);
			}
			.${COLLECTION_COLORS_CLASS}__swatch--custom {
				background: linear-gradient(135deg, #ffffff 50%, #111111 50%);
			}
			.${COLLECTION_COLORS_CLASS}__custom-panel {
				display: grid;
				grid-template-columns: minmax(150px, 0.75fr) minmax(180px, 1fr);
				gap: 12px;
				align-items: start;
				padding: 8px 0 0;
				border-radius: 0;
				background: transparent;
				border-top: 1px solid var(--tps-divider, rgba(127,127,127,0.12));
				margin-top: 6px;
			}
			.${COLLECTION_COLORS_CLASS}__custom-left,
			.${COLLECTION_COLORS_CLASS}__custom-right {
				display: flex;
				flex-direction: column;
				gap: 8px;
				min-width: 0;
			}
			.${COLLECTION_COLORS_CLASS}__sv {
				position: relative; width: 100%; aspect-ratio: 1.35 / 1;
				max-height: 150px;
				border-radius: 6px;
				background:
					linear-gradient(to top, #000, transparent),
					linear-gradient(to right, #fff, hsl(var(--hue, 0), 100%, 50%));
				cursor: crosshair; touch-action: none; user-select: none;
			}
			.${COLLECTION_COLORS_CLASS}__sv-thumb {
				position: absolute; width: 12px; height: 12px;
				border: 2px solid #fff; border-radius: 50%;
				transform: translate(-50%, -50%); pointer-events: none;
				box-shadow: 0 0 0 1px rgba(0,0,0,0.6);
			}
			.${COLLECTION_COLORS_CLASS}__hue {
				width: 100%; height: 10px; appearance: none;
				background: linear-gradient(to right,
					#f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
				border-radius: 6px; outline: none;
			}
			.${COLLECTION_COLORS_CLASS}__hue::-webkit-slider-thumb {
				appearance: none; width: 14px; height: 14px;
				border-radius: 50%; background: #fff;
				border: 2px solid rgba(0,0,0,0.6); cursor: pointer;
			}
			.${COLLECTION_COLORS_CLASS}__formats {
				display: inline-flex; align-self: flex-start;
				background: rgba(127,127,127,0.12); border-radius: 6px; padding: 2px;
			}
			.${COLLECTION_COLORS_CLASS}__format-btn {
				border: 0; background: transparent; color: inherit;
				padding: 3px 8px; border-radius: 4px;
				cursor: pointer; font-size: 11px; letter-spacing: 0.04em;
			}
			.${COLLECTION_COLORS_CLASS}__format-btn.is-active {
				background: rgba(127,127,127,0.24); font-weight: 600;
			}
			.${COLLECTION_COLORS_CLASS}__inputs { display: flex; gap: 6px; align-items: center; }
			.${COLLECTION_COLORS_CLASS}__hex-input,
			.${COLLECTION_COLORS_CLASS}__num input {
				background: rgba(127,127,127,0.12);
				border: 1px solid rgba(127,127,127,0.18);
				color: inherit;
				padding: 5px 7px; border-radius: 4px;
				font-size: 12px;
				font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
				outline: none;
			}
			.${COLLECTION_COLORS_CLASS}__hex-input { flex: 1; }
			.${COLLECTION_COLORS_CLASS}__num { display: flex; flex-direction: column; align-items: center; gap: 2px; flex: 1; }
			.${COLLECTION_COLORS_CLASS}__num input { width: 100%; text-align: center; }
			.${COLLECTION_COLORS_CLASS}__num-label,
			.${COLLECTION_COLORS_CLASS}__input-label { font-size: 10px; opacity: 0.6; letter-spacing: 0.04em; }
			.${COLLECTION_COLORS_CLASS}__random {
				align-self: flex-start;
				background: rgba(127,127,127,0.12);
				border: 1px solid rgba(127,127,127,0.18);
				color: inherit;
				padding: 4px 9px; border-radius: 4px;
				font-size: 12px; cursor: pointer;
			}
			.${COLLECTION_COLORS_CLASS}__random:hover { background: rgba(127,127,127,0.2); }
			.${COLLECTION_COLORS_CLASS}__actions {
				display: flex; gap: 6px; justify-content: flex-end;
			}
			.${COLLECTION_COLORS_CLASS}__btn {
				border: 0; padding: 5px 12px; border-radius: 4px;
				font-size: 12px; cursor: pointer;
			}
			.${COLLECTION_COLORS_CLASS}__btn--ghost { background: transparent; color: inherit; opacity: 0.75; }
			.${COLLECTION_COLORS_CLASS}__btn--primary {
				background: color-mix(in srgb, var(--tps-accent, var(--accent-color, currentColor)) 18%, transparent);
				color: var(--tps-accent, var(--accent-color, currentColor)); font-weight: 600;
			}
			.${COLLECTION_COLORS_CLASS}__btn--primary:hover { background: color-mix(in srgb, var(--tps-accent, var(--accent-color, currentColor)) 30%, transparent); }
			@media (max-width: 560px) {
				.${COLLECTION_COLORS_CLASS}__custom-panel {
					grid-template-columns: 1fr;
				}
			}

			.${PANEL_CLASS}__muted,
			.${PANEL_CLASS}__empty {
				font-size: 12px;
				color: var(--text-muted, rgba(127,127,127,0.76));
			}

			.${PANEL_CLASS}__actions {
				display: flex;
				align-items: center;
				gap: 8px;
				flex-wrap: wrap;
			}

			.plg-sidebar-seperators-hold {
				position: fixed;
				left: 50%;
				bottom: 24px;
				z-index: 999999;
				transform: translateX(-50%);
				padding: 7px 11px;
				border-radius: 999px;
				border: 1px solid var(--border-default, rgba(127,127,127,0.22));
				background:
					linear-gradient(90deg, var(--accent-color, currentColor) 0 0) 0 100% / 0% 2px no-repeat,
					var(--bg-default, rgba(20,20,20,0.88));
				color: var(--text-default, currentColor);
				font: inherit;
				font-size: 12px;
				line-height: 1;
				pointer-events: none;
				animation: plg-sidebar-seperators-hold-fill ${OUTSIDE_HOLD_MS}ms linear forwards;
			}

			.plg-sidebar-seperators-poof {
				position: fixed;
				z-index: 999999;
				width: 2px;
				height: 2px;
				pointer-events: none;
				transform: translate(-1px, -1px);
			}

			.plg-sidebar-seperators-poof span {
				position: absolute;
				left: 0;
				top: 0;
				width: 6px;
				height: 6px;
				border-radius: 999px;
				background: var(--accent-color, var(--text-default, #fff));
				transform: rotate(var(--angle)) translateX(0) scale(0.7);
				opacity: 0.9;
				animation: plg-sidebar-seperators-poof 620ms cubic-bezier(0.15, 0.8, 0.2, 1) forwards;
			}

			@keyframes plg-sidebar-seperators-hold-fill {
				to { background-size: 100% 2px, auto; }
			}

			@keyframes plg-sidebar-seperators-poof {
				65% {
					opacity: 0.8;
					transform: rotate(var(--angle)) translateX(var(--distance)) scale(1);
				}
				to {
					opacity: 0;
					transform: rotate(var(--angle)) translateX(calc(var(--distance) + 8px)) scale(0);
				}
			}

			@keyframes plg-sidebar-seperators-edit-heartbeat {
				0%, 100% {
					background: color-mix(in srgb, var(--tps-accent, var(--accent-color, currentColor)) 16%, var(--bg-default, rgba(20,20,20,0.88)));
					box-shadow: 0 0 0 0 color-mix(in srgb, var(--tps-accent, var(--accent-color, currentColor)) 0%, transparent);
				}
				50% {
					background: color-mix(in srgb, var(--tps-accent, var(--accent-color, currentColor)) 28%, var(--bg-default, rgba(20,20,20,0.88)));
					box-shadow: 0 0 0 3px color-mix(in srgb, var(--tps-accent, var(--accent-color, currentColor)) 18%, transparent);
				}
			}

			@media (prefers-reduced-motion: reduce) {
				.plg-sidebar-seperators-hold,
				.plg-sidebar-seperators-poof span {
					animation-duration: 1ms;
				}
			}

			@media (max-width: 900px) {
				.${PANEL_CLASS}__design-columns {
					grid-template-columns: 1fr;
					gap: 18px;
				}
			}
		`);
    }
  };
  return __toCommonJS(plugin_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vcGx1Z2luLmpzIiwgIi4uLy4uLy4uL19wYW5lbC1zeXN0ZW0vdG9rZW5zLmNzcyIsICIuLi8uLi8uLi9fcGFuZWwtc3lzdGVtL2NvbXBvbmVudHMuY3NzIiwgIi4uLy4uLy4uL19wYW5lbC1zeXN0ZW0vaGVscGVycy5qcyIsICIuLi8uLi8uLi9fcGFuZWwtc3lzdGVtL3RoZW1lLXZhcnMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogU2lkZWJhciBTZXBlcmF0b3JzIFx1MjAxNCBhZGQgbW92YWJsZSB0aGVtZS1jb2xvcmVkIHNlcGFyYXRvcnMgdG8gdGhlIGNvbGxlY3Rpb25zIGxpc3QuXG4gKlxuICogQXBwUGx1Z2luIChnbG9iYWwpLiBPcGVuIHZpYSBjb21tYW5kIHBhbGV0dGU6IFwiUGx1Z2luOiBTaWRlYmFyIFNlcGVyYXRvcnNcIi5cbiAqXG4gKiBEQU5HRVI6IFRoaXMgcGx1Z2luIHBpbnMgdG8gVGh5bWVyJ3MgY3VycmVudCBzaWRlYmFyIERPTTpcbiAqICAgLnNpZGViYXIsIC5zaWRlYmFyLS1pY29ucywgLnNpZGViYXItaXRlbS1jb2xsZWN0aW9uW2RhdGEtZ3VpZF1cbiAqIFRoZSBzZXBhcmF0b3IgaXMgYSByZWFsIGNvbGxlY3Rpb24gbWFya2VkIGluIGNvbmZpZy5jdXN0b20uc2lkZWJhclNlcGVyYXRvcnMsXG4gKiBzbyBuYXRpdmUgY29sbGVjdGlvbiBvcmRlcmluZy9kcmFnZ2luZyByZW1haW5zIG93bmVkIGJ5IFRoeW1lci5cbiAqIExhc3QgdmVyaWZpZWQgZnJvbSByZXBvIHBhdHRlcm5zIG9uIDIwMjYtMDUtMDYuXG4gKi9cblxuaW1wb3J0IHtcblx0UEFORUxfQ1NTLFxuXHRoLFxuXHRwYW5lbCxcblx0cGx1Z2luSGVhZGVyLFxufSBmcm9tICcuLi8uLi9fcGFuZWwtc3lzdGVtL2hlbHBlcnMuanMnO1xuaW1wb3J0IHtcblx0Y29sbGVjdFJlbmRlcmVkVGhlbWVDb2xvcnMsXG59IGZyb20gJy4uLy4uL19wYW5lbC1zeXN0ZW0vdGhlbWUtdmFycy5qcyc7XG5cbmNvbnN0IFBMVUdJTl9LRVkgPSAnc2lkZWJhclNlcGVyYXRvcnMnO1xuY29uc3QgTUFSS19BVFRSID0gJ2RhdGEtcGxnLXNpZGViYXItc2VwZXJhdG9yJztcbmNvbnN0IFBBTkVMX0NMQVNTID0gJ3BsZy1zaWRlYmFyLXNlcGVyYXRvcnMtcGFuZWwnO1xuY29uc3QgQ09MTEVDVElPTl9DT0xPUlNfQ0xBU1MgPSAncGxnLWNvbGxlY3Rpb24tY29sb3JzJztcbmNvbnN0IFBBTkVMX1RZUEUgPSAnc2lkZWJhci1zZXBlcmF0b3JzLXNldHRpbmdzJztcbmNvbnN0IFNUWUxFX0lEID0gJ3BsZy1zaWRlYmFyLXNlcGVyYXRvcnMtcnVudGltZS1zdHlsZSc7XG5jb25zdCBBQ1RJT05fQlVUVE9OX0NMQVNTID0gJ3BsZy1zaWRlYmFyLXNlcGVyYXRvcnMtYWN0aW9uLWJ1dHRvbic7XG5jb25zdCBFRElUX0JVVFRPTl9DTEFTUyA9ICdwbGctc2lkZWJhci1zZXBlcmF0b3JzLWVkaXQtYnV0dG9uJztcbmNvbnN0IERFTEVURV9CVVRUT05fQ0xBU1MgPSAncGxnLXNpZGViYXItc2VwZXJhdG9ycy1kZWxldGUtYnV0dG9uJztcbmNvbnN0IEFDVElPTl9PVkVSTEFZX0NMQVNTID0gJ3BsZy1zaWRlYmFyLXNlcGVyYXRvcnMtYWN0aW9uLW92ZXJsYXknO1xuY29uc3QgUk9PVF9TRUxFQ1RPUiA9ICcuc2lkZWJhci0taWNvbnMsIC5zaWRlYmFyJztcbmNvbnN0IENPTExFQ1RJT05fUk9XX1NFTEVDVE9SID0gJy5zaWRlYmFyLWl0ZW0tY29sbGVjdGlvbltkYXRhLWd1aWRdJztcbmNvbnN0IE9VVFNJREVfSE9MRF9NUyA9IDMwMDA7XG5jb25zdCBUSEVNRV9BQ0NFTlRfQ1NTID0gJ3ZhcigtLWxvZ28tY29sb3IsIHZhcigtLWFjY2VudC1jb2xvciwgdmFyKC0tY29sb3ItYWNjZW50LCB2YXIoLS10aGVtZS1hY2NlbnQsIHZhcigtLWNvbG9yLXByaW1hcnksICMzYjgyZjYpKSkpKSc7XG5jb25zdCBTRVBBUkFUT1JfQ09MTEVDVElPTl9OQU1FID0gJ1xcdTIwMGInO1xuY29uc3QgU0lERUJBUl9ESVZJREVSX1ZBUl9WQUxVRSA9ICd0aGVtZS12YXI6LS1zaWRlYmFyLWRpdmlkZXItY29sb3InO1xuY29uc3QgU0lERUJBUl9ESVZJREVSX1ZBUl9DU1MgPSAndmFyKC0tc2lkZWJhci1kaXZpZGVyLWNvbG9yLCB2YXIoLS1kaXZpZGVyLWNvbG9yLCB2YXIoLS1ib3JkZXItZGVmYXVsdCwgcmdiYSgxMjcsMTI3LDEyNywwLjMyKSkpKSc7XG5cbmNvbnN0IEJPUkRFUl9TVFlMRVMgPSAvKiogQHR5cGUge2NvbnN0fSAqLyAoW1xuXHQnc29saWQnLFxuXHQnZGFzaGVkJyxcblx0J2RvdHRlZCcsXG5cdCdkb3VibGUnLFxuXHQnZ3JhZGllbnQnLFxuXSk7XG5cbmNvbnN0IEFMSUdOTUVOVFMgPSAvKiogQHR5cGUge2NvbnN0fSAqLyAoW1xuXHQnbGVmdCcsXG5cdCdjZW50ZXInLFxuXHQncmlnaHQnLFxuXSk7XG5cbmNvbnN0IFRBSUxXSU5EX1NIQURFUyA9IE9iamVjdC5mcmVlemUoWzEwMCwgMjAwLCAzMDAsIDQwMCwgNTAwLCA2MDAsIDcwMCwgODAwLCA5MDBdKTtcblxuY29uc3QgVEFJTFdJTkRfRkFNSUxJRVMgPSBPYmplY3QuZnJlZXplKHtcblx0U2xhdGU6IHsgMTAwOiAnI2YxZjVmOScsIDIwMDogJyNlMmU4ZjAnLCAzMDA6ICcjY2JkNWUxJywgNDAwOiAnIzk0YTNiOCcsIDUwMDogJyM2NDc0OGInLCA2MDA6ICcjNDc1NTY5JywgNzAwOiAnIzMzNDE1NScsIDgwMDogJyMxZTI5M2InLCA5MDA6ICcjMGYxNzJhJyB9LFxuXHRHcmF5OiB7IDEwMDogJyNmM2Y0ZjYnLCAyMDA6ICcjZTVlN2ViJywgMzAwOiAnI2QxZDVkYicsIDQwMDogJyM5Y2EzYWYnLCA1MDA6ICcjNmI3MjgwJywgNjAwOiAnIzRiNTU2MycsIDcwMDogJyMzNzQxNTEnLCA4MDA6ICcjMWYyOTM3JywgOTAwOiAnIzExMTgyNycgfSxcblx0WmluYzogeyAxMDA6ICcjZjRmNGY1JywgMjAwOiAnI2U0ZTRlNycsIDMwMDogJyNkNGQ0ZDgnLCA0MDA6ICcjYTFhMWFhJywgNTAwOiAnIzcxNzE3YScsIDYwMDogJyM1MjUyNWInLCA3MDA6ICcjM2YzZjQ2JywgODAwOiAnIzI3MjcyYScsIDkwMDogJyMxODE4MWInIH0sXG5cdE5ldXRyYWw6IHsgMTAwOiAnI2Y1ZjVmNScsIDIwMDogJyNlNWU1ZTUnLCAzMDA6ICcjZDRkNGQ0JywgNDAwOiAnI2EzYTNhMycsIDUwMDogJyM3MzczNzMnLCA2MDA6ICcjNTI1MjUyJywgNzAwOiAnIzQwNDA0MCcsIDgwMDogJyMyNjI2MjYnLCA5MDA6ICcjMTcxNzE3JyB9LFxuXHRSZWQ6IHsgMTAwOiAnI2ZlZTJlMicsIDIwMDogJyNmZWNhY2EnLCAzMDA6ICcjZmNhNWE1JywgNDAwOiAnI2Y4NzE3MScsIDUwMDogJyNlZjQ0NDQnLCA2MDA6ICcjZGMyNjI2JywgNzAwOiAnI2I5MWMxYycsIDgwMDogJyM5OTFiMWInLCA5MDA6ICcjN2YxZDFkJyB9LFxuXHRPcmFuZ2U6IHsgMTAwOiAnI2ZmZWRkNScsIDIwMDogJyNmZWQ3YWEnLCAzMDA6ICcjZmRiYTc0JywgNDAwOiAnI2ZiOTIzYycsIDUwMDogJyNmOTczMTYnLCA2MDA6ICcjZWE1ODBjJywgNzAwOiAnI2MyNDEwYycsIDgwMDogJyM5YTM0MTInLCA5MDA6ICcjN2MyZDEyJyB9LFxuXHRBbWJlcjogeyAxMDA6ICcjZmVmM2M3JywgMjAwOiAnI2ZkZTY4YScsIDMwMDogJyNmY2QzNGQnLCA0MDA6ICcjZmJiZjI0JywgNTAwOiAnI2Y1OWUwYicsIDYwMDogJyNkOTc3MDYnLCA3MDA6ICcjYjQ1MzA5JywgODAwOiAnIzkyNDAwZScsIDkwMDogJyM3ODM1MGYnIH0sXG5cdFllbGxvdzogeyAxMDA6ICcjZmVmOWMzJywgMjAwOiAnI2ZlZjA4YScsIDMwMDogJyNmZGUwNDcnLCA0MDA6ICcjZmFjYzE1JywgNTAwOiAnI2VhYjMwOCcsIDYwMDogJyNjYThhMDQnLCA3MDA6ICcjYTE2MjA3JywgODAwOiAnIzg1NGQwZScsIDkwMDogJyM3MTNmMTInIH0sXG5cdExpbWU6IHsgMTAwOiAnI2VjZmNjYicsIDIwMDogJyNkOWY5OWQnLCAzMDA6ICcjYmVmMjY0JywgNDAwOiAnI2EzZTYzNScsIDUwMDogJyM4NGNjMTYnLCA2MDA6ICcjNjVhMzBkJywgNzAwOiAnIzRkN2MwZicsIDgwMDogJyMzZjYyMTInLCA5MDA6ICcjMzY1MzE0JyB9LFxuXHRHcmVlbjogeyAxMDA6ICcjZGNmY2U3JywgMjAwOiAnI2JiZjdkMCcsIDMwMDogJyM4NmVmYWMnLCA0MDA6ICcjNGFkZTgwJywgNTAwOiAnIzIyYzU1ZScsIDYwMDogJyMxNmEzNGEnLCA3MDA6ICcjMTU4MDNkJywgODAwOiAnIzE2NjUzNCcsIDkwMDogJyMxNDUzMmQnIH0sXG5cdEVtZXJhbGQ6IHsgMTAwOiAnI2QxZmFlNScsIDIwMDogJyNhN2YzZDAnLCAzMDA6ICcjNmVlN2I3JywgNDAwOiAnIzM0ZDM5OScsIDUwMDogJyMxMGI5ODEnLCA2MDA6ICcjMDU5NjY5JywgNzAwOiAnIzA0Nzg1NycsIDgwMDogJyMwNjVmNDYnLCA5MDA6ICcjMDY0ZTNiJyB9LFxuXHRUZWFsOiB7IDEwMDogJyNjY2ZiZjEnLCAyMDA6ICcjOTlmNmU0JywgMzAwOiAnIzVlZWFkNCcsIDQwMDogJyMyZGQ0YmYnLCA1MDA6ICcjMTRiOGE2JywgNjAwOiAnIzBkOTQ4OCcsIDcwMDogJyMwZjc2NmUnLCA4MDA6ICcjMTE1ZTU5JywgOTAwOiAnIzEzNGU0YScgfSxcblx0Q3lhbjogeyAxMDA6ICcjY2ZmYWZlJywgMjAwOiAnI2E1ZjNmYycsIDMwMDogJyM2N2U4ZjknLCA0MDA6ICcjMjJkM2VlJywgNTAwOiAnIzA2YjZkNCcsIDYwMDogJyMwODkxYjInLCA3MDA6ICcjMGU3NDkwJywgODAwOiAnIzE1NWU3NScsIDkwMDogJyMxNjRlNjMnIH0sXG5cdFNreTogeyAxMDA6ICcjZTBmMmZlJywgMjAwOiAnI2JhZTZmZCcsIDMwMDogJyM3ZGQzZmMnLCA0MDA6ICcjMzhiZGY4JywgNTAwOiAnIzBlYTVlOScsIDYwMDogJyMwMjg0YzcnLCA3MDA6ICcjMDM2OWExJywgODAwOiAnIzA3NTk4NScsIDkwMDogJyMwYzRhNmUnIH0sXG5cdEJsdWU6IHsgMTAwOiAnI2RiZWFmZScsIDIwMDogJyNiZmRiZmUnLCAzMDA6ICcjOTNjNWZkJywgNDAwOiAnIzYwYTVmYScsIDUwMDogJyMzYjgyZjYnLCA2MDA6ICcjMjU2M2ViJywgNzAwOiAnIzFkNGVkOCcsIDgwMDogJyMxZTQwYWYnLCA5MDA6ICcjMWUzYThhJyB9LFxuXHRJbmRpZ286IHsgMTAwOiAnI2UwZTdmZicsIDIwMDogJyNjN2QyZmUnLCAzMDA6ICcjYTViNGZjJywgNDAwOiAnIzgxOGNmOCcsIDUwMDogJyM2MzY2ZjEnLCA2MDA6ICcjNGY0NmU1JywgNzAwOiAnIzQzMzhjYScsIDgwMDogJyMzNzMwYTMnLCA5MDA6ICcjMzEyZTgxJyB9LFxuXHRWaW9sZXQ6IHsgMTAwOiAnI2VkZTlmZScsIDIwMDogJyNkZGQ2ZmUnLCAzMDA6ICcjYzRiNWZkJywgNDAwOiAnI2E3OGJmYScsIDUwMDogJyM4YjVjZjYnLCA2MDA6ICcjN2MzYWVkJywgNzAwOiAnIzZkMjhkOScsIDgwMDogJyM1YjIxYjYnLCA5MDA6ICcjNGMxZDk1JyB9LFxuXHRQdXJwbGU6IHsgMTAwOiAnI2YzZThmZicsIDIwMDogJyNlOWQ1ZmYnLCAzMDA6ICcjZDhiNGZlJywgNDAwOiAnI2MwODRmYycsIDUwMDogJyNhODU1ZjcnLCA2MDA6ICcjOTMzM2VhJywgNzAwOiAnIzdlMjJjZScsIDgwMDogJyM2YjIxYTgnLCA5MDA6ICcjNTgxYzg3JyB9LFxuXHRGdWNoc2lhOiB7IDEwMDogJyNmYWU4ZmYnLCAyMDA6ICcjZjVkMGZlJywgMzAwOiAnI2YwYWJmYycsIDQwMDogJyNlODc5ZjknLCA1MDA6ICcjZDk0NmVmJywgNjAwOiAnI2MwMjZkMycsIDcwMDogJyNhMjFjYWYnLCA4MDA6ICcjODYxOThmJywgOTAwOiAnIzcwMWE3NScgfSxcblx0UGluazogeyAxMDA6ICcjZmNlN2YzJywgMjAwOiAnI2ZiY2ZlOCcsIDMwMDogJyNmOWE4ZDQnLCA0MDA6ICcjZjQ3MmI2JywgNTAwOiAnI2VjNDg5OScsIDYwMDogJyNkYjI3NzcnLCA3MDA6ICcjYmUxODVkJywgODAwOiAnIzlkMTc0ZCcsIDkwMDogJyM4MzE4NDMnIH0sXG5cdFJvc2U6IHsgMTAwOiAnI2ZmZTRlNicsIDIwMDogJyNmZWNkZDMnLCAzMDA6ICcjZmRhNGFmJywgNDAwOiAnI2ZiNzE4NScsIDUwMDogJyNmNDNmNWUnLCA2MDA6ICcjZTExZDQ4JywgNzAwOiAnI2JlMTIzYycsIDgwMDogJyM5ZjEyMzknLCA5MDA6ICcjODgxMzM3JyB9LFxufSk7XG5cbmNvbnN0IFRBSUxXSU5EX1NXQVRDSEVTID0gT2JqZWN0LmZyZWV6ZShbXG5cdHsgbmFtZTogJ1NsYXRlJywgaGV4OiAnIzY0NzQ4YicgfSxcblx0eyBuYW1lOiAnR3JheScsIGhleDogJyM2YjcyODAnIH0sXG5cdHsgbmFtZTogJ1ppbmMnLCBoZXg6ICcjNzE3MTdhJyB9LFxuXHR7IG5hbWU6ICdOZXV0cmFsJywgaGV4OiAnIzczNzM3MycgfSxcblx0eyBuYW1lOiAnUmVkJywgaGV4OiAnI2VmNDQ0NCcgfSxcblx0eyBuYW1lOiAnT3JhbmdlJywgaGV4OiAnI2Y5NzMxNicgfSxcblx0eyBuYW1lOiAnQW1iZXInLCBoZXg6ICcjZjU5ZTBiJyB9LFxuXHR7IG5hbWU6ICdZZWxsb3cnLCBoZXg6ICcjZWFiMzA4JyB9LFxuXHR7IG5hbWU6ICdMaW1lJywgaGV4OiAnIzg0Y2MxNicgfSxcblx0eyBuYW1lOiAnR3JlZW4nLCBoZXg6ICcjMjJjNTVlJyB9LFxuXHR7IG5hbWU6ICdFbWVyYWxkJywgaGV4OiAnIzEwYjk4MScgfSxcblx0eyBuYW1lOiAnVGVhbCcsIGhleDogJyMxNGI4YTYnIH0sXG5cdHsgbmFtZTogJ0N5YW4nLCBoZXg6ICcjMDZiNmQ0JyB9LFxuXHR7IG5hbWU6ICdTa3knLCBoZXg6ICcjMGVhNWU5JyB9LFxuXHR7IG5hbWU6ICdCbHVlJywgaGV4OiAnIzNiODJmNicgfSxcblx0eyBuYW1lOiAnSW5kaWdvJywgaGV4OiAnIzYzNjZmMScgfSxcblx0eyBuYW1lOiAnVmlvbGV0JywgaGV4OiAnIzhiNWNmNicgfSxcblx0eyBuYW1lOiAnUHVycGxlJywgaGV4OiAnI2E4NTVmNycgfSxcblx0eyBuYW1lOiAnRnVjaHNpYScsIGhleDogJyNkOTQ2ZWYnIH0sXG5cdHsgbmFtZTogJ1BpbmsnLCBoZXg6ICcjZWM0ODk5JyB9LFxuXHR7IG5hbWU6ICdSb3NlJywgaGV4OiAnI2Y0M2Y1ZScgfSxcbl0pO1xuXG5jb25zdCBUQU5BX1NXQVRDSEVTID0gT2JqZWN0LmZyZWV6ZShbXG5cdHsgbmFtZTogJ1doaXRlJywgaGV4OiAnI2ZmZmZmZicgfSxcblx0eyBuYW1lOiAnTGlnaHQnLCBoZXg6ICcjZDFkNWRiJyB9LFxuXHR7IG5hbWU6ICdHcmV5JywgaGV4OiAnIzZiNzI4MCcgfSxcblx0eyBuYW1lOiAnRGFyaycsIGhleDogJyMzNzQxNTEnIH0sXG5cdHsgbmFtZTogJ1BpbmsnLCBoZXg6ICcjZGIyNzc3JyB9LFxuXHR7IG5hbWU6ICdSZWQnLCBoZXg6ICcjYjkxYzFjJyB9LFxuXHR7IG5hbWU6ICdPcmFuZ2UnLCBoZXg6ICcjZjk3MzE2JyB9LFxuXHR7IG5hbWU6ICdCcm9uemUnLCBoZXg6ICcjYjQ1MzA5JyB9LFxuXHR7IG5hbWU6ICdZZWxsb3cnLCBoZXg6ICcjZWFiMzA4JyB9LFxuXHR7IG5hbWU6ICdMaW1lJywgaGV4OiAnIzY1YTMwZCcgfSxcblx0eyBuYW1lOiAnTWludCcsIGhleDogJyMzNGQzOTknIH0sXG5cdHsgbmFtZTogJ1N0ZWVsJywgaGV4OiAnIzAzNjlhMScgfSxcblx0eyBuYW1lOiAnQmx1ZScsIGhleDogJyMzYjgyZjYnIH0sXG5cdHsgbmFtZTogJ1Zpb2xldCcsIGhleDogJyM1YjIxYjYnIH0sXG5cdHsgbmFtZTogJ1B1cnBsZScsIGhleDogJyM5MzMzZWEnIH0sXG5cdHsgbmFtZTogJ1Jvc2UnLCBoZXg6ICcjZjQ3MmI2JyB9LFxuXSk7XG5cbmNvbnN0IENPTE9SX1BBTEVUVEVfR1JPVVBTID0gT2JqZWN0LmZyZWV6ZShbXG5cdHsgaWQ6ICd0YW5hJywgbmFtZTogJ1RhbmEnLCBzd2F0Y2hlczogVEFOQV9TV0FUQ0hFUyB9LFxuXHR7IGlkOiAndGFpbHdpbmQnLCBuYW1lOiAnVGFpbHdpbmQnLCBzd2F0Y2hlczogVEFJTFdJTkRfU1dBVENIRVMgfSxcblx0eyBpZDogJ3Bhc3RlbCcsIG5hbWU6ICdQYXN0ZWwnLCBzd2F0Y2hlczogT2JqZWN0LmZyZWV6ZShbXG5cdFx0eyBuYW1lOiAnV2hpdGUnLCBoZXg6ICcjZmZmZmZmJyB9LFxuXHRcdHsgbmFtZTogJ0xpZ2h0JywgaGV4OiAnI2YzZjRmNicgfSxcblx0XHR7IG5hbWU6ICdHcmV5JywgaGV4OiAnI2U1ZTdlYicgfSxcblx0XHR7IG5hbWU6ICdEYXJrJywgaGV4OiAnI2NiZDVlMScgfSxcblx0XHR7IG5hbWU6ICdCbHVzaCcsIGhleDogJyNmZWNhY2EnIH0sXG5cdFx0eyBuYW1lOiAnUGVhY2gnLCBoZXg6ICcjZmVkN2FhJyB9LFxuXHRcdHsgbmFtZTogJ0J1dHRlcicsIGhleDogJyNmZWYzYzcnIH0sXG5cdFx0eyBuYW1lOiAnU2FnZScsIGhleDogJyNkOWY5OWQnIH0sXG5cdFx0eyBuYW1lOiAnTWludCcsIGhleDogJyNiYmY3ZDAnIH0sXG5cdFx0eyBuYW1lOiAnQXF1YScsIGhleDogJyNhNWYzZmMnIH0sXG5cdFx0eyBuYW1lOiAnU2t5JywgaGV4OiAnI2JhZTZmZCcgfSxcblx0XHR7IG5hbWU6ICdMaWxhYycsIGhleDogJyNlOWQ1ZmYnIH0sXG5cdFx0eyBuYW1lOiAnUGluaycsIGhleDogJyNmYmNmZTgnIH0sXG5cdFx0eyBuYW1lOiAnUm9zZScsIGhleDogJyNmZWNkZDMnIH0sXG5cdF0pIH0sXG5cdHsgaWQ6ICdtYXRlcmlhbCcsIG5hbWU6ICdNYXRlcmlhbCcsIHN3YXRjaGVzOiBPYmplY3QuZnJlZXplKFtcblx0XHR7IG5hbWU6ICdXaGl0ZScsIGhleDogJyNmZmZmZmYnIH0sXG5cdFx0eyBuYW1lOiAnTGlnaHQnLCBoZXg6ICcjZTBlMGUwJyB9LFxuXHRcdHsgbmFtZTogJ0dyZXknLCBoZXg6ICcjOWU5ZTllJyB9LFxuXHRcdHsgbmFtZTogJ0RhcmsnLCBoZXg6ICcjNDI0MjQyJyB9LFxuXHRcdHsgbmFtZTogJ1JlZCcsIGhleDogJyNmNDQzMzYnIH0sXG5cdFx0eyBuYW1lOiAnUGluaycsIGhleDogJyNlOTFlNjMnIH0sXG5cdFx0eyBuYW1lOiAnUHVycGxlJywgaGV4OiAnIzljMjdiMCcgfSxcblx0XHR7IG5hbWU6ICdEZWVwIFB1cnBsZScsIGhleDogJyM2NzNhYjcnIH0sXG5cdFx0eyBuYW1lOiAnSW5kaWdvJywgaGV4OiAnIzNmNTFiNScgfSxcblx0XHR7IG5hbWU6ICdCbHVlJywgaGV4OiAnIzIxOTZmMycgfSxcblx0XHR7IG5hbWU6ICdDeWFuJywgaGV4OiAnIzAwYmNkNCcgfSxcblx0XHR7IG5hbWU6ICdUZWFsJywgaGV4OiAnIzAwOTY4OCcgfSxcblx0XHR7IG5hbWU6ICdHcmVlbicsIGhleDogJyM0Y2FmNTAnIH0sXG5cdFx0eyBuYW1lOiAnTGltZScsIGhleDogJyNjZGRjMzknIH0sXG5cdFx0eyBuYW1lOiAnWWVsbG93JywgaGV4OiAnI2ZmZWIzYicgfSxcblx0XHR7IG5hbWU6ICdBbWJlcicsIGhleDogJyNmZmMxMDcnIH0sXG5cdFx0eyBuYW1lOiAnT3JhbmdlJywgaGV4OiAnI2ZmOTgwMCcgfSxcblx0XHR7IG5hbWU6ICdEZWVwIE9yYW5nZScsIGhleDogJyNmZjU3MjInIH0sXG5cdF0pIH0sXG5cdHsgaWQ6ICdzb2xhcml6ZWQnLCBuYW1lOiAnU29sYXJpemVkJywgc3dhdGNoZXM6IE9iamVjdC5mcmVlemUoW1xuXHRcdHsgbmFtZTogJ0Jhc2UgMycsIGhleDogJyNmZGY2ZTMnIH0sXG5cdFx0eyBuYW1lOiAnQmFzZSAxJywgaGV4OiAnIzkzYTFhMScgfSxcblx0XHR7IG5hbWU6ICdCYXNlIDAxJywgaGV4OiAnIzU4NmU3NScgfSxcblx0XHR7IG5hbWU6ICdZZWxsb3cnLCBoZXg6ICcjYjU4OTAwJyB9LFxuXHRcdHsgbmFtZTogJ09yYW5nZScsIGhleDogJyNjYjRiMTYnIH0sXG5cdFx0eyBuYW1lOiAnUmVkJywgaGV4OiAnI2RjMzIyZicgfSxcblx0XHR7IG5hbWU6ICdNYWdlbnRhJywgaGV4OiAnI2QzMzY4MicgfSxcblx0XHR7IG5hbWU6ICdWaW9sZXQnLCBoZXg6ICcjNmM3MWM0JyB9LFxuXHRcdHsgbmFtZTogJ0JsdWUnLCBoZXg6ICcjMjY4YmQyJyB9LFxuXHRcdHsgbmFtZTogJ0N5YW4nLCBoZXg6ICcjMmFhMTk4JyB9LFxuXHRcdHsgbmFtZTogJ0dyZWVuJywgaGV4OiAnIzg1OTkwMCcgfSxcblx0XSkgfSxcblx0eyBpZDogJ25vcmQnLCBuYW1lOiAnTm9yZCcsIHN3YXRjaGVzOiBPYmplY3QuZnJlZXplKFtcblx0XHR7IG5hbWU6ICdTbm93IDYnLCBoZXg6ICcjZWNlZmY0JyB9LFxuXHRcdHsgbmFtZTogJ1Nub3cgNCcsIGhleDogJyNkOGRlZTknIH0sXG5cdFx0eyBuYW1lOiAnUG9sYXIgMycsIGhleDogJyM0YzU2NmEnIH0sXG5cdFx0eyBuYW1lOiAnUG9sYXIgMCcsIGhleDogJyMyZTM0NDAnIH0sXG5cdFx0eyBuYW1lOiAnRnJvc3QgNycsIGhleDogJyM4ZmJjYmInIH0sXG5cdFx0eyBuYW1lOiAnRnJvc3QgOCcsIGhleDogJyM4OGMwZDAnIH0sXG5cdFx0eyBuYW1lOiAnRnJvc3QgOScsIGhleDogJyM4MWExYzEnIH0sXG5cdFx0eyBuYW1lOiAnRnJvc3QgMTAnLCBoZXg6ICcjNWU4MWFjJyB9LFxuXHRcdHsgbmFtZTogJ1JlZCcsIGhleDogJyNiZjYxNmEnIH0sXG5cdFx0eyBuYW1lOiAnT3JhbmdlJywgaGV4OiAnI2QwODc3MCcgfSxcblx0XHR7IG5hbWU6ICdZZWxsb3cnLCBoZXg6ICcjZWJjYjhiJyB9LFxuXHRcdHsgbmFtZTogJ0dyZWVuJywgaGV4OiAnI2EzYmU4YycgfSxcblx0XHR7IG5hbWU6ICdQdXJwbGUnLCBoZXg6ICcjYjQ4ZWFkJyB9LFxuXHRdKSB9LFxuXHR7IGlkOiAnZHJhY3VsYScsIG5hbWU6ICdEcmFjdWxhJywgc3dhdGNoZXM6IE9iamVjdC5mcmVlemUoW1xuXHRcdHsgbmFtZTogJ0ZvcmVncm91bmQnLCBoZXg6ICcjZjhmOGYyJyB9LFxuXHRcdHsgbmFtZTogJ0NvbW1lbnQnLCBoZXg6ICcjNjI3MmE0JyB9LFxuXHRcdHsgbmFtZTogJ1NlbGVjdGlvbicsIGhleDogJyM0NDQ3NWEnIH0sXG5cdFx0eyBuYW1lOiAnQmFja2dyb3VuZCcsIGhleDogJyMyODJhMzYnIH0sXG5cdFx0eyBuYW1lOiAnQ3lhbicsIGhleDogJyM4YmU5ZmQnIH0sXG5cdFx0eyBuYW1lOiAnR3JlZW4nLCBoZXg6ICcjNTBmYTdiJyB9LFxuXHRcdHsgbmFtZTogJ1llbGxvdycsIGhleDogJyNmMWZhOGMnIH0sXG5cdFx0eyBuYW1lOiAnT3JhbmdlJywgaGV4OiAnI2ZmYjg2YycgfSxcblx0XHR7IG5hbWU6ICdSZWQnLCBoZXg6ICcjZmY1NTU1JyB9LFxuXHRcdHsgbmFtZTogJ1BpbmsnLCBoZXg6ICcjZmY3OWM2JyB9LFxuXHRcdHsgbmFtZTogJ1B1cnBsZScsIGhleDogJyNiZDkzZjknIH0sXG5cdF0pIH0sXG5dKTtcblxuY29uc3QgVEhFTUVfQ09MT1JTID0gT2JqZWN0LmZyZWV6ZShbXG5cdHsgbmFtZTogJ0FjY2VudCcsIHZhbHVlOiAndGhlbWU6YWNjZW50JywgY3NzOiBUSEVNRV9BQ0NFTlRfQ1NTIH0sXG5cdHsgbmFtZTogJ1RleHQnLCB2YWx1ZTogJ3ZhcjotLXRleHQtZGVmYXVsdCcsIGNzczogJ3ZhcigtLXRleHQtZGVmYXVsdCwgI2NiZDVlMSknIH0sXG5cdHsgbmFtZTogJ011dGVkIHRleHQnLCB2YWx1ZTogJ3ZhcjotLXRleHQtbXV0ZWQnLCBjc3M6ICd2YXIoLS10ZXh0LW11dGVkLCByZ2JhKDEyNywxMjcsMTI3LDAuNzIpKScgfSxcblx0eyBuYW1lOiAnU3VidGxlIHRleHQnLCB2YWx1ZTogJ3ZhcjotLXRleHQtc3VidGxlJywgY3NzOiAndmFyKC0tdGV4dC1zdWJ0bGUsIHJnYmEoMTI3LDEyNywxMjcsMC41KSknIH0sXG5cdHsgbmFtZTogJ0JvcmRlcicsIHZhbHVlOiAndmFyOi0tYm9yZGVyLWRlZmF1bHQnLCBjc3M6ICd2YXIoLS1ib3JkZXItZGVmYXVsdCwgcmdiYSgxMjcsMTI3LDEyNywwLjM1KSknIH0sXG5cdHsgbmFtZTogJ1N1YnRsZSBib3JkZXInLCB2YWx1ZTogJ3ZhcjotLWJvcmRlci1zdWJ0bGUnLCBjc3M6ICd2YXIoLS1ib3JkZXItc3VidGxlLCByZ2JhKDEyNywxMjcsMTI3LDAuMjIpKScgfSxcblx0eyBuYW1lOiAnSG92ZXIgYm9yZGVyJywgdmFsdWU6ICd2YXI6LS1ib3JkZXItaG92ZXInLCBjc3M6ICd2YXIoLS1ib3JkZXItaG92ZXIsIHJnYmEoMTI3LDEyNywxMjcsMC40NSkpJyB9LFxuXHR7IG5hbWU6ICdCYWNrZ3JvdW5kJywgdmFsdWU6ICd2YXI6LS1iZy1kZWZhdWx0JywgY3NzOiAndmFyKC0tYmctZGVmYXVsdCwgcmdiYSgxMjcsMTI3LDEyNywwLjE2KSknIH0sXG5cdHsgbmFtZTogJ0hvdmVyIGJnJywgdmFsdWU6ICd2YXI6LS1iZy1ob3ZlcicsIGNzczogJ3ZhcigtLWJnLWhvdmVyLCByZ2JhKDEyNywxMjcsMTI3LDAuMTIpKScgfSxcblx0eyBuYW1lOiAnRW51bSByZWQnLCB2YWx1ZTogJ3ZhcjotLWVudW0tcmVkLWZnJywgY3NzOiAndmFyKC0tZW51bS1yZWQtZmcsICNlZjQ0NDQpJyB9LFxuXHR7IG5hbWU6ICdFbnVtIG9yYW5nZScsIHZhbHVlOiAndmFyOi0tZW51bS1vcmFuZ2UtZmcnLCBjc3M6ICd2YXIoLS1lbnVtLW9yYW5nZS1mZywgI2Y5NzMxNiknIH0sXG5cdHsgbmFtZTogJ0VudW0geWVsbG93JywgdmFsdWU6ICd2YXI6LS1lbnVtLXllbGxvdy1mZycsIGNzczogJ3ZhcigtLWVudW0teWVsbG93LWZnLCAjZWFiMzA4KScgfSxcblx0eyBuYW1lOiAnRW51bSBncmVlbicsIHZhbHVlOiAndmFyOi0tZW51bS1ncmVlbi1mZycsIGNzczogJ3ZhcigtLWVudW0tZ3JlZW4tZmcsICMyMmM1NWUpJyB9LFxuXHR7IG5hbWU6ICdFbnVtIHRlYWwnLCB2YWx1ZTogJ3ZhcjotLWVudW0tdGVhbC1mZycsIGNzczogJ3ZhcigtLWVudW0tdGVhbC1mZywgIzE0YjhhNiknIH0sXG5cdHsgbmFtZTogJ0VudW0gYmx1ZScsIHZhbHVlOiAndmFyOi0tZW51bS1ibHVlLWZnJywgY3NzOiAndmFyKC0tZW51bS1ibHVlLWZnLCAjM2I4MmY2KScgfSxcblx0eyBuYW1lOiAnRW51bSBpbmRpZ28nLCB2YWx1ZTogJ3ZhcjotLWVudW0taW5kaWdvLWZnJywgY3NzOiAndmFyKC0tZW51bS1pbmRpZ28tZmcsICM2MzY2ZjEpJyB9LFxuXHR7IG5hbWU6ICdFbnVtIHZpb2xldCcsIHZhbHVlOiAndmFyOi0tZW51bS12aW9sZXQtZmcnLCBjc3M6ICd2YXIoLS1lbnVtLXZpb2xldC1mZywgIzhiNWNmNiknIH0sXG5cdHsgbmFtZTogJ0VudW0gZnVjaHNpYScsIHZhbHVlOiAndmFyOi0tZW51bS1mdWNoc2lhLWZnJywgY3NzOiAndmFyKC0tZW51bS1mdWNoc2lhLWZnLCAjZDk0NmVmKScgfSxcblx0eyBuYW1lOiAnRW51bSBwaW5rJywgdmFsdWU6ICd2YXI6LS1lbnVtLXBpbmstZmcnLCBjc3M6ICd2YXIoLS1lbnVtLXBpbmstZmcsICNlYzQ4OTkpJyB9LFxuXSk7XG5cbmNvbnN0IFRIRU1FX0NPTE9SX0FMSUFTRVMgPSBPYmplY3QuZnJlZXplKHtcblx0J3ZhcjotLWFjY2VudC1jb2xvcic6IFRIRU1FX0FDQ0VOVF9DU1MsXG5cdCd2YXI6LS1jb2xvci1hY2NlbnQnOiBUSEVNRV9BQ0NFTlRfQ1NTLFxuXHQndmFyOi0tdGhlbWUtYWNjZW50JzogVEhFTUVfQUNDRU5UX0NTUyxcblx0J3ZhcjotLWNvbG9yLXByaW1hcnknOiBUSEVNRV9BQ0NFTlRfQ1NTLFxufSk7XG5cbmNvbnN0IERFRkFVTFRfU1RZTEUgPSBPYmplY3QuZnJlZXplKHtcblx0Ym9yZGVyU3R5bGU6ICdzb2xpZCcsXG5cdGNvbG9yOiBTSURFQkFSX0RJVklERVJfVkFSX1ZBTFVFLFxuXHRjdXN0b21Db2xvcjogJyMzYjgyZjYnLFxuXHR0aGlja25lc3NQeDogMSxcblx0ZG91YmxlR2FwUHg6IDIsXG5cdHdpZHRoUGN0OiAxMDAsXG5cdG9wYWNpdHlQY3Q6IDEwMCxcblx0aW5zZXRQeDogMCxcblx0aGVpZ2h0UHg6IDIwLFxuXHRvZmZzZXRZUHg6IDAsXG5cdGFsaWdubWVudDogJ2xlZnQnLFxuXHRncmFkaWVudFBjdDogNjUsXG59KTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBib3JkZXJTdHlsZTogc3RyaW5nLFxuICogICBjb2xvcjogc3RyaW5nLFxuICogICBjdXN0b21Db2xvcjogc3RyaW5nLFxuICogICB0aGlja25lc3NQeDogbnVtYmVyLFxuICogICBkb3VibGVHYXBQeDogbnVtYmVyLFxuICogICB3aWR0aFBjdDogbnVtYmVyLFxuICogICBvcGFjaXR5UGN0OiBudW1iZXIsXG4gKiAgIGluc2V0UHg6IG51bWJlcixcbiAqICAgaGVpZ2h0UHg6IG51bWJlcixcbiAqICAgb2Zmc2V0WVB4OiBudW1iZXIsXG4gKiAgIGFsaWdubWVudDogc3RyaW5nLFxuICogICBncmFkaWVudFBjdDogbnVtYmVyLFxuICogfX0gU2VwYXJhdG9yU3R5bGVcbiAqXG4gKiBAdHlwZWRlZiB7eyBpc1NlcGFyYXRvcjogdHJ1ZSwgdmVyc2lvbj86IG51bWJlciwgY3JlYXRlZEF0Pzogc3RyaW5nLCBzdHlsZT86IFBhcnRpYWw8U2VwYXJhdG9yU3R5bGU+LCBjb2xsYXBzZWRTdHlsZT86IFBhcnRpYWw8U2VwYXJhdG9yU3R5bGU+IH19IFNlcGFyYXRvck1hcmtlclxuICogQHR5cGVkZWYge3sgY29sbGVjdGlvbjogUGx1Z2luQ29sbGVjdGlvbkFQSSwgZ3VpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHN0eWxlOiBTZXBhcmF0b3JTdHlsZSB8IG51bGwsIGNvbGxhcHNlZFN0eWxlOiBTZXBhcmF0b3JTdHlsZSB8IG51bGwgfX0gU2VwYXJhdG9yRW50cnlcbiAqL1xuXG5leHBvcnQgY2xhc3MgUGx1Z2luIGV4dGVuZHMgQXBwUGx1Z2luIHtcblx0LyoqIEB0eXBlIHtQbHVnaW5Db21tYW5kUGFsZXR0ZUNvbW1hbmQgfCBudWxsfSAqL1xuXHRfc2V0dGluZ3NDb21tYW5kID0gbnVsbDtcblx0LyoqIEB0eXBlIHtNdXRhdGlvbk9ic2VydmVyIHwgbnVsbH0gKi9cblx0X29ic2VydmVyID0gbnVsbDtcblx0LyoqIEB0eXBlIHtzdHJpbmdbXX0gKi9cblx0X2hhbmRsZXJJZHMgPSBbXTtcblx0LyoqIEB0eXBlIHtNYXA8c3RyaW5nLCBTZXBhcmF0b3JFbnRyeT59ICovXG5cdF9zZXBhcmF0b3JzID0gbmV3IE1hcCgpO1xuXHQvKiogQHR5cGUge1NlcGFyYXRvclN0eWxlfSAqL1xuXHRfZGVmYXVsdFN0eWxlID0geyAuLi5ERUZBVUxUX1NUWUxFIH07XG5cdC8qKiBAdHlwZSB7SFRNTEVsZW1lbnQgfCBudWxsfSAqL1xuXHRfcGFuZWxFbCA9IG51bGw7XG5cdC8qKiBAdHlwZSB7c3RyaW5nIHwgbnVsbH0gKi9cblx0X2FjdGl2ZU92ZXJyaWRlR3VpZCA9IG51bGw7XG5cdC8qKiBAdHlwZSB7UmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCBudWxsfSAqL1xuXHRfcmVmcmVzaFRpbWVyID0gbnVsbDtcblx0LyoqIEB0eXBlIHtSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IG51bGx9ICovXG5cdF9yZW1vdmVUaW1lciA9IG51bGw7XG5cdC8qKiBAdHlwZSB7SFRNTEVsZW1lbnQgfCBudWxsfSAqL1xuXHRfZHJhZ1JvdyA9IG51bGw7XG5cdC8qKiBAdHlwZSB7c3RyaW5nIHwgbnVsbH0gKi9cblx0X2RyYWdHdWlkID0gbnVsbDtcblx0LyoqIEB0eXBlIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSAqL1xuXHRfbGFzdERyYWdQb2ludCA9IHsgeDogMCwgeTogMCB9O1xuXHQvKiogQHR5cGUge0V2ZW50TGlzdGVuZXIgfCBudWxsfSAqL1xuXHRfYm91bmREcmFnU3RhcnQgPSBudWxsO1xuXHQvKiogQHR5cGUge0V2ZW50TGlzdGVuZXIgfCBudWxsfSAqL1xuXHRfYm91bmREcmFnID0gbnVsbDtcblx0LyoqIEB0eXBlIHtFdmVudExpc3RlbmVyIHwgbnVsbH0gKi9cblx0X2JvdW5kRHJhZ0VuZCA9IG51bGw7XG5cdC8qKiBAdHlwZSB7RXZlbnRMaXN0ZW5lciB8IG51bGx9ICovXG5cdF9ib3VuZFNlcGFyYXRvckFjdGl2YXRlID0gbnVsbDtcblx0LyoqIEB0eXBlIHtNYXA8c3RyaW5nLCBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0Pj59ICovXG5cdF9zZXBhcmF0b3JTYXZlVGltZXJzID0gbmV3IE1hcCgpO1xuXHQvKiogQHR5cGUge01hcDxzdHJpbmcsIFNlcGFyYXRvclN0eWxlIHwgbnVsbD59ICovXG5cdF9wZW5kaW5nU2VwYXJhdG9yU3R5bGVzID0gbmV3IE1hcCgpO1xuXHQvKiogQHR5cGUge01hcDxzdHJpbmcsIFNlcGFyYXRvclN0eWxlIHwgbnVsbD59ICovXG5cdF9wZW5kaW5nQ29sbGFwc2VkU2VwYXJhdG9yU3R5bGVzID0gbmV3IE1hcCgpO1xuXHQvKiogQHR5cGUge1NldDxzdHJpbmc+fSAqL1xuXHRfbmFtZUZpeEd1aWRzID0gbmV3IFNldCgpO1xuXHQvKiogQHR5cGUge0hUTUxFbGVtZW50IHwgbnVsbH0gKi9cblx0X2hvdmVyQWN0aW9uT3ZlcmxheUVsID0gbnVsbDtcblx0LyoqIEB0eXBlIHtSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IG51bGx9ICovXG5cdF9ob3ZlckFjdGlvbk92ZXJsYXlIaWRlVGltZXIgPSBudWxsO1xuXHQvKiogQHR5cGUge0hUTUxFbGVtZW50IHwgbnVsbH0gKi9cblx0X2FjdGl2ZUFjdGlvbk92ZXJsYXlFbCA9IG51bGw7XG5cdC8qKiBAdHlwZSB7UmV0dXJuVHlwZTx0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lPiB8IG51bGx9ICovXG5cdF9hY3RpdmVPdmVybGF5UG9zaXRpb25SYWYgPSBudWxsO1xuXHQvKiogQHR5cGUgeygoKSA9PiB2b2lkKSB8IG51bGx9ICovXG5cdF9ib3VuZFJlcG9zaXRpb24gPSBudWxsO1xuXHRfc2VjdGlvbkNvbGxhcHNlZCA9IHsgZGVzaWduOiBmYWxzZSwgY29sb3I6IGZhbHNlLCBwYWxldHRlczogZmFsc2UgfTtcblx0X3BhbGV0dGVJZCA9ICd0YWlsd2luZCc7XG5cdF90YWlsd2luZFNoYWRlID0gNTAwO1xuXHQvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIGJvb2xlYW4+fSAqL1xuXHRfcGFsZXR0ZVJvd1JldmVhbGVkID0ge307XG5cdF9jdXN0b21PcGVuID0gZmFsc2U7XG5cdC8qKiBAdHlwZSB7c3RyaW5nIHwgbnVsbH0gKi9cblx0X2N1c3RvbUd1aWQgPSBudWxsO1xuXHQvKiogQHR5cGUge3N0cmluZyB8IG51bGx9ICovXG5cdF9kcmFmdEhleCA9IG51bGw7XG5cdC8qKiBAdHlwZSB7J0hFWCcgfCAnUkdCJyB8ICdIU0wnfSAqL1xuXHRfZHJhZnRGb3JtYXQgPSAnSEVYJztcblx0LyoqIEB0eXBlIHt7bmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBjc3M6IHN0cmluZywgcmVzb2x2ZWQ6IHN0cmluZywgcmF3OiBzdHJpbmcsIHNvdXJjZTogc3RyaW5nfVtdfSAqL1xuXHRfdGhlbWVDb2xvcnMgPSBbXTtcblx0LyoqIEB0eXBlIHtudW1iZXJ9ICovXG5cdF90aGVtZUNvbG9yc1JlYWRBdCA9IDA7XG5cdC8qKiBAdHlwZSB7UmVzaXplT2JzZXJ2ZXIgfCBudWxsfSAqL1xuXHRfcGFuZWxSZXNpemVPYnNlcnZlciA9IG51bGw7XG5cblx0b25Mb2FkKCkge1xuXHRcdHRoaXMuX2RlZmF1bHRTdHlsZSA9IHRoaXMuX25vcm1hbGl6ZVN0eWxlKERFRkFVTFRfU1RZTEUpO1xuXHRcdHRoaXMuX2FjdGl2ZU92ZXJyaWRlR3VpZCA9IG51bGw7XG5cblx0XHR0aGlzLnVpLmluamVjdENTUyhQQU5FTF9DU1MpO1xuXHRcdHRoaXMuX2luamVjdENTUygpO1xuXHRcdHRoaXMuX2Vuc3VyZVJ1bnRpbWVTdHlsZSgpO1xuXHRcdHRoaXMuX3JlZnJlc2hUaGVtZUNvbG9ycyh0cnVlKTtcblx0XHR0aGlzLl93cml0ZVJ1bnRpbWVTdHlsZSgpO1xuXG5cdFx0dGhpcy5fc2V0dGluZ3NDb21tYW5kID0gdGhpcy51aS5hZGRDb21tYW5kUGFsZXR0ZUNvbW1hbmQoe1xuXHRcdFx0bGFiZWw6ICdQbHVnaW46IFNpZGViYXIgU2VwZXJhdG9ycycsXG5cdFx0XHRpY29uOiAnc2V0dGluZ3MnLFxuXHRcdFx0b25TZWxlY3RlZDogKCkgPT4gdGhpcy5fb3BlblBhbmVsKCksXG5cdFx0fSk7XG5cblx0XHR0aGlzLnVpLnJlZ2lzdGVyQ3VzdG9tUGFuZWxUeXBlKFBBTkVMX1RZUEUsIChwbHVnaW5QYW5lbCkgPT4ge1xuXHRcdFx0dHJ5IHsgcGx1Z2luUGFuZWwuc2V0VGl0bGUoJ1NpZGViYXIgU2VwZXJhdG9ycyBTZXR0aW5ncycpOyB9IGNhdGNoIHt9XG5cdFx0XHRjb25zdCByb290ID0gcGx1Z2luUGFuZWwuZ2V0RWxlbWVudCgpO1xuXHRcdFx0aWYgKCFyb290KSByZXR1cm47XG5cdFx0XHR0aGlzLl9wYW5lbEVsID0gcm9vdDtcblx0XHRcdGlmICh0aGlzLl9wYW5lbFJlc2l6ZU9ic2VydmVyKSB0aGlzLl9wYW5lbFJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHRcdHRoaXMuX3BhbmVsUmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5fcGFuZWxFbCkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuX2NoZWNrUGFsZXR0ZU92ZXJmbG93KCkpO1xuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLl9wYW5lbFJlc2l6ZU9ic2VydmVyLm9ic2VydmUocm9vdCk7XG5cdFx0XHR0aGlzLl9yZW5kZXJQYW5lbCgpO1xuXHRcdFx0dGhpcy5fbWFya1NpZGViYXJSb3dzKCk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLl9oYW5kbGVySWRzID0gW107XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuX2hhbmRsZXJJZHMucHVzaCh0aGlzLmV2ZW50cy5vbigncGFuZWwuY2xvc2VkJywgKCkgPT4gdGhpcy5fc2NoZWR1bGVSZWZyZXNoKCkpKTtcblx0XHRcdHRoaXMuX2hhbmRsZXJJZHMucHVzaCh0aGlzLmV2ZW50cy5vbigncGFuZWwubmF2aWdhdGVkJywgKCkgPT4gdGhpcy5fc2NoZWR1bGVSZWZyZXNoKCkpKTtcblx0XHR9IGNhdGNoIHt9XG5cblx0XHR0aGlzLl9ib3VuZERyYWdTdGFydCA9IChldmVudCkgPT4ge1xuXHRcdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgRHJhZ0V2ZW50KSB0aGlzLl9vbkRyYWdTdGFydChldmVudCk7XG5cdFx0fTtcblx0XHR0aGlzLl9ib3VuZERyYWcgPSAoZXZlbnQpID0+IHtcblx0XHRcdGlmIChldmVudCBpbnN0YW5jZW9mIERyYWdFdmVudCkgdGhpcy5fb25EcmFnKGV2ZW50KTtcblx0XHR9O1xuXHRcdHRoaXMuX2JvdW5kRHJhZ0VuZCA9ICgpID0+IHRoaXMuX2ZpbmlzaERyYWcoZmFsc2UpO1xuXHRcdHRoaXMuX2JvdW5kU2VwYXJhdG9yQWN0aXZhdGUgPSAoZXZlbnQpID0+IHRoaXMuX29uU2VwYXJhdG9yQWN0aXZhdGUoZXZlbnQpO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX2JvdW5kRHJhZ1N0YXJ0LCB0cnVlKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnJywgdGhpcy5fYm91bmREcmFnLCB0cnVlKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fYm91bmREcmFnRW5kLCB0cnVlKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2JvdW5kU2VwYXJhdG9yQWN0aXZhdGUsIHRydWUpO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgdGhpcy5fYm91bmRTZXBhcmF0b3JBY3RpdmF0ZSwgdHJ1ZSk7XG5cblx0XHR0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHRoaXMuX29uTXV0YXRpb25zKG11dGF0aW9ucykpO1xuXHRcdGlmIChkb2N1bWVudC5ib2R5KSB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuXHRcdHRoaXMuX3JlZnJlc2hTZXBhcmF0b3JzKCk7XG5cdH1cblxuXHRvblVubG9hZCgpIHtcblx0XHRpZiAodGhpcy5fc2V0dGluZ3NDb21tYW5kKSB7XG5cdFx0XHR0aGlzLl9zZXR0aW5nc0NvbW1hbmQucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLl9zZXR0aW5nc0NvbW1hbmQgPSBudWxsO1xuXHRcdH1cblx0XHRpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcblx0XHRcdHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHRcdHRoaXMuX29ic2VydmVyID0gbnVsbDtcblx0XHR9XG5cdFx0aWYgKHRoaXMuX3BhbmVsUmVzaXplT2JzZXJ2ZXIpIHtcblx0XHRcdHRoaXMuX3BhbmVsUmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdFx0dGhpcy5fcGFuZWxSZXNpemVPYnNlcnZlciA9IG51bGw7XG5cdFx0fVxuXHRcdGlmICh0aGlzLl9yZWZyZXNoVGltZXIpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLl9yZWZyZXNoVGltZXIpO1xuXHRcdFx0dGhpcy5fcmVmcmVzaFRpbWVyID0gbnVsbDtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBpZCBvZiB0aGlzLl9oYW5kbGVySWRzKSB7XG5cdFx0XHR0cnkgeyB0aGlzLmV2ZW50cy5vZmYoaWQpOyB9IGNhdGNoIHt9XG5cdFx0fVxuXHRcdHRoaXMuX2hhbmRsZXJJZHMgPSBbXTtcblx0XHRmb3IgKGNvbnN0IHRpbWVyIG9mIHRoaXMuX3NlcGFyYXRvclNhdmVUaW1lcnMudmFsdWVzKCkpIGNsZWFyVGltZW91dCh0aW1lcik7XG5cdFx0dGhpcy5fc2VwYXJhdG9yU2F2ZVRpbWVycy5jbGVhcigpO1xuXHRcdHRoaXMuX3BlbmRpbmdTZXBhcmF0b3JTdHlsZXMuY2xlYXIoKTtcblx0XHR0aGlzLl9wZW5kaW5nQ29sbGFwc2VkU2VwYXJhdG9yU3R5bGVzLmNsZWFyKCk7XG5cdFx0aWYgKHRoaXMuX2JvdW5kRHJhZ1N0YXJ0KSBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9ib3VuZERyYWdTdGFydCwgdHJ1ZSk7XG5cdFx0aWYgKHRoaXMuX2JvdW5kRHJhZykgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZycsIHRoaXMuX2JvdW5kRHJhZywgdHJ1ZSk7XG5cdFx0aWYgKHRoaXMuX2JvdW5kRHJhZ0VuZCkgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX2JvdW5kRHJhZ0VuZCwgdHJ1ZSk7XG5cdFx0aWYgKHRoaXMuX2JvdW5kU2VwYXJhdG9yQWN0aXZhdGUpIHtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fYm91bmRTZXBhcmF0b3JBY3RpdmF0ZSwgdHJ1ZSk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIHRoaXMuX2JvdW5kU2VwYXJhdG9yQWN0aXZhdGUsIHRydWUpO1xuXHRcdH1cblx0XHR0aGlzLl9ib3VuZERyYWdTdGFydCA9IG51bGw7XG5cdFx0dGhpcy5fYm91bmREcmFnID0gbnVsbDtcblx0XHR0aGlzLl9ib3VuZERyYWdFbmQgPSBudWxsO1xuXHRcdHRoaXMuX2JvdW5kU2VwYXJhdG9yQWN0aXZhdGUgPSBudWxsO1xuXHRcdHRoaXMuX2ZpbmlzaERyYWcoZmFsc2UpO1xuXHRcdGlmICh0aGlzLl9ib3VuZFJlcG9zaXRpb24pIHtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9ib3VuZFJlcG9zaXRpb24sIHRydWUpO1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2JvdW5kUmVwb3NpdGlvbik7XG5cdFx0XHR0aGlzLl9ib3VuZFJlcG9zaXRpb24gPSBudWxsO1xuXHRcdH1cblx0XHRpZiAodGhpcy5fYWN0aXZlT3ZlcmxheVBvc2l0aW9uUmFmKSB7XG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9hY3RpdmVPdmVybGF5UG9zaXRpb25SYWYpO1xuXHRcdFx0dGhpcy5fYWN0aXZlT3ZlcmxheVBvc2l0aW9uUmFmID0gbnVsbDtcblx0XHR9XG5cdFx0dGhpcy5faGlkZUhvdmVyQWN0aW9uT3ZlcmxheSgpO1xuXHRcdHRoaXMuX2hpZGVBY3RpdmVBY3Rpb25PdmVybGF5KCk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7TUFSS19BVFRSfV1gKS5mb3JFYWNoKChub2RlKSA9PiBub2RlLnJlbW92ZUF0dHJpYnV0ZShNQVJLX0FUVFIpKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxnLXNpZGViYXItc2VwZXJhdG9ycy1wb29mLCAucGxnLXNpZGViYXItc2VwZXJhdG9ycy1ob2xkLCAuJHtBQ1RJT05fQlVUVE9OX0NMQVNTfSwgLiR7QUNUSU9OX09WRVJMQVlfQ0xBU1N9YCkuZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5yZW1vdmUoKSk7XG5cdFx0Y29uc3Qgc3R5bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTVFlMRV9JRCk7XG5cdFx0aWYgKHN0eWxlKSBzdHlsZS5yZW1vdmUoKTtcblx0XHR0aGlzLl9wYW5lbEVsID0gbnVsbDtcblx0fVxuXG5cdGFzeW5jIF9hZGRTZXBhcmF0b3IoKSB7XG5cdFx0bGV0IGNvbGxlY3Rpb24gPSBudWxsO1xuXHRcdHRyeSB7XG5cdFx0XHRjb2xsZWN0aW9uID0gYXdhaXQgdGhpcy5kYXRhLmNyZWF0ZUNvbGxlY3Rpb24oKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdGNvbGxlY3Rpb24gPSBudWxsO1xuXHRcdH1cblx0XHRpZiAoIWNvbGxlY3Rpb24pIHtcblx0XHRcdHRoaXMuX3RvYXN0KCdTZXBhcmF0b3Igd2FzIG5vdCBjcmVhdGVkLicpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbmYgPSBjb2xsZWN0aW9uLmdldENvbmZpZ3VyYXRpb24gPyBjb2xsZWN0aW9uLmdldENvbmZpZ3VyYXRpb24oKSA6IG51bGw7XG5cdFx0aWYgKCFjb25mKSB7XG5cdFx0XHR0aGlzLl90b2FzdCgnU2VwYXJhdG9yIHdhcyBjcmVhdGVkLCBidXQgY291bGQgbm90IGJlIGNvbmZpZ3VyZWQuJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uZi5uYW1lID0gU0VQQVJBVE9SX0NPTExFQ1RJT05fTkFNRTtcblx0XHRjb25mLmljb24gPSAnbGF5b3V0LWxpc3QnO1xuXHRcdGNvbmYuZGVzY3JpcHRpb24gPSAnU2lkZWJhciBzZXBhcmF0b3IgY3JlYXRlZCBieSBTaWRlYmFyIFNlcGVyYXRvcnMuJztcblx0XHRjb25mLnNob3dfY21kcGFsX2l0ZW1zID0gZmFsc2U7XG5cdFx0Y29uZi5zaG93X3NpZGViYXJfaXRlbXMgPSBmYWxzZTtcblx0XHRjb25mLmhvbWUgPSBmYWxzZTtcblx0XHRjb25mLmN1c3RvbSA9IHtcblx0XHRcdC4uLihjb25mLmN1c3RvbSB8fCB7fSksXG5cdFx0XHRbUExVR0lOX0tFWV06IHtcblx0XHRcdFx0aXNTZXBhcmF0b3I6IHRydWUsXG5cdFx0XHRcdHZlcnNpb246IDEsXG5cdFx0XHRcdGNyZWF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuXHRcdFx0XHRzdHlsZTogdGhpcy5fbm9ybWFsaXplU3R5bGUodGhpcy5fZGVmYXVsdFN0eWxlKSxcblx0XHRcdFx0Y29sbGFwc2VkU3R5bGU6IHRoaXMuX25vcm1hbGl6ZVN0eWxlKHRoaXMuX2RlZmF1bHRTdHlsZSksXG5cdFx0XHR9LFxuXHRcdH07XG5cblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgY29sbGVjdGlvbi5zYXZlQ29uZmlndXJhdGlvbihjb25mKTtcblx0XHRcdGNvbnN0IGd1aWQgPSBjb2xsZWN0aW9uLmdldEd1aWQoKTtcblx0XHRcdHRoaXMuX3NlcGFyYXRvcnMuc2V0KGNvbGxlY3Rpb24uZ2V0R3VpZCgpLCB7XG5cdFx0XHRcdGNvbGxlY3Rpb24sXG5cdFx0XHRcdGd1aWQsXG5cdFx0XHRcdG5hbWU6IGNvbmYubmFtZSxcblx0XHRcdFx0c3R5bGU6IHRoaXMuX25vcm1hbGl6ZVN0eWxlKHRoaXMuX2RlZmF1bHRTdHlsZSksXG5cdFx0XHRcdGNvbGxhcHNlZFN0eWxlOiB0aGlzLl9ub3JtYWxpemVTdHlsZSh0aGlzLl9kZWZhdWx0U3R5bGUpLFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLl9hY3RpdmVPdmVycmlkZUd1aWQgPSBndWlkO1xuXHRcdFx0dGhpcy5fd3JpdGVSdW50aW1lU3R5bGUoKTtcblx0XHRcdHRoaXMuX21hcmtTaWRlYmFyUm93cygpO1xuXHRcdFx0dGhpcy5fc2NoZWR1bGVSZWZyZXNoKCk7XG5cdFx0XHR0aGlzLl9yZW5kZXJQYW5lbCgpO1xuXHRcdFx0dGhpcy5fdG9hc3QoJ1NlcGFyYXRvciBhZGRlZC4nKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHRoaXMuX3RvYXN0KCdTZXBhcmF0b3Igd2FzIGNyZWF0ZWQsIGJ1dCBzZXR0aW5ncyB3ZXJlIG5vdCBzYXZlZC4nKTtcblx0XHR9XG5cdH1cblxuXHRhc3luYyBfb3BlblBhbmVsKCkge1xuXHRcdGlmICh0aGlzLl9wYW5lbEVsICYmIGRvY3VtZW50LmNvbnRhaW5zKHRoaXMuX3BhbmVsRWwpKSByZXR1cm47XG5cdFx0Y29uc3QgYWN0aXZlID0gdGhpcy51aS5nZXRBY3RpdmVQYW5lbCAmJiB0aGlzLnVpLmdldEFjdGl2ZVBhbmVsKCk7XG5cdFx0aWYgKGFjdGl2ZSkge1xuXHRcdFx0YWN0aXZlLm5hdmlnYXRlVG9DdXN0b21UeXBlKFBBTkVMX1RZUEUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBwYW5lbCA9IGF3YWl0IHRoaXMudWkuY3JlYXRlUGFuZWwoKTtcblx0XHRpZiAocGFuZWwpIHBhbmVsLm5hdmlnYXRlVG9DdXN0b21UeXBlKFBBTkVMX1RZUEUpO1xuXHR9XG5cblx0X3JlbmRlclBhbmVsKCkge1xuXHRcdGlmICghdGhpcy5fcGFuZWxFbCkgcmV0dXJuO1xuXHRcdHRoaXMuX3JlZnJlc2hUaGVtZUNvbG9ycygpO1xuXHRcdGNvbnN0IHNlbGVjdGVkID0gdGhpcy5fYWN0aXZlT3ZlcnJpZGVHdWlkID8gdGhpcy5fc2VwYXJhdG9ycy5nZXQodGhpcy5fYWN0aXZlT3ZlcnJpZGVHdWlkKSB8fCBudWxsIDogbnVsbDtcblx0XHRjb25zdCBhY3RpdmVTdHlsZSA9IHNlbGVjdGVkICYmIHNlbGVjdGVkLnN0eWxlID8gc2VsZWN0ZWQuc3R5bGUgOiB0aGlzLl9kZWZhdWx0U3R5bGU7XG5cdFx0Y29uc3QgYm9keSA9IFtcblx0XHRcdHBsdWdpbkhlYWRlcih7XG5cdFx0XHRcdHRpdGxlOiAnU2lkZWJhciBTZXBlcmF0b3JzJyxcblx0XHRcdFx0bGVkZTogJ0NyZWF0ZSBtb3ZhYmxlIHNpZGViYXIgc2VwYXJhdG9ycyBhbmQgZWRpdCB0aGUgc2VsZWN0ZWQgb25lLicsXG5cdFx0XHRcdGljb246ICd0aS1sYXlvdXQtbGlzdCcsXG5cdFx0XHRcdHZlcnNpb246ICcxLjAnLFxuXHRcdFx0fSksXG5cdFx0XHR0aGlzLl9zaWRlYmFyUHJldmlldyhhY3RpdmVTdHlsZSwgc2VsZWN0ZWQpLFxuXHRcdFx0aCgnZGl2JywgeyBjbGFzczogYCR7UEFORUxfQ0xBU1N9X190b3AtYWN0aW9uc2AgfSxcblx0XHRcdFx0aCgnYnV0dG9uJywgeyB0eXBlOiAnYnV0dG9uJywgY2xhc3M6IGAke1BBTkVMX0NMQVNTfV9fcHJpbWFyeWAsIG9uQ2xpY2s6ICgpID0+IHRoaXMuX2FkZFNlcGFyYXRvcigpIH0sICdBZGQgTmV3IFNlcGVyYXRvcicpLFxuXHRcdFx0KSxcblx0XHRdO1xuXG5cdFx0aWYgKCFzZWxlY3RlZCkge1xuXHRcdFx0Ym9keS5wdXNoKGgoJ2RpdicsIHsgY2xhc3M6IGAke1BBTkVMX0NMQVNTfV9fZW1wdHktc3RhdGVgIH0sXG5cdFx0XHRcdGgoJ3AnLCB7IGNsYXNzOiBgJHtQQU5FTF9DTEFTU31fX2hlbHBlcmAgfSwgXCJTZWxlY3QgYW4gZXhpc3Rpbmcgc2lkZWJhciBzZXBlcmF0b3IncyBwZW5jaWwgaWNvbiB3aGlsZSB0aGlzIHBhbmVsIGlzIG9wZW4gdG8gZWRpdCBpdCwgb3IgdXNlIEFkZCBOZXcgU2VwZXJhdG9yIGFib3ZlLlwiKSxcblx0XHRcdCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRib2R5LnB1c2godGhpcy5fcmVuZGVyRGVzaWduU2VjdGlvbihzZWxlY3RlZCkpO1xuXHRcdFx0Ym9keS5wdXNoKHRoaXMuX3JlbmRlckNvbG9yU2VjdGlvbihhY3RpdmVTdHlsZSwgc2VsZWN0ZWQpKTtcblx0XHRcdGJvZHkucHVzaCh0aGlzLl9yZW5kZXJQYWxldHRlc1NlY3Rpb24oKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fcGFuZWxFbC5yZXBsYWNlQ2hpbGRyZW4ocGFuZWwoeyBwbHVnaW5DbGFzczogUEFORUxfQ0xBU1MgfSwgYm9keSkpO1xuXHRcdHRoaXMuX21hcmtTaWRlYmFyUm93cygpO1xuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLl9jaGVja1BhbGV0dGVPdmVyZmxvdygpKTtcblx0fVxuXG5cdC8qKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZSAqL1xuXHRfcmVmcmVzaFRoZW1lQ29sb3JzKGZvcmNlID0gZmFsc2UpIHtcblx0XHRjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuXHRcdGlmICghZm9yY2UgJiYgdGhpcy5fdGhlbWVDb2xvcnMubGVuZ3RoICYmIG5vdyAtIHRoaXMuX3RoZW1lQ29sb3JzUmVhZEF0IDwgMTUwMCkgcmV0dXJuO1xuXHRcdGNvbnN0IHJvb3RzID0gW1xuXHRcdFx0dGhpcy5fcGFuZWxFbCxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLS1pY29ucycpLFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKSxcblx0XHRdO1xuXHRcdGNvbnN0IGNvbG9ycyA9IGNvbGxlY3RSZW5kZXJlZFRoZW1lQ29sb3JzKHsgcm9vdHMgfSk7XG5cdFx0dGhpcy5fdGhlbWVDb2xvcnNSZWFkQXQgPSBub3c7XG5cdFx0dGhpcy5fdGhlbWVDb2xvcnMgPSBjb2xvcnMubGVuZ3RoID8gY29sb3JzIDogVEhFTUVfQ09MT1JTLm1hcCgoaXRlbSkgPT4gKHtcblx0XHRcdC4uLml0ZW0sXG5cdFx0XHRyZXNvbHZlZDogaXRlbS5jc3MsXG5cdFx0XHRyYXc6IGl0ZW0uY3NzLFxuXHRcdFx0c291cmNlOiBpdGVtLnZhbHVlLnJlcGxhY2UoL152YXI6LywgJycpLFxuXHRcdH0pKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge1NlcGFyYXRvckVudHJ5fSBzZWxlY3RlZFxuXHQgKi9cblx0X3JlbmRlckRlc2lnblNlY3Rpb24oc2VsZWN0ZWQpIHtcblx0XHRjb25zdCBleHBhbmRlZFN0eWxlID0gc2VsZWN0ZWQuc3R5bGUgPyBzZWxlY3RlZC5zdHlsZSA6IHRoaXMuX2RlZmF1bHRTdHlsZTtcblx0XHRjb25zdCBjb2xsYXBzZWRTdHlsZSA9IHNlbGVjdGVkLmNvbGxhcHNlZFN0eWxlID8gc2VsZWN0ZWQuY29sbGFwc2VkU3R5bGUgOiBleHBhbmRlZFN0eWxlO1xuXHRcdHJldHVybiB0aGlzLl9jb2xsYXBzaWJsZVNlY3Rpb24oJ2Rlc2lnbicsICdEZXNpZ24nLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBzdW1tYXJ5ID0gaCgnc3BhbicsIHsgY2xhc3M6IGAke1BBTkVMX0NMQVNTfV9fc2VjdGlvbi1zdW1tYXJ5YCB9KTtcblx0XHRcdGlmICh0aGlzLl9zZWN0aW9uQ29sbGFwc2VkLmRlc2lnbikge1xuXHRcdFx0XHRzdW1tYXJ5LnRleHRDb250ZW50ID0gYCR7ZXhwYW5kZWRTdHlsZS5ib3JkZXJTdHlsZX0vJHtjb2xsYXBzZWRTdHlsZS5ib3JkZXJTdHlsZX0gXHUwMEI3ICR7ZXhwYW5kZWRTdHlsZS53aWR0aFBjdH0lLyR7Y29sbGFwc2VkU3R5bGUud2lkdGhQY3R9JWA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3VtbWFyeTtcblx0XHR9LCAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiBgJHtQQU5FTF9DTEFTU31fX2Rlc2lnbi1jb2x1bW5zYCB9LFxuXHRcdFx0aCgnZGl2JywgeyBjbGFzczogYCR7UEFORUxfQ0xBU1N9X19kZXNpZ24tY29sdW1uYCB9LFxuXHRcdFx0XHRoKCdkaXYnLCB7IGNsYXNzOiBgJHtQQU5FTF9DTEFTU31fX3N0YXRlLXRpdGxlYCB9LCAnRXhwYW5kZWQnKSxcblx0XHRcdFx0dGhpcy5fc3R5bGVFZGl0b3IoZXhwYW5kZWRTdHlsZSwgKG5leHQsIHJlbmRlcikgPT4gdGhpcy5fc2V0QWN0aXZlU3R5bGUobmV4dCwgcmVuZGVyKSwgYHNlcC1leHBhbmRlZC0ke3NlbGVjdGVkLmd1aWR9YCwgKCkgPT4gdGhpcy5fYWN0aXZlU3R5bGVGb3JFZGl0KGV4cGFuZGVkU3R5bGUpKSxcblx0XHRcdCksXG5cdFx0XHRoKCdkaXYnLCB7IGNsYXNzOiBgJHtQQU5FTF9DTEFTU31fX2Rlc2lnbi1jb2x1bW5gIH0sXG5cdFx0XHRcdGgoJ2RpdicsIHsgY2xhc3M6IGAke1BBTkVMX0NMQVNTfV9fc3RhdGUtdGl0bGVgIH0sICdDb2xsYXBzZWQnKSxcblx0XHRcdFx0dGhpcy5fc3R5bGVFZGl0b3IoY29sbGFwc2VkU3R5bGUsIChuZXh0LCByZW5kZXIpID0+IHRoaXMuX3NldEFjdGl2ZUNvbGxhcHNlZFN0eWxlKG5leHQsIHJlbmRlciksIGBzZXAtY29sbGFwc2VkLSR7c2VsZWN0ZWQuZ3VpZH1gLCAoKSA9PiB0aGlzLl9hY3RpdmVDb2xsYXBzZWRTdHlsZUZvckVkaXQoY29sbGFwc2VkU3R5bGUpKSxcblx0XHRcdCksXG5cdFx0KSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtTZXBhcmF0b3JTdHlsZX0gc3R5bGVcblx0ICogQHBhcmFtIHtTZXBhcmF0b3JFbnRyeX0gc2VsZWN0ZWRcblx0ICovXG5cdF9yZW5kZXJDb2xvclNlY3Rpb24oc3R5bGUsIHNlbGVjdGVkKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2NvbGxhcHNpYmxlU2VjdGlvbignY29sb3InLCAnQ29sb3InLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBzdW1tYXJ5ID0gaCgnc3BhbicsIHsgY2xhc3M6IGAke1BBTkVMX0NMQVNTfV9fc2VjdGlvbi1zdW1tYXJ5YCB9KTtcblx0XHRcdGlmICh0aGlzLl9zZWN0aW9uQ29sbGFwc2VkLmNvbG9yKSBzdW1tYXJ5LnRleHRDb250ZW50ID0gdGhpcy5fY29sb3JTdW1tYXJ5KHN0eWxlKTtcblx0XHRcdHJldHVybiBzdW1tYXJ5O1xuXHRcdH0sICgpID0+IHRoaXMuX2NvbG9yUGlja2VyKHN0eWxlLCAobmV4dCwgcmVuZGVyKSA9PiB0aGlzLl9zZXRBY3RpdmVDb2xvclN0eWxlKG5leHQsIHJlbmRlciksIGBzZXAtY29sb3ItJHtzZWxlY3RlZC5ndWlkfWApKTtcblx0fVxuXG5cdF9yZW5kZXJQYWxldHRlc1NlY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2NvbGxhcHNpYmxlU2VjdGlvbigncGFsZXR0ZXMnLCAnUGFsZXR0ZXMnLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBzdW1tYXJ5ID0gaCgnc3BhbicsIHsgY2xhc3M6IGAke1BBTkVMX0NMQVNTfV9fc2VjdGlvbi1zdW1tYXJ5YCB9KTtcblx0XHRcdGlmICh0aGlzLl9zZWN0aW9uQ29sbGFwc2VkLnBhbGV0dGVzKSB7XG5cdFx0XHRcdHN1bW1hcnkudGV4dENvbnRlbnQgPSB0aGlzLl9hY3RpdmVQYWxldHRlKCkubmFtZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzdW1tYXJ5O1xuXHRcdH0sICgpID0+IHRoaXMuX3JlbmRlclBhbGV0dGVTZWxlY3RvcigpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0geydkZXNpZ24nIHwgJ2NvbG9yJyB8ICdwYWxldHRlcyd9IGtleVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxcblx0ICogQHBhcmFtIHsoKSA9PiBIVE1MRWxlbWVudH0gcmVuZGVyU3VtbWFyeVxuXHQgKiBAcGFyYW0geygpID0+IEhUTUxFbGVtZW50fSByZW5kZXJCb2R5XG5cdCAqL1xuXHRfY29sbGFwc2libGVTZWN0aW9uKGtleSwgbGFiZWwsIHJlbmRlclN1bW1hcnksIHJlbmRlckJvZHkpIHtcblx0XHRjb25zdCBjb2xsYXBzZWQgPSAhIXRoaXMuX3NlY3Rpb25Db2xsYXBzZWRba2V5XTtcblx0XHRjb25zdCB3cmFwID0gaCgnc2VjdGlvbicsIHsgY2xhc3M6ICd0cHMtc2VjdGlvbiB0cHMtc2VjdGlvbi0tY29sbGFwc2libGUnLCBkYXRhc2V0OiB7IG9wZW46IFN0cmluZyghY29sbGFwc2VkKSB9IH0pO1xuXHRcdGNvbnN0IGhlYWRlciA9IGgoJ2J1dHRvbicsIHtcblx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0Y2xhc3M6ICd0cHMtc2VjdGlvbi1oZWFkZXInLFxuXHRcdFx0J2FyaWEtZXhwYW5kZWQnOiBTdHJpbmcoIWNvbGxhcHNlZCksXG5cdFx0XHR0aXRsZTogY29sbGFwc2VkID8gJ0V4cGFuZCcgOiAnQ29sbGFwc2UnLFxuXHRcdFx0b25DbGljazogKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl9zZWN0aW9uQ29sbGFwc2VkW2tleV0gPSAhY29sbGFwc2VkO1xuXHRcdFx0XHR0aGlzLl9yZW5kZXJQYW5lbCgpO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdFx0aCgnc3BhbicsIHsgY2xhc3M6ICd0cHMtc2VjdGlvbi1jaGV2JywgJ2FyaWEtaGlkZGVuJzogJ3RydWUnIH0sICdcdTI1QjgnKSxcblx0XHRcdGgoJ3NwYW4nLCB7IGNsYXNzOiAndHBzLXNlY3Rpb24tbGFiZWwnIH0sIGxhYmVsKSxcblx0XHRcdGgoJ3NwYW4nLCB7IGNsYXNzOiAndHBzLXNlY3Rpb24tc3VtbWFyeScgfSwgcmVuZGVyU3VtbWFyeSgpKSxcblx0XHQpO1xuXHRcdHdyYXAuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblx0XHR3cmFwLmFwcGVuZENoaWxkKGgoJ2RpdicsIHsgY2xhc3M6ICd0cHMtc2VjdGlvbi1ib2R5JyB9LCByZW5kZXJCb2R5KCkpKTtcblx0XHRyZXR1cm4gd3JhcDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge1NlcGFyYXRvclN0eWxlfSBzdHlsZVxuXHQgKiBAcGFyYW0ge1NlcGFyYXRvckVudHJ5IHwgbnVsbH0gc2VsZWN0ZWRcblx0ICovXG5cdF9zaWRlYmFyUHJldmlldyhzdHlsZSwgc2VsZWN0ZWQpIHtcblx0XHRjb25zdCBsaW5lID0gdGhpcy5fbGluZUVsZW1lbnQoYCR7UEFORUxfQ0xBU1N9X19saW5lYCwgc3R5bGUpO1xuXHRcdGxpbmUuc2V0QXR0cmlidXRlKCdkYXRhLXBsZy1zcy1saXZlLWxpbmUnLCAnMScpO1xuXHRcdGNvbnN0IHJvb3QgPSBoKCdkaXYnLCB7IGNsYXNzOiBgJHtQQU5FTF9DTEFTU31fX3ByZXZpZXdgIH0sXG5cdFx0XHRoKCdkaXYnLCB7IGNsYXNzOiBgJHtQQU5FTF9DTEFTU31fX3ByZXZpZXctcmFpbGAgfSwgbGluZSksXG5cdFx0KTtcblx0XHR0aGlzLl9hcHBseVN0eWxlVmFycyhyb290LCBzdHlsZSk7XG5cdFx0cmV0dXJuIHJvb3Q7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtTZXBhcmF0b3JTdHlsZX0gc3R5bGVcblx0ICogQHBhcmFtIHsobmV4dDogU2VwYXJhdG9yU3R5bGUsIHJlbmRlcj86IGJvb2xlYW4pID0+IHZvaWR9IG9uQ2hhbmdlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzY29wZVxuXHQgKiBAcGFyYW0geygpID0+IFNlcGFyYXRvclN0eWxlPX0gZ2V0Q3VycmVudFxuXHQgKi9cblx0X3N0eWxlRWRpdG9yKHN0eWxlLCBvbkNoYW5nZSwgc2NvcGUsIGdldEN1cnJlbnQpIHtcblx0XHRjb25zdCBjdXJyZW50ID0gKCkgPT4gZ2V0Q3VycmVudCA/IGdldEN1cnJlbnQoKSA6IHRoaXMuX2FjdGl2ZVN0eWxlRm9yRWRpdChzdHlsZSk7XG5cdFx0cmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6IGAke1BBTkVMX0NMQVNTfV9fZWRpdG9yYCB9LFxuXHRcdFx0aCgnZGl2JywgeyBjbGFzczogYCR7UEFORUxfQ0xBU1N9X19maWVsZGAgfSxcblx0XHRcdFx0aCgnc3BhbicsIHsgY2xhc3M6IGAke1BBTkVMX0NMQVNTfV9fZmllbGQtbGFiZWxgIH0sICdCb3JkZXInKSxcblx0XHRcdFx0dGhpcy5fc2VnbWVudGVkKEJPUkRFUl9TVFlMRVMsIHN0eWxlLmJvcmRlclN0eWxlLCAodmFsdWUpID0+IHtcblx0XHRcdFx0XHRvbkNoYW5nZSh0aGlzLl9ub3JtYWxpemVTdHlsZSh7IC4uLmN1cnJlbnQoKSwgYm9yZGVyU3R5bGU6IHZhbHVlIH0pLCB0cnVlKTtcblx0XHRcdFx0fSksXG5cdFx0XHQpLFxuXHRcdFx0aCgnZGl2JywgeyBjbGFzczogYCR7UEFORUxfQ0xBU1N9X19maWVsZGAgfSxcblx0XHRcdFx0aCgnc3BhbicsIHsgY2xhc3M6IGAke1BBTkVMX0NMQVNTfV9fZmllbGQtbGFiZWxgIH0sICdBbGlnbicpLFxuXHRcdFx0XHR0aGlzLl9zZWdtZW50ZWQoQUxJR05NRU5UUywgc3R5bGUuYWxpZ25tZW50LCAodmFsdWUpID0+IHtcblx0XHRcdFx0XHRvbkNoYW5nZSh0aGlzLl9ub3JtYWxpemVTdHlsZSh7IC4uLmN1cnJlbnQoKSwgYWxpZ25tZW50OiB2YWx1ZSB9KSwgdHJ1ZSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0KSxcblx0XHRcdHN0eWxlLmJvcmRlclN0eWxlID09PSAnZ3JhZGllbnQnXG5cdFx0XHRcdD8gdGhpcy5fc2xpZGVyRmllbGQoJ0dyYWRpZW50Jywgc3R5bGUuZ3JhZGllbnRQY3QsIDUsIDk1LCAnJScsICh2YWx1ZSkgPT4gb25DaGFuZ2UodGhpcy5fbm9ybWFsaXplU3R5bGUoeyAuLi5jdXJyZW50KCksIGdyYWRpZW50UGN0OiB2YWx1ZSB9KSkpXG5cdFx0XHRcdDogbnVsbCxcblx0XHRcdHRoaXMuX251bWJlckZpZWxkKCdUaGlja25lc3MnLCBzdHlsZS50aGlja25lc3NQeCwgMC41LCA4LCAncHgnLCAodmFsdWUpID0+IG9uQ2hhbmdlKHRoaXMuX25vcm1hbGl6ZVN0eWxlKHsgLi4uY3VycmVudCgpLCB0aGlja25lc3NQeDogdmFsdWUgfSksIGZhbHNlKSwgMC41KSxcblx0XHRcdHN0eWxlLmJvcmRlclN0eWxlID09PSAnZG91YmxlJ1xuXHRcdFx0XHQ/IHRoaXMuX251bWJlckZpZWxkKCdEb3VibGUgZ2FwJywgc3R5bGUuZG91YmxlR2FwUHgsIDAuNSwgOCwgJ3B4JywgKHZhbHVlKSA9PiBvbkNoYW5nZSh0aGlzLl9ub3JtYWxpemVTdHlsZSh7IC4uLmN1cnJlbnQoKSwgZG91YmxlR2FwUHg6IHZhbHVlIH0pLCBmYWxzZSksIDAuNSlcblx0XHRcdFx0OiBudWxsLFxuXHRcdFx0dGhpcy5fbnVtYmVyRmllbGQoJ1dpZHRoJywgc3R5bGUud2lkdGhQY3QsIDEwLCAxMDAsICclJywgKHZhbHVlKSA9PiBvbkNoYW5nZSh0aGlzLl9ub3JtYWxpemVTdHlsZSh7IC4uLmN1cnJlbnQoKSwgd2lkdGhQY3Q6IHZhbHVlIH0pKSksXG5cdFx0XHR0aGlzLl9udW1iZXJGaWVsZCgnT3BhY2l0eScsIHN0eWxlLm9wYWNpdHlQY3QsIDEwLCAxMDAsICclJywgKHZhbHVlKSA9PiBvbkNoYW5nZSh0aGlzLl9ub3JtYWxpemVTdHlsZSh7IC4uLmN1cnJlbnQoKSwgb3BhY2l0eVBjdDogdmFsdWUgfSkpKSxcblx0XHRcdHRoaXMuX251bWJlckZpZWxkKCdTaWRlIGluc2V0Jywgc3R5bGUuaW5zZXRQeCwgMCwgMzYsICdweCcsICh2YWx1ZSkgPT4gb25DaGFuZ2UodGhpcy5fbm9ybWFsaXplU3R5bGUoeyAuLi5jdXJyZW50KCksIGluc2V0UHg6IHZhbHVlIH0pKSksXG5cdFx0XHR0aGlzLl9udW1iZXJGaWVsZCgnUm93IGhlaWdodCcsIHN0eWxlLmhlaWdodFB4LCAxMiwgNDIsICdweCcsICh2YWx1ZSkgPT4gb25DaGFuZ2UodGhpcy5fbm9ybWFsaXplU3R5bGUoeyAuLi5jdXJyZW50KCksIGhlaWdodFB4OiB2YWx1ZSB9KSkpLFxuXHRcdFx0dGhpcy5fbnVtYmVyRmllbGQoJ1kgb2Zmc2V0Jywgc3R5bGUub2Zmc2V0WVB4LCAtMTYsIDE2LCAncHgnLCAodmFsdWUpID0+IG9uQ2hhbmdlKHRoaXMuX25vcm1hbGl6ZVN0eWxlKHsgLi4uY3VycmVudCgpLCBvZmZzZXRZUHg6IHZhbHVlIH0pKSksXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxcblx0ICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cblx0ICogQHBhcmFtIHtudW1iZXJ9IG1heFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pdFxuXHQgKiBAcGFyYW0geyh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkfSBvbkNoYW5nZVxuXHQgKi9cblx0X3NsaWRlckZpZWxkKGxhYmVsLCB2YWx1ZSwgbWluLCBtYXgsIHVuaXQsIG9uQ2hhbmdlKSB7XG5cdFx0cmV0dXJuIGgoJ2xhYmVsJywgeyBjbGFzczogYCR7UEFORUxfQ0xBU1N9X19zbGlkZXJgIH0sXG5cdFx0XHRoKCdzcGFuJywgeyBjbGFzczogYCR7UEFORUxfQ0xBU1N9X19maWVsZC1sYWJlbGAgfSwgbGFiZWwpLFxuXHRcdFx0aCgnaW5wdXQnLCB7XG5cdFx0XHRcdHR5cGU6ICdyYW5nZScsXG5cdFx0XHRcdG1pbixcblx0XHRcdFx0bWF4LFxuXHRcdFx0XHRzdGVwOiAxLFxuXHRcdFx0XHR2YWx1ZTogU3RyaW5nKHZhbHVlKSxcblx0XHRcdFx0b25JbnB1dDogKC8qKiBAdHlwZSB7RXZlbnR9ICovIGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gLyoqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50fSAqLyAoZXZlbnQudGFyZ2V0KTtcblx0XHRcdFx0XHRjb25zdCBuZXh0ID0gdGhpcy5fY2xhbXBJbnQodGFyZ2V0LnZhbHVlLCBtaW4sIG1heCwgdmFsdWUpO1xuXHRcdFx0XHRcdGNvbnN0IHZhbHVlRWwgPSB0YXJnZXQucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3RvcihgLiR7UEFORUxfQ0xBU1N9X19zbGlkZXItdmFsdWVgKTtcblx0XHRcdFx0XHRpZiAodmFsdWVFbCkgdmFsdWVFbC50ZXh0Q29udGVudCA9IGAke25leHR9JHt1bml0fWA7XG5cdFx0XHRcdFx0b25DaGFuZ2UobmV4dCk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9KSxcblx0XHRcdGgoJ3NwYW4nLCB7IGNsYXNzOiBgJHtQQU5FTF9DTEFTU31fX3NsaWRlci12YWx1ZWAgfSwgYCR7dmFsdWV9JHt1bml0fWApLFxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtyZWFkb25seSBzdHJpbmdbXX0gb3B0aW9uc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gYWN0aXZlXG5cdCAqIEBwYXJhbSB7KHZhbHVlOiBzdHJpbmcpID0+IHZvaWR9IG9uQ2hhbmdlXG5cdCAqL1xuXHRfc2VnbWVudGVkKG9wdGlvbnMsIGFjdGl2ZSwgb25DaGFuZ2UpIHtcblx0XHRyZXR1cm4gaCgnZGl2JywgeyBjbGFzczogYCR7UEFORUxfQ0xBU1N9X19zZWdtZW50ZWRgLCByb2xlOiAnZ3JvdXAnIH0sXG5cdFx0XHQuLi5vcHRpb25zLm1hcCgodmFsdWUpID0+IGgoJ2J1dHRvbicsIHtcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdGNsYXNzOiBgJHtQQU5FTF9DTEFTU31fX3NlZyAke3ZhbHVlID09PSBhY3RpdmUgPyAnaXMtYWN0aXZlJyA6ICcnfWAsXG5cdFx0XHRcdCdhcmlhLXByZXNzZWQnOiBTdHJpbmcodmFsdWUgPT09IGFjdGl2ZSksXG5cdFx0XHRcdG9uQ2xpY2s6ICgvKiogQHR5cGUge01vdXNlRXZlbnR9ICovIGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRvbkNoYW5nZSh2YWx1ZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LCB2YWx1ZSkpLFxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuXHQgKiBAcGFyYW0ge251bWJlcn0gbWluXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtYXhcblx0ICogQHBhcmFtIHtzdHJpbmd9IHVuaXRcblx0ICogQHBhcmFtIHsodmFsdWU6IG51bWJlcikgPT4gdm9pZH0gb25DaGFuZ2Vcblx0ICogQHBhcmFtIHtudW1iZXI9fSBzdGVwXG5cdCAqL1xuXHRfbnVtYmVyRmllbGQobGFiZWwsIHZhbHVlLCBtaW4sIG1heCwgdW5pdCwgb25DaGFuZ2UsIHN0ZXAgPSAxKSB7XG5cdFx0Y29uc3QgcGFyc2VEcmFmdCA9ICgvKiogQHR5cGUge3N0cmluZ30gKi8gcmF3KSA9PiB7XG5cdFx0XHRjb25zdCB0cmltbWVkID0gcmF3LnRyaW0oKTtcblx0XHRcdGlmICh0cmltbWVkID09PSAnJyB8fCB0cmltbWVkID09PSAnLScgfHwgdHJpbW1lZCA9PT0gJysnKSByZXR1cm4gbnVsbDtcblx0XHRcdGNvbnN0IG4gPSBOdW1iZXIodHJpbW1lZCk7XG5cdFx0XHRyZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IG51bGw7XG5cdFx0fTtcblx0XHRjb25zdCBjb21taXQgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBuZXh0ID0gdGhpcy5fY2xhbXBOdW1iZXIoaW5wdXQudmFsdWUsIG1pbiwgbWF4LCB2YWx1ZSwgc3RlcCk7XG5cdFx0XHRpbnB1dC52YWx1ZSA9IHRoaXMuX2Zvcm1hdE51bWJlcihuZXh0KTtcblx0XHRcdG9uQ2hhbmdlKG5leHQpO1xuXHRcdH07XG5cdFx0Y29uc3QgaW5wdXQgPSBoKCdpbnB1dCcsIHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0bWluLFxuXHRcdFx0bWF4LFxuXHRcdFx0c3RlcCxcblx0XHRcdHZhbHVlOiB0aGlzLl9mb3JtYXROdW1iZXIodmFsdWUpLFxuXHRcdFx0b25JbnB1dDogKC8qKiBAdHlwZSB7RXZlbnR9ICovIGV2ZW50KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IC8qKiBAdHlwZSB7SFRNTElucHV0RWxlbWVudH0gKi8gKGV2ZW50LnRhcmdldCk7XG5cdFx0XHRcdGNvbnN0IG5leHQgPSBwYXJzZURyYWZ0KHRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdGlmIChuZXh0ID09PSBudWxsIHx8IG5leHQgPCBtaW4gfHwgbmV4dCA+IG1heCkgcmV0dXJuO1xuXHRcdFx0XHRvbkNoYW5nZSh0aGlzLl9jbGFtcE51bWJlcihuZXh0LCBtaW4sIG1heCwgdmFsdWUsIHN0ZXApKTtcblx0XHRcdH0sXG5cdFx0XHRvbkNoYW5nZTogY29tbWl0LFxuXHRcdFx0b25LZXlEb3duOiAoLyoqIEB0eXBlIHtLZXlib2FyZEV2ZW50fSAqLyBldmVudCkgPT4ge1xuXHRcdFx0XHRpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRjb21taXQoKTtcblx0XHRcdFx0XHRpbnB1dC5ibHVyKCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dVcCcgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0c3RlcFZhbHVlKChldmVudC5rZXkgPT09ICdBcnJvd1VwJyA/IDEgOiAtMSkgKiBzdGVwICogKGV2ZW50LnNoaWZ0S2V5ID8gMTAgOiAxKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0Y29uc3Qgc3RlcFZhbHVlID0gKC8qKiBAdHlwZSB7bnVtYmVyfSAqLyBkZWx0YSkgPT4ge1xuXHRcdFx0Y29uc3QgZHJhZnQgPSBwYXJzZURyYWZ0KGlucHV0LnZhbHVlKTtcblx0XHRcdGNvbnN0IGJhc2UgPSBkcmFmdCA9PT0gbnVsbCA/IHZhbHVlIDogZHJhZnQ7XG5cdFx0XHRjb25zdCBuZXh0ID0gdGhpcy5fY2xhbXBOdW1iZXIoYmFzZSArIGRlbHRhLCBtaW4sIG1heCwgdmFsdWUsIHN0ZXApO1xuXHRcdFx0aW5wdXQudmFsdWUgPSB0aGlzLl9mb3JtYXROdW1iZXIobmV4dCk7XG5cdFx0XHRvbkNoYW5nZShuZXh0KTtcblx0XHR9O1xuXHRcdHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiBgJHtQQU5FTF9DTEFTU31fX251bWJlcmAgfSxcblx0XHRcdGgoJ3NwYW4nLCB7IGNsYXNzOiBgJHtQQU5FTF9DTEFTU31fX2ZpZWxkLWxhYmVsYCB9LCBsYWJlbCksXG5cdFx0XHRoKCdzcGFuJywgeyBjbGFzczogYCR7UEFORUxfQ0xBU1N9X19udW1iZXItY29udHJvbGAgfSxcblx0XHRcdFx0aCgnYnV0dG9uJywge1xuXHRcdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogYERlY3JlYXNlICR7bGFiZWx9YCxcblx0XHRcdFx0XHRvbkNsaWNrOiAoLyoqIEB0eXBlIHtNb3VzZUV2ZW50fSAqLyBldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHN0ZXBWYWx1ZSgtc3RlcCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSwgJy0nKSxcblx0XHRcdFx0aW5wdXQsXG5cdFx0XHRcdGgoJ2J1dHRvbicsIHtcblx0XHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6IGBJbmNyZWFzZSAke2xhYmVsfWAsXG5cdFx0XHRcdFx0b25DbGljazogKC8qKiBAdHlwZSB7TW91c2VFdmVudH0gKi8gZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRzdGVwVmFsdWUoc3RlcCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSwgJysnKSxcblx0XHRcdFx0aCgnc3BhbicsIHsgY2xhc3M6IGAke1BBTkVMX0NMQVNTfV9fbnVtYmVyLXVuaXRgIH0sIHVuaXQpLFxuXHRcdFx0KSxcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7U2VwYXJhdG9yU3R5bGV9IHN0eWxlXG5cdCAqIEBwYXJhbSB7KG5leHQ6IFNlcGFyYXRvclN0eWxlLCByZW5kZXI/OiBib29sZWFuKSA9PiB2b2lkfSBvbkNoYW5nZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc2NvcGVcblx0ICovXG5cdF9jb2xvclBpY2tlcihzdHlsZSwgb25DaGFuZ2UsIHNjb3BlKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9ICgpID0+IHRoaXMuX2FjdGl2ZVN0eWxlRm9yRWRpdChzdHlsZSk7XG5cdFx0Y29uc3QgbWFrZUJ1dHRvbiA9ICgvKiogQHR5cGUge3tuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGNzczogc3RyaW5nLCByZXNvbHZlZD86IHN0cmluZywgc291cmNlPzogc3RyaW5nfX0gKi8gaXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgYWN0aXZlID0gc3R5bGUuY29sb3IgPT09IGl0ZW0udmFsdWU7XG5cdFx0XHRyZXR1cm4gaCgnYnV0dG9uJywge1xuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0Y2xhc3M6IGAke1BBTkVMX0NMQVNTfV9fY29sb3IgJHthY3RpdmUgPyAnaXMtYWN0aXZlJyA6ICcnfWAsXG5cdFx0XHRcdHRpdGxlOiBpdGVtLnNvdXJjZSA/IGAke2l0ZW0ubmFtZX0gXHUwMEI3ICR7aXRlbS5zb3VyY2V9YCA6IGl0ZW0ubmFtZSxcblx0XHRcdFx0J2FyaWEtcHJlc3NlZCc6IFN0cmluZyhhY3RpdmUpLFxuXHRcdFx0XHRvbkNsaWNrOiAoKSA9PiBvbkNoYW5nZSh0aGlzLl9ub3JtYWxpemVTdHlsZSh7IC4uLmN1cnJlbnQoKSwgY29sb3I6IGl0ZW0udmFsdWUgfSksIHRydWUpLFxuXHRcdFx0fSxcblx0XHRcdFx0aCgnc3BhbicsIHsgY2xhc3M6IGAke1BBTkVMX0NMQVNTfV9fY29sb3ItZG90YCwgc3R5bGU6IHsgYmFja2dyb3VuZDogaXRlbS5yZXNvbHZlZCB8fCBpdGVtLmNzcyB9IH0pLFxuXHRcdFx0XHRoKCdzcGFuJywgeyBjbGFzczogYCR7UEFORUxfQ0xBU1N9X19jb2xvci1uYW1lYCB9LCBpdGVtLm5hbWUpLFxuXHRcdFx0KTtcblx0XHR9O1xuXHRcdGNvbnN0IHRoZW1lQ29sb3JzID0gdGhpcy5fdGhlbWVDb2xvcnMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnZhbHVlICE9PSBTSURFQkFSX0RJVklERVJfVkFSX1ZBTFVFKTtcblx0XHRjb25zdCBpc0N1c3RvbU9wZW4gPSB0aGlzLl9jdXN0b21PcGVuICYmIHRoaXMuX2N1c3RvbUd1aWQgPT09ICdfX3Jvd19fJztcblx0XHRjb25zdCByb290ID0gaCgnZGl2JywgeyBjbGFzczogYCR7UEFORUxfQ0xBU1N9X19jb2xvcnNgLCBkYXRhc2V0OiB7IHNjb3BlIH0gfSk7XG5cblx0XHRyb290LmFwcGVuZENoaWxkKGgoJ2RpdicsIHsgY2xhc3M6IGAke1BBTkVMX0NMQVNTfV9fY29sb3ItaGVyb2AgfSxcblx0XHRcdHRoaXMuX2RpdmlkZXJQcmVzZXRSb3coc3R5bGUsICgpID0+IG9uQ2hhbmdlKHRoaXMuX25vcm1hbGl6ZVN0eWxlKHsgLi4uY3VycmVudCgpLCBjb2xvcjogU0lERUJBUl9ESVZJREVSX1ZBUl9WQUxVRSB9KSwgdHJ1ZSkpLFxuXHRcdFx0dGhpcy5fcmVuZGVyQ3VzdG9tQ29sb3JUb2dnbGUoc3R5bGUsIGlzQ3VzdG9tT3BlbiksXG5cdFx0KSk7XG5cblx0XHRpZiAoaXNDdXN0b21PcGVuKSB7XG5cdFx0XHRyb290LmFwcGVuZENoaWxkKHRoaXMuX3JlbmRlckNvbGxlY3Rpb25Db2xvckN1c3RvbVBhbmVsKCdfX3Jvd19fJywgKGhleCkgPT4ge1xuXHRcdFx0XHRjb25zdCBuZXh0ID0gdGhpcy5fbm9ybWFsaXplU3R5bGUoeyAuLi5jdXJyZW50KCksIGNvbG9yOiBgY3VzdG9tOiR7aGV4fWAsIGN1c3RvbUNvbG9yOiBoZXggfSk7XG5cdFx0XHRcdC8vIE5ldmVyIHJlLXJlbmRlciB3aGlsZSB0aGUgcGlja2VyIGlzIG9wZW4gXHUyMDE0IHRoZSBwYW5lbCBtYW5hZ2VzXG5cdFx0XHRcdC8vIGl0cyBvd24gRE9NIHN0YXRlIGFuZCByZS1yZW5kZXJpbmcgd291bGQgZGVzdHJveSB0aGUgcGlja2VyXG5cdFx0XHRcdC8vIG1pZC1kcmFnL21pZC10eXBlLiBMaXZlIHVwZGF0ZXMgZmxvdyB0aHJvdWdoIHRvIHRoZSBzaWRlYmFyXG5cdFx0XHRcdC8vIHZpYSBfd3JpdGVSdW50aW1lU3R5bGUgaW5zaWRlIF9zZXRBY3RpdmVDb2xvclN0eWxlLlxuXHRcdFx0XHRvbkNoYW5nZShuZXh0LCBmYWxzZSk7XG5cdFx0XHR9KSk7XG5cdFx0fVxuXG5cdFx0cm9vdC5hcHBlbmRDaGlsZChoKCdkaXYnLCB7IGNsYXNzOiBgJHtQQU5FTF9DTEFTU31fX2NvbG9ycy1ncm91cGAgfSxcblx0XHRcdGgoJ2RpdicsIHsgY2xhc3M6IGAke1BBTkVMX0NMQVNTfV9fY29sb3JzLWxhYmVsYCB9LCAnVGhlbWUgdmFyaWFibGVzJyksXG5cdFx0XHR0aGVtZUNvbG9ycy5sZW5ndGhcblx0XHRcdFx0PyBoKCdkaXYnLCB7IGNsYXNzOiBgJHtQQU5FTF9DTEFTU31fX2NvbG9ycy1ncmlkYCB9LCAuLi50aGVtZUNvbG9ycy5tYXAobWFrZUJ1dHRvbikpXG5cdFx0XHRcdDogaCgnZGl2JywgeyBjbGFzczogYCR7UEFORUxfQ0xBU1N9X19lbXB0eWAgfSwgJ05vIGFjdGl2ZSB0aGVtZSBjb2xvcnMgZm91bmQuJyksXG5cdFx0KSk7XG5cblx0XHQvLyBBY3RpdmUtcGFsZXR0ZSBzd2F0Y2ggcm93IChjbGlja2FibGUpLiBNaXJyb3JzIGNvbGxlY3Rpb24tY29sb3JzXG5cdFx0Ly8gYF9idWlsZFN3YXRjaGVzRWxgIGV4YWN0bHkuIFRoZSBmdWxsIHBhbGV0dGUgTElTVCBsaXZlcyBpbiBpdHMgb3duXG5cdFx0Ly8gUEFMRVRURVMgc2VjdGlvbiBiZWxvdy5cblx0XHRjb25zdCBhY3RpdmVQYWxldHRlID0gdGhpcy5fYWN0aXZlUGFsZXR0ZSgpO1xuXHRcdHJvb3QuYXBwZW5kQ2hpbGQoaCgnZGl2JywgeyBjbGFzczogYCR7UEFORUxfQ0xBU1N9X19jb2xvcnMtZ3JvdXBgIH0sXG5cdFx0XHRoKCdkaXYnLCB7IGNsYXNzOiBgJHtQQU5FTF9DTEFTU31fX2NvbG9ycy1sYWJlbGAgfSwgYCR7YWN0aXZlUGFsZXR0ZS5uYW1lfSBzd2F0Y2hlc2ApLFxuXHRcdFx0dGhpcy5fYnVpbGRDb2xsZWN0aW9uQ29sb3JTd2F0Y2hlc0VsKGFjdGl2ZVBhbGV0dGUuaWQsIGFjdGl2ZVBhbGV0dGUuc3dhdGNoZXMsIHN0eWxlLCAodmFsdWUpID0+IHtcblx0XHRcdFx0b25DaGFuZ2UodGhpcy5fbm9ybWFsaXplU3R5bGUoeyAuLi5jdXJyZW50KCksIGNvbG9yOiB2YWx1ZSB9KSwgdHJ1ZSk7XG5cdFx0XHR9KSxcblx0XHQpKTtcblx0XHRyZXR1cm4gcm9vdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBIZXJvIHByZXNldCBhdCB0aGUgdG9wIG9mIHRoZSBDb2xvciBzZWN0aW9uOiB0cmFja3MgLS1zaWRlYmFyLWRpdmlkZXItY29sb3Jcblx0ICogc28gc2VwYXJhdG9ycyB2aXN1YWxseSBtYXRjaCBUaHltZXIncyBvdGhlciBzaWRlYmFyIGRpdmlkZXJzLlxuXHQgKiBAcGFyYW0ge1NlcGFyYXRvclN0eWxlfSBzdHlsZVxuXHQgKiBAcGFyYW0geygpID0+IHZvaWR9IG9uU2VsZWN0XG5cdCAqL1xuXHRfZGl2aWRlclByZXNldFJvdyhzdHlsZSwgb25TZWxlY3QpIHtcblx0XHRjb25zdCBhY3RpdmUgPSBzdHlsZS5jb2xvciA9PT0gU0lERUJBUl9ESVZJREVSX1ZBUl9WQUxVRTtcblx0XHQvLyBSZW5kZXIgdGhlIHN3YXRjaCB3aXRoIHRoZSBsaXZlIENTUyB2YXJpYWJsZSBzbyBpdCB0cmFja3MgVGh5bWVyJ3Ncblx0XHQvLyB0aGVtZSBleGFjdGx5IChubyBjYWNoZWQgc25hcHNob3QgZHJpZnQpLlxuXHRcdGNvbnN0IHN3YXRjaENvbG9yID0gU0lERUJBUl9ESVZJREVSX1ZBUl9DU1M7XG5cdFx0cmV0dXJuIGgoJ2J1dHRvbicsIHtcblx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0Y2xhc3M6IGAke1BBTkVMX0NMQVNTfV9fcHJlc2V0LXJvdyAke2FjdGl2ZSA/ICdpcy1hY3RpdmUnIDogJyd9YCxcblx0XHRcdCdhcmlhLXByZXNzZWQnOiBTdHJpbmcoYWN0aXZlKSxcblx0XHRcdG9uQ2xpY2s6ICgvKiogQHR5cGUge01vdXNlRXZlbnR9ICovIGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGlmICghYWN0aXZlKSBvblNlbGVjdCgpO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdFx0aCgnc3BhbicsIHsgY2xhc3M6IGAke1BBTkVMX0NMQVNTfV9fcHJlc2V0LXN3YXRjaGAsIHN0eWxlOiB7IGJhY2tncm91bmQ6IHN3YXRjaENvbG9yIH0gfSksXG5cdFx0XHRoKCdzcGFuJywgeyBjbGFzczogYCR7UEFORUxfQ0xBU1N9X19wcmVzZXQtdGV4dGAgfSxcblx0XHRcdFx0aCgnc3BhbicsIHsgY2xhc3M6IGAke1BBTkVMX0NMQVNTfV9fcHJlc2V0LXRpdGxlYCB9LCAnTWF0Y2ggc2lkZWJhciBkaXZpZGVycycpLFxuXHRcdFx0XHRoKCdzcGFuJywgeyBjbGFzczogYCR7UEFORUxfQ0xBU1N9X19wcmVzZXQtaGludGAgfSwgXCJVc2VzIHRoZSBzYW1lIGNvbG9yIGFzIFRoeW1lcidzIG90aGVyIHNpZGViYXIgZGl2aWRlcnMuIFVwZGF0ZXMgd2l0aCB5b3VyIHRoZW1lLlwiKSxcblx0XHRcdCksXG5cdFx0XHRoKCdzcGFuJywgeyBjbGFzczogYCR7UEFORUxfQ0xBU1N9X19wcmVzZXQtY2hlY2tgLCAnYXJpYS1oaWRkZW4nOiAndHJ1ZScgfSwgYWN0aXZlID8gJ1x1MjcxMycgOiAnJyksXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTaWRlLWJ5LXNpZGUgcGFydG5lciBvZiB0aGUgZGl2aWRlciBwcmVzZXQ6IGEgc2luZ2xlIGJ1dHRvbiB0aGF0IG9wZW5zXG5cdCAqIHRoZSBjdXN0b20gaGV4IHBpY2tlci4gVGhlIHBhbmVsIGl0c2VsZiBpcyByZW5kZXJlZCBhcyBhIHNpYmxpbmcgYnlcblx0ICogYF9jb2xvclBpY2tlcmAgc28gaXQgc3BhbnMgdGhlIGZ1bGwgY29sb3Igc2VjdGlvbiB3aWR0aC5cblx0ICogQHBhcmFtIHtTZXBhcmF0b3JTdHlsZX0gc3R5bGVcblx0ICogQHBhcmFtIHtib29sZWFufSBpc09wZW5cblx0ICovXG5cdF9yZW5kZXJDdXN0b21Db2xvclRvZ2dsZShzdHlsZSwgaXNPcGVuKSB7XG5cdFx0Y29uc3QgaXNDdXN0b21Db2xvciA9IHN0eWxlLmNvbG9yLnN0YXJ0c1dpdGgoJ2N1c3RvbTonKTtcblx0XHRjb25zdCBzd2F0Y2hIZXggPSBpc0N1c3RvbUNvbG9yXG5cdFx0XHQ/IHRoaXMuX2hleE9yRGVmYXVsdChzdHlsZS5jdXN0b21Db2xvcilcblx0XHRcdDogKGlzT3BlbiAmJiB0aGlzLl9pc0hleCh0aGlzLl9kcmFmdEhleCkgPyAvKiogQHR5cGUge3N0cmluZ30gKi8gKHRoaXMuX2RyYWZ0SGV4KSA6IHRoaXMuX2hleE9yRGVmYXVsdChzdHlsZS5jdXN0b21Db2xvcikpO1xuXHRcdGNvbnN0IGxhYmVsSGV4ID0gaXNDdXN0b21Db2xvciA/IHRoaXMuX2hleE9yRGVmYXVsdChzdHlsZS5jdXN0b21Db2xvcikudG9VcHBlckNhc2UoKSA6ICcnO1xuXHRcdHJldHVybiBoKCdidXR0b24nLCB7XG5cdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdGNsYXNzOiBgJHtQQU5FTF9DTEFTU31fX3ByZXNldC1yb3cgJHtQQU5FTF9DTEFTU31fX2N1c3RvbS1yb3cgJHtpc0N1c3RvbUNvbG9yIHx8IGlzT3BlbiA/ICdpcy1hY3RpdmUnIDogJyd9YCxcblx0XHRcdCdhcmlhLXByZXNzZWQnOiBTdHJpbmcoaXNDdXN0b21Db2xvciB8fCBpc09wZW4pLFxuXHRcdFx0J2FyaWEtZXhwYW5kZWQnOiBTdHJpbmcoaXNPcGVuKSxcblx0XHRcdG9uQ2xpY2s6ICgvKiogQHR5cGUge01vdXNlRXZlbnR9ICovIGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGNvbnN0IG5leHRPcGVuID0gIWlzT3Blbjtcblx0XHRcdFx0dGhpcy5fY3VzdG9tT3BlbiA9IG5leHRPcGVuO1xuXHRcdFx0XHRpZiAobmV4dE9wZW4pIHtcblx0XHRcdFx0XHR0aGlzLl9jdXN0b21HdWlkID0gJ19fcm93X18nO1xuXHRcdFx0XHRcdHRoaXMuX2RyYWZ0SGV4ID0gaXNDdXN0b21Db2xvciA/IHRoaXMuX2hleE9yRGVmYXVsdChzdHlsZS5jdXN0b21Db2xvcikgOiB0aGlzLl9oZXhPckRlZmF1bHQodGhpcy5fcmVzb2x2ZUhleENvbG9yKHN0eWxlKSk7XG5cdFx0XHRcdFx0dGhpcy5fZHJhZnRGb3JtYXQgPSAnSEVYJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl9jdXN0b21HdWlkID0gbnVsbDtcblx0XHRcdFx0XHR0aGlzLl9kcmFmdEhleCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fcmVuZGVyUGFuZWwoKTtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRcdGgoJ3NwYW4nLCB7IGNsYXNzOiBgJHtQQU5FTF9DTEFTU31fX3ByZXNldC1zd2F0Y2hgLCBzdHlsZTogeyBiYWNrZ3JvdW5kOiBzd2F0Y2hIZXggfSB9KSxcblx0XHRcdGgoJ3NwYW4nLCB7IGNsYXNzOiBgJHtQQU5FTF9DTEFTU31fX3ByZXNldC10ZXh0YCB9LFxuXHRcdFx0XHRoKCdzcGFuJywgeyBjbGFzczogYCR7UEFORUxfQ0xBU1N9X19wcmVzZXQtdGl0bGVgIH0sICdDdXN0b20gY29sb3InKSxcblx0XHRcdFx0aCgnc3BhbicsIHsgY2xhc3M6IGAke1BBTkVMX0NMQVNTfV9fcHJlc2V0LWhpbnRgIH0sIGxhYmVsSGV4IHx8ICdQaWNrIGFueSBoZXggdmFsdWUnKSxcblx0XHRcdCksXG5cdFx0XHRoKCdzcGFuJywgeyBjbGFzczogYCR7UEFORUxfQ0xBU1N9X19wcmVzZXQtY2hlY2tgLCAnYXJpYS1oaWRkZW4nOiAndHJ1ZScgfSwgaXNPcGVuID8gJ1x1MjVCRScgOiAoaXNDdXN0b21Db2xvciA/ICdcdTI3MTMnIDogJycpKSxcblx0XHQpO1xuXHR9XG5cblx0LyoqIEBwYXJhbSB7U2VwYXJhdG9yU3R5bGV9IHN0eWxlICovXG5cdF9jb2xvclN1bW1hcnkoc3R5bGUpIHtcblx0XHRpZiAoc3R5bGUuY29sb3IgPT09IFNJREVCQVJfRElWSURFUl9WQVJfVkFMVUUpIHJldHVybiAnU2lkZWJhciBkaXZpZGVyJztcblx0XHRjb25zdCB0aGVtZSA9IHRoaXMuX3RoZW1lQ29sb3JzLmZpbmQoKGl0ZW0pID0+IGl0ZW0udmFsdWUgPT09IHN0eWxlLmNvbG9yKSB8fCBUSEVNRV9DT0xPUlMuZmluZCgoaXRlbSkgPT4gaXRlbS52YWx1ZSA9PT0gc3R5bGUuY29sb3IpO1xuXHRcdGlmICh0aGVtZSkgcmV0dXJuIHRoZW1lLm5hbWU7XG5cdFx0aWYgKHN0eWxlLmNvbG9yLnN0YXJ0c1dpdGgoJ2N1c3RvbTonKSkgcmV0dXJuIHN0eWxlLmNvbG9yLnNsaWNlKCdjdXN0b206Jy5sZW5ndGgpLnRvVXBwZXJDYXNlKCk7XG5cdFx0Zm9yIChjb25zdCBwYWxldHRlIG9mIHRoaXMuX2FsbFBhbGV0dGVzKCkpIHtcblx0XHRcdGlmICghc3R5bGUuY29sb3Iuc3RhcnRzV2l0aChgJHtwYWxldHRlLmlkfTpgKSkgY29udGludWU7XG5cdFx0XHRjb25zdCBoZXggPSBzdHlsZS5jb2xvci5zbGljZShwYWxldHRlLmlkLmxlbmd0aCArIDEpLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRjb25zdCBzd2F0Y2ggPSBwYWxldHRlLnN3YXRjaGVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaGV4LnRvTG93ZXJDYXNlKCkgPT09IGhleCk7XG5cdFx0XHRyZXR1cm4gYCR7cGFsZXR0ZS5uYW1lfSR7c3dhdGNoID8gYCBcdTAwQjcgJHtzd2F0Y2gubmFtZX1gIDogJyd9YDtcblx0XHR9XG5cdFx0cmV0dXJuICdTaWRlYmFyIGRpdmlkZXInO1xuXHR9XG5cblx0X3RhaWx3aW5kUGFsZXR0ZSgpIHtcblx0XHRjb25zdCBzaGFkZSA9IFRBSUxXSU5EX1NIQURFUy5pbmNsdWRlcyh0aGlzLl90YWlsd2luZFNoYWRlKSA/IHRoaXMuX3RhaWx3aW5kU2hhZGUgOiA1MDA7XG5cdFx0Y29uc3Qgc3dhdGNoZXMgPSBPYmplY3QuZW50cmllcyhUQUlMV0lORF9GQU1JTElFUykubWFwKChbbmFtZSwgZmFtaWx5XSkgPT4gKHtcblx0XHRcdG5hbWUsXG5cdFx0XHRoZXg6IGZhbWlseVsvKiogQHR5cGUge2tleW9mIHR5cGVvZiBmYW1pbHl9ICovIChzaGFkZSldIHx8IGZhbWlseVs1MDBdLFxuXHRcdH0pKTtcblx0XHRyZXR1cm4geyBpZDogJ3RhaWx3aW5kJywgbmFtZTogYFRhaWx3aW5kICR7c2hhZGV9YCwgc3dhdGNoZXMgfTtcblx0fVxuXG5cdF9hbGxQYWxldHRlcygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0dGhpcy5fdGFpbHdpbmRQYWxldHRlKCksXG5cdFx0XHQuLi5DT0xPUl9QQUxFVFRFX0dST1VQUy5maWx0ZXIoKHBhbGV0dGUpID0+IHBhbGV0dGUuaWQgIT09ICd0YWlsd2luZCcpLFxuXHRcdF07XG5cdH1cblxuXHRfYWN0aXZlUGFsZXR0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fYWxsUGFsZXR0ZXMoKS5maW5kKChwYWxldHRlKSA9PiBwYWxldHRlLmlkID09PSB0aGlzLl9wYWxldHRlSWQpIHx8IHRoaXMuX3RhaWx3aW5kUGFsZXR0ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBhbGV0dGUgc2VsZWN0b3IgXHUyMDE0IHZlcmJhdGltIHBvcnQgb2YgcGx1Z2luLWNvbGxlY3Rpb24tY29sb3JzJ1xuXHQgKiBgX3JlbmRlclBhbGV0dGVTZWxlY3RvcmAgKG1pbnVzIHRoZSBjdXN0b20tcGFsZXR0ZXMgZWRpdG9yIGFuZCB0aGVcblx0ICogXCIrIE5ldyBjdXN0b20gcGFsZXR0ZVwiIHJvdywgd2hpY2ggc2lkZWJhci1zZXBlcmF0b3JzIGRvZXMgbm90IG5lZWQpLlxuXHQgKiBEb3RzIGFyZSBpbmVydCBwcmV2aWV3IHNwYW5zLiBDbGljayBhbnl3aGVyZSBvbiB0aGUgcm93IHRvIHNldCB0aGF0XG5cdCAqIHBhbGV0dGUgYXMgYWN0aXZlLlxuXHQgKi9cblx0X3JlbmRlclBhbGV0dGVTZWxlY3RvcigpIHtcblx0XHRjb25zdCBsaXN0ID0gaCgnZGl2JywgeyBjbGFzczogYCR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19wYWxldHRlLWxpc3RgIH0pO1xuXHRcdGZvciAoY29uc3QgcCBvZiB0aGlzLl9hbGxQYWxldHRlcygpKSB7XG5cdFx0XHRjb25zdCBpc0FjdGl2ZSA9IHRoaXMuX3BhbGV0dGVJZCA9PT0gcC5pZDtcblx0XHRcdGNvbnN0IHJvdyA9IGgoJ2RpdicsIHtcblx0XHRcdFx0Y2xhc3M6IGAke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fcGFsZXR0ZS1yb3cgJHtpc0FjdGl2ZSA/ICdpcy1hY3RpdmUnIDogJyd9YC50cmltKCksXG5cdFx0XHRcdHRpdGxlOiAnQ2xpY2sgdG8gc2VsZWN0Jyxcblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBzZWxlY3RQYWxldHRlID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5fcGFsZXR0ZUlkID09PSBwLmlkKSByZXR1cm47XG5cdFx0XHRcdHRoaXMuX3BhbGV0dGVJZCA9IHAuaWQ7XG5cdFx0XHRcdHRoaXMuX2N1c3RvbU9wZW4gPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5fY3VzdG9tR3VpZCA9IG51bGw7XG5cdFx0XHRcdHRoaXMuX3JlbmRlclBhbmVsKCk7XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBuYW1lID0gaCgnYnV0dG9uJywge1xuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0Y2xhc3M6IGAke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fcGFsZXR0ZS1yb3ctbmFtZWAsXG5cdFx0XHR9LCBwLm5hbWUpO1xuXG5cdFx0XHRjb25zdCBkb3RzID0gaCgnZGl2JywgeyBjbGFzczogYCR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19wYWxldHRlLXJvdy1kb3RzYCB9KTtcblx0XHRcdGZvciAoY29uc3Qgc3cgb2YgcC5zd2F0Y2hlcykge1xuXHRcdFx0XHRjb25zdCBkb3QgPSBoKCdzcGFuJywge1xuXHRcdFx0XHRcdGNsYXNzOiBgJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3BhbGV0dGUtZG90YCxcblx0XHRcdFx0XHR0aXRsZTogYCR7c3cubmFtZSB8fCBzdy5oZXh9IFx1MDBCNyAke3N3LmhleH1gLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0ZG90LnN0eWxlLmJhY2tncm91bmQgPSBzdy5oZXg7XG5cdFx0XHRcdGRvdHMuYXBwZW5kQ2hpbGQoZG90KTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcmV2ZWFsID0gaCgnYnV0dG9uJywge1xuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0Y2xhc3M6IGAke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fcGFsZXR0ZS1yb3ctcmV2ZWFsYCxcblx0XHRcdFx0dGl0bGU6ICdTaG93IGNvbG9ycycsXG5cdFx0XHRcdG9uQ2xpY2s6ICgvKiogQHR5cGUge01vdXNlRXZlbnR9ICovIGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0aWYgKHJvdy5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLXRydW5jYXRlZCcpIHx8IHJvdy5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLXJldmVhbGVkJykpIHtcblx0XHRcdFx0XHRcdHJvdy5jbGFzc0xpc3QudG9nZ2xlKCdpcy1yZXZlYWxlZCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXG5cdFx0XHRyb3cuYXBwZW5kQ2hpbGQobmFtZSk7XG5cdFx0XHRyb3cuYXBwZW5kQ2hpbGQoZG90cyk7XG5cdFx0XHRyb3cuYXBwZW5kQ2hpbGQocmV2ZWFsKTtcblxuXHRcdFx0cm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0UGFsZXR0ZSk7XG5cdFx0XHRyb3cuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuXHRcdFx0bGlzdC5hcHBlbmRDaGlsZChyb3cpO1xuXHRcdFx0aWYgKHAuaWQgPT09ICd0YWlsd2luZCcgJiYgaXNBY3RpdmUpIGxpc3QuYXBwZW5kQ2hpbGQodGhpcy5fcmVuZGVyVGFpbHdpbmRTaGFkZVNlbGVjdG9yKCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gbGlzdDtcblx0fVxuXG5cdF9yZW5kZXJUYWlsd2luZFNoYWRlU2VsZWN0b3IoKSB7XG5cdFx0Y29uc3Qgd3JhcCA9IGgoJ2RpdicsIHsgY2xhc3M6IGAke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fdGFpbHdpbmQtc2hhZGVzYCB9LFxuXHRcdFx0aCgnZGl2JywgeyBjbGFzczogYCR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X190YWlsd2luZC1zaGFkZXMtbGFiZWxgIH0sICdUYWlsd2luZCBzaGFkZScpLFxuXHRcdCk7XG5cdFx0Y29uc3Qgc2VnID0gaCgnZGl2JywgeyBjbGFzczogYCR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X190YWlsd2luZC1zaGFkZXMtc2VnYCB9KTtcblx0XHRmb3IgKGNvbnN0IHNoYWRlIG9mIFRBSUxXSU5EX1NIQURFUykge1xuXHRcdFx0Y29uc3QgYWN0aXZlID0gdGhpcy5fdGFpbHdpbmRTaGFkZSA9PT0gc2hhZGU7XG5cdFx0XHRzZWcuYXBwZW5kQ2hpbGQoaCgnYnV0dG9uJywge1xuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0Y2xhc3M6IGAke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fc2hhZGUtYnRuICR7YWN0aXZlID8gJ2lzLWFjdGl2ZScgOiAnJ31gLFxuXHRcdFx0XHR0aXRsZTogYFVzZSBUYWlsd2luZCAke3NoYWRlfWAsXG5cdFx0XHRcdG9uQ2xpY2s6ICgvKiogQHR5cGUge01vdXNlRXZlbnR9ICovIGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHR0aGlzLl90YWlsd2luZFNoYWRlID0gc2hhZGU7XG5cdFx0XHRcdFx0dGhpcy5fcmVuZGVyUGFuZWwoKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sIFN0cmluZyhzaGFkZSkpKTtcblx0XHR9XG5cdFx0d3JhcC5hcHBlbmRDaGlsZChzZWcpO1xuXHRcdHJldHVybiB3cmFwO1xuXHR9XG5cblx0X2NoZWNrUGFsZXR0ZU92ZXJmbG93KCkge1xuXHRcdGlmICghdGhpcy5fcGFuZWxFbCkgcmV0dXJuO1xuXHRcdGZvciAoY29uc3Qgcm93IG9mIHRoaXMuX3BhbmVsRWwucXVlcnlTZWxlY3RvckFsbChgLiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19wYWxldHRlLXJvd2ApKSB7XG5cdFx0XHRpZiAocm93LmNsYXNzTGlzdC5jb250YWlucygnaXMtcmV2ZWFsZWQnKSkgY29udGludWU7XG5cdFx0XHRjb25zdCByb3dFbCA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovIChyb3cpO1xuXHRcdFx0Y29uc3QgZG90cyA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnQgfCBudWxsfSAqLyAocm93LnF1ZXJ5U2VsZWN0b3IoYC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fcGFsZXR0ZS1yb3ctZG90c2ApKTtcblx0XHRcdGlmICghZG90cykgY29udGludWU7XG5cdFx0XHRjb25zdCBkb3RDb3VudCA9IGRvdHMuY2hpbGRyZW4ubGVuZ3RoO1xuXHRcdFx0aWYgKCFkb3RDb3VudCkge1xuXHRcdFx0XHRyb3cuY2xhc3NMaXN0LnJlbW92ZSgnaXMtdHJ1bmNhdGVkJyk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgRE9UX1cgPSAxNCwgRE9UX0dBUCA9IDQsIFJPV19HQVAgPSAxMiwgUk9XX1BBRF9YID0gMTA7XG5cdFx0XHRjb25zdCBkb3RzSWRlYWxXID0gZG90Q291bnQgKiBET1RfVyArIE1hdGgubWF4KDAsIGRvdENvdW50IC0gMSkgKiBET1RfR0FQO1xuXHRcdFx0Y29uc3QgbmFtZSA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnQgfCBudWxsfSAqLyAocm93LnF1ZXJ5U2VsZWN0b3IoYC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fcGFsZXR0ZS1yb3ctbmFtZWApKTtcblx0XHRcdGNvbnN0IHJldmVhbCA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnQgfCBudWxsfSAqLyAocm93LnF1ZXJ5U2VsZWN0b3IoYC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fcGFsZXR0ZS1yb3ctcmV2ZWFsYCkpO1xuXHRcdFx0Y29uc3Qgcm93V2lkdGggPSByb3dFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcblx0XHRcdGNvbnN0IG5hbWVXID0gbmFtZSA/IG5hbWUub2Zmc2V0V2lkdGggOiAwO1xuXHRcdFx0Y29uc3QgcmV2ZWFsVyA9IHJldmVhbCA/IE1hdGgubWF4KHJldmVhbC5vZmZzZXRXaWR0aCwgMjQpIDogMDtcblx0XHRcdGNvbnN0IGF2YWlsYWJsZUZvckRvdHMgPSByb3dXaWR0aCAtIChST1dfUEFEX1ggKiAyKSAtIChST1dfR0FQICogMikgLSBuYW1lVyAtIHJldmVhbFc7XG5cdFx0XHRyb3cuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtdHJ1bmNhdGVkJywgZG90c0lkZWFsVyA+IGF2YWlsYWJsZUZvckRvdHMpO1xuXHRcdH1cblx0fVxuXG5cdC8qKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgKi9cblx0X3RhaWx3aW5kRmFtaWx5Rm9yQ29sb3IoY29sb3IpIHtcblx0XHRpZiAoIWNvbG9yLnN0YXJ0c1dpdGgoJ3RhaWx3aW5kOicpKSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCBoZXggPSBjb2xvci5zbGljZSgndGFpbHdpbmQ6Jy5sZW5ndGgpLnRvTG93ZXJDYXNlKCk7XG5cdFx0Zm9yIChjb25zdCBbZmFtaWx5TmFtZSwgZmFtaWx5XSBvZiBPYmplY3QuZW50cmllcyhUQUlMV0lORF9GQU1JTElFUykpIHtcblx0XHRcdGlmIChPYmplY3QudmFsdWVzKGZhbWlseSkuc29tZSgodmFsdWUpID0+IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGhleCkpIHJldHVybiBmYW1pbHlOYW1lO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBBY3RpdmUtcGFsZXR0ZSBzd2F0Y2ggcGlja2VyLiBWZXJiYXRpbSBmcm9tIHBsdWdpbi1jb2xsZWN0aW9uLWNvbG9ycydcblx0ICogYF9idWlsZFN3YXRjaGVzRWxgIChyZW5hbWVkIGZvciBuYW1lc3BhY2luZyk6IGVhY2ggc3dhdGNoIGlzIGEgcmVhbFxuXHQgKiBidXR0b24sIGNsaWNrcyBhcHBseSB0aGUgY29sb3IuIE5vIFwibm8gY29sb3JcIiBvciBcImN1c3RvbVwiIGVudHJpZXMgXHUyMDE0XG5cdCAqIHRob3NlIGFyZSBoYW5kbGVkIGJ5IHRoZSBNYXRjaC1kaXZpZGVyIGFuZCBDdXN0b20tY29sb3IgaGVybyBjYXJkcy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeFxuXHQgKiBAcGFyYW0ge3JlYWRvbmx5IHtuYW1lOiBzdHJpbmcsIGhleDogc3RyaW5nfVtdfSBzd2F0Y2hlc1xuXHQgKiBAcGFyYW0ge1NlcGFyYXRvclN0eWxlfSBzdHlsZVxuXHQgKiBAcGFyYW0geyh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkfSBvbkNvbG9yXG5cdCAqL1xuXHRfYnVpbGRDb2xsZWN0aW9uQ29sb3JTd2F0Y2hlc0VsKHByZWZpeCwgc3dhdGNoZXMsIHN0eWxlLCBvbkNvbG9yKSB7XG5cdFx0Y29uc3Qgcm93ID0gaCgnZGl2JywgeyBjbGFzczogYCR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19zd2F0Y2hlc2AgfSk7XG5cdFx0Y29uc3Qgc2VsZWN0ZWQgPSBzdHlsZS5jb2xvci5zdGFydHNXaXRoKGAke3ByZWZpeH06YCkgPyBzdHlsZS5jb2xvci5zbGljZShwcmVmaXgubGVuZ3RoICsgMSkudG9Mb3dlckNhc2UoKSA6IG51bGw7XG5cdFx0Zm9yIChjb25zdCBzdyBvZiBzd2F0Y2hlcykge1xuXHRcdFx0Y29uc3QgYnRuID0gdGhpcy5fYnVpbGRDb2xsZWN0aW9uQ29sb3JTd2F0Y2goe1xuXHRcdFx0XHRhY3RpdmVXaGVuOiBzZWxlY3RlZCA9PT0gc3cuaGV4LnRvTG93ZXJDYXNlKCksXG5cdFx0XHRcdGFyaWFMYWJlbDogc3cubmFtZSxcblx0XHRcdFx0b25DbGljazogKCkgPT4gb25Db2xvcihgJHtwcmVmaXh9OiR7c3cuaGV4fWApLFxuXHRcdFx0fSk7XG5cdFx0XHRidG4uc3R5bGUuYmFja2dyb3VuZCA9IHN3LmhleDtcblx0XHRcdHJvdy5hcHBlbmRDaGlsZChidG4pO1xuXHRcdH1cblx0XHRyZXR1cm4gaCgnZGl2JywgeyBjbGFzczogYCR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19zd2F0Y2gtd3JhcHBlcmAgfSwgcm93KTtcblx0fVxuXG5cdC8qKiBAcGFyYW0ge3thY3RpdmVXaGVuOiBib29sZWFuLCBhcmlhTGFiZWw6IHN0cmluZywgY2xhc3Nlcz86IHN0cmluZywgb25DbGljazogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkfX0gb3B0cyAqL1xuXHRfYnVpbGRDb2xsZWN0aW9uQ29sb3JTd2F0Y2goeyBhY3RpdmVXaGVuLCBhcmlhTGFiZWwsIGNsYXNzZXMgPSAnJywgb25DbGljayB9KSB7XG5cdFx0Y29uc3QgYnRuID0gaCgnYnV0dG9uJywge1xuXHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRjbGFzczogYCR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19zd2F0Y2ggJHtjbGFzc2VzfSAke2FjdGl2ZVdoZW4gPyAnaXMtYWN0aXZlJyA6ICcnfWAudHJpbSgpLFxuXHRcdFx0J2FyaWEtbGFiZWwnOiBhcmlhTGFiZWwsXG5cdFx0XHR0aXRsZTogYXJpYUxhYmVsLFxuXHRcdFx0b25DbGljazogKC8qKiBAdHlwZSB7TW91c2VFdmVudH0gKi8gZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdG9uQ2xpY2soZXZlbnQpO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRyZXR1cm4gLyoqIEB0eXBlIHtIVE1MQnV0dG9uRWxlbWVudH0gKi8gKGJ0bik7XG5cdH1cblxuXHQvKipcblx0ICogTGl2ZS11cGRhdGluZyBjdXN0b20gaGV4IHBpY2tlci4gU1YvaHVlIGRyYWdzLCBoZXgvcmdiL2hzbCB0eXBpbmcsIGFuZFxuXHQgKiB0aGUgUmFuZG9tIGJ1dHRvbiBhbGwgcHVzaCB0aGUgbmV3IGNvbG9yIG9udG8gdGhlIGFjdGl2ZSBzZXBhcmF0b3Jcblx0ICogaW1tZWRpYXRlbHkgd2l0aG91dCByZS1yZW5kZXJpbmcgdGhlIHBhbmVsICh3aGljaCB3b3VsZCB0ZWFyIHRoZSBwaWNrZXJcblx0ICogb3V0IGZyb20gdW5kZXIgdGhlIHVzZXIncyBwb2ludGVyL2N1cnNvciBtaWQtZHJhZy9taWQtdHlwZSkuIEZvcm1hdFxuXHQgKiBzd2l0Y2hlcyByZS1yZW5kZXIgXHUyMDE0IHRoZSBpbnB1dCByb3cgc3dhcHMgc2hhcGUuIFRoZXJlIGlzIG5vIEFwcGx5L0NhbmNlbFxuXHQgKiBiZWNhdXNlIGV2ZXJ5IGVkaXQgaXMgYWxyZWFkeSBsaXZlOyB1c2VycyBjbG9zZSB2aWEgdGhlIHRvZ2dsZSByb3cuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBndWlkXG5cdCAqIEBwYXJhbSB7KGhleDogc3RyaW5nLCBtb2RlOiAnbGl2ZScgfCAnY29tbWl0JykgPT4gdm9pZH0gb25BcHBseVxuXHQgKi9cblx0X3JlbmRlckNvbGxlY3Rpb25Db2xvckN1c3RvbVBhbmVsKGd1aWQsIG9uQXBwbHkpIHtcblx0XHRjb25zdCBwYW5lbCA9IGgoJ2RpdicsIHsgY2xhc3M6IGAke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fY3VzdG9tLXBhbmVsYCwgZGF0YXNldDogeyBjdXN0b21HdWlkOiBndWlkIH0gfSk7XG5cdFx0Y29uc3QgZHJhZnQgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHRoaXMuX2lzSGV4KHRoaXMuX2RyYWZ0SGV4KSA/IHRoaXMuX2RyYWZ0SGV4IDogJyNmZGE0YWYnKTtcblx0XHRjb25zdCBbaW5pdFIsIGluaXRHLCBpbml0Ql0gPSB0aGlzLl9oZXhUb1JnYihkcmFmdCk7XG5cdFx0Y29uc3QgW2luaXRIdWUsIGluaXRTYXQsIGluaXRWYWxdID0gdGhpcy5fcmdiVG9Ic3YoaW5pdFIsIGluaXRHLCBpbml0Qik7XG5cblx0XHQvLyBQZXJzaXN0ZW50IHBpY2tlciBzdGF0ZSBcdTIwMTQgbmVlZGVkIGJlY2F1c2UgcmUtZGVyaXZpbmcgSFNWIGZyb20gaGV4IGlzXG5cdFx0Ly8gbG9zc3kgKFY9MCBsb3NlcyBodWUsIFM9MCBsb3NlcyBodWUpLiBUcmFja2VkIGFjcm9zcyBldmVudHMgc28gdGhlXG5cdFx0Ly8gaHVlIHNsaWRlciBwb3NpdGlvbiBzdXJ2aXZlcyBTViBkcmFncyB0aHJvdWdoIG5ldXRyYWwgY29sb3JzLlxuXHRcdGxldCBjdXJIdWUgPSBpbml0SHVlO1xuXHRcdGxldCBjdXJTYXQgPSBpbml0U2F0O1xuXHRcdGxldCBjdXJWYWwgPSBpbml0VmFsO1xuXG5cdFx0Y29uc3QgbGVmdCA9IGgoJ2RpdicsIHsgY2xhc3M6IGAke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fY3VzdG9tLWxlZnRgIH0pO1xuXHRcdGNvbnN0IHJpZ2h0ID0gaCgnZGl2JywgeyBjbGFzczogYCR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19jdXN0b20tcmlnaHRgIH0pO1xuXHRcdGNvbnN0IHN2ID0gaCgnZGl2JywgeyBjbGFzczogYCR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19zdmAsIHN0eWxlOiB7ICctLWh1ZSc6IFN0cmluZyhpbml0SHVlKSB9IH0pO1xuXHRcdGNvbnN0IHRodW1iID0gaCgnZGl2JywgeyBjbGFzczogYCR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19zdi10aHVtYmAsIHN0eWxlOiB7IGxlZnQ6IGAke2luaXRTYXQgKiAxMDB9JWAsIHRvcDogYCR7KDEgLSBpbml0VmFsKSAqIDEwMH0lYCB9IH0pO1xuXHRcdHN2LmFwcGVuZENoaWxkKHRodW1iKTtcblxuXHRcdGNvbnN0IGlucHV0cyA9IGgoJ2RpdicsIHsgY2xhc3M6IGAke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9faW5wdXRzYCB9KTtcblxuXHRcdC8vIFN5bmMgdGhlIHBhbmVsIHRvZ2dsZSdzIHN3YXRjaCArIGxhYmVsLCBwbHVzIHRoZSBpbnB1dCByb3cncyB2aXNpYmxlXG5cdFx0Ly8gdmFsdWVzLCBhZnRlciBldmVyeSBsaXZlIGVkaXQuIFNraXAgdGhlIGlucHV0IHRoYXQgdGhlIHVzZXIgaXNcblx0XHQvLyB0eXBpbmcgaW50byBzbyB3ZSBkb24ndCBmaWdodCB0aGVpciBjYXJldC5cblx0XHRjb25zdCBzeW5jRG9tID0gKC8qKiBAdHlwZSB7RWxlbWVudCB8IG51bGx9ICovIHNraXAgPSBudWxsKSA9PiB7XG5cdFx0XHRjb25zdCB3cmFwcGVyRWwgPSBwYW5lbC5jbG9zZXN0KGAuJHtQQU5FTF9DTEFTU31fX2NvbG9yLWhlcm9gKT8ucGFyZW50RWxlbWVudFxuXHRcdFx0XHR8fCBwYW5lbC5jbG9zZXN0KGAuJHtQQU5FTF9DTEFTU31fX2NvbG9yc2ApXG5cdFx0XHRcdHx8IHBhbmVsLnBhcmVudEVsZW1lbnQ7XG5cdFx0XHRpZiAod3JhcHBlckVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdFx0Y29uc3QgcHJlc2V0U3dhdGNoID0gd3JhcHBlckVsLnF1ZXJ5U2VsZWN0b3IoYC4ke1BBTkVMX0NMQVNTfV9fY3VzdG9tLXJvdyAuJHtQQU5FTF9DTEFTU31fX3ByZXNldC1zd2F0Y2hgKTtcblx0XHRcdFx0aWYgKHByZXNldFN3YXRjaCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHRoaXMuX2RyYWZ0SGV4KSBwcmVzZXRTd2F0Y2guc3R5bGUuYmFja2dyb3VuZCA9IHRoaXMuX2RyYWZ0SGV4O1xuXHRcdFx0XHRjb25zdCBwcmVzZXRIaW50ID0gd3JhcHBlckVsLnF1ZXJ5U2VsZWN0b3IoYC4ke1BBTkVMX0NMQVNTfV9fY3VzdG9tLXJvdyAuJHtQQU5FTF9DTEFTU31fX3ByZXNldC1oaW50YCk7XG5cdFx0XHRcdGlmIChwcmVzZXRIaW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdGhpcy5fZHJhZnRIZXgpIHByZXNldEhpbnQudGV4dENvbnRlbnQgPSB0aGlzLl9kcmFmdEhleC50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCF0aGlzLl9kcmFmdEhleCkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgW3IsIGcsIGJdID0gdGhpcy5faGV4VG9SZ2IodGhpcy5fZHJhZnRIZXgpO1xuXHRcdFx0Y29uc3QgW2hsLCBzbCwgbGxdID0gdGhpcy5fcmdiVG9Ic2wociwgZywgYik7XG5cdFx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgaW5wdXRzLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpIHtcblx0XHRcdFx0aWYgKG5vZGUgPT09IHNraXApIGNvbnRpbnVlO1xuXHRcdFx0XHRjb25zdCBpbnB1dCA9IC8qKiBAdHlwZSB7SFRNTElucHV0RWxlbWVudH0gKi8gKG5vZGUpO1xuXHRcdFx0XHRjb25zdCByb2xlID0gaW5wdXQuZGF0YXNldC5yb2xlO1xuXHRcdFx0XHRpZiAocm9sZSA9PT0gJ2hleCcpIGlucHV0LnZhbHVlID0gdGhpcy5fZHJhZnRIZXgudG9VcHBlckNhc2UoKTtcblx0XHRcdFx0ZWxzZSBpZiAocm9sZSA9PT0gJ3InKSBpbnB1dC52YWx1ZSA9IFN0cmluZyhyKTtcblx0XHRcdFx0ZWxzZSBpZiAocm9sZSA9PT0gJ2cnKSBpbnB1dC52YWx1ZSA9IFN0cmluZyhnKTtcblx0XHRcdFx0ZWxzZSBpZiAocm9sZSA9PT0gJ2InKSBpbnB1dC52YWx1ZSA9IFN0cmluZyhiKTtcblx0XHRcdFx0ZWxzZSBpZiAocm9sZSA9PT0gJ2gnKSBpbnB1dC52YWx1ZSA9IFN0cmluZyhNYXRoLnJvdW5kKGhsKSk7XG5cdFx0XHRcdGVsc2UgaWYgKHJvbGUgPT09ICdzJykgaW5wdXQudmFsdWUgPSBTdHJpbmcoTWF0aC5yb3VuZChzbCkpO1xuXHRcdFx0XHRlbHNlIGlmIChyb2xlID09PSAnbCcpIGlucHV0LnZhbHVlID0gU3RyaW5nKE1hdGgucm91bmQobGwpKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3QgcHVzaExpdmUgPSAoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5fZHJhZnRIZXgpIG9uQXBwbHkodGhpcy5fZHJhZnRIZXgsICdsaXZlJyk7XG5cdFx0fTtcblx0XHRjb25zdCBwdXNoQ29tbWl0ID0gKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMuX2RyYWZ0SGV4KSBvbkFwcGx5KHRoaXMuX2RyYWZ0SGV4LCAnY29tbWl0Jyk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IHNldEZyb21Ic3YgPSAoLyoqIEB0eXBlIHtudW1iZXJ9ICovIGh1ZUFyZywgLyoqIEB0eXBlIHtudW1iZXJ9ICovIHN4LCAvKiogQHR5cGUge251bWJlcn0gKi8gdnksIC8qKiBAdHlwZSB7RWxlbWVudCB8IG51bGx9ICovIHNraXAgPSBudWxsKSA9PiB7XG5cdFx0XHRjdXJIdWUgPSBodWVBcmc7XG5cdFx0XHRjdXJTYXQgPSBzeDtcblx0XHRcdGN1clZhbCA9IHZ5O1xuXHRcdFx0Y29uc3QgW25yLCBuZywgbmJdID0gdGhpcy5faHN2VG9SZ2IoaHVlQXJnLCBzeCwgdnkpO1xuXHRcdFx0dGhpcy5fZHJhZnRIZXggPSB0aGlzLl9yZ2JUb0hleChuciwgbmcsIG5iKTtcblx0XHRcdHRodW1iLnN0eWxlLmxlZnQgPSBgJHtzeCAqIDEwMH0lYDtcblx0XHRcdHRodW1iLnN0eWxlLnRvcCA9IGAkeygxIC0gdnkpICogMTAwfSVgO1xuXHRcdFx0c3Yuc3R5bGUuc2V0UHJvcGVydHkoJy0taHVlJywgU3RyaW5nKGh1ZUFyZykpO1xuXHRcdFx0c3luY0RvbShza2lwKTtcblx0XHRcdHB1c2hMaXZlKCk7XG5cdFx0fTtcblxuXHRcdHN2LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKC8qKiBAdHlwZSB7UG9pbnRlckV2ZW50fSAqLyBldmVudCkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHN2LnNldFBvaW50ZXJDYXB0dXJlKGV2ZW50LnBvaW50ZXJJZCk7XG5cdFx0XHRjb25zdCBvbkRyYWcgPSAoLyoqIEB0eXBlIHtQb2ludGVyRXZlbnR9ICovIGV2KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHJlY3QgPSBzdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0Y29uc3Qgc3ggPSB0aGlzLl9jbGFtcDAxKChldi5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIHJlY3Qud2lkdGgpO1xuXHRcdFx0XHRjb25zdCB2eSA9IDEgLSB0aGlzLl9jbGFtcDAxKChldi5jbGllbnRZIC0gcmVjdC50b3ApIC8gcmVjdC5oZWlnaHQpO1xuXHRcdFx0XHRzZXRGcm9tSHN2KGN1ckh1ZSwgc3gsIHZ5KTtcblx0XHRcdH07XG5cdFx0XHRvbkRyYWcoZXZlbnQpO1xuXHRcdFx0Y29uc3QgbW92ZSA9ICgvKiogQHR5cGUge1BvaW50ZXJFdmVudH0gKi8gZXYpID0+IG9uRHJhZyhldik7XG5cdFx0XHRjb25zdCB1cCA9ICgpID0+IHtcblx0XHRcdFx0c3YucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBtb3ZlKTtcblx0XHRcdFx0c3YucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdXApO1xuXHRcdFx0XHR0cnkgeyBzdi5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZXZlbnQucG9pbnRlcklkKTsgfSBjYXRjaCB7fVxuXHRcdFx0XHRwdXNoQ29tbWl0KCk7XG5cdFx0XHR9O1xuXHRcdFx0c3YuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBtb3ZlKTtcblx0XHRcdHN2LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHVwKTtcblx0XHRcdHN2LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJjYW5jZWwnLCB1cCwgeyBvbmNlOiB0cnVlIH0pO1xuXHRcdH0pO1xuXG5cdFx0Y29uc3QgaHVlID0gaCgnaW5wdXQnLCB7IGNsYXNzOiBgJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX2h1ZWAsIHR5cGU6ICdyYW5nZScsIG1pbjogJzAnLCBtYXg6ICczNjAnLCBzdGVwOiAnMScsIHZhbHVlOiBTdHJpbmcoaW5pdEh1ZSkgfSk7XG5cdFx0aHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuXHRcdFx0c2V0RnJvbUhzdihOdW1iZXIoaHVlLnZhbHVlKSwgY3VyU2F0LCBjdXJWYWwpO1xuXHRcdH0pO1xuXHRcdGh1ZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRwdXNoQ29tbWl0KCk7XG5cdFx0fSk7XG5cblx0XHRjb25zdCBmb3JtYXRzID0gaCgnZGl2JywgeyBjbGFzczogYCR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19mb3JtYXRzYCB9LFxuXHRcdFx0Li4uLyoqIEB0eXBlIHtjb25zdH0gKi8gKFsnSEVYJywgJ1JHQicsICdIU0wnXSkubWFwKChmb3JtYXQpID0+IGgoJ2J1dHRvbicsIHtcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdGNsYXNzOiBgJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX2Zvcm1hdC1idG4gJHt0aGlzLl9kcmFmdEZvcm1hdCA9PT0gZm9ybWF0ID8gJ2lzLWFjdGl2ZScgOiAnJ31gLFxuXHRcdFx0XHRvbkNsaWNrOiAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX2RyYWZ0Rm9ybWF0ID09PSBmb3JtYXQpIHJldHVybjtcblx0XHRcdFx0XHR0aGlzLl9kcmFmdEZvcm1hdCA9IGZvcm1hdDtcblx0XHRcdFx0XHR0aGlzLl9yZW5kZXJQYW5lbCgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSwgZm9ybWF0KSksXG5cdFx0KTtcblxuXHRcdGNvbnN0IHRyeUxpdmVIZXggPSAoLyoqIEB0eXBlIHtzdHJpbmd9ICovIHJhdywgLyoqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50fSAqLyBza2lwSW5wdXQpID0+IHtcblx0XHRcdGNvbnN0IG5vcm0gPSB0aGlzLl9ub3JtYWxpemVIZXgocmF3KTtcblx0XHRcdGlmICghbm9ybSkgcmV0dXJuO1xuXHRcdFx0dGhpcy5fZHJhZnRIZXggPSBub3JtO1xuXHRcdFx0Y29uc3QgW3IsIGcsIGJdID0gdGhpcy5faGV4VG9SZ2Iobm9ybSk7XG5cdFx0XHRjb25zdCBbaHVlQXJnLCBzYXQsIHZhbF0gPSB0aGlzLl9yZ2JUb0hzdihyLCBnLCBiKTtcblx0XHRcdC8vIFByZXNlcnZlIGN1ckh1ZS9jdXJTYXQvY3VyVmFsIHdoZW4gdGhlIGNoYW5uZWwgdGhleSBlbmNvZGUgaXNcblx0XHRcdC8vIHVuZGVmaW5lZCBpbiB0aGUgbmV3IGhleCAoc2F0dXJhdGlvbiAwIFx1MjE5MiBodWUgdW5kZWZpbmVkLCB2YWx1ZSAwXG5cdFx0XHQvLyBcdTIxOTIgYm90aCBodWUgKyBzYXQgdW5kZWZpbmVkKS5cblx0XHRcdGlmIChzYXQgPiAwLjAwMDEpIGN1ckh1ZSA9IGh1ZUFyZztcblx0XHRcdGlmICh2YWwgPiAwLjAwMDEpIGN1clNhdCA9IHNhdDtcblx0XHRcdGN1clZhbCA9IHZhbDtcblx0XHRcdHRodW1iLnN0eWxlLmxlZnQgPSBgJHtjdXJTYXQgKiAxMDB9JWA7XG5cdFx0XHR0aHVtYi5zdHlsZS50b3AgPSBgJHsoMSAtIGN1clZhbCkgKiAxMDB9JWA7XG5cdFx0XHRzdi5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1odWUnLCBTdHJpbmcoY3VySHVlKSk7XG5cdFx0XHRodWUudmFsdWUgPSBTdHJpbmcoTWF0aC5yb3VuZChjdXJIdWUpKTtcblx0XHRcdHN5bmNEb20oc2tpcElucHV0KTtcblx0XHRcdHB1c2hMaXZlKCk7XG5cdFx0fTtcblxuXHRcdGlmICh0aGlzLl9kcmFmdEZvcm1hdCA9PT0gJ0hFWCcpIHtcblx0XHRcdGNvbnN0IGlucHV0ID0gaCgnaW5wdXQnLCB7IGNsYXNzOiBgJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX2hleC1pbnB1dGAsIHR5cGU6ICd0ZXh0JywgdmFsdWU6IGRyYWZ0LnRvVXBwZXJDYXNlKCksIG1heExlbmd0aDogNyB9KTtcblx0XHRcdGlucHV0LmRhdGFzZXQucm9sZSA9ICdoZXgnO1xuXHRcdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLl9ub3JtYWxpemVIZXgoaW5wdXQudmFsdWUpKSB0cnlMaXZlSGV4KGlucHV0LnZhbHVlLCAvKiogQHR5cGUge0hUTUxJbnB1dEVsZW1lbnR9ICovIChpbnB1dCkpO1xuXHRcdFx0fSk7XG5cdFx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG5vcm0gPSB0aGlzLl9ub3JtYWxpemVIZXgoaW5wdXQudmFsdWUpO1xuXHRcdFx0XHRpZiAobm9ybSkge1xuXHRcdFx0XHRcdHRyeUxpdmVIZXgobm9ybSwgLyoqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50fSAqLyAoaW5wdXQpKTtcblx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9IG5vcm0udG9VcHBlckNhc2UoKTtcblx0XHRcdFx0XHRwdXNoQ29tbWl0KCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aW5wdXQudmFsdWUgPSAodGhpcy5fZHJhZnRIZXggfHwgZHJhZnQpLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0aW5wdXRzLmFwcGVuZChpbnB1dCwgaCgnZGl2JywgeyBjbGFzczogYCR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19pbnB1dC1sYWJlbGAgfSwgJ0hFWCcpKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuX2RyYWZ0Rm9ybWF0ID09PSAnUkdCJykge1xuXHRcdFx0Y29uc3QgW3IsIGcsIGJdID0gdGhpcy5faGV4VG9SZ2IoZHJhZnQpO1xuXHRcdFx0aW5wdXRzLmFwcGVuZChcblx0XHRcdFx0dGhpcy5fY3VzdG9tTnVtRmllbGQoJ3InLCAnUicsIHIsIDAsIDI1NSwgKHZhbCwgbW9kZSwgc2tpcElucHV0KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgWywgLCBiYl0gPSB0aGlzLl9oZXhUb1JnYigvKiogQHR5cGUge3N0cmluZ30gKi8gKHRoaXMuX2RyYWZ0SGV4IHx8IGRyYWZ0KSk7XG5cdFx0XHRcdFx0Y29uc3QgWywgZ2ddID0gdGhpcy5faGV4VG9SZ2IoLyoqIEB0eXBlIHtzdHJpbmd9ICovICh0aGlzLl9kcmFmdEhleCB8fCBkcmFmdCkpO1xuXHRcdFx0XHRcdHRyeUxpdmVIZXgodGhpcy5fcmdiVG9IZXgodmFsLCBnZywgYmIpLCBza2lwSW5wdXQpO1xuXHRcdFx0XHRcdGlmIChtb2RlID09PSAnY29tbWl0JykgcHVzaENvbW1pdCgpO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0dGhpcy5fY3VzdG9tTnVtRmllbGQoJ2cnLCAnRycsIGcsIDAsIDI1NSwgKHZhbCwgbW9kZSwgc2tpcElucHV0KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgW3JyLCAsIGJiXSA9IHRoaXMuX2hleFRvUmdiKC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAodGhpcy5fZHJhZnRIZXggfHwgZHJhZnQpKTtcblx0XHRcdFx0XHR0cnlMaXZlSGV4KHRoaXMuX3JnYlRvSGV4KHJyLCB2YWwsIGJiKSwgc2tpcElucHV0KTtcblx0XHRcdFx0XHRpZiAobW9kZSA9PT0gJ2NvbW1pdCcpIHB1c2hDb21taXQoKTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdHRoaXMuX2N1c3RvbU51bUZpZWxkKCdiJywgJ0InLCBiLCAwLCAyNTUsICh2YWwsIG1vZGUsIHNraXBJbnB1dCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IFtyciwgZ2ddID0gdGhpcy5faGV4VG9SZ2IoLyoqIEB0eXBlIHtzdHJpbmd9ICovICh0aGlzLl9kcmFmdEhleCB8fCBkcmFmdCkpO1xuXHRcdFx0XHRcdHRyeUxpdmVIZXgodGhpcy5fcmdiVG9IZXgocnIsIGdnLCB2YWwpLCBza2lwSW5wdXQpO1xuXHRcdFx0XHRcdGlmIChtb2RlID09PSAnY29tbWl0JykgcHVzaENvbW1pdCgpO1xuXHRcdFx0XHR9KSxcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IFtyMCwgZzAsIGIwXSA9IHRoaXMuX2hleFRvUmdiKGRyYWZ0KTtcblx0XHRcdGNvbnN0IFtoc2xIdWUwLCBoc2xTYXQwLCBoc2xMaWdodDBdID0gdGhpcy5fcmdiVG9Ic2wocjAsIGcwLCBiMCk7XG5cdFx0XHRsZXQgY3VySHNsID0geyBoOiBoc2xIdWUwLCBzOiBoc2xTYXQwLCBsOiBoc2xMaWdodDAgfTtcblx0XHRcdGNvbnN0IGFwcGx5ID0gKC8qKiBAdHlwZSB7J2xpdmUnIHwgJ2NvbW1pdCd9ICovIG1vZGUsIC8qKiBAdHlwZSB7SFRNTElucHV0RWxlbWVudH0gKi8gc2tpcElucHV0KSA9PiB7XG5cdFx0XHRcdGNvbnN0IFtuciwgbmcsIG5iXSA9IHRoaXMuX2hzbFRvUmdiKGN1ckhzbC5oLCBjdXJIc2wucywgY3VySHNsLmwpO1xuXHRcdFx0XHR0cnlMaXZlSGV4KHRoaXMuX3JnYlRvSGV4KG5yLCBuZywgbmIpLCBza2lwSW5wdXQpO1xuXHRcdFx0XHRpZiAobW9kZSA9PT0gJ2NvbW1pdCcpIHB1c2hDb21taXQoKTtcblx0XHRcdH07XG5cdFx0XHRpbnB1dHMuYXBwZW5kKFxuXHRcdFx0XHR0aGlzLl9jdXN0b21OdW1GaWVsZCgnaCcsICdIJywgTWF0aC5yb3VuZChoc2xIdWUwKSwgMCwgMzYwLCAodiwgbW9kZSwgc2tpcElucHV0KSA9PiB7IGN1ckhzbC5oID0gdjsgYXBwbHkobW9kZSwgc2tpcElucHV0KTsgfSksXG5cdFx0XHRcdHRoaXMuX2N1c3RvbU51bUZpZWxkKCdzJywgJ1MnLCBNYXRoLnJvdW5kKGhzbFNhdDApLCAwLCAxMDAsICh2LCBtb2RlLCBza2lwSW5wdXQpID0+IHsgY3VySHNsLnMgPSB2OyBhcHBseShtb2RlLCBza2lwSW5wdXQpOyB9KSxcblx0XHRcdFx0dGhpcy5fY3VzdG9tTnVtRmllbGQoJ2wnLCAnTCcsIE1hdGgucm91bmQoaHNsTGlnaHQwKSwgMCwgMTAwLCAodiwgbW9kZSwgc2tpcElucHV0KSA9PiB7IGN1ckhzbC5sID0gdjsgYXBwbHkobW9kZSwgc2tpcElucHV0KTsgfSksXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJhbmRvbSA9IGgoJ2J1dHRvbicsIHtcblx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0Y2xhc3M6IGAke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fcmFuZG9tYCxcblx0XHRcdG9uQ2xpY2s6ICgpID0+IHtcblx0XHRcdFx0Y29uc3QgbmV4dCA9IHRoaXMuX3JhbmRvbUhleCgpO1xuXHRcdFx0XHR0cnlMaXZlSGV4KG5leHQsIC8qKiBAdHlwZSB7SFRNTElucHV0RWxlbWVudH0gKi8gKHt9KSk7XG5cdFx0XHRcdHB1c2hDb21taXQoKTtcblx0XHRcdH0sXG5cdFx0fSwgJ1JhbmRvbSBjb2xvcicpO1xuXG5cdFx0Y29uc3QgYWN0aW9ucyA9IGgoJ2RpdicsIHsgY2xhc3M6IGAke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fYWN0aW9uc2AgfSxcblx0XHRcdGgoJ2J1dHRvbicsIHtcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdGNsYXNzOiBgJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX2J0biAke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fYnRuLS1naG9zdGAsXG5cdFx0XHRcdG9uQ2xpY2s6ICgpID0+IHtcblx0XHRcdFx0XHR0aGlzLl9jdXN0b21PcGVuID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy5fY3VzdG9tR3VpZCA9IG51bGw7XG5cdFx0XHRcdFx0dGhpcy5fZHJhZnRIZXggPSBudWxsO1xuXHRcdFx0XHRcdHRoaXMuX3JlbmRlclBhbmVsKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LCAnQ2xvc2UnKSxcblx0XHQpO1xuXHRcdGxlZnQuYXBwZW5kKHN2LCBodWUpO1xuXHRcdHJpZ2h0LmFwcGVuZChmb3JtYXRzLCBpbnB1dHMsIHJhbmRvbSwgYWN0aW9ucyk7XG5cdFx0cGFuZWwuYXBwZW5kKGxlZnQsIHJpZ2h0KTtcblx0XHRyZXR1cm4gcGFuZWw7XG5cdH1cblxuXHQvKipcblx0ICogTnVtYmVyIGZpZWxkIGZvciB0aGUgbGl2ZSBjdXN0b20tY29sb3IgcGlja2VyLiBGaXJlcyBgbGl2ZWAgcGVyXG5cdCAqIGtleXN0cm9rZSAod2hlbiB2YWx1ZSBpcyBpbiByYW5nZSkgYW5kIGBjb21taXRgIG9uIGJsdXIsIEVudGVyLCBvclxuXHQgKiBhcnJvdy1rZXkgc3RlcC4gVGhlIGhhbmRsZXIgcmVjZWl2ZXMgdGhlIGlucHV0IGVsZW1lbnQgc28gbGl2ZSBzeW5jc1xuXHQgKiBjYW4gYXZvaWQgY2xvYmJlcmluZyB0aGUgdXNlcidzIGNhcmV0LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcm9sZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxcblx0ICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cblx0ICogQHBhcmFtIHtudW1iZXJ9IG1heFxuXHQgKiBAcGFyYW0geyh2YWx1ZTogbnVtYmVyLCBtb2RlOiAnbGl2ZScgfCAnY29tbWl0Jywgc2tpcDogSFRNTElucHV0RWxlbWVudCkgPT4gdm9pZH0gb25DaGFuZ2Vcblx0ICovXG5cdF9jdXN0b21OdW1GaWVsZChyb2xlLCBsYWJlbCwgdmFsdWUsIG1pbiwgbWF4LCBvbkNoYW5nZSkge1xuXHRcdGNvbnN0IGlucHV0ID0gaCgnaW5wdXQnLCB7IHR5cGU6ICdudW1iZXInLCBtaW46IFN0cmluZyhtaW4pLCBtYXg6IFN0cmluZyhtYXgpLCBzdGVwOiAnMScsIHZhbHVlOiBTdHJpbmcodmFsdWUpIH0pO1xuXHRcdGlucHV0LmRhdGFzZXQucm9sZSA9IHJvbGU7XG5cdFx0Y29uc3QgaW5FbCA9IC8qKiBAdHlwZSB7SFRNTElucHV0RWxlbWVudH0gKi8gKGlucHV0KTtcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcblx0XHRcdGNvbnN0IG4gPSBOdW1iZXIoaW5FbC52YWx1ZSk7XG5cdFx0XHRpZiAoIU51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuO1xuXHRcdFx0aWYgKG4gPCBtaW4gfHwgbiA+IG1heCkgcmV0dXJuO1xuXHRcdFx0b25DaGFuZ2UobiwgJ2xpdmUnLCBpbkVsKTtcblx0XHR9KTtcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBuID0gdGhpcy5fY2xhbXBJbnQoTnVtYmVyKGluRWwudmFsdWUpLCBtaW4sIG1heCwgdmFsdWUpO1xuXHRcdFx0aW5FbC52YWx1ZSA9IFN0cmluZyhuKTtcblx0XHRcdG9uQ2hhbmdlKG4sICdjb21taXQnLCBpbkVsKTtcblx0XHR9KTtcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKC8qKiBAdHlwZSB7S2V5Ym9hcmRFdmVudH0gKi8gZXZlbnQpID0+IHtcblx0XHRcdGlmIChldmVudC5rZXkgIT09ICdBcnJvd1VwJyAmJiBldmVudC5rZXkgIT09ICdBcnJvd0Rvd24nKSByZXR1cm47XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y29uc3QgYmFzZSA9IE51bWJlci5pc0Zpbml0ZShOdW1iZXIoaW5FbC52YWx1ZSkpID8gTnVtYmVyKGluRWwudmFsdWUpIDogdmFsdWU7XG5cdFx0XHRjb25zdCBuZXh0ID0gdGhpcy5fY2xhbXBJbnQoYmFzZSArIChldmVudC5rZXkgPT09ICdBcnJvd1VwJyA/IDEgOiAtMSkgKiAoZXZlbnQuc2hpZnRLZXkgPyAxMCA6IDEpLCBtaW4sIG1heCwgdmFsdWUpO1xuXHRcdFx0aW5FbC52YWx1ZSA9IFN0cmluZyhuZXh0KTtcblx0XHRcdG9uQ2hhbmdlKG5leHQsICdjb21taXQnLCBpbkVsKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gaCgnZGl2JywgeyBjbGFzczogYCR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19udW1gIH0sXG5cdFx0XHRpbnB1dCxcblx0XHRcdGgoJ2RpdicsIHsgY2xhc3M6IGAke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fbnVtLWxhYmVsYCB9LCBsYWJlbCksXG5cdFx0KTtcblx0fVxuXG5cdC8qKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgQHBhcmFtIHtudW1iZXJ9IHZhbHVlIEBwYXJhbSB7bnVtYmVyfSBtaW4gQHBhcmFtIHtudW1iZXJ9IG1heCBAcGFyYW0geyh2OiBudW1iZXIpID0+IHZvaWR9IG9uQ29tbWl0ICovXG5cdF9jb2xsZWN0aW9uQ29sb3JOdW1GaWVsZChsYWJlbCwgdmFsdWUsIG1pbiwgbWF4LCBvbkNvbW1pdCkge1xuXHRcdGNvbnN0IGlucHV0ID0gaCgnaW5wdXQnLCB7IHR5cGU6ICdudW1iZXInLCBtaW46IFN0cmluZyhtaW4pLCBtYXg6IFN0cmluZyhtYXgpLCBzdGVwOiAnMScsIHZhbHVlOiBTdHJpbmcodmFsdWUpIH0pO1xuXHRcdGNvbnN0IGNvbW1pdCA9ICgvKiogQHR5cGUge251bWJlcn0gKi8gdikgPT4ge1xuXHRcdFx0Y29uc3QgbmV4dCA9IHRoaXMuX2NsYW1wSW50KHYsIG1pbiwgbWF4LCB2YWx1ZSk7XG5cdFx0XHRpbnB1dC52YWx1ZSA9IFN0cmluZyhuZXh0KTtcblx0XHRcdG9uQ29tbWl0KG5leHQpO1xuXHRcdFx0dGhpcy5fcmVuZGVyUGFuZWwoKTtcblx0XHR9O1xuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblx0XHRcdGNvbW1pdChOdW1iZXIoaW5wdXQudmFsdWUpKTtcblx0XHR9KTtcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKC8qKiBAdHlwZSB7S2V5Ym9hcmRFdmVudH0gKi8gZXZlbnQpID0+IHtcblx0XHRcdGlmIChldmVudC5rZXkgIT09ICdBcnJvd1VwJyAmJiBldmVudC5rZXkgIT09ICdBcnJvd0Rvd24nKSByZXR1cm47XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y29uc3QgYmFzZSA9IE51bWJlci5pc0Zpbml0ZShOdW1iZXIoaW5wdXQudmFsdWUpKSA/IE51bWJlcihpbnB1dC52YWx1ZSkgOiB2YWx1ZTtcblx0XHRcdGNvbW1pdChiYXNlICsgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnID8gMSA6IC0xKSAqIChldmVudC5zaGlmdEtleSA/IDEwIDogMSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiBgJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX251bWAgfSxcblx0XHRcdGlucHV0LFxuXHRcdFx0aCgnZGl2JywgeyBjbGFzczogYCR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19udW0tbGFiZWxgIH0sIGxhYmVsKSxcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7U2VwYXJhdG9yU3R5bGV9IG5leHRcblx0ICogQHBhcmFtIHtib29sZWFuPX0gcmVuZGVyXG5cdCAqL1xuXHRfc2V0QWN0aXZlU3R5bGUobmV4dCwgcmVuZGVyID0gZmFsc2UpIHtcblx0XHRjb25zdCBzZWxlY3RlZCA9IHRoaXMuX2FjdGl2ZU92ZXJyaWRlR3VpZCA/IHRoaXMuX3NlcGFyYXRvcnMuZ2V0KHRoaXMuX2FjdGl2ZU92ZXJyaWRlR3VpZCkgfHwgbnVsbCA6IG51bGw7XG5cdFx0aWYgKHNlbGVjdGVkKSB7XG5cdFx0XHR2b2lkIHRoaXMuX3NldFNlcGFyYXRvclN0eWxlKHNlbGVjdGVkLmd1aWQsIG5leHQsIHJlbmRlcik7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7U2VwYXJhdG9yU3R5bGV9IG5leHRcblx0ICogQHBhcmFtIHtib29sZWFuPX0gcmVuZGVyXG5cdCAqL1xuXHRfc2V0QWN0aXZlQ29sbGFwc2VkU3R5bGUobmV4dCwgcmVuZGVyID0gZmFsc2UpIHtcblx0XHRjb25zdCBzZWxlY3RlZCA9IHRoaXMuX2FjdGl2ZU92ZXJyaWRlR3VpZCA/IHRoaXMuX3NlcGFyYXRvcnMuZ2V0KHRoaXMuX2FjdGl2ZU92ZXJyaWRlR3VpZCkgfHwgbnVsbCA6IG51bGw7XG5cdFx0aWYgKHNlbGVjdGVkKSB7XG5cdFx0XHR2b2lkIHRoaXMuX3NldFNlcGFyYXRvckNvbGxhcHNlZFN0eWxlKHNlbGVjdGVkLmd1aWQsIG5leHQsIHJlbmRlcik7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFNoYXJlZCBjb2xvciBjaGFuZ2VzIGFwcGx5IHRvIGJvdGggZXhwYW5kZWQgYW5kIGNvbGxhcHNlZCBzdGF0ZXMuXG5cdCAqIEBwYXJhbSB7U2VwYXJhdG9yU3R5bGV9IG5leHRcblx0ICogQHBhcmFtIHtib29sZWFuPX0gcmVuZGVyXG5cdCAqL1xuXHRfc2V0QWN0aXZlQ29sb3JTdHlsZShuZXh0LCByZW5kZXIgPSBmYWxzZSkge1xuXHRcdGNvbnN0IHNlbGVjdGVkID0gdGhpcy5fYWN0aXZlT3ZlcnJpZGVHdWlkID8gdGhpcy5fc2VwYXJhdG9ycy5nZXQodGhpcy5fYWN0aXZlT3ZlcnJpZGVHdWlkKSB8fCBudWxsIDogbnVsbDtcblx0XHRpZiAoIXNlbGVjdGVkKSByZXR1cm47XG5cdFx0Y29uc3QgY29sb3JQYXRjaCA9IHsgY29sb3I6IG5leHQuY29sb3IsIGN1c3RvbUNvbG9yOiBuZXh0LmN1c3RvbUNvbG9yIH07XG5cdFx0Y29uc3QgZXhwYW5kZWQgPSB0aGlzLl9ub3JtYWxpemVTdHlsZSh7IC4uLihzZWxlY3RlZC5zdHlsZSB8fCB0aGlzLl9kZWZhdWx0U3R5bGUpLCAuLi5jb2xvclBhdGNoIH0pO1xuXHRcdGNvbnN0IGNvbGxhcHNlZEJhc2UgPSBzZWxlY3RlZC5jb2xsYXBzZWRTdHlsZSB8fCBzZWxlY3RlZC5zdHlsZSB8fCB0aGlzLl9kZWZhdWx0U3R5bGU7XG5cdFx0Y29uc3QgY29sbGFwc2VkID0gdGhpcy5fbm9ybWFsaXplU3R5bGUoeyAuLi5jb2xsYXBzZWRCYXNlLCAuLi5jb2xvclBhdGNoIH0pO1xuXHRcdHNlbGVjdGVkLnN0eWxlID0gZXhwYW5kZWQ7XG5cdFx0c2VsZWN0ZWQuY29sbGFwc2VkU3R5bGUgPSBjb2xsYXBzZWQ7XG5cdFx0dGhpcy5fc2VwYXJhdG9ycy5zZXQoc2VsZWN0ZWQuZ3VpZCwgc2VsZWN0ZWQpO1xuXHRcdHRoaXMuX3BlbmRpbmdTZXBhcmF0b3JTdHlsZXMuc2V0KHNlbGVjdGVkLmd1aWQsIGV4cGFuZGVkKTtcblx0XHR0aGlzLl9wZW5kaW5nQ29sbGFwc2VkU2VwYXJhdG9yU3R5bGVzLnNldChzZWxlY3RlZC5ndWlkLCBjb2xsYXBzZWQpO1xuXHRcdHRoaXMuX3dyaXRlUnVudGltZVN0eWxlKCk7XG5cdFx0dGhpcy5fbWFya1NpZGViYXJSb3dzKCk7XG5cdFx0dGhpcy5fdXBkYXRlUGFuZWxQcmV2aWV3KGV4cGFuZGVkKTtcblx0XHRpZiAocmVuZGVyKSB0aGlzLl9yZW5kZXJQYW5lbCgpO1xuXHRcdHRoaXMuX3NjaGVkdWxlU2VwYXJhdG9yU2F2ZShzZWxlY3RlZC5ndWlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge1NlcGFyYXRvclN0eWxlfSBmYWxsYmFja1xuXHQgKi9cblx0X2FjdGl2ZVN0eWxlRm9yRWRpdChmYWxsYmFjaykge1xuXHRcdGNvbnN0IHNlbGVjdGVkID0gdGhpcy5fYWN0aXZlT3ZlcnJpZGVHdWlkID8gdGhpcy5fc2VwYXJhdG9ycy5nZXQodGhpcy5fYWN0aXZlT3ZlcnJpZGVHdWlkKSB8fCBudWxsIDogbnVsbDtcblx0XHRyZXR1cm4gc2VsZWN0ZWQgJiYgc2VsZWN0ZWQuc3R5bGUgPyBzZWxlY3RlZC5zdHlsZSA6IGZhbGxiYWNrO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7U2VwYXJhdG9yU3R5bGV9IGZhbGxiYWNrXG5cdCAqL1xuXHRfYWN0aXZlQ29sbGFwc2VkU3R5bGVGb3JFZGl0KGZhbGxiYWNrKSB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWQgPSB0aGlzLl9hY3RpdmVPdmVycmlkZUd1aWQgPyB0aGlzLl9zZXBhcmF0b3JzLmdldCh0aGlzLl9hY3RpdmVPdmVycmlkZUd1aWQpIHx8IG51bGwgOiBudWxsO1xuXHRcdHJldHVybiBzZWxlY3RlZCAmJiBzZWxlY3RlZC5jb2xsYXBzZWRTdHlsZSA/IHNlbGVjdGVkLmNvbGxhcHNlZFN0eWxlIDogZmFsbGJhY2s7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuXHQgKiBAcGFyYW0ge1NlcGFyYXRvclN0eWxlfSBzdHlsZVxuXHQgKi9cblx0X2xpbmVFbGVtZW50KGNsYXNzTmFtZSwgc3R5bGUpIHtcblx0XHRjb25zdCBsaW5lID0gaCgnc3BhbicsIHtcblx0XHRcdGNsYXNzOiBjbGFzc05hbWUsXG5cdFx0XHQnZGF0YS1wbGctc2lkZWJhci1zZXBlcmF0b3JzLXN0eWxlJzogc3R5bGUuYm9yZGVyU3R5bGUsXG5cdFx0XHQnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG5cdFx0fSk7XG5cdFx0dGhpcy5fYXBwbHlTdHlsZVZhcnMobGluZSwgc3R5bGUpO1xuXHRcdHJldHVybiBsaW5lO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBndWlkXG5cdCAqIEBwYXJhbSB7UGFydGlhbDxTZXBhcmF0b3JTdHlsZT4gfCBudWxsfSBzdHlsZVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW49fSByZW5kZXJcblx0ICovXG5cdGFzeW5jIF9zZXRTZXBhcmF0b3JTdHlsZShndWlkLCBzdHlsZSwgcmVuZGVyID0gZmFsc2UpIHtcblx0XHRjb25zdCBlbnRyeSA9IHRoaXMuX3NlcGFyYXRvcnMuZ2V0KGd1aWQpO1xuXHRcdGlmICghZW50cnkpIHJldHVybjtcblx0XHRjb25zdCBub3JtYWxpemVkID0gc3R5bGUgPyB0aGlzLl9ub3JtYWxpemVTdHlsZShzdHlsZSkgOiBudWxsO1xuXHRcdGVudHJ5LnN0eWxlID0gbm9ybWFsaXplZDtcblx0XHR0aGlzLl9zZXBhcmF0b3JzLnNldChndWlkLCBlbnRyeSk7XG5cdFx0dGhpcy5fcGVuZGluZ1NlcGFyYXRvclN0eWxlcy5zZXQoZ3VpZCwgbm9ybWFsaXplZCk7XG5cdFx0dGhpcy5fd3JpdGVSdW50aW1lU3R5bGUoKTtcblx0XHR0aGlzLl9tYXJrU2lkZWJhclJvd3MoKTtcblx0XHRpZiAobm9ybWFsaXplZCkgdGhpcy5fdXBkYXRlUGFuZWxQcmV2aWV3KG5vcm1hbGl6ZWQpO1xuXHRcdGlmIChyZW5kZXIpIHRoaXMuX3JlbmRlclBhbmVsKCk7XG5cdFx0dGhpcy5fc2NoZWR1bGVTZXBhcmF0b3JTYXZlKGd1aWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBndWlkXG5cdCAqIEBwYXJhbSB7UGFydGlhbDxTZXBhcmF0b3JTdHlsZT4gfCBudWxsfSBzdHlsZVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW49fSByZW5kZXJcblx0ICovXG5cdGFzeW5jIF9zZXRTZXBhcmF0b3JDb2xsYXBzZWRTdHlsZShndWlkLCBzdHlsZSwgcmVuZGVyID0gZmFsc2UpIHtcblx0XHRjb25zdCBlbnRyeSA9IHRoaXMuX3NlcGFyYXRvcnMuZ2V0KGd1aWQpO1xuXHRcdGlmICghZW50cnkpIHJldHVybjtcblx0XHRjb25zdCBub3JtYWxpemVkID0gc3R5bGUgPyB0aGlzLl9ub3JtYWxpemVTdHlsZShzdHlsZSkgOiBudWxsO1xuXHRcdGVudHJ5LmNvbGxhcHNlZFN0eWxlID0gbm9ybWFsaXplZDtcblx0XHR0aGlzLl9zZXBhcmF0b3JzLnNldChndWlkLCBlbnRyeSk7XG5cdFx0dGhpcy5fcGVuZGluZ0NvbGxhcHNlZFNlcGFyYXRvclN0eWxlcy5zZXQoZ3VpZCwgbm9ybWFsaXplZCk7XG5cdFx0dGhpcy5fd3JpdGVSdW50aW1lU3R5bGUoKTtcblx0XHR0aGlzLl9tYXJrU2lkZWJhclJvd3MoKTtcblx0XHRpZiAobm9ybWFsaXplZCkgdGhpcy5fdXBkYXRlUGFuZWxQcmV2aWV3KG5vcm1hbGl6ZWQpO1xuXHRcdGlmIChyZW5kZXIpIHRoaXMuX3JlbmRlclBhbmVsKCk7XG5cdFx0dGhpcy5fc2NoZWR1bGVTZXBhcmF0b3JTYXZlKGd1aWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBndWlkXG5cdCAqL1xuXHRfc2NoZWR1bGVTZXBhcmF0b3JTYXZlKGd1aWQpIHtcblx0XHRjb25zdCBleGlzdGluZyA9IHRoaXMuX3NlcGFyYXRvclNhdmVUaW1lcnMuZ2V0KGd1aWQpO1xuXHRcdGlmIChleGlzdGluZykgY2xlYXJUaW1lb3V0KGV4aXN0aW5nKTtcblx0XHRjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5fc2VwYXJhdG9yU2F2ZVRpbWVycy5kZWxldGUoZ3VpZCk7XG5cdFx0XHR2b2lkIHRoaXMuX3NhdmVTZXBhcmF0b3JTdHlsZU5vdyhndWlkKTtcblx0XHR9LCA4MDApO1xuXHRcdHRoaXMuX3NlcGFyYXRvclNhdmVUaW1lcnMuc2V0KGd1aWQsIHRpbWVyKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZ3VpZFxuXHQgKi9cblx0YXN5bmMgX3NhdmVTZXBhcmF0b3JTdHlsZU5vdyhndWlkKSB7XG5cdFx0Y29uc3QgZW50cnkgPSB0aGlzLl9zZXBhcmF0b3JzLmdldChndWlkKTtcblx0XHRpZiAoIWVudHJ5KSByZXR1cm47XG5cdFx0Y29uc3Qgc2F2ZWRTdHlsZSA9IGVudHJ5LnN0eWxlID8gdGhpcy5fbm9ybWFsaXplU3R5bGUoZW50cnkuc3R5bGUpIDogbnVsbDtcblx0XHRjb25zdCBzYXZlZENvbGxhcHNlZFN0eWxlID0gZW50cnkuY29sbGFwc2VkU3R5bGUgPyB0aGlzLl9ub3JtYWxpemVTdHlsZShlbnRyeS5jb2xsYXBzZWRTdHlsZSkgOiBudWxsO1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBjb25mID0gZW50cnkuY29sbGVjdGlvbi5nZXRDb25maWd1cmF0aW9uKCk7XG5cdFx0XHRjb25zdCBjdXN0b20gPSBjb25mLmN1c3RvbSAmJiB0eXBlb2YgY29uZi5jdXN0b20gPT09ICdvYmplY3QnID8gY29uZi5jdXN0b20gOiB7fTtcblx0XHRcdGNvbnN0IG1hcmtlciA9IHRoaXMuX3JlYWRNYXJrZXIoY29uZikgfHwgeyBpc1NlcGFyYXRvcjogdHJ1ZSwgdmVyc2lvbjogMSB9O1xuXHRcdFx0Y29uc3QgbmV4dE1hcmtlciA9IHsgLi4ubWFya2VyIH07XG5cdFx0XHRpZiAoc2F2ZWRTdHlsZSkgbmV4dE1hcmtlci5zdHlsZSA9IHNhdmVkU3R5bGU7XG5cdFx0XHRlbHNlIGRlbGV0ZSBuZXh0TWFya2VyLnN0eWxlO1xuXHRcdFx0aWYgKHNhdmVkQ29sbGFwc2VkU3R5bGUpIG5leHRNYXJrZXIuY29sbGFwc2VkU3R5bGUgPSBzYXZlZENvbGxhcHNlZFN0eWxlO1xuXHRcdFx0ZWxzZSBkZWxldGUgbmV4dE1hcmtlci5jb2xsYXBzZWRTdHlsZTtcblx0XHRcdGF3YWl0IGVudHJ5LmNvbGxlY3Rpb24uc2F2ZUNvbmZpZ3VyYXRpb24oe1xuXHRcdFx0XHQuLi5jb25mLFxuXHRcdFx0XHRuYW1lOiBTRVBBUkFUT1JfQ09MTEVDVElPTl9OQU1FLFxuXHRcdFx0XHRjdXN0b206IHtcblx0XHRcdFx0XHQuLi5jdXN0b20sXG5cdFx0XHRcdFx0W1BMVUdJTl9LRVldOiBuZXh0TWFya2VyLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0XHRpZiAoSlNPTi5zdHJpbmdpZnkodGhpcy5fcGVuZGluZ1NlcGFyYXRvclN0eWxlcy5nZXQoZ3VpZCkgfHwgbnVsbCkgPT09IEpTT04uc3RyaW5naWZ5KHNhdmVkU3R5bGUpKSB7XG5cdFx0XHRcdHRoaXMuX3BlbmRpbmdTZXBhcmF0b3JTdHlsZXMuZGVsZXRlKGd1aWQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKEpTT04uc3RyaW5naWZ5KHRoaXMuX3BlbmRpbmdDb2xsYXBzZWRTZXBhcmF0b3JTdHlsZXMuZ2V0KGd1aWQpIHx8IG51bGwpID09PSBKU09OLnN0cmluZ2lmeShzYXZlZENvbGxhcHNlZFN0eWxlKSkge1xuXHRcdFx0XHR0aGlzLl9wZW5kaW5nQ29sbGFwc2VkU2VwYXJhdG9yU3R5bGVzLmRlbGV0ZShndWlkKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdHRoaXMuX3RvYXN0KCdDb3VsZCBub3Qgc2F2ZSBzZXBhcmF0b3Igc3R5bGUuJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7UGx1Z2luQ29uZmlndXJhdGlvbn0gY29uZlxuXHQgKiBAcmV0dXJucyB7U2VwYXJhdG9yTWFya2VyIHwgbnVsbH1cblx0ICovXG5cdF9yZWFkTWFya2VyKGNvbmYpIHtcblx0XHRjb25zdCBjdXN0b20gPSBjb25mICYmIGNvbmYuY3VzdG9tICYmIHR5cGVvZiBjb25mLmN1c3RvbSA9PT0gJ29iamVjdCcgPyBjb25mLmN1c3RvbSA6IHt9O1xuXHRcdGNvbnN0IG1hcmtlciA9IGN1c3RvbVtQTFVHSU5fS0VZXTtcblx0XHRyZXR1cm4gbWFya2VyICYmIG1hcmtlci5pc1NlcGFyYXRvciA9PT0gdHJ1ZSA/IG1hcmtlciA6IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtQYXJ0aWFsPFNlcGFyYXRvclN0eWxlPiB8IG51bGwgfCB1bmRlZmluZWR9IHJhd1xuXHQgKiBAcmV0dXJucyB7U2VwYXJhdG9yU3R5bGV9XG5cdCAqL1xuXHRfbm9ybWFsaXplU3R5bGUocmF3KSB7XG5cdFx0Y29uc3Qgc3JjID0gcmF3ICYmIHR5cGVvZiByYXcgPT09ICdvYmplY3QnID8gcmF3IDoge307XG5cdFx0Y29uc3QgYm9yZGVyU3R5bGUgPSBCT1JERVJfU1RZTEVTLmluY2x1ZGVzKC8qKiBAdHlwZSB7YW55fSAqLyAoc3JjLmJvcmRlclN0eWxlKSkgPyBTdHJpbmcoc3JjLmJvcmRlclN0eWxlKSA6IERFRkFVTFRfU1RZTEUuYm9yZGVyU3R5bGU7XG5cdFx0Y29uc3QgYWxpZ25tZW50ID0gQUxJR05NRU5UUy5pbmNsdWRlcygvKiogQHR5cGUge2FueX0gKi8gKHNyYy5hbGlnbm1lbnQpKSA/IFN0cmluZyhzcmMuYWxpZ25tZW50KSA6IERFRkFVTFRfU1RZTEUuYWxpZ25tZW50O1xuXHRcdGNvbnN0IGNvbG9yID0gdGhpcy5fbm9ybWFsaXplQ29sb3Ioc3JjLmNvbG9yKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Ym9yZGVyU3R5bGUsXG5cdFx0XHRjb2xvcixcblx0XHRcdGN1c3RvbUNvbG9yOiBjb2xvci5zdGFydHNXaXRoKCdjdXN0b206JykgPyB0aGlzLl9oZXhPckRlZmF1bHQoY29sb3Iuc2xpY2UoJ2N1c3RvbTonLmxlbmd0aCkpIDogdGhpcy5faGV4T3JEZWZhdWx0KHNyYy5jdXN0b21Db2xvciksXG5cdFx0XHR0aGlja25lc3NQeDogdGhpcy5fY2xhbXBOdW1iZXIoc3JjLnRoaWNrbmVzc1B4LCAwLjUsIDgsIERFRkFVTFRfU1RZTEUudGhpY2tuZXNzUHgsIDAuNSksXG5cdFx0XHRkb3VibGVHYXBQeDogdGhpcy5fY2xhbXBOdW1iZXIoc3JjLmRvdWJsZUdhcFB4LCAwLjUsIDgsIERFRkFVTFRfU1RZTEUuZG91YmxlR2FwUHgsIDAuNSksXG5cdFx0XHR3aWR0aFBjdDogdGhpcy5fY2xhbXBJbnQoc3JjLndpZHRoUGN0LCAxMCwgMTAwLCBERUZBVUxUX1NUWUxFLndpZHRoUGN0KSxcblx0XHRcdG9wYWNpdHlQY3Q6IHRoaXMuX2NsYW1wSW50KHNyYy5vcGFjaXR5UGN0LCAxMCwgMTAwLCBERUZBVUxUX1NUWUxFLm9wYWNpdHlQY3QpLFxuXHRcdFx0aW5zZXRQeDogdGhpcy5fY2xhbXBJbnQoc3JjLmluc2V0UHgsIDAsIDM2LCBERUZBVUxUX1NUWUxFLmluc2V0UHgpLFxuXHRcdFx0aGVpZ2h0UHg6IHRoaXMuX2NsYW1wSW50KHNyYy5oZWlnaHRQeCwgMTIsIDQyLCBERUZBVUxUX1NUWUxFLmhlaWdodFB4KSxcblx0XHRcdG9mZnNldFlQeDogdGhpcy5fY2xhbXBJbnQoc3JjLm9mZnNldFlQeCwgLTE2LCAxNiwgREVGQVVMVF9TVFlMRS5vZmZzZXRZUHgpLFxuXHRcdFx0YWxpZ25tZW50LFxuXHRcdFx0Z3JhZGllbnRQY3Q6IHRoaXMuX2NsYW1wSW50KHNyYy5ncmFkaWVudFBjdCwgNSwgOTUsIERFRkFVTFRfU1RZTEUuZ3JhZGllbnRQY3QpLFxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHt1bmtub3dufSB2YWx1ZVxuXHQgKi9cblx0X25vcm1hbGl6ZUNvbG9yKHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHJldHVybiBERUZBVUxUX1NUWUxFLmNvbG9yO1xuXHRcdGlmICh2YWx1ZSA9PT0gJ3RoZW1lOmFjY2VudCcpIHJldHVybiB2YWx1ZTtcblx0XHRpZiAodmFsdWUuc3RhcnRzV2l0aCgndGhlbWUtdmFyOi0tJykpIHJldHVybiB2YWx1ZTtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFRIRU1FX0NPTE9SX0FMSUFTRVMsIHZhbHVlKSkgcmV0dXJuIERFRkFVTFRfU1RZTEUuY29sb3I7XG5cdFx0aWYgKHZhbHVlLnN0YXJ0c1dpdGgoJ3ZhcjotLScpICYmIFRIRU1FX0NPTE9SUy5zb21lKChpdGVtKSA9PiBpdGVtLnZhbHVlID09PSB2YWx1ZSkpIHJldHVybiB2YWx1ZTtcblx0XHRpZiAodmFsdWUuc3RhcnRzV2l0aCgnY3VzdG9tOicpICYmIC9eI1swLTlhLWZdezZ9JC9pLnRlc3QodmFsdWUuc2xpY2UodmFsdWUuaW5kZXhPZignOicpICsgMSkpKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYgKENPTE9SX1BBTEVUVEVfR1JPVVBTLnNvbWUoKHBhbGV0dGUpID0+IHZhbHVlLnN0YXJ0c1dpdGgoYCR7cGFsZXR0ZS5pZH06YCkpICYmIC9eI1swLTlhLWZdezZ9JC9pLnRlc3QodmFsdWUuc2xpY2UodmFsdWUuaW5kZXhPZignOicpICsgMSkpKSByZXR1cm4gdmFsdWU7XG5cdFx0cmV0dXJuIERFRkFVTFRfU1RZTEUuY29sb3I7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHt1bmtub3dufSB2YWx1ZVxuXHQgKi9cblx0X2hleE9yRGVmYXVsdCh2YWx1ZSkge1xuXHRcdHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIC9eI1swLTlhLWZdezZ9JC9pLnRlc3QodmFsdWUpID8gdmFsdWUgOiBERUZBVUxUX1NUWUxFLmN1c3RvbUNvbG9yO1xuXHR9XG5cblx0LyoqIEBwYXJhbSB7U2VwYXJhdG9yU3R5bGV9IHN0eWxlICovXG5cdF9yZXNvbHZlSGV4Q29sb3Ioc3R5bGUpIHtcblx0XHRpZiAoc3R5bGUuY29sb3Iuc3RhcnRzV2l0aCgnY3VzdG9tOicpKSByZXR1cm4gc3R5bGUuY29sb3Iuc2xpY2UoJ2N1c3RvbTonLmxlbmd0aCk7XG5cdFx0Zm9yIChjb25zdCBwYWxldHRlIG9mIENPTE9SX1BBTEVUVEVfR1JPVVBTKSB7XG5cdFx0XHRpZiAoc3R5bGUuY29sb3Iuc3RhcnRzV2l0aChgJHtwYWxldHRlLmlkfTpgKSkgcmV0dXJuIHN0eWxlLmNvbG9yLnNsaWNlKHBhbGV0dGUuaWQubGVuZ3RoICsgMSk7XG5cdFx0fVxuXHRcdHJldHVybiBzdHlsZS5jdXN0b21Db2xvcjtcblx0fVxuXG5cdC8qKiBAcGFyYW0ge3Vua25vd259IHZhbHVlICovXG5cdF9pc0hleCh2YWx1ZSkge1xuXHRcdHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIC9eI1swLTlhLWZdezZ9JC9pLnRlc3QodmFsdWUpO1xuXHR9XG5cblx0LyoqIEBwYXJhbSB7dW5rbm93bn0gaW5wdXQgKi9cblx0X25vcm1hbGl6ZUhleChpbnB1dCkge1xuXHRcdGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSByZXR1cm4gbnVsbDtcblx0XHRsZXQgcyA9IGlucHV0LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICghcy5zdGFydHNXaXRoKCcjJykpIHMgPSBgIyR7c31gO1xuXHRcdGlmICgvXiNbMC05YS1mXXszfSQvLnRlc3QocykpIHMgPSBgIyR7cy5zbGljZSgxKS5zcGxpdCgnJykubWFwKChjKSA9PiBjICsgYykuam9pbignJyl9YDtcblx0XHRyZXR1cm4gL14jWzAtOWEtZl17Nn0kLy50ZXN0KHMpID8gcyA6IG51bGw7XG5cdH1cblxuXHQvKiogQHBhcmFtIHtudW1iZXJ9IG4gKi9cblx0X2NsYW1wMDEobikge1xuXHRcdHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBuKSk7XG5cdH1cblxuXHQvKiogQHBhcmFtIHtzdHJpbmd9IGhleCBAcmV0dXJucyB7W251bWJlciwgbnVtYmVyLCBudW1iZXJdfSAqL1xuXHRfaGV4VG9SZ2IoaGV4KSB7XG5cdFx0Y29uc3QgaCA9IHRoaXMuX25vcm1hbGl6ZUhleChoZXgpIHx8ICcjMDAwMDAwJztcblx0XHRyZXR1cm4gW3BhcnNlSW50KGguc2xpY2UoMSwgMyksIDE2KSwgcGFyc2VJbnQoaC5zbGljZSgzLCA1KSwgMTYpLCBwYXJzZUludChoLnNsaWNlKDUsIDcpLCAxNildO1xuXHR9XG5cblx0LyoqIEBwYXJhbSB7bnVtYmVyfSByIEBwYXJhbSB7bnVtYmVyfSBnIEBwYXJhbSB7bnVtYmVyfSBiICovXG5cdF9yZ2JUb0hleChyLCBnLCBiKSB7XG5cdFx0Y29uc3QgdCA9ICgvKiogQHR5cGUge251bWJlcn0gKi8gbikgPT4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCBNYXRoLnJvdW5kKG4pKSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyk7XG5cdFx0cmV0dXJuIGAjJHt0KHIpfSR7dChnKX0ke3QoYil9YDtcblx0fVxuXG5cdC8qKiBAcGFyYW0ge251bWJlcn0gciBAcGFyYW0ge251bWJlcn0gZyBAcGFyYW0ge251bWJlcn0gYiBAcmV0dXJucyB7W251bWJlciwgbnVtYmVyLCBudW1iZXJdfSAqL1xuXHRfcmdiVG9Ic3YociwgZywgYikge1xuXHRcdHIgLz0gMjU1OyBnIC89IDI1NTsgYiAvPSAyNTU7XG5cdFx0Y29uc3QgbXggPSBNYXRoLm1heChyLCBnLCBiKTtcblx0XHRjb25zdCBtbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHRcdGNvbnN0IGQgPSBteCAtIG1uO1xuXHRcdGxldCBoID0gMDtcblx0XHRpZiAoZCAhPT0gMCkge1xuXHRcdFx0aWYgKG14ID09PSByKSBoID0gKChnIC0gYikgLyBkKSAlIDY7XG5cdFx0XHRlbHNlIGlmIChteCA9PT0gZykgaCA9IChiIC0gcikgLyBkICsgMjtcblx0XHRcdGVsc2UgaCA9IChyIC0gZykgLyBkICsgNDtcblx0XHRcdGggKj0gNjA7XG5cdFx0XHRpZiAoaCA8IDApIGggKz0gMzYwO1xuXHRcdH1cblx0XHRyZXR1cm4gW2gsIG14ID09PSAwID8gMCA6IGQgLyBteCwgbXhdO1xuXHR9XG5cblx0LyoqIEBwYXJhbSB7bnVtYmVyfSBoIEBwYXJhbSB7bnVtYmVyfSBzIEBwYXJhbSB7bnVtYmVyfSB2IEByZXR1cm5zIHtbbnVtYmVyLCBudW1iZXIsIG51bWJlcl19ICovXG5cdF9oc3ZUb1JnYihoLCBzLCB2KSB7XG5cdFx0Y29uc3QgYyA9IHYgKiBzO1xuXHRcdGNvbnN0IGhwID0gKCgoaCAlIDM2MCkgKyAzNjApICUgMzYwKSAvIDYwO1xuXHRcdGNvbnN0IHggPSBjICogKDEgLSBNYXRoLmFicygoaHAgJSAyKSAtIDEpKTtcblx0XHRsZXQgciA9IDAsIGcgPSAwLCBiID0gMDtcblx0XHRpZiAoaHAgPCAxKSB7IHIgPSBjOyBnID0geDsgfVxuXHRcdGVsc2UgaWYgKGhwIDwgMikgeyByID0geDsgZyA9IGM7IH1cblx0XHRlbHNlIGlmIChocCA8IDMpIHsgZyA9IGM7IGIgPSB4OyB9XG5cdFx0ZWxzZSBpZiAoaHAgPCA0KSB7IGcgPSB4OyBiID0gYzsgfVxuXHRcdGVsc2UgaWYgKGhwIDwgNSkgeyByID0geDsgYiA9IGM7IH1cblx0XHRlbHNlIHsgciA9IGM7IGIgPSB4OyB9XG5cdFx0Y29uc3QgbSA9IHYgLSBjO1xuXHRcdHJldHVybiBbKHIgKyBtKSAqIDI1NSwgKGcgKyBtKSAqIDI1NSwgKGIgKyBtKSAqIDI1NV07XG5cdH1cblxuXHQvKiogQHBhcmFtIHtudW1iZXJ9IHIgQHBhcmFtIHtudW1iZXJ9IGcgQHBhcmFtIHtudW1iZXJ9IGIgQHJldHVybnMge1tudW1iZXIsIG51bWJlciwgbnVtYmVyXX0gKi9cblx0X3JnYlRvSHNsKHIsIGcsIGIpIHtcblx0XHRyIC89IDI1NTsgZyAvPSAyNTU7IGIgLz0gMjU1O1xuXHRcdGNvbnN0IG14ID0gTWF0aC5tYXgociwgZywgYik7XG5cdFx0Y29uc3QgbW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0XHRsZXQgaCA9IDAsIHMgPSAwO1xuXHRcdGNvbnN0IGwgPSAobXggKyBtbikgLyAyO1xuXHRcdGlmIChteCAhPT0gbW4pIHtcblx0XHRcdGNvbnN0IGQgPSBteCAtIG1uO1xuXHRcdFx0cyA9IGwgPiAwLjUgPyBkIC8gKDIgLSBteCAtIG1uKSA6IGQgLyAobXggKyBtbik7XG5cdFx0XHRpZiAobXggPT09IHIpIGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKTtcblx0XHRcdGVsc2UgaWYgKG14ID09PSBnKSBoID0gKGIgLSByKSAvIGQgKyAyO1xuXHRcdFx0ZWxzZSBoID0gKHIgLSBnKSAvIGQgKyA0O1xuXHRcdFx0aCAqPSA2MDtcblx0XHR9XG5cdFx0cmV0dXJuIFtNYXRoLnJvdW5kKGgpLCBNYXRoLnJvdW5kKHMgKiAxMDApLCBNYXRoLnJvdW5kKGwgKiAxMDApXTtcblx0fVxuXG5cdC8qKiBAcGFyYW0ge251bWJlcn0gaCBAcGFyYW0ge251bWJlcn0gcyBAcGFyYW0ge251bWJlcn0gbCBAcmV0dXJucyB7W251bWJlciwgbnVtYmVyLCBudW1iZXJdfSAqL1xuXHRfaHNsVG9SZ2IoaCwgcywgbCkge1xuXHRcdGggPSAoKChoICUgMzYwKSArIDM2MCkgJSAzNjApIC8gMzYwO1xuXHRcdHMgLz0gMTAwO1xuXHRcdGwgLz0gMTAwO1xuXHRcdGlmIChzID09PSAwKSB7XG5cdFx0XHRjb25zdCB2ID0gbCAqIDI1NTtcblx0XHRcdHJldHVybiBbdiwgdiwgdl07XG5cdFx0fVxuXHRcdGNvbnN0IHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuXHRcdGNvbnN0IHAgPSAyICogbCAtIHE7XG5cdFx0Y29uc3QgZiA9ICgvKiogQHR5cGUge251bWJlcn0gKi8gdCkgPT4ge1xuXHRcdFx0aWYgKHQgPCAwKSB0ICs9IDE7XG5cdFx0XHRpZiAodCA+IDEpIHQgLT0gMTtcblx0XHRcdGlmICh0IDwgMSAvIDYpIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0O1xuXHRcdFx0aWYgKHQgPCAxIC8gMikgcmV0dXJuIHE7XG5cdFx0XHRpZiAodCA8IDIgLyAzKSByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDY7XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXHRcdHJldHVybiBbZihoICsgMSAvIDMpICogMjU1LCBmKGgpICogMjU1LCBmKGggLSAxIC8gMykgKiAyNTVdO1xuXHR9XG5cblx0X3JhbmRvbUhleCgpIHtcblx0XHRjb25zdCBoID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzYwKTtcblx0XHRjb25zdCBbciwgZywgYl0gPSB0aGlzLl9oc3ZUb1JnYihoLCAwLjY1LCAwLjkpO1xuXHRcdHJldHVybiB0aGlzLl9yZ2JUb0hleChyLCBnLCBiKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3Vua25vd259IHZhbHVlXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cblx0ICogQHBhcmFtIHtudW1iZXJ9IG1heFxuXHQgKiBAcGFyYW0ge251bWJlcn0gZmFsbGJhY2tcblx0ICovXG5cdF9jbGFtcEludCh2YWx1ZSwgbWluLCBtYXgsIGZhbGxiYWNrKSB7XG5cdFx0Y29uc3QgbiA9IE51bWJlcih2YWx1ZSk7XG5cdFx0aWYgKCFOdW1iZXIuaXNGaW5pdGUobikpIHJldHVybiBmYWxsYmFjaztcblx0XHRyZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIE1hdGgucm91bmQobikpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3Vua25vd259IHZhbHVlXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cblx0ICogQHBhcmFtIHtudW1iZXJ9IG1heFxuXHQgKiBAcGFyYW0ge251bWJlcn0gZmFsbGJhY2tcblx0ICogQHBhcmFtIHtudW1iZXI9fSBzdGVwXG5cdCAqL1xuXHRfY2xhbXBOdW1iZXIodmFsdWUsIG1pbiwgbWF4LCBmYWxsYmFjaywgc3RlcCA9IDEpIHtcblx0XHRjb25zdCBuID0gTnVtYmVyKHZhbHVlKTtcblx0XHRjb25zdCBiYXNlID0gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IGZhbGxiYWNrO1xuXHRcdGNvbnN0IHN0ZXBwZWQgPSBzdGVwID4gMCA/IE1hdGgucm91bmQoYmFzZSAvIHN0ZXApICogc3RlcCA6IGJhc2U7XG5cdFx0Y29uc3QgY2xhbXBlZCA9IE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCBzdGVwcGVkKSk7XG5cdFx0cmV0dXJuIE51bWJlcihjbGFtcGVkLnRvRml4ZWQoMykpO1xuXHR9XG5cblx0LyoqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAqL1xuXHRfZm9ybWF0TnVtYmVyKHZhbHVlKSB7XG5cdFx0cmV0dXJuIE51bWJlci5pc0ludGVnZXIodmFsdWUpID8gU3RyaW5nKHZhbHVlKSA6IFN0cmluZyhOdW1iZXIodmFsdWUudG9GaXhlZCgzKSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7U2VwYXJhdG9yU3R5bGV9IHN0eWxlXG5cdCAqL1xuXHRfcmVzb2x2ZUNvbG9yKHN0eWxlKSB7XG5cdFx0aWYgKHN0eWxlLmNvbG9yID09PSAndGhlbWU6YWNjZW50Jykge1xuXHRcdFx0cmV0dXJuICd2YXIoLS1sb2dvLWNvbG9yLCB2YXIoLS1hY2NlbnQtY29sb3IsIHZhcigtLWNvbG9yLWFjY2VudCwgdmFyKC0tdGhlbWUtYWNjZW50LCB2YXIoLS1jb2xvci1wcmltYXJ5LCBjdXJyZW50Q29sb3IpKSkpKSc7XG5cdFx0fVxuXHRcdGlmIChzdHlsZS5jb2xvciA9PT0gU0lERUJBUl9ESVZJREVSX1ZBUl9WQUxVRSkge1xuXHRcdFx0cmV0dXJuIFNJREVCQVJfRElWSURFUl9WQVJfQ1NTO1xuXHRcdH1cblx0XHRpZiAoc3R5bGUuY29sb3Iuc3RhcnRzV2l0aCgndGhlbWUtdmFyOicpKSB7XG5cdFx0XHRjb25zdCB2YXJOYW1lID0gc3R5bGUuY29sb3Iuc2xpY2UoJ3RoZW1lLXZhcjonLmxlbmd0aCk7XG5cdFx0XHRyZXR1cm4gYHZhcigke3Zhck5hbWV9LCBjdXJyZW50Q29sb3IpYDtcblx0XHR9XG5cdFx0aWYgKHN0eWxlLmNvbG9yLnN0YXJ0c1dpdGgoJ3ZhcjonKSkge1xuXHRcdFx0Y29uc3QgZm91bmQgPSBUSEVNRV9DT0xPUlMuZmluZCgoaXRlbSkgPT4gaXRlbS52YWx1ZSA9PT0gc3R5bGUuY29sb3IpO1xuXHRcdFx0aWYgKGZvdW5kKSByZXR1cm4gZm91bmQuY3NzO1xuXHRcdFx0Y29uc3QgYWxpYXMgPSBUSEVNRV9DT0xPUl9BTElBU0VTWy8qKiBAdHlwZSB7a2V5b2YgdHlwZW9mIFRIRU1FX0NPTE9SX0FMSUFTRVN9ICovIChzdHlsZS5jb2xvcildO1xuXHRcdFx0cmV0dXJuIGFsaWFzIHx8IFRIRU1FX0NPTE9SU1swXS5jc3M7XG5cdFx0fVxuXHRcdGlmIChzdHlsZS5jb2xvci5zdGFydHNXaXRoKCdjdXN0b206JykpIHJldHVybiBzdHlsZS5jb2xvci5zbGljZSgnY3VzdG9tOicubGVuZ3RoKTtcblx0XHRmb3IgKGNvbnN0IHBhbGV0dGUgb2YgQ09MT1JfUEFMRVRURV9HUk9VUFMpIHtcblx0XHRcdGlmIChzdHlsZS5jb2xvci5zdGFydHNXaXRoKGAke3BhbGV0dGUuaWR9OmApKSByZXR1cm4gc3R5bGUuY29sb3Iuc2xpY2UocGFsZXR0ZS5pZC5sZW5ndGggKyAxKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN0eWxlLmN1c3RvbUNvbG9yO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7U2VwYXJhdG9yU3R5bGV9IHN0eWxlXG5cdCAqL1xuXHRfc3R5bGVWYXJzKHN0eWxlKSB7XG5cdFx0Y29uc3QgYWxpZ24gPSBBTElHTk1FTlRTLmluY2x1ZGVzKC8qKiBAdHlwZSB7YW55fSAqLyAoc3R5bGUuYWxpZ25tZW50KSkgPyBzdHlsZS5hbGlnbm1lbnQgOiBERUZBVUxUX1NUWUxFLmFsaWdubWVudDtcblx0XHRjb25zdCBjZW50ZXJlZCA9IGFsaWduID09PSAnY2VudGVyJztcblx0XHRjb25zdCByaWdodCA9IGFsaWduID09PSAncmlnaHQnO1xuXHRcdGNvbnN0IGdyYWRpZW50UGN0ID0gdGhpcy5fY2xhbXBJbnQoc3R5bGUuZ3JhZGllbnRQY3QsIDUsIDk1LCBERUZBVUxUX1NUWUxFLmdyYWRpZW50UGN0KTtcblx0XHRjb25zdCBvZmZzZXRZID0gdGhpcy5fY2xhbXBJbnQoc3R5bGUub2Zmc2V0WVB4LCAtMTYsIDE2LCBERUZBVUxUX1NUWUxFLm9mZnNldFlQeCk7XG5cdFx0Y29uc3QgZG91YmxlR2FwID0gdGhpcy5fY2xhbXBOdW1iZXIoc3R5bGUuZG91YmxlR2FwUHgsIDAuNSwgOCwgREVGQVVMVF9TVFlMRS5kb3VibGVHYXBQeCwgMC41KTtcblx0XHRjb25zdCBncmFkaWVudCA9IGFsaWduID09PSAncmlnaHQnXG5cdFx0XHQ/IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50IDAlLCB2YXIoLS1wbGctc3MtY29sb3IsIGN1cnJlbnRDb2xvcikgJHsxMDAgLSBncmFkaWVudFBjdH0lLCB2YXIoLS1wbGctc3MtY29sb3IsIGN1cnJlbnRDb2xvcikgMTAwJSlgXG5cdFx0XHQ6IGFsaWduID09PSAnY2VudGVyJ1xuXHRcdFx0XHQ/IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50IDAlLCB2YXIoLS1wbGctc3MtY29sb3IsIGN1cnJlbnRDb2xvcikgJHtNYXRoLm1heCgwLCA1MCAtIGdyYWRpZW50UGN0IC8gMil9JSwgdmFyKC0tcGxnLXNzLWNvbG9yLCBjdXJyZW50Q29sb3IpICR7TWF0aC5taW4oMTAwLCA1MCArIGdyYWRpZW50UGN0IC8gMil9JSwgdHJhbnNwYXJlbnQgMTAwJSlgXG5cdFx0XHRcdDogYGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tcGxnLXNzLWNvbG9yLCBjdXJyZW50Q29sb3IpIDAlLCB2YXIoLS1wbGctc3MtY29sb3IsIGN1cnJlbnRDb2xvcikgJHtncmFkaWVudFBjdH0lLCB0cmFuc3BhcmVudCAxMDAlKWA7XG5cdFx0cmV0dXJuIHtcblx0XHRcdCctLXBsZy1zcy1jb2xvcic6IHRoaXMuX3Jlc29sdmVDb2xvcihzdHlsZSksXG5cdFx0XHQnLS1wbGctc3Mtc3R5bGUnOiBzdHlsZS5ib3JkZXJTdHlsZSxcblx0XHRcdCctLXBsZy1zcy10aGlja25lc3MnOiBgJHtzdHlsZS50aGlja25lc3NQeH1weGAsXG5cdFx0XHQnLS1wbGctc3MtZG91YmxlLWdhcCc6IGAke2RvdWJsZUdhcH1weGAsXG5cdFx0XHQnLS1wbGctc3Mtd2lkdGgnOiBgJHtzdHlsZS53aWR0aFBjdH0lYCxcblx0XHRcdCctLXBsZy1zcy1vcGFjaXR5JzogU3RyaW5nKHN0eWxlLm9wYWNpdHlQY3QgLyAxMDApLFxuXHRcdFx0Jy0tcGxnLXNzLWluc2V0JzogYCR7c3R5bGUuaW5zZXRQeH1weGAsXG5cdFx0XHQnLS1wbGctc3MtaGVpZ2h0JzogYCR7c3R5bGUuaGVpZ2h0UHh9cHhgLFxuXHRcdFx0Jy0tcGxnLXNzLW9mZnNldC15JzogYCR7b2Zmc2V0WX1weGAsXG5cdFx0XHQnLS1wbGctc3MtbGVmdCc6IGNlbnRlcmVkID8gJzUwJScgOiByaWdodCA/ICdhdXRvJyA6ICd2YXIoLS1wbGctc3MtaW5zZXQpJyxcblx0XHRcdCctLXBsZy1zcy1yaWdodCc6IHJpZ2h0ID8gJ3ZhcigtLXBsZy1zcy1pbnNldCknIDogJ2F1dG8nLFxuXHRcdFx0Jy0tcGxnLXNzLXRyYW5zZm9ybSc6IGNlbnRlcmVkID8gJ3RyYW5zbGF0ZSgtNTAlLCBjYWxjKC01MCUgKyB2YXIoLS1wbGctc3Mtb2Zmc2V0LXksIDBweCkpKScgOiAndHJhbnNsYXRlWShjYWxjKC01MCUgKyB2YXIoLS1wbGctc3Mtb2Zmc2V0LXksIDBweCkpKScsXG5cdFx0XHQnLS1wbGctc3MtaG92ZXItdHJhbnNmb3JtJzogY2VudGVyZWQgPyAndHJhbnNsYXRlKC01MCUsIGNhbGMoLTUwJSArIHZhcigtLXBsZy1zcy1vZmZzZXQteSwgMHB4KSkpIHNjYWxlWCgxLjAyKScgOiAndHJhbnNsYXRlWShjYWxjKC01MCUgKyB2YXIoLS1wbGctc3Mtb2Zmc2V0LXksIDBweCkpKSBzY2FsZVgoMS4wMiknLFxuXHRcdFx0Jy0tcGxnLXNzLWp1c3RpZnknOiBhbGlnbiA9PT0gJ2xlZnQnID8gJ2ZsZXgtc3RhcnQnIDogYWxpZ24gPT09ICdyaWdodCcgPyAnZmxleC1lbmQnIDogJ2NlbnRlcicsXG5cdFx0XHQnLS1wbGctc3MtZ3JhZGllbnQnOiBncmFkaWVudCxcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG5cdCAqIEBwYXJhbSB7U2VwYXJhdG9yU3R5bGV9IHN0eWxlXG5cdCAqL1xuXHRfYXBwbHlTdHlsZVZhcnMoZWwsIHN0eWxlKSB7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5fc3R5bGVWYXJzKHN0eWxlKSkpIHtcblx0XHRcdGVsLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge1NlcGFyYXRvclN0eWxlfSBzdHlsZVxuXHQgKi9cblx0X3VwZGF0ZVBhbmVsUHJldmlldyhzdHlsZSkge1xuXHRcdGlmICghdGhpcy5fcGFuZWxFbCkgcmV0dXJuO1xuXHRcdHRoaXMuX3BhbmVsRWwucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGxnLXNzLWxpdmUtbGluZV0nKS5mb3JFYWNoKChub2RlKSA9PiB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXBsZy1zaWRlYmFyLXNlcGVyYXRvcnMtc3R5bGUnLCBzdHlsZS5ib3JkZXJTdHlsZSk7XG5cdFx0XHRcdHRoaXMuX2FwcGx5U3R5bGVWYXJzKG5vZGUsIHN0eWxlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLl9wYW5lbEVsLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke1BBTkVMX0NMQVNTfV9fcHJldmlld2ApLmZvckVhY2goKG5vZGUpID0+IHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHRoaXMuX2FwcGx5U3R5bGVWYXJzKG5vZGUsIHN0eWxlKTtcblx0XHR9KTtcblx0fVxuXG5cdF9lbnN1cmVSdW50aW1lU3R5bGUoKSB7XG5cdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNUWUxFX0lEKSkgcmV0dXJuO1xuXHRcdGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0XHRzdHlsZS5pZCA9IFNUWUxFX0lEO1xuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9XG5cblx0X3dyaXRlUnVudGltZVN0eWxlKCkge1xuXHRcdHRoaXMuX2Vuc3VyZVJ1bnRpbWVTdHlsZSgpO1xuXHRcdGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTVFlMRV9JRCk7XG5cdFx0aWYgKCEoc3R5bGVFbCBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQpKSByZXR1cm47XG5cdFx0Y29uc3QgZGVmYXVsdFZhcnMgPSB0aGlzLl9jc3NWYXJCbG9jayh0aGlzLl9kZWZhdWx0U3R5bGUpO1xuXHRcdGNvbnN0IGNvbGxhcHNlZERlZmF1bHRWYXJzID0gdGhpcy5fY3NzVmFyQmxvY2sodGhpcy5fZGVmYXVsdFN0eWxlKTtcblx0XHRjb25zdCBwZXJTZXBhcmF0b3IgPSBBcnJheS5mcm9tKHRoaXMuX3NlcGFyYXRvcnMudmFsdWVzKCkpXG5cdFx0XHQubWFwKChlbnRyeSkgPT4gdGhpcy5fc2VwYXJhdG9yUnVudGltZVJ1bGVzKGVudHJ5Lmd1aWQsIGVudHJ5LnN0eWxlIHx8IHRoaXMuX2RlZmF1bHRTdHlsZSwgZW50cnkuY29sbGFwc2VkU3R5bGUgfHwgZW50cnkuc3R5bGUgfHwgdGhpcy5fZGVmYXVsdFN0eWxlKSlcblx0XHRcdC5qb2luKCdcXG4nKTtcblx0XHRzdHlsZUVsLnRleHRDb250ZW50ID0gYFxuXHRcdFx0LnNpZGViYXItLWljb25zICR7Q09MTEVDVElPTl9ST1dfU0VMRUNUT1J9WyR7TUFSS19BVFRSfT1cIjFcIl0geyAke2RlZmF1bHRWYXJzfSB9XG5cdFx0XHQuc2lkZWJhci5zaWRlYmFyLWNvbGxhcHNlZCAuc2lkZWJhci0taWNvbnMgJHtDT0xMRUNUSU9OX1JPV19TRUxFQ1RPUn1bJHtNQVJLX0FUVFJ9PVwiMVwiXSxcblx0XHRcdC5zaWRlYmFyLWNvbGxhcHNlZCAuc2lkZWJhci0taWNvbnMgJHtDT0xMRUNUSU9OX1JPV19TRUxFQ1RPUn1bJHtNQVJLX0FUVFJ9PVwiMVwiXSB7ICR7Y29sbGFwc2VkRGVmYXVsdFZhcnN9IH1cblx0XHRcdCR7cGVyU2VwYXJhdG9yfVxuXHRcdGA7XG5cdH1cblxuXHQvKipcblx0ICogQ2xvYWsga25vd24gc2VwYXJhdG9yIHJvd3MgYnkgZ3VpZCBpbW1lZGlhdGVseSwgYmVmb3JlIG11dGF0aW9uIG1hcmtpbmdcblx0ICogY2F0Y2hlcyBhIGZyZXNobHkgcmUtcmVuZGVyZWQgc2lkZWJhciByb3cuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBndWlkXG5cdCAqIEBwYXJhbSB7U2VwYXJhdG9yU3R5bGV9IGV4cGFuZGVkU3R5bGVcblx0ICogQHBhcmFtIHtTZXBhcmF0b3JTdHlsZX0gY29sbGFwc2VkU3R5bGVcblx0ICovXG5cdF9zZXBhcmF0b3JSdW50aW1lUnVsZXMoZ3VpZCwgZXhwYW5kZWRTdHlsZSwgY29sbGFwc2VkU3R5bGUpIHtcblx0XHRjb25zdCBzZWxlY3RvciA9IGAuc2lkZWJhci0taWNvbnMgJHtDT0xMRUNUSU9OX1JPV19TRUxFQ1RPUn1bZGF0YS1ndWlkPVwiJHt0aGlzLl9jc3NFc2NhcGUoZ3VpZCl9XCJdYDtcblx0XHRjb25zdCBjb2xsYXBzZWRTZWxlY3RvciA9IGAuc2lkZWJhci5zaWRlYmFyLWNvbGxhcHNlZCAke3NlbGVjdG9yfWA7XG5cdFx0Y29uc3QgY29sbGFwc2VkQWx0U2VsZWN0b3IgPSBgLnNpZGViYXItY29sbGFwc2VkICR7c2VsZWN0b3J9YDtcblx0XHRyZXR1cm4gYFxuXHRcdFx0JHtzZWxlY3Rvcn0ge1xuXHRcdFx0XHQke3RoaXMuX2Nzc1ZhckJsb2NrKGV4cGFuZGVkU3R5bGUpfVxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcblx0XHRcdFx0bWluLWhlaWdodDogdmFyKC0tcGxnLXNzLWhlaWdodCwgMjBweCkgIWltcG9ydGFudDtcblx0XHRcdFx0aGVpZ2h0OiB2YXIoLS1wbGctc3MtaGVpZ2h0LCAyMHB4KSAhaW1wb3J0YW50O1xuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcblx0XHRcdFx0cGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuXHRcdFx0XHRwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGN1cnNvcjogZ3JhYjtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtZGVmYXVsdCwgI2NiZDVlMSkgIWltcG9ydGFudDtcblx0XHRcdFx0Zm9udC1zaXplOiAwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cblx0XHRcdCR7Y29sbGFwc2VkU2VsZWN0b3J9LFxuXHRcdFx0JHtjb2xsYXBzZWRBbHRTZWxlY3Rvcn0ge1xuXHRcdFx0XHQke3RoaXMuX2Nzc1ZhckJsb2NrKGNvbGxhcHNlZFN0eWxlKX1cblx0XHRcdH1cblxuXHRcdFx0JHtzZWxlY3Rvcn06YWN0aXZlLFxuXHRcdFx0JHtzZWxlY3Rvcn0ucGxnLXNpZGViYXItc2VwZXJhdG9ycy1kcmFnZ2luZyB7XG5cdFx0XHRcdGN1cnNvcjogZ3JhYmJpbmc7XG5cdFx0XHR9XG5cblx0XHRcdCR7c2VsZWN0b3J9ID4gKixcblx0XHRcdCR7c2VsZWN0b3J9IC5zaWRlYmFyLWl0ZW0taWNvbixcblx0XHRcdCR7c2VsZWN0b3J9IC5zaWRlYmFyLWl0ZW0tbmFtZSxcblx0XHRcdCR7c2VsZWN0b3J9IC5zaWRlYmFyLWl0ZW0tdGl0bGUsXG5cdFx0XHQke3NlbGVjdG9yfSAuc2lkZWJhci1pdGVtLXRleHQsXG5cdFx0XHQke3NlbGVjdG9yfSAudGkge1xuXHRcdFx0XHR2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcblx0XHRcdFx0b3BhY2l0eTogMCAhaW1wb3J0YW50O1xuXHRcdFx0XHRwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXG5cdFx0XHQke3NlbGVjdG9yfTo6YWZ0ZXIge1xuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRsZWZ0OiB2YXIoLS1wbGctc3MtbGVmdCwgNTAlKTtcblx0XHRcdFx0cmlnaHQ6IHZhcigtLXBsZy1zcy1yaWdodCwgYXV0byk7XG5cdFx0XHRcdHRvcDogNTAlO1xuXHRcdFx0XHR3aWR0aDogbWluKHZhcigtLXBsZy1zcy13aWR0aCwgODglKSwgY2FsYygxMDAlIC0gKHZhcigtLXBsZy1zcy1pbnNldCwgMTBweCkgKiAyKSkpO1xuXHRcdFx0XHRib3JkZXItdG9wOiB2YXIoLS1wbGctc3MtdGhpY2tuZXNzLCAxcHgpIHZhcigtLXBsZy1zcy1zdHlsZSwgc29saWQpIHZhcigtLXBsZy1zcy1jb2xvciwgY3VycmVudENvbG9yKTtcblx0XHRcdFx0b3BhY2l0eTogdmFyKC0tcGxnLXNzLW9wYWNpdHksIDAuODYpO1xuXHRcdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG5cdFx0XHRcdHRyYW5zZm9ybTogdmFyKC0tcGxnLXNzLXRyYW5zZm9ybSwgdHJhbnNsYXRlKC01MCUsIC01MCUpKTtcblx0XHRcdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAxMjBtcyBlYXNlLW91dCwgdHJhbnNmb3JtIDEyMG1zIGVhc2Utb3V0O1xuXHRcdFx0fVxuXG5cdFx0XHQke3NlbGVjdG9yfTpob3Zlcjo6YWZ0ZXIge1xuXHRcdFx0XHRvcGFjaXR5OiB2YXIoLS1wbGctc3Mtb3BhY2l0eSwgMSk7XG5cdFx0XHRcdHRyYW5zZm9ybTogdmFyKC0tcGxnLXNzLWhvdmVyLXRyYW5zZm9ybSwgdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlWCgxLjAyKSk7XG5cdFx0XHR9XG5cblx0XHRcdCR7dGhpcy5fc2VwYXJhdG9yUHNldWRvUnVsZXMoc2VsZWN0b3IsIGV4cGFuZGVkU3R5bGUpfVxuXHRcdFx0JHt0aGlzLl9zZXBhcmF0b3JQc2V1ZG9SdWxlcyhjb2xsYXBzZWRTZWxlY3RvciwgY29sbGFwc2VkU3R5bGUpfVxuXHRcdFx0JHt0aGlzLl9zZXBhcmF0b3JQc2V1ZG9SdWxlcyhjb2xsYXBzZWRBbHRTZWxlY3RvciwgY29sbGFwc2VkU3R5bGUpfVxuXHRcdGA7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG5cdCAqIEBwYXJhbSB7U2VwYXJhdG9yU3R5bGV9IHN0eWxlXG5cdCAqL1xuXHRfc2VwYXJhdG9yUHNldWRvUnVsZXMoc2VsZWN0b3IsIHN0eWxlKSB7XG5cdFx0Y29uc3QgcmVzZXQgPSBgXG5cdFx0XHQke3NlbGVjdG9yfTo6YWZ0ZXIge1xuXHRcdFx0XHRib3JkZXItdG9wOiB2YXIoLS1wbGctc3MtdGhpY2tuZXNzLCAxcHgpIHZhcigtLXBsZy1zcy1zdHlsZSwgc29saWQpIHZhcigtLXBsZy1zcy1jb2xvciwgY3VycmVudENvbG9yKSAhaW1wb3J0YW50O1xuXHRcdFx0XHRoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcblx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblx0XHRcdH1cblx0XHRgO1xuXHRcdGlmIChzdHlsZS5ib3JkZXJTdHlsZSA9PT0gJ2dyYWRpZW50Jykge1xuXHRcdFx0cmV0dXJuIGAke3Jlc2V0fVxuXHRcdFx0XHQke3NlbGVjdG9yfTo6YWZ0ZXIge1xuXHRcdFx0XHRcdGJvcmRlci10b3A6IDAgIWltcG9ydGFudDtcblx0XHRcdFx0XHRoZWlnaHQ6IG1heCh2YXIoLS1wbGctc3MtdGhpY2tuZXNzLCAxcHgpLCAxcHgpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tcGxnLXNzLWdyYWRpZW50KSAhaW1wb3J0YW50O1xuXHRcdFx0XHR9XG5cdFx0XHRgO1xuXHRcdH1cblx0XHRpZiAoc3R5bGUuYm9yZGVyU3R5bGUgPT09ICdkb3VibGUnKSB7XG5cdFx0XHRyZXR1cm4gYCR7cmVzZXR9XG5cdFx0XHRcdCR7c2VsZWN0b3J9OjphZnRlciB7XG5cdFx0XHRcdFx0Ym9yZGVyLXRvcDogMCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdGhlaWdodDogY2FsYygodmFyKC0tcGxnLXNzLXRoaWNrbmVzcywgMXB4KSAqIDIpICsgdmFyKC0tcGxnLXNzLWRvdWJsZS1nYXAsIDJweCkpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDpcblx0XHRcdFx0XHRcdGxpbmVhci1ncmFkaWVudCh2YXIoLS1wbGctc3MtY29sb3IsIGN1cnJlbnRDb2xvcikgMCAwKSB0b3AgLyAxMDAlIHZhcigtLXBsZy1zcy10aGlja25lc3MsIDFweCkgbm8tcmVwZWF0LFxuXHRcdFx0XHRcdFx0bGluZWFyLWdyYWRpZW50KHZhcigtLXBsZy1zcy1jb2xvciwgY3VycmVudENvbG9yKSAwIDApIGJvdHRvbSAvIDEwMCUgdmFyKC0tcGxnLXNzLXRoaWNrbmVzcywgMXB4KSBuby1yZXBlYXQgIWltcG9ydGFudDtcblx0XHRcdFx0fVxuXHRcdFx0YDtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc2V0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7U2VwYXJhdG9yU3R5bGV9IHN0eWxlXG5cdCAqL1xuXHRfY3NzVmFyQmxvY2soc3R5bGUpIHtcblx0XHRjb25zdCB2YXJzID0gdGhpcy5fc3R5bGVWYXJzKHN0eWxlKTtcblx0XHRyZXR1cm4gT2JqZWN0LmVudHJpZXModmFycykubWFwKChba2V5LCB2YWx1ZV0pID0+IGAke2tleX06JHt2YWx1ZX07YCkuam9pbignJyk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtEcmFnRXZlbnR9IGV2ZW50XG5cdCAqL1xuXHRfb25EcmFnU3RhcnQoZXZlbnQpIHtcblx0XHRpZiAoIShldmVudC50YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSkgcmV0dXJuO1xuXHRcdGNvbnN0IHJvdyA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KGAke0NPTExFQ1RJT05fUk9XX1NFTEVDVE9SfVske01BUktfQVRUUn09XCIxXCJdYCk7XG5cdFx0aWYgKCEocm93IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSByZXR1cm47XG5cdFx0Y29uc3QgZ3VpZCA9IHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ3VpZCcpO1xuXHRcdGlmICghZ3VpZCB8fCAhdGhpcy5fc2VwYXJhdG9ycy5oYXMoZ3VpZCkpIHJldHVybjtcblxuXHRcdHRoaXMuX2RyYWdSb3cgPSByb3c7XG5cdFx0dGhpcy5fZHJhZ0d1aWQgPSBndWlkO1xuXHRcdHJvdy5jbGFzc0xpc3QuYWRkKCdwbGctc2lkZWJhci1zZXBlcmF0b3JzLWRyYWdnaW5nJyk7XG5cdFx0aWYgKGV2ZW50LmRhdGFUcmFuc2Zlcikge1xuXHRcdFx0ZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG5cdFx0XHR0cnkgeyBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGd1aWQpOyB9IGNhdGNoIHt9XG5cdFx0fVxuXHRcdHRoaXMuX3JlY29yZERyYWdQb2ludChldmVudCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtEcmFnRXZlbnR9IGV2ZW50XG5cdCAqL1xuXHRfb25EcmFnKGV2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLl9kcmFnR3VpZCB8fCAhdGhpcy5fZHJhZ1JvdykgcmV0dXJuO1xuXHRcdHRoaXMuX3JlY29yZERyYWdQb2ludChldmVudCk7XG5cdFx0aWYgKHRoaXMuX2lzUG9pbnRPdXRzaWRlU2lkZWJhcih0aGlzLl9sYXN0RHJhZ1BvaW50LngsIHRoaXMuX2xhc3REcmFnUG9pbnQueSkpIHtcblx0XHRcdHRoaXMuX2JlZ2luSG9sZCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9jYW5jZWxIb2xkKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVtb3ZlXG5cdCAqL1xuXHRhc3luYyBfZmluaXNoRHJhZyhyZW1vdmUpIHtcblx0XHRjb25zdCBndWlkID0gdGhpcy5fZHJhZ0d1aWQ7XG5cdFx0Y29uc3QgcG9pbnQgPSB7IC4uLnRoaXMuX2xhc3REcmFnUG9pbnQgfTtcblx0XHRpZiAodGhpcy5fZHJhZ1JvdykgdGhpcy5fZHJhZ1Jvdy5jbGFzc0xpc3QucmVtb3ZlKCdwbGctc2lkZWJhci1zZXBlcmF0b3JzLWRyYWdnaW5nJyk7XG5cdFx0dGhpcy5fZHJhZ1JvdyA9IG51bGw7XG5cdFx0dGhpcy5fZHJhZ0d1aWQgPSBudWxsO1xuXHRcdHRoaXMuX2NhbmNlbEhvbGQoKTtcblx0XHRpZiAoIXJlbW92ZSB8fCAhZ3VpZCkgcmV0dXJuO1xuXG5cdFx0dGhpcy5fcG9vZihwb2ludC54LCBwb2ludC55KTtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGx1Z2luID0gdGhpcy5kYXRhLmdldFBsdWdpbkJ5R3VpZChndWlkKTtcblx0XHRcdGlmIChwbHVnaW4gJiYgcGx1Z2luLnRyYXNoUGx1Z2luKSBwbHVnaW4udHJhc2hQbHVnaW4oKTtcblx0XHRcdHRoaXMuX3NlcGFyYXRvcnMuZGVsZXRlKGd1aWQpO1xuXHRcdFx0aWYgKHRoaXMuX2FjdGl2ZU92ZXJyaWRlR3VpZCA9PT0gZ3VpZCkgdGhpcy5fYWN0aXZlT3ZlcnJpZGVHdWlkID0gbnVsbDtcblx0XHRcdHRoaXMuX2hpZGVIb3ZlckFjdGlvbk92ZXJsYXkoKTtcblx0XHRcdHRoaXMuX2hpZGVBY3RpdmVBY3Rpb25PdmVybGF5KCk7XG5cdFx0XHR0aGlzLl93cml0ZVJ1bnRpbWVTdHlsZSgpO1xuXHRcdFx0dGhpcy5fc2NoZWR1bGVSZWZyZXNoKCk7XG5cdFx0XHR0aGlzLl9yZW5kZXJQYW5lbCgpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0dGhpcy5fdG9hc3QoJ0NvdWxkIG5vdCByZW1vdmUgc2VwYXJhdG9yLicpO1xuXHRcdH1cblx0fVxuXG5cdF9iZWdpbkhvbGQoKSB7XG5cdFx0aWYgKHRoaXMuX3JlbW92ZVRpbWVyIHx8ICF0aGlzLl9kcmFnR3VpZCkgcmV0dXJuO1xuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgncGxnLXNpZGViYXItc2VwZXJhdG9ycy1ob2xkaW5nJyk7XG5cdFx0dGhpcy5fc2hvd0hvbGRJbmRpY2F0b3IoKTtcblx0XHR0aGlzLl9yZW1vdmVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5fcmVtb3ZlVGltZXIgPSBudWxsO1xuXHRcdFx0dGhpcy5fZmluaXNoRHJhZyh0cnVlKTtcblx0XHR9LCBPVVRTSURFX0hPTERfTVMpO1xuXHR9XG5cblx0X2NhbmNlbEhvbGQoKSB7XG5cdFx0aWYgKHRoaXMuX3JlbW92ZVRpbWVyKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5fcmVtb3ZlVGltZXIpO1xuXHRcdFx0dGhpcy5fcmVtb3ZlVGltZXIgPSBudWxsO1xuXHRcdH1cblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3BsZy1zaWRlYmFyLXNlcGVyYXRvcnMtaG9sZGluZycpO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGctc2lkZWJhci1zZXBlcmF0b3JzLWhvbGQnKS5mb3JFYWNoKChub2RlKSA9PiBub2RlLnJlbW92ZSgpKTtcblx0fVxuXG5cdF9zaG93SG9sZEluZGljYXRvcigpIHtcblx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsZy1zaWRlYmFyLXNlcGVyYXRvcnMtaG9sZCcpKSByZXR1cm47XG5cdFx0Y29uc3QgaW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0aW5kaWNhdG9yLmNsYXNzTmFtZSA9ICdwbGctc2lkZWJhci1zZXBlcmF0b3JzLWhvbGQnO1xuXHRcdGluZGljYXRvci50ZXh0Q29udGVudCA9ICdIb2xkIHRvIHJlbW92ZSc7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbmRpY2F0b3IpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5XG5cdCAqL1xuXHRfcG9vZih4LCB5KSB7XG5cdFx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHJvb3QuY2xhc3NOYW1lID0gJ3BsZy1zaWRlYmFyLXNlcGVyYXRvcnMtcG9vZic7XG5cdFx0cm9vdC5zdHlsZS5sZWZ0ID0gYCR7TWF0aC5tYXgoMTIsIHggfHwgMjQpfXB4YDtcblx0XHRyb290LnN0eWxlLnRvcCA9IGAke01hdGgubWF4KDEyLCB5IHx8IDI0KX1weGA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSArPSAxKSB7XG5cdFx0XHRjb25zdCBiaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRiaXQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYW5nbGUnLCBgJHtpICogMzB9ZGVnYCk7XG5cdFx0XHRiaXQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZGlzdGFuY2UnLCBgJHsxOCArIChpICUgNCkgKiA1fXB4YCk7XG5cdFx0XHRyb290LmFwcGVuZENoaWxkKGJpdCk7XG5cdFx0fVxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiByb290LnJlbW92ZSgpLCA3MDApO1xuXHR9XG5cblx0X3NjaGVkdWxlUmVmcmVzaCgpIHtcblx0XHRpZiAodGhpcy5fcmVmcmVzaFRpbWVyKSByZXR1cm47XG5cdFx0dGhpcy5fcmVmcmVzaFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLl9yZWZyZXNoVGltZXIgPSBudWxsO1xuXHRcdFx0dGhpcy5fcmVmcmVzaFNlcGFyYXRvcnMoKTtcblx0XHR9LCA4MCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtNdXRhdGlvblJlY29yZFtdfSBtdXRhdGlvbnNcblx0ICovXG5cdF9vbk11dGF0aW9ucyhtdXRhdGlvbnMpIHtcblx0XHRpZiAodGhpcy5fcGFuZWxFbCAmJiBkb2N1bWVudC5jb250YWlucyh0aGlzLl9wYW5lbEVsKSkge1xuXHRcdFx0Y29uc3QgcGFuZWxFbCA9IHRoaXMuX3BhbmVsRWw7XG5cdFx0XHRjb25zdCB0b3VjaGVzT3V0c2lkZVBhbmVsID0gbXV0YXRpb25zLnNvbWUoKG11dGF0aW9uKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IG11dGF0aW9uLnRhcmdldDtcblx0XHRcdFx0aWYgKHRhcmdldCBpbnN0YW5jZW9mIE5vZGUgJiYgcGFuZWxFbC5jb250YWlucyh0YXJnZXQpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGZvciAoY29uc3Qgbm9kZSBvZiBtdXRhdGlvbi5hZGRlZE5vZGVzKSB7XG5cdFx0XHRcdFx0aWYgKHBhbmVsRWwuY29udGFpbnMobm9kZSkpIHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgcGFuZWxFbC5jb250YWlucyhub2RlKSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoY29uc3Qgbm9kZSBvZiBtdXRhdGlvbi5yZW1vdmVkTm9kZXMpIHtcblx0XHRcdFx0XHRpZiAocGFuZWxFbC5jb250YWlucyhub2RlKSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgRWxlbWVudCAmJiBwYW5lbEVsLmNvbnRhaW5zKG5vZGUpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9KTtcblx0XHRcdGlmICghdG91Y2hlc091dHNpZGVQYW5lbCkgcmV0dXJuO1xuXHRcdH1cblx0XHRpZiAodGhpcy5fc2VwYXJhdG9ycy5zaXplICYmIHRoaXMuX211dGF0aW9uc1RvdWNoU2lkZWJhclJvd3MobXV0YXRpb25zKSkge1xuXHRcdFx0dGhpcy5fbWFya1NpZGViYXJSb3dzKCk7XG5cdFx0fVxuXHRcdHRoaXMuX3NjaGVkdWxlUmVmcmVzaCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7TXV0YXRpb25SZWNvcmRbXX0gbXV0YXRpb25zXG5cdCAqL1xuXHRfbXV0YXRpb25zVG91Y2hTaWRlYmFyUm93cyhtdXRhdGlvbnMpIHtcblx0XHRmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0O1xuXHRcdFx0aWYgKHRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgdGFyZ2V0LmNsb3Nlc3QoUk9PVF9TRUxFQ1RPUikpIHJldHVybiB0cnVlO1xuXHRcdFx0Zm9yIChjb25zdCBub2RlIG9mIG11dGF0aW9uLmFkZGVkTm9kZXMpIHtcblx0XHRcdFx0aWYgKCEobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKG5vZGUubWF0Y2hlcyhDT0xMRUNUSU9OX1JPV19TRUxFQ1RPUikgfHwgbm9kZS5xdWVyeVNlbGVjdG9yKENPTExFQ1RJT05fUk9XX1NFTEVDVE9SKSB8fCBub2RlLmNsb3Nlc3QoUk9PVF9TRUxFQ1RPUikpIHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChjb25zdCBub2RlIG9mIG11dGF0aW9uLnJlbW92ZWROb2Rlcykge1xuXHRcdFx0XHRpZiAoIShub2RlIGluc3RhbmNlb2YgRWxlbWVudCkpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAobm9kZS5tYXRjaGVzKENPTExFQ1RJT05fUk9XX1NFTEVDVE9SKSB8fCBub2RlLnF1ZXJ5U2VsZWN0b3IoQ09MTEVDVElPTl9ST1dfU0VMRUNUT1IpIHx8IG5vZGUuY2xvc2VzdChST09UX1NFTEVDVE9SKSkgcmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGFzeW5jIF9yZWZyZXNoU2VwYXJhdG9ycygpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgYmVmb3JlID0gdGhpcy5fc2VwYXJhdG9yU25hcHNob3QodGhpcy5fc2VwYXJhdG9ycyk7XG5cdFx0XHRjb25zdCBjb2xsZWN0aW9ucyA9IGF3YWl0IHRoaXMuZGF0YS5nZXRBbGxDb2xsZWN0aW9ucygpO1xuXHRcdFx0LyoqIEB0eXBlIHtNYXA8c3RyaW5nLCBTZXBhcmF0b3JFbnRyeT59ICovXG5cdFx0XHRjb25zdCBuZXh0ID0gbmV3IE1hcCgpO1xuXHRcdFx0Zm9yIChjb25zdCBjb2xsZWN0aW9uIG9mIGNvbGxlY3Rpb25zIHx8IFtdKSB7XG5cdFx0XHRcdGNvbnN0IGNvbmYgPSBjb2xsZWN0aW9uICYmIGNvbGxlY3Rpb24uZ2V0Q29uZmlndXJhdGlvbiA/IGNvbGxlY3Rpb24uZ2V0Q29uZmlndXJhdGlvbigpIDogbnVsbDtcblx0XHRcdFx0aWYgKCFjb25mKSBjb250aW51ZTtcblx0XHRcdFx0Y29uc3QgbWFya2VyID0gdGhpcy5fcmVhZE1hcmtlcihjb25mKTtcblx0XHRcdFx0aWYgKCFtYXJrZXIgfHwgIWNvbGxlY3Rpb24uZ2V0R3VpZCkgY29udGludWU7XG5cdFx0XHRcdGNvbnN0IGd1aWQgPSBjb2xsZWN0aW9uLmdldEd1aWQoKTtcblx0XHRcdFx0aWYgKGNvbmYubmFtZSAhPT0gU0VQQVJBVE9SX0NPTExFQ1RJT05fTkFNRSAmJiAhdGhpcy5fbmFtZUZpeEd1aWRzLmhhcyhndWlkKSkge1xuXHRcdFx0XHRcdHRoaXMuX25hbWVGaXhHdWlkcy5hZGQoZ3VpZCk7XG5cdFx0XHRcdFx0dm9pZCB0aGlzLl9maXhTZXBhcmF0b3JDb2xsZWN0aW9uTmFtZShjb2xsZWN0aW9uLCBjb25mLCBndWlkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBzdHlsZSA9IHRoaXMuX3BlbmRpbmdTZXBhcmF0b3JTdHlsZXMuaGFzKGd1aWQpXG5cdFx0XHRcdFx0PyB0aGlzLl9wZW5kaW5nU2VwYXJhdG9yU3R5bGVzLmdldChndWlkKSB8fCBudWxsXG5cdFx0XHRcdFx0OiBtYXJrZXIuc3R5bGUgPyB0aGlzLl9ub3JtYWxpemVTdHlsZShtYXJrZXIuc3R5bGUpIDogbnVsbDtcblx0XHRcdFx0Y29uc3QgY29sbGFwc2VkU3R5bGUgPSB0aGlzLl9wZW5kaW5nQ29sbGFwc2VkU2VwYXJhdG9yU3R5bGVzLmhhcyhndWlkKVxuXHRcdFx0XHRcdD8gdGhpcy5fcGVuZGluZ0NvbGxhcHNlZFNlcGFyYXRvclN0eWxlcy5nZXQoZ3VpZCkgfHwgbnVsbFxuXHRcdFx0XHRcdDogbWFya2VyLmNvbGxhcHNlZFN0eWxlID8gdGhpcy5fbm9ybWFsaXplU3R5bGUobWFya2VyLmNvbGxhcHNlZFN0eWxlKSA6IHN0eWxlO1xuXHRcdFx0XHRuZXh0LnNldChndWlkLCB7XG5cdFx0XHRcdFx0Y29sbGVjdGlvbixcblx0XHRcdFx0XHRndWlkLFxuXHRcdFx0XHRcdG5hbWU6IGNvbmYubmFtZSB8fCBjb2xsZWN0aW9uLmdldE5hbWUoKSB8fCAnU2VwYXJhdG9yJyxcblx0XHRcdFx0XHRzdHlsZSxcblx0XHRcdFx0XHRjb2xsYXBzZWRTdHlsZSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9zZXBhcmF0b3JzID0gbmV4dDtcblx0XHRcdGlmICh0aGlzLl9hY3RpdmVPdmVycmlkZUd1aWQgJiYgIXRoaXMuX3NlcGFyYXRvcnMuaGFzKHRoaXMuX2FjdGl2ZU92ZXJyaWRlR3VpZCkpIHRoaXMuX2FjdGl2ZU92ZXJyaWRlR3VpZCA9IG51bGw7XG5cdFx0XHR0aGlzLl9tYXJrU2lkZWJhclJvd3MoKTtcblx0XHRcdHRoaXMuX3dyaXRlUnVudGltZVN0eWxlKCk7XG5cdFx0XHRpZiAoYmVmb3JlICE9PSB0aGlzLl9zZXBhcmF0b3JTbmFwc2hvdChuZXh0KSkgdGhpcy5fcmVuZGVyUGFuZWwoKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHRoaXMuX21hcmtTaWRlYmFyUm93cygpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge01hcDxzdHJpbmcsIFNlcGFyYXRvckVudHJ5Pn0gbWFwXG5cdCAqL1xuXHRfc2VwYXJhdG9yU25hcHNob3QobWFwKSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20obWFwLnZhbHVlcygpKVxuXHRcdFx0Lm1hcCgoZW50cnkpID0+IGAke2VudHJ5Lmd1aWR9OiR7ZW50cnkubmFtZX06JHtKU09OLnN0cmluZ2lmeShlbnRyeS5zdHlsZSB8fCBudWxsKX06JHtKU09OLnN0cmluZ2lmeShlbnRyeS5jb2xsYXBzZWRTdHlsZSB8fCBudWxsKX1gKVxuXHRcdFx0LnNvcnQoKVxuXHRcdFx0LmpvaW4oJ3wnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge1BsdWdpbkNvbGxlY3Rpb25BUEl9IGNvbGxlY3Rpb25cblx0ICogQHBhcmFtIHtQbHVnaW5Db25maWd1cmF0aW9ufSBjb25mXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBndWlkXG5cdCAqL1xuXHRhc3luYyBfZml4U2VwYXJhdG9yQ29sbGVjdGlvbk5hbWUoY29sbGVjdGlvbiwgY29uZiwgZ3VpZCkge1xuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBjb2xsZWN0aW9uLnNhdmVDb25maWd1cmF0aW9uKHtcblx0XHRcdFx0Li4uY29uZixcblx0XHRcdFx0bmFtZTogU0VQQVJBVE9SX0NPTExFQ1RJT05fTkFNRSxcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0dGhpcy5fbmFtZUZpeEd1aWRzLmRlbGV0ZShndWlkKTtcblx0XHR9XG5cdH1cblxuXHRfbWFya1NpZGViYXJSb3dzKCkge1xuXHRcdGNvbnN0IHBhbmVsT3BlbiA9IHRoaXMuX2lzUGFuZWxPcGVuKCk7XG5cdFx0Y29uc3QgYWN0aXZlR3VpZHMgPSBuZXcgU2V0KHRoaXMuX3NlcGFyYXRvcnMua2V5cygpKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHtNQVJLX0FUVFJ9XWApLmZvckVhY2goKG5vZGUpID0+IHtcblx0XHRcdGlmICghKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybjtcblx0XHRcdGNvbnN0IGd1aWQgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1ndWlkJyk7XG5cdFx0XHRpZiAoZ3VpZCAmJiBhY3RpdmVHdWlkcy5oYXMoZ3VpZCkpIHJldHVybjtcblx0XHRcdG5vZGUucmVtb3ZlQXR0cmlidXRlKE1BUktfQVRUUik7XG5cdFx0XHRub2RlLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wbGctc2lkZWJhci1zZXBlcmF0b3JzLXN0eWxlJyk7XG5cdFx0XHRub2RlLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wbGctc2lkZWJhci1zZXBlcmF0b3JzLWFjdGl2ZScpO1xuXHRcdH0pO1xuXHRcdGlmICghcGFuZWxPcGVuKSB7XG5cdFx0XHR0aGlzLl9oaWRlSG92ZXJBY3Rpb25PdmVybGF5KCk7XG5cdFx0XHR0aGlzLl9oaWRlQWN0aXZlQWN0aW9uT3ZlcmxheSgpO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IFtndWlkLCBlbnRyeV0gb2YgdGhpcy5fc2VwYXJhdG9ycy5lbnRyaWVzKCkpIHtcblx0XHRcdGNvbnN0IHNhZmVHdWlkID0gdGhpcy5fY3NzRXNjYXBlKGd1aWQpO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtDT0xMRUNUSU9OX1JPV19TRUxFQ1RPUn1bZGF0YS1ndWlkPVwiJHtzYWZlR3VpZH1cIl1gKS5mb3JFYWNoKChub2RlKSA9PiB7XG5cdFx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZShNQVJLX0FUVFIsICcxJyk7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxnLXNpZGViYXItc2VwZXJhdG9ycy1zdHlsZScsIChlbnRyeS5zdHlsZSB8fCB0aGlzLl9kZWZhdWx0U3R5bGUpLmJvcmRlclN0eWxlKTtcblx0XHRcdFx0XHRpZiAocGFuZWxPcGVuICYmIHRoaXMuX2FjdGl2ZU92ZXJyaWRlR3VpZCA9PT0gZ3VpZCkgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxnLXNpZGViYXItc2VwZXJhdG9ycy1hY3RpdmUnLCAnMScpO1xuXHRcdFx0XHRcdGVsc2Ugbm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtcGxnLXNpZGViYXItc2VwZXJhdG9ycy1hY3RpdmUnKTtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBwYW5lbE9wZW4gPyAnRWRpdCBvciBkZWxldGUgdGhpcyBzZXBhcmF0b3InIDogJ1NpZGViYXIgc2VwYXJhdG9yJyk7XG5cdFx0XHRcdFx0aWYgKHBhbmVsT3BlbikgdGhpcy5fZW5zdXJlU2lkZWJhckFjdGlvbkJ1dHRvbnMobm9kZSwgZ3VpZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAocGFuZWxPcGVuKSB0aGlzLl9zaG93QWN0aXZlQWN0aW9uT3ZlcmxheSgpO1xuXHRcdGVsc2UgdGhpcy5faGlkZUFjdGl2ZUFjdGlvbk92ZXJsYXkoKTtcblx0fVxuXG5cdF9pc1BhbmVsT3BlbigpIHtcblx0XHRyZXR1cm4gISEodGhpcy5fcGFuZWxFbCAmJiBkb2N1bWVudC5jb250YWlucyh0aGlzLl9wYW5lbEVsKSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcm93XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBndWlkXG5cdCAqL1xuXHRfZW5zdXJlU2lkZWJhckFjdGlvbkJ1dHRvbnMocm93LCBndWlkKSB7XG5cdFx0aWYgKHJvdy5kYXRhc2V0LnBsZ1NpZGViYXJTZXBlcmF0b3JzQWN0aW9uc0JvdW5kID09PSAnMScpIHJldHVybjtcblx0XHRyb3cuZGF0YXNldC5wbGdTaWRlYmFyU2VwZXJhdG9yc0FjdGlvbnNCb3VuZCA9ICcxJztcblx0XHRjb25zdCBzaG93ID0gKCkgPT4gdGhpcy5fc2hvd0hvdmVyQWN0aW9uT3ZlcmxheShyb3csIHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ3VpZCcpIHx8IGd1aWQpO1xuXHRcdHJvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgc2hvdyk7XG5cdFx0cm93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBzaG93KTtcblx0XHRyb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHRoaXMuX3NjaGVkdWxlSGlkZUhvdmVyQWN0aW9uT3ZlcmxheSgpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBCdWlsZCBhIGZyZXNoIGFjdGlvbi1vdmVybGF5IGVsZW1lbnQgKGVkaXQgKyB0cmFzaCBidXR0b25zKS4gVHdvXG5cdCAqIHNlcGFyYXRlIG92ZXJsYXlzIHVzZSB0aGlzOiBhIHRyYW5zaWVudCBgaG92ZXJgIG92ZXJsYXkgdGhhdCBmb2xsb3dzXG5cdCAqIHRoZSBjdXJzb3IsIGFuZCBhIHBlcnNpc3RlbnQgYGFjdGl2ZWAgb3ZlcmxheSB0aGF0IHN0YXlzIG1vdW50ZWQgb25cblx0ICogdGhlIGN1cnJlbnRseS1lZGl0ZWQgc2VwYXJhdG9yIHdoaWxlIHRoZSBwYW5lbCBpcyBvcGVuLiBCb3RoIGJlaGF2ZVxuXHQgKiBpZGVudGljYWxseSBmdW5jdGlvbmFsbHk7IGBpcy1hY3RpdmUtZWRpdGluZ2AgYWRkcyB0aGUgYnJlYXRoaW5nIHJpbmcuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBndWlkXG5cdCAqIEBwYXJhbSB7eyBhY3RpdmU6IGJvb2xlYW4gfX0gb3B0c1xuXHQgKi9cblx0X2J1aWxkQWN0aW9uT3ZlcmxheShndWlkLCB7IGFjdGl2ZSB9KSB7XG5cdFx0Y29uc3QgZWRpdCA9IHRoaXMuX3NpZGViYXJBY3Rpb25CdXR0b24oJ0VkaXQgc2VwYXJhdG9yJywgJ3RpLXBlbmNpbCcsIEVESVRfQlVUVE9OX0NMQVNTKTtcblx0XHRjb25zdCBkZWwgPSB0aGlzLl9zaWRlYmFyQWN0aW9uQnV0dG9uKCdEZWxldGUgc2VwYXJhdG9yJywgJ3RpLXRyYXNoJywgREVMRVRFX0JVVFRPTl9DTEFTUyk7XG5cdFx0Y29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdG92ZXJsYXkuY2xhc3NOYW1lID0gQUNUSU9OX09WRVJMQVlfQ0xBU1MgKyAoYWN0aXZlID8gJyBpcy1hY3RpdmUtZWRpdGluZycgOiAnJyk7XG5cdFx0b3ZlcmxheS5kYXRhc2V0Lmd1aWQgPSBndWlkO1xuXHRcdG92ZXJsYXkuYXBwZW5kKGVkaXQsIGRlbCk7XG5cdFx0ZWRpdC5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR0aGlzLl9hY3RpdmVPdmVycmlkZUd1aWQgPSBndWlkO1xuXHRcdFx0Y29uc3QgZW50cnkgPSB0aGlzLl9zZXBhcmF0b3JzLmdldChndWlkKTtcblx0XHRcdGlmIChlbnRyeSAmJiAhZW50cnkuc3R5bGUpIGVudHJ5LnN0eWxlID0gdGhpcy5fbm9ybWFsaXplU3R5bGUodGhpcy5fZGVmYXVsdFN0eWxlKTtcblx0XHRcdGlmIChlbnRyeSAmJiAhZW50cnkuY29sbGFwc2VkU3R5bGUpIGVudHJ5LmNvbGxhcHNlZFN0eWxlID0gZW50cnkuc3R5bGUgPyB0aGlzLl9ub3JtYWxpemVTdHlsZShlbnRyeS5zdHlsZSkgOiB0aGlzLl9ub3JtYWxpemVTdHlsZSh0aGlzLl9kZWZhdWx0U3R5bGUpO1xuXHRcdFx0dGhpcy5fcmVuZGVyUGFuZWwoKTtcblx0XHRcdHRoaXMuX21hcmtTaWRlYmFyUm93cygpO1xuXHRcdH07XG5cdFx0ZGVsLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdHZvaWQgdGhpcy5fZGVsZXRlU2VwYXJhdG9yKGd1aWQsIGRlbCk7XG5cdFx0fTtcblx0XHRyZXR1cm4gb3ZlcmxheTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByb3dcblx0ICogQHBhcmFtIHtzdHJpbmd9IGd1aWRcblx0ICovXG5cdF9zaG93SG92ZXJBY3Rpb25PdmVybGF5KHJvdywgZ3VpZCkge1xuXHRcdGlmICghdGhpcy5faXNQYW5lbE9wZW4oKSkgcmV0dXJuO1xuXHRcdC8vIFRoZSBhY3RpdmUgc2VwYXJhdG9yIGFscmVhZHkgaGFzIGEgcGVyc2lzdGVudCBvdmVybGF5OyBkb24ndFxuXHRcdC8vIG92ZXJsYXAgYSB0cmFuc2llbnQgaG92ZXIgb3ZlcmxheSBvbiB0b3Agb2YgaXQuXG5cdFx0aWYgKHRoaXMuX2FjdGl2ZU92ZXJyaWRlR3VpZCA9PT0gZ3VpZCkgcmV0dXJuO1xuXHRcdGlmICh0aGlzLl9ob3ZlckFjdGlvbk92ZXJsYXlIaWRlVGltZXIpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLl9ob3ZlckFjdGlvbk92ZXJsYXlIaWRlVGltZXIpO1xuXHRcdFx0dGhpcy5faG92ZXJBY3Rpb25PdmVybGF5SGlkZVRpbWVyID0gbnVsbDtcblx0XHR9XG5cdFx0bGV0IG92ZXJsYXkgPSB0aGlzLl9ob3ZlckFjdGlvbk92ZXJsYXlFbDtcblx0XHRpZiAoIW92ZXJsYXkgfHwgIWRvY3VtZW50LmNvbnRhaW5zKG92ZXJsYXkpIHx8IG92ZXJsYXkuZGF0YXNldC5ndWlkICE9PSBndWlkKSB7XG5cdFx0XHRpZiAob3ZlcmxheSkgb3ZlcmxheS5yZW1vdmUoKTtcblx0XHRcdG92ZXJsYXkgPSB0aGlzLl9idWlsZEFjdGlvbk92ZXJsYXkoZ3VpZCwgeyBhY3RpdmU6IGZhbHNlIH0pO1xuXHRcdFx0b3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5faG92ZXJBY3Rpb25PdmVybGF5SGlkZVRpbWVyKSB7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX2hvdmVyQWN0aW9uT3ZlcmxheUhpZGVUaW1lcik7XG5cdFx0XHRcdFx0dGhpcy5faG92ZXJBY3Rpb25PdmVybGF5SGlkZVRpbWVyID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB0aGlzLl9zY2hlZHVsZUhpZGVIb3ZlckFjdGlvbk92ZXJsYXkoKSk7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXHRcdFx0dGhpcy5faG92ZXJBY3Rpb25PdmVybGF5RWwgPSBvdmVybGF5O1xuXHRcdH1cblx0XHR0aGlzLl9wb3NpdGlvbkFjdGlvbk92ZXJsYXkob3ZlcmxheSwgcm93KTtcblx0fVxuXG5cdF9zY2hlZHVsZUhpZGVIb3ZlckFjdGlvbk92ZXJsYXkoKSB7XG5cdFx0aWYgKHRoaXMuX2hvdmVyQWN0aW9uT3ZlcmxheUhpZGVUaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMuX2hvdmVyQWN0aW9uT3ZlcmxheUhpZGVUaW1lcik7XG5cdFx0dGhpcy5faG92ZXJBY3Rpb25PdmVybGF5SGlkZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLl9ob3ZlckFjdGlvbk92ZXJsYXlIaWRlVGltZXIgPSBudWxsO1xuXHRcdFx0dGhpcy5faGlkZUhvdmVyQWN0aW9uT3ZlcmxheSgpO1xuXHRcdH0sIDYwMCk7XG5cdH1cblxuXHRfaGlkZUhvdmVyQWN0aW9uT3ZlcmxheSgpIHtcblx0XHRpZiAodGhpcy5faG92ZXJBY3Rpb25PdmVybGF5SGlkZVRpbWVyKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5faG92ZXJBY3Rpb25PdmVybGF5SGlkZVRpbWVyKTtcblx0XHRcdHRoaXMuX2hvdmVyQWN0aW9uT3ZlcmxheUhpZGVUaW1lciA9IG51bGw7XG5cdFx0fVxuXHRcdGlmICh0aGlzLl9ob3ZlckFjdGlvbk92ZXJsYXlFbCkge1xuXHRcdFx0dGhpcy5faG92ZXJBY3Rpb25PdmVybGF5RWwucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLl9ob3ZlckFjdGlvbk92ZXJsYXlFbCA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIE1vdW50L3JlZnJlc2ggdGhlIHBlcnNpc3RlbnQgb3ZlcmxheSBvbiB0aGUgYWN0aXZlbHktZWRpdGVkIHNlcGFyYXRvclxuXHQgKiByb3cuIFN0YXlzIHB1dCBubyBtYXR0ZXIgd2hlcmUgdGhlIHBvaW50ZXIgcm9hbXMuIEhpZGRlbiB3aGVuIHRoZVxuXHQgKiBwYW5lbCBjbG9zZXMgb3Igbm8gc2VwYXJhdG9yIGlzIGFjdGl2ZS5cblx0ICovXG5cdF9zaG93QWN0aXZlQWN0aW9uT3ZlcmxheSgpIHtcblx0XHRpZiAoIXRoaXMuX2lzUGFuZWxPcGVuKCkgfHwgIXRoaXMuX2FjdGl2ZU92ZXJyaWRlR3VpZCkge1xuXHRcdFx0dGhpcy5faGlkZUFjdGl2ZUFjdGlvbk92ZXJsYXkoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3Qgc2FmZUd1aWQgPSB0aGlzLl9jc3NFc2NhcGUodGhpcy5fYWN0aXZlT3ZlcnJpZGVHdWlkKTtcblx0XHRjb25zdCByb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke0NPTExFQ1RJT05fUk9XX1NFTEVDVE9SfVske01BUktfQVRUUn09XCIxXCJdW2RhdGEtZ3VpZD1cIiR7c2FmZUd1aWR9XCJdYCk7XG5cdFx0aWYgKCEocm93IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG5cdFx0XHR0aGlzLl9oaWRlQWN0aXZlQWN0aW9uT3ZlcmxheSgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRsZXQgb3ZlcmxheSA9IHRoaXMuX2FjdGl2ZUFjdGlvbk92ZXJsYXlFbDtcblx0XHRpZiAoIW92ZXJsYXkgfHwgIWRvY3VtZW50LmNvbnRhaW5zKG92ZXJsYXkpIHx8IG92ZXJsYXkuZGF0YXNldC5ndWlkICE9PSB0aGlzLl9hY3RpdmVPdmVycmlkZUd1aWQpIHtcblx0XHRcdGlmIChvdmVybGF5KSBvdmVybGF5LnJlbW92ZSgpO1xuXHRcdFx0b3ZlcmxheSA9IHRoaXMuX2J1aWxkQWN0aW9uT3ZlcmxheSh0aGlzLl9hY3RpdmVPdmVycmlkZUd1aWQsIHsgYWN0aXZlOiB0cnVlIH0pO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcblx0XHRcdHRoaXMuX2FjdGl2ZUFjdGlvbk92ZXJsYXlFbCA9IG92ZXJsYXk7XG5cdFx0fVxuXHRcdHRoaXMuX3Bvc2l0aW9uQWN0aW9uT3ZlcmxheShvdmVybGF5LCByb3cpO1xuXHRcdC8vIElmIGhvdmVyIGlzIHNpdHRpbmcgb24gdGhlIHNhbWUgcm93IGFzIHRoZSBhY3RpdmUgb25lLCBkcm9wIGl0LlxuXHRcdGlmICh0aGlzLl9ob3ZlckFjdGlvbk92ZXJsYXlFbCAmJiB0aGlzLl9ob3ZlckFjdGlvbk92ZXJsYXlFbC5kYXRhc2V0Lmd1aWQgPT09IHRoaXMuX2FjdGl2ZU92ZXJyaWRlR3VpZCkge1xuXHRcdFx0dGhpcy5faGlkZUhvdmVyQWN0aW9uT3ZlcmxheSgpO1xuXHRcdH1cblx0XHR0aGlzLl9lbnN1cmVSZXBvc2l0aW9uTGlzdGVuZXJzKCk7XG5cdH1cblxuXHRfaGlkZUFjdGl2ZUFjdGlvbk92ZXJsYXkoKSB7XG5cdFx0aWYgKHRoaXMuX2FjdGl2ZUFjdGlvbk92ZXJsYXlFbCkge1xuXHRcdFx0dGhpcy5fYWN0aXZlQWN0aW9uT3ZlcmxheUVsLnJlbW92ZSgpO1xuXHRcdFx0dGhpcy5fYWN0aXZlQWN0aW9uT3ZlcmxheUVsID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gb3ZlcmxheVxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByb3dcblx0ICovXG5cdF9wb3NpdGlvbkFjdGlvbk92ZXJsYXkob3ZlcmxheSwgcm93KSB7XG5cdFx0Y29uc3QgcmVjdCA9IHJvdy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRvdmVybGF5LnN0eWxlLmxlZnQgPSBgJHtNYXRoLnJvdW5kKHJlY3QucmlnaHQgKyA2KX1weGA7XG5cdFx0b3ZlcmxheS5zdHlsZS50b3AgPSBgJHtNYXRoLnJvdW5kKHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLyAyKX1weGA7XG5cdH1cblxuXHQvKipcblx0ICogS2VlcCBib3RoIG92ZXJsYXlzIHBvc2l0aW9uZWQgY29ycmVjdGx5IHdoZW4gdGhlIHNpZGViYXIgc2Nyb2xscyBvclxuXHQgKiB0aGUgd2luZG93IHJlc2l6ZXMuIEJvdW5kIG9uY2UsIHJlbW92ZWQgb24gdW5sb2FkLlxuXHQgKi9cblx0X2Vuc3VyZVJlcG9zaXRpb25MaXN0ZW5lcnMoKSB7XG5cdFx0aWYgKHRoaXMuX2JvdW5kUmVwb3NpdGlvbikgcmV0dXJuO1xuXHRcdGNvbnN0IHJlcG9zaXRpb24gPSAoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5fYWN0aXZlT3ZlcmxheVBvc2l0aW9uUmFmKSByZXR1cm47XG5cdFx0XHR0aGlzLl9hY3RpdmVPdmVybGF5UG9zaXRpb25SYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl9hY3RpdmVPdmVybGF5UG9zaXRpb25SYWYgPSBudWxsO1xuXHRcdFx0XHRpZiAodGhpcy5fYWN0aXZlQWN0aW9uT3ZlcmxheUVsICYmIHRoaXMuX2FjdGl2ZUFjdGlvbk92ZXJsYXlFbC5kYXRhc2V0Lmd1aWQpIHtcblx0XHRcdFx0XHRjb25zdCBzYWZlR3VpZCA9IHRoaXMuX2Nzc0VzY2FwZSh0aGlzLl9hY3RpdmVBY3Rpb25PdmVybGF5RWwuZGF0YXNldC5ndWlkKTtcblx0XHRcdFx0XHRjb25zdCByb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke0NPTExFQ1RJT05fUk9XX1NFTEVDVE9SfVske01BUktfQVRUUn09XCIxXCJdW2RhdGEtZ3VpZD1cIiR7c2FmZUd1aWR9XCJdYCk7XG5cdFx0XHRcdFx0aWYgKHJvdyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB0aGlzLl9wb3NpdGlvbkFjdGlvbk92ZXJsYXkodGhpcy5fYWN0aXZlQWN0aW9uT3ZlcmxheUVsLCByb3cpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLl9ob3ZlckFjdGlvbk92ZXJsYXlFbCAmJiB0aGlzLl9ob3ZlckFjdGlvbk92ZXJsYXlFbC5kYXRhc2V0Lmd1aWQpIHtcblx0XHRcdFx0XHRjb25zdCBzYWZlR3VpZCA9IHRoaXMuX2Nzc0VzY2FwZSh0aGlzLl9ob3ZlckFjdGlvbk92ZXJsYXlFbC5kYXRhc2V0Lmd1aWQpO1xuXHRcdFx0XHRcdGNvbnN0IHJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7Q09MTEVDVElPTl9ST1dfU0VMRUNUT1J9WyR7TUFSS19BVFRSfT1cIjFcIl1bZGF0YS1ndWlkPVwiJHtzYWZlR3VpZH1cIl1gKTtcblx0XHRcdFx0XHRpZiAocm93IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHRoaXMuX3Bvc2l0aW9uQWN0aW9uT3ZlcmxheSh0aGlzLl9ob3ZlckFjdGlvbk92ZXJsYXlFbCwgcm93KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHR0aGlzLl9ib3VuZFJlcG9zaXRpb24gPSByZXBvc2l0aW9uO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCByZXBvc2l0aW9uLCB0cnVlKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVwb3NpdGlvbik7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpY29uQ2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IGV4dHJhQ2xhc3Ncblx0ICovXG5cdF9zaWRlYmFyQWN0aW9uQnV0dG9uKHRpdGxlLCBpY29uQ2xhc3MsIGV4dHJhQ2xhc3MpIHtcblx0XHRjb25zdCBidXR0b25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdGJ1dHRvbkVsLnR5cGUgPSAnYnV0dG9uJztcblx0XHRidXR0b25FbC5jbGFzc05hbWUgPSBgJHtBQ1RJT05fQlVUVE9OX0NMQVNTfSAke2V4dHJhQ2xhc3N9YDtcblx0XHRidXR0b25FbC50aXRsZSA9IHRpdGxlO1xuXHRcdGJ1dHRvbkVsLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRpdGxlKTtcblx0XHRjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuXHRcdGljb24uY2xhc3NOYW1lID0gYHRpICR7aWNvbkNsYXNzfWA7XG5cdFx0aWNvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblx0XHRidXR0b25FbC5hcHBlbmRDaGlsZChpY29uKTtcblx0XHRyZXR1cm4gYnV0dG9uRWw7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICovXG5cdF9vblNlcGFyYXRvckFjdGl2YXRlKGV2ZW50KSB7XG5cdFx0aWYgKCEoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCkpIHJldHVybjtcblx0XHRjb25zdCByb3cgPSBldmVudC50YXJnZXQuY2xvc2VzdChgJHtDT0xMRUNUSU9OX1JPV19TRUxFQ1RPUn1bJHtNQVJLX0FUVFJ9PVwiMVwiXWApO1xuXHRcdGlmICghKHJvdyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuO1xuXHRcdGlmIChldmVudC50YXJnZXQuY2xvc2VzdChgLiR7QUNUSU9OX0JVVFRPTl9DTEFTU31gKSkgcmV0dXJuO1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IGd1aWRcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IG51bGx9IHNvdXJjZVxuXHQgKi9cblx0YXN5bmMgX2RlbGV0ZVNlcGFyYXRvcihndWlkLCBzb3VyY2UgPSBudWxsKSB7XG5cdFx0Y29uc3QgZW50cnkgPSB0aGlzLl9zZXBhcmF0b3JzLmdldChndWlkKTtcblx0XHRpZiAoIWVudHJ5KSByZXR1cm47XG5cdFx0aWYgKHNvdXJjZSkge1xuXHRcdFx0Y29uc3QgcmVjdCA9IHNvdXJjZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdHRoaXMuX3Bvb2YocmVjdC5sZWZ0ICsgcmVjdC53aWR0aCAvIDIsIHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLyAyKTtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBsdWdpbiA9IHRoaXMuZGF0YS5nZXRQbHVnaW5CeUd1aWQoZ3VpZCk7XG5cdFx0XHRpZiAocGx1Z2luICYmIHBsdWdpbi50cmFzaFBsdWdpbikgcGx1Z2luLnRyYXNoUGx1Z2luKCk7XG5cdFx0XHR0aGlzLl9zZXBhcmF0b3JzLmRlbGV0ZShndWlkKTtcblx0XHRcdGlmICh0aGlzLl9hY3RpdmVPdmVycmlkZUd1aWQgPT09IGd1aWQpIHRoaXMuX2FjdGl2ZU92ZXJyaWRlR3VpZCA9IG51bGw7XG5cdFx0XHR0aGlzLl9oaWRlSG92ZXJBY3Rpb25PdmVybGF5KCk7XG5cdFx0XHR0aGlzLl9oaWRlQWN0aXZlQWN0aW9uT3ZlcmxheSgpO1xuXHRcdFx0dGhpcy5fd3JpdGVSdW50aW1lU3R5bGUoKTtcblx0XHRcdHRoaXMuX21hcmtTaWRlYmFyUm93cygpO1xuXHRcdFx0dGhpcy5fcmVuZGVyUGFuZWwoKTtcblx0XHRcdHRoaXMuX3NjaGVkdWxlUmVmcmVzaCgpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0dGhpcy5fdG9hc3QoJ0NvdWxkIG5vdCBkZWxldGUgc2VwYXJhdG9yLicpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fVxuXHQgKi9cblx0YXN5bmMgX25leHRTZXBhcmF0b3JJbmRleCgpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgY29sbGVjdGlvbnMgPSBhd2FpdCB0aGlzLmRhdGEuZ2V0QWxsQ29sbGVjdGlvbnMoKTtcblx0XHRcdGxldCBjb3VudCA9IDA7XG5cdFx0XHRmb3IgKGNvbnN0IGNvbGxlY3Rpb24gb2YgY29sbGVjdGlvbnMgfHwgW10pIHtcblx0XHRcdFx0Y29uc3QgY29uZiA9IGNvbGxlY3Rpb24gJiYgY29sbGVjdGlvbi5nZXRDb25maWd1cmF0aW9uID8gY29sbGVjdGlvbi5nZXRDb25maWd1cmF0aW9uKCkgOiBudWxsO1xuXHRcdFx0XHRpZiAoY29uZiAmJiB0aGlzLl9yZWFkTWFya2VyKGNvbmYpKSBjb3VudCArPSAxO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvdW50ICsgMTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiB0aGlzLl9zZXBhcmF0b3JzLnNpemUgKyAxO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0RyYWdFdmVudH0gZXZlbnRcblx0ICovXG5cdF9yZWNvcmREcmFnUG9pbnQoZXZlbnQpIHtcblx0XHRpZiAoZXZlbnQuY2xpZW50WCB8fCBldmVudC5jbGllbnRZKSB7XG5cdFx0XHR0aGlzLl9sYXN0RHJhZ1BvaW50ID0geyB4OiBldmVudC5jbGllbnRYLCB5OiBldmVudC5jbGllbnRZIH07XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB4XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB5XG5cdCAqL1xuXHRfaXNQb2ludE91dHNpZGVTaWRlYmFyKHgsIHkpIHtcblx0XHRpZiAoIXggJiYgIXkpIHJldHVybiBmYWxzZTtcblx0XHRjb25zdCBzaWRlYmFycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChST09UX1NFTEVDVE9SKSkuZmlsdGVyKChub2RlKSA9PiBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpO1xuXHRcdGlmICghc2lkZWJhcnMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuICFzaWRlYmFycy5zb21lKChzaWRlYmFyKSA9PiB7XG5cdFx0XHRjb25zdCByZWN0ID0gc2lkZWJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdHJldHVybiB4ID49IHJlY3QubGVmdCAmJiB4IDw9IHJlY3QucmlnaHQgJiYgeSA+PSByZWN0LnRvcCAmJiB5IDw9IHJlY3QuYm90dG9tO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuXHQgKi9cblx0X2Nzc0VzY2FwZSh2YWx1ZSkge1xuXHRcdGlmICh3aW5kb3cuQ1NTICYmIHR5cGVvZiB3aW5kb3cuQ1NTLmVzY2FwZSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHdpbmRvdy5DU1MuZXNjYXBlKHZhbHVlKTtcblx0XHRyZXR1cm4gdmFsdWUucmVwbGFjZSgvW1wiXFxcXF0vZywgJ1xcXFwkJicpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG5cdCAqL1xuXHRfdG9hc3QobWVzc2FnZSkge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAodGhpcy51aS5hZGRUb2FzdGVyKSB0aGlzLnVpLmFkZFRvYXN0ZXIoeyB0aXRsZTogbWVzc2FnZSwgZGlzbWlzc2libGU6IHRydWUsIGF1dG9EZXN0cm95VGltZTogMjIwMCB9KTtcblx0XHR9IGNhdGNoIHt9XG5cdH1cblxuXHRfaW5qZWN0Q1NTKCkge1xuXHRcdHRoaXMudWkuaW5qZWN0Q1NTKGBcblx0XHRcdC5zaWRlYmFyLS1pY29ucyAke0NPTExFQ1RJT05fUk9XX1NFTEVDVE9SfVske01BUktfQVRUUn09XCIxXCJdIHtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG5cdFx0XHRcdG1pbi1oZWlnaHQ6IHZhcigtLXBsZy1zcy1oZWlnaHQsIDIwcHgpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGhlaWdodDogdmFyKC0tcGxnLXNzLWhlaWdodCwgMjBweCkgIWltcG9ydGFudDtcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcblx0XHRcdFx0cGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuXHRcdFx0XHRjdXJzb3I6IGdyYWI7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWRlZmF1bHQsICNjYmQ1ZTEpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMCAhaW1wb3J0YW50O1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMCAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXG5cdFx0XHQuc2lkZWJhci0taWNvbnMgJHtDT0xMRUNUSU9OX1JPV19TRUxFQ1RPUn1bJHtNQVJLX0FUVFJ9PVwiMVwiXTphY3RpdmUsXG5cdFx0XHQuc2lkZWJhci0taWNvbnMgJHtDT0xMRUNUSU9OX1JPV19TRUxFQ1RPUn1bJHtNQVJLX0FUVFJ9PVwiMVwiXS5wbGctc2lkZWJhci1zZXBlcmF0b3JzLWRyYWdnaW5nIHtcblx0XHRcdFx0Y3Vyc29yOiBncmFiYmluZztcblx0XHRcdH1cblxuXHRcdFx0LnNpZGViYXItLWljb25zICR7Q09MTEVDVElPTl9ST1dfU0VMRUNUT1J9WyR7TUFSS19BVFRSfT1cIjFcIl0gPiAqLFxuXHRcdFx0LnNpZGViYXItLWljb25zICR7Q09MTEVDVElPTl9ST1dfU0VMRUNUT1J9WyR7TUFSS19BVFRSfT1cIjFcIl0gLnNpZGViYXItaXRlbS1pY29uLFxuXHRcdFx0LnNpZGViYXItLWljb25zICR7Q09MTEVDVElPTl9ST1dfU0VMRUNUT1J9WyR7TUFSS19BVFRSfT1cIjFcIl0gLnNpZGViYXItaXRlbS1uYW1lLFxuXHRcdFx0LnNpZGViYXItLWljb25zICR7Q09MTEVDVElPTl9ST1dfU0VMRUNUT1J9WyR7TUFSS19BVFRSfT1cIjFcIl0gLnNpZGViYXItaXRlbS10aXRsZSxcblx0XHRcdC5zaWRlYmFyLS1pY29ucyAke0NPTExFQ1RJT05fUk9XX1NFTEVDVE9SfVske01BUktfQVRUUn09XCIxXCJdIC5zaWRlYmFyLWl0ZW0tdGV4dCxcblx0XHRcdC5zaWRlYmFyLS1pY29ucyAke0NPTExFQ1RJT05fUk9XX1NFTEVDVE9SfVske01BUktfQVRUUn09XCIxXCJdIC50aSB7XG5cdFx0XHRcdHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuXHRcdFx0XHRvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cblx0XHRcdC4ke0FDVElPTl9PVkVSTEFZX0NMQVNTfSB7XG5cdFx0XHRcdHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuXHRcdFx0XHR6LWluZGV4OiA5OTk5OTkgIWltcG9ydGFudDtcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuXHRcdFx0XHRnYXA6IDRweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRwYWRkaW5nOiA2cHggNHB4IDZweCAxNHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMTRweCAhaW1wb3J0YW50O1xuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgIWltcG9ydGFudDtcblx0XHRcdFx0cG9pbnRlci1ldmVudHM6IGF1dG8gIWltcG9ydGFudDtcblx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblx0XHRcdH1cblxuXHRcdFx0LiR7QUNUSU9OX09WRVJMQVlfQ0xBU1N9IC4ke0FDVElPTl9CVVRUT05fQ0xBU1N9IHtcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuXHRcdFx0XHR3aWR0aDogMjhweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRoZWlnaHQ6IDI4cHggIWltcG9ydGFudDtcblx0XHRcdFx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZGVmYXVsdCwgcmdiYSgxMjcsMTI3LDEyNywwLjI0KSkgIWltcG9ydGFudDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWJnLWRlZmF1bHQsIHJnYmEoMjAsMjAsMjAsMC44OCkpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWRlZmF1bHQsIGN1cnJlbnRDb2xvcikgIWltcG9ydGFudDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxICFpbXBvcnRhbnQ7XG5cdFx0XHRcdHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcblx0XHRcdFx0b3BhY2l0eTogMSAhaW1wb3J0YW50O1xuXHRcdFx0XHRwb2ludGVyLWV2ZW50czogYXV0byAhaW1wb3J0YW50O1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcblx0XHRcdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAxMjBtcyBlYXNlLW91dCwgYmFja2dyb3VuZC1jb2xvciAxMjBtcyBlYXNlLW91dCwgYm9yZGVyLWNvbG9yIDEyMG1zIGVhc2Utb3V0O1xuXHRcdFx0fVxuXG5cdFx0XHQuJHtBQ1RJT05fT1ZFUkxBWV9DTEFTU30gLiR7REVMRVRFX0JVVFRPTl9DTEFTU30ge1xuXHRcdFx0XHRjb2xvcjogdmFyKC0tdHBzLWRhbmdlciwgI2VmNDQ0NCkgIWltcG9ydGFudDtcblx0XHRcdH1cblxuXHRcdFx0QGtleWZyYW1lcyBwbGdTaWRlYmFyU2VwZXJhdG9yc0JyZWF0aGUge1xuXHRcdFx0XHQwJSwgMTAwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDAgdmFyKC0tbG9nby1jb2xvciwgdmFyKC0tYWNjZW50LWNvbG9yLCByZ2JhKDQsMjA5LDE3MSwwLjU1KSkpOyB9XG5cdFx0XHRcdDUwJSAgICAgIHsgYm94LXNoYWRvdzogMCAwIDAgNHB4IHRyYW5zcGFyZW50OyB9XG5cdFx0XHR9XG5cblx0XHRcdC4ke0FDVElPTl9PVkVSTEFZX0NMQVNTfS5pcy1hY3RpdmUtZWRpdGluZyAuJHtFRElUX0JVVFRPTl9DTEFTU30ge1xuXHRcdFx0XHRib3JkZXItY29sb3I6IHZhcigtLWxvZ28tY29sb3IsIHZhcigtLWFjY2VudC1jb2xvciwgcmdiYSg0LDIwOSwxNzEsMC44NSkpKSAhaW1wb3J0YW50O1xuXHRcdFx0XHRjb2xvcjogdmFyKC0tbG9nby1jb2xvciwgdmFyKC0tYWNjZW50LWNvbG9yLCByZ2JhKDQsMjA5LDE3MSwxKSkpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGFuaW1hdGlvbjogcGxnU2lkZWJhclNlcGVyYXRvcnNCcmVhdGhlIDEuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG5cdFx0XHR9XG5cblx0XHRcdC4ke0FDVElPTl9PVkVSTEFZX0NMQVNTfS5pcy1hY3RpdmUtZWRpdGluZyAuJHtBQ1RJT05fQlVUVE9OX0NMQVNTfTpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1sb2dvLWNvbG9yLCB2YXIoLS1hY2NlbnQtY29sb3IsIHJnYmEoNCwyMDksMTcxLDEpKSkgMTYlLCB2YXIoLS1iZy1kZWZhdWx0LCByZ2JhKDIwLDIwLDIwLDAuODgpKSkgIWltcG9ydGFudDtcblx0XHRcdH1cblxuXHRcdFx0LiR7QUNUSU9OX09WRVJMQVlfQ0xBU1N9IC4ke0FDVElPTl9CVVRUT05fQ0xBU1N9IC50aSB7XG5cdFx0XHRcdHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcblx0XHRcdFx0b3BhY2l0eTogMSAhaW1wb3J0YW50O1xuXHRcdFx0XHRwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuXHRcdFx0XHRjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuXHRcdFx0XHRmb250LXNpemU6IGluaGVyaXQgIWltcG9ydGFudDtcblx0XHRcdH1cblxuXHRcdFx0LiR7QUNUSU9OX09WRVJMQVlfQ0xBU1N9IC4ke0FDVElPTl9CVVRUT05fQ0xBU1N9OmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIsIHJnYmEoMTI3LDEyNywxMjcsMC4xMikpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWhvdmVyLCByZ2JhKDEyNywxMjcsMTI3LDAuNDIpKSAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXG5cdFx0XHQuJHtBQ1RJT05fT1ZFUkxBWV9DTEFTU30gLiR7REVMRVRFX0JVVFRPTl9DTEFTU306aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjE2KSAhaW1wb3J0YW50O1xuXHRcdFx0XHRib3JkZXItY29sb3I6IHJnYmEoMjM5LCA2OCwgNjgsIDAuNDIpICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cblx0XHRcdC5zaWRlYmFyLS1pY29ucyAke0NPTExFQ1RJT05fUk9XX1NFTEVDVE9SfVske01BUktfQVRUUn09XCIxXCJdOjphZnRlciB7XG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGxlZnQ6IHZhcigtLXBsZy1zcy1sZWZ0LCA1MCUpO1xuXHRcdFx0XHRyaWdodDogdmFyKC0tcGxnLXNzLXJpZ2h0LCBhdXRvKTtcblx0XHRcdFx0dG9wOiA1MCU7XG5cdFx0XHRcdHdpZHRoOiBtaW4odmFyKC0tcGxnLXNzLXdpZHRoLCA4OCUpLCBjYWxjKDEwMCUgLSAodmFyKC0tcGxnLXNzLWluc2V0LCAxMHB4KSAqIDIpKSk7XG5cdFx0XHRcdGJvcmRlci10b3A6IHZhcigtLXBsZy1zcy10aGlja25lc3MsIDFweCkgdmFyKC0tcGxnLXNzLXN0eWxlLCBzb2xpZCkgdmFyKC0tcGxnLXNzLWNvbG9yLCBjdXJyZW50Q29sb3IpO1xuXHRcdFx0XHRvcGFjaXR5OiB2YXIoLS1wbGctc3Mtb3BhY2l0eSwgMC44Nik7XG5cdFx0XHRcdHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcblx0XHRcdFx0dHJhbnNmb3JtOiB2YXIoLS1wbGctc3MtdHJhbnNmb3JtLCB0cmFuc2xhdGUoLTUwJSwgLTUwJSkpO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBvcGFjaXR5IDEyMG1zIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMTIwbXMgZWFzZS1vdXQ7XG5cdFx0XHR9XG5cblx0XHRcdC5zaWRlYmFyLS1pY29ucyAke0NPTExFQ1RJT05fUk9XX1NFTEVDVE9SfVske01BUktfQVRUUn09XCIxXCJdOmhvdmVyOjphZnRlciB7XG5cdFx0XHRcdG9wYWNpdHk6IHZhcigtLXBsZy1zcy1vcGFjaXR5LCAxKTtcblx0XHRcdFx0dHJhbnNmb3JtOiB2YXIoLS1wbGctc3MtaG92ZXItdHJhbnNmb3JtLCB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGVYKDEuMDIpKTtcblx0XHRcdH1cblxuXHRcdFx0LiR7QUNUSU9OX09WRVJMQVlfQ0xBU1N9LmlzLWFjdGl2ZS1lZGl0aW5nIC4ke0VESVRfQlVUVE9OX0NMQVNTfSB7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXRwcy1hY2NlbnQsIHZhcigtLWFjY2VudC1jb2xvciwgY3VycmVudENvbG9yKSkgNTUlLCB0cmFuc3BhcmVudCkgIWltcG9ydGFudDtcblx0XHRcdFx0YmFja2dyb3VuZDogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXRwcy1hY2NlbnQsIHZhcigtLWFjY2VudC1jb2xvciwgY3VycmVudENvbG9yKSkgMTglLCB2YXIoLS1iZy1kZWZhdWx0LCByZ2JhKDIwLDIwLDIwLDAuODgpKSkgIWltcG9ydGFudDtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRwcy1hY2NlbnQsIHZhcigtLWFjY2VudC1jb2xvciwgdmFyKC0tdGV4dC1kZWZhdWx0LCBjdXJyZW50Q29sb3IpKSkgIWltcG9ydGFudDtcblx0XHRcdFx0YW5pbWF0aW9uOiBwbGctc2lkZWJhci1zZXBlcmF0b3JzLWVkaXQtaGVhcnRiZWF0IDE2MDBtcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcblx0XHRcdH1cblxuXHRcdFx0LnNpZGViYXItLWljb25zICR7Q09MTEVDVElPTl9ST1dfU0VMRUNUT1J9WyR7TUFSS19BVFRSfT1cIjFcIl0ucGxnLXNpZGViYXItc2VwZXJhdG9ycy1kcmFnZ2luZyB7XG5cdFx0XHRcdG9wYWNpdHk6IDAuNTg7XG5cdFx0XHR9XG5cblx0XHRcdC5zaWRlYmFyLS1pY29ucyAke0NPTExFQ1RJT05fUk9XX1NFTEVDVE9SfVske01BUktfQVRUUn09XCIxXCJdW2RhdGEtcGxnLXNpZGViYXItc2VwZXJhdG9ycy1zdHlsZT1cImdyYWRpZW50XCJdOjphZnRlciB7XG5cdFx0XHRcdGJvcmRlci10b3A6IDA7XG5cdFx0XHRcdGhlaWdodDogbWF4KHZhcigtLXBsZy1zcy10aGlja25lc3MsIDFweCksIDFweCk7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLXBsZy1zcy1ncmFkaWVudCk7XG5cdFx0XHR9XG5cblx0XHRcdC5zaWRlYmFyLS1pY29ucyAke0NPTExFQ1RJT05fUk9XX1NFTEVDVE9SfVske01BUktfQVRUUn09XCIxXCJdW2RhdGEtcGxnLXNpZGViYXItc2VwZXJhdG9ycy1zdHlsZT1cImRvdWJsZVwiXTo6YWZ0ZXIge1xuXHRcdFx0XHRib3JkZXItdG9wOiAwO1xuXHRcdFx0XHRoZWlnaHQ6IGNhbGMoKHZhcigtLXBsZy1zcy10aGlja25lc3MsIDFweCkgKiAyKSArIHZhcigtLXBsZy1zcy1kb3VibGUtZ2FwLCAycHgpKTtcblx0XHRcdFx0YmFja2dyb3VuZDpcblx0XHRcdFx0XHRsaW5lYXItZ3JhZGllbnQodmFyKC0tcGxnLXNzLWNvbG9yLCBjdXJyZW50Q29sb3IpIDAgMCkgdG9wIC8gMTAwJSB2YXIoLS1wbGctc3MtdGhpY2tuZXNzLCAxcHgpIG5vLXJlcGVhdCxcblx0XHRcdFx0XHRsaW5lYXItZ3JhZGllbnQodmFyKC0tcGxnLXNzLWNvbG9yLCBjdXJyZW50Q29sb3IpIDAgMCkgYm90dG9tIC8gMTAwJSB2YXIoLS1wbGctc3MtdGhpY2tuZXNzLCAxcHgpIG5vLXJlcGVhdDtcblx0XHRcdH1cblxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19lZGl0b3ItY2FyZCxcblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fZW1wdHktc3RhdGUsXG5cdFx0XHQuJHtQQU5FTF9DTEFTU30gLnRwcy1zZWN0aW9uIHtcblx0XHRcdFx0bWF4LXdpZHRoOiAxMTIwcHg7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fdG9wLWFjdGlvbnMge1xuXHRcdFx0XHRtYXgtd2lkdGg6IDExMjBweDtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRtYXJnaW46IC00cHggMCAxMnB4O1xuXHRcdFx0fVxuXG5cdFx0XHQuJHtQQU5FTF9DTEFTU31fX3ByaW1hcnkge1xuXHRcdFx0XHRoZWlnaHQ6IDI4cHg7XG5cdFx0XHRcdHBhZGRpbmc6IDAgMTBweDtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjY2VudC1jb2xvciwgY3VycmVudENvbG9yKSA1MCUsIHRyYW5zcGFyZW50KTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tYWNjZW50LWNvbG9yLCBjdXJyZW50Q29sb3IpIDE2JSwgdHJhbnNwYXJlbnQpO1xuXHRcdFx0XHRjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLCB2YXIoLS10ZXh0LWRlZmF1bHQsIGN1cnJlbnRDb2xvcikpO1xuXHRcdFx0XHRmb250OiBpbmhlcml0O1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2NTA7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdH1cblxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19wcmltYXJ5OmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZDogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjY2VudC1jb2xvciwgY3VycmVudENvbG9yKSAyNCUsIHRyYW5zcGFyZW50KTtcblx0XHRcdH1cblxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19wcmV2aWV3IHtcblx0XHRcdFx0bWF4LXdpZHRoOiAxMTIwcHg7XG5cdFx0XHRcdGhlaWdodDogNDBweDtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiB2YXIoLS1wbGctc3MtanVzdGlmeSwgY2VudGVyKTtcblx0XHRcdFx0cGFkZGluZy1pbmxpbmU6IHZhcigtLXBsZy1zcy1pbnNldCwgMTBweCk7XG5cdFx0XHRcdG1hcmdpbjogMCAwIDE0cHg7XG5cdFx0XHRcdGJvcmRlcjogMDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMDtcblx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fcHJldmlldy1yYWlsIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiB2YXIoLS1wbGctc3MtanVzdGlmeSwgY2VudGVyKTtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfSAudHBzLXBsdWdpbi1oZWFkZXIgKyAuJHtQQU5FTF9DTEFTU31fX3ByZXZpZXcgKyAudHBzLXNlY3Rpb24sXG5cdFx0XHQuJHtQQU5FTF9DTEFTU30gLnRwcy1wbHVnaW4taGVhZGVyICsgLiR7UEFORUxfQ0xBU1N9X19wcmV2aWV3ICsgLiR7UEFORUxfQ0xBU1N9X190b3AtYWN0aW9ucyArIC50cHMtc2VjdGlvbiB7XG5cdFx0XHRcdHBhZGRpbmctdG9wOiAwO1xuXHRcdFx0XHRib3JkZXItdG9wOiAwO1xuXHRcdFx0fVxuXG5cdFx0XHQuJHtQQU5FTF9DTEFTU30gLnRwcy1zZWN0aW9uICsgLnRwcy1zZWN0aW9uIHtcblx0XHRcdFx0bWFyZ2luLXRvcDogMTZweDtcblx0XHRcdFx0cGFkZGluZy10b3A6IDE2cHg7XG5cdFx0XHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS10cHMtZGl2aWRlciwgdmFyKC0tYm9yZGVyLWRlZmF1bHQsIHJnYmEoMTI3LDEyNywxMjcsMC4xMikpKTtcblx0XHRcdH1cblxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9IC50cHMtc2VjdGlvbi1oZWFkZXIge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRnYXA6IDEwcHg7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRtaW4taGVpZ2h0OiAzNHB4O1xuXHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdGJvcmRlcjogMDtcblx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdGNvbG9yOiBpbmhlcml0O1xuXHRcdFx0XHRmb250OiBpbmhlcml0O1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXG5cdFx0XHQuJHtQQU5FTF9DTEFTU30gLnRwcy1zZWN0aW9uLWhlYWRlcjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRcdFx0fVxuXG5cdFx0XHQuJHtQQU5FTF9DTEFTU30gLnRwcy1zZWN0aW9uLWhlYWRlcjphY3RpdmUsXG5cdFx0XHQuJHtQQU5FTF9DTEFTU30gLnRwcy1zZWN0aW9uLWhlYWRlcjpmb2N1cyB7XG5cdFx0XHRcdHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXG5cdFx0XHQuJHtQQU5FTF9DTEFTU30gLnRwcy1zZWN0aW9uLWNoZXYge1xuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdGZsZXg6IDAgMCAxOHB4O1xuXHRcdFx0XHR3aWR0aDogMThweDtcblx0XHRcdFx0aGVpZ2h0OiAxOHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxO1xuXHRcdFx0XHRvcGFjaXR5OiAwLjc1O1xuXHRcdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG5cdFx0XHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS10cHMtZHVyLWJhc2UsIDE2MG1zKSB2YXIoLS10cHMtZWFzZS1vdXQsIGVhc2Utb3V0KSwgb3BhY2l0eSB2YXIoLS10cHMtZHVyLWZhc3QsIDgwbXMpIHZhcigtLXRwcy1lYXNlLW91dCwgZWFzZS1vdXQpO1xuXHRcdFx0fVxuXG5cdFx0XHQuJHtQQU5FTF9DTEFTU30gLnRwcy1zZWN0aW9uLWhlYWRlcjpob3ZlciAudHBzLXNlY3Rpb24tY2hldiB7XG5cdFx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfSAudHBzLXNlY3Rpb24tbGFiZWwge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRtaW4taGVpZ2h0OiAxOHB4O1xuXHRcdFx0XHRtYXJnaW46IDAgIWltcG9ydGFudDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfSAudHBzLXNlY3Rpb24tc3VtbWFyeSB7XG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDE4cHg7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdFx0XHRtaW4td2lkdGg6IDA7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fc2VjdGlvbi1zdW1tYXJ5IHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdG1pbi13aWR0aDogMDtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfSAudHBzLXNlY3Rpb24tYm9keSB7XG5cdFx0XHRcdHBhZGRpbmc6IDhweCAwIDA7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHRcdGJvcmRlci10b3A6IDA7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fZWRpdG9yLWNhcmQge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRnYXA6IDEycHg7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fZGVzaWduLWNvbHVtbnMge1xuXHRcdFx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG5cdFx0XHRcdGdhcDogMjRweDtcblx0XHRcdFx0bWF4LXdpZHRoOiAxMTIwcHg7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fZGVzaWduLWNvbHVtbiB7XG5cdFx0XHRcdG1pbi13aWR0aDogMDtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0Z2FwOiAxMHB4O1xuXHRcdFx0fVxuXG5cdFx0XHQuJHtQQU5FTF9DTEFTU31fX3N0YXRlLXRpdGxlIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcblx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbXV0ZWQsIHJnYmEoMTI3LDEyNywxMjcsMC43NikpO1xuXHRcdFx0fVxuXG5cdFx0XHQuJHtQQU5FTF9DTEFTU31fX2V5ZWJyb3cge1xuXHRcdFx0XHRmb250LXNpemU6IDExcHg7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxO1xuXHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuXHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCwgcmdiYSgxMjcsMTI3LDEyNywwLjc2KSk7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fZW1wdHktc3RhdGUge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0Z2FwOiAxMHB4O1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdHBhZGRpbmc6IDhweCAwIDA7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9faGVscGVyIHtcblx0XHRcdFx0bWF4LXdpZHRoOiA1MjBweDtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjQ1O1xuXHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCwgcmdiYSgxMjcsMTI3LDEyNywwLjc2KSk7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fbGluZSB7XG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdHdpZHRoOiBtaW4odmFyKC0tcGxnLXNzLXdpZHRoLCA4OCUpLCAxMDAlKTtcblx0XHRcdFx0aGVpZ2h0OiBtYXgodmFyKC0tcGxnLXNzLXRoaWNrbmVzcywgMXB4KSwgMnB4KTtcblx0XHRcdFx0b3BhY2l0eTogdmFyKC0tcGxnLXNzLW9wYWNpdHksIDAuODYpO1xuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0tcGxnLXNzLW9mZnNldC15LCAwcHgpKTtcblx0XHRcdH1cblxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19saW5lOjpiZWZvcmUge1xuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHR0b3A6IDUwJTtcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHRcdFx0XHRib3JkZXItdG9wOiB2YXIoLS1wbGctc3MtdGhpY2tuZXNzLCAxcHgpIHZhcigtLXBsZy1zcy1zdHlsZSwgc29saWQpIHZhcigtLXBsZy1zcy1jb2xvciwgY3VycmVudENvbG9yKTtcblx0XHRcdH1cblxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19saW5lW2RhdGEtcGxnLXNpZGViYXItc2VwZXJhdG9ycy1zdHlsZT1cImdyYWRpZW50XCJdOjpiZWZvcmUge1xuXHRcdFx0XHRib3JkZXItdG9wOiAwO1xuXHRcdFx0XHRoZWlnaHQ6IG1heCh2YXIoLS1wbGctc3MtdGhpY2tuZXNzLCAxcHgpLCAxcHgpO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1wbGctc3MtZ3JhZGllbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHQuJHtQQU5FTF9DTEFTU31fX2xpbmVbZGF0YS1wbGctc2lkZWJhci1zZXBlcmF0b3JzLXN0eWxlPVwiZG91YmxlXCJdIHtcblx0XHRcdFx0aGVpZ2h0OiBjYWxjKCh2YXIoLS1wbGctc3MtdGhpY2tuZXNzLCAxcHgpICogMikgKyB2YXIoLS1wbGctc3MtZG91YmxlLWdhcCwgMnB4KSk7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fbGluZVtkYXRhLXBsZy1zaWRlYmFyLXNlcGVyYXRvcnMtc3R5bGU9XCJkb3VibGVcIl06OmJlZm9yZSB7XG5cdFx0XHRcdGJvcmRlci10b3A6IDA7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHR0cmFuc2Zvcm06IG5vbmU7XG5cdFx0XHRcdGJhY2tncm91bmQ6XG5cdFx0XHRcdFx0bGluZWFyLWdyYWRpZW50KHZhcigtLXBsZy1zcy1jb2xvciwgY3VycmVudENvbG9yKSAwIDApIHRvcCAvIDEwMCUgdmFyKC0tcGxnLXNzLXRoaWNrbmVzcywgMXB4KSBuby1yZXBlYXQsXG5cdFx0XHRcdFx0bGluZWFyLWdyYWRpZW50KHZhcigtLXBsZy1zcy1jb2xvciwgY3VycmVudENvbG9yKSAwIDApIGJvdHRvbSAvIDEwMCUgdmFyKC0tcGxnLXNzLXRoaWNrbmVzcywgMXB4KSBuby1yZXBlYXQ7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fZWRpdG9yLFxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19jb2xvcnMge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRnYXA6IDEwcHg7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fY29sb3ItaGVybyB7XG5cdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgbWlubWF4KDAsIDFmcik7XG5cdFx0XHRcdGdhcDogMTBweDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fY29sb3ItaGVybyA+IC4ke1BBTkVMX0NMQVNTfV9fcHJlc2V0LXJvdyB7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdH1cblxuXHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XG5cdFx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fY29sb3ItaGVybyB7XG5cdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuJHtQQU5FTF9DTEFTU31fX3ByZXNldC1yb3cge1xuXHRcdFx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4cHggbWlubWF4KDAsIDFmcikgMThweDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0Y29sdW1uLWdhcDogMTJweDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdHBhZGRpbmc6IDEycHggMTRweDtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10cHMtYm9yZGVyLCB2YXIoLS1ib3JkZXItZGVmYXVsdCwgcmdiYSgxMjcsMTI3LDEyNywwLjE4KSkpO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLXRwcy1iZy1pbnB1dCwgdmFyKC0tYmctZGVmYXVsdCwgcmdiYSgxMjcsMTI3LDEyNywwLjA2KSkpO1xuXHRcdFx0XHRjb2xvcjogaW5oZXJpdDtcblx0XHRcdFx0Zm9udDogaW5oZXJpdDtcblx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEyMG1zIGVhc2Utb3V0LCBib3JkZXItY29sb3IgMTIwbXMgZWFzZS1vdXQsIGJveC1zaGFkb3cgMTIwbXMgZWFzZS1vdXQ7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fcHJlc2V0LXJvdzpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLXRwcy1iZy1ob3ZlciwgdmFyKC0tYmctaG92ZXIsIHJnYmEoMTI3LDEyNywxMjcsMC4wOCkpKTtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS10cHMtYm9yZGVyLXN0cm9uZywgdmFyKC0tYm9yZGVyLWRlZmF1bHQsIHJnYmEoMTI3LDEyNywxMjcsMC4zMikpKTtcblx0XHRcdH1cblxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19wcmVzZXQtcm93LmlzLWFjdGl2ZSB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS10cHMtYWNjZW50LCB2YXIoLS1hY2NlbnQtY29sb3IsIGN1cnJlbnRDb2xvcikpIDEyJSwgdmFyKC0tdHBzLWJnLWlucHV0LCB0cmFuc3BhcmVudCkpO1xuXHRcdFx0XHRib3JkZXItY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS10cHMtYWNjZW50LCB2YXIoLS1hY2NlbnQtY29sb3IsIGN1cnJlbnRDb2xvcikpIDUwJSwgdHJhbnNwYXJlbnQpO1xuXHRcdFx0XHRib3gtc2hhZG93OiAwIDAgMCAxcHggY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXRwcy1hY2NlbnQsIHZhcigtLWFjY2VudC1jb2xvciwgY3VycmVudENvbG9yKSkgMjIlLCB0cmFuc3BhcmVudCk7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fcHJlc2V0LXN3YXRjaCB7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHR3aWR0aDogMjJweDtcblx0XHRcdFx0aGVpZ2h0OiAyMnB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA5OTlweDtcblx0XHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xNCksIDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMTgpO1xuXHRcdFx0fVxuXG5cdFx0XHQuJHtQQU5FTF9DTEFTU31fX3ByZXNldC10ZXh0IHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0bWluLXdpZHRoOiAwO1xuXHRcdFx0XHRnYXA6IDJweDtcblx0XHRcdH1cblxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19wcmVzZXQtdGl0bGUge1xuXHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS10cHMtdGV4dCwgdmFyKC0tdGV4dC1kZWZhdWx0LCBjdXJyZW50Q29sb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19wcmVzZXQtcm93LmlzLWFjdGl2ZSAuJHtQQU5FTF9DTEFTU31fX3ByZXNldC10aXRsZSB7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS10cHMtYWNjZW50LCB2YXIoLS1hY2NlbnQtY29sb3IsIGN1cnJlbnRDb2xvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQuJHtQQU5FTF9DTEFTU31fX3ByZXNldC1oaW50IHtcblx0XHRcdFx0Zm9udC1zaXplOiAxMS41cHg7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjQ7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS10cHMtdGV4dC1tdXRlZCwgdmFyKC0tdGV4dC1tdXRlZCwgcmdiYSgxMjcsMTI3LDEyNywwLjc2KSkpO1xuXHRcdFx0fVxuXG5cdFx0XHQuJHtQQU5FTF9DTEFTU31fX3ByZXNldC1jaGVjayB7XG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0d2lkdGg6IDE4cHg7XG5cdFx0XHRcdGhlaWdodDogMThweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRjb2xvcjogdmFyKC0tdHBzLWFjY2VudCwgdmFyKC0tYWNjZW50LWNvbG9yLCBjdXJyZW50Q29sb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19jdXN0b20tcm93IC4ke1BBTkVMX0NMQVNTfV9fcHJlc2V0LWhpbnQge1xuXHRcdFx0XHRmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIG1vbm9zcGFjZTtcblx0XHRcdFx0Zm9udC1zaXplOiAxMS41cHg7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fZmllbGQge1xuXHRcdFx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwcHggMWZyO1xuXHRcdFx0XHRnYXA6IDEycHg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fZGVzaWduLWNvbHVtbiAuJHtQQU5FTF9DTEFTU31fX2ZpZWxkIHtcblx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NnB4IG1pbm1heCgwLCAxZnIpO1xuXHRcdFx0fVxuXG5cdFx0XHQuJHtQQU5FTF9DTEFTU31fX3NlZ21lbnRlZCB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0Z2FwOiA0cHg7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fc2VnIHtcblx0XHRcdFx0aGVpZ2h0OiAyOHB4O1xuXHRcdFx0XHRwYWRkaW5nOiAwIDhweDtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDZweDtcblx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkLCByZ2JhKDEyNywxMjcsMTI3LDAuNzYpKTtcblx0XHRcdFx0Zm9udDogaW5oZXJpdDtcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fc2VnOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIsIHJnYmEoMTI3LDEyNywxMjcsMC4wNikpO1xuXHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1kZWZhdWx0LCBjdXJyZW50Q29sb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHQuJHtQQU5FTF9DTEFTU31fX3NlZy5pcy1hY3RpdmUge1xuXHRcdFx0XHRib3JkZXItY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1hY2NlbnQtY29sb3IsIGN1cnJlbnRDb2xvcikgNTIlLCB0cmFuc3BhcmVudCk7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1hY2NlbnQtY29sb3IsIGN1cnJlbnRDb2xvcikgMTQlLCB0cmFuc3BhcmVudCk7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IsIHZhcigtLXRleHQtZGVmYXVsdCwgY3VycmVudENvbG9yKSk7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fbnVtYmVyIHtcblx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MHB4IGF1dG87XG5cdFx0XHRcdGdhcDogMTJweDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdH1cblxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19kZXNpZ24tY29sdW1uIC4ke1BBTkVMX0NMQVNTfV9fbnVtYmVyIHtcblx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NnB4IGF1dG87XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fc2xpZGVyIHtcblx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MHB4IG1pbm1heCgxMjBweCwgMWZyKSA0MnB4O1xuXHRcdFx0XHRnYXA6IDEycHg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdG1heC13aWR0aDogNTIwcHg7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fZGVzaWduLWNvbHVtbiAuJHtQQU5FTF9DTEFTU31fX3NsaWRlciB7XG5cdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzZweCBtaW5tYXgoODBweCwgMWZyKSAzOHB4O1xuXHRcdFx0fVxuXG5cdFx0XHQuJHtQQU5FTF9DTEFTU31fX3NsaWRlciBpbnB1dCB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRhY2NlbnQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvciwgY3VycmVudENvbG9yKTtcblx0XHRcdH1cblxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19zbGlkZXItdmFsdWUge1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkLCByZ2JhKDEyNywxMjcsMTI3LDAuNzYpKTtcblx0XHRcdFx0Zm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcblx0XHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fbnVtYmVyLWNvbnRyb2wge1xuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0Z2FwOiA0cHg7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fbnVtYmVyLWNvbnRyb2wgYnV0dG9uLFxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19udW1iZXItY29udHJvbCBpbnB1dCB7XG5cdFx0XHRcdGhlaWdodDogMjhweDtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXN1YnRsZSwgcmdiYSgxMjcsMTI3LDEyNywwLjE2KSk7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDZweDtcblx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWRlZmF1bHQsIGN1cnJlbnRDb2xvcik7XG5cdFx0XHRcdGZvbnQ6IGluaGVyaXQ7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdH1cblxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19udW1iZXItY29udHJvbCBidXR0b24ge1xuXHRcdFx0XHR3aWR0aDogMjhweDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0fVxuXG5cdFx0XHQuJHtQQU5FTF9DTEFTU31fX251bWJlci1jb250cm9sIGJ1dHRvbjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyLCByZ2JhKDEyNywxMjcsMTI3LDAuMDYpKTtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItZGVmYXVsdCwgcmdiYSgxMjcsMTI3LDEyNywwLjI0KSk7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fbnVtYmVyLWNvbnRyb2wgaW5wdXQge1xuXHRcdFx0XHR3aWR0aDogNThweDtcblx0XHRcdFx0cGFkZGluZzogMCA2cHg7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdH1cblxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19udW1iZXItY29udHJvbCBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fbnVtYmVyLWNvbnRyb2wgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuXHRcdFx0XHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdH1cblxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19udW1iZXItdW5pdCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbXV0ZWQsIHJnYmEoMTI3LDEyNywxMjcsMC43NikpO1xuXHRcdFx0fVxuXG5cdFx0XHQuJHtQQU5FTF9DTEFTU31fX2ZpZWxkLWxhYmVsLFxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19jb2xvcnMtbGFiZWwsXG5cdFx0XHQuJHtQQU5FTF9DTEFTU31fX2N1c3RvbS1jb2xvciBzcGFuIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuXHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCwgcmdiYSgxMjcsMTI3LDEyNywwLjc2KSk7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fY3VzdG9tLWNvbG9yIHtcblx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MHB4IGF1dG87XG5cdFx0XHRcdGdhcDogMTJweDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdH1cblxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19jdXN0b20tY29sb3IgaW5wdXQge1xuXHRcdFx0XHR3aWR0aDogNDJweDtcblx0XHRcdFx0aGVpZ2h0OiAyOHB4O1xuXHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZGVmYXVsdCwgcmdiYSgxMjcsMTI3LDEyNywwLjIpKTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdH1cblxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19jb2xvcnMtZ3JvdXAge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRnYXA6IDZweDtcblx0XHRcdH1cblxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19jb2xvcnMtZ3JpZCB7XG5cdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEyOHB4LCAxZnIpKTtcblx0XHRcdFx0Z2FwOiA2cHg7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fY29sb3JzLWdyaWQtLWNvbXBhY3Qge1xuXHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDI2cHgpO1xuXHRcdFx0fVxuXG5cdFx0XHQuJHtQQU5FTF9DTEFTU31fX2NvbG9yIHtcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGdhcDogN3B4O1xuXHRcdFx0XHRtaW4td2lkdGg6IDA7XG5cdFx0XHRcdGhlaWdodDogMjhweDtcblx0XHRcdFx0cGFkZGluZzogMCA4cHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDZweDtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXN1YnRsZSwgcmdiYSgxMjcsMTI3LDEyNywwLjE2KSk7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1kZWZhdWx0LCBjdXJyZW50Q29sb3IpO1xuXHRcdFx0XHRmb250OiBpbmhlcml0O1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0cG9pbnRlci1ldmVudHM6IGF1dG87XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0ei1pbmRleDogMTtcblx0XHRcdH1cblxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19jb2xvcjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyLCByZ2JhKDEyNywxMjcsMTI3LDAuMDYpKTtcblx0XHRcdH1cblxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19jb2xvci5pcy1hY3RpdmUge1xuXHRcdFx0XHRib3JkZXItY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1hY2NlbnQtY29sb3IsIGN1cnJlbnRDb2xvcikgNTIlLCB0cmFuc3BhcmVudCk7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1hY2NlbnQtY29sb3IsIGN1cnJlbnRDb2xvcikgMTQlLCB0cmFuc3BhcmVudCk7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fY29sb3ItZG90IHtcblx0XHRcdFx0d2lkdGg6IDE0cHg7XG5cdFx0XHRcdGhlaWdodDogMTRweDtcblx0XHRcdFx0ZmxleDogMCAwIGF1dG87XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuXHRcdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjE0KSwgMCAwIDAgMXB4IHJnYmEoMCwwLDAsMC4xKTtcblx0XHRcdH1cblxuXHRcdFx0LiR7UEFORUxfQ0xBU1N9X19jb2xvci0tc3dhdGNoIHtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdHdpZHRoOiAyNnB4O1xuXHRcdFx0XHRoZWlnaHQ6IDI2cHg7XG5cdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fY29sb3ItbmFtZSB7XG5cdFx0XHRcdG1pbi13aWR0aDogMDtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHR9XG5cblx0XHRcdC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fcGFsZXR0ZS1saXN0IHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXRwcy1kaXZpZGVyLCB2YXIoLS1ib3JkZXItZGVmYXVsdCwgcmdiYSgxMjcsMTI3LDEyNywwLjEpKSk7XG5cdFx0XHR9XG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3BhbGV0dGUtcm93IHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC13cmFwOiBub3dyYXA7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGdhcDogMTJweDtcblx0XHRcdFx0cGFkZGluZzogOHB4IDA7XG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10cHMtZGl2aWRlciwgdmFyKC0tYm9yZGVyLWRlZmF1bHQsIHJnYmEoMTI3LDEyNywxMjcsMC4wOCkpKTtcblx0XHRcdH1cblx0XHRcdC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fcGFsZXR0ZS1yb3cuaXMtdHJ1bmNhdGVkIC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fcGFsZXR0ZS1yb3ctZG90cyB7XG5cdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHR9XG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3BhbGV0dGUtcm93Omxhc3QtY2hpbGQgeyBib3JkZXItYm90dG9tOiAwOyB9XG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3BhbGV0dGUtcm93OmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIsIHJnYmEoMTI3LDEyNywxMjcsMC4wNCkpOyB9XG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3BhbGV0dGUtcm93LmlzLWFjdGl2ZSB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLXRwcy1hY2NlbnQtc29mdCwgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXRwcy1hY2NlbnQsIHZhcigtLWFjY2VudC1jb2xvciwgY3VycmVudENvbG9yKSkgMTIlLCB0cmFuc3BhcmVudCkpO1xuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDhweDtcblx0XHRcdFx0cGFkZGluZy1yaWdodDogOHB4O1xuXHRcdFx0fVxuXHRcdFx0LiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19wYWxldHRlLXJvdy5pcy1hY3RpdmUgLiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19wYWxldHRlLXJvdy1uYW1lIHtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRwcy1hY2NlbnQsIHZhcigtLWFjY2VudC1jb2xvciwgY3VycmVudENvbG9yKSk7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHR9XG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3BhbGV0dGUtcm93LW5hbWUge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRnYXA6IDhweDtcblx0XHRcdFx0Ym9yZGVyOiAwO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0Y29sb3I6IGluaGVyaXQ7XG5cdFx0XHRcdGZvbnQ6IGluaGVyaXQ7XG5cdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0XHRcdGZsZXg6IDAgMCBhdXRvO1xuXHRcdFx0fVxuXHRcdFx0LiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19wYWxldHRlLXJvdy1kb3RzIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC13cmFwOiBub3dyYXA7XG5cdFx0XHRcdGdhcDogNHB4O1xuXHRcdFx0XHRmbGV4OiAxIDEgYXV0bztcblx0XHRcdFx0bWluLXdpZHRoOiAwO1xuXHRcdFx0fVxuXHRcdFx0LiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19wYWxldHRlLWRvdCB7XG5cdFx0XHRcdHdpZHRoOiAxNHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDE0cHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG5cdFx0XHRcdGZsZXg6IDAgMCBhdXRvO1xuXHRcdFx0fVxuXHRcdFx0LiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19wYWxldHRlLXJvdy1yZXZlYWwge1xuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0Z2FwOiA0cHg7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdFx0XHR3aWR0aDogMjhweDtcblx0XHRcdFx0aGVpZ2h0OiAyOHB4O1xuXHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMTtcblx0XHRcdFx0ZmxleDogMCAwIDI4cHg7XG5cdFx0XHRcdGJvcmRlcjogMDtcblx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdGNvbG9yOiBpbmhlcml0O1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHR9XG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3BhbGV0dGUtcm93LXJldmVhbDpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyLCByZ2JhKDEyNywxMjcsMTI3LDAuMSkpO1xuXHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0fVxuXHRcdFx0LiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19wYWxldHRlLXJvdy1yZXZlYWw6OmFmdGVyIHtcblx0XHRcdFx0Y29udGVudDogJ1x1MjVCRSc7XG5cdFx0XHRcdG9wYWNpdHk6IDAuNztcblx0XHRcdH1cblx0XHRcdC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fcGFsZXR0ZS1yb3cuaXMtcmV2ZWFsZWQgLiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19wYWxldHRlLXJvdy1yZXZlYWw6OmFmdGVyIHtcblx0XHRcdFx0Y29udGVudDogJ1x1MjVCNCc7XG5cdFx0XHR9XG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3BhbGV0dGUtcm93LmlzLXRydW5jYXRlZCAuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3BhbGV0dGUtcm93LXJldmVhbCxcblx0XHRcdC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fcGFsZXR0ZS1yb3cuaXMtcmV2ZWFsZWQgLiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19wYWxldHRlLXJvdy1yZXZlYWwge1xuXHRcdFx0XHRvcGFjaXR5OiAwLjc1O1xuXHRcdFx0XHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHRcdFx0fVxuXHRcdFx0LiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19wYWxldHRlLXJvdy5pcy10cnVuY2F0ZWQsXG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3BhbGV0dGUtcm93LmlzLXJldmVhbGVkIHtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0fVxuXHRcdFx0LiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19wYWxldHRlLXJvdy5pcy10cnVuY2F0ZWQ6aG92ZXIsXG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3BhbGV0dGUtcm93LmlzLXJldmVhbGVkOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIsIHJnYmEoMTI3LDEyNywxMjcsMC4wNikpO1xuXHRcdFx0fVxuXHRcdFx0LiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19wYWxldHRlLXJvdy5pcy1yZXZlYWxlZCB7XG5cdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdG92ZXJmbG93OiB2aXNpYmxlO1xuXHRcdFx0fVxuXHRcdFx0LiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19wYWxldHRlLXJvdy5pcy1yZXZlYWxlZCAuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3BhbGV0dGUtcm93LWRvdHMge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0ZmxleDogMSAwIDEwMCU7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRtaW4td2lkdGg6IDA7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDRweDtcblx0XHRcdFx0b3ZlcmZsb3c6IHZpc2libGU7XG5cdFx0XHR9XG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3RhaWx3aW5kLXNoYWRlcyB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRnYXA6IDEwcHg7XG5cdFx0XHRcdHBhZGRpbmc6IDhweDtcblx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tdHBzLWFjY2VudC1zb2Z0LCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tdHBzLWFjY2VudCwgdmFyKC0tYWNjZW50LWNvbG9yLCBjdXJyZW50Q29sb3IpKSAxMiUsIHRyYW5zcGFyZW50KSk7XG5cdFx0XHR9XG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3RhaWx3aW5kLXNoYWRlcy1sYWJlbCB7XG5cdFx0XHRcdGZsZXg6IDAgMCBhdXRvO1xuXHRcdFx0XHRtaW4taGVpZ2h0OiAyOHB4O1xuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRvcGFjaXR5OiAwLjc7XG5cdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG5cdFx0XHR9XG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3RhaWx3aW5kLXNoYWRlcy1zZWcge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4OiAxIDEgYXV0bztcblx0XHRcdFx0bWluLXdpZHRoOiAwO1xuXHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRcdGdhcDogNHB4O1xuXHRcdFx0fVxuXHRcdFx0LiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19zaGFkZS1idG4ge1xuXHRcdFx0XHRtaW4td2lkdGg6IDQ0cHg7XG5cdFx0XHRcdGhlaWdodDogMjhweDtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRcdFx0XHRjb2xvcjogaW5oZXJpdDtcblx0XHRcdFx0cGFkZGluZzogMCA4cHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRmb250OiBpbmhlcml0O1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHR9XG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3NoYWRlLWJ0bjpob3Zlcixcblx0XHRcdC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fc2hhZGUtYnRuOmZvY3VzLXZpc2libGUge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS10cHMtYmctaG92ZXIsIHZhcigtLWJnLWhvdmVyLCByZ2JhKDEyNywxMjcsMTI3LDAuMSkpKTtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS10cHMtYm9yZGVyLCByZ2JhKDEyNywxMjcsMTI3LDAuMjQpKTtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRwcy10ZXh0LCB2YXIoLS10ZXh0LWRlZmF1bHQsIGN1cnJlbnRDb2xvcikpO1xuXHRcdFx0XHRvdXRsaW5lOiBub25lO1xuXHRcdFx0fVxuXHRcdFx0LiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19zaGFkZS1idG4uaXMtYWN0aXZlIHtcblx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tdHBzLWFjY2VudC1zb2Z0LCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tdHBzLWFjY2VudCwgdmFyKC0tYWNjZW50LWNvbG9yLCBjdXJyZW50Q29sb3IpKSAxNSUsIHRyYW5zcGFyZW50KSk7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXRwcy1hY2NlbnQsIHZhcigtLWFjY2VudC1jb2xvciwgY3VycmVudENvbG9yKSkgNDUlLCB0cmFuc3BhcmVudCk7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS10cHMtYWNjZW50LCB2YXIoLS1hY2NlbnQtY29sb3IsIGN1cnJlbnRDb2xvcikpO1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0fVxuXG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3N3YXRjaC13cmFwcGVyIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdG1pbi13aWR0aDogMDtcblx0XHRcdFx0b3ZlcmZsb3c6IHZpc2libGU7XG5cdFx0XHR9XG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3N3YXRjaC13cmFwcGVyLmlzLWNvbXBhY3QsXG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3N3YXRjaC13cmFwcGVyLmlzLW9wZW4ge1xuXHRcdFx0XHRvdmVyZmxvdzogdmlzaWJsZTtcblx0XHRcdH1cblx0XHRcdC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fc3dhdGNoLXdyYXBwZXI6bm90KC5pcy1jb21wYWN0KSAuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3N3YXRjaGVzIHtcblx0XHRcdFx0ZmxleC13cmFwOiBub3dyYXA7XG5cdFx0XHR9XG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3N3YXRjaGVzIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRnYXA6IDVweDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdFx0bWluLXdpZHRoOiAwO1xuXHRcdFx0XHRvdmVyZmxvdzogdmlzaWJsZTtcblx0XHRcdFx0cGFkZGluZzogMnB4IDA7XG5cdFx0XHR9XG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3N3YXRjaCB7XG5cdFx0XHRcdGZsZXg6IDAgMCAxOHB4O1xuXHRcdFx0XHR3aWR0aDogMThweDtcblx0XHRcdFx0aGVpZ2h0OiAxOHB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdGJvcmRlcjogMDtcblx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRvdXRsaW5lOiBub25lO1xuXHRcdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcblx0XHRcdFx0b3BhY2l0eTogMC40Mjtcblx0XHRcdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDhzIGVhc2UsIGJveC1zaGFkb3cgMC4wOHMgZWFzZSwgb3BhY2l0eSAwLjA4cyBlYXNlO1xuXHRcdFx0fVxuXHRcdFx0LiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19zd2F0Y2g6aG92ZXIgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IG9wYWNpdHk6IDAuNzg7IH1cblx0XHRcdC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fc3dhdGNoLmlzLWFjdGl2ZSB7XG5cdFx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDAgMCAwIDJweCAjZmZmZmZmLCAwIDAgMCAzcHggcmdiYSgwLDAsMCwwLjQ1KTtcblx0XHRcdH1cblx0XHRcdC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fc3dhdGNoLS1jdXN0b20ge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZmZmZmIDUwJSwgIzExMTExMSA1MCUpO1xuXHRcdFx0fVxuXHRcdFx0LiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19jdXN0b20tcGFuZWwge1xuXHRcdFx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNTBweCwgMC43NWZyKSBtaW5tYXgoMTgwcHgsIDFmcik7XG5cdFx0XHRcdGdhcDogMTJweDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IHN0YXJ0O1xuXHRcdFx0XHRwYWRkaW5nOiA4cHggMCAwO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAwO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXRwcy1kaXZpZGVyLCByZ2JhKDEyNywxMjcsMTI3LDAuMTIpKTtcblx0XHRcdFx0bWFyZ2luLXRvcDogNnB4O1xuXHRcdFx0fVxuXHRcdFx0LiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19jdXN0b20tbGVmdCxcblx0XHRcdC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fY3VzdG9tLXJpZ2h0IHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0Z2FwOiA4cHg7XG5cdFx0XHRcdG1pbi13aWR0aDogMDtcblx0XHRcdH1cblx0XHRcdC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fc3Yge1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiAxMDAlOyBhc3BlY3QtcmF0aW86IDEuMzUgLyAxO1xuXHRcdFx0XHRtYXgtaGVpZ2h0OiAxNTBweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOlxuXHRcdFx0XHRcdGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwMDAsIHRyYW5zcGFyZW50KSxcblx0XHRcdFx0XHRsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYsIGhzbCh2YXIoLS1odWUsIDApLCAxMDAlLCA1MCUpKTtcblx0XHRcdFx0Y3Vyc29yOiBjcm9zc2hhaXI7IHRvdWNoLWFjdGlvbjogbm9uZTsgdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0XHR9XG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX3N2LXRodW1iIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTJweDsgaGVpZ2h0OiAxMnB4O1xuXHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjZmZmOyBib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyBwb2ludGVyLWV2ZW50czogbm9uZTtcblx0XHRcdFx0Ym94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwwLDAsMC42KTtcblx0XHRcdH1cblx0XHRcdC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9faHVlIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7IGhlaWdodDogMTBweDsgYXBwZWFyYW5jZTogbm9uZTtcblx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LFxuXHRcdFx0XHRcdCNmMDAgMCUsICNmZjAgMTclLCAjMGYwIDMzJSwgIzBmZiA1MCUsICMwMGYgNjclLCAjZjBmIDgzJSwgI2YwMCAxMDAlKTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNnB4OyBvdXRsaW5lOiBub25lO1xuXHRcdFx0fVxuXHRcdFx0LiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19odWU6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcblx0XHRcdFx0YXBwZWFyYW5jZTogbm9uZTsgd2lkdGg6IDE0cHg7IGhlaWdodDogMTRweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsMCwwLDAuNik7IGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdH1cblx0XHRcdC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fZm9ybWF0cyB7XG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDEyNywxMjcsMTI3LDAuMTIpOyBib3JkZXItcmFkaXVzOiA2cHg7IHBhZGRpbmc6IDJweDtcblx0XHRcdH1cblx0XHRcdC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fZm9ybWF0LWJ0biB7XG5cdFx0XHRcdGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiBpbmhlcml0O1xuXHRcdFx0XHRwYWRkaW5nOiAzcHggOHB4OyBib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjsgZm9udC1zaXplOiAxMXB4OyBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuXHRcdFx0fVxuXHRcdFx0LiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19mb3JtYXQtYnRuLmlzLWFjdGl2ZSB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMTI3LDEyNywxMjcsMC4yNCk7IGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHR9XG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX2lucHV0cyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogNnB4OyBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX2hleC1pbnB1dCxcblx0XHRcdC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fbnVtIGlucHV0IHtcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgxMjcsMTI3LDEyNywwLjEyKTtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgxMjcsMTI3LDEyNywwLjE4KTtcblx0XHRcdFx0Y29sb3I6IGluaGVyaXQ7XG5cdFx0XHRcdHBhZGRpbmc6IDVweCA3cHg7IGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIG1vbm9zcGFjZTtcblx0XHRcdFx0b3V0bGluZTogbm9uZTtcblx0XHRcdH1cblx0XHRcdC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9faGV4LWlucHV0IHsgZmxleDogMTsgfVxuXHRcdFx0LiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19udW0geyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDJweDsgZmxleDogMTsgfVxuXHRcdFx0LiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19udW0gaW5wdXQgeyB3aWR0aDogMTAwJTsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX251bS1sYWJlbCxcblx0XHRcdC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9faW5wdXQtbGFiZWwgeyBmb250LXNpemU6IDEwcHg7IG9wYWNpdHk6IDAuNjsgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTsgfVxuXHRcdFx0LiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19yYW5kb20ge1xuXHRcdFx0XHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDEyNywxMjcsMTI3LDAuMTIpO1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyNywxMjcsMTI3LDAuMTgpO1xuXHRcdFx0XHRjb2xvcjogaW5oZXJpdDtcblx0XHRcdFx0cGFkZGluZzogNHB4IDlweDsgYm9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7IGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdH1cblx0XHRcdC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fcmFuZG9tOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgxMjcsMTI3LDEyNywwLjIpOyB9XG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX2FjdGlvbnMge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4OyBnYXA6IDZweDsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHRcdH1cblx0XHRcdC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fYnRuIHtcblx0XHRcdFx0Ym9yZGVyOiAwOyBwYWRkaW5nOiA1cHggMTJweDsgYm9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7IGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdH1cblx0XHRcdC4ke0NPTExFQ1RJT05fQ09MT1JTX0NMQVNTfV9fYnRuLS1naG9zdCB7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjb2xvcjogaW5oZXJpdDsgb3BhY2l0eTogMC43NTsgfVxuXHRcdFx0LiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19idG4tLXByaW1hcnkge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tdHBzLWFjY2VudCwgdmFyKC0tYWNjZW50LWNvbG9yLCBjdXJyZW50Q29sb3IpKSAxOCUsIHRyYW5zcGFyZW50KTtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRwcy1hY2NlbnQsIHZhcigtLWFjY2VudC1jb2xvciwgY3VycmVudENvbG9yKSk7IGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHR9XG5cdFx0XHQuJHtDT0xMRUNUSU9OX0NPTE9SU19DTEFTU31fX2J0bi0tcHJpbWFyeTpob3ZlciB7IGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS10cHMtYWNjZW50LCB2YXIoLS1hY2NlbnQtY29sb3IsIGN1cnJlbnRDb2xvcikpIDMwJSwgdHJhbnNwYXJlbnQpOyB9XG5cdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcblx0XHRcdFx0LiR7Q09MTEVDVElPTl9DT0xPUlNfQ0xBU1N9X19jdXN0b20tcGFuZWwge1xuXHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fbXV0ZWQsXG5cdFx0XHQuJHtQQU5FTF9DTEFTU31fX2VtcHR5IHtcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCwgcmdiYSgxMjcsMTI3LDEyNywwLjc2KSk7XG5cdFx0XHR9XG5cblx0XHRcdC4ke1BBTkVMX0NMQVNTfV9fYWN0aW9ucyB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGdhcDogOHB4O1xuXHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHR9XG5cblx0XHRcdC5wbGctc2lkZWJhci1zZXBlcmF0b3JzLWhvbGQge1xuXHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdGxlZnQ6IDUwJTtcblx0XHRcdFx0Ym90dG9tOiAyNHB4O1xuXHRcdFx0XHR6LWluZGV4OiA5OTk5OTk7XG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0XHRcdFx0cGFkZGluZzogN3B4IDExcHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZGVmYXVsdCwgcmdiYSgxMjcsMTI3LDEyNywwLjIyKSk7XG5cdFx0XHRcdGJhY2tncm91bmQ6XG5cdFx0XHRcdFx0bGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1hY2NlbnQtY29sb3IsIGN1cnJlbnRDb2xvcikgMCAwKSAwIDEwMCUgLyAwJSAycHggbm8tcmVwZWF0LFxuXHRcdFx0XHRcdHZhcigtLWJnLWRlZmF1bHQsIHJnYmEoMjAsMjAsMjAsMC44OCkpO1xuXHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1kZWZhdWx0LCBjdXJyZW50Q29sb3IpO1xuXHRcdFx0XHRmb250OiBpbmhlcml0O1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxO1xuXHRcdFx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0XHRcdFx0YW5pbWF0aW9uOiBwbGctc2lkZWJhci1zZXBlcmF0b3JzLWhvbGQtZmlsbCAke09VVFNJREVfSE9MRF9NU31tcyBsaW5lYXIgZm9yd2FyZHM7XG5cdFx0XHR9XG5cblx0XHRcdC5wbGctc2lkZWJhci1zZXBlcmF0b3JzLXBvb2Yge1xuXHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdHotaW5kZXg6IDk5OTk5OTtcblx0XHRcdFx0d2lkdGg6IDJweDtcblx0XHRcdFx0aGVpZ2h0OiAycHg7XG5cdFx0XHRcdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KTtcblx0XHRcdH1cblxuXHRcdFx0LnBsZy1zaWRlYmFyLXNlcGVyYXRvcnMtcG9vZiBzcGFuIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdHdpZHRoOiA2cHg7XG5cdFx0XHRcdGhlaWdodDogNnB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA5OTlweDtcblx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yLCB2YXIoLS10ZXh0LWRlZmF1bHQsICNmZmYpKTtcblx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUodmFyKC0tYW5nbGUpKSB0cmFuc2xhdGVYKDApIHNjYWxlKDAuNyk7XG5cdFx0XHRcdG9wYWNpdHk6IDAuOTtcblx0XHRcdFx0YW5pbWF0aW9uOiBwbGctc2lkZWJhci1zZXBlcmF0b3JzLXBvb2YgNjIwbXMgY3ViaWMtYmV6aWVyKDAuMTUsIDAuOCwgMC4yLCAxKSBmb3J3YXJkcztcblx0XHRcdH1cblxuXHRcdFx0QGtleWZyYW1lcyBwbGctc2lkZWJhci1zZXBlcmF0b3JzLWhvbGQtZmlsbCB7XG5cdFx0XHRcdHRvIHsgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweCwgYXV0bzsgfVxuXHRcdFx0fVxuXG5cdFx0XHRAa2V5ZnJhbWVzIHBsZy1zaWRlYmFyLXNlcGVyYXRvcnMtcG9vZiB7XG5cdFx0XHRcdDY1JSB7XG5cdFx0XHRcdFx0b3BhY2l0eTogMC44O1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKHZhcigtLWFuZ2xlKSkgdHJhbnNsYXRlWCh2YXIoLS1kaXN0YW5jZSkpIHNjYWxlKDEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRvIHtcblx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKHZhcigtLWFuZ2xlKSkgdHJhbnNsYXRlWChjYWxjKHZhcigtLWRpc3RhbmNlKSArIDhweCkpIHNjYWxlKDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdEBrZXlmcmFtZXMgcGxnLXNpZGViYXItc2VwZXJhdG9ycy1lZGl0LWhlYXJ0YmVhdCB7XG5cdFx0XHRcdDAlLCAxMDAlIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tdHBzLWFjY2VudCwgdmFyKC0tYWNjZW50LWNvbG9yLCBjdXJyZW50Q29sb3IpKSAxNiUsIHZhcigtLWJnLWRlZmF1bHQsIHJnYmEoMjAsMjAsMjAsMC44OCkpKTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDAgMCAwIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS10cHMtYWNjZW50LCB2YXIoLS1hY2NlbnQtY29sb3IsIGN1cnJlbnRDb2xvcikpIDAlLCB0cmFuc3BhcmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0NTAlIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tdHBzLWFjY2VudCwgdmFyKC0tYWNjZW50LWNvbG9yLCBjdXJyZW50Q29sb3IpKSAyOCUsIHZhcigtLWJnLWRlZmF1bHQsIHJnYmEoMjAsMjAsMjAsMC44OCkpKTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDAgMCAzcHggY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXRwcy1hY2NlbnQsIHZhcigtLWFjY2VudC1jb2xvciwgY3VycmVudENvbG9yKSkgMTglLCB0cmFuc3BhcmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcblx0XHRcdFx0LnBsZy1zaWRlYmFyLXNlcGVyYXRvcnMtaG9sZCxcblx0XHRcdFx0LnBsZy1zaWRlYmFyLXNlcGVyYXRvcnMtcG9vZiBzcGFuIHtcblx0XHRcdFx0XHRhbmltYXRpb24tZHVyYXRpb246IDFtcztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcblx0XHRcdFx0LiR7UEFORUxfQ0xBU1N9X19kZXNpZ24tY29sdW1ucyB7XG5cdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG5cdFx0XHRcdFx0Z2FwOiAxOHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0YCk7XG5cdH1cbn1cbiIsICIvKlxuICogVGh5bWVyIFBsdWdpbiBQYW5lbCBcdTIwMTQgRGVzaWduIFRva2Vuc1xuICpcbiAqIENhbm9uaWNhbCBDU1MgY3VzdG9tIHByb3BlcnRpZXMgZm9yIHRoZSBwbHVnaW4gcGFuZWwgc3lzdGVtLlxuICogUGx1Z2lucyBjb25zdW1lIHRoaXMgdmVyYmF0aW07IGNvbXBvbmVudCBDU1MgcmVhZHMgZnJvbSB0aGVzZSB2YXJzLlxuICpcbiAqIFNlZSBfcGFuZWwtc3lzdGVtL0RFU0lHTi5tZCBmb3IgcmF0aW9uYWxlLlxuICpcbiAqIEFjY2VudCBpbmhlcml0cyBmcm9tIFRoeW1lcidzIGFjdGl2ZSB0aGVtZSB0aHJvdWdoIC0tdHBzLWFjY2VudC4gUGx1Z2luc1xuICogbXVzdCBub3QgZGVjbGFyZSB0aGVpciBvd24gcGFuZWwgYWNjZW50LlxuICovXG5cbi50cHMtcGFuZWwge1xuICAvKiBcdTI1MDBcdTI1MDAgQ29sb3I6IHJlYWQgZGlyZWN0bHkgZnJvbSBUaHltZXIncyBleHBvc2VkIHZhcnMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG4gIC8qIFZlcmlmaWVkIGFnYWluc3QgcGx1Z2luLWNvbGxlY3Rpb24taWNvbnMgKHdoaWNoIHVzZXMgdGhlc2UgZGlyZWN0bHkpOiBUaHltZXJcbiAgICAgZXhwb3NlcyAtLXRleHQtZGVmYXVsdCwgLS10ZXh0LW11dGVkLCAtLWJvcmRlci1zdWJ0bGUsIC0tYmctaG92ZXIsIGV0Yy5cbiAgICAgSGFyZGNvZGVkIHZhbHVlcyBhcmUgbGFzdC1yZXNvcnQgZmFsbGJhY2tzIGlmIHRoZSB2YXIgaXNuJ3QgcHJlc2VudC4gKi9cbiAgLS10cHMtdGV4dDogICAgICAgICAgIHZhcigtLXRleHQtZGVmYXVsdCwgICAjZThlOGU4KTtcbiAgLS10cHMtdGV4dC1tdXRlZDogICAgIHZhcigtLXRleHQtbXV0ZWQsICAgICAjOWE5YTlhKTtcbiAgLS10cHMtdGV4dC1mYWludDogICAgIHZhcigtLXRleHQtc3VidGxlLCAgICAjODg4KTtcblxuICAtLXRwcy1iZy1pbnB1dDogICAgICAgdmFyKC0taW5wdXQtYmcsICAgICAgIHJnYmEoMTI3LDEyNywxMjcsMC4wNikpO1xuICAtLXRwcy1iZy1ob3ZlcjogICAgICAgdmFyKC0tYmctaG92ZXIsICAgICAgIHJnYmEoMTI3LDEyNywxMjcsMC4wNikpO1xuICAtLXRwcy1iZy1hY3RpdmU6ICAgICAgdmFyKC0tYmctYWN0aXZlLCAgICAgIHJnYmEoMTI3LDEyNywxMjcsMC4xMikpO1xuXG4gIC0tdHBzLWRpdmlkZXI6ICAgICAgICB2YXIoLS1ib3JkZXItc3VidGxlLCAgcmdiYSgyNTUsMjU1LDI1NSwwLjA3KSk7XG4gIC0tdHBzLWJvcmRlcjogICAgICAgICB2YXIoLS1ib3JkZXItZGVmYXVsdCwgcmdiYSgyNTUsMjU1LDI1NSwwLjE0KSk7XG4gIC0tdHBzLWJvcmRlci1zdHJvbmc6ICB2YXIoLS1ib3JkZXItc3Ryb25nLCAgcmdiYSgyNTUsMjU1LDI1NSwwLjIyKSk7XG5cbiAgLyogXHUyNTAwXHUyNTAwIENvbG9yOiBhY2NlbnQgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG4gICAqIEFsd2F5cyBmb2xsb3dzIHRoZSB1c2VyJ3MgVGh5bWVyIHRoZW1lLiBUaGUgY2FzY2FkZSBwcmVmZXJzIHRoZSBtb3N0XG4gICAqIHNwZWNpZmljIFRoeW1lci1leHBvc2VkIHZhcmlhYmxlLCBmYWxsaW5nIGJhY2sgdGhyb3VnaCBzb2Z0ZXIgc2lnbmFsc1xuICAgKiB0byBhIG5ldXRyYWwgdGV4dC10aW50ZWQgYWNjZW50IGlmIFRoeW1lciBleHBvc2VzIG5vdGhpbmcuIFBsdWdpbnNcbiAgICogTVVTVCBOT1QgaGFyZGNvZGUgdGhlaXIgb3duIGFjY2VudC5cbiAgICovXG4gIC0tdHBzLWFjY2VudDogICAgICAgICB2YXIoLS1hY2NlbnQtY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIoLS1jb2xvci1hY2NlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIoLS10aGVtZS1hY2NlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIoLS1jb2xvci1wcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q29sb3IpKSkpO1xuICAtLXRwcy1hY2NlbnQtc29mdDogICAgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXRwcy1hY2NlbnQpIDE1JSwgdHJhbnNwYXJlbnQpO1xuICAtLXRwcy1hY2NlbnQtc3Ryb25nOiAgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXRwcy1hY2NlbnQpIDgwJSwgdmFyKC0tdHBzLXRleHQpKTtcblxuICAvKiBcdTI1MDBcdTI1MDAgQ29sb3I6IHNlbWFudGljIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuICAtLXRwcy1kYW5nZXI6ICAgICAgICAgI2VmNDQ0NDtcbiAgLS10cHMtZGFuZ2VyLXNvZnQ6ICAgIHJnYmEoMjM5LCA2OCwgNjgsIDAuMTUpO1xuICAtLXRwcy13YXJuaW5nOiAgICAgICAgI2Y1OWUwYjtcbiAgLS10cHMtc3VjY2VzczogICAgICAgICMxMGI5ODE7XG5cbiAgLyogXHUyNTAwXHUyNTAwIFR5cG9ncmFwaHkgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG4gIC8qIEZvbnQgaXMgSU5IRVJJVEVEIGZyb20gVGh5bWVyJ3MgcGFuZWwgY2hyb21lIChzZWUgY29tcG9uZW50cy5jc3MpLiBEb24ndFxuICAgICBvdmVycmlkZSBcdTIwMTQgdGhhdCBmaWdodHMgYm90aCB0aGUgYm9keSBmb250IGFuZCB0aGUgLnRpIGljb24gZm9udC4gKi9cblxuICAtLXRwcy1mcy10aXRsZTogICAgICAgMThweDtcbiAgLS10cHMtZnMtbGVkZTogICAgICAgIDEzcHg7XG4gIC0tdHBzLWZzLXNlY3Rpb246ICAgICAxMXB4O1xuICAtLXRwcy1mcy1oaW50OiAgICAgICAgMTJweDtcbiAgLS10cHMtZnMtbGFiZWw6ICAgICAgIDEzcHg7XG4gIC0tdHBzLWZzLWRlc2M6ICAgICAgICAxMnB4O1xuICAtLXRwcy1mcy1ib2R5OiAgICAgICAgMTNweDtcbiAgLS10cHMtZnMtdmFsdWU6ICAgICAgIDEycHg7XG4gIC0tdHBzLWZzLWJ1dHRvbjogICAgICAxMnB4O1xuICAtLXRwcy1mcy1saXN0LWhlYWRlcjogMTBweDtcblxuICAtLXRwcy1saC10aWdodDogICAgICAgMTtcbiAgLS10cHMtbGgtc251ZzogICAgICAgIDEuMjtcbiAgLS10cHMtbGgtYmFzZTogICAgICAgIDEuNDtcbiAgLS10cHMtbGgtbG9vc2U6ICAgICAgIDEuNTtcblxuICAtLXRwcy1mdy1yZWd1bGFyOiAgICAgNDAwO1xuICAtLXRwcy1mdy1tZWRpdW06ICAgICAgNTAwO1xuICAtLXRwcy1mdy1zZW1pYm9sZDogICAgNjAwO1xuICAtLXRwcy1mdy1ib2xkOiAgICAgICAgNzAwO1xuXG4gIC0tdHBzLWxzLXNlY3Rpb246ICAgICAwLjA2ZW07XG4gIC0tdHBzLWxzLWxpc3Q6ICAgICAgICAwLjA4ZW07XG4gIC0tdHBzLWxzLXRpdGxlOiAgICAgICAwO1xuXG4gIC8qIFx1MjUwMFx1MjUwMCBTcGFjaW5nICg4cHggc2NhbGUpIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuICAtLXRwcy1zcGFjZS0xOiAgICAgICAgNHB4O1xuICAtLXRwcy1zcGFjZS0yOiAgICAgICAgOHB4O1xuICAtLXRwcy1zcGFjZS0zOiAgICAgICAgMTJweDtcbiAgLS10cHMtc3BhY2UtNDogICAgICAgIDE2cHg7XG4gIC0tdHBzLXNwYWNlLTU6ICAgICAgICAyNHB4O1xuICAtLXRwcy1zcGFjZS02OiAgICAgICAgMzJweDtcbiAgLS10cHMtc3BhY2UtNzogICAgICAgIDQ4cHg7XG5cbiAgLyogXHUyNTAwXHUyNTAwIFJhZGlpIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuICAtLXRwcy1yYWRpdXMtc206ICAgICAgNHB4O1xuICAtLXRwcy1yYWRpdXMtbWQ6ICAgICAgNnB4O1xuICAtLXRwcy1yYWRpdXMtbGc6ICAgICAgOHB4O1xuICAtLXRwcy1yYWRpdXMtcGlsbDogICAgOTk5cHg7XG4gIC0tdHBzLXJhZGl1cy1jaXJjbGU6ICA1MCU7XG5cbiAgLyogXHUyNTAwXHUyNTAwIE1vdGlvbiBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cbiAgLS10cHMtZWFzZS1vdXQ6ICAgICAgIGN1YmljLWJlemllcigwLjIsIDAuNiwgMC4yLCAxKTtcbiAgLS10cHMtZWFzZS1pbi1vdXQ6ICAgIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC0tdHBzLWR1ci1mYXN0OiAgICAgICA4MG1zO1xuICAtLXRwcy1kdXItYmFzZTogICAgICAgMTYwbXM7XG5cbiAgLyogXHUyNTAwXHUyNTAwIFNoYWRvd3MgKHVzZWQgc3BhcmluZ2x5IFx1MjAxNCBzbGlkZXIgdGh1bWIgb25seSkgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG4gIC0tdHBzLXNoYWRvdy10aHVtYjogICAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuXG4gIC8qIFx1MjUwMFx1MjUwMCBDb21wb25lbnQgZGltZW5zaW9ucyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cbiAgLS10cHMtY29udHJvbC1oLXNtOiAgIDI4cHg7XG4gIC0tdHBzLWNvbnRyb2wtaC1tZDogICAzMnB4O1xuICAtLXRwcy1pbnB1dC13OiAgICAgICAgNjRweDtcbiAgLS10cHMtbnVtLXN0ZXAtdzogICAgIDI4cHg7XG4gIC0tdHBzLXN3YXRjaC1zaXplOiAgICAyMnB4O1xuICAtLXRwcy10aHVtYi1zaXplOiAgICAgMTZweDtcbiAgLS10cHMtdHJhY2staDogICAgICAgIDZweDtcbn1cblxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgLnRwcy1wYW5lbCB7XG4gICAgLS10cHMtZHVyLWZhc3Q6ICAgICAxbXM7XG4gICAgLS10cHMtZHVyLWJhc2U6ICAgICAxbXM7XG4gIH1cbn1cbiIsICIvKlxuICogVGh5bWVyIFBsdWdpbiBQYW5lbCBcdTIwMTQgQ29tcG9uZW50IFByaW1pdGl2ZXNcbiAqXG4gKiBBbGwgcHJpbWl0aXZlcyBzY29wZSB1bmRlciAudHBzLXBhbmVsLiBQbHVnaW4tc3BlY2lmaWMgc3R5bGVzIGxpdmUgZWxzZXdoZXJlLlxuICogUmVhZHMgdG9rZW5zIGZyb20gdG9rZW5zLmNzcy5cbiAqL1xuXG4vKiBcdTI1MDBcdTI1MDAgUGFuZWwgcm9vdCBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuLyogSW5oZXJpdCBUaHltZXIncyBmb250ICsgc2l6aW5nIFx1MjAxNCBETyBOT1Qgb3ZlcnJpZGUuIHBsdWdpbi1jb2xsZWN0aW9uLWljb25zXG4gICBkZW1vbnN0cmF0ZXMgdGhlIHJpZ2h0IGFwcHJvYWNoOiBzaW1wbHkgYGZvbnQtZmFtaWx5OiBpbmhlcml0YC4gRm9yY2luZyBhXG4gICBjdXN0b20gdmFyIGZpZ2h0cyBib3RoIFRoeW1lcidzIGJvZHkgZm9udCBBTkQgdGhlIC50aSBpY29uIGZvbnQuICovXG4udHBzLXBhbmVsIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdHBzLWZzLWJvZHkpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tdHBzLWxoLWJhc2UpO1xuICBjb2xvcjogdmFyKC0tdHBzLXRleHQpO1xuICBwYWRkaW5nOiAwIHZhcigtLXRwcy1zcGFjZS01KSB2YXIoLS10cHMtc3BhY2UtNyk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udHBzLXBhbmVsICosXG4udHBzLXBhbmVsICo6OmJlZm9yZSxcbi50cHMtcGFuZWwgKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBNb25vIG9wdC1pbnMgYXJlIGV4cGxpY2l0IHBlci1lbGVtZW50LCBuZXZlciB2aWEgYSBwYW5lbC13aWRlIG92ZXJyaWRlLiAqL1xuLnRwcy1wYW5lbCAudHBzLW51bS1pbnB1dCxcbi50cHMtcGFuZWwgLnRwcy1zbGlkZXItdmFsdWUsXG4udHBzLXBhbmVsIC50cHMtbW9ubyxcbi50cHMtcGFuZWwgLnRwcy1tb25vICoge1xuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbn1cblxuLyogXHUyNTAwXHUyNTAwIFRpdGxlIGJsb2NrIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4udHBzLXRpdGxlIHtcbiAgZm9udC1zaXplOiB2YXIoLS10cHMtZnMtdGl0bGUpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tdHBzLWxoLXNudWcpO1xuICBmb250LXdlaWdodDogdmFyKC0tdHBzLWZ3LXNlbWlib2xkKTtcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLXRwcy1scy10aXRsZSk7XG4gIGNvbG9yOiB2YXIoLS10cHMtdGV4dCk7XG4gIG1hcmdpbjogMCAwIHZhcigtLXRwcy1zcGFjZS0xKTtcbn1cblxuLnRwcy1sZWRlIHtcbiAgZm9udC1zaXplOiB2YXIoLS10cHMtZnMtbGVkZSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS10cHMtbGgtbG9vc2UpO1xuICBjb2xvcjogdmFyKC0tdHBzLXRleHQtbXV0ZWQpO1xuICBtYXJnaW46IDAgMCB2YXIoLS10cHMtc3BhY2UtMyk7XG59XG5cbi8qIFx1MjUwMFx1MjUwMCBDYW5vbmljYWwgcGx1Z2luIGhlYWRlciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuLnRwcy1wbHVnaW4taGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IHZhcigtLXRwcy1zcGFjZS01KSAwIHZhcigtLXRwcy1zcGFjZS01KTtcbiAgcGFkZGluZzogMThweCB2YXIoLS10cHMtc3BhY2UtNCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6XG4gICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LFxuICAgICAgI2YyNjU0OCAgOCUsICNmMjY1NDggMjglLFxuICAgICAgI2ZiYWM1NiAyOCUsICNmYmFjNTYgNDglLFxuICAgICAgI2ZmZjQ2MCA0OCUsICNmZmY0NjAgNjglLFxuICAgICAgI2YwNjdhNiA2OCUsICNmMDY3YTYgODglLFxuICAgICAgIzAzYmRmMiA4OCVcbiAgICApIHRvcCBsZWZ0IC8gMTAwJSAxcHggbm8tcmVwZWF0LFxuICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCxcbiAgICAgICNmMjY1NDggIDAlLCAjZjI2NTQ4IDEyJSxcbiAgICAgICNmYmFjNTYgMTIlLCAjZmJhYzU2IDMyJSxcbiAgICAgICNmZmY0NjAgMzIlLCAjZmZmNDYwIDUyJSxcbiAgICAgICNmMDY3YTYgNTIlLCAjZjA2N2E2IDcyJSxcbiAgICAgICMwM2JkZjIgNzIlLCAjMDNiZGYyIDkyJVxuICAgICkgYm90dG9tIGxlZnQgLyAxMDAlIDFweCBuby1yZXBlYXQsXG4gICAgdmFyKC0tdHBzLXBhbmVsLWJnLCB2YXIoLS1iZy1kZWZhdWx0LCB2YXIoLS1wbGctY2ktdGhlbWUtYmcsIHRyYW5zcGFyZW50KSkpO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmMjY1NDg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwM2JkZjI7XG59XG5cbi50cHMtcGx1Z2luLWhlYWRlci1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDAgMCB2YXIoLS10cHMtc3BhY2UtMiwgOHB4KTtcbn1cblxuLnRwcy1wbHVnaW4taGVhZGVyLWxvZ28taWNvbiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogdmFyKC0tdHBzLWFjY2VudCwgY3VycmVudENvbG9yKTtcbn1cblxuLnRwcy1wbHVnaW4taGVhZGVyLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogdmFyKC0tdHBzLWxoLXNudWcsIDEuMik7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS10cHMtZnctc2VtaWJvbGQsIDYwMCk7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogdmFyKC0tdHBzLXRleHQsIHZhcigtLXRleHQtZGVmYXVsdCwgI2U4ZThlOCkpO1xuICBtYXJnaW46IDAgMCB2YXIoLS10cHMtc3BhY2UtMywgMTJweCk7XG59XG5cbi50cHMtcGx1Z2luLWhlYWRlci12ZXJzaW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogdmFyKC0tdHBzLWZ3LW1lZGl1bSwgNTAwKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiB2YXIoLS10cHMtdGV4dC1mYWludCwgdmFyKC0tdGV4dC1zdWJ0bGUsICM4ODgpKSAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udHBzLXBsdWdpbi1oZWFkZXItbGVkZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLXRwcy1saC1iYXNlLCAxLjQpO1xuICBjb2xvcjogdmFyKC0tdHBzLXRleHQtbXV0ZWQsIHZhcigtLXRleHQtbXV0ZWQsICM5YTlhOWEpKTtcbiAgbWFyZ2luOiAwIDAgdmFyKC0tdHBzLXNwYWNlLTQsIDE2cHgpO1xufVxuXG4udHBzLXBsdWdpbi1oZWFkZXItYXR0ciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IHZhcigtLXRwcy1zcGFjZS0zLCAxMnB4KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTEuNXB4O1xuICBsaW5lLWhlaWdodDogdmFyKC0tdHBzLWxoLWJhc2UsIDEuNCk7XG4gIGNvbG9yOiB2YXIoLS10cHMtdGV4dC1tdXRlZCwgdmFyKC0tdGV4dC1tdXRlZCwgIzg4OCkpO1xuICBtYXJnaW46IDA7XG59XG5cbi50cHMtcGx1Z2luLWhlYWRlci1saW5rLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZ2FwOiA0cHg7XG59XG5cbi50cHMtcGx1Z2luLWhlYWRlci1pY29uLFxuLnRwcy1wbHVnaW4taGVhZGVyLWF0dHIgLnRpIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6IHZhcigtLXRwcy10ZXh0LW11dGVkLCB2YXIoLS10ZXh0LW11dGVkLCAjODg4KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xufVxuXG4udHBzLXBsdWdpbi1oZWFkZXItaWNvbmlmeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICAtd2Via2l0LW1hc2stc2l6ZTogMTAwJSAxMDAlO1xuICBtYXNrLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuLnRwcy1wbHVnaW4taGVhZGVyLWljb25pZnktZ2l0aHViIHtcbiAgLS10cHMtaWNvbmlmeS1naXRodWI6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnJTNFJTNDcGF0aCBmaWxsPSdibGFjaycgZD0nTTEyIC4yOTdjLTYuNjMgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAzIDMuNDM4IDkuOCA4LjIwNSAxMS4zODUuNi4xMTMuODItLjI1OC44Mi0uNTc3IDAtLjI4NS0uMDEtMS4wNC0uMDE1LTIuMDQtMy4zMzguNzI0LTQuMDQyLTEuNjEtNC4wNDItMS42MS0uNTQ2LTEuMzg1LTEuMzM1LTEuNzU1LTEuMzM1LTEuNzU1LTEuMDg3LS43NDQuMDg0LS43MjkuMDg0LS43MjkgMS4yMDUuMDg0IDEuODM4IDEuMjM2IDEuODM4IDEuMjM2IDEuMDcgMS44MzUgMi44MDkgMS4zMDUgMy40OTUuOTk4LjEwOC0uNzc2LjQxOC0xLjMwNS43NjItMS42MDUtMi42NjUtLjMtNS40NjYtMS4zMzItNS40NjYtNS45MyAwLTEuMzEuNDY1LTIuMzggMS4yMzUtMy4yMi0uMTM1LS4zMDMtLjU0LTEuNTIzLjEwNS0zLjE3NiAwIDAgMS4wMDUtLjMyMiAzLjMgMS4yMy45Ni0uMjY3IDEuOTgtLjM5OSAzLS40MDUgMS4wMi4wMDYgMi4wNC4xMzggMyAuNDA1IDIuMjgtMS41NTIgMy4yODUtMS4yMyAzLjI4NS0xLjIzLjY0NSAxLjY1My4yNCAyLjg3My4xMiAzLjE3Ni43NjUuODQgMS4yMyAxLjkxIDEuMjMgMy4yMiAwIDQuNjEtMi44MDUgNS42MjUtNS40NzUgNS45Mi40Mi4zNi44MSAxLjA5Ni44MSAyLjIyIDAgMS42MDYtLjAxNSAyLjg5Ni0uMDE1IDMuMjg2IDAgLjMxNS4yMS42OS44MjUuNTdDMjAuNTY1IDIyLjA5MiAyNCAxNy41OTIgMjQgMTIuMjk3YzAtNi42MjctNS4zNzMtMTItMTItMTInLyUzRSUzQy9zdmclM0VcIik7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdHBzLWljb25pZnktZ2l0aHViKTtcbiAgbWFzay1pbWFnZTogdmFyKC0tdHBzLWljb25pZnktZ2l0aHViKTtcbn1cblxuLnRwcy1wbHVnaW4taGVhZGVyLWxpbmsge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIGN1cnJlbnRDb2xvciA0MiUsIHRyYW5zcGFyZW50KTtcbiAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0tdHBzLWR1ci1mYXN0LCA4MG1zKSB2YXIoLS10cHMtZWFzZS1vdXQsIGVhc2Utb3V0KSxcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yIHZhcigtLXRwcy1kdXItZmFzdCwgODBtcykgdmFyKC0tdHBzLWVhc2Utb3V0LCBlYXNlLW91dCksXG4gICAgICAgICAgICAgIGZpbHRlciB2YXIoLS10cHMtZHVyLWZhc3QsIDgwbXMpIHZhcigtLXRwcy1lYXNlLW91dCwgZWFzZS1vdXQpO1xufVxuXG4udHBzLXBsdWdpbi1oZWFkZXItbGluay0tYmx1ZSxcbi50cHMtcGx1Z2luLWhlYWRlci1saW5rLS1ibHVlOmhvdmVyIHtcbiAgY29sb3I6ICMwM2JkZjI7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzAzYmRmMjtcbn1cblxuLnRwcy1wbHVnaW4taGVhZGVyLWxpbmstLXBpbmssXG4udHBzLXBsdWdpbi1oZWFkZXItbGluay0tcGluazpob3ZlciB7XG4gIGNvbG9yOiAjZjA2N2E2O1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNmMDY3YTY7XG59XG5cbi50cHMtcGx1Z2luLWhlYWRlci1saW5rLS1tdXRlZCxcbi50cHMtcGx1Z2luLWhlYWRlci1saW5rLS1tdXRlZDpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS10cHMtdGV4dC1mYWludCwgdmFyKC0tdGV4dC1zdWJ0bGUsICM4ODgpKSAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCBjdXJyZW50Q29sb3IgNDIlLCB0cmFuc3BhcmVudCk7XG59XG5cbi50cHMtcGx1Z2luLWhlYWRlci1saW5rOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHRyYW5zcGFyZW50O1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbn1cblxuLyogXHUyNTAwXHUyNTAwIFNlY3Rpb24gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbi50cHMtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IHZhcigtLXRwcy1zcGFjZS02KSAwIDA7XG59XG5cbi50cHMtc2VjdGlvbjpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi50cHMtc2VjdGlvbiArIC50cHMtc2VjdGlvbiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS10cHMtZGl2aWRlcik7XG59XG5cbi50cHMtc2VjdGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IHZhcigtLXRwcy1mcy1zZWN0aW9uKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLXRwcy1saC10aWdodCk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS10cHMtZnctc2VtaWJvbGQpO1xuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tdHBzLWxzLXNlY3Rpb24pO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogdmFyKC0tdHBzLXRleHQtbXV0ZWQpO1xuICBtYXJnaW46IDAgMCB2YXIoLS10cHMtc3BhY2UtMik7XG59XG5cbi50cHMtc2VjdGlvbi1oaW50IHtcbiAgZm9udC1zaXplOiB2YXIoLS10cHMtZnMtaGludCk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS10cHMtbGgtYmFzZSk7XG4gIGNvbG9yOiB2YXIoLS10cHMtdGV4dC1tdXRlZCk7XG4gIG1hcmdpbjogMCAwIHZhcigtLXRwcy1zcGFjZS0zKTtcbn1cblxuLnRwcy1zZWN0aW9uLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IHZhcigtLXRwcy1zcGFjZS0zKTtcbiAgbWFyZ2luLXRvcDogdmFyKC0tdHBzLXNwYWNlLTIpO1xufVxuXG4udHBzLXNlY3Rpb24tYm9keTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi8qIFdoZW4gdGhlIGJvZHkgaXMgZnVsbCBvZiBsaXN0IHJvd3MgKG1vZGUgcm93cyksIGRyb3AgdGhlIGdhcCBhbmQgdGhlIHRvcFxuICAgbWFyZ2luIGVudGlyZWx5IHNvIHRoZSBmaXJzdCByb3cncyBob3ZlciBiYWNrZ3JvdW5kIHNpdHMgZmx1c2ggdW5kZXIgdGhlXG4gICBzZWN0aW9uIGxhYmVsIGFuZCBhZGphY2VudCByb3dzIHRpbGUgd2l0aCBubyBkZWFkIHNwYWNlIGJldHdlZW4gdGhlbS4gKi9cbi50cHMtc2VjdGlvbi1ib2R5Omhhcyg+IC50cHMtbGlzdC1yb3cpLFxuLnRwcy1zZWN0aW9uLWJvZHk6aGFzKD4gLnRwcy1vcHQpIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZ2FwOiAwO1xufVxuXG4vKiBDb2xsYXBzaWJsZSB2YXJpYW50OiBoZWFkZXIgaXMgYSBidXR0b24sIGJvZHkgaXMgaGlkZGVuIHdoZW4gY2xvc2VkICovXG5cbi50cHMtc2VjdGlvbi0tY29sbGFwc2libGUgPiAudHBzLXNlY3Rpb24taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiB2YXIoLS10cHMtc3BhY2UtMik7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMCB2YXIoLS10cHMtc3BhY2UtMik7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250OiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50cHMtc2VjdGlvbi0tY29sbGFwc2libGUgPiAudHBzLXNlY3Rpb24taGVhZGVyOmhvdmVyIC50cHMtc2VjdGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS10cHMtdGV4dCk7XG59XG5cbi50cHMtc2VjdGlvbi0tY29sbGFwc2libGUgPiAudHBzLXNlY3Rpb24taGVhZGVyIC50cHMtc2VjdGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRwcy1zZWN0aW9uLWNoZXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogdmFyKC0tdHBzLXRleHQtZmFpbnQpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tdHBzLWR1ci1iYXNlKSB2YXIoLS10cHMtZWFzZS1vdXQpO1xufVxuXG4udHBzLXNlY3Rpb24tLWNvbGxhcHNpYmxlW2RhdGEtb3Blbj1cInRydWVcIl0gLnRwcy1zZWN0aW9uLWNoZXYge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi50cHMtc2VjdGlvbi1zdW1tYXJ5IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZm9udC1zaXplOiB2YXIoLS10cHMtZnMtaGludCk7XG4gIGNvbG9yOiB2YXIoLS10cHMtdGV4dC1tdXRlZCk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS10cHMtZnctcmVndWxhcik7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnRwcy1zZWN0aW9uLS1jb2xsYXBzaWJsZVtkYXRhLW9wZW49XCJmYWxzZVwiXSA+IC50cHMtc2VjdGlvbi1ib2R5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogXHUyNTAwXHUyNTAwIE9wdGlvbiByb3cgKGNoZWNrYm94IC8gcmFkaW8gKyBsYWJlbCArIGRlc2MpIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4udHBzLW9wdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMThweCAxZnI7XG4gIGNvbHVtbi1nYXA6IHZhcigtLXRwcy1zcGFjZS0zKTtcbiAgcm93LWdhcDogMnB4O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBtYXJnaW46IDAgLTEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRwcy1yYWRpdXMtbWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgdmFyKC0tdHBzLWR1ci1mYXN0KSB2YXIoLS10cHMtZWFzZS1vdXQpO1xufVxuXG4vKiBTdGFjayBvcHRpb24gcm93cyB0aWdodCBzbyB0aGUgaG92ZXIgYmFja2dyb3VuZCBvZiBvbmUgbWVldHMgdGhlIG5leHRcbiAgIHdpdGhvdXQgYSB2aXNpYmxlIGdhcCBhYm92ZS4gT3V0ZXIgc2VjdGlvbiBnYXAgaXMgaGFuZGxlZCBieSB0aGUgc2VjdGlvblxuICAgaXRzZWxmLCBub3QgYnkgc3BhY2luZyBiZXR3ZWVuIG9wdHMuICovXG4udHBzLXNlY3Rpb24tYm9keSA+IC50cHMtb3B0ICsgLnRwcy1vcHQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLnRwcy1zZWN0aW9uLWJvZHk6aGFzKD4gLnRwcy1vcHQpIHtcbiAgZ2FwOiAwO1xufVxuXG4udHBzLW9wdDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRwcy1iZy1ob3Zlcik7XG59XG5cbi50cHMtb3B0ID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuLnRwcy1vcHQgPiBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luOiAwO1xuICBhY2NlbnQtY29sb3I6IHZhcigtLXRwcy1hY2NlbnQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50cHMtb3B0ID4gLnRwcy1vcHQtbGFiZWwge1xuICBncmlkLWNvbHVtbjogMjtcbiAgZ3JpZC1yb3c6IDE7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdHBzLWZzLWxhYmVsKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLXRwcy1saC1iYXNlKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLXRwcy1mdy1tZWRpdW0pO1xuICBjb2xvcjogdmFyKC0tdHBzLXRleHQpO1xuICB0cmFuc2l0aW9uOiBjb2xvciB2YXIoLS10cHMtZHVyLWZhc3QpIHZhcigtLXRwcy1lYXNlLW91dCk7XG59XG5cbi50cHMtb3B0ID4gLnRwcy1vcHQtZGVzYyB7XG4gIGdyaWQtY29sdW1uOiAyO1xuICBncmlkLXJvdzogMjtcbiAgZm9udC1zaXplOiB2YXIoLS10cHMtZnMtZGVzYyk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS10cHMtbGgtYmFzZSk7XG4gIGNvbG9yOiB2YXIoLS10cHMtdGV4dC1tdXRlZCk7XG59XG5cbi50cHMtb3B0ID4gaW5wdXQ6Y2hlY2tlZCB+IC50cHMtb3B0LWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLXRwcy1hY2NlbnQpO1xufVxuXG4vKiBcdTI1MDBcdTI1MDAgTnVtZXJpYyBzdGVwcGVyIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4udHBzLW51bSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogdmFyKC0tdHBzLXNwYWNlLTEpO1xufVxuXG4udHBzLW51bS1sYWJlbCB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtaW4td2lkdGg6IDA7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdHBzLWZzLWxhYmVsKTtcbiAgY29sb3I6IHZhcigtLXRwcy10ZXh0KTtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS10cHMtc3BhY2UtMik7XG59XG5cbi50cHMtbnVtLXN0ZXAsXG4udHBzLW51bS1pbnB1dCxcbi50cHMtbnVtLXJlc2V0IHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdHBzLWZzLWJ1dHRvbik7XG4gIGhlaWdodDogdmFyKC0tdHBzLWNvbnRyb2wtaC1zbSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRwcy1kaXZpZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdHBzLXJhZGl1cy1zbSk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tdHBzLXRleHQpO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgdmFyKC0tdHBzLWR1ci1mYXN0KSB2YXIoLS10cHMtZWFzZS1vdXQpLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLXRwcy1kdXItZmFzdCkgdmFyKC0tdHBzLWVhc2Utb3V0KSxcbiAgICAgICAgICAgICAgY29sb3IgdmFyKC0tdHBzLWR1ci1mYXN0KSB2YXIoLS10cHMtZWFzZS1vdXQpO1xufVxuXG4udHBzLW51bS1zdGVwIHtcbiAgd2lkdGg6IHZhcigtLXRwcy1udW0tc3RlcC13KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50cHMtbnVtLXN0ZXA6aG92ZXIge1xuICBib3JkZXItY29sb3I6IHZhcigtLXRwcy1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cHMtYmctaG92ZXIpO1xufVxuXG4udHBzLW51bS1zdGVwOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRwcy1iZy1hY3RpdmUpO1xufVxuXG4udHBzLW51bS1pbnB1dCB7XG4gIHdpZHRoOiB2YXIoLS10cHMtaW5wdXQtdyk7XG4gIHBhZGRpbmc6IDAgdmFyKC0tdHBzLXNwYWNlLTIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cHMtYmctaW5wdXQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG4udHBzLW51bS1pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbi50cHMtbnVtLWlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbi50cHMtbnVtLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10cHMtYWNjZW50KTtcbn1cblxuLnRwcy1udW0tdW5pdCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdHBzLWZzLWhpbnQpO1xuICBjb2xvcjogdmFyKC0tdHBzLXRleHQtbXV0ZWQpO1xuICBtYXJnaW46IDAgdmFyKC0tdHBzLXNwYWNlLTIpO1xufVxuXG4udHBzLW51bS1yZXNldCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6IHZhcigtLXRwcy10ZXh0LW11dGVkKTtcbiAgcGFkZGluZzogMCB2YXIoLS10cHMtc3BhY2UtMik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRwcy1udW0tcmVzZXQ6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tdHBzLXRleHQpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXRwcy1ib3JkZXIpO1xufVxuXG4udHBzLW51bS1yZXNldFtoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vKiBTdGFja2VkIGxheW91dDogbGFiZWwgLyBjb250cm9sIHJvdyBpbiBhIDIwMHB4IC8gMWZyIGdyaWQgKi9cblxuLnRwcy1udW0tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiB2YXIoLS10cHMtc3BhY2UtMyk7XG4gIHJvdy1nYXA6IHZhcigtLXRwcy1zcGFjZS0yKTtcbn1cblxuLnRwcy1udW0tZ3JpZCA+IC50cHMtbnVtLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udHBzLW51bS1ncmlkID4gLnRwcy1udW0ge1xuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xufVxuXG4vKiBcdTI1MDBcdTI1MDAgU2xpZGVyIHJvdyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuLnRwcy1zbGlkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwcHggMWZyIDU2cHggYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiB2YXIoLS10cHMtc3BhY2UtMyk7XG59XG5cbi50cHMtc2xpZGVyLWxhYmVsIHtcbiAgZm9udC1zaXplOiB2YXIoLS10cHMtZnMtc2VjdGlvbik7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS10cHMtZnctc2VtaWJvbGQpO1xuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tdHBzLWxzLXNlY3Rpb24pO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogdmFyKC0tdHBzLXRleHQtbXV0ZWQpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnRwcy1zbGlkZXItaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMnB4O1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XG59XG5cbi50cHMtc2xpZGVyLWlucHV0Ojotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gIGhlaWdodDogdmFyKC0tdHBzLXRyYWNrLWgpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRwcy1kaXZpZGVyKTtcbn1cblxuLnRwcy1zbGlkZXItaW5wdXQ6Oi1tb3otcmFuZ2UtdHJhY2sge1xuICBoZWlnaHQ6IHZhcigtLXRwcy10cmFjay1oKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cHMtZGl2aWRlcik7XG59XG5cbi50cHMtc2xpZGVyLWlucHV0Ojotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IHZhcigtLXRwcy10aHVtYi1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS10cHMtdGh1bWItc2l6ZSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRwcy1yYWRpdXMtY2lyY2xlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHBzLWFjY2VudCk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHBzLXNoYWRvdy10aHVtYik7XG4gIGN1cnNvcjogZ3JhYjtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLnRwcy1zbGlkZXItaW5wdXQ6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICB3aWR0aDogdmFyKC0tdHBzLXRodW1iLXNpemUpO1xuICBoZWlnaHQ6IHZhcigtLXRwcy10aHVtYi1zaXplKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdHBzLXJhZGl1cy1jaXJjbGUpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cHMtYWNjZW50KTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3gtc2hhZG93OiB2YXIoLS10cHMtc2hhZG93LXRodW1iKTtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG4udHBzLXNsaWRlci1pbnB1dDphY3RpdmU6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgY3Vyc29yOiBncmFiYmluZztcbn1cblxuLnRwcy1zbGlkZXItdmFsdWUge1xuICBmb250LWZhbWlseTogdmFyKC0tdHBzLWZvbnQtbW9ubyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdHBzLWZzLXZhbHVlKTtcbiAgY29sb3I6IHZhcigtLXRwcy10ZXh0KTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG59XG5cbi8qIFx1MjUwMFx1MjUwMCBTd2F0Y2ggKyBncmlkIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4udHBzLXN3YXRjaC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCB2YXIoLS10cHMtc3dhdGNoLXNpemUpKTtcbiAgZ2FwOiB2YXIoLS10cHMtc3BhY2UtMikgNnB4O1xufVxuXG4udHBzLXN3YXRjaCB7XG4gIHdpZHRoOiB2YXIoLS10cHMtc3dhdGNoLXNpemUpO1xuICBoZWlnaHQ6IHZhcigtLXRwcy1zd2F0Y2gtc2l6ZSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRwcy1yYWRpdXMtY2lyY2xlKTtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tdHBzLWR1ci1mYXN0KSB2YXIoLS10cHMtZWFzZS1vdXQpLFxuICAgICAgICAgICAgICBib3gtc2hhZG93IHZhcigtLXRwcy1kdXItZmFzdCkgdmFyKC0tdHBzLWVhc2Utb3V0KTtcbn1cblxuLnRwcy1zd2F0Y2g6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi50cHMtc3dhdGNoW2FyaWEtcHJlc3NlZD1cInRydWVcIl0ge1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggdmFyKC0tdHBzLWFjY2VudCk7XG59XG5cbi8qIFx1MjUwMFx1MjUwMCBMaXN0IHJvd3MgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbi50cHMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50cHMtbGlzdC1oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE4cHggMWZyIGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogdmFyKC0tdHBzLXNwYWNlLTMpO1xuICBwYWRkaW5nOiB2YXIoLS10cHMtc3BhY2UtMikgdmFyKC0tdHBzLXNwYWNlLTMpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHBzLWRpdmlkZXIpO1xuICBmb250LXNpemU6IHZhcigtLXRwcy1mcy1saXN0LWhlYWRlcik7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS10cHMtZnctYm9sZCk7XG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS10cHMtbHMtbGlzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS10cHMtdGV4dC1mYWludCk7XG59XG5cbi50cHMtbGlzdC1yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE4cHggMWZyIGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogdmFyKC0tdHBzLXNwYWNlLTMpO1xuICBwYWRkaW5nOiB2YXIoLS10cHMtc3BhY2UtMikgdmFyKC0tdHBzLXNwYWNlLTMpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdHBzLWRpdmlkZXIpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLXRwcy1kdXItZmFzdCkgdmFyKC0tdHBzLWVhc2Utb3V0KTtcbn1cblxuLnRwcy1saXN0LXJvdzpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuLnRwcy1saXN0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRwcy1iZy1ob3Zlcik7XG59XG5cbi50cHMtbGlzdC1uYW1lIHtcbiAgZm9udC1zaXplOiB2YXIoLS10cHMtZnMtbGFiZWwpO1xuICBjb2xvcjogdmFyKC0tdHBzLXRleHQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLyogXHUyNTAwXHUyNTAwIFRhYnMgLyBzZWdtZW50ZWQgY29udHJvbCBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuLnRwcy10YWJzIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogdmFyKC0tdHBzLXNwYWNlLTEpO1xuICBwYWRkaW5nOiAwO1xufVxuXG4udHBzLXRhYiB7XG4gIGhlaWdodDogdmFyKC0tdHBzLWNvbnRyb2wtaC1zbSk7XG4gIHBhZGRpbmc6IDAgdmFyKC0tdHBzLXNwYWNlLTIpO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiB2YXIoLS10cHMtZnMtYnV0dG9uKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLXRwcy1mdy1tZWRpdW0pO1xuICBjb2xvcjogdmFyKC0tdHBzLXRleHQtbXV0ZWQpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRwcy1yYWRpdXMtc20pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgdmFyKC0tdHBzLWR1ci1mYXN0KSB2YXIoLS10cHMtZWFzZS1vdXQpLFxuICAgICAgICAgICAgICBib3JkZXItY29sb3IgdmFyKC0tdHBzLWR1ci1mYXN0KSB2YXIoLS10cHMtZWFzZS1vdXQpLFxuICAgICAgICAgICAgICBjb2xvciB2YXIoLS10cHMtZHVyLWZhc3QpIHZhcigtLXRwcy1lYXNlLW91dCk7XG59XG5cbi50cHMtdGFiOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHBzLWJnLWhvdmVyKTtcbiAgY29sb3I6IHZhcigtLXRwcy10ZXh0KTtcbn1cblxuLnRwcy10YWJbYXJpYS1wcmVzc2VkPVwidHJ1ZVwiXSxcbi50cHMtdGFiW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHBzLWFjY2VudC1zb2Z0KTtcbiAgY29sb3I6IHZhcigtLXRwcy1hY2NlbnQpO1xuICBib3JkZXItY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS10cHMtYWNjZW50KSA1MCUsIHRyYW5zcGFyZW50KTtcbn1cblxuLyogXHUyNTAwXHUyNTAwIEJ1dHRvbnMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbi50cHMtYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IHZhcigtLXRwcy1zcGFjZS0xKTtcbiAgaGVpZ2h0OiB2YXIoLS10cHMtY29udHJvbC1oLXNtKTtcbiAgcGFkZGluZzogMCB2YXIoLS10cHMtc3BhY2UtMyk7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IHZhcigtLXRwcy1mcy1idXR0b24pO1xuICBmb250LXdlaWdodDogdmFyKC0tdHBzLWZ3LW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRwcy1yYWRpdXMtc20pO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLXRwcy1kdXItZmFzdCkgdmFyKC0tdHBzLWVhc2Utb3V0KSxcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yIHZhcigtLXRwcy1kdXItZmFzdCkgdmFyKC0tdHBzLWVhc2Utb3V0KSxcbiAgICAgICAgICAgICAgY29sb3IgdmFyKC0tdHBzLWR1ci1mYXN0KSB2YXIoLS10cHMtZWFzZS1vdXQpO1xufVxuXG4udHBzLWJ1dHRvbi0tbWQgeyBoZWlnaHQ6IHZhcigtLXRwcy1jb250cm9sLWgtbWQpOyBwYWRkaW5nOiAwIHZhcigtLXRwcy1zcGFjZS00KTsgfVxuXG4udHBzLWJ1dHRvbi0tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRwcy1hY2NlbnQpO1xuICBjb2xvcjogIzBiMGIwYjtcbn1cblxuLnRwcy1idXR0b24tLXByaW1hcnk6aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4wOCk7XG59XG5cbi50cHMtYnV0dG9uLS1naG9zdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHZhcigtLXRwcy1kaXZpZGVyKTtcbiAgY29sb3I6IHZhcigtLXRwcy10ZXh0KTtcbn1cblxuLnRwcy1idXR0b24tLWdob3N0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHBzLWJnLWhvdmVyKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10cHMtYm9yZGVyKTtcbn1cblxuLnRwcy1idXR0b24tLWRhbmdlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHZhcigtLXRwcy1kaXZpZGVyKTtcbiAgY29sb3I6IHZhcigtLXRwcy10ZXh0LW11dGVkKTtcbn1cblxuLnRwcy1idXR0b24tLWRhbmdlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRwcy1kYW5nZXItc29mdCk7XG4gIGJvcmRlci1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXRwcy1kYW5nZXIpIDQwJSwgdHJhbnNwYXJlbnQpO1xuICBjb2xvcjogdmFyKC0tdHBzLWRhbmdlcik7XG59XG5cbi8qIFx1MjUwMFx1MjUwMCBGb2N1cyByaW5ncyAoY3VzdG9tIGNvbnRyb2xzIG9ubHkgXHUyMDE0IG5hdGl2ZSBpbnB1dHMgdXNlIGFjY2VudC1jb2xvcikgXHUyNTAwICovXG5cbi50cHMtdGFiOmZvY3VzLXZpc2libGUsXG4udHBzLWJ1dHRvbjpmb2N1cy12aXNpYmxlLFxuLnRwcy1udW0tc3RlcDpmb2N1cy12aXNpYmxlLFxuLnRwcy1udW0tcmVzZXQ6Zm9jdXMtdmlzaWJsZSxcbi50cHMtc3dhdGNoOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tdHBzLWFjY2VudCk7XG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XG59XG5cbi8qIFx1MjUwMFx1MjUwMCBJbnNldCBjYXJkIHZhcmlhbnQgKHJhcmUgXHUyMDE0IGZvciBwYWxldHRlLXBpY2tlciBib2R5LCBldGMuKSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuLnRwcy1jYXJkIHtcbiAgcGFkZGluZzogdmFyKC0tdHBzLXNwYWNlLTMpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS10cHMtcmFkaXVzLWxnKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHBzLWJnLWlucHV0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHBzLWRpdmlkZXIpO1xufVxuIiwgIi8qXG4gKiBUaHltZXIgUGx1Z2luIFBhbmVsIFx1MjAxNCBSZW5kZXIgSGVscGVyc1xuICpcbiAqIERPTSBmYWN0b3J5IGZ1bmN0aW9ucyBmb3IgdGhlIGNhbm9uaWNhbCBwYW5lbCBwcmltaXRpdmVzLlxuICogUGx1Z2lucyBpbXBvcnQgdGhlc2Ugc28gdGhleSBkb24ndCBoYXZlIHRvIG1lbW9yaXplIG1hcmt1cC5cbiAqXG4gKiBVc2FnZSBpbiBhIHBsdWdpbjpcbiAqXG4gKiAgIGltcG9ydCB7IFBBTkVMX0NTUywgcGFuZWwsIHBsdWdpbkhlYWRlciwgc2VjdGlvbiwgb3B0aW9uUm93LCBudW1iZXJSb3cgfVxuICogICAgIGZyb20gJy4uL19wYW5lbC1zeXN0ZW0vaGVscGVycy5qcyc7XG4gKlxuICogICBvbkxvYWQoKSB7XG4gKiAgICAgdGhpcy51aS5pbmplY3RDU1MoUEFORUxfQ1NTKTtcbiAqICAgICAvLyAuLi5cbiAqICAgICBjb25zdCByb290ID0gcGFuZWwoeyBwbHVnaW5DbGFzczogJ3BsZy1mb28tcGFuZWwnIH0sIFtcbiAqICAgICAgIHBsdWdpbkhlYWRlcih7XG4gKiAgICAgICAgIHRpdGxlOiAnTXkgUGx1Z2luJyxcbiAqICAgICAgICAgbGVkZTogJ1doYXQgdGhpcyBwbHVnaW4gZG9lcyBpbiBvbmUgc2VudGVuY2UuJyxcbiAqICAgICAgICAgaWNvbjogJ3RpLXB1enpsZScsXG4gKiAgICAgICAgIHZlcnNpb246ICcxLjAnLFxuICogICAgICAgfSksXG4gKiAgICAgICBzZWN0aW9uKHsgbGFiZWw6ICdCZWhhdmlvcicsIGJvZHk6IFtcbiAqICAgICAgICAgb3B0aW9uUm93KHsgdHlwZTogJ2NoZWNrYm94JywgbmFtZTogJ2ZvbycsIGxhYmVsOiAnRW5hYmxlIGZvbycsXG4gKiAgICAgICAgICAgICAgICAgICAgIGRlc2M6ICdXaHkgeW91IG1pZ2h0IHdhbnQgdGhpcy4nLCBjaGVja2VkOiB0cnVlIH0pLFxuICogICAgICAgXX0pLFxuICogICAgIF0pO1xuICogICAgIHRoaXMuX3BhbmVsRWwuYXBwZW5kQ2hpbGQocm9vdCk7XG4gKiAgIH1cbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vLyBUaGUgYnVpbGQgcGlwZWxpbmUgKC5zZGsvZGV2LmpzKSBjb25maWd1cmVzIGVzYnVpbGQgd2l0aCBgLmNzczogJ3RleHQnYCxcbi8vIHNvIHRoZXNlIGltcG9ydHMgcmVzb2x2ZSB0byBpbmxpbmVkIHN0cmluZ3MgdGhhdCBnZXQgYnVuZGxlZCBpbnRvIHRoZSBwbHVnaW4uXG5pbXBvcnQgVE9LRU5TX0NTUyBmcm9tICcuL3Rva2Vucy5jc3MnO1xuaW1wb3J0IENPTVBPTkVOVFNfQ1NTIGZyb20gJy4vY29tcG9uZW50cy5jc3MnO1xuXG5leHBvcnQgY29uc3QgUEFORUxfVE9LRU5TX0NTUyA9IFRPS0VOU19DU1M7XG5leHBvcnQgY29uc3QgUEFORUxfQ09NUE9ORU5UU19DU1MgPSBDT01QT05FTlRTX0NTUztcbmV4cG9ydCBjb25zdCBQQU5FTF9DU1MgPSBUT0tFTlNfQ1NTICsgJ1xcbicgKyBDT01QT05FTlRTX0NTUztcblxuLyogXHUyNTAwXHUyNTAwIFRpbnkgaHlwZXJzY3JpcHQgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbi8qKlxuICogaCh0YWcsIHByb3BzLCAuLi5jaGlsZHJlbikgXHUyMTkyIEhUTUxFbGVtZW50LlxuICogIC0gcHJvcHM6IG9iamVjdCBvZiBhdHRyaWJ1dGVzL3Byb3BlcnRpZXMuIFNwZWNpYWwga2V5czpcbiAqICAgICAgY2xhc3MgfCBjbGFzc05hbWUgICAgIFx1MjE5MiBjbGFzcyBhdHRyaWJ1dGVcbiAqICAgICAgc3R5bGUgICAgICAgICAgICAgICAgIFx1MjE5MiBvYmplY3Qgb3Igc3RyaW5nXG4gKiAgICAgIGRhdGFzZXQgICAgICAgICAgICAgICBcdTIxOTIgb2JqZWN0IFx1MjE5MiBkYXRhLSogYXR0cmlidXRlc1xuICogICAgICBvbntFdmVudH0gICAgICAgICAgICAgXHUyMTkyIGV2ZW50IGxpc3RlbmVyIChlLmcuIG9uQ2xpY2sgXHUyMTkyICdjbGljaycpXG4gKiAgICAgIDxvdGhlcj4gICAgICAgICAgICAgICBcdTIxOTIgc2V0QXR0cmlidXRlLCBmYWxsaW5nIGJhY2sgdG8gcHJvcGVydHkgYXNzaWdubWVudFxuICogIC0gY2hpbGRyZW46IHN0cmluZ3MgKHRleHRDb250ZW50KSwgbm9kZXMsIGFycmF5cywgbnVsbC9mYWxzZS91bmRlZmluZWQgKHNraXBwZWQpLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgYW55PiB8IG51bGx9IFtwcm9wc11cbiAqIEBwYXJhbSB7Li4uYW55fSBjaGlsZHJlblxuICogQHJldHVybnMge2FueX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGgodGFnLCBwcm9wcywgLi4uY2hpbGRyZW4pIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGNvbnN0IGRvbSA9IC8qKiBAdHlwZSB7YW55fSAqLyAoZWwpO1xuICBpZiAocHJvcHMpIHtcbiAgICBmb3IgKGNvbnN0IGsgaW4gcHJvcHMpIHtcbiAgICAgIGNvbnN0IHYgPSBwcm9wc1trXTtcbiAgICAgIGlmICh2ID09IG51bGwgfHwgdiA9PT0gZmFsc2UpIGNvbnRpbnVlO1xuICAgICAgaWYgKGsgPT09ICdjbGFzcycgfHwgayA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gdjtcbiAgICAgIH0gZWxzZSBpZiAoayA9PT0gJ3N0eWxlJyAmJiB0eXBlb2YgdiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbC5zdHlsZSwgdik7XG4gICAgICB9IGVsc2UgaWYgKGsgPT09ICdkYXRhc2V0JyAmJiB0eXBlb2YgdiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9yIChjb25zdCBkayBpbiB2KSBlbC5kYXRhc2V0W2RrXSA9IHZbZGtdO1xuICAgICAgfSBlbHNlIGlmIChrLnN0YXJ0c1dpdGgoJ29uJykgJiYgdHlwZW9mIHYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihrLnNsaWNlKDIpLnRvTG93ZXJDYXNlKCksIHYpO1xuICAgICAgfSBlbHNlIGlmIChrIGluIGRvbSAmJiB0eXBlb2YgZG9tW2tdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRyeSB7IGRvbVtrXSA9IHY7IH0gY2F0Y2ggeyBlbC5zZXRBdHRyaWJ1dGUoaywgdik7IH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShrLCB2ID09PSB0cnVlID8gJycgOiBTdHJpbmcodikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhcHBlbmRDaGlsZHJlbihlbCwgY2hpbGRyZW4pO1xuICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gKiBAcGFyYW0ge2FueVtdfSBjaGlsZHJlblxuICovXG5mdW5jdGlvbiBhcHBlbmRDaGlsZHJlbihwYXJlbnQsIGNoaWxkcmVuKSB7XG4gIGZvciAoY29uc3QgYyBvZiBjaGlsZHJlbikge1xuICAgIGlmIChjID09IG51bGwgfHwgYyA9PT0gZmFsc2UpIGNvbnRpbnVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGMpKSB7IGFwcGVuZENoaWxkcmVuKHBhcmVudCwgYyk7IGNvbnRpbnVlOyB9XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGMgaW5zdGFuY2VvZiBOb2RlID8gYyA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhjKSkpO1xuICB9XG59XG5cbi8qIFx1MjUwMFx1MjUwMCBQYW5lbCByb290IFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4vKipcbiAqIEJ1aWxkIHRoZSByb290IC50cHMtcGFuZWwgZWxlbWVudC4gYHBsdWdpbkNsYXNzYCBpcyB0aGUgcGVyLXBsdWdpbiBzY29wZSBjbGFzc1xuICogKGUuZy4gJ3BsZy1jb2xsZWN0aW9uLWNvbG9ycy1wYW5lbCcpIHdoZXJlIHBsdWdpbi1zcGVjaWZpYyBvdmVycmlkZXMgYXBwbHkuXG4gKlxuICogQHBhcmFtIHt7cGx1Z2luQ2xhc3M/OiBzdHJpbmd9fSBbb3B0c11cbiAqIEBwYXJhbSB7YW55W119IFtjaGlsZHJlbl1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhbmVsKHsgcGx1Z2luQ2xhc3MgfSA9IHt9LCBjaGlsZHJlbiA9IFtdKSB7XG4gIGNvbnN0IGNscyA9IFsndHBzLXBhbmVsJywgcGx1Z2luQ2xhc3NdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG4gIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiBjbHMgfSwgLi4uY2hpbGRyZW4pO1xufVxuXG4vKiogQHBhcmFtIHtzdHJpbmd9IHRleHQgKi9cbmV4cG9ydCBmdW5jdGlvbiB0aXRsZSh0ZXh0KSB7XG4gIHJldHVybiBoKCdoMScsIHsgY2xhc3M6ICd0cHMtdGl0bGUnIH0sIHRleHQpO1xufVxuXG4vKiogQHBhcmFtIHtzdHJpbmd9IHRleHQgKi9cbmV4cG9ydCBmdW5jdGlvbiBsZWRlKHRleHQpIHtcbiAgcmV0dXJuIGgoJ3AnLCB7IGNsYXNzOiAndHBzLWxlZGUnIH0sIHRleHQpO1xufVxuXG4vKipcbiAqIENhbm9uaWNhbCBwbHVnaW4gY29uZmlndXJhdGlvbiBoZWFkZXIuXG4gKlxuICogTWF0Y2hlcyB0aGUgQ29sbGVjdGlvbiBJY29ucyBoZWFkZXIgdHJlYXRtZW50OiBjb21wYWN0IHRpdGxlL2xlZGUsXG4gKiBzbWFsbCBhdHRyaWJ1dGlvbiBsaW5rcywgYW5kIFJEWS1jb2xvciByYWlscyBhcm91bmQgdGhlIGJsb2NrLlxuICpcbiAqIEBwYXJhbSB7e3RpdGxlOiBzdHJpbmcsIGxlZGU/OiBzdHJpbmcsIGljb24/OiBzdHJpbmcsIHZlcnNpb24/OiBzdHJpbmd9fSBhcmdzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwbHVnaW5IZWFkZXIoeyB0aXRsZTogaGVhZGluZywgbGVkZTogbGVkZVRleHQsIGljb24gPSAnJywgdmVyc2lvbiA9ICcxLjAnIH0pIHtcbiAgY29uc3QgaWNvbkNsYXNzID0gaWNvbiA/IChpY29uLnN0YXJ0c1dpdGgoJ3RpLScpID8gaWNvbiA6IGB0aS0ke2ljb259YCkgOiAnJztcbiAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6ICd0cHMtcGx1Z2luLWhlYWRlcicgfSxcbiAgICBpY29uQ2xhc3MgPyBoKCdkaXYnLCB7IGNsYXNzOiAndHBzLXBsdWdpbi1oZWFkZXItbG9nbycsICdhcmlhLWhpZGRlbic6ICd0cnVlJyB9LFxuICAgICAgaCgnaScsIHsgY2xhc3M6IGB0aSAke2ljb25DbGFzc30gdHBzLXBsdWdpbi1oZWFkZXItbG9nby1pY29uYCwgJ2FyaWEtaGlkZGVuJzogJ3RydWUnIH0pLFxuICAgICkgOiBudWxsLFxuICAgIGgoJ2gxJywgeyBjbGFzczogJ3Rwcy1wbHVnaW4taGVhZGVyLXRpdGxlJyB9LCBoZWFkaW5nKSxcbiAgICBsZWRlVGV4dCA/IGgoJ3AnLCB7IGNsYXNzOiAndHBzLXBsdWdpbi1oZWFkZXItbGVkZScgfSwgbGVkZVRleHQpIDogbnVsbCxcbiAgICBoKCdwJywgeyBjbGFzczogJ3Rwcy1wbHVnaW4taGVhZGVyLWF0dHInIH0sXG4gICAgICBoKCdzcGFuJywgeyBjbGFzczogJ3Rwcy1wbHVnaW4taGVhZGVyLWxpbmstZ3JvdXAnIH0sXG4gICAgICAgIGgoJ2knLCB7IGNsYXNzOiAndGkgdGktbGluayB0cHMtcGx1Z2luLWhlYWRlci1pY29uJywgJ2FyaWEtaGlkZGVuJzogJ3RydWUnIH0pLFxuICAgICAgICBoKCdhJywge1xuICAgICAgICAgIGNsYXNzOiAndHBzLXBsdWdpbi1oZWFkZXItbGluayB0cHMtcGx1Z2luLWhlYWRlci1saW5rLS1ibHVlJyxcbiAgICAgICAgICBocmVmOiAnaHR0cHM6Ly9ha2FyZWFkeS5jb20nLFxuICAgICAgICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgICAgICAgcmVsOiAnbm9vcGVuZXIgbm9yZWZlcnJlcicsXG4gICAgICAgIH0sICdAYWthcmVhZHknKSxcbiAgICAgICksXG4gICAgICBoKCdzcGFuJywgeyBjbGFzczogJ3Rwcy1wbHVnaW4taGVhZGVyLWxpbmstZ3JvdXAnIH0sXG4gICAgICAgIGgoJ2knLCB7IGNsYXNzOiAndGkgdGktY29mZmVlIHRwcy1wbHVnaW4taGVhZGVyLWljb24nLCAnYXJpYS1oaWRkZW4nOiAndHJ1ZScgfSksXG4gICAgICAgIGgoJ2EnLCB7XG4gICAgICAgICAgY2xhc3M6ICd0cHMtcGx1Z2luLWhlYWRlci1saW5rIHRwcy1wbHVnaW4taGVhZGVyLWxpbmstLXBpbmsnLFxuICAgICAgICAgIGhyZWY6ICdodHRwczovL2J1eW1lYWNvZmZlZS5jb20vYWthcmVhZHknLFxuICAgICAgICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgICAgICAgcmVsOiAnbm9vcGVuZXIgbm9yZWZlcnJlcicsXG4gICAgICAgIH0sICdidXkgbWUgYSBjb2ZmZWUnKSxcbiAgICAgICksXG4gICAgICB2ZXJzaW9uID8gaCgnc3BhbicsIHsgY2xhc3M6ICd0cHMtcGx1Z2luLWhlYWRlci1saW5rLWdyb3VwJyB9LFxuICAgICAgICBoKCdzcGFuJywgeyBjbGFzczogJ3Rwcy1wbHVnaW4taGVhZGVyLWljb24gdHBzLXBsdWdpbi1oZWFkZXItaWNvbmlmeSB0cHMtcGx1Z2luLWhlYWRlci1pY29uaWZ5LWdpdGh1YicsICdhcmlhLWhpZGRlbic6ICd0cnVlJyB9KSxcbiAgICAgICAgaCgnYScsIHsgY2xhc3M6ICd0cHMtcGx1Z2luLWhlYWRlci1saW5rIHRwcy1wbHVnaW4taGVhZGVyLWxpbmstLW11dGVkIHRwcy1wbHVnaW4taGVhZGVyLXZlcnNpb24nLCBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL2FrYXJlYWR5JywgdGFyZ2V0OiAnX2JsYW5rJywgcmVsOiAnbm9vcGVuZXIgbm9yZWZlcnJlcicgfSwgYHYke3ZlcnNpb259YCksXG4gICAgICApIDogbnVsbCxcbiAgICApLFxuICApO1xufVxuXG4vKiBcdTI1MDBcdTI1MDAgU2VjdGlvbiBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuLyoqXG4gKiBzZWN0aW9uKHsgbGFiZWwsIGhpbnQsIGNvbGxhcHNpYmxlLCBkZWZhdWx0T3Blbiwgc3VtbWFyeSwgYm9keSB9KVxuICogICAtIGxhYmVsOiByZXF1aXJlZCwgdXBwZXJjYXNlZCBzbWFsbC1jYXBzXG4gKiAgIC0gaGludDogb3B0aW9uYWwgb25lLWxpbmUgZGVzY3JpcHRpb25cbiAqICAgLSBjb2xsYXBzaWJsZTogYm9vbGVhbiwgZGVmYXVsdCBmYWxzZVxuICogICAtIGRlZmF1bHRPcGVuOiBib29sZWFuLCBkZWZhdWx0IHRydWUgKGNvbGxhcHNpYmxlIG9ubHkpXG4gKiAgIC0gb3BlbjogY29udHJvbGxlZCBvcGVuIHN0YXRlIChvcHRpb25hbClcbiAqICAgLSBvblRvZ2dsZTogb3B0aW9uYWwgY2FsbGJhY2sgd2l0aCBuZXh0IG9wZW4gc3RhdGVcbiAqICAgLSBzdW1tYXJ5OiBvcHRpb25hbCB0ZXh0L2VsZW1lbnQgc2hvd24gaW4gaGVhZGVyIHdoZW4gY29sbGFwc2VkXG4gKiAgIC0gYm9keTogYXJyYXkgb2YgY2hpbGRyZW4gKG9yIHNpbmdsZSBlbGVtZW50KVxuICpcbiAqIEBwYXJhbSB7e1xuICogICBsYWJlbDogc3RyaW5nLFxuICogICBoaW50Pzogc3RyaW5nLFxuICogICBjb2xsYXBzaWJsZT86IGJvb2xlYW4sXG4gKiAgIGRlZmF1bHRPcGVuPzogYm9vbGVhbixcbiAqICAgb3Blbj86IGJvb2xlYW4sXG4gKiAgIG9uVG9nZ2xlPzogKG9wZW46IGJvb2xlYW4pID0+IHZvaWQsXG4gKiAgIHN1bW1hcnk/OiBhbnksXG4gKiAgIGJvZHk/OiBhbnlcbiAqIH19IGFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlY3Rpb24oeyBsYWJlbCwgaGludCwgY29sbGFwc2libGUsIGRlZmF1bHRPcGVuID0gdHJ1ZSwgb3Blbiwgb25Ub2dnbGUsIHN1bW1hcnksIGJvZHkgPSBbXSB9KSB7XG4gIGNvbnN0IGJvZHlDaGlsZHJlbiA9IEFycmF5LmlzQXJyYXkoYm9keSkgPyBib2R5IDogW2JvZHldO1xuICBjb25zdCBib2R5RWwgPSBoKCdkaXYnLCB7IGNsYXNzOiAndHBzLXNlY3Rpb24tYm9keScgfSwgLi4uYm9keUNoaWxkcmVuKTtcblxuICBpZiAoIWNvbGxhcHNpYmxlKSB7XG4gICAgcmV0dXJuIGgoJ3NlY3Rpb24nLCB7IGNsYXNzOiAndHBzLXNlY3Rpb24nIH0sXG4gICAgICBoKCdkaXYnLCB7IGNsYXNzOiAndHBzLXNlY3Rpb24tbGFiZWwnIH0sIGxhYmVsKSxcbiAgICAgIGhpbnQgPyBoKCdwJywgeyBjbGFzczogJ3Rwcy1zZWN0aW9uLWhpbnQnIH0sIGhpbnQpIDogbnVsbCxcbiAgICAgIGJvZHlFbCxcbiAgICApO1xuICB9XG5cbiAgY29uc3QgaW5pdGlhbE9wZW4gPSBvcGVuID09IG51bGwgPyAhIWRlZmF1bHRPcGVuIDogISFvcGVuO1xuICBjb25zdCBzZWN0aW9uRWwgPSBoKCdzZWN0aW9uJywge1xuICAgIGNsYXNzOiAndHBzLXNlY3Rpb24gdHBzLXNlY3Rpb24tLWNvbGxhcHNpYmxlJyxcbiAgICBkYXRhc2V0OiB7IG9wZW46IFN0cmluZyhpbml0aWFsT3BlbikgfSxcbiAgfSk7XG5cbiAgY29uc3QgY2hldiA9IGgoJ3NwYW4nLCB7IGNsYXNzOiAndHBzLXNlY3Rpb24tY2hldicsICdhcmlhLWhpZGRlbic6ICd0cnVlJyB9LCAnXHUyNUI4Jyk7XG4gIGNvbnN0IGxhYmVsRWwgPSBoKCdzcGFuJywgeyBjbGFzczogJ3Rwcy1zZWN0aW9uLWxhYmVsJyB9LCBsYWJlbCk7XG4gIGNvbnN0IHN1bW1hcnlFbCA9IHN1bW1hcnlcbiAgICA/IGgoJ3NwYW4nLCB7IGNsYXNzOiAndHBzLXNlY3Rpb24tc3VtbWFyeScgfSwgc3VtbWFyeSlcbiAgICA6IG51bGw7XG5cbiAgY29uc3QgaGVhZGVyID0gaCgnYnV0dG9uJywge1xuICAgIHR5cGU6ICdidXR0b24nLFxuICAgIGNsYXNzOiAndHBzLXNlY3Rpb24taGVhZGVyJyxcbiAgICAnYXJpYS1leHBhbmRlZCc6IFN0cmluZyhpbml0aWFsT3BlbiksXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgY29uc3Qgb3BlbiA9IHNlY3Rpb25FbC5kYXRhc2V0Lm9wZW4gIT09ICd0cnVlJztcbiAgICAgIHNlY3Rpb25FbC5kYXRhc2V0Lm9wZW4gPSBTdHJpbmcob3Blbik7XG4gICAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgU3RyaW5nKG9wZW4pKTtcbiAgICAgIGlmIChvblRvZ2dsZSkgb25Ub2dnbGUob3Blbik7XG4gICAgfSxcbiAgfSwgY2hldiwgbGFiZWxFbCwgc3VtbWFyeUVsKTtcblxuICBzZWN0aW9uRWwuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgaWYgKGhpbnQpIHNlY3Rpb25FbC5hcHBlbmRDaGlsZChoKCdwJywgeyBjbGFzczogJ3Rwcy1zZWN0aW9uLWhpbnQnIH0sIGhpbnQpKTtcbiAgc2VjdGlvbkVsLmFwcGVuZENoaWxkKGJvZHlFbCk7XG4gIHJldHVybiBzZWN0aW9uRWw7XG59XG5cbi8qIFx1MjUwMFx1MjUwMCBPcHRpb24gcm93IChjaGVja2JveCAvIHJhZGlvICsgbGFiZWwgKyBkZXNjKSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuLyoqXG4gKiBvcHRpb25Sb3coeyB0eXBlLCBuYW1lLCB2YWx1ZSwgbGFiZWwsIGRlc2MsIGNoZWNrZWQsIG9uQ2hhbmdlIH0pXG4gKiAgIC0gdHlwZTogJ2NoZWNrYm94JyB8ICdyYWRpbydcbiAqICAgLSBuYW1lOiBpbnB1dFtuYW1lXSAoZ3JvdXBzIHJhZGlvcylcbiAqICAgLSB2YWx1ZTogaW5wdXRbdmFsdWVdIChyYWRpb3MgdXN1YWxseSlcbiAqICAgLSBsYWJlbDogcmVxdWlyZWRcbiAqICAgLSBkZXNjOiBvcHRpb25hbCBvbmUtbGluZSBzdWJsYWJlbFxuICogICAtIGNoZWNrZWQ6IGJvb2xlYW5cbiAqICAgLSBvbkNoYW5nZTogKGV2ZW50KSA9PiB2b2lkXG4gKlxuICogQHBhcmFtIHt7XG4gKiAgIHR5cGU/OiBzdHJpbmcsXG4gKiAgIG5hbWU/OiBzdHJpbmcsXG4gKiAgIHZhbHVlPzogc3RyaW5nLFxuICogICBsYWJlbDogc3RyaW5nLFxuICogICBkZXNjPzogc3RyaW5nLFxuICogICBjaGVja2VkPzogYm9vbGVhbixcbiAqICAgb25DaGFuZ2U/OiAoZTogRXZlbnQpID0+IHZvaWQsXG4gKiB9fSBhcmdzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcHRpb25Sb3coeyB0eXBlID0gJ2NoZWNrYm94JywgbmFtZSwgdmFsdWUsIGxhYmVsLCBkZXNjLCBjaGVja2VkLCBvbkNoYW5nZSB9KSB7XG4gIGNvbnN0IGlkID0gYHRwcy1vcHQtJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCA5KX1gO1xuICBjb25zdCBpbnB1dCA9IGgoJ2lucHV0Jywge1xuICAgIHR5cGUsIG5hbWUsIHZhbHVlLCBpZCxcbiAgICBjaGVja2VkOiAhIWNoZWNrZWQsXG4gICAgb25DaGFuZ2U6IG9uQ2hhbmdlID8gKC8qKiBAdHlwZSB7RXZlbnR9ICovIGUpID0+IG9uQ2hhbmdlKGUpIDogbnVsbCxcbiAgfSk7XG4gIGNvbnN0IGxhYmVsRWwgPSBoKCdsYWJlbCcsIHsgY2xhc3M6ICd0cHMtb3B0LWxhYmVsJywgZm9yOiBpZCB9LCBsYWJlbCk7XG4gIGNvbnN0IGRlc2NFbCA9IGRlc2MgPyBoKCdsYWJlbCcsIHsgY2xhc3M6ICd0cHMtb3B0LWRlc2MnLCBmb3I6IGlkIH0sIGRlc2MpIDogbnVsbDtcbiAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6ICd0cHMtb3B0JyB9LCBpbnB1dCwgbGFiZWxFbCwgZGVzY0VsKTtcbn1cblxuLyogXHUyNTAwXHUyNTAwIE51bWVyaWMgc3RlcHBlciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuLyoqXG4gKiBudW1iZXJSb3coeyBsYWJlbCwgdmFsdWUsIG1pbiwgbWF4LCBzdGVwLCB1bml0LCBkZWZhdWx0VmFsdWUsIG9uQ2hhbmdlLCBvblJlc2V0IH0pXG4gKiAgIC0gbGFiZWw6IHNob3duIHRvIHRoZSBsZWZ0XG4gKiAgIC0gdmFsdWU6IGN1cnJlbnQgbnVtZXJpYyB2YWx1ZVxuICogICAtIG1pbiAvIG1heCAvIHN0ZXA6IDxpbnB1dCB0eXBlPVwibnVtYmVyXCI+IGF0dHJzXG4gKiAgIC0gdW5pdDogb3B0aW9uYWwgdW5pdCBzdHJpbmcgKCdweCcsICclJywgZXRjLikgc2hvd24gYWZ0ZXIgdGhlICtcbiAqICAgLSBkZWZhdWx0VmFsdWU6IGlmIHNldCBhbmQgXHUyMjYwIHZhbHVlLCBSZXNldCBidXR0b24gc2hvd3M7IGNsaWNrIFx1MjE5MiBvblJlc2V0XG4gKiAgIC0gb25DaGFuZ2U6IChuZXdWYWx1ZTpudW1iZXIsIGV2ZW50KSA9PiB2b2lkXG4gKiAgIC0gb25SZXNldDogKCkgPT4gdm9pZFxuICpcbiAqIEBwYXJhbSB7e1xuICogICBsYWJlbD86IHN0cmluZyxcbiAqICAgdmFsdWU6IG51bWJlcixcbiAqICAgbWluPzogbnVtYmVyLFxuICogICBtYXg/OiBudW1iZXIsXG4gKiAgIHN0ZXA/OiBudW1iZXIsXG4gKiAgIHVuaXQ/OiBzdHJpbmcsXG4gKiAgIGRlZmF1bHRWYWx1ZT86IG51bWJlcixcbiAqICAgb25DaGFuZ2U/OiAodjogbnVtYmVyLCBlPzogRXZlbnQpID0+IHZvaWQsXG4gKiAgIG9uUmVzZXQ/OiAoKSA9PiB2b2lkLFxuICogfX0gYXJnc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyUm93KHsgbGFiZWwsIHZhbHVlLCBtaW4sIG1heCwgc3RlcCA9IDEsIHVuaXQsIGRlZmF1bHRWYWx1ZSwgb25DaGFuZ2UsIG9uUmVzZXQgfSkge1xuICBjb25zdCBjbGFtcCA9ICgvKiogQHR5cGUge251bWJlcn0gKi8gbmV4dCkgPT4ge1xuICAgIGxldCB2ID0gTnVtYmVyLmlzRmluaXRlKG5leHQpID8gbmV4dCA6IE51bWJlcih2YWx1ZSkgfHwgMDtcbiAgICBpZiAobWluICE9IG51bGwpIHYgPSBNYXRoLm1heChtaW4sIHYpO1xuICAgIGlmIChtYXggIT0gbnVsbCkgdiA9IE1hdGgubWluKG1heCwgdik7XG4gICAgcmV0dXJuIHY7XG4gIH07XG4gIGNvbnN0IGlucHV0ID0gaCgnaW5wdXQnLCB7XG4gICAgdHlwZTogJ251bWJlcicsIGNsYXNzOiAndHBzLW51bS1pbnB1dCcsXG4gICAgdmFsdWUsIG1pbiwgbWF4LCBzdGVwLFxuICAgIG9uSW5wdXQ6ICgvKiogQHR5cGUge0V2ZW50fSAqLyBlKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSAvKiogQHR5cGUge0hUTUxJbnB1dEVsZW1lbnR9ICovIChlLnRhcmdldCk7XG4gICAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZShOdW1iZXIodGFyZ2V0LnZhbHVlKSwgZSk7XG4gICAgfSxcbiAgICBvbktleURvd246ICgvKiogQHR5cGUge0tleWJvYXJkRXZlbnR9ICovIGUpID0+IHtcbiAgICAgIGlmIChlLmtleSAhPT0gJ0Fycm93VXAnICYmIGUua2V5ICE9PSAnQXJyb3dEb3duJykgcmV0dXJuO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgYmFzZSA9IE51bWJlci5pc0Zpbml0ZShOdW1iZXIoaW5wdXQudmFsdWUpKSA/IE51bWJlcihpbnB1dC52YWx1ZSkgOiBOdW1iZXIodmFsdWUpIHx8IDA7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBlLmtleSA9PT0gJ0Fycm93VXAnID8gMSA6IC0xO1xuICAgICAgaW5wdXQudmFsdWUgPSBTdHJpbmcoY2xhbXAoYmFzZSArIGRpcmVjdGlvbiAqIHN0ZXAgKiAoZS5zaGlmdEtleSA/IDEwIDogMSkpKTtcbiAgICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKE51bWJlcihpbnB1dC52YWx1ZSksIGUpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IG1pbnVzID0gaCgnYnV0dG9uJywge1xuICAgIHR5cGU6ICdidXR0b24nLCBjbGFzczogJ3Rwcy1udW0tc3RlcCcsICdhcmlhLWxhYmVsJzogJ0RlY3JlYXNlJyxcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICBjb25zdCB2ID0gTnVtYmVyKGlucHV0LnZhbHVlKSAtIHN0ZXA7XG4gICAgICBpbnB1dC52YWx1ZSA9IFN0cmluZyhjbGFtcCh2KSk7XG4gICAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZShOdW1iZXIoaW5wdXQudmFsdWUpKTtcbiAgICB9LFxuICB9LCAnXHUyMjEyJyk7XG5cbiAgY29uc3QgcGx1cyA9IGgoJ2J1dHRvbicsIHtcbiAgICB0eXBlOiAnYnV0dG9uJywgY2xhc3M6ICd0cHMtbnVtLXN0ZXAnLCAnYXJpYS1sYWJlbCc6ICdJbmNyZWFzZScsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgY29uc3QgdiA9IE51bWJlcihpbnB1dC52YWx1ZSkgKyBzdGVwO1xuICAgICAgaW5wdXQudmFsdWUgPSBTdHJpbmcoY2xhbXAodikpO1xuICAgICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UoTnVtYmVyKGlucHV0LnZhbHVlKSk7XG4gICAgfSxcbiAgfSwgJysnKTtcblxuICBjb25zdCB1bml0RWwgPSB1bml0ID8gaCgnc3BhbicsIHsgY2xhc3M6ICd0cHMtbnVtLXVuaXQnIH0sIHVuaXQpIDogbnVsbDtcbiAgY29uc3QgcmVzZXQgPSAoZGVmYXVsdFZhbHVlICE9IG51bGwpID8gaCgnYnV0dG9uJywge1xuICAgIHR5cGU6ICdidXR0b24nLCBjbGFzczogJ3Rwcy1udW0tcmVzZXQnLCBoaWRkZW46IHZhbHVlID09PSBkZWZhdWx0VmFsdWUsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgaW5wdXQudmFsdWUgPSBTdHJpbmcoZGVmYXVsdFZhbHVlKTtcbiAgICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKGRlZmF1bHRWYWx1ZSk7XG4gICAgICBvblJlc2V0ICYmIG9uUmVzZXQoKTtcbiAgICB9LFxuICB9LCAnUmVzZXQnKSA6IG51bGw7XG5cbiAgY29uc3QgbnVtRWwgPSBoKCdkaXYnLCB7IGNsYXNzOiAndHBzLW51bScgfSwgbWludXMsIGlucHV0LCBwbHVzLCB1bml0RWwsIHJlc2V0KTtcblxuICBpZiAobGFiZWwpIHtcbiAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogJ3Rwcy1udW0tZ3JpZCcgfSxcbiAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICd0cHMtbnVtLWxhYmVsJyB9LCBsYWJlbCksXG4gICAgICBudW1FbCxcbiAgICApO1xuICB9XG4gIHJldHVybiBudW1FbDtcbn1cblxuLyogXHUyNTAwXHUyNTAwIFNsaWRlciByb3cgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbi8qKlxuICogc2xpZGVyUm93KHsgbGFiZWwsIHZhbHVlLCBtaW4sIG1heCwgc3RlcCwgZm9ybWF0LCBkZWZhdWx0VmFsdWUsIG9uQ2hhbmdlLCBvblJlc2V0IH0pXG4gKiAgIC0gZm9ybWF0OiAodmFsdWU6bnVtYmVyKSA9PiBzdHJpbmcgZm9yIHRoZSB2YWx1ZSByZWFkb3V0LiBEZWZhdWx0cyB0byBTdHJpbmcodmFsdWUpLlxuICpcbiAqIEBwYXJhbSB7e1xuICogICBsYWJlbDogc3RyaW5nLFxuICogICB2YWx1ZTogbnVtYmVyLFxuICogICBtaW4/OiBudW1iZXIsXG4gKiAgIG1heD86IG51bWJlcixcbiAqICAgc3RlcD86IG51bWJlcixcbiAqICAgZm9ybWF0PzogKHY6IG51bWJlcikgPT4gc3RyaW5nLFxuICogICBkZWZhdWx0VmFsdWU/OiBudW1iZXIsXG4gKiAgIG9uQ2hhbmdlPzogKHY6IG51bWJlciwgZT86IEV2ZW50KSA9PiB2b2lkLFxuICogICBvblJlc2V0PzogKCkgPT4gdm9pZCxcbiAqIH19IGFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNsaWRlclJvdyh7IGxhYmVsLCB2YWx1ZSwgbWluID0gMCwgbWF4ID0gMTAwLCBzdGVwID0gMSwgZm9ybWF0LCBkZWZhdWx0VmFsdWUsIG9uQ2hhbmdlLCBvblJlc2V0IH0pIHtcbiAgY29uc3QgZm10ID0gZm9ybWF0IHx8ICgodikgPT4gU3RyaW5nKHYpKTtcblxuICBjb25zdCBpbnB1dCA9IGgoJ2lucHV0Jywge1xuICAgIHR5cGU6ICdyYW5nZScsIGNsYXNzOiAndHBzLXNsaWRlci1pbnB1dCcsXG4gICAgdmFsdWUsIG1pbiwgbWF4LCBzdGVwLFxuICAgIG9uSW5wdXQ6ICgvKiogQHR5cGUge0V2ZW50fSAqLyBlKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSAvKiogQHR5cGUge0hUTUxJbnB1dEVsZW1lbnR9ICovIChlLnRhcmdldCk7XG4gICAgICBjb25zdCB2ID0gTnVtYmVyKHRhcmdldC52YWx1ZSk7XG4gICAgICByZWFkb3V0LnRleHRDb250ZW50ID0gZm10KHYpO1xuICAgICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UodiwgZSk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgcmVhZG91dCA9IGgoJ3NwYW4nLCB7IGNsYXNzOiAndHBzLXNsaWRlci12YWx1ZScgfSwgZm10KHZhbHVlKSk7XG5cbiAgY29uc3QgcmVzZXQgPSAoZGVmYXVsdFZhbHVlICE9IG51bGwpID8gaCgnYnV0dG9uJywge1xuICAgIHR5cGU6ICdidXR0b24nLCBjbGFzczogJ3Rwcy1udW0tcmVzZXQnLFxuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIGlucHV0LnZhbHVlID0gU3RyaW5nKGRlZmF1bHRWYWx1ZSk7XG4gICAgICByZWFkb3V0LnRleHRDb250ZW50ID0gZm10KGRlZmF1bHRWYWx1ZSk7XG4gICAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZShkZWZhdWx0VmFsdWUpO1xuICAgICAgb25SZXNldCAmJiBvblJlc2V0KCk7XG4gICAgfSxcbiAgfSwgJ1Jlc2V0JykgOiBudWxsO1xuXG4gIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiAndHBzLXNsaWRlcicgfSxcbiAgICBoKCdzcGFuJywgeyBjbGFzczogJ3Rwcy1zbGlkZXItbGFiZWwnIH0sIGxhYmVsKSxcbiAgICBpbnB1dCxcbiAgICByZWFkb3V0LFxuICAgIHJlc2V0LFxuICApO1xufVxuXG4vKiBcdTI1MDBcdTI1MDAgU3dhdGNoZXMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbi8qKlxuICogc3dhdGNoKHsgY29sb3IsIGFjdGl2ZSwgYXJpYUxhYmVsLCBvbkNsaWNrIH0pXG4gKlxuICogQHBhcmFtIHt7Y29sb3I6IHN0cmluZywgYWN0aXZlPzogYm9vbGVhbiwgYXJpYUxhYmVsPzogc3RyaW5nLCBvbkNsaWNrPzogKGU6IEV2ZW50KSA9PiB2b2lkfX0gYXJnc1xuICovXG5leHBvcnQgZnVuY3Rpb24gc3dhdGNoKHsgY29sb3IsIGFjdGl2ZSwgYXJpYUxhYmVsLCBvbkNsaWNrIH0pIHtcbiAgcmV0dXJuIGgoJ2J1dHRvbicsIHtcbiAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICBjbGFzczogJ3Rwcy1zd2F0Y2gnLFxuICAgICdhcmlhLXByZXNzZWQnOiBTdHJpbmcoISFhY3RpdmUpLFxuICAgICdhcmlhLWxhYmVsJzogYXJpYUxhYmVsIHx8IGNvbG9yLFxuICAgIHN0eWxlOiB7IGJhY2tncm91bmQ6IGNvbG9yIH0sXG4gICAgb25DbGljayxcbiAgfSk7XG59XG5cbi8qKlxuICogc3dhdGNoR3JpZCh7IHN3YXRjaGVzOiBbe2NvbG9yLCBhY3RpdmUsIG9uQ2xpY2t9XSwgY29sdW1ucz8gfSlcbiAqXG4gKiBAcGFyYW0ge3tzd2F0Y2hlczogQXJyYXk8e2NvbG9yOiBzdHJpbmcsIGFjdGl2ZT86IGJvb2xlYW4sIGFyaWFMYWJlbD86IHN0cmluZywgb25DbGljaz86IChlOiBFdmVudCkgPT4gdm9pZH0+LCBjb2x1bW5zPzogbnVtYmVyfX0gYXJnc1xuICovXG5leHBvcnQgZnVuY3Rpb24gc3dhdGNoR3JpZCh7IHN3YXRjaGVzOiBpdGVtcywgY29sdW1ucyB9KSB7XG4gIGNvbnN0IHN0eWxlID0gY29sdW1ucyA/IHsgZ3JpZFRlbXBsYXRlQ29sdW1uczogYHJlcGVhdCgke2NvbHVtbnN9LCB2YXIoLS10cHMtc3dhdGNoLXNpemUpKWAgfSA6IG51bGw7XG4gIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiAndHBzLXN3YXRjaC1ncmlkJywgc3R5bGUgfSwgLi4uaXRlbXMubWFwKHN3YXRjaCkpO1xufVxuXG4vKiBcdTI1MDBcdTI1MDAgTGlzdCByb3dzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4vKipcbiAqIGxpc3RSb3coeyBpY29uLCBuYW1lLCBjb250cm9scyB9KVxuICogICAtIGljb246IEhUTUxFbGVtZW50IG9yIG51bGxcbiAqICAgLSBuYW1lOiBzdHJpbmcgb3IgSFRNTEVsZW1lbnRcbiAqICAgLSBjb250cm9sczogSFRNTEVsZW1lbnQgb3IgYXJyYXkgKHJpZ2h0LWFsaWduZWQpXG4gKlxuICogQHBhcmFtIHt7aWNvbj86IEhUTUxFbGVtZW50IHwgbnVsbCwgbmFtZTogc3RyaW5nIHwgTm9kZSwgY29udHJvbHM/OiBIVE1MRWxlbWVudCB8IEhUTUxFbGVtZW50W10gfCBudWxsfX0gYXJnc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGlzdFJvdyh7IGljb24sIG5hbWUsIGNvbnRyb2xzIH0pIHtcbiAgY29uc3QgY3RybENoaWxkcmVuID0gY29udHJvbHMgPT0gbnVsbCA/IFtdIDogKEFycmF5LmlzQXJyYXkoY29udHJvbHMpID8gY29udHJvbHMgOiBbY29udHJvbHNdKTtcbiAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6ICd0cHMtbGlzdC1yb3cnIH0sXG4gICAgaCgnZGl2JywgbnVsbCwgaWNvbiB8fCBudWxsKSxcbiAgICBoKCdkaXYnLCB7IGNsYXNzOiAndHBzLWxpc3QtbmFtZScgfSwgbmFtZSksXG4gICAgaCgnZGl2JywgbnVsbCwgLi4uY3RybENoaWxkcmVuKSxcbiAgKTtcbn1cblxuLyoqIEBwYXJhbSB7e2NvbHVtbnM6IHN0cmluZ1tdfX0gYXJncyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3RIZWFkZXIoeyBjb2x1bW5zIH0pIHtcbiAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6ICd0cHMtbGlzdC1oZWFkZXInIH0sXG4gICAgLi4uY29sdW1ucy5tYXAoKGMpID0+IGgoJ2RpdicsIG51bGwsIGMpKSxcbiAgKTtcbn1cblxuLyogXHUyNTAwXHUyNTAwIFRhYnMgLyBzZWdtZW50ZWQgY29udHJvbCBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuLyoqXG4gKiB0YWJzKHsgb3B0aW9uczogW3t2YWx1ZSwgbGFiZWx9XSwgdmFsdWUsIG9uQ2hhbmdlLCBtdWx0aVNlbGVjdCB9KVxuICogICAtIG9wdGlvbnM6IGFycmF5IG9mIHt2YWx1ZSwgbGFiZWx9XG4gKiAgIC0gdmFsdWU6IGN1cnJlbnQgdmFsdWUgKHN0cmluZyBmb3Igc2luZ2xlLXNlbGVjdDsgYXJyYXkgZm9yIG11bHRpU2VsZWN0KVxuICogICAtIG9uQ2hhbmdlOiAobmV3VmFsdWUpID0+IHZvaWRcbiAqICAgLSBtdWx0aVNlbGVjdDogZWFjaCB0YWIgdG9nZ2xlcyBpbmRlcGVuZGVudGx5XG4gKlxuICogQHBhcmFtIHt7XG4gKiAgIG9wdGlvbnM6IHt2YWx1ZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nfVtdLFxuICogICB2YWx1ZTogYW55LFxuICogICBvbkNoYW5nZT86ICh2OiBhbnkpID0+IHZvaWQsXG4gKiAgIG11bHRpU2VsZWN0PzogYm9vbGVhbixcbiAqIH19IGFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhYnMoeyBvcHRpb25zLCB2YWx1ZSwgb25DaGFuZ2UsIG11bHRpU2VsZWN0ID0gZmFsc2UgfSkge1xuICBjb25zdCBpc0FjdGl2ZSA9ICgvKiogQHR5cGUge3N0cmluZ30gKi8gdikgPT4gbXVsdGlTZWxlY3QgPyAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUuaW5jbHVkZXModikpIDogdmFsdWUgPT09IHY7XG4gIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiAndHBzLXRhYnMnLCByb2xlOiAndGFibGlzdCcgfSxcbiAgICAuLi5vcHRpb25zLm1hcCgob3B0KSA9PiBoKCdidXR0b24nLCB7XG4gICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgIGNsYXNzOiAndHBzLXRhYicsXG4gICAgICByb2xlOiAndGFiJyxcbiAgICAgICdhcmlhLXByZXNzZWQnOiBTdHJpbmcoaXNBY3RpdmUob3B0LnZhbHVlKSksXG4gICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgIGlmICghb25DaGFuZ2UpIHJldHVybjtcbiAgICAgICAgaWYgKG11bHRpU2VsZWN0KSB7XG4gICAgICAgICAgY29uc3QgY3VyID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5zbGljZSgpIDogW107XG4gICAgICAgICAgY29uc3QgaSA9IGN1ci5pbmRleE9mKG9wdC52YWx1ZSk7XG4gICAgICAgICAgaWYgKGkgPj0gMCkgY3VyLnNwbGljZShpLCAxKTsgZWxzZSBjdXIucHVzaChvcHQudmFsdWUpO1xuICAgICAgICAgIG9uQ2hhbmdlKGN1cik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb25DaGFuZ2Uob3B0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LCBvcHQubGFiZWwpKSxcbiAgKTtcbn1cblxuLyogXHUyNTAwXHUyNTAwIEJ1dHRvbiBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuLyoqXG4gKiBidXR0b24oeyBsYWJlbCwgdmFyaWFudCwgc2l6ZSwgb25DbGljaywgZGlzYWJsZWQgfSlcbiAqICAgLSB2YXJpYW50OiAncHJpbWFyeScgfCAnZ2hvc3QnIHwgJ2RhbmdlcicgKGRlZmF1bHQgJ2dob3N0JylcbiAqICAgLSBzaXplOiAnc20nIHwgJ21kJyAoZGVmYXVsdCAnc20nKVxuICpcbiAqIEBwYXJhbSB7e2xhYmVsOiBzdHJpbmcsIHZhcmlhbnQ/OiBzdHJpbmcsIHNpemU/OiBzdHJpbmcsIG9uQ2xpY2s/OiAoZTogRXZlbnQpID0+IHZvaWQsIGRpc2FibGVkPzogYm9vbGVhbn19IGFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1dHRvbih7IGxhYmVsLCB2YXJpYW50ID0gJ2dob3N0Jywgc2l6ZSA9ICdzbScsIG9uQ2xpY2ssIGRpc2FibGVkIH0pIHtcbiAgY29uc3QgY2xzID0gWyd0cHMtYnV0dG9uJywgYHRwcy1idXR0b24tLSR7dmFyaWFudH1gXTtcbiAgaWYgKHNpemUgPT09ICdtZCcpIGNscy5wdXNoKCd0cHMtYnV0dG9uLS1tZCcpO1xuICByZXR1cm4gaCgnYnV0dG9uJywge1xuICAgIHR5cGU6ICdidXR0b24nLFxuICAgIGNsYXNzOiBjbHMuam9pbignICcpLFxuICAgIGRpc2FibGVkOiAhIWRpc2FibGVkLFxuICAgIG9uQ2xpY2ssXG4gIH0sIGxhYmVsKTtcbn1cbiIsICIvKlxuICogVGh5bWVyIHJlbmRlcmVkIHRoZW1lIHZhcmlhYmxlIGhlbHBlcnMuXG4gKlxuICogVGhlc2UgcmVhZCB0aGUgYWN0dWFsIENTUyBjdXN0b20gcHJvcGVydGllcyBwcmVzZW50IGluIHRoZSBydW5uaW5nIFRoeW1lciBVSVxuICogaW5zdGVhZCBvZiByZWx5aW5nIG9uIGEgZ3Vlc3NlZCB0b2tlbiBsaXN0LlxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbmNvbnN0IERFRkFVTFRfVEhFTUVfU09VUkNFUyA9IFtcblx0Jzpyb290Jyxcblx0J2JvZHknLFxuXHQnLnNpZGViYXItLWljb25zJyxcblx0Jy5zaWRlYmFyJyxcblx0Jy50cHMtcGFuZWwnLFxuXTtcblxuY29uc3QgQ09MT1JfTkFNRV9ISU5UID0gLyhefC0pKGFjY2VudHxwcmltYXJ5fHNlY29uZGFyeXx0ZXh0fG11dGVkfHN1YnRsZXxib3JkZXJ8Ymd8YmFja2dyb3VuZHxob3ZlcnxhY3RpdmV8aW5wdXR8ZW51bXxyZWR8b3JhbmdlfGFtYmVyfHllbGxvd3xsaW1lfGdyZWVufGVtZXJhbGR8dGVhbHxjeWFufHNreXxibHVlfGluZGlnb3x2aW9sZXR8cHVycGxlfGZ1Y2hzaWF8cGlua3xyb3NlfGZvcmVncm91bmR8c3VyZmFjZXxjYXJkfHBhbmVsfGRhbmdlcnx3YXJuaW5nfHN1Y2Nlc3MpKCR8LSkvO1xuXG5jb25zdCBDVVJSRU5UX1RIRU1FX1ZBUlMgPSBPYmplY3QuZnJlZXplKFtcblx0Ly8gQWNjZW50IC8gYnJhbmQgKFRoeW1lcidzIHByaW1hcnkgaXMgLS1sb2dvLWNvbG9yKVxuXHR7IG5hbWU6ICctLWxvZ28tY29sb3InLCBsYWJlbDogJ0FjY2VudCcgfSxcblx0eyBuYW1lOiAnLS1hY2NlbnQtY29sb3InLCBsYWJlbDogJ0FjY2VudCcgfSxcblx0eyBuYW1lOiAnLS10aGVtZS1hY2NlbnQnLCBsYWJlbDogJ1RoZW1lIGFjY2VudCcgfSxcblx0eyBuYW1lOiAnLS1jb2xvci1hY2NlbnQnLCBsYWJlbDogJ0NvbG9yIGFjY2VudCcgfSxcblx0eyBuYW1lOiAnLS1jb2xvci1wcmltYXJ5JywgbGFiZWw6ICdQcmltYXJ5JyB9LFxuXHR7IG5hbWU6ICctLXByaW1hcnknLCBsYWJlbDogJ1ByaW1hcnknIH0sXG5cdHsgbmFtZTogJy0tYWNjZW50JywgbGFiZWw6ICdBY2NlbnQnIH0sXG5cblx0Ly8gVGV4dFxuXHR7IG5hbWU6ICctLWNvbG9yLXRleHQtOTAwJywgbGFiZWw6ICdUZXh0JyB9LFxuXHR7IG5hbWU6ICctLXRleHQtZGVmYXVsdCcsIGxhYmVsOiAnVGV4dCcgfSxcblx0eyBuYW1lOiAnLS10ZXh0LW11dGVkJywgbGFiZWw6ICdNdXRlZCB0ZXh0JyB9LFxuXHR7IG5hbWU6ICctLXRleHQtc3VidGxlJywgbGFiZWw6ICdTdWJ0bGUgdGV4dCcgfSxcblx0eyBuYW1lOiAnLS10ZXh0LXN0cm9uZycsIGxhYmVsOiAnU3Ryb25nIHRleHQnIH0sXG5cdHsgbmFtZTogJy0tdGV4dC1zdGF0dXMtb2ZmbGluZScsIGxhYmVsOiAnT2ZmbGluZSB0ZXh0JyB9LFxuXHR7IG5hbWU6ICctLXRleHQtZGlzYWJsZWQnLCBsYWJlbDogJ0Rpc2FibGVkIHRleHQnIH0sXG5cdHsgbmFtZTogJy0tY21kcGFsLWhpbGl0ZS1jb2xvcicsIGxhYmVsOiAnSGlnaGxpZ2h0JyB9LFxuXG5cdC8vIFRhZyAvIHBpbGxcblx0eyBuYW1lOiAnLS10YWctZmctY29sb3InLCBsYWJlbDogJ1RhZycgfSxcblxuXHQvLyBTdXJmYWNlc1xuXHR7IG5hbWU6ICctLWJnLWRlZmF1bHQnLCBsYWJlbDogJ0JhY2tncm91bmQnIH0sXG5cdHsgbmFtZTogJy0tYmctaG92ZXInLCBsYWJlbDogJ0hvdmVyIGJhY2tncm91bmQnIH0sXG5cdHsgbmFtZTogJy0tYmctYWN0aXZlJywgbGFiZWw6ICdBY3RpdmUgYmFja2dyb3VuZCcgfSxcblx0eyBuYW1lOiAnLS1pbnB1dC1iZycsIGxhYmVsOiAnSW5wdXQgYmFja2dyb3VuZCcgfSxcblx0eyBuYW1lOiAnLS1wYW5lbC1iZy1jb2xvcicsIGxhYmVsOiAnUGFuZWwgYmFja2dyb3VuZCcgfSxcblxuXHQvLyBCb3JkZXJzIC8gZGl2aWRlcnNcblx0eyBuYW1lOiAnLS1ib3JkZXItZGVmYXVsdCcsIGxhYmVsOiAnQm9yZGVyJyB9LFxuXHR7IG5hbWU6ICctLWJvcmRlci1zdWJ0bGUnLCBsYWJlbDogJ1N1YnRsZSBib3JkZXInIH0sXG5cdHsgbmFtZTogJy0tYm9yZGVyLWhvdmVyJywgbGFiZWw6ICdIb3ZlciBib3JkZXInIH0sXG5cdHsgbmFtZTogJy0tYm9yZGVyLXN0cm9uZycsIGxhYmVsOiAnU3Ryb25nIGJvcmRlcicgfSxcblx0eyBuYW1lOiAnLS1zaWRlYmFyLWRpdmlkZXItY29sb3InLCBsYWJlbDogJ1NpZGViYXIgZGl2aWRlcicgfSxcblx0eyBuYW1lOiAnLS1kaXZpZGVyLWNvbG9yJywgbGFiZWw6ICdEaXZpZGVyJyB9LFxuXHR7IG5hbWU6ICctLXRoaW4tZGl2aWRlci1jb2xvcicsIGxhYmVsOiAnVGhpbiBkaXZpZGVyJyB9LFxuXHR7IG5hbWU6ICctLWZhaW50LWRpdmlkZXItY29sb3InLCBsYWJlbDogJ0ZhaW50IGRpdmlkZXInIH0sXG5cdHsgbmFtZTogJy0tdGl0bGViYXItYm9yZGVyLWNvbG9yJywgbGFiZWw6ICdUaXRsZWJhciBib3JkZXInIH0sXG5cdHsgbmFtZTogJy0tc2VsZWN0aW9uLWJvcmRlcicsIGxhYmVsOiAnU2VsZWN0aW9uIGJvcmRlcicgfSxcblxuXHQvLyBFbnVtL3RhZyBjb2xvciBmYW1pbHkgKFRoeW1lcidzIGNhbm9uaWNhbCB0YWcgcGFsZXR0ZSBcdTIwMTQgZnVsbCAxOCBodWVzKVxuXHR7IG5hbWU6ICctLWVudW0tcmVkLWZnJywgbGFiZWw6ICdSZWQnIH0sXG5cdHsgbmFtZTogJy0tZW51bS1vcmFuZ2UtZmcnLCBsYWJlbDogJ09yYW5nZScgfSxcblx0eyBuYW1lOiAnLS1lbnVtLWFtYmVyLWZnJywgbGFiZWw6ICdBbWJlcicgfSxcblx0eyBuYW1lOiAnLS1lbnVtLXllbGxvdy1mZycsIGxhYmVsOiAnWWVsbG93JyB9LFxuXHR7IG5hbWU6ICctLWVudW0tbGltZS1mZycsIGxhYmVsOiAnTGltZScgfSxcblx0eyBuYW1lOiAnLS1lbnVtLWdyZWVuLWZnJywgbGFiZWw6ICdHcmVlbicgfSxcblx0eyBuYW1lOiAnLS1lbnVtLXRlYWwtZmcnLCBsYWJlbDogJ1RlYWwnIH0sXG5cdHsgbmFtZTogJy0tZW51bS1jeWFuLWZnJywgbGFiZWw6ICdDeWFuJyB9LFxuXHR7IG5hbWU6ICctLWVudW0tc2t5LWZnJywgbGFiZWw6ICdTa3knIH0sXG5cdHsgbmFtZTogJy0tZW51bS1ibHVlLWZnJywgbGFiZWw6ICdCbHVlJyB9LFxuXHR7IG5hbWU6ICctLWVudW0taW5kaWdvLWZnJywgbGFiZWw6ICdJbmRpZ28nIH0sXG5cdHsgbmFtZTogJy0tZW51bS12aW9sZXQtZmcnLCBsYWJlbDogJ1Zpb2xldCcgfSxcblx0eyBuYW1lOiAnLS1lbnVtLXB1cnBsZS1mZycsIGxhYmVsOiAnUHVycGxlJyB9LFxuXHR7IG5hbWU6ICctLWVudW0tZnVjaHNpYS1mZycsIGxhYmVsOiAnRnVjaHNpYScgfSxcblx0eyBuYW1lOiAnLS1lbnVtLXBpbmstZmcnLCBsYWJlbDogJ1BpbmsnIH0sXG5cdHsgbmFtZTogJy0tZW51bS1yb3NlLWZnJywgbGFiZWw6ICdSb3NlJyB9LFxuXHR7IG5hbWU6ICctLWVudW0tc3RvbmUtZmcnLCBsYWJlbDogJ1N0b25lJyB9LFxuXHR7IG5hbWU6ICctLWVudW0temluYy1mZycsIGxhYmVsOiAnWmluYycgfSxcbl0pO1xuXG4vKiogQHBhcmFtIHt1bmtub3dufSB2YWx1ZSAqL1xuZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcblx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZS50cmltKCkgOiAnJztcbn1cblxuLyoqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAqL1xuZnVuY3Rpb24gaXNDb2xvckNvbXB1dGVkVmFsdWUodmFsdWUpIHtcblx0cmV0dXJuIC9eKCNbMC05YS1mXXszLDh9fHJnYmE/XFwofGhzbGE/XFwofGNvbG9yXFwofG9rbGNoXFwofG9rbGFiXFwoKS9pLnRlc3QodmFsdWUudHJpbSgpKTtcbn1cblxuLyoqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICovXG5mdW5jdGlvbiBsYWJlbEZyb21WYXJOYW1lKG5hbWUpIHtcblx0cmV0dXJuIG5hbWVcblx0XHQucmVwbGFjZSgvXi0tLywgJycpXG5cdFx0LnJlcGxhY2UoL14oY29sb3J8dGhlbWUpLS8sICcnKVxuXHRcdC5yZXBsYWNlKC8tL2csICcgJylcblx0XHQucmVwbGFjZSgvXFxiXFx3L2csIChtKSA9PiBtLnRvVXBwZXJDYXNlKCkpO1xufVxuXG4vKiogQHBhcmFtIHtFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZH0gbm9kZSAqL1xuZnVuY3Rpb24gZWxlbWVudE9yTnVsbChub2RlKSB7XG5cdHJldHVybiBub2RlIGluc3RhbmNlb2YgRWxlbWVudCA/IG5vZGUgOiBudWxsO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7e3Jvb3RzPzogQXJyYXk8RWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQ+LCBzZWxlY3RvcnM/OiBzdHJpbmdbXX09fSBvcHRpb25zXG4gKiBAcmV0dXJucyB7RWxlbWVudFtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGhlbWVWYXJpYWJsZVJvb3RzKG9wdGlvbnMgPSB7fSkge1xuXHQvKiogQHR5cGUge0VsZW1lbnRbXX0gKi9cblx0Y29uc3Qgcm9vdHMgPSBbXTtcblx0Y29uc3Qgc2VlbiA9IG5ldyBTZXQoKTtcblx0Y29uc3QgYWRkID0gKC8qKiBAdHlwZSB7RWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWR9ICovIG5vZGUpID0+IHtcblx0XHRjb25zdCBlbCA9IGVsZW1lbnRPck51bGwobm9kZSk7XG5cdFx0aWYgKCFlbCB8fCBzZWVuLmhhcyhlbCkpIHJldHVybjtcblx0XHRzZWVuLmFkZChlbCk7XG5cdFx0cm9vdHMucHVzaChlbCk7XG5cdH07XG5cblx0YWRkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cdGFkZChkb2N1bWVudC5ib2R5KTtcblx0Zm9yIChjb25zdCBzZWxlY3RvciBvZiBvcHRpb25zLnNlbGVjdG9ycyB8fCBERUZBVUxUX1RIRU1FX1NPVVJDRVMpIHtcblx0XHR0cnkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKS5mb3JFYWNoKGFkZCk7IH0gY2F0Y2gge31cblx0fVxuXHRmb3IgKGNvbnN0IHJvb3Qgb2Ygb3B0aW9ucy5yb290cyB8fCBbXSkgYWRkKHJvb3QpO1xuXHRyZXR1cm4gcm9vdHM7XG59XG5cbi8qKlxuICogQHBhcmFtIHt7cm9vdHM/OiBBcnJheTxFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZD4sIHNlbGVjdG9ycz86IHN0cmluZ1tdfT19IG9wdGlvbnNcbiAqIEByZXR1cm5zIHt7bmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBzb3VyY2U6IHN0cmluZywgcm9vdDogRWxlbWVudH1bXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRSZW5kZXJlZENzc1ZhcmlhYmxlcyhvcHRpb25zID0ge30pIHtcblx0Y29uc3QgdmFycyA9IFtdO1xuXHRmb3IgKGNvbnN0IHJvb3Qgb2YgdGhlbWVWYXJpYWJsZVJvb3RzKG9wdGlvbnMpKSB7XG5cdFx0Y29uc3Qgc3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZShyb290KTtcblx0XHRjb25zdCBzb3VyY2UgPSByb290ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyAnOnJvb3QnXG5cdFx0XHQ6IHJvb3QgPT09IGRvY3VtZW50LmJvZHkgPyAnYm9keSdcblx0XHRcdFx0OiByb290LmNsYXNzTmFtZSA/IGAuJHtTdHJpbmcocm9vdC5jbGFzc05hbWUpLnRyaW0oKS5zcGxpdCgvXFxzKy8pLmpvaW4oJy4nKX1gXG5cdFx0XHRcdFx0OiByb290LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0Y29uc3QgbmFtZSA9IHN0eWxlc1tpXTtcblx0XHRcdGlmICghbmFtZSB8fCAhbmFtZS5zdGFydHNXaXRoKCctLScpKSBjb250aW51ZTtcblx0XHRcdGNvbnN0IHZhbHVlID0gbm9ybWFsaXplVmFsdWUoc3R5bGVzLmdldFByb3BlcnR5VmFsdWUobmFtZSkpO1xuXHRcdFx0aWYgKCF2YWx1ZSkgY29udGludWU7XG5cdFx0XHR2YXJzLnB1c2goeyBuYW1lLCB2YWx1ZSwgc291cmNlLCByb290IH0pO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdmFycztcbn1cblxuLyoqXG4gKiBSZXNvbHZlIGEgQ1NTIGNvbG9yIGV4cHJlc3Npb24gYWdhaW5zdCBhbiBlbGVtZW50J3MgaW5oZXJpdGVkIHZhcmlhYmxlcy5cbiAqIFN1cHBvcnRzIG5vcm1hbCBjb2xvcnMgcGx1cyBjb21tb24gY2hhbm5lbCB2YXJpYWJsZXMgdGhyb3VnaCByZ2IoKS9oc2woKS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjc3NDb2xvclxuICogQHBhcmFtIHtFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZH0gcm9vdFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVSZW5kZXJlZENvbG9yKGNzc0NvbG9yLCByb290ID0gZG9jdW1lbnQuYm9keSkge1xuXHRjb25zdCBob3N0ID0gZWxlbWVudE9yTnVsbChyb290KSB8fCBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0aWYgKCFob3N0KSByZXR1cm4gJyc7XG5cdGNvbnN0IHByb2JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRwcm9iZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cdHByb2JlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG5cdHByb2JlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblx0cHJvYmUuc3R5bGUuY29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXHRob3N0LmFwcGVuZENoaWxkKHByb2JlKTtcblxuXHRjb25zdCBhdHRlbXB0cyA9IFtjc3NDb2xvcl07XG5cdGlmIChjc3NDb2xvci5zdGFydHNXaXRoKCd2YXIoJykpIHtcblx0XHRhdHRlbXB0cy5wdXNoKGByZ2IoJHtjc3NDb2xvcn0pYCwgYHJnYmEoJHtjc3NDb2xvcn0sIDEpYCwgYGhzbCgke2Nzc0NvbG9yfSlgLCBgaHNsYSgke2Nzc0NvbG9yfSwgMSlgKTtcblx0fVxuXHR0cnkge1xuXHRcdGZvciAoY29uc3QgYXR0ZW1wdCBvZiBhdHRlbXB0cykge1xuXHRcdFx0cHJvYmUuc3R5bGUuY29sb3IgPSAnJztcblx0XHRcdHByb2JlLnN0eWxlLmNvbG9yID0gYXR0ZW1wdDtcblx0XHRcdGNvbnN0IHJlc29sdmVkID0gZ2V0Q29tcHV0ZWRTdHlsZShwcm9iZSkuY29sb3I7XG5cdFx0XHRpZiAocmVzb2x2ZWQgJiYgcmVzb2x2ZWQgIT09ICdyZ2JhKDAsIDAsIDAsIDApJyAmJiByZXNvbHZlZCAhPT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIHJlc29sdmVkO1xuXHRcdH1cblx0fSBmaW5hbGx5IHtcblx0XHRwcm9iZS5yZW1vdmUoKTtcblx0fVxuXHRyZXR1cm4gJyc7XG59XG5cbi8qKlxuICogQHBhcmFtIHt7cm9vdHM/OiBBcnJheTxFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZD4sIHNlbGVjdG9ycz86IHN0cmluZ1tdLCBpbmNsdWRlQWxsTmFtZWRDb2xvcnM/OiBib29sZWFufT19IG9wdGlvbnNcbiAqIEByZXR1cm5zIHt7bmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBjc3M6IHN0cmluZywgcmVzb2x2ZWQ6IHN0cmluZywgcmF3OiBzdHJpbmcsIHNvdXJjZTogc3RyaW5nfVtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdFJlbmRlcmVkVGhlbWVDb2xvcnMob3B0aW9ucyA9IHt9KSB7XG5cdGlmIChvcHRpb25zLmluY2x1ZGVBbGxOYW1lZENvbG9ycykgcmV0dXJuIGNvbGxlY3RBbGxSZW5kZXJlZENvbG9yVmFyaWFibGVzKG9wdGlvbnMpO1xuXHRyZXR1cm4gY29sbGVjdEN1cnJlbnRUaGVtZUNvbG9ycyhvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gb25seSB0aGUgc2VtYW50aWMgdmFyaWFibGVzIHRoYXQgcmVwcmVzZW50IFRoeW1lcidzIGFjdGl2ZSB0aGVtZS5cbiAqIFRoaXMgaW50ZW50aW9uYWxseSBleGNsdWRlcyBwcmltaXRpdmUgcGFsZXR0ZXMgYW5kIGltcGxlbWVudGF0aW9uIHZhcmlhYmxlc1xuICogdGhhdCBtYXkgYmUgcHJlc2VudCBpbiBjb21wdXRlZCBDU1MgYnV0IGRvIG5vdCByZXByZXNlbnQgdGhlIHNlbGVjdGVkIHRoZW1lLlxuICogQHBhcmFtIHt7cm9vdHM/OiBBcnJheTxFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZD4sIHNlbGVjdG9ycz86IHN0cmluZ1tdfT19IG9wdGlvbnNcbiAqIEByZXR1cm5zIHt7bmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBjc3M6IHN0cmluZywgcmVzb2x2ZWQ6IHN0cmluZywgcmF3OiBzdHJpbmcsIHNvdXJjZTogc3RyaW5nfVtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdEN1cnJlbnRUaGVtZUNvbG9ycyhvcHRpb25zID0ge30pIHtcblx0Y29uc3Qgcm9vdHMgPSB0aGVtZVZhcmlhYmxlUm9vdHMob3B0aW9ucyk7XG5cdGNvbnN0IHJvb3RTdHlsZXMgPSByb290cy5tYXAoKHJvb3QpID0+ICh7IHJvb3QsIHN0eWxlczogZ2V0Q29tcHV0ZWRTdHlsZShyb290KSB9KSk7XG5cdGNvbnN0IGZvdW5kID0gW107XG5cdGZvciAoY29uc3QgdG9rZW4gb2YgQ1VSUkVOVF9USEVNRV9WQVJTKSB7XG5cdFx0Zm9yIChjb25zdCB7IHJvb3QsIHN0eWxlcyB9IG9mIHJvb3RTdHlsZXMpIHtcblx0XHRcdGNvbnN0IHJhdyA9IG5vcm1hbGl6ZVZhbHVlKHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKHRva2VuLm5hbWUpKTtcblx0XHRcdGlmICghcmF3KSBjb250aW51ZTtcblx0XHRcdGNvbnN0IHJlc29sdmVkID0gaXNDb2xvckNvbXB1dGVkVmFsdWUocmF3KSA/IHJhdyA6IHJlc29sdmVSZW5kZXJlZENvbG9yKGB2YXIoJHt0b2tlbi5uYW1lfSlgLCByb290KTtcblx0XHRcdGlmICghcmVzb2x2ZWQgJiYgIWlzQ29sb3JDb21wdXRlZFZhbHVlKHJhdykpIGNvbnRpbnVlO1xuXHRcdFx0Zm91bmQucHVzaCh7XG5cdFx0XHRcdG5hbWU6IHRva2VuLmxhYmVsLFxuXHRcdFx0XHR2YWx1ZTogYHRoZW1lLXZhcjoke3Rva2VuLm5hbWV9YCxcblx0XHRcdFx0Y3NzOiByZXNvbHZlZCB8fCBgdmFyKCR7dG9rZW4ubmFtZX0pYCxcblx0XHRcdFx0cmVzb2x2ZWQ6IHJlc29sdmVkIHx8IHJhdyxcblx0XHRcdFx0cmF3LFxuXHRcdFx0XHRzb3VyY2U6IHRva2VuLm5hbWUsXG5cdFx0XHR9KTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGRlZHVwZWQgPSBbXTtcblx0Y29uc3Qgc2VlbkNvbG9ycyA9IG5ldyBTZXQoKTtcblx0Y29uc3QgYWNjZW50ID0gY2hvb3NlVGhlbWVBY2NlbnQoZm91bmQpO1xuXHRpZiAoYWNjZW50KSB7XG5cdFx0ZGVkdXBlZC5wdXNoKHsgLi4uYWNjZW50LCBuYW1lOiAnQWNjZW50JywgdmFsdWU6ICd0aGVtZTphY2NlbnQnIH0pO1xuXHRcdHNlZW5Db2xvcnMuYWRkKGFjY2VudC5yZXNvbHZlZCk7XG5cdH1cblx0Zm9yIChjb25zdCBpdGVtIG9mIGZvdW5kKSB7XG5cdFx0aWYgKHNlZW5Db2xvcnMuaGFzKGl0ZW0ucmVzb2x2ZWQpKSBjb250aW51ZTtcblx0XHRzZWVuQ29sb3JzLmFkZChpdGVtLnJlc29sdmVkKTtcblx0XHRkZWR1cGVkLnB1c2goaXRlbSk7XG5cdH1cblx0cmV0dXJuIGRlZHVwZWQ7XG59XG5cbi8qKlxuICogRGlhZ25vc3RpYyBlc2NhcGUgaGF0Y2guIERvIG5vdCB1c2UgdGhpcyBmb3IgdXNlci1mYWNpbmcgdGhlbWUgcGlja2Vycy5cbiAqIEBwYXJhbSB7e3Jvb3RzPzogQXJyYXk8RWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQ+LCBzZWxlY3RvcnM/OiBzdHJpbmdbXX09fSBvcHRpb25zXG4gKiBAcmV0dXJucyB7e25hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgY3NzOiBzdHJpbmcsIHJlc29sdmVkOiBzdHJpbmcsIHJhdzogc3RyaW5nLCBzb3VyY2U6IHN0cmluZ31bXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbGxlY3RBbGxSZW5kZXJlZENvbG9yVmFyaWFibGVzKG9wdGlvbnMgPSB7fSkge1xuXHRjb25zdCBmb3VuZCA9IFtdO1xuXHRjb25zdCBieU5hbWUgPSBuZXcgTWFwKCk7XG5cdGZvciAoY29uc3QgaXRlbSBvZiByZWFkUmVuZGVyZWRDc3NWYXJpYWJsZXMob3B0aW9ucykpIHtcblx0XHRpZiAoYnlOYW1lLmhhcyhpdGVtLm5hbWUpKSBjb250aW51ZTtcblx0XHRieU5hbWUuc2V0KGl0ZW0ubmFtZSwgaXRlbSk7XG5cdH1cblxuXHRmb3IgKGNvbnN0IGl0ZW0gb2YgYnlOYW1lLnZhbHVlcygpKSB7XG5cdFx0Y29uc3QgaGludGVkID0gQ09MT1JfTkFNRV9ISU5ULnRlc3QoaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkpO1xuXHRcdGNvbnN0IHJlc29sdmVkID0gcmVzb2x2ZVJlbmRlcmVkQ29sb3IoYHZhcigke2l0ZW0ubmFtZX0pYCwgaXRlbS5yb290KTtcblx0XHRpZiAoIXJlc29sdmVkICYmICFoaW50ZWQpIGNvbnRpbnVlO1xuXHRcdGlmICghcmVzb2x2ZWQgJiYgIWlzQ29sb3JDb21wdXRlZFZhbHVlKGl0ZW0udmFsdWUpKSBjb250aW51ZTtcblx0XHRmb3VuZC5wdXNoKHtcblx0XHRcdG5hbWU6IGxhYmVsRnJvbVZhck5hbWUoaXRlbS5uYW1lKSxcblx0XHRcdHZhbHVlOiBgdGhlbWUtdmFyOiR7aXRlbS5uYW1lfWAsXG5cdFx0XHRjc3M6IHJlc29sdmVkIHx8IGB2YXIoJHtpdGVtLm5hbWV9KWAsXG5cdFx0XHRyZXNvbHZlZDogcmVzb2x2ZWQgfHwgaXRlbS52YWx1ZSxcblx0XHRcdHJhdzogaXRlbS52YWx1ZSxcblx0XHRcdHNvdXJjZTogaXRlbS5uYW1lLFxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgZGVkdXBlZCA9IFtdO1xuXHRjb25zdCBzZWVuQ29sb3JzID0gbmV3IFNldCgpO1xuXHRjb25zdCBhY2NlbnQgPSBjaG9vc2VUaGVtZUFjY2VudChmb3VuZCk7XG5cdGlmIChhY2NlbnQpIHtcblx0XHRkZWR1cGVkLnB1c2goeyAuLi5hY2NlbnQsIG5hbWU6ICdBY2NlbnQnLCB2YWx1ZTogJ3RoZW1lOmFjY2VudCcgfSk7XG5cdFx0c2VlbkNvbG9ycy5hZGQoYWNjZW50LnJlc29sdmVkKTtcblx0fVxuXHRmb3IgKGNvbnN0IGl0ZW0gb2YgZm91bmQpIHtcblx0XHRpZiAoc2VlbkNvbG9ycy5oYXMoaXRlbS5yZXNvbHZlZCkpIGNvbnRpbnVlO1xuXHRcdHNlZW5Db2xvcnMuYWRkKGl0ZW0ucmVzb2x2ZWQpO1xuXHRcdGRlZHVwZWQucHVzaChpdGVtKTtcblx0fVxuXHRyZXR1cm4gZGVkdXBlZDtcbn1cblxuLyoqIEBwYXJhbSB7e25hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgY3NzOiBzdHJpbmcsIHJlc29sdmVkOiBzdHJpbmcsIHJhdzogc3RyaW5nLCBzb3VyY2U6IHN0cmluZ31bXX0gY29sb3JzICovXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlVGhlbWVBY2NlbnQoY29sb3JzKSB7XG5cdGNvbnN0IG5hbWVzID0gWyctLWxvZ28tY29sb3InLCAnLS1hY2NlbnQtY29sb3InLCAnLS1jb2xvci1hY2NlbnQnLCAnLS10aGVtZS1hY2NlbnQnLCAnLS1jb2xvci1wcmltYXJ5JywgJy0tYWNjZW50JywgJy0tcHJpbWFyeSddO1xuXHRmb3IgKGNvbnN0IG5hbWUgb2YgbmFtZXMpIHtcblx0XHRjb25zdCBmb3VuZCA9IGNvbG9ycy5maW5kKChpdGVtKSA9PiBpdGVtLnNvdXJjZSA9PT0gbmFtZSAmJiBpdGVtLnJlc29sdmVkKTtcblx0XHRpZiAoZm91bmQpIHJldHVybiBmb3VuZDtcblx0fVxuXHRyZXR1cm4gY29sb3JzLmZpbmQoKGl0ZW0pID0+IC9hY2NlbnR8cHJpbWFyeS9pLnRlc3QoaXRlbS5zb3VyY2UpICYmIGl0ZW0ucmVzb2x2ZWQpIHx8IG51bGw7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxVQUFVO0FBQUEsSUFDekosT0FBTyxFQUFFLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxVQUFVO0FBQUEsSUFDeEosUUFBUSxFQUFFLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxVQUFVO0FBQUEsSUFDekosTUFBTSxFQUFFLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxVQUFVO0FBQUEsSUFDdkosT0FBTyxFQUFFLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxVQUFVO0FBQUEsSUFDeEosU0FBUyxFQUFFLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxVQUFVO0FBQUEsSUFDMUosTUFBTSxFQUFFLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxVQUFVO0FBQUEsSUFDdkosTUFBTSxFQUFFLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxVQUFVO0FBQUEsSUFDdkosS0FBSyxFQUFFLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxVQUFVO0FBQUEsSUFDdEosTUFBTSxFQUFFLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxVQUFVO0FBQUEsSUFDdkosUUFBUSxFQUFFLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxVQUFVO0FBQUEsSUFDekosUUFBUSxFQUFFLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxVQUFVO0FBQUEsSUFDekosUUFBUSxFQUFFLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxVQUFVO0FBQUEsSUFDekosU0FBUyxFQUFFLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxVQUFVO0FBQUEsSUFDMUosTUFBTSxFQUFFLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxVQUFVO0FBQUEsSUFDdkosTUFBTSxFQUFFLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxVQUFVO0FBQUEsRUFDeEosQ0FBQztBQUVELE1BQU0sb0JBQW9CLE9BQU8sT0FBTztBQUFBLElBQ3ZDLEVBQUUsTUFBTSxTQUFTLEtBQUssVUFBVTtBQUFBLElBQ2hDLEVBQUUsTUFBTSxRQUFRLEtBQUssVUFBVTtBQUFBLElBQy9CLEVBQUUsTUFBTSxRQUFRLEtBQUssVUFBVTtBQUFBLElBQy9CLEVBQUUsTUFBTSxXQUFXLEtBQUssVUFBVTtBQUFBLElBQ2xDLEVBQUUsTUFBTSxPQUFPLEtBQUssVUFBVTtBQUFBLElBQzlCLEVBQUUsTUFBTSxVQUFVLEtBQUssVUFBVTtBQUFBLElBQ2pDLEVBQUUsTUFBTSxTQUFTLEtBQUssVUFBVTtBQUFBLElBQ2hDLEVBQUUsTUFBTSxVQUFVLEtBQUssVUFBVTtBQUFBLElBQ2pDLEVBQUUsTUFBTSxRQUFRLEtBQUssVUFBVTtBQUFBLElBQy9CLEVBQUUsTUFBTSxTQUFTLEtBQUssVUFBVTtBQUFBLElBQ2hDLEVBQUUsTUFBTSxXQUFXLEtBQUssVUFBVTtBQUFBLElBQ2xDLEVBQUUsTUFBTSxRQUFRLEtBQUssVUFBVTtBQUFBLElBQy9CLEVBQUUsTUFBTSxRQUFRLEtBQUssVUFBVTtBQUFBLElBQy9CLEVBQUUsTUFBTSxPQUFPLEtBQUssVUFBVTtBQUFBLElBQzlCLEVBQUUsTUFBTSxRQUFRLEtBQUssVUFBVTtBQUFBLElBQy9CLEVBQUUsTUFBTSxVQUFVLEtBQUssVUFBVTtBQUFBLElBQ2pDLEVBQUUsTUFBTSxVQUFVLEtBQUssVUFBVTtBQUFBLElBQ2pDLEVBQUUsTUFBTSxVQUFVLEtBQUssVUFBVTtBQUFBLElBQ2pDLEVBQUUsTUFBTSxXQUFXLEtBQUssVUFBVTtBQUFBLElBQ2xDLEVBQUUsTUFBTSxRQUFRLEtBQUssVUFBVTtBQUFBLElBQy9CLEVBQUUsTUFBTSxRQUFRLEtBQUssVUFBVTtBQUFBLEVBQ2hDLENBQUM7QUFFRCxNQUFNLGdCQUFnQixPQUFPLE9BQU87QUFBQSxJQUNuQyxFQUFFLE1BQU0sU0FBUyxLQUFLLFVBQVU7QUFBQSxJQUNoQyxFQUFFLE1BQU0sU0FBUyxLQUFLLFVBQVU7QUFBQSxJQUNoQyxFQUFFLE1BQU0sUUFBUSxLQUFLLFVBQVU7QUFBQSxJQUMvQixFQUFFLE1BQU0sUUFBUSxLQUFLLFVBQVU7QUFBQSxJQUMvQixFQUFFLE1BQU0sUUFBUSxLQUFLLFVBQVU7QUFBQSxJQUMvQixFQUFFLE1BQU0sT0FBTyxLQUFLLFVBQVU7QUFBQSxJQUM5QixFQUFFLE1BQU0sVUFBVSxLQUFLLFVBQVU7QUFBQSxJQUNqQyxFQUFFLE1BQU0sVUFBVSxLQUFLLFVBQVU7QUFBQSxJQUNqQyxFQUFFLE1BQU0sVUFBVSxLQUFLLFVBQVU7QUFBQSxJQUNqQyxFQUFFLE1BQU0sUUFBUSxLQUFLLFVBQVU7QUFBQSxJQUMvQixFQUFFLE1BQU0sUUFBUSxLQUFLLFVBQVU7QUFBQSxJQUMvQixFQUFFLE1BQU0sU0FBUyxLQUFLLFVBQVU7QUFBQSxJQUNoQyxFQUFFLE1BQU0sUUFBUSxLQUFLLFVBQVU7QUFBQSxJQUMvQixFQUFFLE1BQU0sVUFBVSxLQUFLLFVBQVU7QUFBQSxJQUNqQyxFQUFFLE1BQU0sVUFBVSxLQUFLLFVBQVU7QUFBQSxJQUNqQyxFQUFFLE1BQU0sUUFBUSxLQUFLLFVBQVU7QUFBQSxFQUNoQyxDQUFDO0FBRUQsTUFBTSx1QkFBdUIsT0FBTyxPQUFPO0FBQUEsSUFDMUMsRUFBRSxJQUFJLFFBQVEsTUFBTSxRQUFRLFVBQVUsY0FBYztBQUFBLElBQ3BELEVBQUUsSUFBSSxZQUFZLE1BQU0sWUFBWSxVQUFVLGtCQUFrQjtBQUFBLElBQ2hFLEVBQUUsSUFBSSxVQUFVLE1BQU0sVUFBVSxVQUFVLE9BQU8sT0FBTztBQUFBLE1BQ3ZELEVBQUUsTUFBTSxTQUFTLEtBQUssVUFBVTtBQUFBLE1BQ2hDLEVBQUUsTUFBTSxTQUFTLEtBQUssVUFBVTtBQUFBLE1BQ2hDLEVBQUUsTUFBTSxRQUFRLEtBQUssVUFBVTtBQUFBLE1BQy9CLEVBQUUsTUFBTSxRQUFRLEtBQUssVUFBVTtBQUFBLE1BQy9CLEVBQUUsTUFBTSxTQUFTLEtBQUssVUFBVTtBQUFBLE1BQ2hDLEVBQUUsTUFBTSxTQUFTLEtBQUssVUFBVTtBQUFBLE1BQ2hDLEVBQUUsTUFBTSxVQUFVLEtBQUssVUFBVTtBQUFBLE1BQ2pDLEVBQUUsTUFBTSxRQUFRLEtBQUssVUFBVTtBQUFBLE1BQy9CLEVBQUUsTUFBTSxRQUFRLEtBQUssVUFBVTtBQUFBLE1BQy9CLEVBQUUsTUFBTSxRQUFRLEtBQUssVUFBVTtBQUFBLE1BQy9CLEVBQUUsTUFBTSxPQUFPLEtBQUssVUFBVTtBQUFBLE1BQzlCLEVBQUUsTUFBTSxTQUFTLEtBQUssVUFBVTtBQUFBLE1BQ2hDLEVBQUUsTUFBTSxRQUFRLEtBQUssVUFBVTtBQUFBLE1BQy9CLEVBQUUsTUFBTSxRQUFRLEtBQUssVUFBVTtBQUFBLElBQ2hDLENBQUMsRUFBRTtBQUFBLElBQ0gsRUFBRSxJQUFJLFlBQVksTUFBTSxZQUFZLFVBQVUsT0FBTyxPQUFPO0FBQUEsTUFDM0QsRUFBRSxNQUFNLFNBQVMsS0FBSyxVQUFVO0FBQUEsTUFDaEMsRUFBRSxNQUFNLFNBQVMsS0FBSyxVQUFVO0FBQUEsTUFDaEMsRUFBRSxNQUFNLFFBQVEsS0FBSyxVQUFVO0FBQUEsTUFDL0IsRUFBRSxNQUFNLFFBQVEsS0FBSyxVQUFVO0FBQUEsTUFDL0IsRUFBRSxNQUFNLE9BQU8sS0FBSyxVQUFVO0FBQUEsTUFDOUIsRUFBRSxNQUFNLFFBQVEsS0FBSyxVQUFVO0FBQUEsTUFDL0IsRUFBRSxNQUFNLFVBQVUsS0FBSyxVQUFVO0FBQUEsTUFDakMsRUFBRSxNQUFNLGVBQWUsS0FBSyxVQUFVO0FBQUEsTUFDdEMsRUFBRSxNQUFNLFVBQVUsS0FBSyxVQUFVO0FBQUEsTUFDakMsRUFBRSxNQUFNLFFBQVEsS0FBSyxVQUFVO0FBQUEsTUFDL0IsRUFBRSxNQUFNLFFBQVEsS0FBSyxVQUFVO0FBQUEsTUFDL0IsRUFBRSxNQUFNLFFBQVEsS0FBSyxVQUFVO0FBQUEsTUFDL0IsRUFBRSxNQUFNLFNBQVMsS0FBSyxVQUFVO0FBQUEsTUFDaEMsRUFBRSxNQUFNLFFBQVEsS0FBSyxVQUFVO0FBQUEsTUFDL0IsRUFBRSxNQUFNLFVBQVUsS0FBSyxVQUFVO0FBQUEsTUFDakMsRUFBRSxNQUFNLFNBQVMsS0FBSyxVQUFVO0FBQUEsTUFDaEMsRUFBRSxNQUFNLFVBQVUsS0FB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QUFBO0FBQUE7QUFBQTtBQUFBLE1BSVgsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT1gsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BYVgsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSVgsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BYVgsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT1gsV0FBVywwQkFBMEIsV0FBVztBQUFBLE1BQ2hELFdBQVcsMEJBQTBCLFdBQVcsZ0JBQWdCLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSzNFLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNWCxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWlCWCxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJWCxXQUFXO0FBQUEsTUFDWCxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJWCxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWNYLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlYLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUVgsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVNYLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUVgsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1YLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNWCxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPWCxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPWCxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BU1gsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVNYLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVVYLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUVgsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVVgsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVVgsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1YLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlYLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVVYLFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNWCxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPWCxXQUFXLG1CQUFtQixXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUt4QyxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtaLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFrQlgsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLWCxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTVgsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFRWCxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPWCxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTVgsV0FBVywyQkFBMkIsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSWpELFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNWCxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVdYLFdBQVcsaUJBQWlCLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS3ZDLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9YLFdBQVcsb0JBQW9CLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUkxQyxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTVgsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVlYLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS1gsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1YLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9YLFdBQVcsb0JBQW9CLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUkxQyxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVFYLFdBQVcsb0JBQW9CLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUkxQyxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtYLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9YLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNWCxXQUFXO0FBQUEsTUFDWCxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFVWCxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtYLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS1gsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1YLFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS1gsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLWCxXQUFXO0FBQUEsTUFDWCxXQUFXO0FBQUEsTUFDWCxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVFYLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9YLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFTWCxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTVgsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1YLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlYLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQW1CWCxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJWCxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtYLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUVgsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT1gsV0FBVztBQUFBO0FB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QUFBQSxNQU12Qix1QkFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFTdkIsdUJBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTXZCLHVCQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU12Qix1QkFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS3ZCLHVCQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSXZCLHVCQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLdkIsdUJBQXVCO0FBQUE7QUFBQTtBQUFBLE1BR3ZCLHVCQUF1QjtBQUFBLE1BQ3ZCLHVCQUF1QjtBQUFBLE1BQ3ZCLHVCQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVN2Qix1QkFBdUI7QUFBQSxNQUN2Qix1QkFBdUI7QUFBQSxNQUN2Qix1QkFBdUI7QUFBQSxNQUN2Qix1QkFBdUI7QUFBQSxNQUN2Qix1QkFBdUI7QUFBQSxNQUN2Qix1QkFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUXZCLHVCQUF1QjtBQUFBLE1BQ3ZCLHVCQUF1QjtBQUFBO0FBQUE7QUFBQSxNQUd2Qix1QkFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUl2Qix1QkFBdUI7QUFBQSxNQUN2Qix1QkFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUl2Qix1QkFBdUI7QUFBQTtBQUFBLE9BRXRCLHVCQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLeEIsV0FBVztBQUFBLE1BQ1gsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLWCxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQXdCaUMsZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0EyRDFELFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBS2Y7QUFBQSxJQUNGO0FBQUEsRUFDRDsiLAogICJuYW1lcyI6IFsicGFuZWwiLCAiaCJdCn0K
