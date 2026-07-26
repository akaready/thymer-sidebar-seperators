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

  // ../../shared/settings-ui/tokens.css
  var tokens_default = `/*
 * Thymer Plugin Settings UI \u2014 Design Tokens
 *
 * Canonical CSS custom properties for the plugin settings panel system.
 * Plugins consume this verbatim; component CSS reads from these vars.
 *
 * See shared/settings-ui/DESIGN.md for rationale.
 *
 * Thymer var names verified against library/css-tokens/ (ripped from shipped CSS).
 * Fallbacks use color-mix(currentColor) so panels work when a token is absent.
 *
 * SCOPE IS DOUBLED ON PURPOSE (.tps-panel.tps-panel, specificity 0,2,0).
 * Every plugin bundles its own copy of this file and injects it into the same
 * document, all declaring the same global .tps-panel class. At equal specificity
 * the last stylesheet injected wins for EVERY panel in the app, so one plugin
 * running an outdated bundle silently redefines these tokens for all the others.
 * That shipped: pre-1f753f6 builds set --tps-accent from --accent-color, a var
 * Thymer never defines, which collapsed the accent to currentColor (white text)
 * across every installed plugin's panel. Doubling the class lets a current copy
 * outrank any stale plain-.tps-panel copy regardless of injection order.
 * Do not "simplify" this back to a single class.
 */

.tps-panel.tps-panel {
  /* \u2500\u2500 Color: text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-text:           var(--text-default,   currentColor);
  --tps-text-muted:     var(--text-muted,     color-mix(in srgb, currentColor 62%, transparent));
  --tps-text-faint:     var(--text-subtle,    color-mix(in srgb, currentColor 48%, transparent));
  --tps-text-whisper:   var(--text-disabled,  color-mix(in srgb, currentColor 34%, transparent));

  /* \u2500\u2500 Color: surfaces \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-bg-input:       var(--input-bg-color,
                        color-mix(in srgb, currentColor 6%, transparent));
  --tps-bg-hover:       var(--hover-subtle,
                        var(--sidebar-bg-hover,
                        color-mix(in srgb, currentColor 8%, transparent)));
  --tps-bg-active:      var(--active-bg-color,
                        color-mix(in srgb, currentColor 12%, transparent));

  /* \u2500\u2500 Color: borders / dividers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-divider:        var(--divider-color,
                        var(--thin-divider-color,
                        color-mix(in srgb, currentColor 14%, transparent)));
  --tps-border:         var(--input-border-color,
                        var(--divider-color,
                        color-mix(in srgb, currentColor 22%, transparent)));
  --tps-border-strong:  var(--titlebar-border-color,
                        var(--selection-border,
                        color-mix(in srgb, currentColor 32%, transparent)));

  /* \u2500\u2500 Color: accent (Thymer uses --logo-color) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Fallback is a real color, never currentColor: an accent that degrades into
     the text color fails invisibly. Deliberately the brand mark, not the theme's
     --color-primary-500 \u2014 that one is a muted slate on themes like
     basalt-bedrock, which would make checked rows harder to read, not easier. */
  --tps-accent:         var(--logo-color, #04d1ab);
  --tps-accent-soft:    color-mix(in srgb, var(--tps-accent) 15%, transparent);
  --tps-accent-strong:  color-mix(in srgb, var(--tps-accent) 80%, var(--tps-text));

  /* \u2500\u2500 Color: semantic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-danger:         var(--enum-red-fg, #ef4444);
  --tps-danger-soft:    color-mix(in srgb, var(--tps-danger) 15%, transparent);
  --tps-warning:        var(--text-warning,
                        var(--enum-yellow-fg, #f59e0b));
  --tps-success:        var(--enum-green-fg, #10b981);
  --tps-success-soft:   color-mix(in srgb, var(--tps-success) 12%, transparent);

  --tps-on-accent:      var(--text-on-accent, light-dark(#111111, #fafafa));

  /* Panel chrome */
  --tps-panel-bg:       var(--panel-bg-color, transparent);
  --tps-swatch-inset:   color-mix(in srgb, var(--tps-text) 8%, transparent);

  /* \u2500\u2500 Typography \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Font is INHERITED from Thymer's panel chrome (see components.css). */

  --tps-fs-title:       18px;
  --tps-fs-lede:        13px;
  --tps-fs-section:     11px;
  --tps-fs-hint:        12px;
  --tps-fs-label:       13px;
  --tps-fs-desc:        12px;
  --tps-fs-body:        13px;
  --tps-fs-value:       12px;
  --tps-fs-button:      12px;
  --tps-fs-list-header: 10px;

  --tps-lh-tight:       1;
  --tps-lh-snug:        1.2;
  --tps-lh-base:        1.4;
  --tps-lh-loose:       1.5;

  --tps-fw-regular:     400;
  --tps-fw-medium:      500;
  --tps-fw-semibold:    600;
  --tps-fw-bold:        700;

  --tps-ls-section:     0.06em;
  --tps-ls-list:        0.08em;
  --tps-ls-title:       0;

  /* \u2500\u2500 Spacing (8px scale) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-space-1:        4px;
  --tps-space-2:        8px;
  --tps-space-3:        12px;
  --tps-space-4:        16px;
  --tps-space-5:        24px;
  --tps-space-6:        32px;
  --tps-space-7:        48px;

  /* \u2500\u2500 Radii \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-radius-sm:      4px;
  --tps-radius-md:      6px;
  --tps-radius-lg:      8px;
  --tps-radius-pill:    999px;
  --tps-radius-circle:  50%;

  /* \u2500\u2500 Motion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-ease-out:       cubic-bezier(0.2, 0.6, 0.2, 1);
  --tps-ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);
  --tps-dur-fast:       80ms;
  --tps-dur-base:       160ms;

  --tps-shadow-thumb:   0 1px 3px color-mix(in srgb, var(--tps-text) 28%, transparent);

  /* \u2500\u2500 Component dimensions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-control-h-sm:   28px;
  --tps-control-h-md:   32px;
  --tps-input-w:        64px;
  --tps-num-step-w:     28px;
  --tps-swatch-size:    22px;
  --tps-thumb-size:     16px;
  --tps-track-h:        6px;

  --tps-slider-track:   color-mix(in srgb, var(--tps-text) 22%, transparent);
  --tps-slider-thumb-border: color-mix(in srgb, var(--tps-text) 28%, transparent);
}

@media (prefers-reduced-motion: reduce) {
  .tps-panel.tps-panel {
    --tps-dur-fast:     1ms;
    --tps-dur-base:     1ms;
  }
}
`;

  // ../../shared/settings-ui/components.css
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
    var(--tps-panel-bg, var(--panel-bg-color, var(--plg-ci-theme-bg, transparent)));
  border-left: 1px solid #f26548;
  border-right: 1px solid #03bdf2;
}

.tps-plugin-header-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-2, 8px);
  margin: 0 0 var(--tps-space-3, 12px);
  background: var(--tps-bg-hover);
  border-radius: var(--tps-radius-md, 6px);
}

.tps-plugin-header-logo-icon {
  flex: 0 0 auto;
  font-size: 34px;
  line-height: 1;
  color: var(--tps-text, currentColor);
}

.tps-plugin-header-title {
  font-size: 22px;
  line-height: var(--tps-lh-snug, 1.2);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: 0;
  color: var(--tps-text, var(--text-default, currentColor));
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-panel .tps-plugin-header-version {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  font-size: 11px;
  line-height: inherit;
  font-weight: var(--tps-fw-medium, 500);
  letter-spacing: 0;
  color: var(--tps-text-faint) !important;
  white-space: nowrap;
}

.tps-plugin-header-lede {
  font-size: 14px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-wrap {
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  color: inherit;
  opacity: 0.28;
  font: inherit;
  font-size: var(--tps-fs-section, 11px);
  font-weight: var(--tps-fw-semibold, 600);
  line-height: var(--tps-lh-tight, 1);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-toggle:hover {
  opacity: 0.72;
}

.tps-plugin-header-helper-toggle:focus-visible {
  outline: 1px solid color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
  outline-offset: 2px;
}

.tps-plugin-header-helper-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 13px;
  height: 13px;
  font-size: 13px;
  line-height: 1;
  color: inherit;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle {
  opacity: 0.72;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle:hover {
  opacity: 1;
}

.tps-plugin-header-helper-body {
  display: none;
  margin: 8px 0 0;
  padding-left: 18px;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body {
  display: block;
  cursor: pointer;
}

.tps-plugin-header-helper-line {
  margin: 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: inherit;
  opacity: 0.72;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body:hover .tps-plugin-header-helper-line {
  opacity: 1;
}

/* Scoped .tps-panel on purpose: every plugin injects its own copy of this
   file, and older copies baseline-align this row (plus translateY icon
   shims). Higher specificity here makes the newest layout win the cascade
   war regardless of plugin load order. */
.tps-panel .tps-plugin-header-attr {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0;
  width: 100%;
  font-size: 11.5px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: var(--tps-space-3, 12px) 0 0;
  padding-top: var(--tps-space-3, 12px);
  border-top: 0;
}

.tps-plugin-header-attr::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: clamp(40%, 50%, 55%);
  height: 1px;
  background: var(--tps-bg-hover);
}

.tps-plugin-header-link-group + .tps-plugin-header-link-group {
  margin-left: var(--tps-space-3, 12px);
  padding-left: var(--tps-space-3, 12px);
  border-left: 1px solid var(--tps-bg-hover);
}

.tps-panel .tps-plugin-header-icon,
.tps-panel .tps-plugin-header-attr .ti {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  font-size: 12px;
  line-height: 1;
  color: var(--tps-text-muted);
  margin-right: var(--tps-space-1, 4px);
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
  color: var(--tps-text-faint) !important;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
}

.tps-plugin-header-link:hover {
  text-decoration: none;
  text-decoration-color: transparent;
  filter: brightness(1.2);
}

/* \u2500\u2500 Header controls: scope pill + bug report + kill switch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Settings-scope cluster. Resting: one dim "All devices" pill. Diverged:
   pill lights amber (full-perimeter border + tint \u2014 never a single-edge
   accent) and the \u2191 push / \u21BA discard icon buttons appear beside it. Amber
   rides Thymer's orange enum tokens so it tracks the theme. */
.tps-scope {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.tps-scope-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 22px;
  padding: 0 8px;
  border: 1px solid var(--tps-border, rgba(127, 127, 127, 0.16));
  border-radius: 999px;
  font-size: 10.5px;
  line-height: 1;
  white-space: nowrap;
  color: var(--tps-text-muted);
  background: transparent;
  user-select: none;
}

.tps-scope-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--tps-text-muted);
  opacity: 0.55;
}

/* "This device" is a normal, saved state (per-device settings), NOT a warning \u2014
   so it wears the calm brand accent, not an alarming amber. Full-perimeter
   border, never a single-edge accent. */
.tps-scope-pill[data-diverged="true"] {
  color: var(--tps-accent);
  border-color: color-mix(in srgb, var(--tps-accent) 45%, transparent);
  background: var(--tps-accent-soft);
}

.tps-scope-pill[data-diverged="true"] .tps-scope-dot {
  background: var(--tps-accent);
  opacity: 1;
}

.tps-scope-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid var(--tps-border, rgba(127, 127, 127, 0.16));
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

/* Inline-SVG icons: a viewBox-centered vector in a block box has no font
   metrics \u2014 no baseline, no ascent/descent ink drift. The 14px vector in the
   22px button gives an exact 4px inset on every side. */
.tps-panel .tps-scope-svg {
  display: flex;
  width: 14px;
  height: 14px;
  flex: 0 0 auto;
}

.tps-panel .tps-scope-svg svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Optical correction for the (still webfont) bug glyph: near-zero descent
   rides the ink ~1px high of any line-box centering. */
.tps-panel .tps-plugin-header-bug .ti::before {
  display: inline-block;
  transform: translateY(1px);
}

.tps-scope-btn:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-scope-btn:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-scope-btn--push:hover {
  color: var(--enum-green-fg, #3fa653);
  border-color: var(--enum-green-border, rgba(63, 166, 83, 0.45));
  background: var(--enum-green-bg, rgba(63, 166, 83, 0.12));
}

/* Armed state must beat the generic :hover recolor (same specificity, order-
   dependent) \u2014 scope it up so the icon reddens with the box, hovered or not. */
.tps-panel .tps-scope-btn--discard[data-armed="true"],
.tps-panel .tps-scope-btn--discard[data-armed="true"]:hover {
  color: var(--enum-red-fg, #d64545);
  border-color: var(--enum-red-border, rgba(214, 69, 69, 0.5));
  background: var(--enum-red-bg, rgba(214, 69, 69, 0.12));
}

.tps-scope-btn[disabled] {
  opacity: 0.5;
  cursor: default;
}

/* \u2500\u2500 Header controls: bug report + kill switch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Last flex item of the attr row; margin-left:auto pins the group to the
   right edge, align-self:center opts out of the row's baseline alignment. */
.tps-plugin-header-controls {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-2, 8px);
  margin-left: auto;
  padding-left: var(--tps-space-3, 12px);
}

/* In-row placement (right of the version link). */
.tps-panel .tps-plugin-header-attr > .tps-plugin-header-bug {
  margin-left: var(--tps-space-2, 8px);
}

.tps-plugin-header-bug {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

/* Undo the attr row's generic .ti treatment (translateY + margin) inside the button. */
.tps-panel .tps-plugin-header-bug .ti {
  width: 14px;
  height: 14px;
  font-size: 14px;
  transform: none;
  margin: 0;
}

.tps-plugin-header-bug:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-plugin-header-bug:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-switch {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  width: 30px;
  height: 16px;
  padding: 0;
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-pill, 999px);
  background: var(--tps-bg-input);
  cursor: pointer;
  transition: background-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

.tps-switch-knob {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 12px;
  height: 12px;
  border-radius: var(--tps-radius-circle, 50%);
  background: var(--tps-text-muted);
  transition: transform var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

.tps-switch[aria-checked="true"] {
  background: var(--tps-accent);
  border-color: var(--tps-accent);
}

.tps-switch[aria-checked="true"] .tps-switch-knob {
  transform: translateX(14px);
  background: var(--tps-on-accent, #fff);
}

.tps-switch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-switch[data-busy],
.tps-switch:disabled {
  opacity: 0.55;
  pointer-events: none;
}

/* Off-state "safe mode": dim the body, keep it interactive \u2014 edits stage in the
   plugin's local drafts and apply on re-enable. Keyed off the pill's aria state
   so the optimistic flip dims instantly and heal re-renders stay correct with
   no JS. The header (pill, bug button, off-note) stays full opacity \u2014 exclude
   any direct child containing it (collection-icons wraps the header in a row
   element, so exclude by content, not class). */
.tps-panel:has(.tps-plugin-header .tps-switch[aria-checked="false"]) > :not(:has(.tps-plugin-header)) {
  opacity: 0.65;
  transition: opacity var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

/* Rendered whenever the header has a kill switch; shown only while it's off. */
.tps-plugin-header-off-note {
  display: none;
  margin: var(--tps-space-2, 8px) 0 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
}

.tps-plugin-header:has(.tps-switch[aria-checked="false"]) .tps-plugin-header-off-note {
  display: block;
}

/* \u2500\u2500 Feedback dialog (panel-scoped modal) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* The overlay positions against the .tps-panel root (the scroll container). */
.tps-panel {
  position: relative;
}

.tps-feedback-overlay {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-4);
  background: color-mix(in srgb, var(--panel-bg-color, light-dark(#ffffff, #131316)) 55%, transparent);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
}

@supports not ((backdrop-filter: blur(6px)) or (-webkit-backdrop-filter: blur(6px))) {
  .tps-feedback-overlay {
    background: color-mix(in srgb, var(--panel-bg-color, light-dark(#ffffff, #131316)) 90%, transparent);
  }
}

/* Flex column with a growing description field: the card stretches to the
   available panel height (capped) and the textarea absorbs the difference,
   so the card itself never needs a scrollbar. */
.tps-feedback-card {
  display: flex;
  flex-direction: column;
  width: min(440px, 100%);
  height: min(760px, 100%);
  overflow: auto;
  background: var(--panel-bg-color, light-dark(#ffffff, #17171b));
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-lg);
  padding: var(--tps-space-4);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
}

/* Rows keep their natural height \u2014 when content doesn't fit (e.g. the system
   report drawer opens in a short panel) the CARD scrolls; rows must never be
   squeezed into overlapping each other. Only the description field flexes. */
.tps-feedback-card > * {
  flex: 0 0 auto;
}

.tps-feedback-card > .tps-feedback-field--grow {
  flex: 1 1 auto;
}

.tps-feedback-field--grow {
  display: flex;
  flex-direction: column;
}

.tps-feedback-field--grow .tps-feedback-textarea {
  flex: 1 1 auto;
  min-height: 72px;
}

.tps-feedback-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 var(--tps-space-2);
}

.tps-feedback-title {
  margin: 0;
  font-size: var(--tps-fs-label, 12.5px);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  color: var(--tps-text);
}

.tps-feedback-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  font-size: 14px;
}

.tps-feedback-close:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-feedback-close:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-feedback-hint {
  margin: 0 0 var(--tps-space-3);
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
}

.tps-feedback-field {
  display: block;
  margin: 0 0 var(--tps-space-3);
}

.tps-feedback-label {
  display: block;
  margin: 0 0 var(--tps-space-1);
  font-size: var(--tps-fs-label, 12.5px);
  font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text);
}

.tps-feedback-input,
.tps-feedback-textarea {
  width: 100%;
  padding: var(--tps-space-1, 4px) var(--tps-space-2, 8px);
  font-family: inherit;
  font-size: var(--tps-fs-body, 13px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-sm, 4px);
}

.tps-feedback-textarea {
  resize: vertical;
  min-height: 72px;
}

.tps-feedback-input:focus,
.tps-feedback-textarea:focus {
  outline: none;
  border-color: color-mix(in srgb, var(--tps-accent) 60%, transparent);
}

.tps-feedback-input[aria-invalid="true"],
.tps-feedback-textarea[aria-invalid="true"] {
  border-color: var(--tps-danger);
}

.tps-feedback-details {
  margin: 0 0 var(--tps-space-3);
}

.tps-feedback-summary {
  font-size: var(--tps-fs-hint, 12px);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-feedback-summary:hover {
  color: var(--tps-text);
}

.tps-feedback-report {
  margin: var(--tps-space-2) 0 0;
  padding: var(--tps-space-2);
  max-height: 140px;
  overflow: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
  font-size: 11px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--tps-text-muted);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm, 4px);
}

/* Themed thin scrollbars \u2014 the card (short panels) and the report pre both scroll. */
.tps-feedback-card,
.tps-feedback-report {
  scrollbar-width: thin;
  scrollbar-color: var(--tps-border, rgba(127, 127, 127, 0.25)) transparent;
}

.tps-feedback-card::-webkit-scrollbar,
.tps-feedback-report::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.tps-feedback-card::-webkit-scrollbar-track,
.tps-feedback-report::-webkit-scrollbar-track {
  background: transparent;
}

.tps-feedback-card::-webkit-scrollbar-thumb,
.tps-feedback-report::-webkit-scrollbar-thumb {
  background: var(--tps-border, rgba(127, 127, 127, 0.25));
  border-radius: 999px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

.tps-feedback-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--tps-space-2);
}

/* \u2500\u2500 Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-section {
  padding: 0;
}

.tps-section + .tps-section {
  border-top: 1px solid var(--tps-divider);
  margin-top: var(--tps-space-4);
  padding-top: var(--tps-space-4);
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
  min-height: 34px;
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
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  font-weight: var(--tps-fw-regular);
  letter-spacing: 0;
  text-transform: none;
}

/* Reserve header height when expanded; summary text only shows collapsed */
.tps-section--collapsible[data-open="true"] .tps-section-summary {
  visibility: hidden;
}

.tps-section--collapsible[data-open="false"] > .tps-section-body {
  display: none;
}

/* \u2500\u2500 Option row (checkbox / radio + label + desc) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-opt {
  display: grid;
  grid-template-columns: 18px 1fr;
  column-gap: var(--tps-space-3);
  row-gap: 0;
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
  cursor: pointer;
  transition: color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-opt > .tps-opt-desc {
  grid-column: 2;
  grid-row: 2;
  margin-top: 1px;
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-section-body > .tps-opt-note {
  margin: var(--tps-space-2) -10px 0;
  padding: 0 10px 0 calc(10px + 18px + var(--tps-space-3));
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
}

.tps-opt > input:checked ~ .tps-opt-label {
  color: var(--tps-accent);
}

/* Checkbox option + nested number row (e.g. tuned value under a toggle) */
.tps-section-body:has(> .tps-opt-group) {
  margin-top: 0;
  gap: 0;
}

.tps-opt-group {
  display: flex;
  flex-direction: column;
}

.tps-opt-group + .tps-opt-group {
  margin-top: 0;
}

.tps-opt-group .tps-opt-group__value,
.tps-opt-group > .tps-num {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  padding-right: 10px;
  max-width: 100%;
  box-sizing: border-box;
}

.tps-opt-group .tps-num-grid {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  grid-template-columns: minmax(0, 1fr);
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

/* Shared range styling for sliderRow and any other range input in a panel.
   Exclude hue pickers that paint their own gradient track. */
.tps-panel input[type="range"]:not(.plg-collection-colors__hue) {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue):active::-webkit-slider-thumb {
  cursor: grabbing;
}

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
  background: var(--tps-slider-track);
}

.tps-slider-input::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-slider-input::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-input:active::-webkit-slider-thumb {
  cursor: grabbing;
}

/* Hue picker keeps its gradient track; only style the thumb. */
.tps-panel input[type="range"].plg-collection-colors__hue {
  width: 100%;
  height: 10px;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
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
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset);
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
  color: var(--tps-on-accent);
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

  // ../../shared/settings-ui/color-field.css
  var color_field_default = `/*
 * colorField \u2014 shared color picker (Theme | Tailwind | Custom).
 * Scoped under .tps-panel .tps-color-field; styled through --tps-* tokens.
 * Every selectable swatch is the same .tps-cf-dot across all three tabs.
 */

.tps-panel .tps-color-field { display: block; }

/* \u2500\u2500 Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-tabs {
  display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 4px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px);
  padding: 4px; margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tab {
  cursor: pointer; border: 0; background: transparent;
  border-radius: var(--tps-radius-sm, 6px); padding: 8px 10px; font: inherit;
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  color: var(--tps-text-muted, rgba(127,127,127,0.75));
  transition: background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tab:hover { color: var(--tps-text, inherit); }
.tps-panel .tps-cf-tab.is-active {
  background: var(--tps-panel-bg, var(--bg-default, #fff));
  color: var(--tps-text, inherit); box-shadow: 0 1px 2px rgba(0,0,0,0.12);
}

/* \u2500\u2500 Panes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-pane { display: none; }
.tps-panel .tps-cf-pane.is-active { display: block; }

/* \u2500\u2500 Featured theme picks \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-featured {
  display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
  margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tile {
  display: flex; align-items: center; gap: 10px; width: 100%; text-align: left; cursor: pointer;
  background: var(--tps-bg-hover, rgba(127,127,127,0.04));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 10px 12px; color: var(--tps-text, inherit);
  transition: border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tile:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-tile.is-sel {
  border-color: var(--tps-accent, currentColor);
  background: var(--tps-accent-soft, rgba(127,127,127,0.08));
}
.tps-panel .tps-cf-tile-dot {
  width: 22px; height: 22px; flex: 0 0 auto; border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
}
.tps-panel .tps-cf-tile-label {
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* \u2500\u2500 Groups + the universal swatch dot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-group { margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-group-head { display: flex; align-items: baseline; gap: 8px; margin-bottom: var(--tps-space-2, 8px); }
.tps-panel .tps-cf-group-label {
  font-size: var(--tps-fs-section, 11px); letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--tps-text-faint, var(--tps-text-muted, rgba(127,127,127,0.6))); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-group-hint { font-size: var(--tps-fs-section, 11px); color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Swatches: square dots that fill the row width (22 across in the Tailwind
 *    hue row); every swatch elsewhere matches that width. \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-dots {
  display: grid; grid-template-columns: repeat(22, minmax(0, 1fr)); gap: 5px;
  /* explicit resets so a stale accumulated .tps-cf-dots rule (old edge-to-edge
   * build injected an inset-ring outline) can't linger after a plugin reload. */
  border: 0; border-radius: 0; overflow: visible; box-shadow: none; background: none; padding: 0;
}
.tps-panel .tps-cf-dot {
  aspect-ratio: 1 / 1; min-width: 0; width: 100%; height: auto; border: 0; padding: 0; margin: 0;
  cursor: pointer; position: relative;
  border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
  transition: transform var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-dot:hover { transform: scale(1.12); z-index: 3; }
.tps-panel .tps-cf-dot:focus-visible,
.tps-panel .tps-cf-dot.is-sel,
.tps-panel .tps-cf-dot.is-active {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18)),
              0 0 0 2px var(--tps-panel-bg, #fff), 0 0 0 4px var(--tps-accent, currentColor);
}

/* \u2500\u2500 Lightness "tints": full-width ramp, shade number inside (do not touch) \u2500 */
.tps-panel .tps-cf-ramp {
  display: grid; grid-template-columns: repeat(11, minmax(0, 1fr));
  border-radius: var(--tps-radius-md, 8px); overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border, rgba(127,127,127,0.14));
}
.tps-panel .tps-cf-ramp-cell {
  border: 0; padding: 0; cursor: pointer; height: 30px; position: relative;
  display: flex; align-items: center; justify-content: center;
  font-size: 9px; font-weight: var(--tps-fw-semibold, 600); font-variant-numeric: tabular-nums; letter-spacing: -0.02em;
  transition: box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-ramp-cell:hover { z-index: 3; box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--tps-panel-bg, #fff) 60%, transparent); }
.tps-panel .tps-cf-ramp-cell:focus-visible,
.tps-panel .tps-cf-ramp-cell.is-sel {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff), inset 0 0 0 4px var(--tps-accent, currentColor);
}
/* Faint secondary ring on the inverted ("invert lightness") mirror shade \u2014
   present alongside the prominent ring on the actually-selected shade. */
.tps-panel .tps-cf-ramp-cell.is-sel-mirror {
  z-index: 3;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff),
              inset 0 0 0 3px color-mix(in srgb, var(--tps-accent, currentColor) 42%, transparent);
}

/* \u2500\u2500 Invert-lightness toggle \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-invert {
  display: flex; align-items: center; gap: 8px; margin-top: var(--tps-space-3, 12px);
  cursor: pointer; font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-invert-cb { margin: 0; cursor: pointer; accent-color: var(--tps-accent, currentColor); }
.tps-panel .tps-cf-invert-hint { color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-weight: var(--tps-fw-regular, 400); }
/* Dimmed + non-interactive until a real, non-500 shade is picked (500 mirrors
   to itself, so inverting it is a no-op). */
.tps-panel .tps-cf-invert.is-disabled { opacity: 0.42; cursor: default; }
.tps-panel .tps-cf-invert.is-disabled .tps-cf-invert-cb { cursor: default; }

/* \u2500\u2500 Custom palette \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-custom-row { min-height: 30px; margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-custom-empty {
  grid-column: 1 / -1; display: flex; align-items: center; padding: 0 10px; min-height: 30px;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-regular, 400); letter-spacing: 0;
  color: var(--tps-text-faint, rgba(127,127,127,0.55));
}
.tps-panel .tps-cf-custom-dot { cursor: grab; }
.tps-panel .tps-cf-custom-dot.is-dragging { opacity: 0.4; cursor: grabbing; }

.tps-panel .tps-cf-addrow { display: flex; align-items: center; gap: 8px; }
.tps-panel .tps-cf-remove {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text-muted, rgba(127,127,127,0.75));
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-remove[hidden] { display: none; }
.tps-panel .tps-cf-remove:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-add {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text, inherit);
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-add:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-custom-count {
  margin-left: auto; font-size: var(--tps-fs-section, 11px);
  color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Hex input \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-hexbox {
  display: inline-flex; align-items: center; gap: 8px; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 8px 0 10px;
}
.tps-panel .tps-cf-hex-dot {
  width: 15px; height: 15px; border-radius: var(--tps-radius-sm, 5px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.22));
}
.tps-panel .tps-cf-hex-input {
  border: 0; background: transparent; outline: none;
  font-family: var(--tps-font-mono, ui-monospace, monospace);
  font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); width: 84px;
  font-variant-numeric: tabular-nums;
}
.tps-panel .tps-cf-hex-input::placeholder { color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Universal: No color \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-divider {
  height: 1px; margin: var(--tps-space-3, 12px) 0; background: var(--tps-divider, rgba(127,127,127,0.12));
}
.tps-panel .tps-cf-universal { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.tps-panel .tps-cf-none {
  display: inline-flex; align-items: center; gap: 7px; cursor: pointer; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 12px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text-muted, rgba(127,127,127,0.7));
}
.tps-panel .tps-cf-none:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none.is-sel { border-color: var(--tps-accent, currentColor); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none-sw {
  width: 15px; height: 15px; border-radius: 50%; position: relative; overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border-strong, rgba(127,127,127,0.3));
}
.tps-panel .tps-cf-none-sw::after {
  content: ""; position: absolute; left: 50%; top: -3px; width: 1.5px; height: 21px;
  background: var(--tps-danger, #e2555f); transform: rotate(45deg);
}

/* \u2500\u2500 Instant tooltip (drawn by the component, not native title delay) \u2500\u2500\u2500 */
.tps-panel .tps-cf-tip {
  position: fixed; z-index: 2147483000; transform: translate(-50%, calc(-100% - 8px));
  padding: 3px 8px; border-radius: var(--tps-radius-sm, 5px);
  background: var(--tps-text, #1a1a1a); color: var(--tps-panel-bg, #fff);
  font-size: var(--tps-fs-section, 11px); font-weight: var(--tps-fw-medium, 500);
  line-height: 1.3; white-space: nowrap; pointer-events: none; opacity: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.35);
}
.tps-panel .tps-cf-tip.is-visible { opacity: 1; }

@media (prefers-reduced-motion: reduce) {
  .tps-panel .tps-cf-dot,
  .tps-panel .tps-cf-tab,
  .tps-panel .tps-cf-tile,
  .tps-panel .tps-cf-remove { transition: none; }
}
`;

  // ../../shared/settings-ui/feedback.js
  var MAX_URL_LENGTH = 7600;
  function el(tag, props, ...children) {
    const node = document.createElement(tag);
    const dom = (
      /** @type {any} */
      node
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class") node.className = v;
        else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
        else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            node.setAttribute(k, v);
          }
        } else node.setAttribute(k, v === true ? "" : String(v));
      }
    }
    for (const c of children.flat(Infinity)) {
      if (c == null || c === false) continue;
      node.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return node;
  }
  __name(el, "el");
  function versionFromConf(conf) {
    if (!conf || typeof conf !== "object") return "";
    if (typeof conf.version === "string" && conf.version) return conf.version;
    const custom = conf.custom;
    if (custom && typeof custom === "object") {
      const v = (
        /** @type {Record<string, unknown>} */
        custom.pluginVersion
      );
      if (typeof v === "string") return v;
    }
    return "";
  }
  __name(versionFromConf, "versionFromConf");
  async function collectSystemReport({ pluginName = "", pluginVersion = "", disabled = false, data } = {}) {
    const ua = navigator.userAgent || "";
    const lines = [];
    lines.push(`Plugin: ${pluginName} v${pluginVersion}${disabled ? " (kill switch: OFF)" : ""}`);
    lines.push(`App: ${/electron/i.test(ua) ? "Thymer desktop app (Electron)" : "Thymer web"}${location && location.host ? ` \xB7 ${location.host}` : ""}`);
    lines.push(`UA: ${ua}`);
    lines.push(`Platform: ${navigator.platform || "?"} \xB7 lang ${navigator.language || "?"} \xB7 tz ${Intl.DateTimeFormat().resolvedOptions().timeZone || "?"}`);
    const dpr = Math.round((window.devicePixelRatio || 1) * 100) / 100;
    lines.push(`Screen (css px): ${screen.width}x${screen.height} @${dpr}x (\u2248${Math.round(screen.width * dpr)}x${Math.round(screen.height * dpr)} device px) \xB7 viewport ${window.innerWidth}x${window.innerHeight}`);
    try {
      const dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const themeClasses = Array.from(document.body.classList).filter((c) => /theme/i.test(c)).join(" ");
      lines.push(`Appearance: ${dark ? "dark" : "light"}${reducedMotion ? " \xB7 reduced-motion" : ""}${themeClasses ? ` \xB7 body: ${themeClasses}` : ""}`);
    } catch {
    }
    try {
      const bits = [];
      if (navigator.hardwareConcurrency) bits.push(`${navigator.hardwareConcurrency} cores`);
      const devMem = (
        /** @type {any} */
        navigator.deviceMemory
      );
      if (devMem) bits.push(devMem >= 8 ? `RAM \u22658GB (API cap)` : `~${devMem}GB RAM`);
      const heap = (
        /** @type {any} */
        performance.memory
      );
      if (heap && heap.usedJSHeapSize) bits.push(`JS heap ${Math.round(heap.usedJSHeapSize / 1048576)}MB of ${Math.round(heap.jsHeapSizeLimit / 1048576)}MB limit`);
      bits.push(navigator.onLine === false ? "OFFLINE" : "online");
      if (typeof performance.now === "function") bits.push(`session up ${Math.round(performance.now() / 6e4)}m`);
      lines.push(`System: ${bits.join(" \xB7 ")}`);
    } catch {
    }
    try {
      if (navigator.storage && typeof navigator.storage.estimate === "function") {
        const est = await navigator.storage.estimate();
        if (est && est.usage != null) {
          lines.push(`Storage: ${Math.round((est.usage || 0) / 1048576)}MB used${est.quota ? ` of ${Math.round(est.quota / 1048576)}MB quota` : ""}`);
        }
      }
    } catch {
    }
    try {
      if (data && typeof data.getAllGlobalPlugins === "function") {
        const plugins = await data.getAllGlobalPlugins();
        const listed = plugins.slice(0, 25).map((p) => {
          let name = "";
          let ver = "";
          try {
            name = p.getName?.() || "";
          } catch {
          }
          try {
            ver = versionFromConf(p.getConfiguration?.());
          } catch {
          }
          return ver ? `${name} v${ver}` : name;
        }).filter(Boolean);
        if (listed.length) {
          lines.push(`Global plugins, all installed (${plugins.length}): ${listed.join(", ")}${plugins.length > 25 ? ", \u2026" : ""}`);
        }
      }
      if (data && typeof /** @type {any} */
      data.getAllCollections === "function") {
        const collections = await /** @type {any} */
        data.getAllCollections();
        if (Array.isArray(collections)) lines.push(`Collection-level plugins: ${collections.length} (names withheld)`);
      }
    } catch {
    }
    return lines.join("\n");
  }
  __name(collectSystemReport, "collectSystemReport");
  function buildIssueUrl({ repository, description, discord, email, report }) {
    const repo = repository.replace(/\/+$/, "");
    const firstLine = description.split("\n")[0].trim();
    const title = `[bug] ${firstLine.length > 60 ? `${firstLine.slice(0, 57)}...` : firstLine}`;
    const bodyFor = /* @__PURE__ */ __name((desc2) => {
      const parts = [`**Describe the bug**

${desc2}`];
      if (discord || email) {
        const contact = [];
        if (discord) contact.push(`- Discord: ${discord}`);
        if (email) contact.push(`- Email: ${email}`);
        parts.push(`**Contact**

${contact.join("\n")}`);
      }
      parts.push(`**System report**

\`\`\`
${report}
\`\`\``);
      parts.push("_Screenshots: paste or drag images directly into this text box._");
      return parts.join("\n\n");
    }, "bodyFor");
    const urlFor = /* @__PURE__ */ __name((desc2) => `${repo}/issues/new?${new URLSearchParams({ title, body: bodyFor(desc2) })}`, "urlFor");
    let desc = description;
    let url = urlFor(desc);
    while (url.length > MAX_URL_LENGTH && desc.length > 200) {
      desc = `${desc.slice(0, Math.max(200, desc.length - 500)).trimEnd()}

[description truncated \u2014 URL length limit]`;
      url = urlFor(desc);
    }
    return url;
  }
  __name(buildIssueUrl, "buildIssueUrl");
  function openFeedbackDialog({ host, opener, pluginName = "", pluginVersion = "", repository = "", disabled = false, data } = {}) {
    const panelHost = host || /** @type {HTMLElement | null} */
    (opener ? opener.closest(".tps-panel") : null);
    if (!panelHost || !repository) return;
    if (panelHost.querySelector(".tps-feedback-overlay")) return;
    const reportPromise = collectSystemReport({ pluginName, pluginVersion, disabled, data });
    const discordInput = el("input", { class: "tps-feedback-input", type: "text", placeholder: "e.g. akaready", autocomplete: "off", spellcheck: "false" });
    const emailInput = el("input", { class: "tps-feedback-input", type: "email", placeholder: "e.g. you@example.com", autocomplete: "off", spellcheck: "false" });
    const descInput = el("textarea", { class: "tps-feedback-textarea", rows: "5", placeholder: "What happened? What did you expect instead?" });
    const reportPre = el("pre", { class: "tps-feedback-report" }, "Collecting\u2026");
    reportPromise.then((text) => {
      reportPre.textContent = text;
    }).catch(() => {
      reportPre.textContent = "Report unavailable.";
    });
    const fieldRow = /* @__PURE__ */ __name((label, field, extraClass) => el(
      "label",
      { class: `tps-feedback-field${extraClass ? ` ${extraClass}` : ""}` },
      el("span", { class: "tps-feedback-label" }, label),
      field
    ), "fieldRow");
    const prevOverflow = panelHost.style.overflow;
    const close = /* @__PURE__ */ __name(() => {
      overlay.remove();
      panelHost.style.overflow = prevOverflow;
      try {
        opener?.focus();
      } catch {
      }
    }, "close");
    const submit = /* @__PURE__ */ __name(async () => {
      const description = descInput.value.trim();
      if (!description) {
        descInput.setAttribute("aria-invalid", "true");
        descInput.focus();
        return;
      }
      let report = "";
      try {
        report = await reportPromise;
      } catch {
      }
      const url = buildIssueUrl({
        repository,
        description,
        discord: discordInput.value.trim(),
        email: emailInput.value.trim(),
        report
      });
      window.open(url, "_blank", "noopener");
      close();
    }, "submit");
    const card = el(
      "div",
      { class: "tps-feedback-card", role: "dialog", "aria-modal": "true", "aria-label": `Report a bug in ${pluginName}` },
      el(
        "div",
        { class: "tps-feedback-head" },
        el("h2", { class: "tps-feedback-title" }, "Report a bug"),
        el(
          "button",
          { type: "button", class: "tps-feedback-close", "aria-label": "Close", onClick: close },
          el("i", { class: "ti ti-x", "aria-hidden": "true" })
        )
      ),
      // Fixed short copy — no variable repo name, so each line stays on one line.
      el(
        "p",
        { class: "tps-feedback-hint" },
        "Opens a prefilled GitHub issue on the repo.",
        el("br"),
        "Please add relevant screenshots to the GitHub issue."
      ),
      fieldRow("Discord username (optional)", discordInput),
      fieldRow("Email (optional)", emailInput),
      fieldRow("What happened?", descInput, "tps-feedback-field--grow"),
      el(
        "details",
        { class: "tps-feedback-details" },
        el("summary", { class: "tps-feedback-summary" }, "System report (included with the issue)"),
        reportPre
      ),
      el(
        "div",
        { class: "tps-feedback-actions" },
        el("button", { type: "button", class: "tps-button tps-button--ghost", onClick: close }, "Cancel"),
        el("button", { type: "button", class: "tps-button tps-button--primary", onClick: submit }, "Open GitHub issue")
      )
    );
    const overlay = el("div", { class: "tps-feedback-overlay" }, card);
    overlay.addEventListener("mousedown", (e) => {
      if (e.target === overlay) close();
    });
    overlay.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
      }
    });
    descInput.addEventListener("input", () => descInput.removeAttribute("aria-invalid"));
    panelHost.style.overflow = "hidden";
    overlay.style.top = `${panelHost.scrollTop}px`;
    overlay.style.height = `${panelHost.clientHeight}px`;
    panelHost.appendChild(overlay);
    descInput.focus();
  }
  __name(openFeedbackDialog, "openFeedbackDialog");

  // ../../shared/settings-ui/helpers.js
  var PANEL_CSS = tokens_default + "\n" + components_default + "\n" + color_field_default;
  function h(tag, props, ...children) {
    const el2 = document.createElement(tag);
    const dom = (
      /** @type {any} */
      el2
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class" || k === "className") {
          el2.className = v;
        } else if (k === "style" && typeof v === "object") {
          Object.assign(el2.style, v);
        } else if (k === "dataset" && typeof v === "object") {
          for (const dk in v) el2.dataset[dk] = v[dk];
        } else if (k.startsWith("on") && typeof v === "function") {
          el2.addEventListener(k.slice(2).toLowerCase(), v);
        } else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            el2.setAttribute(k, v);
          }
        } else {
          el2.setAttribute(k, v === true ? "" : String(v));
        }
      }
    }
    appendChildren(el2, children);
    return el2;
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
    const root = h("div", { class: cls }, ...children);
    restoreSectionState(root, pluginClass || "");
    return root;
  }
  __name(panel, "panel");
  function pluginHeader({
    title: heading,
    lede: ledeText,
    helper,
    helperOpen,
    helperDefaultOpen = false,
    onHelperToggle,
    icon = "",
    version = "1.0",
    author = "@akaready",
    homepage = "https://akaready.com",
    repository = "https://github.com/akaready",
    coffee = "https://buymeacoffee.com/akaready",
    killSwitch = null,
    feedback = null,
    scope = null
  }) {
    const iconClass = icon ? icon.startsWith("ti-") ? icon : `ti-${icon}` : "";
    const helperLines = normalizeHelperLines(helper);
    const fb = feedback ? {
      pluginName: (feedback === true ? "" : feedback.pluginName) || heading,
      pluginVersion: (feedback === true ? "" : feedback.pluginVersion) || version,
      repository: (feedback === true ? "" : feedback.repository) || repository,
      disabled: (feedback === true ? void 0 : feedback.disabled) ?? (killSwitch ? !killSwitch.on : false),
      data: feedback === true ? void 0 : feedback.data
    } : null;
    const children = [
      iconClass ? h(
        "div",
        { class: "tps-plugin-header-logo", "aria-hidden": "true" },
        h("i", { class: `ti ${iconClass} tps-plugin-header-logo-icon`, "aria-hidden": "true" })
      ) : null,
      h("h1", { class: "tps-plugin-header-title" }, heading),
      ledeText ? h("p", { class: "tps-plugin-header-lede" }, ledeText) : null,
      helperLines.length ? renderPluginHeaderHelper({
        lines: helperLines,
        defaultOpen: helperDefaultOpen,
        open: helperOpen,
        onToggle: onHelperToggle
      }) : null,
      h(
        "p",
        { class: "tps-plugin-header-attr" },
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-link tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--blue",
            href: homepage,
            target: "_blank",
            rel: "noopener noreferrer"
          }, author)
        ),
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-coffee tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--pink",
            href: coffee,
            target: "_blank",
            rel: "noopener noreferrer"
          }, "buy me a coffee")
        ),
        version ? h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("span", { class: "tps-plugin-header-icon tps-plugin-header-iconify tps-plugin-header-iconify-github", "aria-hidden": "true" }),
          h("a", { class: "tps-plugin-header-link tps-plugin-header-link--muted tps-plugin-header-version", href: repository, target: "_blank", rel: "noopener noreferrer" }, `v${version}`)
        ) : null,
        // Bug report sits with the attribution links (right of the version);
        // the far-right corner is reserved for state toggles (scope pill,
        // kill switch).
        fb ? renderFeedbackButton(fb) : null,
        killSwitch || scope ? h(
          "span",
          { class: "tps-plugin-header-controls" },
          scope ? scopeCluster(scope) : null,
          killSwitch ? renderKillSwitch(killSwitch) : null
        ) : null
      ),
      // Always rendered with a kill switch; CSS shows it only while the pill is
      // off, so it appears instantly on the optimistic flip with no re-render.
      killSwitch ? h(
        "p",
        { class: "tps-plugin-header-off-note" },
        "Plugin is off \u2014 settings stay editable and your changes apply when you switch it back on."
      ) : null
    ];
    return h("div", { class: "tps-plugin-header" }, ...children);
  }
  __name(pluginHeader, "pluginHeader");
  var SCOPE_SVG_NS = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
  function scopeSvgIcon(paths) {
    const wrap = h("span", { class: "tps-scope-svg", "aria-hidden": "true" });
    wrap.innerHTML = `${SCOPE_SVG_NS}${paths}</svg>`;
    return wrap;
  }
  __name(scopeSvgIcon, "scopeSvgIcon");
  function scopeCluster(scope) {
    const pill = h(
      "span",
      {
        class: "tps-scope-pill tooltip",
        "data-diverged": String(!!scope.diverged),
        "data-tooltip": scope.diverged ? "Custom settings for this device, saved automatically. Your other devices are unaffected." : "Using your shared defaults \u2014 the same on all your devices. Edits here apply to this device only.",
        "data-tooltip-dir": "top"
      },
      h("span", { class: "tps-scope-dot", "aria-hidden": "true" }),
      scope.diverged ? "This device" : "All devices"
    );
    if (!scope.diverged) {
      return h("span", { class: "tps-scope" }, pill);
    }
    const push = h("button", {
      type: "button",
      class: "tps-scope-btn tps-scope-btn--push tooltip",
      "data-tooltip": "Copy these settings to all my devices",
      "data-tooltip-dir": "top",
      "aria-label": "Copy these settings to all my devices",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLButtonElement} */
          e.currentTarget
        );
        if (btn.disabled) return;
        btn.disabled = true;
        try {
          scope.onPush();
        } catch {
          btn.disabled = false;
        }
      }, "onClick")
    }, scopeSvgIcon('<path d="M12 5v14"/><path d="M18 11l-6-6"/><path d="M6 11l6-6"/>'));
    let disarmTimer = 0;
    const discard = h("button", {
      type: "button",
      class: "tps-scope-btn tps-scope-btn--discard tooltip",
      "data-tooltip": "Reset this device to your shared defaults",
      "data-tooltip-dir": "top",
      "aria-label": "Reset this device to your shared defaults",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLButtonElement} */
          e.currentTarget
        );
        if (btn.getAttribute("data-armed") !== "true") {
          btn.setAttribute("data-armed", "true");
          btn.setAttribute("data-tooltip", "Tap again to reset this device");
          clearTimeout(disarmTimer);
          disarmTimer = window.setTimeout(() => {
            btn.removeAttribute("data-armed");
            btn.setAttribute("data-tooltip", "Reset this device to your shared defaults");
          }, 3e3);
          return;
        }
        clearTimeout(disarmTimer);
        try {
          scope.onDiscard();
        } catch {
        }
      }, "onClick")
    }, scopeSvgIcon('<path d="M9 14L5 10l4-4"/><path d="M5 10h11a4 4 0 1 1 0 8h-1"/>'));
    return h("span", { class: "tps-scope" }, pill, push, discard);
  }
  __name(scopeCluster, "scopeCluster");
  function renderFeedbackButton(fb) {
    return h("button", {
      type: "button",
      class: "tps-plugin-header-bug",
      title: "Report a bug",
      "aria-label": "Report a bug",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLElement} */
          e.currentTarget
        );
        openFeedbackDialog({
          host: (
            /** @type {HTMLElement | null} */
            btn.closest(".tps-panel")
          ),
          opener: btn,
          ...fb
        });
      }, "onClick")
    }, h("i", { class: "ti ti-bug", "aria-hidden": "true" }));
  }
  __name(renderFeedbackButton, "renderFeedbackButton");
  function renderKillSwitch(killSwitch) {
    const sw = h("button", {
      type: "button",
      class: "tps-switch",
      role: "switch",
      "aria-checked": String(!!killSwitch.on),
      "aria-label": killSwitch.label || "Plugin enabled",
      title: killSwitch.on ? "Plugin enabled \u2014 click to disable all of its effects" : "Plugin disabled \u2014 click to re-enable"
    }, h("span", { class: "tps-switch-knob" }));
    const unlock = /* @__PURE__ */ __name(() => {
      sw.removeAttribute("data-busy");
      sw.disabled = false;
    }, "unlock");
    sw.addEventListener("click", () => {
      if (sw.disabled) return;
      const nextOn = sw.getAttribute("aria-checked") !== "true";
      sw.setAttribute("aria-checked", String(nextOn));
      sw.setAttribute("data-busy", "");
      sw.disabled = true;
      setTimeout(unlock, 700);
      try {
        killSwitch.onToggle(nextOn);
      } catch {
        unlock();
        sw.setAttribute("aria-checked", String(!nextOn));
      }
    });
    return sw;
  }
  __name(renderKillSwitch, "renderKillSwitch");
  function normalizeHelperLines(helper) {
    if (!helper) return [];
    if (typeof helper === "string") {
      const text = helper.trim();
      return text ? [text] : [];
    }
    if (Array.isArray(helper)) {
      return helper.map((line) => String(line).trim()).filter(Boolean);
    }
    return [];
  }
  __name(normalizeHelperLines, "normalizeHelperLines");
  function renderPluginHeaderHelper({ lines, defaultOpen = false, open, onToggle }) {
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const wrap = h("div", {
      class: "tps-plugin-header-helper-wrap",
      dataset: { open: String(initialOpen) }
    });
    const icon = h("i", { class: "ti ti-info-circle tps-plugin-header-helper-icon", "aria-hidden": "true" });
    const toggle = h("button", {
      type: "button",
      class: "tps-plugin-header-helper-toggle",
      "aria-expanded": String(initialOpen)
    }, icon, h("span", { class: "tps-plugin-header-helper-toggle-label" }, "Instructions"));
    const body = h(
      "div",
      { class: "tps-plugin-header-helper-body" },
      h("p", { class: "tps-plugin-header-helper-line" }, lines.join(" "))
    );
    const setOpen = /* @__PURE__ */ __name((nextOpen) => {
      wrap.dataset.open = String(nextOpen);
      toggle.setAttribute("aria-expanded", String(nextOpen));
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    toggle.addEventListener("click", () => {
      setOpen(wrap.dataset.open !== "true");
    });
    body.addEventListener("click", () => {
      if (wrap.dataset.open === "true") setOpen(false);
    });
    wrap.appendChild(toggle);
    wrap.appendChild(body);
    return wrap;
  }
  __name(renderPluginHeaderHelper, "renderPluginHeaderHelper");
  function pluginHeaderFromConfig(conf, { version, helper, helperOpen, helperDefaultOpen, onHelperToggle, killSwitch, feedback, scope } = {}) {
    const resolvedHelper = helper ?? conf.instructions;
    return pluginHeader({
      title: conf.name || "",
      lede: conf.description,
      helper: resolvedHelper,
      helperOpen,
      helperDefaultOpen,
      onHelperToggle,
      icon: conf.icon,
      version: version ?? conf.version,
      author: conf.author,
      homepage: conf.homepage,
      repository: conf.repository,
      coffee: conf.coffee,
      killSwitch,
      feedback,
      scope
    });
  }
  __name(pluginHeaderFromConfig, "pluginHeaderFromConfig");
  var SECTION_STATE = (() => {
    const g = (
      /** @type {Record<string, any>} */
      /** @type {unknown} */
      globalThis
    );
    if (!g.__tpsSectionState) g.__tpsSectionState = /* @__PURE__ */ new Map();
    return (
      /** @type {Map<string, boolean>} */
      g.__tpsSectionState
    );
  })();
  function sectionStateKey(el2, key) {
    const scope = (
      /** @type {HTMLElement} */
      el2.dataset.sectionScope || ""
    );
    return scope + "::" + key;
  }
  __name(sectionStateKey, "sectionStateKey");
  function restoreSectionState(root, scope) {
    const nodes = root.querySelectorAll(".tps-section--collapsible[data-section-key]");
    for (const node of nodes) {
      const el2 = (
        /** @type {HTMLElement} */
        node
      );
      el2.dataset.sectionScope = scope;
      const key = el2.dataset.sectionKey || "";
      const remembered = SECTION_STATE.get(sectionStateKey(el2, key));
      if (remembered === void 0) continue;
      const apply = (
        /** @type {any} */
        el2._tpsSetOpen
      );
      if (typeof apply === "function") apply(remembered, true);
    }
  }
  __name(restoreSectionState, "restoreSectionState");

  // ../../shared/settings-ui/theme-vars.js
  var DEFAULT_THEME_SOURCES = [
    ":root",
    "body",
    ".sidebar--icons",
    ".sidebar"
  ];
  var COLOR_NAME_HINT = /(^|-)(accent|primary|secondary|text|muted|subtle|border|bg|background|hover|active|input|enum|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|foreground|surface|card|panel|danger|warning|success)($|-)/;
  var CURRENT_THEME_VARS = Object.freeze([
    // Accent
    { name: "--logo-color", label: "Accent" },
    // Text
    { name: "--text-default", label: "Text" },
    { name: "--text-muted", label: "Muted text" },
    { name: "--text-subtle", label: "Subtle text" },
    { name: "--text-hilite", label: "Highlight text" },
    { name: "--text-brighter", label: "Brighter text" },
    { name: "--text-disabled", label: "Disabled text" },
    { name: "--text-status-offline", label: "Offline text" },
    { name: "--text-warning", label: "Warning text" },
    { name: "--cmdpal-hilite-color", label: "Command palette highlight" },
    { name: "--color-text-900", label: "Legacy text" },
    // Tag / pill
    { name: "--tag-fg-color", label: "Tag" },
    // Surfaces
    { name: "--panel-bg-color", label: "Panel background" },
    { name: "--input-bg-color", label: "Input background" },
    { name: "--hover-subtle", label: "Hover background" },
    { name: "--sidebar-bg-hover", label: "Sidebar hover" },
    { name: "--active-bg-color", label: "Active background" },
    // Borders / dividers
    { name: "--divider-color", label: "Divider" },
    { name: "--thin-divider-color", label: "Thin divider" },
    { name: "--faint-divider-color", label: "Faint divider" },
    { name: "--input-border-color", label: "Input border" },
    { name: "--sidebar-divider-color", label: "Sidebar divider" },
    { name: "--titlebar-border-color", label: "Titlebar border" },
    { name: "--selection-border", label: "Selection border" },
    // Enum/tag palette (Thymer ships 16 hues — no amber, lime, or violet)
    { name: "--enum-red-fg", label: "Red" },
    { name: "--enum-orange-fg", label: "Orange" },
    { name: "--enum-yellow-fg", label: "Yellow" },
    { name: "--enum-green-fg", label: "Green" },
    { name: "--enum-teal-fg", label: "Teal" },
    { name: "--enum-cyan-fg", label: "Cyan" },
    { name: "--enum-sky-fg", label: "Sky" },
    { name: "--enum-blue-fg", label: "Blue" },
    { name: "--enum-indigo-fg", label: "Indigo" },
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
      const el2 = elementOrNull(node);
      if (!el2 || seen.has(el2)) return;
      seen.add(el2);
      roots.push(el2);
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
    const names = ["--logo-color"];
    for (const name of names) {
      const found = colors.find((item) => item.source === name && item.resolved);
      if (found) return found;
    }
    return colors.find((item) => /logo|accent|primary/i.test(item.source) && item.resolved) || null;
  }
  __name(chooseThemeAccent, "chooseThemeAccent");

  // ../../shared/settings-ui/tailwind-palette.js
  var TW_SHADES = Object.freeze([50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]);
  var TW_MID_INDEX = 5;
  function mirrorShadeIdx(idx) {
    const n = TW_SHADES.length;
    const i = Math.max(0, Math.min(n - 1, Number(idx) || 0));
    return n - 1 - i;
  }
  __name(mirrorShadeIdx, "mirrorShadeIdx");
  var TAILWIND = Object.freeze({
    slate: ["#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8", "#64748b", "#475569", "#334155", "#1e293b", "#0f172a", "#020617"],
    gray: ["#f9fafb", "#f3f4f6", "#e5e7eb", "#d1d5db", "#9ca3af", "#6b7280", "#4b5563", "#374151", "#1f2937", "#111827", "#030712"],
    zinc: ["#fafafa", "#f4f4f5", "#e4e4e7", "#d4d4d8", "#a1a1aa", "#71717a", "#52525b", "#3f3f46", "#27272a", "#18181b", "#09090b"],
    neutral: ["#fafafa", "#f5f5f5", "#e5e5e5", "#d4d4d4", "#a3a3a3", "#737373", "#525252", "#404040", "#262626", "#171717", "#0a0a0a"],
    stone: ["#fafaf9", "#f5f5f4", "#e7e5e4", "#d6d3d1", "#a8a29e", "#78716c", "#57534e", "#44403c", "#292524", "#1c1917", "#0c0a09"],
    red: ["#fef2f2", "#fee2e2", "#fecaca", "#fca5a5", "#f87171", "#ef4444", "#dc2626", "#b91c1c", "#991b1b", "#7f1d1d", "#450a0a"],
    orange: ["#fff7ed", "#ffedd5", "#fed7aa", "#fdba74", "#fb923c", "#f97316", "#ea580c", "#c2410c", "#9a3412", "#7c2d12", "#431407"],
    amber: ["#fffbeb", "#fef3c7", "#fde68a", "#fcd34d", "#fbbf24", "#f59e0b", "#d97706", "#b45309", "#92400e", "#78350f", "#451a03"],
    yellow: ["#fefce8", "#fef9c3", "#fef08a", "#fde047", "#facc15", "#eab308", "#ca8a04", "#a16207", "#854d0e", "#713f12", "#422006"],
    lime: ["#f7fee7", "#ecfccb", "#d9f99d", "#bef264", "#a3e635", "#84cc16", "#65a30d", "#4d7c0f", "#3f6212", "#365314", "#1a2e05"],
    green: ["#f0fdf4", "#dcfce7", "#bbf7d0", "#86efac", "#4ade80", "#22c55e", "#16a34a", "#15803d", "#166534", "#14532d", "#052e16"],
    emerald: ["#ecfdf5", "#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981", "#059669", "#047857", "#065f46", "#064e3b", "#022c22"],
    teal: ["#f0fdfa", "#ccfbf1", "#99f6e4", "#5eead4", "#2dd4bf", "#14b8a6", "#0d9488", "#0f766e", "#115e59", "#134e4a", "#042f2e"],
    cyan: ["#ecfeff", "#cffafe", "#a5f3fc", "#67e8f9", "#22d3ee", "#06b6d4", "#0891b2", "#0e7490", "#155e75", "#164e63", "#083344"],
    sky: ["#f0f9ff", "#e0f2fe", "#bae6fd", "#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7", "#0369a1", "#075985", "#0c4a6e", "#082f49"],
    blue: ["#eff6ff", "#dbeafe", "#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6", "#2563eb", "#1d4ed8", "#1e40af", "#1e3a8a", "#172554"],
    indigo: ["#eef2ff", "#e0e7ff", "#c7d2fe", "#a5b4fc", "#818cf8", "#6366f1", "#4f46e5", "#4338ca", "#3730a3", "#312e81", "#1e1b4b"],
    violet: ["#f5f3ff", "#ede9fe", "#ddd6fe", "#c4b5fd", "#a78bfa", "#8b5cf6", "#7c3aed", "#6d28d9", "#5b21b6", "#4c1d95", "#2e1065"],
    purple: ["#faf5ff", "#f3e8ff", "#e9d5ff", "#d8b4fe", "#c084fc", "#a855f7", "#9333ea", "#7e22ce", "#6b21a8", "#581c87", "#3b0764"],
    fuchsia: ["#fdf4ff", "#fae8ff", "#f5d0fe", "#f0abfc", "#e879f9", "#d946ef", "#c026d3", "#a21caf", "#86198f", "#701a75", "#4a044e"],
    pink: ["#fdf2f8", "#fce7f3", "#fbcfe8", "#f9a8d4", "#f472b6", "#ec4899", "#db2777", "#be185d", "#9d174d", "#831843", "#500724"],
    rose: ["#fff1f2", "#ffe4e6", "#fecdd3", "#fda4af", "#fb7185", "#f43f5e", "#e11d48", "#be123c", "#9f1239", "#881337", "#4c0519"]
  });
  var TW_FAMILIES = Object.freeze(Object.keys(TAILWIND));
  function isHex(s) {
    return typeof s === "string" && /^#[0-9a-f]{6}$/i.test(s);
  }
  __name(isHex, "isHex");
  function hexToRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [n >> 16 & 255, n >> 8 & 255, n & 255];
  }
  __name(hexToRgb, "hexToRgb");
  function exactTailwind(hex) {
    if (!isHex(hex)) return null;
    const needle = hex.toLowerCase();
    for (const family of TW_FAMILIES) {
      const i = TAILWIND[family].indexOf(needle);
      if (i >= 0) return { family, shadeIdx: i };
    }
    return null;
  }
  __name(exactTailwind, "exactTailwind");
  function nearestTailwind(hex) {
    if (!isHex(hex)) return null;
    const [r, g, b] = hexToRgb(hex);
    let best = null;
    let bestD = Infinity;
    for (const family of TW_FAMILIES) {
      const shades = TAILWIND[family];
      for (let i = 0; i < shades.length; i += 1) {
        const [cr, cg, cb] = hexToRgb(shades[i]);
        const d = (r - cr) ** 2 + (g - cg) ** 2 + (b - cb) ** 2;
        if (d < bestD) {
          bestD = d;
          best = { family, shadeIdx: i, hex: shades[i] };
        }
      }
    }
    return best;
  }
  __name(nearestTailwind, "nearestTailwind");

  // ../../shared/settings-ui/theme-swatches.js
  var THEME_GROUPS = (
    /** @type {ThemeGroupDef[]} */
    Object.freeze([
      {
        key: "hues",
        label: "Theme colors",
        tokens: [
          { token: "--enum-red-fg", label: "Red" },
          { token: "--enum-orange-fg", label: "Orange" },
          { token: "--enum-yellow-fg", label: "Yellow" },
          { token: "--enum-green-fg", label: "Green" },
          { token: "--enum-teal-fg", label: "Teal" },
          { token: "--enum-cyan-fg", label: "Cyan" },
          { token: "--enum-sky-fg", label: "Sky" },
          { token: "--enum-blue-fg", label: "Blue" },
          { token: "--enum-indigo-fg", label: "Indigo" },
          { token: "--enum-purple-fg", label: "Purple" },
          { token: "--enum-fuchsia-fg", label: "Fuchsia" },
          { token: "--enum-pink-fg", label: "Pink" },
          { token: "--enum-rose-fg", label: "Rose" },
          { token: "--tag-fg-color", label: "Tag" },
          { token: "--text-warning", label: "Warning" }
        ]
      },
      {
        key: "text",
        label: "Text & neutrals",
        tokens: [
          { token: "--text-default", label: "Text" },
          { token: "--text-muted", label: "Muted text" },
          { token: "--text-subtle", label: "Subtle text" },
          { token: "--text-hilite", label: "Highlight text" },
          { token: "--text-brighter", label: "Brighter text" },
          { token: "--text-disabled", label: "Disabled text" },
          { token: "--enum-stone-fg", label: "Stone" },
          { token: "--enum-zinc-fg", label: "Zinc" }
        ]
      },
      {
        key: "surfaces",
        label: "Surfaces & lines",
        marginal: true,
        tokens: [
          { token: "--panel-bg-color", label: "Panel background" },
          { token: "--input-bg-color", label: "Input background" },
          { token: "--hover-subtle", label: "Hover background" },
          { token: "--active-bg-color", label: "Active background" },
          { token: "--divider-color", label: "Divider" },
          { token: "--thin-divider-color", label: "Thin divider" },
          { token: "--faint-divider-color", label: "Faint divider" },
          { token: "--input-border-color", label: "Input border" },
          { token: "--titlebar-border-color", label: "Titlebar border" },
          { token: "--selection-border", label: "Selection border" }
        ]
      }
    ])
  );
  function resolveThemeToken(token, roots) {
    const rs = roots || themeVariableRoots();
    for (const root of rs) {
      const raw = getComputedStyle(root).getPropertyValue(token).trim();
      if (!raw) continue;
      const resolved = resolveRenderedColor(`var(${token})`, root);
      if (resolved) return resolved;
    }
    return "";
  }
  __name(resolveThemeToken, "resolveThemeToken");
  function resolveThemeGroups({ exclude = [] } = {}) {
    const roots = themeVariableRoots();
    const excludeSet = new Set(exclude);
    const groups = [];
    for (const def of THEME_GROUPS) {
      const swatches = [];
      const seen = /* @__PURE__ */ new Set();
      for (const { token, label } of def.tokens) {
        if (excludeSet.has(token)) continue;
        const color = resolveThemeToken(token, roots);
        if (!color || seen.has(color)) continue;
        seen.add(color);
        swatches.push({ token, label, color });
      }
      if (swatches.length) {
        groups.push({ key: def.key, label: def.label, hint: def.hint, marginal: def.marginal, swatches });
      }
    }
    return groups;
  }
  __name(resolveThemeGroups, "resolveThemeGroups");

  // ../../shared/settings-ui/tooltip.js
  var TIP_SELECTOR = "[data-tps-tip],[data-cf-tip]";
  var STYLE_ID = "tps-tip-css";
  var WIN_FLAG = "__tpsInstantTooltip";
  function installInstantTooltip() {
    if (typeof document === "undefined") return;
    if (typeof window !== "undefined" && /** @type {any} */
    window[WIN_FLAG]) return;
    if (typeof window !== "undefined") window[WIN_FLAG] = true;
    injectTooltipCss();
    const tip = document.createElement("div");
    tip.className = "tps-tip";
    tip.setAttribute("aria-hidden", "true");
    (document.body || document.documentElement).appendChild(tip);
    const hide = /* @__PURE__ */ __name(() => tip.classList.remove("is-visible"), "hide");
    const label = /* @__PURE__ */ __name((el2) => el2.getAttribute("data-tps-tip") || el2.getAttribute("data-cf-tip") || "", "label");
    document.addEventListener("mouseover", (e) => {
      const t = e.target instanceof Element ? e.target.closest(TIP_SELECTOR) : null;
      if (!t) {
        hide();
        return;
      }
      const text = label(t);
      if (!text) {
        hide();
        return;
      }
      tip.textContent = text;
      const r = t.getBoundingClientRect();
      tip.style.left = `${r.left + r.width / 2}px`;
      tip.style.top = `${r.top}px`;
      tip.classList.add("is-visible");
    }, true);
    document.addEventListener("mouseout", (e) => {
      const t = e.target instanceof Element ? e.target.closest(TIP_SELECTOR) : null;
      const to = e.relatedTarget instanceof Element ? e.relatedTarget : null;
      if (t && (!to || !t.contains(to))) hide();
    }, true);
    window.addEventListener("scroll", hide, true);
    window.addEventListener("blur", hide);
  }
  __name(installInstantTooltip, "installInstantTooltip");
  function injectTooltipCss() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = [
      ".tps-tip{position:fixed;z-index:2147483000;transform:translate(-50%,calc(-100% - 8px));",
      "padding:3px 8px;border-radius:var(--tps-radius-sm,5px);background:var(--tps-text,#1a1a1a);",
      "color:var(--tps-panel-bg,#fff);font-size:11px;font-weight:500;line-height:1.3;white-space:nowrap;",
      "pointer-events:none;opacity:0;box-shadow:0 2px 8px rgba(0,0,0,.35)}",
      ".tps-tip.is-visible{opacity:1}"
    ].join("");
    (document.head || document.documentElement).appendChild(style);
  }
  __name(injectTooltipCss, "injectTooltipCss");

  // ../../shared/settings-ui/color-field.js
  var MAX_CUSTOM = 44;
  function colorField({ value = null, onPick, featured = [], allowNone = true, customSwatches = [], onCustomSwatchesChange } = {}) {
    const emit = /* @__PURE__ */ __name((r) => {
      if (typeof onPick === "function") onPick(r);
    }, "emit");
    let curFamily = "blue";
    let curShade = TW_MID_INDEX;
    let invertLightness = false;
    let mode = "theme";
    let customList = Array.isArray(customSwatches) ? customSwatches.filter(isHex).map((s) => s.toLowerCase()).slice(0, MAX_CUSTOM) : [];
    let selection = null;
    if (value && value.type === "tw" && value.family && TAILWIND[value.family]) {
      const idx = Math.max(0, Math.min(TW_SHADES.length - 1, Number(value.shadeIdx) || 0));
      curFamily = value.family;
      curShade = idx;
      invertLightness = !!value.invert;
      selection = { kind: "hex", hex: TAILWIND[value.family][idx] };
      mode = "tailwind";
    } else {
      selection = normalizeValue2(value);
      if (selection && selection.kind === "hex") {
        const ex = exactTailwind(selection.hex);
        if (ex) {
          curFamily = ex.family;
          curShade = ex.shadeIdx;
          mode = "tailwind";
        } else {
          const near = nearestTailwind(selection.hex);
          if (near) {
            curFamily = near.family;
            curShade = near.shadeIdx;
          }
          mode = "custom";
        }
      }
    }
    const root = h("div", { class: "tps-color-field" });
    const tabs = { theme: tabBtn("theme", "Theme"), tailwind: tabBtn("tailwind", "Tailwind"), custom: tabBtn("custom", "Custom") };
    root.appendChild(h("div", { class: "tps-cf-tabs" }, tabs.theme, tabs.tailwind, tabs.custom));
    function tabBtn(m, label) {
      const b = h("button", { type: "button", class: "tps-cf-tab", dataset: { mode: m } }, label);
      b.addEventListener("click", () => setMode(m));
      return b;
    }
    __name(tabBtn, "tabBtn");
    const paneTheme = h("div", { class: "tps-cf-pane", dataset: { pane: "theme" } });
    const featuredTokens = featured.map((f) => f.token);
    if (featured.length) {
      const featRow = h("div", { class: "tps-cf-featured" });
      for (const f of featured) {
        const color = resolveThemeToken(f.token);
        if (!color) continue;
        featRow.appendChild(themeTile(f.label, f.token, color));
      }
      if (featRow.children.length) paneTheme.appendChild(featRow);
    }
    for (const g of resolveThemeGroups({ exclude: featuredTokens })) {
      paneTheme.appendChild(h(
        "div",
        { class: "tps-cf-group" },
        h(
          "div",
          { class: "tps-cf-group-head" },
          h("span", { class: "tps-cf-group-label" }, g.label),
          g.hint ? h("span", { class: "tps-cf-group-hint" }, g.hint) : null
        ),
        h("div", { class: "tps-cf-dots" }, ...g.swatches.map((s) => themeDot(s.label, s.token, s.color)))
      ));
    }
    root.appendChild(paneTheme);
    const paneTw = h("div", { class: "tps-cf-pane", dataset: { pane: "tailwind" } });
    const hueCells = {};
    const hueRow = h("div", { class: "tps-cf-dots" });
    for (const fam of TW_FAMILIES) {
      const dot = h("button", {
        type: "button",
        class: "tps-cf-swatch tps-cf-dot tps-cf-hue-dot",
        dataset: { cfTip: fam },
        "aria-label": fam,
        style: { background: TAILWIND[fam][TW_MID_INDEX] }
      });
      dot.addEventListener("click", () => {
        curFamily = fam;
        buildLightRamp();
        pickTailwind(fam, curShade);
      });
      hueCells[fam] = dot;
      hueRow.appendChild(dot);
    }
    const lightRamp = h("div", { class: "tps-cf-ramp" });
    const invertCheckbox = h("input", { type: "checkbox", class: "tps-cf-invert-cb" });
    invertCheckbox.checked = invertLightness;
    const invertRow = h(
      "label",
      { class: "tps-cf-invert" },
      invertCheckbox,
      h("span", null, "Invert lightness in light/dark"),
      h("span", { class: "tps-cf-invert-hint" }, "e.g. 900 in light \u2192 100 in dark")
    );
    invertCheckbox.addEventListener("change", () => {
      invertLightness = invertCheckbox.checked;
      renderSelection();
      if (selection && selection.kind === "hex") {
        const ex = exactTailwind(selection.hex);
        if (ex) emit({ type: "tw", family: ex.family, shadeIdx: ex.shadeIdx, invert: invertLightness, hex: selection.hex });
      }
    });
    paneTw.appendChild(labeledGroup("Hue", hueRow));
    paneTw.appendChild(labeledGroup("Lightness", lightRamp));
    paneTw.appendChild(invertRow);
    root.appendChild(paneTw);
    function buildLightRamp() {
      lightRamp.textContent = "";
      TW_SHADES.forEach((s, si) => {
        const hex = TAILWIND[curFamily][si];
        const cell = h("button", {
          type: "button",
          class: "tps-cf-ramp-cell",
          dataset: { si: String(si), cfTip: `${curFamily}-${s} \xB7 ${hex}` },
          "aria-label": `${curFamily} ${s}`,
          style: { background: hex, color: textOn(hex) }
        }, String(s));
        cell.addEventListener("click", () => {
          curShade = si;
          pickTailwind(curFamily, si);
        });
        lightRamp.appendChild(cell);
      });
    }
    __name(buildLightRamp, "buildLightRamp");
    function pickTailwind(family, shadeIdx) {
      curFamily = family;
      curShade = shadeIdx;
      const hex = TAILWIND[family][shadeIdx];
      selection = { kind: "hex", hex };
      renderSelection();
      emit({ type: "tw", family, shadeIdx, invert: invertLightness, hex });
    }
    __name(pickTailwind, "pickTailwind");
    const paneCustom = h("div", { class: "tps-cf-pane", dataset: { pane: "custom" } });
    const customRow = h("div", { class: "tps-cf-dots tps-cf-custom-row" });
    const hexDot = h("span", { class: "tps-cf-hex-dot" });
    const hexInput = h("input", { type: "text", class: "tps-cf-hex-input", placeholder: "#hex", maxLength: 7, spellcheck: false, "aria-label": "Custom hex color" });
    const addBtn = h("button", { type: "button", class: "tps-cf-add" }, "Add");
    const removeBtn = h("button", { type: "button", class: "tps-cf-remove" }, "Remove");
    removeBtn.hidden = true;
    const countEl = h("span", { class: "tps-cf-custom-count" });
    paneCustom.appendChild(customRow);
    paneCustom.appendChild(h(
      "div",
      { class: "tps-cf-addrow" },
      h("span", { class: "tps-cf-hexbox" }, hexDot, hexInput),
      addBtn,
      removeBtn,
      countEl
    ));
    root.appendChild(paneCustom);
    removeBtn.addEventListener("click", () => {
      if (!selection || selection.kind !== "hex") return;
      const idx = customList.indexOf(selection.hex);
      if (idx >= 0) removeCustom(idx);
    });
    let dragIdx = -1;
    function renderCustomRow() {
      customRow.textContent = "";
      if (!customList.length) {
        customRow.appendChild(h("span", { class: "tps-cf-custom-empty" }, "No saved colors yet \u2014 add a hex, then select one and press Remove to delete it."));
      }
      customList.forEach((hex, i) => {
        const dot = h("button", {
          type: "button",
          class: "tps-cf-swatch tps-cf-dot tps-cf-custom-dot",
          draggable: "true",
          dataset: { hex, idx: String(i), cfTip: hex.toUpperCase() },
          "aria-label": hex,
          style: { background: hex }
        });
        dot.addEventListener("click", () => pickHex(hex));
        dot.addEventListener("dragstart", () => {
          dragIdx = i;
          dot.classList.add("is-dragging");
        });
        dot.addEventListener("dragend", () => dot.classList.remove("is-dragging"));
        dot.addEventListener("dragover", (e) => e.preventDefault());
        dot.addEventListener("drop", (e) => {
          e.preventDefault();
          if (dragIdx >= 0 && dragIdx !== i) reorderCustom(dragIdx, i);
          dragIdx = -1;
        });
        customRow.appendChild(dot);
      });
      countEl.textContent = `${customList.length}/${MAX_CUSTOM}`;
      renderSelection();
    }
    __name(renderCustomRow, "renderCustomRow");
    const commitCustom = /* @__PURE__ */ __name(() => {
      if (typeof onCustomSwatchesChange === "function") onCustomSwatchesChange(customList.slice());
    }, "commitCustom");
    function addCustom() {
      const hex = normHex(hexInput.value);
      if (!hex) return;
      if (!customList.includes(hex) && customList.length < MAX_CUSTOM) {
        customList = [...customList, hex];
        commitCustom();
        renderCustomRow();
      }
      hexInput.value = "";
      hexDot.style.background = "";
      pickHex(hex);
    }
    __name(addCustom, "addCustom");
    function removeCustom(i) {
      customList = customList.filter((_, j) => j !== i);
      commitCustom();
      renderCustomRow();
    }
    __name(removeCustom, "removeCustom");
    function reorderCustom(from, to) {
      const arr = customList.slice();
      const [m] = arr.splice(from, 1);
      arr.splice(to, 0, m);
      customList = arr;
      commitCustom();
      renderCustomRow();
    }
    __name(reorderCustom, "reorderCustom");
    addBtn.addEventListener("click", addCustom);
    hexInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addCustom();
      }
    });
    hexInput.addEventListener("input", () => {
      const hadHash = hexInput.value.trimStart().startsWith("#");
      const digits = hexInput.value.replace(/[^0-9a-fA-F]/g, "").slice(0, 6);
      const cleaned = (hadHash ? "#" : "") + digits;
      if (cleaned !== hexInput.value) hexInput.value = cleaned;
      const hex = normHex(hexInput.value);
      hexDot.style.background = hex || "";
      if (hex) {
        selection = { kind: "hex", hex };
        renderSelection();
        emit({ type: "hex", hex });
      }
    });
    let noneRef = null;
    if (allowNone) {
      const noneBtn = h("button", { type: "button", class: "tps-cf-none" }, h("span", { class: "tps-cf-none-sw" }), "No color");
      noneBtn.addEventListener("click", () => {
        selection = { kind: "none" };
        renderAll();
        emit(null);
      });
      root.appendChild(h("div", { class: "tps-cf-divider" }));
      root.appendChild(h("div", { class: "tps-cf-universal" }, noneBtn));
      noneRef = noneBtn;
    }
    function pickHex(hex) {
      selection = { kind: "hex", hex };
      renderSelection();
      emit({ type: "hex", hex });
    }
    __name(pickHex, "pickHex");
    function renderSelection() {
      root.querySelectorAll(".is-sel, .is-sel-mirror").forEach((e) => e.classList.remove("is-sel", "is-sel-mirror"));
      Object.values(hueCells).forEach((c) => c.classList.remove("is-active"));
      if (hueCells[curFamily]) hueCells[curFamily].classList.add("is-active");
      removeBtn.hidden = !(selection && selection.kind === "hex" && customList.includes(selection.hex));
      let twShadeSelected = false;
      if (selection) {
        if (selection.kind === "theme") {
          const el2 = root.querySelector(`.tps-cf-swatch[data-token="${cssEscape(selection.token)}"]`);
          if (el2) el2.classList.add("is-sel");
        } else if (selection.kind === "hex") {
          const selHex = selection.hex;
          const rc = lightRamp.querySelector(`.tps-cf-ramp-cell[data-si="${curShade}"]`);
          if (rc && TAILWIND[curFamily][curShade] === selHex) {
            rc.classList.add("is-sel");
            twShadeSelected = true;
          }
          customRow.querySelectorAll(".tps-cf-custom-dot").forEach((d) => {
            if (d.dataset.hex === selHex) d.classList.add("is-sel");
          });
        } else if (selection.kind === "none") {
          if (noneRef) noneRef.classList.add("is-sel");
        }
      }
      const canInvert = twShadeSelected && curShade !== TW_MID_INDEX;
      invertCheckbox.disabled = !canInvert;
      invertRow.classList.toggle("is-disabled", !canInvert);
      if (canInvert && invertLightness) {
        const mc = lightRamp.querySelector(`.tps-cf-ramp-cell[data-si="${mirrorShadeIdx(curShade)}"]`);
        if (mc) mc.classList.add("is-sel-mirror");
      }
    }
    __name(renderSelection, "renderSelection");
    function setMode(m) {
      mode = m;
      for (const k in tabs) tabs[k].classList.toggle("is-active", k === m);
      paneTheme.classList.toggle("is-active", m === "theme");
      paneTw.classList.toggle("is-active", m === "tailwind");
      paneCustom.classList.toggle("is-active", m === "custom");
    }
    __name(setMode, "setMode");
    function renderAll() {
      setMode(mode);
      renderSelection();
    }
    __name(renderAll, "renderAll");
    function themeTile(label, token, color) {
      const tile = h(
        "button",
        { type: "button", class: "tps-cf-swatch tps-cf-tile", dataset: { token }, "aria-label": label },
        h("span", { class: "tps-cf-tile-dot", style: { background: color } }),
        h("span", { class: "tps-cf-tile-label" }, label)
      );
      tile.addEventListener("click", () => selectTheme(token));
      return tile;
    }
    __name(themeTile, "themeTile");
    function themeDot(label, token, color) {
      const dot = h("button", { type: "button", class: "tps-cf-swatch tps-cf-dot", dataset: { token, cfTip: label }, "aria-label": label, style: { background: color } });
      dot.addEventListener("click", () => selectTheme(token));
      return dot;
    }
    __name(themeDot, "themeDot");
    function selectTheme(token) {
      selection = { kind: "theme", token };
      renderSelection();
      const rendered = resolveThemeToken(token);
      emit({ type: "theme", token, hex: renderedToHex(rendered) || rendered });
    }
    __name(selectTheme, "selectTheme");
    function labeledGroup(label, body) {
      return h("div", { class: "tps-cf-group" }, h("div", { class: "tps-cf-group-head" }, h("span", { class: "tps-cf-group-label" }, label)), body);
    }
    __name(labeledGroup, "labeledGroup");
    installInstantTooltip();
    buildLightRamp();
    renderCustomRow();
    if (selection && selection.kind === "hex" && mode === "custom" && !customList.includes(selection.hex)) {
      hexInput.value = selection.hex;
      hexDot.style.background = selection.hex;
    }
    renderAll();
    return root;
  }
  __name(colorField, "colorField");
  function normalizeValue2(value) {
    if (!value) return null;
    if (value.type === "hex" && isHex(value.hex)) return { kind: "hex", hex: value.hex.toLowerCase() };
    if (value.type === "theme" && value.token) return { kind: "theme", token: value.token };
    return null;
  }
  __name(normalizeValue2, "normalizeValue");
  function cssEscape(s) {
    return String(s).replace(/"/g, '\\"');
  }
  __name(cssEscape, "cssEscape");
  function normHex(input) {
    if (typeof input !== "string") return null;
    let s = input.trim().toLowerCase();
    if (!s) return null;
    if (!s.startsWith("#")) s = `#${s}`;
    if (/^#[0-9a-f]{3}$/.test(s)) s = `#${s.slice(1).split("").map((c) => c + c).join("")}`;
    return /^#[0-9a-f]{6}$/.test(s) ? s : null;
  }
  __name(normHex, "normHex");
  function textOn(hex) {
    const n = parseInt(hex.slice(1), 16);
    const r = n >> 16 & 255, g = n >> 8 & 255, b = n & 255;
    const l = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return l > 0.6 ? "rgba(0,0,0,0.72)" : "rgba(255,255,255,0.92)";
  }
  __name(textOn, "textOn");
  function renderedToHex(str) {
    if (!str) return "";
    if (/^#[0-9a-f]{6}$/i.test(str)) return str.toLowerCase();
    const m = str.match(/rgba?\(([^)]+)\)/i);
    if (!m) return "";
    const parts = m[1].split(",").map((s) => parseFloat(s.trim()));
    if (parts.length < 3 || parts.some((n) => Number.isNaN(n))) return "";
    const t = /* @__PURE__ */ __name((n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0"), "t");
    return `#${t(parts[0])}${t(parts[1])}${t(parts[2])}`;
  }
  __name(renderedToHex, "renderedToHex");

  // ../../shared/plugin-version.js
  var CONFIG_WRITE_QUEUES_KEY = "__tpsPluginConfigWriteQueues";
  function configWriteIdentity(plugin) {
    let workspace = "default";
    try {
      workspace = plugin.getWorkspaceGuid?.() || "default";
    } catch {
    }
    let guid = "";
    try {
      guid = plugin.getGuid?.() || plugin.collection?.getGuid?.() || "";
    } catch {
    }
    let name = "plugin";
    try {
      name = plugin.getConfiguration?.()?.name || "plugin";
    } catch {
    }
    return `${workspace}/${guid || name}`;
  }
  __name(configWriteIdentity, "configWriteIdentity");
  function queuePluginConfigWrite(plugin, task) {
    let queues;
    try {
      const root = (
        /** @type {any} */
        globalThis
      );
      if (!(root[CONFIG_WRITE_QUEUES_KEY] instanceof Map)) root[CONFIG_WRITE_QUEUES_KEY] = /* @__PURE__ */ new Map();
      queues = root[CONFIG_WRITE_QUEUES_KEY];
    } catch {
      return Promise.resolve().then(task);
    }
    const key = configWriteIdentity(plugin);
    const prior = queues.get(key) || Promise.resolve();
    const result = prior.then(task, task);
    const tail = result.then(() => void 0, () => void 0);
    queues.set(key, tail);
    void tail.then(() => {
      if (queues.get(key) === tail) queues.delete(key);
    });
    return result;
  }
  __name(queuePluginConfigWrite, "queuePluginConfigWrite");
  function readPluginVersion(conf, fallback = "0.0.1") {
    if (!conf || typeof conf !== "object") return fallback;
    if (typeof conf.version === "string" && conf.version) return conf.version;
    const custom = (
      /** @type {Record<string, unknown> | undefined} */
      conf.custom
    );
    if (custom && typeof custom === "object" && typeof custom.pluginVersion === "string" && custom.pluginVersion) {
      return custom.pluginVersion;
    }
    return fallback;
  }
  __name(readPluginVersion, "readPluginVersion");
  function configWithPluginVersion(conf, customPatch, pluginVersion) {
    const base = conf && typeof conf === "object" ? conf : {};
    const custom = base.custom && typeof base.custom === "object" ? base.custom : {};
    return {
      ...base,
      version: pluginVersion,
      custom: {
        ...custom,
        ...customPatch,
        pluginVersion
      }
    };
  }
  __name(configWithPluginVersion, "configWithPluginVersion");
  async function resolveConfigApi(plugin) {
    if (!plugin) return null;
    if (typeof plugin.saveConfiguration === "function") return plugin;
    try {
      const data = plugin.data;
      const guid = typeof plugin.getGuid === "function" && plugin.getGuid() || plugin.collection && typeof plugin.collection.getGuid === "function" && plugin.collection.getGuid() || null;
      if (guid && data && typeof data.getPluginByGuid === "function") {
        const byGuid = data.getPluginByGuid(guid);
        if (byGuid && typeof byGuid.saveConfiguration === "function") return byGuid;
      }
      if (guid && data && typeof data.getAllCollections === "function") {
        const all = await data.getAllCollections();
        const found = (all || []).find((c) => c && typeof c.getGuid === "function" && c.getGuid() === guid);
        if (found && typeof found.saveConfiguration === "function") return found;
      }
      if (data && typeof data.getAllGlobalPlugins === "function") {
        const all = await data.getAllGlobalPlugins();
        const name = plugin.getConfiguration?.()?.name;
        const found = all.find((p) => p && typeof p.getGuid === "function" && p.getGuid() === guid) || (name ? all.find((p) => p && typeof p.getName === "function" && p.getName() === name) : null);
        if (found && typeof found.saveConfiguration === "function") return found;
      }
    } catch {
    }
    return null;
  }
  __name(resolveConfigApi, "resolveConfigApi");
  async function syncPluginVersionOnLoad(plugin, pluginVersion, customPatch = {}) {
    return queuePluginConfigWrite(plugin, () => syncPluginVersionOnLoadNow(plugin, pluginVersion, customPatch));
  }
  __name(syncPluginVersionOnLoad, "syncPluginVersionOnLoad");
  async function syncPluginVersionOnLoadNow(plugin, pluginVersion, customPatch = {}) {
    const api = await resolveConfigApi(plugin);
    if (!api) return;
    let conf = {};
    try {
      conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
    } catch {
      return;
    }
    if (typeof conf.name !== "string" || !conf.name.trim()) return;
    const custom = conf.custom && typeof conf.custom === "object" ? { .../** @type {Record<string, unknown>} */
    conf.custom, ...customPatch } : { ...customPatch };
    if (readPluginVersion(conf, "") === pluginVersion) return;
    try {
      let ws = "default";
      try {
        ws = plugin.getWorkspaceGuid?.() || "default";
      } catch {
      }
      const guardKey = `tps-version-synced/${ws}/${conf.name}`;
      if (sessionStorage.getItem(guardKey) === pluginVersion) return;
      sessionStorage.setItem(guardKey, pluginVersion);
    } catch {
    }
    try {
      await api.saveConfiguration(configWithPluginVersion(conf, custom, pluginVersion));
    } catch {
    }
  }
  __name(syncPluginVersionOnLoadNow, "syncPluginVersionOnLoadNow");

  // ../../shared/plugin-kill-switch.js
  var MARKER_SYNC_HORIZON_MS = 9e4;
  function isPluginDisabled(conf) {
    if (!conf || typeof conf !== "object") return false;
    const custom = conf.custom;
    return !!(custom && typeof custom === "object" && /** @type {Record<string, unknown>} */
    custom.pluginDisabled === true);
  }
  __name(isPluginDisabled, "isPluginDisabled");
  function markerKey(plugin) {
    let ws = "default";
    try {
      ws = plugin.getWorkspaceGuid?.() || "default";
    } catch {
    }
    let name = "plugin";
    try {
      name = plugin.getConfiguration?.()?.name || "plugin";
    } catch {
    }
    return `tps-kill-switch/${ws}/${name}`;
  }
  __name(markerKey, "markerKey");
  function writeKillSwitchMarker(plugin, disabled) {
    try {
      localStorage.setItem(markerKey(plugin), JSON.stringify({ disabled, ts: Date.now() }));
    } catch {
    }
  }
  __name(writeKillSwitchMarker, "writeKillSwitchMarker");
  function clearKillSwitchMarker(plugin) {
    try {
      localStorage.removeItem(markerKey(plugin));
    } catch {
    }
  }
  __name(clearKillSwitchMarker, "clearKillSwitchMarker");
  function readKillSwitch(plugin) {
    let conf = {};
    try {
      conf = plugin.getConfiguration?.() || {};
    } catch {
    }
    const confDisabled = isPluginDisabled(conf);
    try {
      const raw = localStorage.getItem(markerKey(plugin));
      if (raw) {
        const marker = JSON.parse(raw);
        if (marker && typeof marker.disabled === "boolean") {
          if (marker.disabled === confDisabled) {
            clearKillSwitchMarker(plugin);
            return confDisabled;
          }
          if (Date.now() - (Number(marker.ts) || 0) < MARKER_SYNC_HORIZON_MS) {
            return marker.disabled;
          }
          clearKillSwitchMarker(plugin);
        }
      }
    } catch {
    }
    return confDisabled;
  }
  __name(readKillSwitch, "readKillSwitch");
  async function setPluginDisabled(plugin, disabled, pluginVersion, customPatch = {}) {
    return queuePluginConfigWrite(plugin, () => setPluginDisabledNow(plugin, disabled, pluginVersion, customPatch));
  }
  __name(setPluginDisabled, "setPluginDisabled");
  async function setPluginDisabledNow(plugin, disabled, pluginVersion, customPatch) {
    const api = await resolveConfigApi(plugin);
    if (!api) return false;
    let conf = {};
    try {
      conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
    } catch {
      return false;
    }
    if (typeof conf.name !== "string" || !conf.name.trim()) return false;
    const custom = conf.custom && typeof conf.custom === "object" ? (
      /** @type {Record<string, unknown>} */
      conf.custom
    ) : {};
    const resolvedPatch = typeof customPatch === "function" ? customPatch(custom) : customPatch;
    const patch = resolvedPatch && typeof resolvedPatch === "object" ? resolvedPatch : {};
    if (!Object.keys(patch).length && readKillSwitch(plugin) === disabled && isPluginDisabled(conf) === disabled) return true;
    writeKillSwitchMarker(plugin, disabled);
    try {
      const result = await api.saveConfiguration(configWithPluginVersion(conf, { ...patch, pluginDisabled: disabled }, pluginVersion));
      if (result === false) throw new Error("Thymer rejected the config save.");
      return true;
    } catch {
      clearKillSwitchMarker(plugin);
      return false;
    }
  }
  __name(setPluginDisabledNow, "setPluginDisabledNow");

  // ../../shared/telemetry/ping.js
  var TELEMETRY_ENDPOINT = "https://thymer-plugins.goatcounter.com/count";
  var TELEMETRY_SCRIPT_SRC = "https://gc.zgo.at/count.js";
  var _telemetryScriptPromise = null;
  function _loadGoatCounter() {
    if (_telemetryScriptPromise) return _telemetryScriptPromise;
    _telemetryScriptPromise = new Promise((resolve) => {
      window.goatcounter = window.goatcounter || {};
      window.goatcounter.no_onload = true;
      window.goatcounter.allow_local = false;
      if (typeof window.goatcounter.count === "function") {
        resolve();
        return;
      }
      const s = document.createElement("script");
      s.async = true;
      s.src = TELEMETRY_SCRIPT_SRC;
      s.setAttribute("data-goatcounter", TELEMETRY_ENDPOINT);
      s.setAttribute("data-goatcounter-settings", '{"no_onload": true}');
      s.onload = () => resolve();
      s.onerror = () => resolve();
      document.head.appendChild(s);
    });
    return _telemetryScriptPromise;
  }
  __name(_loadGoatCounter, "_loadGoatCounter");
  function _fireTelemetry(path) {
    _loadGoatCounter().then(() => {
      try {
        window.goatcounter?.count?.({ path, title: "", event: false });
      } catch (_) {
      }
    });
  }
  __name(_fireTelemetry, "_fireTelemetry");
  function _telemetryBlocked() {
    try {
      if (navigator.doNotTrack === "1") return true;
      if (localStorage.getItem("tps-telemetry-opt-out") === "1") return true;
    } catch (_) {
      return true;
    }
    return false;
  }
  __name(_telemetryBlocked, "_telemetryBlocked");
  function pingInstall(slug) {
    try {
      if (_telemetryBlocked()) return;
      const key = "tps-tcm-" + slug;
      if (localStorage.getItem(key) === "1") return;
      localStorage.setItem(key, "1");
      _fireTelemetry("thymer-" + slug);
    } catch (_) {
    }
  }
  __name(pingInstall, "pingInstall");
  function pingActive(slug) {
    try {
      if (_telemetryBlocked()) return;
      const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      const key = "tps-act-" + slug;
      if (localStorage.getItem(key) === today) return;
      localStorage.setItem(key, today);
      _fireTelemetry("thymer-" + slug + "/active");
    } catch (_) {
    }
  }
  __name(pingActive, "pingActive");

  // plugin.js
  var PLUGIN_VERSION = "2.1.10";
  var PLUGIN_KEY = "sidebarSeparators";
  var MARK_ATTR = "data-plg-sidebar-separator";
  var SCHEMA_VERSION = 3;
  var LEGACY_PLUGIN_KEY = "sidebarSeperators";
  var LEGACY_MARK_ATTR = "data-plg-sidebar-seperator";
  var PANEL_CLASS = "plg-sidebar-separators-panel";
  var COLLECTION_COLORS_CLASS = "plg-collection-colors";
  var PANEL_TYPE = "sidebar-separators-settings";
  var STYLE_ID2 = "plg-sidebar-separators-runtime-style";
  var ROOT_SELECTOR = ".sidebar--icons, .sidebar";
  var COLLECTION_ROW_SELECTOR = ".sidebar-item-collection[data-guid]";
  var ROW_CLASS = "plg-ss-row";
  var SEP_ID_ATTR = "data-plg-ss-id";
  var DRAG_HIDE_CLASS = "plg-ss-native-drag";
  var SIDEBAR_LIST_SELECTOR = ".sidebar--icons";
  var BLOCK_STOP_SELECTOR = ".sidebar-item-collection, .sidebar-item-heading, .sidebar-item-divider, .sidebar-item-collsheading, .plg-st-sidebar-bottom, .sidebar-widget-container, .scal-root";
  var THEME_SURFACE_CSS = "var(--panel-bg-color, color-mix(in srgb, currentColor 10%, transparent))";
  var THEME_ACCENT_CSS = "var(--logo-color, currentColor)";
  var SIDEBAR_DIVIDER_VAR_VALUE = "theme-var:--sidebar-divider-color";
  var SIDEBAR_DIVIDER_VAR_CSS = "var(--sidebar-divider-color, var(--divider-color, color-mix(in srgb, currentColor 14%, transparent)))";
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
    { name: "Text", value: "var:--text-default", css: "var(--text-default, currentColor)" },
    { name: "Muted text", value: "var:--text-muted", css: "var(--text-muted, color-mix(in srgb, currentColor 62%, transparent))" },
    { name: "Subtle text", value: "var:--text-subtle", css: "var(--text-subtle, color-mix(in srgb, currentColor 48%, transparent))" },
    { name: "Border", value: "var:--divider-color", css: "var(--divider-color, color-mix(in srgb, currentColor 14%, transparent))" },
    { name: "Subtle border", value: "var:--thin-divider-color", css: "var(--thin-divider-color, color-mix(in srgb, currentColor 10%, transparent))" },
    { name: "Input border", value: "var:--input-border-color", css: "var(--input-border-color, color-mix(in srgb, currentColor 22%, transparent))" },
    { name: "Background", value: "var:--panel-bg-color", css: THEME_SURFACE_CSS },
    { name: "Hover bg", value: "var:--hover-subtle", css: "var(--hover-subtle, color-mix(in srgb, currentColor 8%, transparent))" },
    { name: "Enum red", value: "var:--enum-red-fg", css: "var(--enum-red-fg, #ef4444)" },
    { name: "Enum orange", value: "var:--enum-orange-fg", css: "var(--enum-orange-fg, #f97316)" },
    { name: "Enum yellow", value: "var:--enum-yellow-fg", css: "var(--enum-yellow-fg, #eab308)" },
    { name: "Enum green", value: "var:--enum-green-fg", css: "var(--enum-green-fg, #22c55e)" },
    { name: "Enum teal", value: "var:--enum-teal-fg", css: "var(--enum-teal-fg, #14b8a6)" },
    { name: "Enum blue", value: "var:--enum-blue-fg", css: "var(--enum-blue-fg, #3b82f6)" },
    { name: "Enum indigo", value: "var:--enum-indigo-fg", css: "var(--enum-indigo-fg, #6366f1)" },
    { name: "Enum purple", value: "var:--enum-purple-fg", css: "var(--enum-purple-fg, #8b5cf6)" },
    { name: "Enum fuchsia", value: "var:--enum-fuchsia-fg", css: "var(--enum-fuchsia-fg, #d946ef)" },
    { name: "Enum pink", value: "var:--enum-pink-fg", css: "var(--enum-pink-fg, #ec4899)" }
  ]);
  var THEME_COLOR_ALIASES = Object.freeze({
    "var:--logo-color": THEME_ACCENT_CSS
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
    /** @type {Map<string, Separator>} keyed by separator id (NOT a collection guid) */
    _separators = /* @__PURE__ */ new Map();
    /** @type {Map<string, HTMLElement>} id → our injected row element (reused across re-renders) */
    _rowEls = /* @__PURE__ */ new Map();
    /** @type {Map<string, number>} id → last rendered gap index, used to re-home orphans */
    _lastGap = /* @__PURE__ */ new Map();
    /**
     * Workspace this instance belongs to, pinned once at load. The MutationObserver watches
     * `document.body`, so on a workspace switch we can be handed a sidebar full of ANOTHER
     * workspace's collections. Acting on that DOM (or writing storage from it) is never right.
     * @type {string}
     */
    _wsGuid = "";
    /** @type {string} storage key derived from `_wsGuid` ONCE — see `_storeKey()` */
    _storeKeyCached = "";
    /** @type {ReturnType<typeof setTimeout> | null} debounce for `_reconcileOrphans` */
    _orphanTimer = null;
    /** @type {string[]} last known-good collection order (see `_collectionGuids`) */
    _collCache = [];
    /** @type {Map<string, string>} collection guid → display name */
    _collNames = /* @__PURE__ */ new Map();
    /** @type {string} snapshot of the collection list; a change re-renders the panel */
    _collSnapshot = "";
    /** @type {number} monotonic revision for the complete workspace state journal */
    _rev = 0;
    /** @type {ReturnType<typeof setTimeout> | null} */
    _configCommitTimer = null;
    /** @type {boolean} */
    _migrationRan = false;
    /** @type {boolean} */
    _unloading = false;
    /** @type {Promise<void> | null} resolves once syncPluginVersionOnLoad has finished writing */
    _versionSynced = null;
    /** @type {boolean} re-entrancy guard for our own sidebar DOM writes */
    _syncing = false;
    /** @type {EventListener | null} */
    _boundNativeDragStart = null;
    /** @type {EventListener | null} */
    _boundNativeDragEnd = null;
    /** @type {SeparatorPreset[]} global reusable looks, synced in plugin config */
    _presets = [];
    /** @type {string | null} guid of a preset currently open in the editor */
    _editingPresetId = null;
    /** @type {boolean} guard: true while applying/propagating a preset (skip unbind) */
    _applyingPreset = false;
    /** @type {ReturnType<typeof setTimeout> | null} */
    _presetSaveTimer = null;
    /** @type {SeparatorStyle} */
    _defaultStyle = { ...DEFAULT_STYLE };
    /** @type {HTMLElement | null} */
    _panelEl = null;
    /** @type {string | null} id of the separator being edited */
    _activeOverrideId = null;
    /** @type {EventListener | null} */
    _boundSeparatorActivate = null;
    /** @type {{name: string, value: string, css: string, resolved: string, raw: string, source: string}[]} */
    _themeColors = [];
    /** @type {number} */
    _themeColorsReadAt = 0;
    /** @type {string[]} user's saved custom swatches (global palette) */
    _customSwatches = [];
    /** @type {ResizeObserver | null} */
    _panelResizeObserver = null;
    /** @type {MutationObserver | null} */
    _appearanceObserver = null;
    /** @type {boolean | null} */
    _lastDark = null;
    /** @type {number | null} */
    _appearanceRaf = null;
    onLoad() {
      pingInstall("sidebar-separators");
      pingActive("sidebar-separators");
      this._disabled = readKillSwitch(this);
      this._unloading = false;
      this._defaultStyle = this._normalizeStyle(DEFAULT_STYLE);
      this._activeOverrideId = null;
      this._editingPresetId = null;
      this._migrationRan = false;
      this._wsGuid = this._readWorkspaceGuid();
      this._storeKeyCached = `plg-sidebar-separators-v2:${this._wsGuid || "default"}`;
      this._customSwatches = this._loadCustomSwatches();
      this._presets = this._loadPresets();
      this._loadSeparators();
      this._watchAppearance();
      this._versionSynced = Promise.resolve(syncPluginVersionOnLoad(this, PLUGIN_VERSION)).catch(() => {
      });
      installInstantTooltip();
      this.ui.injectCSS(PANEL_CSS);
      this._injectCSS();
      this._refreshThemeColors(true);
      this._settingsCommand = this.ui.addCommandPaletteCommand({
        label: "Plugin: Sidebar Separators",
        icon: "settings",
        onSelected: /* @__PURE__ */ __name(() => this._openPanel(), "onSelected")
      });
      this.ui.registerCustomPanelType(PANEL_TYPE, (pluginPanel) => {
        try {
          pluginPanel.setTitle("Sidebar Separators Settings");
        } catch {
        }
        const root = pluginPanel.getElement();
        if (!root) return;
        this._panelEl = root;
        this._renderPanel();
        this._syncSeparatorRows();
        requestAnimationFrame(() => this._syncSeparatorRows());
      });
      this._handlerIds = [];
      try {
        this._handlerIds.push(this.events.on("panel.closed", () => this._onPanelChanged()));
        this._handlerIds.push(this.events.on("panel.navigated", () => this._onPanelChanged()));
      } catch {
      }
      try {
        const staleRoot = document.querySelector(".plg-sidebar-separators-panel");
        if (staleRoot && staleRoot.parentElement) {
          this._panelEl = staleRoot.parentElement;
          this._renderPanel();
        }
      } catch {
      }
      if (this._disabled) return;
      this._ensureRuntimeStyle();
      this._writeRuntimeStyle();
      this._boundNativeDragStart = (event) => {
        const target = event.target;
        if (target instanceof Element && target.closest(ROOT_SELECTOR)) {
          document.body.classList.add(DRAG_HIDE_CLASS);
        }
      };
      this._boundNativeDragEnd = () => {
        if (!document.body.classList.contains(DRAG_HIDE_CLASS)) return;
        document.body.classList.remove(DRAG_HIDE_CLASS);
        this._syncSeparatorRows();
      };
      this._boundSeparatorActivate = (event) => this._onSeparatorActivate(event);
      document.addEventListener("dragstart", this._boundNativeDragStart, true);
      document.addEventListener("dragend", this._boundNativeDragEnd, true);
      document.addEventListener("drop", this._boundNativeDragEnd, true);
      document.addEventListener("click", this._boundSeparatorActivate, true);
      document.addEventListener("dblclick", this._boundSeparatorActivate, true);
      this._observer = new MutationObserver((mutations) => this._onMutations(mutations));
      if (document.body) this._observer.observe(document.body, { childList: true, subtree: true });
      this._syncSeparatorRows();
    }
    onUnload() {
      this._unloading = true;
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
      if (this._appearanceObserver) {
        this._appearanceObserver.disconnect();
        this._appearanceObserver = null;
      }
      if (this._appearanceRaf) {
        cancelAnimationFrame(this._appearanceRaf);
        this._appearanceRaf = null;
      }
      if (this._orphanTimer) {
        clearTimeout(this._orphanTimer);
        this._orphanTimer = null;
      }
      if (this._configCommitTimer) {
        clearTimeout(this._configCommitTimer);
        this._configCommitTimer = null;
        void this._commitToConfig();
      }
      for (const id of this._handlerIds) {
        try {
          this.events.off(id);
        } catch {
        }
      }
      this._handlerIds = [];
      if (this._boundNativeDragStart) document.removeEventListener("dragstart", this._boundNativeDragStart, true);
      if (this._boundNativeDragEnd) {
        document.removeEventListener("dragend", this._boundNativeDragEnd, true);
        document.removeEventListener("drop", this._boundNativeDragEnd, true);
      }
      if (this._boundSeparatorActivate) {
        document.removeEventListener("click", this._boundSeparatorActivate, true);
        document.removeEventListener("dblclick", this._boundSeparatorActivate, true);
      }
      this._boundNativeDragStart = null;
      this._boundNativeDragEnd = null;
      this._boundSeparatorActivate = null;
      document.body.classList.remove(DRAG_HIDE_CLASS);
      for (const row of this._rowEls.values()) row.remove();
      this._rowEls.clear();
      document.querySelectorAll(`.${ROW_CLASS}, .plg-sidebar-separators-poof`).forEach((node) => node.remove());
      const style = document.getElementById(STYLE_ID2);
      if (style) style.remove();
      this._panelEl = null;
    }
    /**
     * Panel closed/navigated. This is the safe window to flush pending separator state to
     * plugin config: `this.saveConfiguration` reloads the plugin, and with the panel gone
     * that reload is invisible.
     */
    _onPanelChanged() {
      requestAnimationFrame(() => {
        this._syncSeparatorRows();
        if (!this._isPanelOpen() && this._configCommitTimer) {
          clearTimeout(this._configCommitTimer);
          this._configCommitTimer = null;
          void this._commitToConfig();
        }
      });
    }
    /** Add a plugin-owned separator at the bottom of the collections list. */
    _addSeparator() {
      const guids = this._collectionGuids();
      const style = this._normalizeStyle(this._defaultStyle);
      const sep = {
        id: this._makeSeparatorId(),
        anchorGuid: guids.length ? guids[guids.length - 1] : null,
        side: "after",
        seq: this._nextSeqAtEnd(guids.length ? guids[guids.length - 1] : null, "after"),
        presetId: null,
        style,
        collapsedStyle: this._normalizeStyle(style)
      };
      this._separators.set(sep.id, sep);
      this._activeOverrideId = sep.id;
      this._saveSeparators();
      this._writeRuntimeStyle();
      this._syncSeparatorRows();
      this._renderPanel();
      this._toast("Separator added.");
    }
    _makeSeparatorId() {
      return `s${Date.now().toString(36)}${Math.floor(Math.random() * 1e6).toString(36)}`;
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
      const editingPreset = this._editingPresetId ? this._getPreset(this._editingPresetId) : null;
      if (this._editingPresetId && !editingPreset) this._editingPresetId = null;
      if (editingPreset) {
        this._panelEl.replaceChildren(panel({ pluginClass: PANEL_CLASS }, this._presetEditorBody(editingPreset)));
        this._syncSeparatorRows();
        return;
      }
      const selected = this._activeSeparator();
      const activeStyle = selected ? selected.style : this._defaultStyle;
      const body = [
        pluginHeaderFromConfig(this.getConfiguration(), this._headerOpts()),
        h(
          "div",
          { class: `${PANEL_CLASS}__top-actions` },
          h("button", { type: "button", class: `${PANEL_CLASS}__primary`, onClick: /* @__PURE__ */ __name(() => this._addSeparator(), "onClick") }, "Add New Separator"),
          this._renderPresetChips()
        ),
        this._sidebarPreview(activeStyle, selected)
      ];
      const listSection = this._renderSeparatorList();
      if (listSection) body.push(listSection);
      if (!selected) {
        body.push(h(
          "div",
          { class: `${PANEL_CLASS}__empty-state` },
          h("p", { class: `${PANEL_CLASS}__helper` }, listSection ? "Select a separator above to edit it." : "No separators yet \u2014 use Add New Separator above.")
        ));
      } else {
        body.push(this._renderAnchorSection(selected));
        body.push(this._renderDesignSection(selected));
        body.push(this._renderColorSection(activeStyle, selected));
      }
      this._panelEl.replaceChildren(panel({ pluginClass: PANEL_CLASS }, body));
      this._syncSeparatorRows();
    }
    /**
     * "Moves with" — a separator sits in the gap between two collections, and is *attached* to
     * one of them. Whichever it's attached to, it travels with when that collection is dragged.
     * Flipping the side here does NOT move the separator; it only changes which neighbor owns it.
     * @param {Separator} sep
     */
    /**
     * The collection a separator is attached to, and which side of it the SEPARATOR sits on.
     * The arrow describes the separator's position relative to that collection:
     *   '↓' = the separator sits BELOW the collection (side 'after')
     *   '↑' = the separator sits ABOVE the collection (side 'before')
     * @param {Separator} sep
     */
    _anchorInfo(sep) {
      const guids = this._collectionGuids();
      const gap = this._gapOf(sep, guids);
      const prevGuid = gap > 0 ? guids[gap - 1] : null;
      const nextGuid = gap < guids.length ? guids[gap] : null;
      const ownerGuid = sep.side === "after" ? prevGuid : nextGuid;
      return {
        guids,
        gap,
        prevGuid,
        nextGuid,
        ownerGuid,
        ownerName: ownerGuid ? this._collectionName(ownerGuid) : null,
        arrow: sep.side === "after" ? "\u2193" : "\u2191"
      };
    }
    /** @param {Separator} sep */
    _separatorTitle(sep) {
      const { ownerName, arrow } = this._anchorInfo(sep);
      return ownerName ? `Moves with ${ownerName} ${arrow}` : "Not attached to a collection";
    }
    /** Separators in sidebar order (top to bottom). @returns {Separator[]} */
    _orderedSeparators() {
      const guids = this._collectionGuids();
      return Array.from(this._separators.values()).map((sep) => ({ sep, gap: this._gapOf(sep, guids) })).sort((a, b) => a.gap - b.gap || a.sep.seq - b.sep.seq).map((x) => x.sep);
    }
    /**
     * Select a separator for editing — or, if it's already selected, deselect it. Toggling off
     * collapses its settings back to the empty state and drops the ring in the sidebar, so there
     * is always a way to "back out" of editing without picking a different separator.
     * @param {string} id
     */
    _selectSeparator(id) {
      if (!this._separators.has(id)) return;
      this._activeOverrideId = this._activeOverrideId === id ? null : id;
      this._renderPanel();
      this._syncSeparatorRows();
    }
    /**
     * @param {string} icon @param {string} title @param {boolean} disabled
     * @param {() => void} onClick @param {boolean=} danger
     */
    _panelIconButton(icon, title, disabled, onClick, danger = false) {
      return h("button", {
        type: "button",
        class: `${PANEL_CLASS}__sepbtn ${danger ? "is-danger" : ""}`,
        title,
        "aria-label": title,
        disabled,
        onClick: /* @__PURE__ */ __name((e) => {
          e.preventDefault();
          e.stopPropagation();
          onClick();
        }, "onClick")
      }, h("i", { class: `ti ${icon}`, "aria-hidden": "true" }));
    }
    /**
     * The separator list — this is the panel's spine. Each row is titled by the collection it
     * moves with, carries its own ↑/↓/delete, and selecting one rings it to show that everything
     * below edits THAT separator. Replaces the old hover-overlay-on-the-sidebar-row entirely.
     */
    _renderSeparatorList() {
      const ordered = this._orderedSeparators();
      if (!ordered.length) return null;
      const guids = this._collectionGuids();
      const rows = ordered.map((sep) => {
        const isSel = this._activeOverrideId === sep.id;
        const gap = this._gapOf(sep, guids);
        const sameGap = ordered.filter((s) => this._gapOf(s, guids) === gap);
        const idx = sameGap.findIndex((s) => s.id === sep.id);
        const canUp = idx > 0 || gap > 0;
        const canDown = idx < sameGap.length - 1 || gap < guids.length;
        return h(
          "div",
          { class: `${PANEL_CLASS}__seprow ${isSel ? "is-active" : ""}` },
          h(
            "button",
            {
              type: "button",
              class: `${PANEL_CLASS}__seprow-main`,
              "aria-pressed": String(isSel),
              onClick: /* @__PURE__ */ __name(() => this._selectSeparator(sep.id), "onClick")
            },
            h("span", { class: `${PANEL_CLASS}__seprow-rail` }, this._lineElement(`${PANEL_CLASS}__line`, sep.style)),
            h("span", { class: `${PANEL_CLASS}__seprow-title` }, this._separatorTitle(sep))
          ),
          h(
            "div",
            { class: `${PANEL_CLASS}__seprow-actions` },
            this._panelIconButton("ti-chevron-up", "Move up", !canUp, () => this._moveSeparator(sep.id, -1)),
            this._panelIconButton("ti-chevron-down", "Move down", !canDown, () => this._moveSeparator(sep.id, 1)),
            this._panelIconButton("ti-trash", "Delete separator", false, () => this._deleteSeparator(sep.id), true)
          )
        );
      });
      return h(
        "section",
        { class: "tps-section" },
        h("div", { class: `${PANEL_CLASS}__state-title` }, "Separators"),
        h("div", { class: `${PANEL_CLASS}__seplist` }, ...rows)
      );
    }
    /**
     * "Moves with" — which of the two neighbouring collections owns the selected separator.
     * @param {Separator} sep
     */
    _renderAnchorSection(sep) {
      const { prevGuid, nextGuid, ownerName, arrow } = this._anchorInfo(sep);
      const choices = [];
      if (prevGuid) choices.push({ side: "after", guid: prevGuid, label: `Stick below ${this._collectionName(prevGuid)} collection \u2193` });
      if (nextGuid) choices.push({ side: "before", guid: nextGuid, label: `Stick above ${this._collectionName(nextGuid)} collection \u2191` });
      const kids = [h("div", { class: `${PANEL_CLASS}__state-title` }, "Moves with")];
      if (choices.length > 1) {
        kids.push(h(
          "div",
          { class: `${PANEL_CLASS}__anchor-row` },
          ...choices.map((c) => h("button", {
            type: "button",
            class: `${PANEL_CLASS}__anchor-btn ${sep.side === c.side ? "is-active" : ""}`,
            "aria-pressed": String(sep.side === c.side),
            onClick: /* @__PURE__ */ __name(() => {
              if (sep.side === c.side) return;
              sep.side = c.side;
              sep.anchorGuid = c.guid;
              this._saveSeparators();
              this._syncSeparatorRows();
              this._renderPanel();
            }, "onClick")
          }, c.label))
        ));
      } else {
        kids.push(h(
          "p",
          { class: `${PANEL_CLASS}__helper` },
          ownerName ? `Stuck ${sep.side === "after" ? "below" : "above"} ${ownerName} collection ${arrow}` : "Add a collection to attach this separator to one."
        ));
      }
      return h("section", { class: "tps-section" }, ...kids);
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
     * @param {Separator} selected
     */
    _renderDesignSection(selected) {
      const expandedStyle = selected.style;
      const collapsedStyle = selected.collapsedStyle || expandedStyle;
      return h(
        "section",
        { class: "tps-section" },
        h(
          "div",
          { class: `${PANEL_CLASS}__design-columns` },
          h(
            "div",
            { class: `${PANEL_CLASS}__design-column` },
            h("div", { class: `${PANEL_CLASS}__state-title` }, "Expanded"),
            this._styleEditor(expandedStyle, (next, render) => this._setActiveStyle(next, render), `sep-expanded-${selected.id}`, () => this._activeStyleForEdit(expandedStyle))
          ),
          h(
            "div",
            { class: `${PANEL_CLASS}__design-column` },
            h("div", { class: `${PANEL_CLASS}__state-title` }, "Collapsed"),
            this._styleEditor(collapsedStyle, (next, render) => this._setActiveCollapsedStyle(next, render), `sep-collapsed-${selected.id}`, () => this._activeCollapsedStyleForEdit(collapsedStyle))
          )
        )
      );
    }
    /**
     * @param {SeparatorStyle} style
     * @param {Separator} selected
     */
    _renderColorSection(style, selected) {
      return h(
        "section",
        { class: "tps-section" },
        this._colorPicker(style, (next, render) => this._setActiveColorStyle(next, render), `sep-color-${selected.id}`)
      );
    }
    /**
     * @param {SeparatorStyle} style
     * @param {Separator | null} selected
     */
    _sidebarPreview(style, selected) {
      const line = this._lineElement(`${PANEL_CLASS}__line`, style);
      line.setAttribute("data-plg-ss-live-line", "1");
      const root = h(
        "div",
        { class: `${PANEL_CLASS}__preview` },
        h("div", { class: `${PANEL_CLASS}__preview-rail` }, line)
      );
      const bg = this._sidebarBgColor();
      if (bg) root.style.background = bg;
      this._applyStyleVars(root, style);
      return root;
    }
    /** Exact background color of the live sidebar (so the preview matches the theme). */
    _sidebarBgColor() {
      for (const sel of [".sidebar--icons", ".sidebar", ".sidebar-container", ".sidebar-panel"]) {
        try {
          const el2 = document.querySelector(sel);
          if (!el2) continue;
          const bg = getComputedStyle(el2).backgroundColor;
          if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") return bg;
        } catch {
        }
      }
      try {
        return getComputedStyle(document.documentElement).getPropertyValue("--panel-bg-color").trim();
      } catch {
      }
      return "";
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
          }, "border")
        ),
        h(
          "div",
          { class: `${PANEL_CLASS}__field` },
          h("span", { class: `${PANEL_CLASS}__field-label` }, "Align"),
          this._segmented(ALIGNMENTS, style.alignment, (value) => {
            onChange(this._normalizeStyle({ ...current(), alignment: value }), true);
          }, "align")
        ),
        style.borderStyle === "gradient" ? this._sliderField("Gradient", style.gradientPct, 5, 95, "%", (value) => onChange(this._normalizeStyle({ ...current(), gradientPct: value }))) : null,
        this._numberField("Thickness", style.thicknessPx, 0.5, 8, "px", (value) => onChange(this._normalizeStyle({ ...current(), thicknessPx: value }), false), 0.5),
        style.borderStyle === "double" ? this._numberField("Double gap", style.doubleGapPx, 0.5, 8, "px", (value) => onChange(this._normalizeStyle({ ...current(), doubleGapPx: value }), false), 0.5) : null,
        this._numberField("Width", style.widthPct, 10, 100, "%", (value) => onChange(this._normalizeStyle({ ...current(), widthPct: value }))),
        this._numberField("Opacity", style.opacityPct, 10, 100, "%", (value) => onChange(this._normalizeStyle({ ...current(), opacityPct: value }))),
        this._numberField("Side inset", style.insetPx, 0, 64, "px", (value) => onChange(this._normalizeStyle({ ...current(), insetPx: value }))),
        this._numberField("Row height", style.heightPx, 0, 42, "px", (value) => onChange(this._normalizeStyle({ ...current(), heightPx: value }))),
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
     * Icon-based segmented control — tinted via currentColor (muted → accent), no
     * icon-font dependency:
     *   'border' → the real line shape (`.__seg-line`), keyed by `[data-shape]`
     *   'align'  → a standard text-align glyph (`.__seg-glyph`, inline-SVG mask),
     *              keyed by `[data-align]`
     * Buttons carry `data-cf-tip` so the shared instant tooltip labels them.
     * @param {readonly string[]} options
     * @param {string} active
     * @param {(value: string) => void} onChange
     * @param {'border' | 'align'} variant
     */
    _segmented(options, active, onChange, variant) {
      const label = /* @__PURE__ */ __name((value) => variant === "align" ? `Align ${value}` : value.charAt(0).toUpperCase() + value.slice(1), "label");
      const glyphClass = variant === "align" ? `${PANEL_CLASS}__seg-glyph` : `${PANEL_CLASS}__seg-line`;
      return h(
        "div",
        { class: `${PANEL_CLASS}__segmented ${PANEL_CLASS}__segmented--${variant}`, role: "group" },
        ...options.map((value) => h("button", {
          type: "button",
          class: `${PANEL_CLASS}__seg ${PANEL_CLASS}__seg--icon ${value === active ? "is-active" : ""}`,
          dataset: variant === "align" ? { align: value } : { shape: value },
          "data-cf-tip": label(value),
          "aria-label": label(value),
          "aria-pressed": String(value === active),
          onClick: /* @__PURE__ */ __name((event) => {
            event.preventDefault();
            onChange(value);
          }, "onClick")
        }, h("span", { class: glyphClass, "aria-hidden": "true" })))
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
      const field = colorField({
        value: this._colorFieldValueFor(style),
        allowNone: false,
        featured: [
          { label: "Accent", token: "--color-primary-500" },
          { label: "Sidebar dividers", token: "--sidebar-divider-color" }
        ],
        customSwatches: this._customSwatches,
        onCustomSwatchesChange: /* @__PURE__ */ __name((list) => this._saveCustomSwatches(list), "onCustomSwatchesChange"),
        onPick: /* @__PURE__ */ __name((r) => {
          if (!r) return;
          const base = this._activeStyleForEdit(style);
          let colorVal;
          if (r.type === "theme") colorVal = `theme-var:${r.token}`;
          else if (r.type === "tw") colorVal = r.invert ? `twflip:${r.family}:${r.shadeIdx}` : `custom:${r.hex}`;
          else colorVal = `custom:${r.hex}`;
          const patch = { ...base, color: colorVal };
          if (r.hex) patch.customColor = r.hex;
          onChange(this._normalizeStyle(patch), false);
        }, "onPick")
      });
      return h("div", { class: `${PANEL_CLASS}__colors`, dataset: { scope } }, field);
    }
    _customSwatchesKey() {
      return `sidebar-separators/${this.getWorkspaceGuid()}/custom-swatches`;
    }
    _legacyCustomSwatchesKey() {
      return `sidebar-seperators/${this.getWorkspaceGuid()}/custom-swatches`;
    }
    /** @returns {string[]} */
    _loadCustomSwatches() {
      try {
        let stored = localStorage.getItem(this._customSwatchesKey());
        if (stored === null) {
          const legacy = localStorage.getItem(this._legacyCustomSwatchesKey());
          if (legacy !== null) {
            localStorage.setItem(this._customSwatchesKey(), legacy);
            stored = legacy;
          }
        }
        const raw = JSON.parse(stored || "[]");
        return Array.isArray(raw) ? raw.filter((s) => this._isHex(s)).map((s) => s.toLowerCase()).slice(0, 44) : [];
      } catch {
        return [];
      }
    }
    /** @param {string[]} list */
    _saveCustomSwatches(list) {
      this._customSwatches = Array.isArray(list) ? list.filter((s) => this._isHex(s)).slice(0, 44) : [];
      this._saveState();
    }
    /** Re-render runtime style when the user switches light/dark (for `twflip:`). */
    _watchAppearance() {
      this._lastDark = this._isDarkAppearance();
      const check = /* @__PURE__ */ __name(() => {
        const dark = this._isDarkAppearance();
        if (dark === this._lastDark) return;
        this._lastDark = dark;
        this._writeRuntimeStyle();
        const bg = this._sidebarBgColor();
        if (this._panelEl && bg) this._panelEl.querySelectorAll(`.${PANEL_CLASS}__preview`).forEach((n) => {
          if (n instanceof HTMLElement) n.style.background = bg;
        });
      }, "check");
      try {
        this._appearanceObserver = new MutationObserver(() => {
          if (this._appearanceRaf) return;
          this._appearanceRaf = requestAnimationFrame(() => {
            this._appearanceRaf = null;
            check();
          });
        });
        const opts = { attributes: true, attributeFilter: ["class", "style", "data-theme", "data-appearance"] };
        this._appearanceObserver.observe(document.documentElement, opts);
        if (document.body) this._appearanceObserver.observe(document.body, opts);
      } catch {
      }
    }
    /** @returns {boolean} true when Thymer's current appearance is dark */
    _isDarkAppearance() {
      for (const el2 of [document.body, document.documentElement]) {
        try {
          const m = String(getComputedStyle(el2).backgroundColor || "").match(/rgba?\(([^)]+)\)/i);
          if (m) {
            const p = m[1].split(",").map((s) => parseFloat(s));
            if (p[3] === void 0 || p[3] > 0) return (0.299 * p[0] + 0.587 * p[1] + 0.114 * p[2]) / 255 < 0.5;
          }
        } catch {
        }
      }
      try {
        return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
      } catch {
      }
      return true;
    }
    /**
     * Map a stored separator color value onto a colorField value.
     * @param {SeparatorStyle} style
     * @returns {{type:'theme',token:string} | {type:'hex',hex:string} | {type:'tw',family:string,shadeIdx:number,invert:boolean} | null}
     */
    _colorFieldValueFor(style) {
      const c = style.color;
      if (c === "theme:accent") return { type: "theme", token: "--logo-color" };
      if (c === SIDEBAR_DIVIDER_VAR_VALUE) return { type: "theme", token: "--sidebar-divider-color" };
      const flip = typeof c === "string" && c.match(/^twflip:([a-z]+):(\d+)$/i);
      if (flip && TAILWIND[flip[1]]) return { type: "tw", family: flip[1], shadeIdx: Number(flip[2]), invert: true };
      if (typeof c === "string" && c.startsWith("theme-var:")) return { type: "theme", token: c.slice("theme-var:".length) };
      if (typeof c === "string" && c.startsWith("var:")) return { type: "theme", token: c.slice("var:".length) };
      const hex = this._resolveHexColor(style);
      return /^#[0-9a-f]{6}$/i.test(hex) ? { type: "hex", hex } : null;
    }
    /** @returns {Separator | null} */
    _activeSeparator() {
      return this._activeOverrideId ? this._separators.get(this._activeOverrideId) || null : null;
    }
    /**
     * @param {SeparatorStyle} next
     * @param {boolean=} render
     */
    _setActiveStyle(next, render = false) {
      const sel = this._activeSeparator();
      if (sel) this._setSeparatorStyle(sel.id, next, render);
    }
    /**
     * @param {SeparatorStyle} next
     * @param {boolean=} render
     */
    _setActiveCollapsedStyle(next, render = false) {
      const sel = this._activeSeparator();
      if (sel) this._setSeparatorCollapsedStyle(sel.id, next, render);
    }
    /**
     * Shared color changes apply to both expanded and collapsed states.
     * @param {SeparatorStyle} next
     * @param {boolean=} render
     */
    _setActiveColorStyle(next, render = false) {
      const sel = this._activeSeparator();
      if (!sel) return;
      if (!this._applyingPreset) sel.presetId = null;
      const colorPatch = { color: next.color, customColor: next.customColor };
      sel.style = this._normalizeStyle({ ...sel.style, ...colorPatch });
      sel.collapsedStyle = this._normalizeStyle({ ...sel.collapsedStyle, ...colorPatch });
      this._saveSeparators();
      this._writeRuntimeStyle();
      this._updatePanelPreview(sel.style);
      if (render) this._renderPanel();
    }
    /**
     * @param {SeparatorStyle} fallback
     */
    _activeStyleForEdit(fallback) {
      const sel = this._activeSeparator();
      return sel ? sel.style : fallback;
    }
    /**
     * @param {SeparatorStyle} fallback
     */
    _activeCollapsedStyleForEdit(fallback) {
      const sel = this._activeSeparator();
      return sel ? sel.collapsedStyle : fallback;
    }
    /**
     * @param {string} className
     * @param {SeparatorStyle} style
     */
    _lineElement(className, style) {
      const line = h("span", {
        class: className,
        "data-plg-sidebar-separators-style": style.borderStyle,
        "aria-hidden": "true"
      });
      this._applyStyleVars(line, style);
      return line;
    }
    /**
     * @param {string} id
     * @param {Partial<SeparatorStyle>} style
     * @param {boolean=} render
     */
    _setSeparatorStyle(id, style, render = false) {
      const sep = this._separators.get(id);
      if (!sep) return;
      if (!this._applyingPreset) sep.presetId = null;
      sep.style = this._normalizeStyle(style);
      this._saveSeparators();
      this._writeRuntimeStyle();
      this._updatePanelPreview(sep.style);
      if (render) this._renderPanel();
    }
    /**
     * @param {string} id
     * @param {Partial<SeparatorStyle>} style
     * @param {boolean=} render
     */
    _setSeparatorCollapsedStyle(id, style, render = false) {
      const sep = this._separators.get(id);
      if (!sep) return;
      if (!this._applyingPreset) sep.presetId = null;
      sep.collapsedStyle = this._normalizeStyle(style);
      this._saveSeparators();
      this._writeRuntimeStyle();
      this._updatePanelPreview(sep.collapsedStyle);
      if (render) this._renderPanel();
    }
    /* ── Persistence ─────────────────────────────────────────────────────
     *
     * Plugin config is the SYNCED source of truth, but `this.saveConfiguration` reloads the
     * whole plugin — which would orphan an open settings panel mid-edit. So:
     *   • every change writes localStorage immediately (instant, no reload) and bumps `rev`
     *   • a debounced commit pushes to plugin config, DEFERRED while the panel is open, so
     *     the reload it causes lands when nobody is looking (see `_onPanelChanged`)
     *   • on load we take whichever of {config, localStorage} has the higher `rev`
     */
    _readWorkspaceGuid() {
      try {
        return this.getWorkspaceGuid ? this.getWorkspaceGuid() || "" : "";
      } catch {
        return "";
      }
    }
    /**
     * True while the live app is still showing the workspace this instance was loaded for.
     *
     * The MutationObserver is on `document.body`, so during a workspace switch we can be handed a
     * sidebar full of ANOTHER workspace's collections while this instance is still alive. Every
     * one of our anchors would look "missing" in that DOM. Reading it is useless; WRITING storage
     * from it is destructive. Guard both.
     */
    _isOwnWorkspace() {
      const now = this._readWorkspaceGuid();
      if (!now || !this._wsGuid) return true;
      return now === this._wsGuid;
    }
    /** Pinned at load — never recomputed, so a load and a save can't land in different buckets. */
    _storeKey() {
      if (this._storeKeyCached) return this._storeKeyCached;
      this._storeKeyCached = `plg-sidebar-separators-v2:${this._readWorkspaceGuid() || "default"}`;
      return this._storeKeyCached;
    }
    /**
     * Placement (`anchorGuid` / `side` / `seq`) is user intent, so read it defensively: a value we
     * fail to parse must not quietly become a *different valid* placement — from the outside that
     * is indistinguishable from the user having moved the separator themselves.
     * @param {any} raw @returns {Separator | null}
     */
    _normalizeSeparator(raw) {
      if (!raw || typeof raw !== "object") return null;
      const id = typeof raw.id === "string" && raw.id ? raw.id : this._makeSeparatorId();
      const anchorGuid = typeof raw.anchorGuid === "string" && raw.anchorGuid ? raw.anchorGuid : null;
      const side = raw.side === "before" || raw.side === "after" ? raw.side : "after";
      const rawSeq = typeof raw.seq === "string" ? Number(raw.seq) : raw.seq;
      const seq = Number.isFinite(rawSeq) ? Number(rawSeq) : 0;
      const style = this._normalizeStyle(raw.style);
      return {
        id,
        anchorGuid,
        side,
        seq,
        presetId: typeof raw.presetId === "string" ? raw.presetId : null,
        style,
        collapsedStyle: this._normalizeStyle(raw.collapsedStyle || raw.style)
      };
    }
    /** Read complete state from the higher-`rev` of {plugin config, localStorage}. */
    _loadSeparators() {
      let confBlob = null;
      try {
        const conf = this.getConfiguration ? this.getConfiguration() : null;
        const custom = conf && conf.custom && typeof conf.custom === "object" ? conf.custom : null;
        if (custom && (Number(custom.schemaVersion) >= SCHEMA_VERSION || Array.isArray(custom.separators) || Array.isArray(custom.sidebarSeparatorPresets) || Array.isArray(custom.sidebarSeperatorPresets) || Array.isArray(custom.sidebarSeparatorCustomSwatches))) {
          confBlob = {
            schemaVersion: Number(custom.schemaVersion) || 0,
            rev: Number(custom.rev) || 0,
            separators: Array.isArray(custom.separators) ? custom.separators : [],
            presets: Array.isArray(custom.sidebarSeparatorPresets) ? custom.sidebarSeparatorPresets : Array.isArray(custom.sidebarSeperatorPresets) ? custom.sidebarSeperatorPresets : [],
            customSwatches: Array.isArray(custom.sidebarSeparatorCustomSwatches) ? custom.sidebarSeparatorCustomSwatches : []
          };
        }
      } catch {
      }
      let localBlob = null;
      try {
        const stored = localStorage.getItem(this._storeKey());
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && Array.isArray(parsed.separators)) {
            const isUnified = Number(parsed.schemaVersion) >= SCHEMA_VERSION;
            localBlob = {
              schemaVersion: Number(parsed.schemaVersion) || 0,
              rev: Number(parsed.rev) || 0,
              separators: parsed.separators,
              presets: isUnified && Array.isArray(parsed.presets) ? parsed.presets : this._presets,
              customSwatches: isUnified && Array.isArray(parsed.customSwatches) ? parsed.customSwatches : this._customSwatches
            };
          }
        }
      } catch {
      }
      if (!localBlob && (this._presets.length || this._customSwatches.length)) {
        localBlob = {
          schemaVersion: 0,
          rev: 0,
          separators: [],
          presets: this._presets,
          customSwatches: this._customSwatches
        };
      }
      const pick = !confBlob && !localBlob ? null : !confBlob ? localBlob : !localBlob ? confBlob : localBlob.rev > confBlob.rev || localBlob.rev === confBlob.rev && Number(confBlob.schemaVersion) < SCHEMA_VERSION && (localBlob.presets?.length || localBlob.customSwatches?.length) ? localBlob : confBlob;
      this._separators = /* @__PURE__ */ new Map();
      this._rev = pick ? Number(pick.rev) || 0 : 0;
      if (pick) {
        for (const raw of pick.separators) {
          const sep = this._normalizeSeparator(raw);
          if (sep) this._separators.set(sep.id, sep);
        }
        this._presets = Array.isArray(pick.presets) ? pick.presets.map((p) => this._normalizePreset(p)).filter(Boolean) : [];
        this._customSwatches = Array.isArray(pick.customSwatches) ? pick.customSwatches.filter((s) => this._isHex(s)).map((s) => s.toLowerCase()).slice(0, 44) : [];
      }
      const confRev = confBlob ? Number(confBlob.rev) || 0 : -1;
      const needsSchemaUpgrade = Number(pick?.schemaVersion) < SCHEMA_VERSION && (this._separators.size > 0 || this._presets.length > 0 || this._customSwatches.length > 0);
      if (confRev < this._rev || needsSchemaUpgrade) this._scheduleConfigCommit();
    }
    /** @returns {any[]} */
    _serializeSeparators() {
      return Array.from(this._separators.values()).map((s) => ({
        id: s.id,
        anchorGuid: s.anchorGuid,
        side: s.side,
        seq: s.seq,
        presetId: s.presetId,
        style: s.style,
        collapsedStyle: s.collapsedStyle
      }));
    }
    /** Complete local crash journal; config remains the cross-device source of truth. */
    _writeLocalState() {
      try {
        localStorage.setItem(this._storeKey(), JSON.stringify({
          schemaVersion: SCHEMA_VERSION,
          rev: this._rev,
          separators: this._serializeSeparators(),
          presets: this._presets,
          customSwatches: this._customSwatches
        }));
        return true;
      } catch {
        return false;
      }
    }
    /** Journal any state mutation immediately, then schedule one synced commit. */
    _saveState() {
      if (!this._isOwnWorkspace()) return;
      this._rev += 1;
      this._writeLocalState();
      this._scheduleConfigCommit();
    }
    /** Instant local write + a deferred config commit. Call after ANY separator mutation. */
    _saveSeparators() {
      this._saveState();
    }
    _scheduleConfigCommit() {
      if (this._unloading) return;
      if (this._configCommitTimer) clearTimeout(this._configCommitTimer);
      this._configCommitTimer = setTimeout(() => {
        this._configCommitTimer = null;
        if (this._isPanelOpen()) {
          this._scheduleConfigCommit();
          return;
        }
        void this._commitToConfig();
      }, 3e3);
    }
    /**
     * Write separators into plugin config (synced). NOTE: this reloads the plugin — only ever
     * called with the settings panel closed.
     * @param {Record<string, any>=} extra additional `custom` keys (migration uses this)
     */
    /**
     * The handle through which an AppPlugin can write its OWN config.
     *
     * IMPORTANT: `this.saveConfiguration` does NOT exist on AppPlugin — calling it throws
     * "saveConfiguration is not a function", silently swallowed by every try/catch. (That is
     * why 1.x presets appeared to "only save on refresh": they never saved at all.) The plugin
     * must fetch a handle to *itself* via `data.getPluginByGuid(getGuid())`, which does expose
     * `saveConfiguration`. Confirmed against the live app 2026-07-12.
     */
    _selfPluginHandle() {
      try {
        const self = (
          /** @type {any} */
          this
        );
        const guid = self.getGuid ? self.getGuid() : null;
        if (!guid) return null;
        const handle = this.data.getPluginByGuid(guid);
        return handle && typeof handle.saveConfiguration === "function" ? handle : null;
      } catch {
        return null;
      }
    }
    /** Header opts shared by the main panel and the preset editor view. */
    _headerOpts() {
      return {
        version: PLUGIN_VERSION,
        killSwitch: {
          on: !this._disabled,
          onToggle: /* @__PURE__ */ __name((nextOn) => {
            if (this._configCommitTimer) {
              clearTimeout(this._configCommitTimer);
              this._configCommitTimer = null;
            }
            const revisionAtStart = this._rev;
            let savedRev = this._rev;
            void setPluginDisabled(this, !nextOn, PLUGIN_VERSION, (custom) => {
              const built = this._buildStatePatch(custom);
              savedRev = built.rev;
              return built.patch;
            }).then((ok) => {
              if (!ok) {
                this._scheduleConfigCommit();
                return;
              }
              if (this._rev === revisionAtStart) {
                this._rev = savedRev;
                this._writeLocalState();
              } else {
                this._rev = Math.max(this._rev, savedRev + 1);
                this._writeLocalState();
                this._scheduleConfigCommit();
              }
            });
          }, "onToggle")
        },
        feedback: { data: this.data }
      };
    }
    /**
     * Build the complete synced state patch from a fresh custom snapshot.
     * @param {Record<string, any>} custom
     * @param {Record<string, any>} [extra]
     */
    _buildStatePatch(custom, extra = {}) {
      const rev = Math.max(this._rev, (Number(custom.rev) || 0) + 1);
      return {
        rev,
        patch: {
          ...extra,
          schemaVersion: SCHEMA_VERSION,
          rev,
          separators: this._serializeSeparators(),
          sidebarSeparatorPresets: this._presets,
          sidebarSeparatorCustomSwatches: this._customSwatches
        }
      };
    }
    async _commitToConfig(extra = {}) {
      if (this._versionSynced) {
        try {
          await this._versionSynced;
        } catch {
        }
      }
      return queuePluginConfigWrite(this, () => this._commitToConfigNow(extra));
    }
    async _commitToConfigNow(extra = {}) {
      if (!this._isOwnWorkspace()) return false;
      const handle = this._selfPluginHandle();
      if (!handle) return false;
      let conf = {};
      try {
        conf = handle.getConfiguration ? handle.getConfiguration() : this.getConfiguration?.() || {};
      } catch {
        return false;
      }
      if (typeof conf.name !== "string" || !conf.name.trim()) return false;
      const custom = conf.custom && typeof conf.custom === "object" ? conf.custom : {};
      const revisionAtStart = this._rev;
      const built = this._buildStatePatch(custom, extra);
      try {
        const result = await handle.saveConfiguration({
          ...conf,
          version: PLUGIN_VERSION,
          custom: {
            ...custom,
            ...built.patch,
            pluginVersion: PLUGIN_VERSION
          }
        });
        if (result === false) throw new Error("Thymer rejected the config save.");
        if (this._rev === revisionAtStart) {
          this._rev = built.rev;
          this._writeLocalState();
        } else {
          this._rev = Math.max(this._rev, built.rev + 1);
          this._writeLocalState();
          this._scheduleConfigCommit();
        }
        try {
          localStorage.removeItem(this._presetsKey());
          localStorage.removeItem(this._legacyPresetsKey());
          localStorage.removeItem(this._customSwatchesKey());
          localStorage.removeItem(this._legacyCustomSwatchesKey());
        } catch {
        }
        return true;
      } catch {
        this._scheduleConfigCommit();
        return false;
      }
    }
    /* ── Presets ─────────────────────────────────────────────────────────── */
    _presetsKey() {
      let ws = "";
      try {
        ws = this.getWorkspaceGuid ? this.getWorkspaceGuid() || "" : "";
      } catch {
        ws = "";
      }
      return `plg-sidebar-separators-presets:${ws || "default"}`;
    }
    _legacyPresetsKey() {
      let ws = "";
      try {
        ws = this.getWorkspaceGuid ? this.getWorkspaceGuid() || "" : "";
      } catch {
        ws = "";
      }
      return `plg-sidebar-seperators-presets:${ws || "default"}`;
    }
    /** @returns {SeparatorPreset[]} */
    _loadPresets() {
      let raw = null;
      try {
        let stored = localStorage.getItem(this._presetsKey());
        if (stored === null) {
          const legacy = localStorage.getItem(this._legacyPresetsKey());
          if (legacy !== null) {
            localStorage.setItem(this._presetsKey(), legacy);
            stored = legacy;
          }
        }
        if (stored) raw = JSON.parse(stored);
      } catch {
      }
      if (!raw) {
        try {
          const conf = this.getConfiguration ? this.getConfiguration() : null;
          const custom = conf && conf.custom && typeof conf.custom === "object" ? conf.custom : null;
          if (custom) {
            if (Array.isArray(custom.sidebarSeparatorPresets)) raw = custom.sidebarSeparatorPresets;
            else if (Array.isArray(custom.sidebarSeperatorPresets)) raw = custom.sidebarSeperatorPresets;
          }
        } catch {
        }
      }
      return Array.isArray(raw) ? (
        /** @type {SeparatorPreset[]} */
        raw.map((p) => this._normalizePreset(p)).filter(Boolean)
      ) : [];
    }
    /** @param {any} raw @returns {SeparatorPreset | null} */
    _normalizePreset(raw) {
      if (!raw || typeof raw !== "object") return null;
      const id = typeof raw.id === "string" && raw.id ? raw.id : this._makePresetId();
      const name = typeof raw.name === "string" && raw.name.trim() ? raw.name.trim() : "Preset";
      const style = this._normalizeStyle(raw.style);
      const collapsedStyle = this._normalizeStyle(raw.collapsedStyle || raw.style);
      return { id, name, style, collapsedStyle };
    }
    _makePresetId() {
      return `p${Date.now().toString(36)}${Math.floor(Math.random() * 1e6).toString(36)}`;
    }
    /** @param {string} id @returns {SeparatorPreset | null} */
    _getPreset(id) {
      return this._presets.find((p) => p.id === id) || null;
    }
    /**
     * Presets use the same unified journal and synced commit as separators.
     */
    _savePresets() {
      this._saveState();
    }
    /** "Set preset" — snapshot the selected separator's current look (or defaults) as a new preset, then open it for editing. */
    _startNewPreset() {
      const selected = this._activeSeparator();
      const style = this._normalizeStyle(selected ? selected.style : this._defaultStyle);
      const collapsedStyle = this._normalizeStyle(selected ? selected.collapsedStyle : style);
      const preset = { id: this._makePresetId(), name: `Preset ${this._presets.length + 1}`, style, collapsedStyle };
      this._presets.push(preset);
      this._savePresets();
      if (selected) this._bindSeparatorToPreset(selected.id, preset);
      this._editingPresetId = preset.id;
      this._renderPanel();
    }
    /** @param {string} presetId */
    _applyPreset(presetId) {
      const preset = this._getPreset(presetId);
      if (!preset) return;
      const selected = this._activeSeparator();
      if (!selected) {
        this._toast("Select a separator first, then apply a preset.");
        return;
      }
      this._bindSeparatorToPreset(selected.id, preset);
      this._renderPanel();
    }
    /** Copy a preset's look onto a separator and bind it (keeps the presetId link). @param {string} id @param {SeparatorPreset} preset */
    _bindSeparatorToPreset(id, preset) {
      const sep = this._separators.get(id);
      if (!sep) return;
      this._applyingPreset = true;
      try {
        sep.style = this._normalizeStyle({ ...preset.style });
        sep.collapsedStyle = this._normalizeStyle({ ...preset.collapsedStyle });
      } finally {
        this._applyingPreset = false;
      }
      sep.presetId = preset.id;
      this._saveSeparators();
      this._writeRuntimeStyle();
      this._updatePanelPreview(sep.style);
    }
    /** @param {string} presetId */
    _editPreset(presetId) {
      if (!this._getPreset(presetId)) return;
      this._editingPresetId = presetId;
      this._renderPanel();
    }
    _exitPresetEditor() {
      this._editingPresetId = null;
      this._savePresets();
      this._renderPanel();
    }
    /** @param {string} presetId */
    _deletePreset(presetId) {
      this._presets = this._presets.filter((p) => p.id !== presetId);
      let unbound = false;
      for (const sep of this._separators.values()) {
        if (sep.presetId === presetId) {
          sep.presetId = null;
          unbound = true;
        }
      }
      if (unbound) this._saveSeparators();
      if (this._editingPresetId === presetId) this._editingPresetId = null;
      this._savePresets();
      this._renderPanel();
    }
    /** @param {string} presetId @param {string} name */
    _renamePreset(presetId, name) {
      const preset = this._getPreset(presetId);
      if (!preset) return;
      preset.name = (name || "").trim() || preset.name;
      this._savePresets();
    }
    /** @param {SeparatorStyle} next @param {boolean=} render */
    _setPresetStyle(next, render = false) {
      const preset = this._editingPresetId ? this._getPreset(this._editingPresetId) : null;
      if (!preset) return;
      preset.style = this._normalizeStyle(next);
      this._propagatePreset(preset);
      this._updatePanelPreview(preset.style);
      this._savePresets();
      if (render) this._renderPanel();
    }
    /** @param {SeparatorStyle} next @param {boolean=} render */
    _setPresetCollapsedStyle(next, render = false) {
      const preset = this._editingPresetId ? this._getPreset(this._editingPresetId) : null;
      if (!preset) return;
      preset.collapsedStyle = this._normalizeStyle(next);
      this._propagatePreset(preset);
      this._savePresets();
      if (render) this._renderPanel();
    }
    /** Color applies to both states of a preset. @param {SeparatorStyle} next @param {boolean=} render */
    _setPresetColor(next, render = false) {
      const preset = this._editingPresetId ? this._getPreset(this._editingPresetId) : null;
      if (!preset) return;
      const colorPatch = { color: next.color, customColor: next.customColor };
      preset.style = this._normalizeStyle({ ...preset.style, ...colorPatch });
      preset.collapsedStyle = this._normalizeStyle({ ...preset.collapsedStyle, ...colorPatch });
      this._propagatePreset(preset);
      this._updatePanelPreview(preset.style);
      this._savePresets();
      if (render) this._renderPanel();
    }
    /** Push a preset's look onto every separator bound to it. @param {SeparatorPreset} preset */
    _propagatePreset(preset) {
      let touched = false;
      this._applyingPreset = true;
      try {
        for (const sep of this._separators.values()) {
          if (sep.presetId !== preset.id) continue;
          sep.style = this._normalizeStyle(preset.style);
          sep.collapsedStyle = this._normalizeStyle(preset.collapsedStyle);
          touched = true;
        }
      } finally {
        this._applyingPreset = false;
      }
      if (touched) this._saveSeparators();
      this._writeRuntimeStyle();
    }
    /** Chips (name + edit + delete) plus the "Set preset" button, shown right of Add. */
    _renderPresetChips() {
      const selected = this._activeSeparator();
      const wrap = h("div", { class: `${PANEL_CLASS}__presets` });
      for (const preset of this._presets) {
        const isSel = !!selected && selected.presetId === preset.id;
        wrap.appendChild(h(
          "div",
          { class: `${PANEL_CLASS}__preset ${isSel ? "is-active" : ""}` },
          h("button", {
            type: "button",
            class: `${PANEL_CLASS}__preset-apply`,
            "data-cf-tip": isSel ? "Applied to selected separator" : "Apply to selected separator",
            "aria-pressed": String(isSel),
            onClick: /* @__PURE__ */ __name(() => this._applyPreset(preset.id), "onClick")
          }, preset.name),
          h("button", {
            type: "button",
            class: `${PANEL_CLASS}__preset-icon`,
            "data-cf-tip": "Edit preset (updates all separators using it)",
            "aria-label": `Edit ${preset.name}`,
            onClick: /* @__PURE__ */ __name(() => this._editPreset(preset.id), "onClick")
          }, "\u270E"),
          h("button", {
            type: "button",
            class: `${PANEL_CLASS}__preset-icon ${PANEL_CLASS}__preset-icon--danger`,
            "data-cf-tip": "Delete preset (unbinds its separators)",
            "aria-label": `Delete ${preset.name}`,
            onClick: /* @__PURE__ */ __name(() => this._deletePreset(preset.id), "onClick")
          }, "\u2715")
        ));
      }
      wrap.appendChild(h("button", {
        type: "button",
        class: `${PANEL_CLASS}__preset-add`,
        "data-cf-tip": "Save the current look as a reusable preset",
        onClick: /* @__PURE__ */ __name(() => this._startNewPreset(), "onClick")
      }, "Set preset"));
      return wrap;
    }
    /** Body for the "editing a preset" view. @param {SeparatorPreset} preset @returns {HTMLElement[]} */
    _presetEditorBody(preset) {
      const boundCount = [...this._separators.values()].filter((en) => en.presetId === preset.id).length;
      const nameInput = h("input", {
        type: "text",
        class: `${PANEL_CLASS}__preset-name-input`,
        value: preset.name,
        "aria-label": "Preset name",
        onInput: /* @__PURE__ */ __name((e) => this._renamePreset(
          preset.id,
          /** @type {HTMLInputElement} */
          e.target.value
        ), "onInput")
      });
      return [
        pluginHeaderFromConfig(this.getConfiguration(), this._headerOpts()),
        h(
          "div",
          { class: `${PANEL_CLASS}__preset-editbar` },
          h("button", {
            type: "button",
            class: `${PANEL_CLASS}__back-btn`,
            "aria-label": "Back to presets",
            onClick: /* @__PURE__ */ __name(() => this._exitPresetEditor(), "onClick")
          }, h("span", { class: "ti ti-arrow-left", "aria-hidden": "true" }), "Back"),
          h("span", { class: `${PANEL_CLASS}__preset-editbar-label` }, "Editing preset"),
          nameInput,
          h("button", {
            type: "button",
            class: `${PANEL_CLASS}__preset-save-btn`,
            onClick: /* @__PURE__ */ __name(() => this._exitPresetEditor(), "onClick")
          }, "Save"),
          h(
            "span",
            { class: `${PANEL_CLASS}__preset-editbar-count` },
            boundCount ? `${boundCount} separator${boundCount === 1 ? "" : "s"} bound` : "Not applied to any separator yet"
          )
        ),
        this._sidebarPreview(preset.style, null),
        h(
          "section",
          { class: "tps-section" },
          h(
            "div",
            { class: `${PANEL_CLASS}__design-columns` },
            h(
              "div",
              { class: `${PANEL_CLASS}__design-column` },
              h("div", { class: `${PANEL_CLASS}__state-title` }, "Expanded"),
              this._styleEditor(preset.style, (nx, render) => this._setPresetStyle(nx, render), `preset-exp-${preset.id}`, () => (this._getPreset(preset.id) || preset).style)
            ),
            h(
              "div",
              { class: `${PANEL_CLASS}__design-column` },
              h("div", { class: `${PANEL_CLASS}__state-title` }, "Collapsed"),
              this._styleEditor(preset.collapsedStyle, (nx, render) => this._setPresetCollapsedStyle(nx, render), `preset-col-${preset.id}`, () => (this._getPreset(preset.id) || preset).collapsedStyle)
            )
          )
        ),
        h(
          "section",
          { class: "tps-section" },
          this._colorPicker(preset.style, (nx, render) => this._setPresetColor(nx, render), `preset-color-${preset.id}`)
        )
      ];
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
        insetPx: this._clampInt(src.insetPx, 0, 64, DEFAULT_STYLE.insetPx),
        heightPx: this._clampInt(src.heightPx, 0, 42, DEFAULT_STYLE.heightPx),
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
      if (/^twflip:[a-z]+:\d+$/i.test(value)) return value;
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
        return "var(--logo-color, currentColor)";
      }
      if (style.color === SIDEBAR_DIVIDER_VAR_VALUE) {
        return SIDEBAR_DIVIDER_VAR_CSS;
      }
      const flip = style.color.match(/^twflip:([a-z]+):(\d+)$/i);
      if (flip && TAILWIND[flip[1]]) {
        const idx = Number(flip[2]);
        const useIdx = this._isDarkAppearance() ? TW_SHADES.length - 1 - idx : idx;
        return TAILWIND[flip[1]][Math.max(0, Math.min(TW_SHADES.length - 1, useIdx))] || style.customColor;
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
    _applyStyleVars(el2, style) {
      for (const [key, value] of Object.entries(this._styleVars(style))) {
        el2.style.setProperty(key, value);
      }
    }
    /**
     * @param {SeparatorStyle} style
     */
    _updatePanelPreview(style) {
      if (!this._panelEl) return;
      this._panelEl.querySelectorAll("[data-plg-ss-live-line]").forEach((node) => {
        if (node instanceof HTMLElement) {
          node.setAttribute("data-plg-sidebar-separators-style", style.borderStyle);
          this._applyStyleVars(node, style);
        }
      });
      this._panelEl.querySelectorAll(`.${PANEL_CLASS}__preview`).forEach((node) => {
        if (node instanceof HTMLElement) this._applyStyleVars(node, style);
      });
    }
    _ensureRuntimeStyle() {
      if (document.getElementById(STYLE_ID2)) return;
      const style = document.createElement("style");
      style.id = STYLE_ID2;
      document.head.appendChild(style);
    }
    /**
     * One managed <style> holding the per-separator CSS vars, keyed on our own row id. This is
     * the "persistent CSS" half of cookbook §16: a row re-injected after a Thymer re-render is
     * already styled at first paint, before any JS runs.
     */
    _writeRuntimeStyle() {
      if (this._disabled) return;
      this._ensureRuntimeStyle();
      const styleEl = document.getElementById(STYLE_ID2);
      if (!(styleEl instanceof HTMLStyleElement)) return;
      const perSeparator = Array.from(this._separators.values()).map((sep) => this._separatorRuntimeRules(sep.id, sep.style, sep.collapsedStyle || sep.style)).join("\n");
      styleEl.textContent = `
			${SIDEBAR_LIST_SELECTOR} .${ROW_CLASS} { ${this._cssVarBlock(this._defaultStyle)} }
			${perSeparator}
		`;
    }
    /**
     * @param {string} id
     * @param {SeparatorStyle} expandedStyle
     * @param {SeparatorStyle} collapsedStyle
     */
    _separatorRuntimeRules(id, expandedStyle, collapsedStyle) {
      const selector = `${SIDEBAR_LIST_SELECTOR} .${ROW_CLASS}[${SEP_ID_ATTR}="${this._cssEscape(id)}"]`;
      const collapsedSelector = `.sidebar.sidebar-collapsed ${selector}`;
      const collapsedAltSelector = `.sidebar-collapsed ${selector}`;
      return `
			${selector} { ${this._cssVarBlock(expandedStyle)} }

			${collapsedSelector},
			${collapsedAltSelector} { ${this._cssVarBlock(collapsedStyle)} }

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
     * @param {number} x
     * @param {number} y
     */
    _poof(x, y) {
      const root = document.createElement("div");
      root.className = "plg-sidebar-separators-poof";
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
    /**
     * Re-assert our rows SYNCHRONOUSLY inside the observer callback. MutationObserver callbacks
     * are microtasks that drain before the next paint, so a row re-injected here lands in the
     * same frame Thymer re-rendered the sidebar — no flash. (cookbook §16)
     * @param {MutationRecord[]} mutations
     */
    _onMutations(mutations) {
      if (this._syncing) return;
      if (!this._mutationsTouchSidebar(mutations)) return;
      this._syncSeparatorRows();
    }
    /**
     * @param {MutationRecord[]} mutations
     */
    _mutationsTouchSidebar(mutations) {
      for (const mutation of mutations) {
        const target = mutation.target;
        if (target instanceof Element && target.closest(ROOT_SELECTOR)) return true;
        for (const list of [mutation.addedNodes, mutation.removedNodes]) {
          for (const node of list) {
            if (!(node instanceof Element)) continue;
            if (node.closest(ROOT_SELECTOR)) return true;
            if (node.matches(ROOT_SELECTOR) || node.querySelector(COLLECTION_ROW_SELECTOR)) return true;
          }
        }
      }
      return false;
    }
    /* ── Sidebar rows (the 2.0 core) ─────────────────────────────────────── */
    /** The container holding collection rows as flat children. */
    _sidebarList() {
      const el2 = document.querySelector(SIDEBAR_LIST_SELECTOR);
      return el2 instanceof HTMLElement ? el2 : null;
    }
    /**
     * STRICT live read of the collection rows, top to bottom — ignoring trashed ones and anything
     * parked inside a foreign container (sidebar-tweaks' bottom stack, widgets). Row PLACEMENT
     * must use this: it has to reflect the real DOM or we'd insert against stale anchors.
     * @returns {string[]}
     */
    _liveCollectionGuids() {
      const list = this._sidebarList();
      if (!list) return [];
      const out = [];
      for (const node of list.querySelectorAll(COLLECTION_ROW_SELECTOR)) {
        if (!(node instanceof HTMLElement)) continue;
        const guid = node.getAttribute("data-guid");
        if (!guid || guid.startsWith("trashed-")) continue;
        if (node.parentElement !== list) continue;
        out.push(guid);
        this._collNames.set(guid, (node.textContent || "").trim() || "Collection");
      }
      if (out.length && out.length >= this._collCache.length) this._collCache = out;
      return out;
    }
    /**
     * For RENDERING: the last known-good collection list. The panel can be built at a moment when
     * the sidebar isn't readable (it re-renders as the panel opens); a strict read would come back
     * empty and every separator would render as "Not attached to a collection" until something
     * forced a re-render. Falling back to the cache keeps the titles honest.
     * @returns {string[]}
     */
    _collectionGuids() {
      const live = this._liveCollectionGuids();
      return live.length ? live : this._collCache;
    }
    /** @param {string} guid */
    _collectionName(guid) {
      const row = document.querySelector(`${SIDEBAR_LIST_SELECTOR} ${COLLECTION_ROW_SELECTOR}[data-guid="${this._cssEscape(guid)}"]`);
      const text = row ? (row.textContent || "").trim() : "";
      if (text) {
        this._collNames.set(guid, text);
        return text;
      }
      return this._collNames.get(guid) || "Collection";
    }
    _scheduleOrphanReconcile() {
      if (this._orphanTimer) return;
      this._orphanTimer = setTimeout(() => {
        this._orphanTimer = null;
        void this._reconcileOrphans();
      }, 1500);
    }
    /**
     * The ONLY function allowed to persist a placement repair.
     *
     * A separator whose anchor is missing from the DOM is not necessarily orphaned — its
     * collection may simply not have painted yet. So we ask the authoritative source
     * (`data.getAllCollections()`) whether the collection still EXISTS. Only a collection that is
     * genuinely gone justifies moving the user's separator.
     */
    async _reconcileOrphans() {
      if (!this._isOwnWorkspace()) return;
      if (!this._separators.size) return;
      let live;
      try {
        const cols = await this.data.getAllCollections();
        live = new Set((cols || []).map((c) => c && c.getGuid ? c.getGuid() : "").filter(Boolean));
      } catch {
        return;
      }
      if (!live.size) return;
      if (!this._isOwnWorkspace()) return;
      const guids = this._collectionGuids();
      let repaired = false;
      for (const sep of this._separators.values()) {
        if (!sep.anchorGuid) continue;
        if (live.has(sep.anchorGuid)) continue;
        const fallback = this._lastGap.has(sep.id) ? (
          /** @type {number} */
          this._lastGap.get(sep.id)
        ) : guids.length;
        this._setGap(sep, fallback, guids);
        repaired = true;
      }
      if (!repaired) return;
      this._saveSeparators();
      this._writeRuntimeStyle();
      this._syncSeparatorRows();
      if (this._isPanelOpen()) this._renderPanel();
    }
    /**
     * Gap index of a separator: 0 = above the first collection, n = below the last.
     * NOTE: -1 means "anchor not present in the DOM read you passed in" — that is NOT the same as
     * "the collection was deleted". Only `_reconcileOrphans()` may conclude the latter.
     * @param {Separator} sep
     * @param {string[]} guids
     * @returns {number} -1 when its anchor is not in `guids`
     */
    _gapOf(sep, guids) {
      if (!sep.anchorGuid) return sep.side === "before" ? 0 : guids.length;
      const i = guids.indexOf(sep.anchorGuid);
      if (i < 0) return -1;
      return sep.side === "before" ? i : i + 1;
    }
    /**
     * Re-anchor a separator to a gap, PRESERVING its side preference where the gap allows it
     * (a gap can be expressed as {prev,'after'} or {next,'before'} — same place, different owner).
     * @param {Separator} sep
     * @param {number} gap
     * @param {string[]} guids
     */
    _setGap(sep, gap, guids) {
      const n = guids.length;
      const g = Math.max(0, Math.min(n, gap));
      if (!n) {
        sep.anchorGuid = null;
        sep.side = "before";
        return;
      }
      if (sep.side === "before" && g < n) {
        sep.anchorGuid = guids[g];
        sep.side = "before";
        return;
      }
      if (g > 0) {
        sep.anchorGuid = guids[g - 1];
        sep.side = "after";
        return;
      }
      sep.anchorGuid = guids[0];
      sep.side = "before";
    }
    /** @param {string | null} anchorGuid @param {'before'|'after'} side */
    _nextSeqAtEnd(anchorGuid, side) {
      let max = 0;
      for (const s of this._separators.values()) {
        if (s.anchorGuid === anchorGuid && s.side === side) max = Math.max(max, s.seq);
      }
      return max + 1;
    }
    /**
     * Build/park our rows against their anchors. Idempotent: only touches the DOM when a row is
     * missing or out of place, so it's safe to run on every sidebar mutation.
     */
    _syncSeparatorRows() {
      if (this._disabled) return;
      if (!this._isOwnWorkspace()) return;
      const list = this._sidebarList();
      if (!list) return;
      let collectionsChanged = false;
      this._syncing = true;
      try {
        for (const [id, row] of Array.from(this._rowEls.entries())) {
          if (!this._separators.has(id)) {
            row.remove();
            this._rowEls.delete(id);
          }
        }
        for (const node of document.querySelectorAll(`.${ROW_CLASS}`)) {
          const id = node.getAttribute(SEP_ID_ATTR) || "";
          if (!this._separators.has(id) || this._rowEls.get(id) !== node) node.remove();
        }
        const guids = this._liveCollectionGuids();
        if (!guids.length) return;
        const snapshot = guids.map((g) => `${g}:${this._collNames.get(g) || ""}`).join("|");
        if (snapshot !== this._collSnapshot) {
          this._collSnapshot = snapshot;
          collectionsChanged = true;
        }
        if (!this._migrationRan) {
          this._migrationRan = true;
          void this._migrateFromCollections();
        }
        if (Array.from(this._separators.values()).some((sep) => this._gapOf(sep, guids) === -1)) {
          this._scheduleOrphanReconcile();
        }
        const byGap = /* @__PURE__ */ new Map();
        for (const sep of this._separators.values()) {
          const g = this._gapOf(sep, guids);
          if (g < 0) continue;
          this._lastGap.set(sep.id, g);
          if (!byGap.has(g)) byGap.set(g, []);
          byGap.get(g).push(sep);
        }
        for (const [gap, seps] of byGap.entries()) {
          seps.sort((a, b) => a.seq - b.seq);
          const ref = this._gapRefNode(list, guids, gap);
          for (let i = seps.length - 1; i >= 0; i -= 1) {
            const sep = seps[i];
            const row = this._ensureRowEl(sep);
            const expectedNext = i < seps.length - 1 ? this._rowEls.get(seps[i + 1].id) || ref : ref;
            if (row.parentElement !== list || row.nextElementSibling !== expectedNext) {
              list.insertBefore(row, expectedNext);
            }
          }
        }
      } finally {
        this._syncing = false;
      }
      if (collectionsChanged && this._isPanelOpen()) this._renderPanel();
    }
    /**
     * The node a gap's separators must be inserted BEFORE.
     * Gap g < n → the collection row at index g (so we land after g-1's whole block, including
     * its indented children). Gap n → the first thing after the last collection's block.
     * @param {HTMLElement} list
     * @param {string[]} guids
     * @param {number} gap
     * @returns {Element | null}
     */
    _gapRefNode(list, guids, gap) {
      if (gap < guids.length) {
        return list.querySelector(`:scope > ${COLLECTION_ROW_SELECTOR}[data-guid="${this._cssEscape(guids[gap])}"]`);
      }
      const last = list.querySelector(`:scope > ${COLLECTION_ROW_SELECTOR}[data-guid="${this._cssEscape(guids[guids.length - 1])}"]`);
      if (!last) return null;
      let cur = last.nextElementSibling;
      while (cur) {
        if (cur.classList.contains(ROW_CLASS)) {
          cur = cur.nextElementSibling;
          continue;
        }
        if (cur.matches(BLOCK_STOP_SELECTOR)) return cur;
        cur = cur.nextElementSibling;
      }
      return null;
    }
    /** @param {Separator} sep */
    _ensureRowEl(sep) {
      let row = this._rowEls.get(sep.id);
      if (!row) {
        const el2 = document.createElement("div");
        el2.className = ROW_CLASS;
        el2.setAttribute(SEP_ID_ATTR, sep.id);
        el2.setAttribute(MARK_ATTR, "1");
        el2.setAttribute(LEGACY_MARK_ATTR, "1");
        el2.setAttribute("role", "button");
        el2.setAttribute("tabindex", "0");
        el2.setAttribute("aria-label", "Sidebar separator");
        this._rowEls.set(sep.id, el2);
        row = el2;
      }
      const panelOpen = this._isPanelOpen();
      row.setAttribute("data-plg-sidebar-separators-style", sep.style.borderStyle);
      if (panelOpen && this._activeOverrideId === sep.id) row.setAttribute("data-plg-sidebar-separators-active", "1");
      else row.removeAttribute("data-plg-sidebar-separators-active");
      if (panelOpen) row.setAttribute("data-plg-ss-selectable", "1");
      else row.removeAttribute("data-plg-ss-selectable");
      row.title = panelOpen ? "Click to edit this separator" : "Sidebar separator";
      return row;
    }
    /**
     * Move a separator one step up/down. Steps within its gap first (when separators are
     * stacked), then across to the neighbouring gap.
     * @param {string} id
     * @param {-1 | 1} dir
     */
    _moveSeparator(id, dir) {
      const sep = this._separators.get(id);
      if (!sep) return;
      const guids = this._collectionGuids();
      if (!guids.length) return;
      const gap = this._gapOf(sep, guids);
      if (gap < 0) return;
      const sameGap = Array.from(this._separators.values()).filter((s) => this._gapOf(s, guids) === gap).sort((a, b) => a.seq - b.seq);
      const idx = sameGap.findIndex((s) => s.id === id);
      const neighbour = sameGap[idx + dir];
      if (neighbour) {
        const tmp = sep.seq;
        sep.seq = neighbour.seq;
        neighbour.seq = tmp;
      } else {
        const target = gap + dir;
        if (target < 0 || target > guids.length) return;
        this._setGap(sep, target, guids);
        const destSeqs = Array.from(this._separators.values()).filter((s) => s.id !== id && this._gapOf(s, guids) === target).map((s) => s.seq);
        if (destSeqs.length) {
          sep.seq = dir === 1 ? Math.min(...destSeqs) - 1 : Math.max(...destSeqs) + 1;
        } else {
          sep.seq = 1;
        }
      }
      this._saveSeparators();
      this._syncSeparatorRows();
      this._renderPanel();
    }
    _isPanelOpen() {
      return !!(this._panelEl && document.contains(this._panelEl));
    }
    /**
     * A click on a separator must never reach Thymer (it would navigate) or Sidebar Tweaks (it
     * would collapse the sidebar). While the settings panel is open, it selects the separator
     * for editing — the row is `role="button"` precisely because it is one.
     * @param {Event} event
     */
    _onSeparatorActivate(event) {
      if (!(event.target instanceof Element)) return;
      const row = event.target.closest(`.${ROW_CLASS}`);
      if (!(row instanceof HTMLElement)) return;
      event.preventDefault();
      event.stopPropagation();
      if (event.type !== "click" || !this._isPanelOpen()) return;
      const id = row.getAttribute(SEP_ID_ATTR);
      if (!id || !this._separators.has(id)) return;
      this._selectSeparator(id);
    }
    /**
     * @param {string} id
     * @param {HTMLElement | null} source
     */
    _deleteSeparator(id, source = null) {
      if (!this._separators.has(id)) return;
      if (source) {
        const rect = source.getBoundingClientRect();
        this._poof(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }
      this._separators.delete(id);
      this._lastGap.delete(id);
      const row = this._rowEls.get(id);
      if (row) row.remove();
      this._rowEls.delete(id);
      if (this._activeOverrideId === id) this._activeOverrideId = null;
      this._saveSeparators();
      this._writeRuntimeStyle();
      this._syncSeparatorRows();
      this._renderPanel();
    }
    /* ── 1.x → 2.0 migration ─────────────────────────────────────────────
     *
     * 1.x separators were real collections. Convert each into a plugin-owned separator anchored
     * to the collection above it (read from the live sidebar DOM — that's the only place the
     * order lives), then TRASH the collection so it stops polluting @-refs and search.
     *
     * Ordering is defensive: persist first, trash second. A guid that is persisted but not yet
     * trashed is parked in `custom.pendingTrash` and retried on the next load, so a half-run can
     * never leave a blank collection behind — and never double-migrates (a migrated guid is
     * skipped even if its trash failed).
     */
    async _migrateFromCollections() {
      let conf = {};
      try {
        conf = this.getConfiguration?.() || {};
      } catch {
        return;
      }
      const custom = conf.custom && typeof conf.custom === "object" ? conf.custom : {};
      const pendingTrash = Array.isArray(custom.pendingTrash) ? custom.pendingTrash.slice() : [];
      const legacy = [];
      try {
        const collections = await this.data.getAllCollections();
        for (const collection of collections || []) {
          if (!collection || !collection.getGuid || !collection.getConfiguration) continue;
          const cconf = collection.getConfiguration();
          const marker = cconf && cconf.custom && typeof cconf.custom === "object" ? cconf.custom[PLUGIN_KEY] || cconf.custom[LEGACY_PLUGIN_KEY] : null;
          if (!marker || marker.isSeparator !== true) continue;
          const guid = collection.getGuid();
          if (pendingTrash.includes(guid)) continue;
          legacy.push({ guid, marker });
        }
      } catch {
        return;
      }
      if (legacy.length) {
        const list = this._sidebarList();
        const rows = list ? Array.from(list.querySelectorAll(COLLECTION_ROW_SELECTOR)) : [];
        const legacyGuids = new Set(legacy.map((l) => l.guid));
        let seq = 1;
        for (const { guid, marker } of legacy) {
          const idx = rows.findIndex((r) => r.getAttribute("data-guid") === guid);
          let anchorGuid = null;
          if (idx > 0) {
            for (let i = idx - 1; i >= 0; i -= 1) {
              const g = rows[i].getAttribute("data-guid");
              if (g && !legacyGuids.has(g) && !g.startsWith("trashed-")) {
                anchorGuid = g;
                break;
              }
            }
          }
          const style = this._normalizeStyle(marker.style);
          const sep = {
            id: this._makeSeparatorId(),
            anchorGuid,
            side: anchorGuid ? "after" : "before",
            seq: seq++,
            presetId: typeof marker.presetId === "string" ? marker.presetId : null,
            style,
            collapsedStyle: this._normalizeStyle(marker.collapsedStyle || marker.style)
          };
          this._separators.set(sep.id, sep);
          pendingTrash.push(guid);
        }
        this._rev += 1;
        try {
          localStorage.setItem(this._storeKey(), JSON.stringify({ rev: this._rev, separators: this._serializeSeparators() }));
        } catch {
        }
        this._writeRuntimeStyle();
        this._syncSeparatorRows();
        try {
          await this._commitToConfig({
            pendingTrash,
            migrationBackup: legacy.reduce((acc, l) => {
              acc[l.guid] = l.marker;
              return acc;
            }, {})
          });
        } catch {
          this._toast("Sidebar Separators: could not save the 2.0 migration; your old separators were left alone.");
          return;
        }
      }
      if (!pendingTrash.length) return;
      const stillPending = [];
      for (const guid of pendingTrash) {
        try {
          const plugin = this.data.getPluginByGuid(guid);
          if (plugin && plugin.trashPlugin) plugin.trashPlugin();
          else stillPending.push(guid);
        } catch {
          stillPending.push(guid);
        }
      }
      if (stillPending.length !== pendingTrash.length) {
        await this._commitToConfig({ pendingTrash: stillPending });
      }
      if (legacy.length) this._toast(`Sidebar Separators 2.0: converted ${legacy.length} separator${legacy.length === 1 ? "" : "s"}.`);
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
			/* Our own row. No native children to cloak \u2014 it just draws the line. */
			${SIDEBAR_LIST_SELECTOR} .${ROW_CLASS} {
				position: relative;
				display: block;
				box-sizing: border-box;
				width: 100%;
				flex: 0 0 auto;
				min-height: var(--plg-ss-height, 20px);
				height: var(--plg-ss-height, 20px);
				margin: 0;
				padding: 0;
				overflow: hidden;
				font-size: 0;
				line-height: 0;
				cursor: default;
				color: var(--text-default, currentColor);
			}

			/* Clickable only while the settings panel is open \u2014 that's when a click selects it. */
			${SIDEBAR_LIST_SELECTOR} .${ROW_CLASS}[data-plg-ss-selectable="1"] {
				cursor: pointer;
			}

			${SIDEBAR_LIST_SELECTOR} .${ROW_CLASS}:focus-visible {
				outline: 2px solid var(--tps-accent, currentColor);
				outline-offset: -2px;
			}

			/* Mirrors the ring on the panel's list row, so it's obvious which separator the
			   settings below are editing. */
			${SIDEBAR_LIST_SELECTOR} .${ROW_CLASS}[data-plg-sidebar-separators-active="1"] {
				background: color-mix(in srgb, var(--tps-accent, currentColor) 12%, transparent);
				box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--tps-accent, currentColor) 50%, transparent);
				border-radius: 4px;
			}

			/* While Thymer drags a real collection, get out of the way entirely so its
			   drop hit-testing sees the sidebar exactly as it would without this plugin. */
			body.${DRAG_HIDE_CLASS} ${SIDEBAR_LIST_SELECTOR} .${ROW_CLASS} {
				display: none !important;
			}

			${SIDEBAR_LIST_SELECTOR} .${ROW_CLASS}::after {
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

			${SIDEBAR_LIST_SELECTOR} .${ROW_CLASS}[data-plg-sidebar-separators-style="gradient"]::after {
				border-top: 0;
				height: max(var(--plg-ss-thickness, 1px), 1px);
				background: var(--plg-ss-gradient);
			}

			${SIDEBAR_LIST_SELECTOR} .${ROW_CLASS}[data-plg-sidebar-separators-style="double"]::after {
				border-top: 0;
				height: calc((var(--plg-ss-thickness, 1px) * 2) + var(--plg-ss-double-gap, 2px));
				background:
					linear-gradient(var(--plg-ss-color, currentColor) 0 0) top / 100% var(--plg-ss-thickness, 1px) no-repeat,
					linear-gradient(var(--plg-ss-color, currentColor) 0 0) bottom / 100% var(--plg-ss-thickness, 1px) no-repeat;
			}

			/* \u2500\u2500 Separator list \u2014 the panel's spine \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
			.${PANEL_CLASS}__seplist {
				display: flex;
				flex-direction: column;
				gap: 6px;
				max-width: 1120px;
			}

			.${PANEL_CLASS}__seprow {
				display: flex;
				align-items: center;
				gap: 8px;
				padding: 4px 6px 4px 4px;
				border: 1px solid var(--tps-border, color-mix(in srgb, currentColor 14%, transparent));
				border-radius: 9px;
				background: var(--tps-bg-input, transparent);
			}

			.${PANEL_CLASS}__seprow:hover {
				border-color: var(--tps-border-strong, color-mix(in srgb, currentColor 26%, transparent));
			}

			/* The ring: this separator is what everything below edits. */
			.${PANEL_CLASS}__seprow.is-active {
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 60%, transparent);
				background: color-mix(in srgb, var(--tps-accent, currentColor) 10%, transparent);
				box-shadow: 0 0 0 1px color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
			}

			.${PANEL_CLASS}__seprow-main {
				display: flex;
				align-items: center;
				gap: 12px;
				flex: 1 1 auto;
				min-width: 0;
				padding: 6px 8px;
				border: 0;
				border-radius: 6px;
				background: transparent;
				color: var(--text-default, currentColor);
				font: inherit;
				text-align: left;
				cursor: pointer;
			}

			.${PANEL_CLASS}__seprow-rail {
				display: flex;
				align-items: center;
				justify-content: var(--plg-ss-justify, center);
				flex: 0 0 auto;
				width: 84px;
				height: 20px;
				padding-inline: 4px;
				border-radius: 5px;
				background: var(--panel-bg-color, var(--bg-default, rgba(127,127,127,0.06)));
			}

			.${PANEL_CLASS}__seprow-title {
				flex: 1 1 auto;
				min-width: 0;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 13px;
				font-weight: 600;
			}

			.${PANEL_CLASS}__seprow.is-active .${PANEL_CLASS}__seprow-title {
				color: var(--tps-accent, currentColor);
			}

			.${PANEL_CLASS}__seprow-actions {
				display: inline-flex;
				align-items: center;
				gap: 4px;
				flex: 0 0 auto;
			}

			.${PANEL_CLASS}__sepbtn {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 28px;
				height: 28px;
				padding: 0;
				border: 1px solid var(--tps-border, color-mix(in srgb, currentColor 16%, transparent));
				border-radius: 7px;
				background: transparent;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
				font-size: 15px;
				line-height: 1;
				cursor: pointer;
			}

			.${PANEL_CLASS}__sepbtn:hover:not(:disabled) {
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 8%, transparent));
				color: var(--text-default, currentColor);
			}

			.${PANEL_CLASS}__sepbtn:disabled {
				opacity: 0.3;
				cursor: default;
			}

			.${PANEL_CLASS}__sepbtn.is-danger {
				color: var(--enum-red-fg, var(--tps-danger, #ef4444));
			}

			.${PANEL_CLASS}__sepbtn.is-danger:hover:not(:disabled) {
				background: color-mix(in srgb, var(--enum-red-fg, var(--tps-danger, #ef4444)) 16%, transparent);
				border-color: color-mix(in srgb, var(--enum-red-fg, var(--tps-danger, #ef4444)) 42%, transparent);
			}

			/* "Moves with" anchor picker in the settings panel. */
			.${PANEL_CLASS}__anchor-row {
				display: flex;
				align-items: center;
				gap: 8px;
				flex-wrap: wrap;
			}

			.${PANEL_CLASS}__anchor-btn {
				display: inline-flex;
				align-items: center;
				height: 32px;
				padding: 0 14px;
				border: 1px solid var(--tps-border, color-mix(in srgb, currentColor 16%, transparent));
				border-radius: 7px;
				background: transparent;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
				font: inherit;
				font-size: 12px;
				font-weight: 600;
				cursor: pointer;
				white-space: nowrap;
			}

			.${PANEL_CLASS}__anchor-btn:hover {
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 6%, transparent));
				color: var(--text-default, currentColor);
			}

			.${PANEL_CLASS}__anchor-btn.is-active {
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 55%, transparent);
				background: color-mix(in srgb, var(--tps-accent, currentColor) 14%, transparent);
				color: var(--tps-accent, currentColor);
			}

			.${PANEL_CLASS}__editor-card,
			.${PANEL_CLASS}__empty-state,
			.${PANEL_CLASS} .tps-section {
				max-width: 1120px;
			}

			.${PANEL_CLASS}__top-actions {
				max-width: 1120px;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				gap: 10px;
				margin: -4px 0 12px;
			}

			/* Preset chips + "Set preset" \u2014 pushed to the far right of the actions row. */
			.${PANEL_CLASS}__presets {
				margin-left: auto;
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				justify-content: flex-end;
				gap: 6px;
			}

			.${PANEL_CLASS}__preset {
				display: inline-flex;
				align-items: center;
				height: 28px;
				border: 1px solid var(--tps-border, color-mix(in srgb, currentColor 14%, transparent));
				border-radius: 7px;
				overflow: hidden;
			}

			.${PANEL_CLASS}__preset.is-active {
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 55%, transparent);
				background: color-mix(in srgb, var(--tps-accent, currentColor) 14%, transparent);
			}

			.${PANEL_CLASS}__preset-apply {
				height: 100%;
				padding: 0 10px;
				border: 0;
				background: transparent;
				color: var(--text-default, currentColor);
				font: inherit;
				font-size: 12px;
				font-weight: 600;
				cursor: pointer;
				max-width: 160px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.${PANEL_CLASS}__preset.is-active .${PANEL_CLASS}__preset-apply {
				color: var(--tps-accent, currentColor);
			}

			.${PANEL_CLASS}__preset-apply:hover {
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 6%, transparent));
			}

			.${PANEL_CLASS}__preset-icon {
				height: 100%;
				width: 24px;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				border: 0;
				border-left: 1px solid var(--tps-border, color-mix(in srgb, currentColor 12%, transparent));
				background: transparent;
				color: var(--text-muted, color-mix(in srgb, currentColor 60%, transparent));
				font: inherit;
				font-size: 12px;
				line-height: 1;
				cursor: pointer;
			}

			.${PANEL_CLASS}__preset-icon:hover {
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 6%, transparent));
				color: var(--text-default, currentColor);
			}

			.${PANEL_CLASS}__preset-icon--danger:hover {
				color: var(--enum-red-fg, #e5484d);
			}

			.${PANEL_CLASS}__preset-add {
				height: 28px;
				padding: 0 12px;
				border: 1px dashed var(--tps-border-strong, color-mix(in srgb, currentColor 28%, transparent));
				border-radius: 7px;
				background: transparent;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
				font: inherit;
				font-size: 12px;
				font-weight: 600;
				cursor: pointer;
			}

			.${PANEL_CLASS}__preset-add:hover {
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 50%, transparent);
				color: var(--tps-accent, var(--text-default, currentColor));
			}

			/* "Editing preset" bar. */
			.${PANEL_CLASS}__preset-editbar {
				max-width: 1120px;
				display: flex;
				align-items: center;
				gap: 12px;
				flex-wrap: wrap;
				margin: -4px 0 12px;
			}

			.${PANEL_CLASS}__preset-editbar-label {
				font-size: 10px;
				font-weight: 700;
				letter-spacing: 0.08em;
				text-transform: uppercase;
				color: var(--tps-text-faint, var(--text-muted, color-mix(in srgb, currentColor 55%, transparent)));
			}

			.${PANEL_CLASS}__preset-name-input {
				height: 30px;
				min-width: 180px;
				padding: 0 10px;
				border: 1px solid var(--tps-border, color-mix(in srgb, currentColor 16%, transparent));
				border-radius: 7px;
				background: var(--tps-bg-input, transparent);
				color: var(--text-default, currentColor);
				font: inherit;
				font-size: 13px;
				font-weight: 600;
			}

			.${PANEL_CLASS}__preset-name-input:focus {
				outline: none;
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 55%, transparent);
			}

			.${PANEL_CLASS}__preset-editbar-count {
				margin-left: auto;
				font-size: 12px;
				color: var(--text-muted, color-mix(in srgb, currentColor 60%, transparent));
			}

			/* Neutral back button (matches build-title-from-properties) \u2014 never the
			   green primary/Add-Separator look. */
			.${PANEL_CLASS}__back-btn {
				display: inline-flex;
				align-items: center;
				gap: 4px;
				height: 30px;
				padding: 0 12px;
				border: 1px solid var(--tps-border, color-mix(in srgb, currentColor 16%, transparent));
				border-radius: 7px;
				background: var(--tps-bg-input, transparent);
				color: var(--text-default, currentColor);
				font: inherit;
				font-size: 12px;
				font-weight: 600;
				cursor: pointer;
			}

			.${PANEL_CLASS}__back-btn:hover {
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 6%, transparent));
				border-color: var(--tps-border-strong, color-mix(in srgb, currentColor 28%, transparent));
			}

			.${PANEL_CLASS}__back-btn .ti {
				font-size: 15px;
				line-height: 1;
			}

			/* Save = semantic success action (green), per the panel design system. */
			.${PANEL_CLASS}__preset-save-btn {
				height: 30px;
				padding: 0 16px;
				border: 1px solid color-mix(in srgb, var(--tps-success, #3fb950) 55%, transparent);
				border-radius: 7px;
				background: var(--tps-success-soft, color-mix(in srgb, var(--tps-success, #3fb950) 14%, transparent));
				color: var(--tps-success, #3fb950);
				font: inherit;
				font-size: 12px;
				font-weight: 650;
				cursor: pointer;
			}

			.${PANEL_CLASS}__preset-save-btn:hover {
				background: color-mix(in srgb, var(--tps-success, #3fb950) 24%, transparent);
			}


			.${PANEL_CLASS}__primary {
				height: 28px;
				padding: 0 10px;
				border: 1px solid color-mix(in srgb, var(--tps-accent, currentColor) 50%, transparent);
				border-radius: 6px;
				background: color-mix(in srgb, var(--tps-accent, currentColor) 16%, transparent);
				color: var(--tps-accent, var(--text-default, currentColor));
				font: inherit;
				font-size: 12px;
				font-weight: 650;
				cursor: pointer;
			}

			.${PANEL_CLASS}__primary:hover {
				background: color-mix(in srgb, var(--tps-accent, currentColor) 24%, transparent);
			}

			.${PANEL_CLASS}__preview {
				max-width: 1120px;
				min-height: 52px;
				display: flex;
				align-items: center;
				justify-content: var(--plg-ss-justify, center);
				/* Fixed preview chrome \u2014 obvious interior padding, independent of the
				   separator's own side inset (which is applied to the rail below). */
				padding: 16px 20px;
				margin: 0 0 14px;
				border: 1px solid var(--tps-divider, var(--divider-color, color-mix(in srgb, currentColor 12%, transparent)));
				border-radius: 0;
				/* Exact live sidebar color is set inline; this is the fallback. */
				background: var(--panel-bg-color, var(--bg-default, rgba(127,127,127,0.06)));
			}

			.${PANEL_CLASS}__preview-rail {
				display: flex;
				align-items: center;
				justify-content: var(--plg-ss-justify, center);
				width: 100%;
				/* Separator's own side inset, shown inside the padded preview. */
				padding-inline: var(--plg-ss-inset, 0px);
			}

			.${PANEL_CLASS}__preview + .tps-section {
				padding-top: 0;
				border-top: 0;
			}

			.${PANEL_CLASS} .tps-section + .tps-section {
				margin-top: 16px;
				padding-top: 16px;
				border-top: 1px solid var(--tps-divider, var(--divider-color, color-mix(in srgb, currentColor 14%, transparent)));
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
				font-size: 14px;
				line-height: 1.2;
				font-weight: 600;
				letter-spacing: 0;
				text-transform: none;
				color: var(--tps-text, var(--text-default, currentColor));
				margin-bottom: 4px;
			}

			.${PANEL_CLASS}__eyebrow {
				font-size: 11px;
				line-height: 1;
				font-weight: 700;
				letter-spacing: 0.06em;
				text-transform: uppercase;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
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
				/* Same treatment as the header's INSTRUCTIONS label (see
				   .tps-plugin-header-helper-toggle in shared/settings-ui/components.css), so all
				   secondary copy in the panel reads at one weight. Thymer never defines
				   --text-muted, so the old fallback landed close to body text on a dark panel. */
				color: inherit;
				opacity: 0.28;
			}

			/* Inside a section the container is already the full 1120px \u2014 the 520px measure cap
			   just wraps the line early and leaves a dead gutter. (Kept on the centered
			   empty-state copy, where a reading measure IS the right call.) */
			.${PANEL_CLASS} .tps-section .${PANEL_CLASS}__helper {
				max-width: none;
			}

			.${PANEL_CLASS} .tps-section .${PANEL_CLASS}__helper + .${PANEL_CLASS}__helper {
				margin-top: 4px;
			}

			.${PANEL_CLASS}__helper + .${PANEL_CLASS}__anchor-row {
				margin-top: 10px;
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

			.${PANEL_CLASS}__line[data-plg-sidebar-separators-style="gradient"]::before {
				border-top: 0;
				height: max(var(--plg-ss-thickness, 1px), 1px);
				background: var(--plg-ss-gradient);
			}

			.${PANEL_CLASS}__line[data-plg-sidebar-separators-style="double"] {
				height: calc((var(--plg-ss-thickness, 1px) * 2) + var(--plg-ss-double-gap, 2px));
			}

			.${PANEL_CLASS}__line[data-plg-sidebar-separators-style="double"]::before {
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
				border: 1px solid var(--tps-border, var(--divider-color, color-mix(in srgb, currentColor 18%, transparent)));
				border-radius: 8px;
				background: var(--tps-bg-input, color-mix(in srgb, currentColor 6%, transparent)));
				color: inherit;
				font: inherit;
				text-align: left;
				cursor: pointer;
				transition: background-color 120ms ease-out, border-color 120ms ease-out, box-shadow 120ms ease-out;
			}

			.${PANEL_CLASS}__preset-row:hover {
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 8%, transparent)));
				border-color: var(--tps-border-strong, var(--divider-color, color-mix(in srgb, currentColor 32%, transparent)));
			}

			.${PANEL_CLASS}__preset-row.is-active {
				background: color-mix(in srgb, var(--tps-accent, currentColor) 12%, var(--tps-bg-input, transparent));
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 50%, transparent);
				box-shadow: 0 0 0 1px color-mix(in srgb, var(--tps-accent, currentColor) 22%, transparent);
			}

			.${PANEL_CLASS}__preset-swatch {
				display: block;
				width: 22px;
				height: 22px;
				border-radius: 999px;
				box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, color-mix(in srgb, currentColor 10%, transparent)), 0 0 0 1px color-mix(in srgb, currentColor 18%, transparent);
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
				color: var(--tps-accent, currentColor);
			}

			.${PANEL_CLASS}__preset-hint {
				font-size: 11.5px;
				line-height: 1.4;
				color: var(--tps-text-muted, var(--text-muted, color-mix(in srgb, currentColor 62%, transparent)));
			}

			.${PANEL_CLASS}__preset-check {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 18px;
				height: 18px;
				font-size: 14px;
				font-weight: 700;
				color: var(--tps-accent, currentColor);
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
				flex-wrap: nowrap;
				gap: 4px;
				min-width: 0;
			}

			.${PANEL_CLASS}__seg {
				height: 28px;
				padding: 0 8px;
				border: 1px solid transparent;
				border-radius: 6px;
				background: transparent;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
				font: inherit;
				font-size: 12px;
				cursor: pointer;
			}

			/* Icon buttons flex around ~40px so all fit one row inside a column cell. */
			.${PANEL_CLASS}__seg--icon {
				flex: 1 1 40px;
				min-width: 32px;
				max-width: 44px;
				padding: 0;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}

			.${PANEL_CLASS}__seg:hover {
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 6%, transparent));
				color: var(--text-default, currentColor);
			}

			.${PANEL_CLASS}__seg.is-active {
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 52%, transparent);
				background: color-mix(in srgb, var(--tps-accent, currentColor) 14%, transparent);
				color: var(--tps-accent, var(--text-default, currentColor));
			}

			/* Standard text-align glyphs (inline-SVG masks) tinted via currentColor. */
			.${PANEL_CLASS}__seg-glyph {
				display: block;
				width: 18px;
				height: 18px;
				background-color: currentColor;
				pointer-events: none;
				-webkit-mask: center / 18px 18px no-repeat;
				mask: center / 18px 18px no-repeat;
			}

			.${PANEL_CLASS}__seg[data-align="left"] .${PANEL_CLASS}__seg-glyph {
				-webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%3E%3Cpath%20d='M4%206h16'/%3E%3Cpath%20d='M4%2012h10'/%3E%3Cpath%20d='M4%2018h14'/%3E%3C/svg%3E");
				mask-image: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%3E%3Cpath%20d='M4%206h16'/%3E%3Cpath%20d='M4%2012h10'/%3E%3Cpath%20d='M4%2018h14'/%3E%3C/svg%3E");
			}

			.${PANEL_CLASS}__seg[data-align="center"] .${PANEL_CLASS}__seg-glyph {
				-webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%3E%3Cpath%20d='M4%206h16'/%3E%3Cpath%20d='M8%2012h8'/%3E%3Cpath%20d='M6%2018h12'/%3E%3C/svg%3E");
				mask-image: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%3E%3Cpath%20d='M4%206h16'/%3E%3Cpath%20d='M8%2012h8'/%3E%3Cpath%20d='M6%2018h12'/%3E%3C/svg%3E");
			}

			.${PANEL_CLASS}__seg[data-align="right"] .${PANEL_CLASS}__seg-glyph {
				-webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%3E%3Cpath%20d='M4%206h16'/%3E%3Cpath%20d='M10%2012h10'/%3E%3Cpath%20d='M6%2018h14'/%3E%3C/svg%3E");
				mask-image: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%3E%3Cpath%20d='M4%206h16'/%3E%3Cpath%20d='M10%2012h10'/%3E%3Cpath%20d='M6%2018h14'/%3E%3C/svg%3E");
			}

			/* Border style previews: a real line drawn in the button, tinted via currentColor. */
			.${PANEL_CLASS}__seg-line {
				display: block;
				width: 22px;
				height: 0;
				pointer-events: none;
			}

			.${PANEL_CLASS}__seg[data-shape="solid"] .${PANEL_CLASS}__seg-line {
				border-top: 2px solid currentColor;
			}

			.${PANEL_CLASS}__seg[data-shape="dashed"] .${PANEL_CLASS}__seg-line {
				border-top: 2px dashed currentColor;
			}

			.${PANEL_CLASS}__seg[data-shape="dotted"] .${PANEL_CLASS}__seg-line {
				border-top: 2px dotted currentColor;
			}

			.${PANEL_CLASS}__seg[data-shape="double"] .${PANEL_CLASS}__seg-line {
				border-top: 3px double currentColor;
			}

			.${PANEL_CLASS}__seg[data-shape="gradient"] .${PANEL_CLASS}__seg-line {
				height: 2px;
				border-top: 0;
				background: linear-gradient(90deg, transparent, currentColor 50%, transparent);
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
			}

			.${PANEL_CLASS}__slider-value {
				font-size: 12px;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
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
				border: 1px solid var(--tps-divider, color-mix(in srgb, currentColor 14%, transparent));
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
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 6%, transparent));
				border-color: var(--divider-color, color-mix(in srgb, currentColor 22%, transparent));
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
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
			}

			.${PANEL_CLASS}__field-label,
			.${PANEL_CLASS}__colors-label,
			.${PANEL_CLASS}__custom-color span {
				font-size: 11px;
				font-weight: 700;
				letter-spacing: 0.06em;
				text-transform: uppercase;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
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
				border: 1px solid var(--divider-color, color-mix(in srgb, currentColor 20%, transparent));
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
				border: 1px solid var(--tps-divider, color-mix(in srgb, currentColor 14%, transparent));
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
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 6%, transparent));
			}

			.${PANEL_CLASS}__color.is-active {
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 52%, transparent);
				background: color-mix(in srgb, var(--tps-accent, currentColor) 14%, transparent);
			}

			.${PANEL_CLASS}__color-dot {
				width: 14px;
				height: 14px;
				flex: 0 0 auto;
				border-radius: 999px;
				box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, color-mix(in srgb, currentColor 10%, transparent)), 0 0 0 1px color-mix(in srgb, currentColor 12%, transparent);
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
				border-top: 1px solid var(--tps-divider, var(--divider-color, color-mix(in srgb, currentColor 10%, transparent)));
			}
			.${COLLECTION_COLORS_CLASS}__palette-row {
				display: flex;
				flex-wrap: nowrap;
				align-items: center;
				gap: 12px;
				padding: 8px 0;
				border-bottom: 1px solid var(--tps-divider, var(--divider-color, color-mix(in srgb, currentColor 8%, transparent)));
			}
			.${COLLECTION_COLORS_CLASS}__palette-row.is-truncated .${COLLECTION_COLORS_CLASS}__palette-row-dots {
				display: none;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row:last-child { border-bottom: 0; }
			.${COLLECTION_COLORS_CLASS}__palette-row:hover { background: var(--tps-bg-hover, color-mix(in srgb, currentColor 4%, transparent)); }
			.${COLLECTION_COLORS_CLASS}__palette-row.is-active {
				background: var(--tps-accent-soft, color-mix(in srgb, var(--tps-accent, currentColor) 12%, transparent));
				padding-left: 8px;
				padding-right: 8px;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row.is-active .${COLLECTION_COLORS_CLASS}__palette-row-name {
				color: var(--tps-accent, currentColor);
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
				box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, color-mix(in srgb, currentColor 8%, transparent));
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
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 10%, transparent));
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
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 6%, transparent));
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
				background: var(--tps-accent-soft, color-mix(in srgb, var(--tps-accent, currentColor) 12%, transparent));
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
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 10%, transparent)));
				border-color: var(--tps-border, color-mix(in srgb, currentColor 22%, transparent));
				color: var(--tps-text, var(--text-default, currentColor));
				outline: none;
			}
			.${COLLECTION_COLORS_CLASS}__shade-btn.is-active {
				background: var(--tps-accent-soft, color-mix(in srgb, var(--tps-accent, currentColor) 15%, transparent));
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
				color: var(--tps-accent, currentColor);
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
				box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, color-mix(in srgb, currentColor 6%, transparent));
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
				border-top: 1px solid var(--tps-divider, color-mix(in srgb, currentColor 12%, transparent));
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
				background: color-mix(in srgb, currentColor 12%, transparent); border-radius: 6px; padding: 2px;
			}
			.${COLLECTION_COLORS_CLASS}__format-btn {
				border: 0; background: transparent; color: inherit;
				padding: 3px 8px; border-radius: 4px;
				cursor: pointer; font-size: 11px; letter-spacing: 0.04em;
			}
			.${COLLECTION_COLORS_CLASS}__format-btn.is-active {
				background: color-mix(in srgb, currentColor 22%, transparent); font-weight: 600;
			}
			.${COLLECTION_COLORS_CLASS}__inputs { display: flex; gap: 6px; align-items: center; }
			.${COLLECTION_COLORS_CLASS}__hex-input,
			.${COLLECTION_COLORS_CLASS}__num input {
				background: color-mix(in srgb, currentColor 12%, transparent);
				border: 1px solid color-mix(in srgb, currentColor 18%, transparent);
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
				background: color-mix(in srgb, currentColor 12%, transparent);
				border: 1px solid color-mix(in srgb, currentColor 18%, transparent);
				color: inherit;
				padding: 4px 9px; border-radius: 4px;
				font-size: 12px; cursor: pointer;
			}
			.${COLLECTION_COLORS_CLASS}__random:hover { background: color-mix(in srgb, currentColor 20%, transparent); }
			.${COLLECTION_COLORS_CLASS}__actions {
				display: flex; gap: 6px; justify-content: flex-end;
			}
			.${COLLECTION_COLORS_CLASS}__btn {
				border: 0; padding: 5px 12px; border-radius: 4px;
				font-size: 12px; cursor: pointer;
			}
			.${COLLECTION_COLORS_CLASS}__btn--ghost { background: transparent; color: inherit; opacity: 0.75; }
			.${COLLECTION_COLORS_CLASS}__btn--primary {
				background: color-mix(in srgb, var(--tps-accent, currentColor) 18%, transparent);
				color: var(--tps-accent, currentColor); font-weight: 600;
			}
			.${COLLECTION_COLORS_CLASS}__btn--primary:hover { background: color-mix(in srgb, var(--tps-accent, currentColor) 30%, transparent); }
			@media (max-width: 560px) {
				.${COLLECTION_COLORS_CLASS}__custom-panel {
					grid-template-columns: 1fr;
				}
			}

			.${PANEL_CLASS}__muted,
			.${PANEL_CLASS}__empty {
				font-size: 12px;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
			}

			.${PANEL_CLASS}__actions {
				display: flex;
				align-items: center;
				gap: 8px;
				flex-wrap: wrap;
			}

			.plg-sidebar-separators-poof {
				position: fixed;
				z-index: 999999;
				width: 2px;
				height: 2px;
				pointer-events: none;
				transform: translate(-1px, -1px);
			}

			.plg-sidebar-separators-poof span {
				position: absolute;
				left: 0;
				top: 0;
				width: 6px;
				height: 6px;
				border-radius: 999px;
				background: var(--tps-accent, var(--text-default, currentColor));
				transform: rotate(var(--angle)) translateX(0) scale(0.7);
				opacity: 0.9;
				animation: plg-sidebar-separators-poof 620ms cubic-bezier(0.15, 0.8, 0.2, 1) forwards;
			}

			@keyframes plg-sidebar-separators-poof {
				65% {
					opacity: 0.8;
					transform: rotate(var(--angle)) translateX(var(--distance)) scale(1);
				}
				to {
					opacity: 0;
					transform: rotate(var(--angle)) translateX(calc(var(--distance) + 8px)) scale(0);
				}
			}


			@media (prefers-reduced-motion: reduce) {
				.plg-sidebar-separators-poof span {
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
var Plugin = plugins.Plugin;
