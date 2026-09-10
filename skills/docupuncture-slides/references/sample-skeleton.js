/**
 * DocuPuncture for Slides – sample skeleton
 *
 * Protocol for this sample:
 * - DRY_RUN = true locates anchors and logs. It must not mutate.
 * - A missing or ambiguous single-shape anchor is logged and skipped.
 *   Do not guess a slide index or object ID.
 * - Repeat-run for edit_UpdateTitleOnSlide1: skip when the shape already
 *   has the new title. That skip is for this title update, not every script.
 * - replaceAllText is a different operation. Multiple matches are intended.
 *   Do not call it during a dry run. Count matches by hand instead.
 *
 * Paste into the target presentation's Extensions → Apps Script, then run
 * applyEdits. With DRY_RUN = true it only logs what it WOULD change.
 * Read the log, set DRY_RUN = false, and run again to apply.
 */

const DRY_RUN = true; // ← set to false to actually apply the edits

function applyEdits() {
  const presentation = SlidesApp.getActivePresentation();
  const slides = presentation.getSlides();

  let applied = 0;
  let skipped = 0;

  if (edit_UpdateTitleOnSlide1(slides)) applied++; else skipped++;
  // if (edit_ReplacePlaceholderAcrossDeck(presentation)) applied++; else skipped++;

  const mode = DRY_RUN ? 'DRY RUN — no changes made' : 'LIVE';
  Logger.log(`Done (${mode}): ${applied} ${DRY_RUN ? 'would apply' : 'applied'}, ${skipped} skipped`);
}

/**
 * Showcased title update: one unique shape, then set its text.
 * Repeat-run: skip when the shape already says New Title Text.
 *
 * Styling note: getText().setText() flattens mixed character styling
 * (e.g. one bolded word) to a single run. It is safe here only because
 * the whole title is being replaced and titles are usually uniformly
 * styled. For partial edits inside a shape with mixed styling, operate
 * on a sub-TextRange around just the changed span instead.
 */
function edit_UpdateTitleOnSlide1(slides) {
  const EDIT_NAME = 'UpdateTitleOnSlide1';
  const targetSlide = slides[0]; // or find by content

  const shapes = targetSlide.getShapes();
  const matches = [];

  for (let i = 0; i < shapes.length; i++) {
    const text = shapes[i].getText().asString().trim();
    if (text.indexOf('Old Title Text') !== -1) {
      matches.push(shapes[i]);
    }
  }

  if (matches.length === 0) {
    Logger.log(`✗ SKIPPED: ${EDIT_NAME} — anchor not found`);
    return false;
  }
  if (matches.length > 1) {
    Logger.log(`✗ SKIPPED: ${EDIT_NAME} — anchor is ambiguous`);
    return false;
  }

  const targetShape = matches[0];
  const current = targetShape.getText().asString().trim();
  if (current === 'New Title Text') {
    Logger.log(`✓ SKIPPED (already present): ${EDIT_NAME}`);
    return false;
  }

  if (DRY_RUN) {
    Logger.log(`→ WOULD APPLY: ${EDIT_NAME} ('${current}' → 'New Title Text')`);
    return true;
  }

  targetShape.getText().setText('New Title Text');
  Logger.log(`✓ APPLIED: ${EDIT_NAME}`);
  return true;
}

/**
 * Example: replace text across the whole presentation.
 * replaceAllText preserves each match's run styling, so it is the
 * preferred tool for text swaps inside shapes with mixed styling.
 *
 * Multiple matches are the operation here, not an ambiguity.
 * replaceAllText has no read-only mode, so in a dry run we count
 * matches manually instead of calling it.
 */
function edit_ReplacePlaceholderAcrossDeck(presentation) {
  const EDIT_NAME = 'ReplacePlaceholderAcrossDeck';

  if (DRY_RUN) {
    let matches = 0;
    presentation.getSlides().forEach(function (slide) {
      slide.getShapes().forEach(function (shape) {
        matches += shape.getText().asString().split('{{CLIENT_NAME}}').length - 1;
      });
    });
    if (matches === 0) {
      Logger.log(`✗ SKIPPED: ${EDIT_NAME} — no matches found`);
      return false;
    }
    Logger.log(`→ WOULD APPLY: ${EDIT_NAME} (${matches} replacements)`);
    return true;
  }

  const count = presentation.replaceAllText('{{CLIENT_NAME}}', 'Acme Corp');
  if (count === 0) {
    Logger.log(`✗ SKIPPED: ${EDIT_NAME} — no matches found`);
    return false;
  }
  Logger.log(`✓ APPLIED: ${EDIT_NAME} (${count} replacements)`);
  return true;
}
