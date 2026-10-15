# PdfCraft Viewer

PdfCraft Viewer opens PDFs in [PdfCraft](https://getartcraft.com/apps/pdfcraft) inside your vault and can replace the built-in PDF viewer. PdfCraft is an open-source alternative to Acrobat. I chose PdfCraft because its local web build made it the best choice for this integration. That sparked the idea of running PdfCraft inside Obsidian. The standalone PdfCraft app is currently more robust than the embedded Obsidian version; use the standalone app when you need the most reliable experience.

> **Recommended PdfCraft version:** use the **0.6.0 web build** for now. PdfCraft 0.8.0 has been buggy in my experience. The plugin can keep multiple web builds installed so you can switch versions.
>
> **Mobile status:** PdfCraft Viewer is off on Obsidian mobile by default. You can enable it in settings, but PdfCraft still needs more development for reliable mobile and touch support.

> **Snappier scrolling:** in PdfCraft, open the menu, choose **Edit → Preferences**, then change the page layout to **Single page**. This is my recommended layout for smoother page-by-page navigation.

## Install from a release

1. Download the plugin ZIP from this repository's **Releases** page and extract it.
2. Place the `pdfcraft-viewer` folder in `<your vault>/.obsidian/plugins/`.
3. In Obsidian, open **Settings → Community plugins**, turn off Restricted mode if needed, and enable **PdfCraft Viewer**.
4. Reload Obsidian, then open a PDF.

The plugin package contains `main.js`, `manifest.json`, and `styles.css`. It does not include PdfCraft itself. In the plugin settings, choose **Download latest** to fetch a web build, or download the [`pdfcraft-web-0.6.0.zip` release asset](https://github.com/storytold/pdfcraft/releases/tag/v0.6.0) and extract it under `pdfcraft-viewer/pdfcraft-web/0.6.0/`. The version folder must contain `index.html` directly. Select **0.6.0** in **PdfCraft version in use**.

## Install with BRAT

1. Install and enable [BRAT](https://github.com/TfTHacker/obsidian42-brat) from Obsidian's Community plugins.
2. Copy **this repository's URL** from your browser's address bar.
3. In BRAT settings, choose **Add a beta plugin for testing**, paste the repository URL, and install the latest release.
4. Enable **PdfCraft Viewer** in Community plugins. Then install a PdfCraft web build as described above.

BRAT installs the plugin's `main.js`, `manifest.json`, and `styles.css` from its GitHub release. The [BRAT developer guide](https://github.com/TfTHacker/obsidian42-brat/blob/main/BRAT-DEVELOPER-GUIDE.md) explains its release-based update process.

## Keyboard shortcuts

While focus is inside PdfCraft, its own shortcuts work there. To use an Obsidian hotkey reliably, click outside the PdfCraft window first, then invoke the hotkey. The optional **Let Obsidian hotkeys work inside PdfCraft** setting forwards many modified shortcuts, but not every Obsidian hotkey can be handled from inside the embedded viewer.

## Switching viewers

Each PDF tab has a **switch viewer** button in its header. Click it to change that tab between PdfCraft and Obsidian's native PDF viewer. You can also run **Switch current PDF viewer** from the command palette. Switching a tab does not change your saved defaults.

## Automatic saving

**Save changes automatically** is on by default. After PdfCraft reports unsaved changes and you stop interacting with it for 10 seconds, the plugin requests a save and writes the PDF into your vault. You do not need to click PdfCraft's Save button for normal edits. This uses PdfCraft's web host integration and requires a compatible web build (0.6.0 or newer) and **When saving → Overwrite original**. The plugin still makes a backup before each overwrite when backups are enabled.

If PdfCraft cannot respond to an automatic save, the plugin shows a notice. Use PdfCraft's Save button for that PDF. Keep a backup of important PDFs while this integration is new.

## Settings

- **Default viewer when opening a PDF:** PdfCraft by default. Choose PdfCraft or Obsidian for ordinary PDF opens, such as opening one from the file list.
- **Default viewer when clicking a PDF link:** Obsidian by default. Choose the viewer for PDF links clicked inside notes.
- **Enable PdfCraft on mobile:** off by default. While off, PDFs use Obsidian's native viewer on mobile and the PdfCraft switch action is unavailable there. This setting does not affect desktop use.
- **Save changes automatically:** on by default. Saves after 10 seconds without input, with **Overwrite original** selected. You can turn it off and use PdfCraft's Save button.
- **PdfCraft version in use** selects an installed web build. Reopen open PDF tabs after changing it.
- **Download latest** fetches the newest web build from the upstream PdfCraft GitHub release. It does not remove older builds or change an already installed active version.
- **Renderer** can use WebGL2 if automatic rendering is slow on your computer.
- **Preload PdfCraft at startup** loads its files into memory after Obsidian starts. This can make the first PDF open faster and uses roughly 40 MB of memory.
- **Let Obsidian hotkeys work inside PdfCraft** forwards many Obsidian shortcuts while the viewer has focus. See the keyboard note above.
- **When saving** chooses whether to overwrite the open PDF or save an edited copy. When overwriting, the plugin keeps the last 10 backups in `pdfcraft-viewer/backups/` by default.

## How it works

The plugin loads the selected PdfCraft web build from local files in an embedded frame, opens the PDF by simulating a file drop, and intercepts PdfCraft's browser download to save the result into the vault. Before overwriting, it backs up the original PDF when backup is enabled.

## Known limitations

- PdfCraft needs more development for mobile and touch support. The plugin leaves PdfCraft off on mobile by default; enabling it is experimental.
- PDF embeds such as `![[file.pdf]]` and page-fragment links such as `[[file.pdf#page=3]]` are not handled by PdfCraft.
- Plugins that depend on Obsidian's built-in PDF viewer, such as PDF++, may not work while PdfCraft replaces it.
- PdfCraft is evolving quickly; a change to its web build's loading, file-open, or save behavior may require a plugin update.
- Embedded PdfCraft shares Obsidian's main thread. Large documents or other plugins doing background work can affect responsiveness.


## Credits

PdfCraft is a separate project and is not affiliated with this plugin. See the [PdfCraft project](https://github.com/storytold/pdfcraft) for its source and license.
