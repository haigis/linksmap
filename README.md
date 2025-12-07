<p align="center">
  <img src="./linksmaplogo.jpg" alt="LinksMap Logo" width="220">
</p>


# LinksMap — Interactive Link & ID Auditor

LinksMap is a lightweight, browser-injected auditing tool designed for UX testers, QA engineers, and accessibility reviewers who need to quickly inspect, validate, and mark links and interactive elements on any webpage.

It overlays visual markers, draws bounding boxes, highlights issues, and generates structured queries for manual follow-up.  
The tool works entirely in the browser via a single injected script (bookmarklet or console paste).

---

## Features

### Real-time overlay
- Draws coloured outlines around interactive elements (`<a>`, buttons, inputs, navigation blocks, containers).
- Shows element IDs directly on the page surface.
- Colour indicators:
  - Blue: Valid ID  
  - Orange: Missing or meaningless ID  
  - Red: Duplicate IDs  
  - Green: Approved (PASS)  
  - Red: Rejected (FAIL)  

### Sidebar view
- Lists all detected links and interactive elements with:
  - Label
  - ID
  - Href  
  - Aria-label  
  - Title  
- Sidebar scrolls independently from the main document.

### PASS / FAIL Switching
Each sidebar entry includes a three-state switch:

| State  | Meaning           | Colour |
|--------|-------------------|--------|
| PASS   | Approved          | Green  |
| FAIL   | Rejected          | Red    |
| Unset  | Not yet reviewed  | Neutral |

Rows visually tint to reinforce state selection.

---

## Filtering

You can enable any combination of the following:

- Show duplicates only  
- Show missing only  

Filters are independent and stack logically.  
When either filter is active, LinksMap displays elements matching any active filter.

---

## Advanced Menu

Accessed from the small configuration icon in the bottom-right corner.

Includes:

- A list of exclusion selectors currently active
- Toggle switches to enable or disable each exclusion rule
- Session-only settings, allowing custom audits without modifying code

Default exclusions include:

- `script`
- `style`
- `[data-idmap-ignore]`
- Accordion controls
- Header and footer UI regions

The advanced menu allows fine-grained control of what LinksMap inspects, helping reduce noise from irrelevant layout elements or widgets.

---

## Exporting Results

LinksMap can generate RTF documents listing all rejected items.

Each exported entry includes:

- Element label  
- Href  
- ID  
- Aria-label  
- Title  
- A blank "Question" field for analysis or developer notes  

Exports are designed for QA workflows, defect triage, or developer handover.

---

## How to Run LinksMap

LinksMap runs entirely client-side.

### Option 1: Bookmarklet
1. Minify the script if needed.
2. Create a new browser bookmark.
3. Set the bookmark URL to:  
   `javascript:(your-script-here)`
4. Click the bookmark on any webpage to activate LinksMap.

### Option 2: DevTools Console
Paste the entire script directly into the browser console on any website.

### Toggle behaviour
Running LinksMap a second time removes the overlay completely.

---

## Use Cases

- Accessibility audits  
- UX flow mapping  
- Quality assurance workflows  
- Design system compliance  
- CMS-driven content regression checks  
- Reviewing ID and link consistency across pages  

---

## Design Philosophy

- Non-destructive: does not modify the host page’s DOM.
- Fully isolated: uses Shadow DOM to avoid CSS collisions.
- Zero dependencies: no external libraries or network requests.
- Instant teardown: one click removes all overlays and UI.
- Clear, high-contrast visualisation for rapid scanning.

---

## Future Enhancements (optional)

Potential improvements for future versions:

- JSON or CSV export
- Screenshot export with bounding boxes
- Automated best-practice ID analysis
- Plugin architecture for custom rules
- Keyboard navigation mode

---

## Contributing

LinksMap is a single-file tool. Contributions may include:

- Additional ignore rules  
- UI/UX improvements  
- Export format extensions  
- Performance optimisation  

---

## License

Free for personal, research, and internal QA use.  
Commercial licensing available upon request.

