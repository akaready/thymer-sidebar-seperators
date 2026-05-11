# Sidebar Seperators

Adds movable, theme-colored separators to Thymer's collections list.

Open `Plugin: Sidebar Seperators` from the command palette, then use the panel
button to create a separator. Newly-created separators immediately enter edit
mode, and the active separator is outlined in the sidebar while the panel is
open. Use the pencil and trash buttons that appear on separator hover to switch
the editor target or delete a separator. Each separator is backed by a real
Thymer collection, so it can be reordered with the same native collection
dragging behavior as the rest of the sidebar.

The editor controls the selected separator only: border treatment, alignment,
color, width, thickness, opacity, inset, and row height.

## Develop

```bash
# 1. Chrome on debugging port
open -a "Google Chrome" --args --remote-debugging-port=9222

# 2. In Thymer, enable Hot Reload for this plugin
# Plugins > Edit Code > Developer Tools > Enable Plugin Hot Reload

# 3. From this folder
npm run dev
```

## Build

```bash
npm run build
# writes bundled dist/plugin.js
```

## Distribute

Ship the contents of `dist/plugin.js` and `plugin.json`. Users paste
`dist/plugin.js` into Thymer's Custom Code field and `plugin.json` into the
manifest/configuration field.
