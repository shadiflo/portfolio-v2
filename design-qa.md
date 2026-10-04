# Project folder design QA

## Comparison setup

- Source visual truth: [Francesco Giannicola — Selected work](https://francescogiannicola.com/#projects), captured in the Codex In-app Browser.
- Implementation: [Florin Stefanescu — Selected projects](http://localhost:4321/#projects), captured in the Codex In-app Browser. The browser capture is available in this task; the browser tool does not export screenshots to a project file.
- Viewport: 1270 × 714 px for both captures.
- Screenshot dimensions: source 1270 × 714 px; implementation 1270 × 714 px.
- CSS viewport and pixel density: inferred as 1270 × 714 CSS px from the browser capture; device scale factor was not exposed. No image resampling was applied.
- State: dark theme, projects section, idle cards. A second paired capture checked the first folder after focus and Escape.
- Comparison method: source and implementation screenshots were emitted together in one browser-tool response for both idle and focused states.

## Findings

- No actionable P0, P1, or P2 differences remain.
- [P3] Most folders use the reference component's title-on-paper fallback because the project currently has artwork for only SuperClub.gg and FaceitVisuals. Add project screenshots later if Florin wants every fan of papers to show a distinct preview.

## Required fidelity surfaces

- **Typography:** DM Sans headings and card labels match the source hierarchy. Desktop section headings use 28 px; folder titles use 15 px, descriptions 12 px, and right-side labels 11 px. Compact section headings use 21 px to fit beside the page link.
- **Spacing and layout:** Two columns, 692 px maximum grid width, 24 px column gap, 48 px row gap, 228 px folder cover, 16 px card radius, and paper fan sizing follow the source component.
- **Color and tokens:** Dark page background, charcoal covers, translucent labels, fine white borders, and subdued secondary text follow the source palette.
- **Images:** The two supplied project images are used as previews. Other projects use the same text fallback the reference component uses when no preview exists.
- **Copy and content:** Cards use Florin's project names, concise subtitles derived from his descriptions, and category labels where the reference uses a year. The detail sheet retains each full description, technology stack, and live project link when one exists.

## Interaction checks

- Folder fan-out responds to pointer hover and keyboard focus, with reduced-motion support.
- Selecting PixelCut opens the details sheet with its description, React / FFmpeg.wasm / Tailwind CSS tags, and project link; Escape closes it.
- The portfolio file tree selects a project, updates the hash, and scrolls to its folder.
- The Projects page and home page share the same interactive folder component.

## Comparison history

1. The first desktop comparison showed a grid wider than the source and long card subtitles clipped mid-sentence. The grid was capped at 692 px and each card received a concise subtitle. The paired 1270 × 714 capture then showed matching card widths and clean single-line metadata.
2. The first desktop comparison also showed the Selected projects heading at 19 px while the source uses 28 px. The section heading now uses the source size on desktop and 21 px on compact screens. The final paired capture shows the heading hierarchy and card dimensions aligned.

## Implementation checklist

- [x] Copy the source fan-out hover animation and paper stack proportions.
- [x] Keep project descriptions and stacks in the open detail sheet instead of adding a stack row to the cards.
- [x] Preserve project IDs for the file-tree navigation.
- [x] Check desktop and narrow-screen layouts, open and close states, and the local build.

**final result: passed**
