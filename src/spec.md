# Specification

## Summary
**Goal:** Rebuild the provided Valentine’s Day HTML/CSS/JS template as a single-page React (TypeScript) SPA with equivalent layout, styling, animations, and interactive behaviors, with all user-facing text converted to natural English.

**Planned changes:**
- Implement the full single-page layout as React components: floating hearts background, header (title/subtitle + clickable heart), max-width container with the same sequence of content cards/sections (including the secret section), quote block, and footer.
- Recreate styling using Tailwind CSS (plus minimal custom CSS for keyframe animations): pink gradient background, glassmorphism cards, hover scaling, button styles/hover behavior, and matching typography scale.
- Port the template JavaScript behaviors into React state/effects: heart burst on heart click, love letter popup open/close (modal), random “reasons” generator, relationship timer since 2022-08-01 (updates every second), moving “NO” button on hover within the proposal area, “YES” confirmation UI + heart burst, and secret password unlock (case-insensitive “bubu” with inline error on mismatch).
- Translate any Hindi text in the template into romantic, natural English while preserving structure (multi-paragraph Love Letter to “Bubu” and multi-paragraph Secret Message with Valentine’s Day closing sentiment).
- Apply a consistent Valentine’s Day theme across all sections using the provided pink palette direction (consistent spacing, typography, button/card styles).

**User-visible outcome:** A polished Valentine’s Day single-page site that looks like the original template, animates (floating hearts/heartbeat/burst), includes working popups and interactive buttons, shows an updating relationship timer, generates random romantic reasons, and unlocks a secret message with the correct password.
