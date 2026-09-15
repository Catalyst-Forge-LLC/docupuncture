/**
 * DocuPuncture script skeleton (Docs)
 *
 * Protocol for this sample:
 * - DRY_RUN = true locates anchors and logs. It must not mutate.
 * - A missing or ambiguous targeted anchor is logged and skipped. Do not guess.
 * - Repeat-run for edit_AddIntroParagraph: skip when the new paragraph
 *   text is already present. That skip is for this insert, not every script.
 *
 * Usage:
 * 1. Open the target Google Doc → Extensions → Apps Script
 * 2. Replace all code with this script
 * 3. Click Run ▶ on applyEdits — with DRY_RUN = true it only logs what it
 *    WOULD change, without touching the document
 * 4. Read the Execution log. If it looks right, set DRY_RUN = false and run again
 * 5. Authorize on first run
 *
 * Each edit lives in its own named function so the log is human-readable
 * and individual edits can be skipped or re-run safely.
 */

const DRY_RUN = true; // ← set to false to actually apply the edits

function applyEdits() {
  const doc = DocumentApp.getActiveDocument();
  // Prefer the correct tab body when the document uses tabs
  const body = getBodyForTab(doc /*, 'Preferred Tab Name' */);

  let applied = 0;
  let skipped = 0;

  // ---- Individual edits ----
  // Each named function returns true (applied / would apply) or false (skipped)
  if (edit_AddIntroParagraph(body)) applied++; else skipped++;
  // if (edit_UpdatePricingTable(body)) applied++; else skipped++;
  // ... add more here

  const mode = DRY_RUN ? 'DRY RUN — no changes made' : 'LIVE';
  Logger.log(`Done (${mode}): ${applied} ${DRY_RUN ? 'would apply' : 'applied'}, ${skipped} skipped`);
}

/**
 * Showcased insert: add a paragraph after a unique section heading.
 * Repeat-run: skip when "Welcome to the new section" is already present.
 */
function edit_AddIntroParagraph(body) {
  const EDIT_NAME = 'AddIntroParagraph';

  // 1. Check if the desired end state already exists (repeat-run for this insert)
  if (body.findText(escapeRegExp('Welcome to the new section'))) {
    Logger.log(`✓ SKIPPED (already present): ${EDIT_NAME}`);
    return false;
  }

  // 2. Locate a unique anchor (primary, then nearby backup if the primary is missing).
  const found = findUniqueText(body, 'Section 2: Overview', 'Overview of the system');
  if (found.skipReason) {
    Logger.log(`✗ SKIPPED: ${EDIT_NAME} — ${found.skipReason}`);
    return false;
  }

  // 3. Dry run: report and stop before modifying anything
  if (DRY_RUN) {
    Logger.log(`→ WOULD APPLY: ${EDIT_NAME} (anchor found)`);
    return true;
  }

  // 4. Perform the edit
  const element = found.range.getElement();
  const parent = element.getParent();
  const idx = body.getChildIndex(parent);

  const newPara = body.insertParagraph(idx + 1, 'Welcome to the new section. This is the injected content.');

  // Optional: copy attributes from a sibling for consistent formatting
  // newPara.setAttributes(parent.getAttributes());

  Logger.log(`✓ APPLIED: ${EDIT_NAME}`);
  return true;
}

/**
 * Find a unique literal. If `primary` is missing, try `secondary`.
 * Ambiguous (more than one match) is a skip, not a first-match guess.
 */
function findUniqueText(body, primary, secondary) {
  const primaryResult = uniqueFindText(body, primary);
  if (primaryResult.status === 'unique') {
    return { range: primaryResult.range };
  }
  if (primaryResult.status === 'ambiguous') {
    return { skipReason: 'anchor is ambiguous' };
  }
  if (secondary) {
    const secondaryResult = uniqueFindText(body, secondary);
    if (secondaryResult.status === 'unique') {
      return { range: secondaryResult.range };
    }
    if (secondaryResult.status === 'ambiguous') {
      return { skipReason: 'anchor is ambiguous' };
    }
  }
  return { skipReason: 'anchor not found' };
}

function uniqueFindText(body, literal) {
  const escaped = escapeRegExp(literal);
  const first = body.findText(escaped);
  if (!first) {
    return { status: 'missing' };
  }
  const second = body.findText(escaped, first);
  if (second) {
    return { status: 'ambiguous' };
  }
  return { status: 'unique', range: first };
}

/**
 * Helper: safely escape a string for use in findText / replaceText regex.
 * Use this on EVERY anchor literal — do not pass raw strings.
 */
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Optional robust tab helper (use when the document may have tabs)
 */
function getBodyForTab(doc, preferredTabName) {
  const tabs = doc.getTabs();
  if (!tabs || tabs.length === 0) {
    return doc.getBody();
  }

  // Prefer matching by name if provided
  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    if (preferredTabName && tab.getTitle() === preferredTabName) {
      return tab.asDocumentTab().getBody();
    }
  }

  // Fallback: first tab (or implement recursive child-tab search if needed)
  return tabs[0].asDocumentTab().getBody();
}
