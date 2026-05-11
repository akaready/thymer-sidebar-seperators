/**
 * Sidebar Seperators — add movable theme-colored separators to the collections list.
 *
 * AppPlugin (global). Open via command palette: "Plugin: Sidebar Seperators".
 *
 * DANGER: This plugin pins to Thymer's current sidebar DOM:
 *   .sidebar, .sidebar--icons, .sidebar-item-collection[data-guid]
 * The separator is a real collection marked in config.custom.sidebarSeperators,
 * so native collection ordering/dragging remains owned by Thymer.
 * Last verified from repo patterns on 2026-05-06.
 */

import {
	PANEL_CSS,
	h,
	panel,
	pluginHeader,
} from '../../_panel-system/helpers.js';
import {
	collectRenderedThemeColors,
} from '../../_panel-system/theme-vars.js';

const PLUGIN_KEY = 'sidebarSeperators';
const MARK_ATTR = 'data-plg-sidebar-seperator';
const PANEL_CLASS = 'plg-sidebar-seperators-panel';
const COLLECTION_COLORS_CLASS = 'plg-collection-colors';
const PANEL_TYPE = 'sidebar-seperators-settings';
const STYLE_ID = 'plg-sidebar-seperators-runtime-style';
const ACTION_BUTTON_CLASS = 'plg-sidebar-seperators-action-button';
const EDIT_BUTTON_CLASS = 'plg-sidebar-seperators-edit-button';
const DELETE_BUTTON_CLASS = 'plg-sidebar-seperators-delete-button';
const ACTION_OVERLAY_CLASS = 'plg-sidebar-seperators-action-overlay';
const ROOT_SELECTOR = '.sidebar--icons, .sidebar';
const COLLECTION_ROW_SELECTOR = '.sidebar-item-collection[data-guid]';
const OUTSIDE_HOLD_MS = 3000;
const THEME_ACCENT_CSS = 'var(--logo-color, var(--accent-color, var(--color-accent, var(--theme-accent, var(--color-primary, #3b82f6)))))';
const SEPARATOR_COLLECTION_NAME = '\u200b';
const SIDEBAR_DIVIDER_VAR_VALUE = 'theme-var:--sidebar-divider-color';
const SIDEBAR_DIVIDER_VAR_CSS = 'var(--sidebar-divider-color, var(--divider-color, var(--border-default, rgba(127,127,127,0.32))))';

const BORDER_STYLES = /** @type {const} */ ([
	'solid',
	'dashed',
	'dotted',
	'double',
	'gradient',
]);

const ALIGNMENTS = /** @type {const} */ ([
	'left',
	'center',
	'right',
]);

const TAILWIND_SHADES = Object.freeze([100, 200, 300, 400, 500, 600, 700, 800, 900]);

const TAILWIND_FAMILIES = Object.freeze({
	Slate: { 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a' },
	Gray: { 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db', 400: '#9ca3af', 500: '#6b7280', 600: '#4b5563', 700: '#374151', 800: '#1f2937', 900: '#111827' },
	Zinc: { 100: '#f4f4f5', 200: '#e4e4e7', 300: '#d4d4d8', 400: '#a1a1aa', 500: '#71717a', 600: '#52525b', 700: '#3f3f46', 800: '#27272a', 900: '#18181b' },
	Neutral: { 100: '#f5f5f5', 200: '#e5e5e5', 300: '#d4d4d4', 400: '#a3a3a3', 500: '#737373', 600: '#525252', 700: '#404040', 800: '#262626', 900: '#171717' },
	Red: { 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5', 400: '#f87171', 500: '#ef4444', 600: '#dc2626', 700: '#b91c1c', 800: '#991b1b', 900: '#7f1d1d' },
	Orange: { 100: '#ffedd5', 200: '#fed7aa', 300: '#fdba74', 400: '#fb923c', 500: '#f97316', 600: '#ea580c', 700: '#c2410c', 800: '#9a3412', 900: '#7c2d12' },
	Amber: { 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d', 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309', 800: '#92400e', 900: '#78350f' },
	Yellow: { 100: '#fef9c3', 200: '#fef08a', 300: '#fde047', 400: '#facc15', 500: '#eab308', 600: '#ca8a04', 700: '#a16207', 800: '#854d0e', 900: '#713f12' },
	Lime: { 100: '#ecfccb', 200: '#d9f99d', 300: '#bef264', 400: '#a3e635', 500: '#84cc16', 600: '#65a30d', 700: '#4d7c0f', 800: '#3f6212', 900: '#365314' },
	Green: { 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac', 400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d', 800: '#166534', 900: '#14532d' },
	Emerald: { 100: '#d1fae5', 200: '#a7f3d0', 300: '#6ee7b7', 400: '#34d399', 500: '#10b981', 600: '#059669', 700: '#047857', 800: '#065f46', 900: '#064e3b' },
	Teal: { 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4', 400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e', 800: '#115e59', 900: '#134e4a' },
	Cyan: { 100: '#cffafe', 200: '#a5f3fc', 300: '#67e8f9', 400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2', 700: '#0e7490', 800: '#155e75', 900: '#164e63' },
	Sky: { 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc', 400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1', 800: '#075985', 900: '#0c4a6e' },
	Blue: { 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a' },
	Indigo: { 100: '#e0e7ff', 200: '#c7d2fe', 300: '#a5b4fc', 400: '#818cf8', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca', 800: '#3730a3', 900: '#312e81' },
	Violet: { 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd', 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9', 800: '#5b21b6', 900: '#4c1d95' },
	Purple: { 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe', 400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce', 800: '#6b21a8', 900: '#581c87' },
	Fuchsia: { 100: '#fae8ff', 200: '#f5d0fe', 300: '#f0abfc', 400: '#e879f9', 500: '#d946ef', 600: '#c026d3', 700: '#a21caf', 800: '#86198f', 900: '#701a75' },
	Pink: { 100: '#fce7f3', 200: '#fbcfe8', 300: '#f9a8d4', 400: '#f472b6', 500: '#ec4899', 600: '#db2777', 700: '#be185d', 800: '#9d174d', 900: '#831843' },
	Rose: { 100: '#ffe4e6', 200: '#fecdd3', 300: '#fda4af', 400: '#fb7185', 500: '#f43f5e', 600: '#e11d48', 700: '#be123c', 800: '#9f1239', 900: '#881337' },
});

const TAILWIND_SWATCHES = Object.freeze([
	{ name: 'Slate', hex: '#64748b' },
	{ name: 'Gray', hex: '#6b7280' },
	{ name: 'Zinc', hex: '#71717a' },
	{ name: 'Neutral', hex: '#737373' },
	{ name: 'Red', hex: '#ef4444' },
	{ name: 'Orange', hex: '#f97316' },
	{ name: 'Amber', hex: '#f59e0b' },
	{ name: 'Yellow', hex: '#eab308' },
	{ name: 'Lime', hex: '#84cc16' },
	{ name: 'Green', hex: '#22c55e' },
	{ name: 'Emerald', hex: '#10b981' },
	{ name: 'Teal', hex: '#14b8a6' },
	{ name: 'Cyan', hex: '#06b6d4' },
	{ name: 'Sky', hex: '#0ea5e9' },
	{ name: 'Blue', hex: '#3b82f6' },
	{ name: 'Indigo', hex: '#6366f1' },
	{ name: 'Violet', hex: '#8b5cf6' },
	{ name: 'Purple', hex: '#a855f7' },
	{ name: 'Fuchsia', hex: '#d946ef' },
	{ name: 'Pink', hex: '#ec4899' },
	{ name: 'Rose', hex: '#f43f5e' },
]);

const TANA_SWATCHES = Object.freeze([
	{ name: 'White', hex: '#ffffff' },
	{ name: 'Light', hex: '#d1d5db' },
	{ name: 'Grey', hex: '#6b7280' },
	{ name: 'Dark', hex: '#374151' },
	{ name: 'Pink', hex: '#db2777' },
	{ name: 'Red', hex: '#b91c1c' },
	{ name: 'Orange', hex: '#f97316' },
	{ name: 'Bronze', hex: '#b45309' },
	{ name: 'Yellow', hex: '#eab308' },
	{ name: 'Lime', hex: '#65a30d' },
	{ name: 'Mint', hex: '#34d399' },
	{ name: 'Steel', hex: '#0369a1' },
	{ name: 'Blue', hex: '#3b82f6' },
	{ name: 'Violet', hex: '#5b21b6' },
	{ name: 'Purple', hex: '#9333ea' },
	{ name: 'Rose', hex: '#f472b6' },
]);

const COLOR_PALETTE_GROUPS = Object.freeze([
	{ id: 'tana', name: 'Tana', swatches: TANA_SWATCHES },
	{ id: 'tailwind', name: 'Tailwind', swatches: TAILWIND_SWATCHES },
	{ id: 'pastel', name: 'Pastel', swatches: Object.freeze([
		{ name: 'White', hex: '#ffffff' },
		{ name: 'Light', hex: '#f3f4f6' },
		{ name: 'Grey', hex: '#e5e7eb' },
		{ name: 'Dark', hex: '#cbd5e1' },
		{ name: 'Blush', hex: '#fecaca' },
		{ name: 'Peach', hex: '#fed7aa' },
		{ name: 'Butter', hex: '#fef3c7' },
		{ name: 'Sage', hex: '#d9f99d' },
		{ name: 'Mint', hex: '#bbf7d0' },
		{ name: 'Aqua', hex: '#a5f3fc' },
		{ name: 'Sky', hex: '#bae6fd' },
		{ name: 'Lilac', hex: '#e9d5ff' },
		{ name: 'Pink', hex: '#fbcfe8' },
		{ name: 'Rose', hex: '#fecdd3' },
	]) },
	{ id: 'material', name: 'Material', swatches: Object.freeze([
		{ name: 'White', hex: '#ffffff' },
		{ name: 'Light', hex: '#e0e0e0' },
		{ name: 'Grey', hex: '#9e9e9e' },
		{ name: 'Dark', hex: '#424242' },
		{ name: 'Red', hex: '#f44336' },
		{ name: 'Pink', hex: '#e91e63' },
		{ name: 'Purple', hex: '#9c27b0' },
		{ name: 'Deep Purple', hex: '#673ab7' },
		{ name: 'Indigo', hex: '#3f51b5' },
		{ name: 'Blue', hex: '#2196f3' },
		{ name: 'Cyan', hex: '#00bcd4' },
		{ name: 'Teal', hex: '#009688' },
		{ name: 'Green', hex: '#4caf50' },
		{ name: 'Lime', hex: '#cddc39' },
		{ name: 'Yellow', hex: '#ffeb3b' },
		{ name: 'Amber', hex: '#ffc107' },
		{ name: 'Orange', hex: '#ff9800' },
		{ name: 'Deep Orange', hex: '#ff5722' },
	]) },
	{ id: 'solarized', name: 'Solarized', swatches: Object.freeze([
		{ name: 'Base 3', hex: '#fdf6e3' },
		{ name: 'Base 1', hex: '#93a1a1' },
		{ name: 'Base 01', hex: '#586e75' },
		{ name: 'Yellow', hex: '#b58900' },
		{ name: 'Orange', hex: '#cb4b16' },
		{ name: 'Red', hex: '#dc322f' },
		{ name: 'Magenta', hex: '#d33682' },
		{ name: 'Violet', hex: '#6c71c4' },
		{ name: 'Blue', hex: '#268bd2' },
		{ name: 'Cyan', hex: '#2aa198' },
		{ name: 'Green', hex: '#859900' },
	]) },
	{ id: 'nord', name: 'Nord', swatches: Object.freeze([
		{ name: 'Snow 6', hex: '#eceff4' },
		{ name: 'Snow 4', hex: '#d8dee9' },
		{ name: 'Polar 3', hex: '#4c566a' },
		{ name: 'Polar 0', hex: '#2e3440' },
		{ name: 'Frost 7', hex: '#8fbcbb' },
		{ name: 'Frost 8', hex: '#88c0d0' },
		{ name: 'Frost 9', hex: '#81a1c1' },
		{ name: 'Frost 10', hex: '#5e81ac' },
		{ name: 'Red', hex: '#bf616a' },
		{ name: 'Orange', hex: '#d08770' },
		{ name: 'Yellow', hex: '#ebcb8b' },
		{ name: 'Green', hex: '#a3be8c' },
		{ name: 'Purple', hex: '#b48ead' },
	]) },
	{ id: 'dracula', name: 'Dracula', swatches: Object.freeze([
		{ name: 'Foreground', hex: '#f8f8f2' },
		{ name: 'Comment', hex: '#6272a4' },
		{ name: 'Selection', hex: '#44475a' },
		{ name: 'Background', hex: '#282a36' },
		{ name: 'Cyan', hex: '#8be9fd' },
		{ name: 'Green', hex: '#50fa7b' },
		{ name: 'Yellow', hex: '#f1fa8c' },
		{ name: 'Orange', hex: '#ffb86c' },
		{ name: 'Red', hex: '#ff5555' },
		{ name: 'Pink', hex: '#ff79c6' },
		{ name: 'Purple', hex: '#bd93f9' },
	]) },
]);

const THEME_COLORS = Object.freeze([
	{ name: 'Accent', value: 'theme:accent', css: THEME_ACCENT_CSS },
	{ name: 'Text', value: 'var:--text-default', css: 'var(--text-default, #cbd5e1)' },
	{ name: 'Muted text', value: 'var:--text-muted', css: 'var(--text-muted, rgba(127,127,127,0.72))' },
	{ name: 'Subtle text', value: 'var:--text-subtle', css: 'var(--text-subtle, rgba(127,127,127,0.5))' },
	{ name: 'Border', value: 'var:--border-default', css: 'var(--border-default, rgba(127,127,127,0.35))' },
	{ name: 'Subtle border', value: 'var:--border-subtle', css: 'var(--border-subtle, rgba(127,127,127,0.22))' },
	{ name: 'Hover border', value: 'var:--border-hover', css: 'var(--border-hover, rgba(127,127,127,0.45))' },
	{ name: 'Background', value: 'var:--bg-default', css: 'var(--bg-default, rgba(127,127,127,0.16))' },
	{ name: 'Hover bg', value: 'var:--bg-hover', css: 'var(--bg-hover, rgba(127,127,127,0.12))' },
	{ name: 'Enum red', value: 'var:--enum-red-fg', css: 'var(--enum-red-fg, #ef4444)' },
	{ name: 'Enum orange', value: 'var:--enum-orange-fg', css: 'var(--enum-orange-fg, #f97316)' },
	{ name: 'Enum yellow', value: 'var:--enum-yellow-fg', css: 'var(--enum-yellow-fg, #eab308)' },
	{ name: 'Enum green', value: 'var:--enum-green-fg', css: 'var(--enum-green-fg, #22c55e)' },
	{ name: 'Enum teal', value: 'var:--enum-teal-fg', css: 'var(--enum-teal-fg, #14b8a6)' },
	{ name: 'Enum blue', value: 'var:--enum-blue-fg', css: 'var(--enum-blue-fg, #3b82f6)' },
	{ name: 'Enum indigo', value: 'var:--enum-indigo-fg', css: 'var(--enum-indigo-fg, #6366f1)' },
	{ name: 'Enum violet', value: 'var:--enum-violet-fg', css: 'var(--enum-violet-fg, #8b5cf6)' },
	{ name: 'Enum fuchsia', value: 'var:--enum-fuchsia-fg', css: 'var(--enum-fuchsia-fg, #d946ef)' },
	{ name: 'Enum pink', value: 'var:--enum-pink-fg', css: 'var(--enum-pink-fg, #ec4899)' },
]);

const THEME_COLOR_ALIASES = Object.freeze({
	'var:--accent-color': THEME_ACCENT_CSS,
	'var:--color-accent': THEME_ACCENT_CSS,
	'var:--theme-accent': THEME_ACCENT_CSS,
	'var:--color-primary': THEME_ACCENT_CSS,
});

const DEFAULT_STYLE = Object.freeze({
	borderStyle: 'solid',
	color: SIDEBAR_DIVIDER_VAR_VALUE,
	customColor: '#3b82f6',
	thicknessPx: 1,
	doubleGapPx: 2,
	widthPct: 100,
	opacityPct: 100,
	insetPx: 0,
	heightPx: 20,
	offsetYPx: 0,
	alignment: 'left',
	gradientPct: 65,
});

/**
 * @typedef {{
 *   borderStyle: string,
 *   color: string,
 *   customColor: string,
 *   thicknessPx: number,
 *   doubleGapPx: number,
 *   widthPct: number,
 *   opacityPct: number,
 *   insetPx: number,
 *   heightPx: number,
 *   offsetYPx: number,
 *   alignment: string,
 *   gradientPct: number,
 * }} SeparatorStyle
 *
 * @typedef {{ isSeparator: true, version?: number, createdAt?: string, style?: Partial<SeparatorStyle>, collapsedStyle?: Partial<SeparatorStyle> }} SeparatorMarker
 * @typedef {{ collection: PluginCollectionAPI, guid: string, name: string, style: SeparatorStyle | null, collapsedStyle: SeparatorStyle | null }} SeparatorEntry
 */

export class Plugin extends AppPlugin {
	/** @type {PluginCommandPaletteCommand | null} */
	_settingsCommand = null;
	/** @type {MutationObserver | null} */
	_observer = null;
	/** @type {string[]} */
	_handlerIds = [];
	/** @type {Map<string, SeparatorEntry>} */
	_separators = new Map();
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
	_separatorSaveTimers = new Map();
	/** @type {Map<string, SeparatorStyle | null>} */
	_pendingSeparatorStyles = new Map();
	/** @type {Map<string, SeparatorStyle | null>} */
	_pendingCollapsedSeparatorStyles = new Map();
	/** @type {Set<string>} */
	_nameFixGuids = new Set();
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
	_paletteId = 'tailwind';
	_tailwindShade = 500;
	/** @type {Record<string, boolean>} */
	_paletteRowRevealed = {};
	_customOpen = false;
	/** @type {string | null} */
	_customGuid = null;
	/** @type {string | null} */
	_draftHex = null;
	/** @type {'HEX' | 'RGB' | 'HSL'} */
	_draftFormat = 'HEX';
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
			label: 'Plugin: Sidebar Seperators',
			icon: 'settings',
			onSelected: () => this._openPanel(),
		});

		this.ui.registerCustomPanelType(PANEL_TYPE, (pluginPanel) => {
			try { pluginPanel.setTitle('Sidebar Seperators Settings'); } catch {}
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
			this._handlerIds.push(this.events.on('panel.closed', () => this._scheduleRefresh()));
			this._handlerIds.push(this.events.on('panel.navigated', () => this._scheduleRefresh()));
		} catch {}

		this._boundDragStart = (event) => {
			if (event instanceof DragEvent) this._onDragStart(event);
		};
		this._boundDrag = (event) => {
			if (event instanceof DragEvent) this._onDrag(event);
		};
		this._boundDragEnd = () => this._finishDrag(false);
		this._boundSeparatorActivate = (event) => this._onSeparatorActivate(event);
		document.addEventListener('dragstart', this._boundDragStart, true);
		document.addEventListener('drag', this._boundDrag, true);
		document.addEventListener('dragend', this._boundDragEnd, true);
		document.addEventListener('click', this._boundSeparatorActivate, true);
		document.addEventListener('dblclick', this._boundSeparatorActivate, true);

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
			try { this.events.off(id); } catch {}
		}
		this._handlerIds = [];
		for (const timer of this._separatorSaveTimers.values()) clearTimeout(timer);
		this._separatorSaveTimers.clear();
		this._pendingSeparatorStyles.clear();
		this._pendingCollapsedSeparatorStyles.clear();
		if (this._boundDragStart) document.removeEventListener('dragstart', this._boundDragStart, true);
		if (this._boundDrag) document.removeEventListener('drag', this._boundDrag, true);
		if (this._boundDragEnd) document.removeEventListener('dragend', this._boundDragEnd, true);
		if (this._boundSeparatorActivate) {
			document.removeEventListener('click', this._boundSeparatorActivate, true);
			document.removeEventListener('dblclick', this._boundSeparatorActivate, true);
		}
		this._boundDragStart = null;
		this._boundDrag = null;
		this._boundDragEnd = null;
		this._boundSeparatorActivate = null;
		this._finishDrag(false);
		if (this._boundReposition) {
			window.removeEventListener('scroll', this._boundReposition, true);
			window.removeEventListener('resize', this._boundReposition);
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
			this._toast('Separator was not created.');
			return;
		}

		const conf = collection.getConfiguration ? collection.getConfiguration() : null;
		if (!conf) {
			this._toast('Separator was created, but could not be configured.');
			return;
		}

		conf.name = SEPARATOR_COLLECTION_NAME;
		conf.icon = 'layout-list';
		conf.description = 'Sidebar separator created by Sidebar Seperators.';
		conf.show_cmdpal_items = false;
		conf.show_sidebar_items = false;
		conf.home = false;
		conf.custom = {
			...(conf.custom || {}),
			[PLUGIN_KEY]: {
				isSeparator: true,
				version: 1,
				createdAt: new Date().toISOString(),
				style: this._normalizeStyle(this._defaultStyle),
				collapsedStyle: this._normalizeStyle(this._defaultStyle),
			},
		};

		try {
			await collection.saveConfiguration(conf);
			const guid = collection.getGuid();
			this._separators.set(collection.getGuid(), {
				collection,
				guid,
				name: conf.name,
				style: this._normalizeStyle(this._defaultStyle),
				collapsedStyle: this._normalizeStyle(this._defaultStyle),
			});
			this._activeOverrideGuid = guid;
			this._writeRuntimeStyle();
			this._markSidebarRows();
			this._scheduleRefresh();
			this._renderPanel();
			this._toast('Separator added.');
		} catch {
			this._toast('Separator was created, but settings were not saved.');
		}
	}

	async _openPanel() {
		if (this._panelEl && document.contains(this._panelEl)) return;
		const active = this.ui.getActivePanel && this.ui.getActivePanel();
		if (active) {
			active.navigateToCustomType(PANEL_TYPE);
			return;
		}
		const panel = await this.ui.createPanel();
		if (panel) panel.navigateToCustomType(PANEL_TYPE);
	}

	_renderPanel() {
		if (!this._panelEl) return;
		this._refreshThemeColors();
		const selected = this._activeOverrideGuid ? this._separators.get(this._activeOverrideGuid) || null : null;
		const activeStyle = selected && selected.style ? selected.style : this._defaultStyle;
		const body = [
			pluginHeader({
				title: 'Sidebar Seperators',
				lede: 'Create movable sidebar separators and edit the selected one.',
				icon: 'ti-layout-list',
				version: '1.0',
			}),
			this._sidebarPreview(activeStyle, selected),
			h('div', { class: `${PANEL_CLASS}__top-actions` },
				h('button', { type: 'button', class: `${PANEL_CLASS}__primary`, onClick: () => this._addSeparator() }, 'Add New Seperator'),
			),
		];

		if (!selected) {
			body.push(h('div', { class: `${PANEL_CLASS}__empty-state` },
				h('p', { class: `${PANEL_CLASS}__helper` }, "Select an existing sidebar seperator's pencil icon while this panel is open to edit it, or use Add New Seperator above."),
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
			document.querySelector('.sidebar--icons'),
			document.querySelector('.sidebar'),
		];
		const colors = collectRenderedThemeColors({ roots });
		this._themeColorsReadAt = now;
		this._themeColors = colors.length ? colors : THEME_COLORS.map((item) => ({
			...item,
			resolved: item.css,
			raw: item.css,
			source: item.value.replace(/^var:/, ''),
		}));
	}

	/**
	 * @param {SeparatorEntry} selected
	 */
	_renderDesignSection(selected) {
		const expandedStyle = selected.style ? selected.style : this._defaultStyle;
		const collapsedStyle = selected.collapsedStyle ? selected.collapsedStyle : expandedStyle;
		return this._collapsibleSection('design', 'Design', () => {
			const summary = h('span', { class: `${PANEL_CLASS}__section-summary` });
			if (this._sectionCollapsed.design) {
				summary.textContent = `${expandedStyle.borderStyle}/${collapsedStyle.borderStyle} · ${expandedStyle.widthPct}%/${collapsedStyle.widthPct}%`;
			}
			return summary;
		}, () => h('div', { class: `${PANEL_CLASS}__design-columns` },
			h('div', { class: `${PANEL_CLASS}__design-column` },
				h('div', { class: `${PANEL_CLASS}__state-title` }, 'Expanded'),
				this._styleEditor(expandedStyle, (next, render) => this._setActiveStyle(next, render), `sep-expanded-${selected.guid}`, () => this._activeStyleForEdit(expandedStyle)),
			),
			h('div', { class: `${PANEL_CLASS}__design-column` },
				h('div', { class: `${PANEL_CLASS}__state-title` }, 'Collapsed'),
				this._styleEditor(collapsedStyle, (next, render) => this._setActiveCollapsedStyle(next, render), `sep-collapsed-${selected.guid}`, () => this._activeCollapsedStyleForEdit(collapsedStyle)),
			),
		));
	}

	/**
	 * @param {SeparatorStyle} style
	 * @param {SeparatorEntry} selected
	 */
	_renderColorSection(style, selected) {
		return this._collapsibleSection('color', 'Color', () => {
			const summary = h('span', { class: `${PANEL_CLASS}__section-summary` });
			if (this._sectionCollapsed.color) summary.textContent = this._colorSummary(style);
			return summary;
		}, () => this._colorPicker(style, (next, render) => this._setActiveColorStyle(next, render), `sep-color-${selected.guid}`));
	}

	_renderPalettesSection() {
		return this._collapsibleSection('palettes', 'Palettes', () => {
			const summary = h('span', { class: `${PANEL_CLASS}__section-summary` });
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
		const wrap = h('section', { class: 'tps-section tps-section--collapsible', dataset: { open: String(!collapsed) } });
		const header = h('button', {
			type: 'button',
			class: 'tps-section-header',
			'aria-expanded': String(!collapsed),
			title: collapsed ? 'Expand' : 'Collapse',
			onClick: () => {
				this._sectionCollapsed[key] = !collapsed;
				this._renderPanel();
			},
		},
			h('span', { class: 'tps-section-chev', 'aria-hidden': 'true' }, '▸'),
			h('span', { class: 'tps-section-label' }, label),
			h('span', { class: 'tps-section-summary' }, renderSummary()),
		);
		wrap.appendChild(header);
		wrap.appendChild(h('div', { class: 'tps-section-body' }, renderBody()));
		return wrap;
	}

	/**
	 * @param {SeparatorStyle} style
	 * @param {SeparatorEntry | null} selected
	 */
	_sidebarPreview(style, selected) {
		const line = this._lineElement(`${PANEL_CLASS}__line`, style);
		line.setAttribute('data-plg-ss-live-line', '1');
		const root = h('div', { class: `${PANEL_CLASS}__preview` },
			h('div', { class: `${PANEL_CLASS}__preview-rail` }, line),
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
		const current = () => getCurrent ? getCurrent() : this._activeStyleForEdit(style);
		return h('div', { class: `${PANEL_CLASS}__editor` },
			h('div', { class: `${PANEL_CLASS}__field` },
				h('span', { class: `${PANEL_CLASS}__field-label` }, 'Border'),
				this._segmented(BORDER_STYLES, style.borderStyle, (value) => {
					onChange(this._normalizeStyle({ ...current(), borderStyle: value }), true);
				}),
			),
			h('div', { class: `${PANEL_CLASS}__field` },
				h('span', { class: `${PANEL_CLASS}__field-label` }, 'Align'),
				this._segmented(ALIGNMENTS, style.alignment, (value) => {
					onChange(this._normalizeStyle({ ...current(), alignment: value }), true);
				}),
			),
			style.borderStyle === 'gradient'
				? this._sliderField('Gradient', style.gradientPct, 5, 95, '%', (value) => onChange(this._normalizeStyle({ ...current(), gradientPct: value })))
				: null,
			this._numberField('Thickness', style.thicknessPx, 0.5, 8, 'px', (value) => onChange(this._normalizeStyle({ ...current(), thicknessPx: value }), false), 0.5),
			style.borderStyle === 'double'
				? this._numberField('Double gap', style.doubleGapPx, 0.5, 8, 'px', (value) => onChange(this._normalizeStyle({ ...current(), doubleGapPx: value }), false), 0.5)
				: null,
			this._numberField('Width', style.widthPct, 10, 100, '%', (value) => onChange(this._normalizeStyle({ ...current(), widthPct: value }))),
			this._numberField('Opacity', style.opacityPct, 10, 100, '%', (value) => onChange(this._normalizeStyle({ ...current(), opacityPct: value }))),
			this._numberField('Side inset', style.insetPx, 0, 36, 'px', (value) => onChange(this._normalizeStyle({ ...current(), insetPx: value }))),
			this._numberField('Row height', style.heightPx, 12, 42, 'px', (value) => onChange(this._normalizeStyle({ ...current(), heightPx: value }))),
			this._numberField('Y offset', style.offsetYPx, -16, 16, 'px', (value) => onChange(this._normalizeStyle({ ...current(), offsetYPx: value }))),
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
		return h('label', { class: `${PANEL_CLASS}__slider` },
			h('span', { class: `${PANEL_CLASS}__field-label` }, label),
			h('input', {
				type: 'range',
				min,
				max,
				step: 1,
				value: String(value),
				onInput: (/** @type {Event} */ event) => {
					const target = /** @type {HTMLInputElement} */ (event.target);
					const next = this._clampInt(target.value, min, max, value);
					const valueEl = target.parentElement?.querySelector(`.${PANEL_CLASS}__slider-value`);
					if (valueEl) valueEl.textContent = `${next}${unit}`;
					onChange(next);
				},
			}),
			h('span', { class: `${PANEL_CLASS}__slider-value` }, `${value}${unit}`),
		);
	}

	/**
	 * @param {readonly string[]} options
	 * @param {string} active
	 * @param {(value: string) => void} onChange
	 */
	_segmented(options, active, onChange) {
		return h('div', { class: `${PANEL_CLASS}__segmented`, role: 'group' },
			...options.map((value) => h('button', {
				type: 'button',
				class: `${PANEL_CLASS}__seg ${value === active ? 'is-active' : ''}`,
				'aria-pressed': String(value === active),
				onClick: (/** @type {MouseEvent} */ event) => {
					event.preventDefault();
					onChange(value);
				},
			}, value)),
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
		const parseDraft = (/** @type {string} */ raw) => {
			const trimmed = raw.trim();
			if (trimmed === '' || trimmed === '-' || trimmed === '+') return null;
			const n = Number(trimmed);
			return Number.isFinite(n) ? n : null;
		};
		const commit = () => {
			const next = this._clampNumber(input.value, min, max, value, step);
			input.value = this._formatNumber(next);
			onChange(next);
		};
		const input = h('input', {
			type: 'number',
			min,
			max,
			step,
			value: this._formatNumber(value),
			onInput: (/** @type {Event} */ event) => {
				const target = /** @type {HTMLInputElement} */ (event.target);
				const next = parseDraft(target.value);
				if (next === null || next < min || next > max) return;
				onChange(this._clampNumber(next, min, max, value, step));
			},
			onChange: commit,
			onKeyDown: (/** @type {KeyboardEvent} */ event) => {
				if (event.key === 'Enter') {
					event.preventDefault();
					commit();
					input.blur();
				} else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
					event.preventDefault();
					stepValue((event.key === 'ArrowUp' ? 1 : -1) * step * (event.shiftKey ? 10 : 1));
				}
			},
		});
		const stepValue = (/** @type {number} */ delta) => {
			const draft = parseDraft(input.value);
			const base = draft === null ? value : draft;
			const next = this._clampNumber(base + delta, min, max, value, step);
			input.value = this._formatNumber(next);
			onChange(next);
		};
		return h('div', { class: `${PANEL_CLASS}__number` },
			h('span', { class: `${PANEL_CLASS}__field-label` }, label),
			h('span', { class: `${PANEL_CLASS}__number-control` },
				h('button', {
					type: 'button',
					'aria-label': `Decrease ${label}`,
					onClick: (/** @type {MouseEvent} */ event) => {
						event.preventDefault();
						stepValue(-step);
					},
				}, '-'),
				input,
				h('button', {
					type: 'button',
					'aria-label': `Increase ${label}`,
					onClick: (/** @type {MouseEvent} */ event) => {
						event.preventDefault();
						stepValue(step);
					},
				}, '+'),
				h('span', { class: `${PANEL_CLASS}__number-unit` }, unit),
			),
		);
	}

	/**
	 * @param {SeparatorStyle} style
	 * @param {(next: SeparatorStyle, render?: boolean) => void} onChange
	 * @param {string} scope
	 */
	_colorPicker(style, onChange, scope) {
		const current = () => this._activeStyleForEdit(style);
		const makeButton = (/** @type {{name: string, value: string, css: string, resolved?: string, source?: string}} */ item) => {
			const active = style.color === item.value;
			return h('button', {
				type: 'button',
				class: `${PANEL_CLASS}__color ${active ? 'is-active' : ''}`,
				title: item.source ? `${item.name} · ${item.source}` : item.name,
				'aria-pressed': String(active),
				onClick: () => onChange(this._normalizeStyle({ ...current(), color: item.value }), true),
			},
				h('span', { class: `${PANEL_CLASS}__color-dot`, style: { background: item.resolved || item.css } }),
				h('span', { class: `${PANEL_CLASS}__color-name` }, item.name),
			);
		};
		const themeColors = this._themeColors.filter((item) => item.value !== SIDEBAR_DIVIDER_VAR_VALUE);
		const isCustomOpen = this._customOpen && this._customGuid === '__row__';
		const root = h('div', { class: `${PANEL_CLASS}__colors`, dataset: { scope } });

		root.appendChild(h('div', { class: `${PANEL_CLASS}__color-hero` },
			this._dividerPresetRow(style, () => onChange(this._normalizeStyle({ ...current(), color: SIDEBAR_DIVIDER_VAR_VALUE }), true)),
			this._renderCustomColorToggle(style, isCustomOpen),
		));

		if (isCustomOpen) {
			root.appendChild(this._renderCollectionColorCustomPanel('__row__', (hex) => {
				const next = this._normalizeStyle({ ...current(), color: `custom:${hex}`, customColor: hex });
				// Never re-render while the picker is open — the panel manages
				// its own DOM state and re-rendering would destroy the picker
				// mid-drag/mid-type. Live updates flow through to the sidebar
				// via _writeRuntimeStyle inside _setActiveColorStyle.
				onChange(next, false);
			}));
		}

		root.appendChild(h('div', { class: `${PANEL_CLASS}__colors-group` },
			h('div', { class: `${PANEL_CLASS}__colors-label` }, 'Theme variables'),
			themeColors.length
				? h('div', { class: `${PANEL_CLASS}__colors-grid` }, ...themeColors.map(makeButton))
				: h('div', { class: `${PANEL_CLASS}__empty` }, 'No active theme colors found.'),
		));

		// Active-palette swatch row (clickable). Mirrors collection-colors
		// `_buildSwatchesEl` exactly. The full palette LIST lives in its own
		// PALETTES section below.
		const activePalette = this._activePalette();
		root.appendChild(h('div', { class: `${PANEL_CLASS}__colors-group` },
			h('div', { class: `${PANEL_CLASS}__colors-label` }, `${activePalette.name} swatches`),
			this._buildCollectionColorSwatchesEl(activePalette.id, activePalette.swatches, style, (value) => {
				onChange(this._normalizeStyle({ ...current(), color: value }), true);
			}),
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
		// Render the swatch with the live CSS variable so it tracks Thymer's
		// theme exactly (no cached snapshot drift).
		const swatchColor = SIDEBAR_DIVIDER_VAR_CSS;
		return h('button', {
			type: 'button',
			class: `${PANEL_CLASS}__preset-row ${active ? 'is-active' : ''}`,
			'aria-pressed': String(active),
			onClick: (/** @type {MouseEvent} */ event) => {
				event.preventDefault();
				if (!active) onSelect();
			},
		},
			h('span', { class: `${PANEL_CLASS}__preset-swatch`, style: { background: swatchColor } }),
			h('span', { class: `${PANEL_CLASS}__preset-text` },
				h('span', { class: `${PANEL_CLASS}__preset-title` }, 'Match sidebar dividers'),
				h('span', { class: `${PANEL_CLASS}__preset-hint` }, "Uses the same color as Thymer's other sidebar dividers. Updates with your theme."),
			),
			h('span', { class: `${PANEL_CLASS}__preset-check`, 'aria-hidden': 'true' }, active ? '✓' : ''),
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
		const isCustomColor = style.color.startsWith('custom:');
		const swatchHex = isCustomColor
			? this._hexOrDefault(style.customColor)
			: (isOpen && this._isHex(this._draftHex) ? /** @type {string} */ (this._draftHex) : this._hexOrDefault(style.customColor));
		const labelHex = isCustomColor ? this._hexOrDefault(style.customColor).toUpperCase() : '';
		return h('button', {
			type: 'button',
			class: `${PANEL_CLASS}__preset-row ${PANEL_CLASS}__custom-row ${isCustomColor || isOpen ? 'is-active' : ''}`,
			'aria-pressed': String(isCustomColor || isOpen),
			'aria-expanded': String(isOpen),
			onClick: (/** @type {MouseEvent} */ event) => {
				event.preventDefault();
				const nextOpen = !isOpen;
				this._customOpen = nextOpen;
				if (nextOpen) {
					this._customGuid = '__row__';
					this._draftHex = isCustomColor ? this._hexOrDefault(style.customColor) : this._hexOrDefault(this._resolveHexColor(style));
					this._draftFormat = 'HEX';
				} else {
					this._customGuid = null;
					this._draftHex = null;
				}
				this._renderPanel();
			},
		},
			h('span', { class: `${PANEL_CLASS}__preset-swatch`, style: { background: swatchHex } }),
			h('span', { class: `${PANEL_CLASS}__preset-text` },
				h('span', { class: `${PANEL_CLASS}__preset-title` }, 'Custom color'),
				h('span', { class: `${PANEL_CLASS}__preset-hint` }, labelHex || 'Pick any hex value'),
			),
			h('span', { class: `${PANEL_CLASS}__preset-check`, 'aria-hidden': 'true' }, isOpen ? '▾' : (isCustomColor ? '✓' : '')),
		);
	}

	/** @param {SeparatorStyle} style */
	_colorSummary(style) {
		if (style.color === SIDEBAR_DIVIDER_VAR_VALUE) return 'Sidebar divider';
		const theme = this._themeColors.find((item) => item.value === style.color) || THEME_COLORS.find((item) => item.value === style.color);
		if (theme) return theme.name;
		if (style.color.startsWith('custom:')) return style.color.slice('custom:'.length).toUpperCase();
		for (const palette of this._allPalettes()) {
			if (!style.color.startsWith(`${palette.id}:`)) continue;
			const hex = style.color.slice(palette.id.length + 1).toLowerCase();
			const swatch = palette.swatches.find((item) => item.hex.toLowerCase() === hex);
			return `${palette.name}${swatch ? ` · ${swatch.name}` : ''}`;
		}
		return 'Sidebar divider';
	}

	_tailwindPalette() {
		const shade = TAILWIND_SHADES.includes(this._tailwindShade) ? this._tailwindShade : 500;
		const swatches = Object.entries(TAILWIND_FAMILIES).map(([name, family]) => ({
			name,
			hex: family[/** @type {keyof typeof family} */ (shade)] || family[500],
		}));
		return { id: 'tailwind', name: `Tailwind ${shade}`, swatches };
	}

	_allPalettes() {
		return [
			this._tailwindPalette(),
			...COLOR_PALETTE_GROUPS.filter((palette) => palette.id !== 'tailwind'),
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
		const list = h('div', { class: `${COLLECTION_COLORS_CLASS}__palette-list` });
		for (const p of this._allPalettes()) {
			const isActive = this._paletteId === p.id;
			const row = h('div', {
				class: `${COLLECTION_COLORS_CLASS}__palette-row ${isActive ? 'is-active' : ''}`.trim(),
				title: 'Click to select',
			});

			const selectPalette = () => {
				if (this._paletteId === p.id) return;
				this._paletteId = p.id;
				this._customOpen = false;
				this._customGuid = null;
				this._renderPanel();
			};

			const name = h('button', {
				type: 'button',
				class: `${COLLECTION_COLORS_CLASS}__palette-row-name`,
			}, p.name);

			const dots = h('div', { class: `${COLLECTION_COLORS_CLASS}__palette-row-dots` });
			for (const sw of p.swatches) {
				const dot = h('span', {
					class: `${COLLECTION_COLORS_CLASS}__palette-dot`,
					title: `${sw.name || sw.hex} · ${sw.hex}`,
				});
				dot.style.background = sw.hex;
				dots.appendChild(dot);
			}

			const reveal = h('button', {
				type: 'button',
				class: `${COLLECTION_COLORS_CLASS}__palette-row-reveal`,
				title: 'Show colors',
				onClick: (/** @type {MouseEvent} */ event) => {
					event.stopPropagation();
					if (row.classList.contains('is-truncated') || row.classList.contains('is-revealed')) {
						row.classList.toggle('is-revealed');
					}
				},
			});

			row.appendChild(name);
			row.appendChild(dots);
			row.appendChild(reveal);

			row.addEventListener('click', selectPalette);
			row.style.cursor = 'pointer';
			list.appendChild(row);
			if (p.id === 'tailwind' && isActive) list.appendChild(this._renderTailwindShadeSelector());
		}
		return list;
	}

	_renderTailwindShadeSelector() {
		const wrap = h('div', { class: `${COLLECTION_COLORS_CLASS}__tailwind-shades` },
			h('div', { class: `${COLLECTION_COLORS_CLASS}__tailwind-shades-label` }, 'Tailwind shade'),
		);
		const seg = h('div', { class: `${COLLECTION_COLORS_CLASS}__tailwind-shades-seg` });
		for (const shade of TAILWIND_SHADES) {
			const active = this._tailwindShade === shade;
			seg.appendChild(h('button', {
				type: 'button',
				class: `${COLLECTION_COLORS_CLASS}__shade-btn ${active ? 'is-active' : ''}`,
				title: `Use Tailwind ${shade}`,
				onClick: (/** @type {MouseEvent} */ event) => {
					event.preventDefault();
					event.stopPropagation();
					this._tailwindShade = shade;
					this._renderPanel();
				},
			}, String(shade)));
		}
		wrap.appendChild(seg);
		return wrap;
	}

	_checkPaletteOverflow() {
		if (!this._panelEl) return;
		for (const row of this._panelEl.querySelectorAll(`.${COLLECTION_COLORS_CLASS}__palette-row`)) {
			if (row.classList.contains('is-revealed')) continue;
			const rowEl = /** @type {HTMLElement} */ (row);
			const dots = /** @type {HTMLElement | null} */ (row.querySelector(`.${COLLECTION_COLORS_CLASS}__palette-row-dots`));
			if (!dots) continue;
			const dotCount = dots.children.length;
			if (!dotCount) {
				row.classList.remove('is-truncated');
				continue;
			}
			const DOT_W = 14, DOT_GAP = 4, ROW_GAP = 12, ROW_PAD_X = 10;
			const dotsIdealW = dotCount * DOT_W + Math.max(0, dotCount - 1) * DOT_GAP;
			const name = /** @type {HTMLElement | null} */ (row.querySelector(`.${COLLECTION_COLORS_CLASS}__palette-row-name`));
			const reveal = /** @type {HTMLElement | null} */ (row.querySelector(`.${COLLECTION_COLORS_CLASS}__palette-row-reveal`));
			const rowWidth = rowEl.getBoundingClientRect().width;
			const nameW = name ? name.offsetWidth : 0;
			const revealW = reveal ? Math.max(reveal.offsetWidth, 24) : 0;
			const availableForDots = rowWidth - (ROW_PAD_X * 2) - (ROW_GAP * 2) - nameW - revealW;
			row.classList.toggle('is-truncated', dotsIdealW > availableForDots);
		}
	}

	/** @param {string} color */
	_tailwindFamilyForColor(color) {
		if (!color.startsWith('tailwind:')) return null;
		const hex = color.slice('tailwind:'.length).toLowerCase();
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
		const row = h('div', { class: `${COLLECTION_COLORS_CLASS}__swatches` });
		const selected = style.color.startsWith(`${prefix}:`) ? style.color.slice(prefix.length + 1).toLowerCase() : null;
		for (const sw of swatches) {
			const btn = this._buildCollectionColorSwatch({
				activeWhen: selected === sw.hex.toLowerCase(),
				ariaLabel: sw.name,
				onClick: () => onColor(`${prefix}:${sw.hex}`),
			});
			btn.style.background = sw.hex;
			row.appendChild(btn);
		}
		return h('div', { class: `${COLLECTION_COLORS_CLASS}__swatch-wrapper` }, row);
	}

	/** @param {{activeWhen: boolean, ariaLabel: string, classes?: string, onClick: (event: MouseEvent) => void}} opts */
	_buildCollectionColorSwatch({ activeWhen, ariaLabel, classes = '', onClick }) {
		const btn = h('button', {
			type: 'button',
			class: `${COLLECTION_COLORS_CLASS}__swatch ${classes} ${activeWhen ? 'is-active' : ''}`.trim(),
			'aria-label': ariaLabel,
			title: ariaLabel,
			onClick: (/** @type {MouseEvent} */ event) => {
				event.preventDefault();
				event.stopPropagation();
				onClick(event);
			},
		});
		return /** @type {HTMLButtonElement} */ (btn);
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
		const panel = h('div', { class: `${COLLECTION_COLORS_CLASS}__custom-panel`, dataset: { customGuid: guid } });
		const draft = /** @type {string} */ (this._isHex(this._draftHex) ? this._draftHex : '#fda4af');
		const [initR, initG, initB] = this._hexToRgb(draft);
		const [initHue, initSat, initVal] = this._rgbToHsv(initR, initG, initB);

		// Persistent picker state — needed because re-deriving HSV from hex is
		// lossy (V=0 loses hue, S=0 loses hue). Tracked across events so the
		// hue slider position survives SV drags through neutral colors.
		let curHue = initHue;
		let curSat = initSat;
		let curVal = initVal;

		const left = h('div', { class: `${COLLECTION_COLORS_CLASS}__custom-left` });
		const right = h('div', { class: `${COLLECTION_COLORS_CLASS}__custom-right` });
		const sv = h('div', { class: `${COLLECTION_COLORS_CLASS}__sv`, style: { '--hue': String(initHue) } });
		const thumb = h('div', { class: `${COLLECTION_COLORS_CLASS}__sv-thumb`, style: { left: `${initSat * 100}%`, top: `${(1 - initVal) * 100}%` } });
		sv.appendChild(thumb);

		const inputs = h('div', { class: `${COLLECTION_COLORS_CLASS}__inputs` });

		// Sync the panel toggle's swatch + label, plus the input row's visible
		// values, after every live edit. Skip the input that the user is
		// typing into so we don't fight their caret.
		const syncDom = (/** @type {Element | null} */ skip = null) => {
			const wrapperEl = panel.closest(`.${PANEL_CLASS}__color-hero`)?.parentElement
				|| panel.closest(`.${PANEL_CLASS}__colors`)
				|| panel.parentElement;
			if (wrapperEl instanceof HTMLElement) {
				const presetSwatch = wrapperEl.querySelector(`.${PANEL_CLASS}__custom-row .${PANEL_CLASS}__preset-swatch`);
				if (presetSwatch instanceof HTMLElement && this._draftHex) presetSwatch.style.background = this._draftHex;
				const presetHint = wrapperEl.querySelector(`.${PANEL_CLASS}__custom-row .${PANEL_CLASS}__preset-hint`);
				if (presetHint instanceof HTMLElement && this._draftHex) presetHint.textContent = this._draftHex.toUpperCase();
			}
			if (!this._draftHex) return;
			const [r, g, b] = this._hexToRgb(this._draftHex);
			const [hl, sl, ll] = this._rgbToHsl(r, g, b);
			for (const node of inputs.querySelectorAll('input')) {
				if (node === skip) continue;
				const input = /** @type {HTMLInputElement} */ (node);
				const role = input.dataset.role;
				if (role === 'hex') input.value = this._draftHex.toUpperCase();
				else if (role === 'r') input.value = String(r);
				else if (role === 'g') input.value = String(g);
				else if (role === 'b') input.value = String(b);
				else if (role === 'h') input.value = String(Math.round(hl));
				else if (role === 's') input.value = String(Math.round(sl));
				else if (role === 'l') input.value = String(Math.round(ll));
			}
		};

		const pushLive = () => {
			if (this._draftHex) onApply(this._draftHex, 'live');
		};
		const pushCommit = () => {
			if (this._draftHex) onApply(this._draftHex, 'commit');
		};

		const setFromHsv = (/** @type {number} */ hueArg, /** @type {number} */ sx, /** @type {number} */ vy, /** @type {Element | null} */ skip = null) => {
			curHue = hueArg;
			curSat = sx;
			curVal = vy;
			const [nr, ng, nb] = this._hsvToRgb(hueArg, sx, vy);
			this._draftHex = this._rgbToHex(nr, ng, nb);
			thumb.style.left = `${sx * 100}%`;
			thumb.style.top = `${(1 - vy) * 100}%`;
			sv.style.setProperty('--hue', String(hueArg));
			syncDom(skip);
			pushLive();
		};

		sv.addEventListener('pointerdown', (/** @type {PointerEvent} */ event) => {
			event.preventDefault();
			sv.setPointerCapture(event.pointerId);
			const onDrag = (/** @type {PointerEvent} */ ev) => {
				const rect = sv.getBoundingClientRect();
				const sx = this._clamp01((ev.clientX - rect.left) / rect.width);
				const vy = 1 - this._clamp01((ev.clientY - rect.top) / rect.height);
				setFromHsv(curHue, sx, vy);
			};
			onDrag(event);
			const move = (/** @type {PointerEvent} */ ev) => onDrag(ev);
			const up = () => {
				sv.removeEventListener('pointermove', move);
				sv.removeEventListener('pointerup', up);
				try { sv.releasePointerCapture(event.pointerId); } catch {}
				pushCommit();
			};
			sv.addEventListener('pointermove', move);
			sv.addEventListener('pointerup', up);
			sv.addEventListener('pointercancel', up, { once: true });
		});

		const hue = h('input', { class: `${COLLECTION_COLORS_CLASS}__hue`, type: 'range', min: '0', max: '360', step: '1', value: String(initHue) });
		hue.addEventListener('input', () => {
			setFromHsv(Number(hue.value), curSat, curVal);
		});
		hue.addEventListener('change', () => {
			pushCommit();
		});

		const formats = h('div', { class: `${COLLECTION_COLORS_CLASS}__formats` },
			.../** @type {const} */ (['HEX', 'RGB', 'HSL']).map((format) => h('button', {
				type: 'button',
				class: `${COLLECTION_COLORS_CLASS}__format-btn ${this._draftFormat === format ? 'is-active' : ''}`,
				onClick: () => {
					if (this._draftFormat === format) return;
					this._draftFormat = format;
					this._renderPanel();
				},
			}, format)),
		);

		const tryLiveHex = (/** @type {string} */ raw, /** @type {HTMLInputElement} */ skipInput) => {
			const norm = this._normalizeHex(raw);
			if (!norm) return;
			this._draftHex = norm;
			const [r, g, b] = this._hexToRgb(norm);
			const [hueArg, sat, val] = this._rgbToHsv(r, g, b);
			// Preserve curHue/curSat/curVal when the channel they encode is
			// undefined in the new hex (saturation 0 → hue undefined, value 0
			// → both hue + sat undefined).
			if (sat > 0.0001) curHue = hueArg;
			if (val > 0.0001) curSat = sat;
			curVal = val;
			thumb.style.left = `${curSat * 100}%`;
			thumb.style.top = `${(1 - curVal) * 100}%`;
			sv.style.setProperty('--hue', String(curHue));
			hue.value = String(Math.round(curHue));
			syncDom(skipInput);
			pushLive();
		};

		if (this._draftFormat === 'HEX') {
			const input = h('input', { class: `${COLLECTION_COLORS_CLASS}__hex-input`, type: 'text', value: draft.toUpperCase(), maxLength: 7 });
			input.dataset.role = 'hex';
			input.addEventListener('input', () => {
				if (this._normalizeHex(input.value)) tryLiveHex(input.value, /** @type {HTMLInputElement} */ (input));
			});
			input.addEventListener('change', () => {
				const norm = this._normalizeHex(input.value);
				if (norm) {
					tryLiveHex(norm, /** @type {HTMLInputElement} */ (input));
					input.value = norm.toUpperCase();
					pushCommit();
				} else {
					input.value = (this._draftHex || draft).toUpperCase();
				}
			});
			inputs.append(input, h('div', { class: `${COLLECTION_COLORS_CLASS}__input-label` }, 'HEX'));
		} else if (this._draftFormat === 'RGB') {
			const [r, g, b] = this._hexToRgb(draft);
			inputs.append(
				this._customNumField('r', 'R', r, 0, 255, (val, mode, skipInput) => {
					const [, , bb] = this._hexToRgb(/** @type {string} */ (this._draftHex || draft));
					const [, gg] = this._hexToRgb(/** @type {string} */ (this._draftHex || draft));
					tryLiveHex(this._rgbToHex(val, gg, bb), skipInput);
					if (mode === 'commit') pushCommit();
				}),
				this._customNumField('g', 'G', g, 0, 255, (val, mode, skipInput) => {
					const [rr, , bb] = this._hexToRgb(/** @type {string} */ (this._draftHex || draft));
					tryLiveHex(this._rgbToHex(rr, val, bb), skipInput);
					if (mode === 'commit') pushCommit();
				}),
				this._customNumField('b', 'B', b, 0, 255, (val, mode, skipInput) => {
					const [rr, gg] = this._hexToRgb(/** @type {string} */ (this._draftHex || draft));
					tryLiveHex(this._rgbToHex(rr, gg, val), skipInput);
					if (mode === 'commit') pushCommit();
				}),
			);
		} else {
			const [r0, g0, b0] = this._hexToRgb(draft);
			const [hslHue0, hslSat0, hslLight0] = this._rgbToHsl(r0, g0, b0);
			let curHsl = { h: hslHue0, s: hslSat0, l: hslLight0 };
			const apply = (/** @type {'live' | 'commit'} */ mode, /** @type {HTMLInputElement} */ skipInput) => {
				const [nr, ng, nb] = this._hslToRgb(curHsl.h, curHsl.s, curHsl.l);
				tryLiveHex(this._rgbToHex(nr, ng, nb), skipInput);
				if (mode === 'commit') pushCommit();
			};
			inputs.append(
				this._customNumField('h', 'H', Math.round(hslHue0), 0, 360, (v, mode, skipInput) => { curHsl.h = v; apply(mode, skipInput); }),
				this._customNumField('s', 'S', Math.round(hslSat0), 0, 100, (v, mode, skipInput) => { curHsl.s = v; apply(mode, skipInput); }),
				this._customNumField('l', 'L', Math.round(hslLight0), 0, 100, (v, mode, skipInput) => { curHsl.l = v; apply(mode, skipInput); }),
			);
		}

		const random = h('button', {
			type: 'button',
			class: `${COLLECTION_COLORS_CLASS}__random`,
			onClick: () => {
				const next = this._randomHex();
				tryLiveHex(next, /** @type {HTMLInputElement} */ ({}));
				pushCommit();
			},
		}, 'Random color');

		const actions = h('div', { class: `${COLLECTION_COLORS_CLASS}__actions` },
			h('button', {
				type: 'button',
				class: `${COLLECTION_COLORS_CLASS}__btn ${COLLECTION_COLORS_CLASS}__btn--ghost`,
				onClick: () => {
					this._customOpen = false;
					this._customGuid = null;
					this._draftHex = null;
					this._renderPanel();
				},
			}, 'Close'),
		);
		left.append(sv, hue);
		right.append(formats, inputs, random, actions);
		panel.append(left, right);
		return panel;
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
		const input = h('input', { type: 'number', min: String(min), max: String(max), step: '1', value: String(value) });
		input.dataset.role = role;
		const inEl = /** @type {HTMLInputElement} */ (input);
		input.addEventListener('input', () => {
			const n = Number(inEl.value);
			if (!Number.isFinite(n)) return;
			if (n < min || n > max) return;
			onChange(n, 'live', inEl);
		});
		input.addEventListener('change', () => {
			const n = this._clampInt(Number(inEl.value), min, max, value);
			inEl.value = String(n);
			onChange(n, 'commit', inEl);
		});
		input.addEventListener('keydown', (/** @type {KeyboardEvent} */ event) => {
			if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
			event.preventDefault();
			const base = Number.isFinite(Number(inEl.value)) ? Number(inEl.value) : value;
			const next = this._clampInt(base + (event.key === 'ArrowUp' ? 1 : -1) * (event.shiftKey ? 10 : 1), min, max, value);
			inEl.value = String(next);
			onChange(next, 'commit', inEl);
		});
		return h('div', { class: `${COLLECTION_COLORS_CLASS}__num` },
			input,
			h('div', { class: `${COLLECTION_COLORS_CLASS}__num-label` }, label),
		);
	}

	/** @param {string} label @param {number} value @param {number} min @param {number} max @param {(v: number) => void} onCommit */
	_collectionColorNumField(label, value, min, max, onCommit) {
		const input = h('input', { type: 'number', min: String(min), max: String(max), step: '1', value: String(value) });
		const commit = (/** @type {number} */ v) => {
			const next = this._clampInt(v, min, max, value);
			input.value = String(next);
			onCommit(next);
			this._renderPanel();
		};
		input.addEventListener('change', () => {
			commit(Number(input.value));
		});
		input.addEventListener('keydown', (/** @type {KeyboardEvent} */ event) => {
			if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
			event.preventDefault();
			const base = Number.isFinite(Number(input.value)) ? Number(input.value) : value;
			commit(base + (event.key === 'ArrowUp' ? 1 : -1) * (event.shiftKey ? 10 : 1));
		});
		return h('div', { class: `${COLLECTION_COLORS_CLASS}__num` },
			input,
			h('div', { class: `${COLLECTION_COLORS_CLASS}__num-label` }, label),
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
		const expanded = this._normalizeStyle({ ...(selected.style || this._defaultStyle), ...colorPatch });
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
		const line = h('span', {
			class: className,
			'data-plg-sidebar-seperators-style': style.borderStyle,
			'aria-hidden': 'true',
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
			const custom = conf.custom && typeof conf.custom === 'object' ? conf.custom : {};
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
					[PLUGIN_KEY]: nextMarker,
				},
			});
			if (JSON.stringify(this._pendingSeparatorStyles.get(guid) || null) === JSON.stringify(savedStyle)) {
				this._pendingSeparatorStyles.delete(guid);
			}
			if (JSON.stringify(this._pendingCollapsedSeparatorStyles.get(guid) || null) === JSON.stringify(savedCollapsedStyle)) {
				this._pendingCollapsedSeparatorStyles.delete(guid);
			}
		} catch {
			this._toast('Could not save separator style.');
		}
	}

	/**
	 * @param {PluginConfiguration} conf
	 * @returns {SeparatorMarker | null}
	 */
	_readMarker(conf) {
		const custom = conf && conf.custom && typeof conf.custom === 'object' ? conf.custom : {};
		const marker = custom[PLUGIN_KEY];
		return marker && marker.isSeparator === true ? marker : null;
	}

	/**
	 * @param {Partial<SeparatorStyle> | null | undefined} raw
	 * @returns {SeparatorStyle}
	 */
	_normalizeStyle(raw) {
		const src = raw && typeof raw === 'object' ? raw : {};
		const borderStyle = BORDER_STYLES.includes(/** @type {any} */ (src.borderStyle)) ? String(src.borderStyle) : DEFAULT_STYLE.borderStyle;
		const alignment = ALIGNMENTS.includes(/** @type {any} */ (src.alignment)) ? String(src.alignment) : DEFAULT_STYLE.alignment;
		const color = this._normalizeColor(src.color);
		return {
			borderStyle,
			color,
			customColor: color.startsWith('custom:') ? this._hexOrDefault(color.slice('custom:'.length)) : this._hexOrDefault(src.customColor),
			thicknessPx: this._clampNumber(src.thicknessPx, 0.5, 8, DEFAULT_STYLE.thicknessPx, 0.5),
			doubleGapPx: this._clampNumber(src.doubleGapPx, 0.5, 8, DEFAULT_STYLE.doubleGapPx, 0.5),
			widthPct: this._clampInt(src.widthPct, 10, 100, DEFAULT_STYLE.widthPct),
			opacityPct: this._clampInt(src.opacityPct, 10, 100, DEFAULT_STYLE.opacityPct),
			insetPx: this._clampInt(src.insetPx, 0, 36, DEFAULT_STYLE.insetPx),
			heightPx: this._clampInt(src.heightPx, 12, 42, DEFAULT_STYLE.heightPx),
			offsetYPx: this._clampInt(src.offsetYPx, -16, 16, DEFAULT_STYLE.offsetYPx),
			alignment,
			gradientPct: this._clampInt(src.gradientPct, 5, 95, DEFAULT_STYLE.gradientPct),
		};
	}

	/**
	 * @param {unknown} value
	 */
	_normalizeColor(value) {
		if (typeof value !== 'string') return DEFAULT_STYLE.color;
		if (value === 'theme:accent') return value;
		if (value.startsWith('theme-var:--')) return value;
		if (Object.prototype.hasOwnProperty.call(THEME_COLOR_ALIASES, value)) return DEFAULT_STYLE.color;
		if (value.startsWith('var:--') && THEME_COLORS.some((item) => item.value === value)) return value;
		if (value.startsWith('custom:') && /^#[0-9a-f]{6}$/i.test(value.slice(value.indexOf(':') + 1))) return value;
		if (COLOR_PALETTE_GROUPS.some((palette) => value.startsWith(`${palette.id}:`)) && /^#[0-9a-f]{6}$/i.test(value.slice(value.indexOf(':') + 1))) return value;
		return DEFAULT_STYLE.color;
	}

	/**
	 * @param {unknown} value
	 */
	_hexOrDefault(value) {
		return typeof value === 'string' && /^#[0-9a-f]{6}$/i.test(value) ? value : DEFAULT_STYLE.customColor;
	}

	/** @param {SeparatorStyle} style */
	_resolveHexColor(style) {
		if (style.color.startsWith('custom:')) return style.color.slice('custom:'.length);
		for (const palette of COLOR_PALETTE_GROUPS) {
			if (style.color.startsWith(`${palette.id}:`)) return style.color.slice(palette.id.length + 1);
		}
		return style.customColor;
	}

	/** @param {unknown} value */
	_isHex(value) {
		return typeof value === 'string' && /^#[0-9a-f]{6}$/i.test(value);
	}

	/** @param {unknown} input */
	_normalizeHex(input) {
		if (typeof input !== 'string') return null;
		let s = input.trim().toLowerCase();
		if (!s.startsWith('#')) s = `#${s}`;
		if (/^#[0-9a-f]{3}$/.test(s)) s = `#${s.slice(1).split('').map((c) => c + c).join('')}`;
		return /^#[0-9a-f]{6}$/.test(s) ? s : null;
	}

	/** @param {number} n */
	_clamp01(n) {
		return Math.max(0, Math.min(1, n));
	}

	/** @param {string} hex @returns {[number, number, number]} */
	_hexToRgb(hex) {
		const h = this._normalizeHex(hex) || '#000000';
		return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
	}

	/** @param {number} r @param {number} g @param {number} b */
	_rgbToHex(r, g, b) {
		const t = (/** @type {number} */ n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0');
		return `#${t(r)}${t(g)}${t(b)}`;
	}

	/** @param {number} r @param {number} g @param {number} b @returns {[number, number, number]} */
	_rgbToHsv(r, g, b) {
		r /= 255; g /= 255; b /= 255;
		const mx = Math.max(r, g, b);
		const mn = Math.min(r, g, b);
		const d = mx - mn;
		let h = 0;
		if (d !== 0) {
			if (mx === r) h = ((g - b) / d) % 6;
			else if (mx === g) h = (b - r) / d + 2;
			else h = (r - g) / d + 4;
			h *= 60;
			if (h < 0) h += 360;
		}
		return [h, mx === 0 ? 0 : d / mx, mx];
	}

	/** @param {number} h @param {number} s @param {number} v @returns {[number, number, number]} */
	_hsvToRgb(h, s, v) {
		const c = v * s;
		const hp = (((h % 360) + 360) % 360) / 60;
		const x = c * (1 - Math.abs((hp % 2) - 1));
		let r = 0, g = 0, b = 0;
		if (hp < 1) { r = c; g = x; }
		else if (hp < 2) { r = x; g = c; }
		else if (hp < 3) { g = c; b = x; }
		else if (hp < 4) { g = x; b = c; }
		else if (hp < 5) { r = x; b = c; }
		else { r = c; b = x; }
		const m = v - c;
		return [(r + m) * 255, (g + m) * 255, (b + m) * 255];
	}

	/** @param {number} r @param {number} g @param {number} b @returns {[number, number, number]} */
	_rgbToHsl(r, g, b) {
		r /= 255; g /= 255; b /= 255;
		const mx = Math.max(r, g, b);
		const mn = Math.min(r, g, b);
		let h = 0, s = 0;
		const l = (mx + mn) / 2;
		if (mx !== mn) {
			const d = mx - mn;
			s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
			if (mx === r) h = (g - b) / d + (g < b ? 6 : 0);
			else if (mx === g) h = (b - r) / d + 2;
			else h = (r - g) / d + 4;
			h *= 60;
		}
		return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
	}

	/** @param {number} h @param {number} s @param {number} l @returns {[number, number, number]} */
	_hslToRgb(h, s, l) {
		h = (((h % 360) + 360) % 360) / 360;
		s /= 100;
		l /= 100;
		if (s === 0) {
			const v = l * 255;
			return [v, v, v];
		}
		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		const f = (/** @type {number} */ t) => {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1 / 6) return p + (q - p) * 6 * t;
			if (t < 1 / 2) return q;
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		};
		return [f(h + 1 / 3) * 255, f(h) * 255, f(h - 1 / 3) * 255];
	}

	_randomHex() {
		const h = Math.floor(Math.random() * 360);
		const [r, g, b] = this._hsvToRgb(h, 0.65, 0.9);
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
		if (style.color === 'theme:accent') {
			return 'var(--logo-color, var(--accent-color, var(--color-accent, var(--theme-accent, var(--color-primary, currentColor)))))';
		}
		if (style.color === SIDEBAR_DIVIDER_VAR_VALUE) {
			return SIDEBAR_DIVIDER_VAR_CSS;
		}
		if (style.color.startsWith('theme-var:')) {
			const varName = style.color.slice('theme-var:'.length);
			return `var(${varName}, currentColor)`;
		}
		if (style.color.startsWith('var:')) {
			const found = THEME_COLORS.find((item) => item.value === style.color);
			if (found) return found.css;
			const alias = THEME_COLOR_ALIASES[/** @type {keyof typeof THEME_COLOR_ALIASES} */ (style.color)];
			return alias || THEME_COLORS[0].css;
		}
		if (style.color.startsWith('custom:')) return style.color.slice('custom:'.length);
		for (const palette of COLOR_PALETTE_GROUPS) {
			if (style.color.startsWith(`${palette.id}:`)) return style.color.slice(palette.id.length + 1);
		}
		return style.customColor;
	}

	/**
	 * @param {SeparatorStyle} style
	 */
	_styleVars(style) {
		const align = ALIGNMENTS.includes(/** @type {any} */ (style.alignment)) ? style.alignment : DEFAULT_STYLE.alignment;
		const centered = align === 'center';
		const right = align === 'right';
		const gradientPct = this._clampInt(style.gradientPct, 5, 95, DEFAULT_STYLE.gradientPct);
		const offsetY = this._clampInt(style.offsetYPx, -16, 16, DEFAULT_STYLE.offsetYPx);
		const doubleGap = this._clampNumber(style.doubleGapPx, 0.5, 8, DEFAULT_STYLE.doubleGapPx, 0.5);
		const gradient = align === 'right'
			? `linear-gradient(90deg, transparent 0%, var(--plg-ss-color, currentColor) ${100 - gradientPct}%, var(--plg-ss-color, currentColor) 100%)`
			: align === 'center'
				? `linear-gradient(90deg, transparent 0%, var(--plg-ss-color, currentColor) ${Math.max(0, 50 - gradientPct / 2)}%, var(--plg-ss-color, currentColor) ${Math.min(100, 50 + gradientPct / 2)}%, transparent 100%)`
				: `linear-gradient(90deg, var(--plg-ss-color, currentColor) 0%, var(--plg-ss-color, currentColor) ${gradientPct}%, transparent 100%)`;
		return {
			'--plg-ss-color': this._resolveColor(style),
			'--plg-ss-style': style.borderStyle,
			'--plg-ss-thickness': `${style.thicknessPx}px`,
			'--plg-ss-double-gap': `${doubleGap}px`,
			'--plg-ss-width': `${style.widthPct}%`,
			'--plg-ss-opacity': String(style.opacityPct / 100),
			'--plg-ss-inset': `${style.insetPx}px`,
			'--plg-ss-height': `${style.heightPx}px`,
			'--plg-ss-offset-y': `${offsetY}px`,
			'--plg-ss-left': centered ? '50%' : right ? 'auto' : 'var(--plg-ss-inset)',
			'--plg-ss-right': right ? 'var(--plg-ss-inset)' : 'auto',
			'--plg-ss-transform': centered ? 'translate(-50%, calc(-50% + var(--plg-ss-offset-y, 0px)))' : 'translateY(calc(-50% + var(--plg-ss-offset-y, 0px)))',
			'--plg-ss-hover-transform': centered ? 'translate(-50%, calc(-50% + var(--plg-ss-offset-y, 0px))) scaleX(1.02)' : 'translateY(calc(-50% + var(--plg-ss-offset-y, 0px))) scaleX(1.02)',
			'--plg-ss-justify': align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center',
			'--plg-ss-gradient': gradient,
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
		this._panelEl.querySelectorAll('[data-plg-ss-live-line]').forEach((node) => {
			if (node instanceof HTMLElement) {
				node.setAttribute('data-plg-sidebar-seperators-style', style.borderStyle);
				this._applyStyleVars(node, style);
			}
		});
		this._panelEl.querySelectorAll(`.${PANEL_CLASS}__preview`).forEach((node) => {
			if (node instanceof HTMLElement) this._applyStyleVars(node, style);
		});
	}

	_ensureRuntimeStyle() {
		if (document.getElementById(STYLE_ID)) return;
		const style = document.createElement('style');
		style.id = STYLE_ID;
		document.head.appendChild(style);
	}

	_writeRuntimeStyle() {
		this._ensureRuntimeStyle();
		const styleEl = document.getElementById(STYLE_ID);
		if (!(styleEl instanceof HTMLStyleElement)) return;
		const defaultVars = this._cssVarBlock(this._defaultStyle);
		const collapsedDefaultVars = this._cssVarBlock(this._defaultStyle);
		const perSeparator = Array.from(this._separators.values())
			.map((entry) => this._separatorRuntimeRules(entry.guid, entry.style || this._defaultStyle, entry.collapsedStyle || entry.style || this._defaultStyle))
			.join('\n');
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
		if (style.borderStyle === 'gradient') {
			return `${reset}
				${selector}::after {
					border-top: 0 !important;
					height: max(var(--plg-ss-thickness, 1px), 1px) !important;
					background: var(--plg-ss-gradient) !important;
				}
			`;
		}
		if (style.borderStyle === 'double') {
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
		return Object.entries(vars).map(([key, value]) => `${key}:${value};`).join('');
	}

	/**
	 * @param {DragEvent} event
	 */
	_onDragStart(event) {
		if (!(event.target instanceof Element)) return;
		const row = event.target.closest(`${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"]`);
		if (!(row instanceof HTMLElement)) return;
		const guid = row.getAttribute('data-guid');
		if (!guid || !this._separators.has(guid)) return;

		this._dragRow = row;
		this._dragGuid = guid;
		row.classList.add('plg-sidebar-seperators-dragging');
		if (event.dataTransfer) {
			event.dataTransfer.effectAllowed = 'move';
			try { event.dataTransfer.setData('text/plain', guid); } catch {}
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
		if (this._dragRow) this._dragRow.classList.remove('plg-sidebar-seperators-dragging');
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
			this._toast('Could not remove separator.');
		}
	}

	_beginHold() {
		if (this._removeTimer || !this._dragGuid) return;
		document.body.classList.add('plg-sidebar-seperators-holding');
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
		document.body.classList.remove('plg-sidebar-seperators-holding');
		document.querySelectorAll('.plg-sidebar-seperators-hold').forEach((node) => node.remove());
	}

	_showHoldIndicator() {
		if (document.querySelector('.plg-sidebar-seperators-hold')) return;
		const indicator = document.createElement('div');
		indicator.className = 'plg-sidebar-seperators-hold';
		indicator.textContent = 'Hold to remove';
		document.body.appendChild(indicator);
	}

	/**
	 * @param {number} x
	 * @param {number} y
	 */
	_poof(x, y) {
		const root = document.createElement('div');
		root.className = 'plg-sidebar-seperators-poof';
		root.style.left = `${Math.max(12, x || 24)}px`;
		root.style.top = `${Math.max(12, y || 24)}px`;
		for (let i = 0; i < 12; i += 1) {
			const bit = document.createElement('span');
			bit.style.setProperty('--angle', `${i * 30}deg`);
			bit.style.setProperty('--distance', `${18 + (i % 4) * 5}px`);
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
			/** @type {Map<string, SeparatorEntry>} */
			const next = new Map();
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
				const style = this._pendingSeparatorStyles.has(guid)
					? this._pendingSeparatorStyles.get(guid) || null
					: marker.style ? this._normalizeStyle(marker.style) : null;
				const collapsedStyle = this._pendingCollapsedSeparatorStyles.has(guid)
					? this._pendingCollapsedSeparatorStyles.get(guid) || null
					: marker.collapsedStyle ? this._normalizeStyle(marker.collapsedStyle) : style;
				next.set(guid, {
					collection,
					guid,
					name: conf.name || collection.getName() || 'Separator',
					style,
					collapsedStyle,
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
		return Array.from(map.values())
			.map((entry) => `${entry.guid}:${entry.name}:${JSON.stringify(entry.style || null)}:${JSON.stringify(entry.collapsedStyle || null)}`)
			.sort()
			.join('|');
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
				name: SEPARATOR_COLLECTION_NAME,
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
			const guid = node.getAttribute('data-guid');
			if (guid && activeGuids.has(guid)) return;
			node.removeAttribute(MARK_ATTR);
			node.removeAttribute('data-plg-sidebar-seperators-style');
			node.removeAttribute('data-plg-sidebar-seperators-active');
		});
		if (!panelOpen) {
			this._hideHoverActionOverlay();
			this._hideActiveActionOverlay();
		}
		for (const [guid, entry] of this._separators.entries()) {
			const safeGuid = this._cssEscape(guid);
			document.querySelectorAll(`${COLLECTION_ROW_SELECTOR}[data-guid="${safeGuid}"]`).forEach((node) => {
				if (node instanceof HTMLElement) {
					node.setAttribute(MARK_ATTR, '1');
					node.setAttribute('data-plg-sidebar-seperators-style', (entry.style || this._defaultStyle).borderStyle);
					if (panelOpen && this._activeOverrideGuid === guid) node.setAttribute('data-plg-sidebar-seperators-active', '1');
					else node.removeAttribute('data-plg-sidebar-seperators-active');
					node.setAttribute('title', panelOpen ? 'Edit or delete this separator' : 'Sidebar separator');
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
		if (row.dataset.plgSidebarSeperatorsActionsBound === '1') return;
		row.dataset.plgSidebarSeperatorsActionsBound = '1';
		const show = () => this._showHoverActionOverlay(row, row.getAttribute('data-guid') || guid);
		row.addEventListener('mouseenter', show);
		row.addEventListener('focusin', show);
		row.addEventListener('mouseleave', () => this._scheduleHideHoverActionOverlay());
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
		const edit = this._sidebarActionButton('Edit separator', 'ti-pencil', EDIT_BUTTON_CLASS);
		const del = this._sidebarActionButton('Delete separator', 'ti-trash', DELETE_BUTTON_CLASS);
		const overlay = document.createElement('div');
		overlay.className = ACTION_OVERLAY_CLASS + (active ? ' is-active-editing' : '');
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
		// The active separator already has a persistent overlay; don't
		// overlap a transient hover overlay on top of it.
		if (this._activeOverrideGuid === guid) return;
		if (this._hoverActionOverlayHideTimer) {
			clearTimeout(this._hoverActionOverlayHideTimer);
			this._hoverActionOverlayHideTimer = null;
		}
		let overlay = this._hoverActionOverlayEl;
		if (!overlay || !document.contains(overlay) || overlay.dataset.guid !== guid) {
			if (overlay) overlay.remove();
			overlay = this._buildActionOverlay(guid, { active: false });
			overlay.addEventListener('mouseenter', () => {
				if (this._hoverActionOverlayHideTimer) {
					clearTimeout(this._hoverActionOverlayHideTimer);
					this._hoverActionOverlayHideTimer = null;
				}
			});
			overlay.addEventListener('mouseleave', () => this._scheduleHideHoverActionOverlay());
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
		// If hover is sitting on the same row as the active one, drop it.
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
		const reposition = () => {
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
		};
		this._boundReposition = reposition;
		window.addEventListener('scroll', reposition, true);
		window.addEventListener('resize', reposition);
	}

	/**
	 * @param {string} title
	 * @param {string} iconClass
	 * @param {string} extraClass
	 */
	_sidebarActionButton(title, iconClass, extraClass) {
		const buttonEl = document.createElement('button');
		buttonEl.type = 'button';
		buttonEl.className = `${ACTION_BUTTON_CLASS} ${extraClass}`;
		buttonEl.title = title;
		buttonEl.setAttribute('aria-label', title);
		const icon = document.createElement('i');
		icon.className = `ti ${iconClass}`;
		icon.setAttribute('aria-hidden', 'true');
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
			this._toast('Could not delete separator.');
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
		if (window.CSS && typeof window.CSS.escape === 'function') return window.CSS.escape(value);
		return value.replace(/["\\]/g, '\\$&');
	}

	/**
	 * @param {string} message
	 */
	_toast(message) {
		try {
			if (this.ui.addToaster) this.ui.addToaster({ title: message, dismissible: true, autoDestroyTime: 2200 });
		} catch {}
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
				content: '▾';
				opacity: 0.7;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row.is-revealed .${COLLECTION_COLORS_CLASS}__palette-row-reveal::after {
				content: '▴';
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
}
