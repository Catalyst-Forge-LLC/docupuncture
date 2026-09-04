/**
 * DocuPuncture for Sheets – sample skeleton
 *
 * Paste into the target spreadsheet's Extensions → Apps Script, then run
 * applyEdits. With DRY_RUN = true it only logs what it WOULD change;
 * read the log, set DRY_RUN = false, and run again to apply.
 */

const DRY_RUN = true; // ← set to false to actually apply the edits

function applyEdits() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet(); // or ss.getSheetByName('Specific Name')

  let applied = 0;
  let skipped = 0;

  if (edit_UpdateStatusColumn(sheet)) applied++; else skipped++;
  // if (edit_AddNewRowForItem(sheet)) applied++; else skipped++;

  const mode = DRY_RUN ? 'DRY RUN — no changes made' : 'LIVE';
  Logger.log(`Done (${mode}): ${applied} ${DRY_RUN ? 'would apply' : 'applied'}, ${skipped} skipped`);
}

/**
 * Example: find a row by unique key and update a specific column.
 * Returns true if applied (or would apply in dry run), false if skipped.
 */
function edit_UpdateStatusColumn(sheet) {
  const EDIT_NAME = 'UpdateStatusColumn';

  // 1. Locate the row via a unique anchor value.
  //    matchEntireCell(true) keeps plain-text matching safe; if you switch
  //    to useRegularExpression(true), escape the anchor with escapeRegExp.
  const finder = sheet.createTextFinder('PROJECT-1234').matchEntireCell(true);
  const cell = finder.findNext();
  if (!cell) {
    Logger.log(`✗ SKIPPED: ${EDIT_NAME} — anchor not found`);
    return false;
  }

  const row = cell.getRow();
  const statusCell = sheet.getRange(row, 5); // column E for status, adjust as needed

  // 2. Idempotency: skip if already correct
  if (statusCell.getValue() === 'Completed') {
    Logger.log(`✓ SKIPPED (already present): ${EDIT_NAME}`);
    return false;
  }

  // 3. Dry run: report and stop before writing anything
  if (DRY_RUN) {
    Logger.log(`→ WOULD APPLY: ${EDIT_NAME} (row ${row}, col 5 → 'Completed')`);
    return true;
  }

  // 4. Apply the change (formatting, notes, and validation on the cell stay intact)
  statusCell.setValue('Completed');
  Logger.log(`✓ APPLIED: ${EDIT_NAME} (row ${row})`);
  return true;
}

/**
 * Helper – escape a string for TextFinder in regex mode / RegExp use.
 * Route every anchor through this whenever regex matching is enabled.
 */
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
