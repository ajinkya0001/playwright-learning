# Playwright Automation Testing Assessment (Point-wise Answers)
**Maximum Marks: 50 Marks**
**Total Questions: 15**

---

### Question 1 (4 Marks)
**Explain the difference between Manual Testing and Automation Testing. What are the different types of testing, and why is a tool like Playwright preferred for automating modern web applications?**

- Manual testing: a person manually goes through the app and checks the behavior; good for exploratory/one-time checks.
- Automation testing: scripts perform the same steps repeatedly and verify results automatically; better for repeated regression cycles, saves time, reduces human error.
- Types of testing:
  - Smoke testing – quick check if the build is stable enough to test further.
  - Sanity testing – checking if a specific bug fix actually works.
  - Regression testing – making sure old features still work after new changes.
  - Functional testing – checking if a feature behaves as per the requirement.
  - End-to-end testing – covering the complete user journey, start to finish.
- Why Playwright:
  - Single API works across Chromium, Firefox, and WebKit.
  - Built-in auto-waiting, so tests are more stable.
  - Works well with modern frameworks like React/Angular used in most enterprise apps.

---

### Question 2 (3 Marks)
**Explain Browser Architecture and the HTTP Request-Response lifecycle. Why is this understanding important while writing Playwright tests?**

- Browser = client; takes user input (URL/click) and sends a request to the server.
- Server processes the request and sends back a response (HTML/CSS/JS + status code like 200, 404, 500).
- Browser renders the page based on that response.
- Why it matters for testing:
  - Many failures are actually API/backend related, not just UI.
  - Network tab helps confirm if a failed API call is the real reason for a test failure.
  - Helps decide when to wait for a specific network response before asserting on the page.

---

### Question 3 (3 Marks)
**How does AI-assisted automation using Cursor help in generating Playwright tests? Why is it still important to review the AI-generated code manually?**

- How Cursor helps:
  - Converts a plain-English prompt into actual Playwright code (locators, actions, assertions).
  - Saves time on repetitive/form-based tests.
  - Useful starting point even while still learning Playwright syntax.
- Why manual review is still needed:
  - AI may pick a generic or unstable locator (e.g., auto-generated ID).
  - May miss an assertion that's actually needed for the test to be meaningful.
  - Doesn't always understand the real structure/behavior of the application.
  - Final correctness is still the tester's responsibility, not the AI's.

---

### Question 4 (4 Marks)
**Differentiate between common locator strategies (ID, Name, CSS, XPath) and Playwright's recommended locators (getByRole, getByText, getByLabel, getByPlaceholder). Why are Playwright's recommended locators generally preferred, especially with dynamic IDs?**

- Traditional locators:
  - ID – fast, but breaks if IDs are auto-generated/dynamic.
  - Name – similar to ID, less common in modern apps.
  - CSS – flexible, but can get long/fragile if DOM structure changes.
  - XPath – powerful, can traverse up the DOM, but usually slower and harder to read.
- Playwright recommended locators:
  - getByRole(), getByText(), getByLabel(), getByPlaceholder().
  - Target elements the way a real user identifies them (role, visible text, label).
  - Don't depend on internal implementation details like class names or generated IDs.
- Why preferred with dynamic IDs:
  - Since they don't rely on ID at all, tests keep working even if the ID changes on every page load.
  - Much more resistant to UI/DOM changes overall.

---

### Question 5 (3 Marks)
**Describe how different form controls (textbox, checkbox, radio button, dropdown, date picker) are typically automated in Playwright. How are validation messages verified?**

- Textbox / textarea – use `fill()` to enter text.
- Checkbox / radio button – use `check()` / `uncheck()`; verify state with `isChecked()`.
- Dropdown:
  - Native HTML select – `selectOption()`.
  - Custom dropdown – click to open, then click the visible option text.
- Date picker – mostly custom widgets, so click through the calendar UI, or type the date directly if the field allows it.
- Validation messages:
  - Use `toBeVisible()` to confirm the error message appears.
  - Use `toHaveText()` to confirm the exact wording, so the right validation actually triggered.

---

### Question 6 (3 Marks)
**What makes a good prompt for generating locators using AI tools? How do you review and improve an AI-generated script for locators?**

- Good prompt characteristics:
  - Specific about the element (e.g., "Submit button on the registration form" instead of just "the button").
  - Mentions page context (React app, has a table, has a modal, etc.).
- Reviewing AI-generated locators:
  - Check if it's using Playwright's recommended locators instead of brittle CSS/XPath.
  - Confirm the locator text matches exactly what's on the page.
  - Check if it would survive a dynamic change (ID change, list reorder, etc.).
- Improving the script:
  - Replace fragile selectors with getByRole/getByText where needed.
  - Re-run the test after changes to confirm stability before finalizing.

---

### Question 7 (4 Marks)
**Explain end-to-end CRUD (Create, Read, Update, Delete) workflow automation for an enterprise application. Why is it important to automate the complete business process rather than individual actions?**

- CRUD automation covers:
  - Create – adding a new record.
  - Read/Search – finding the record in a list/table.
  - Update – editing one of its fields.
  - Delete – removing it and confirming it's gone.
- Why test as one connected flow:
  - Steps depend on each other – an update test means nothing if create didn't actually work.
  - Delete should be verified by confirming the record is really gone from the read/search view.
  - Reflects how a real user actually uses the application, not isolated clicks.
  - Tends to catch frontend-backend integration issues that isolated tests would miss.

---

### Question 8 (3 Marks)
**How are dynamic tables/grids handled in automation? What should be validated when testing sorting, filtering, and pagination?**

- Handling dynamic tables:
  - Avoid hardcoding row numbers since row count/data keeps changing.
  - Locate a row based on text content (name/ID), then navigate relative to it for the needed cell.
- Sorting validation:
  - Capture column values before and after clicking sort header.
  - Programmatically verify ascending/descending order.
- Filtering validation:
  - Confirm every visible row matches the filter criteria.
  - Confirm non-matching rows are not shown.
- Pagination validation:
  - Correct number of records per page.
  - Next/previous controls work correctly.
  - No duplicate or missing records across pages.

---

### Question 9 (3 Marks)
**What challenges do alerts, popups, modals, multiple tabs/windows, and iframes create during automation? How does Playwright generally handle these?**

- Challenges:
  - These elements often exist outside the main page flow, so normal locators don't find them automatically.
  - Need to explicitly switch context to interact with them.
- Handling in Playwright:
  - Native alerts/confirm dialogs – listen for the dialog event, then accept or dismiss programmatically.
  - New tab/window – wait for the new page/context to open, then interact with that specific page object.
  - Modals – treated like normal elements once visible, but must wait for the modal to actually appear first.
  - Iframes – use `frameLocator()` since iframe content is a separate document and won't be found by a normal page locator.

---

### Question 10 (4 Marks)
**What are the common causes of test failures in automation (locator, timing, data, environment)? Explain how Playwright's debugging tools — Trace Viewer, screenshots, and video — help in identifying the root cause.**

- Common causes of failure:
  - Locator failures – element no longer exists or selector doesn't match after a UI change.
  - Timing/synchronization issues – interacting with an element before it's ready (common with API-loaded content).
  - Data-related failures – test depends on specific data that's changed or already used (e.g., duplicate email).
  - Environment-related failures – works locally but fails elsewhere due to different URLs/config/data.
- Debugging tools:
  - Trace Viewer – full timeline of actions, network calls, console logs, and DOM snapshots at each step.
  - Screenshots – quick visual at the exact point of failure.
  - Video recording – shows the entire run leading up to failure, useful for catching flickers/timing issues a screenshot would miss.

---

### Question 11 (3 Marks)
**Explain Playwright's auto-wait mechanism versus explicit waits. Why are these important for test stability, and how do they relate to identifying flaky tests?**

- Auto-wait mechanism:
  - Before an action (click/fill), Playwright automatically waits for the element to be visible, stable, and enabled.
  - No need to manually add waits for most basic actions.
- Explicit waits:
  - Needed when waiting for something extra, like an API response or data loading after a click.
  - Example: waiting for a specific locator to appear, or waiting for a network response.
- Why important:
  - Without proper waiting, tests interact with elements before they're ready → random, inconsistent failures.
  - This inconsistency is what defines a flaky test (passes sometimes, fails other times for no clear reason).
- Identifying flaky tests:
  - Run the test a few times to see if failure is timing-related rather than an actual bug.
  - Fix with the right wait strategy instead of adding a random `sleep()`.

---

### Question 12 (3 Marks)
**Describe the process of root cause analysis when an AI-generated script fails. How can the prompt be improved to get a more stable script next time?**

- Root cause analysis steps:
  - Run the script and identify exactly where it breaks – locator step, action step, or assertion step.
  - Check trace/screenshot to compare actual page state vs. what the script expected.
  - Identify if the issue is a wrong locator, or a missing wait for a loading state.
- Improving the prompt:
  - Be more specific about the element (mention exact label/nearby text instead of vague descriptions).
  - Mention dynamic behavior in the prompt (e.g., "content loads after an API call, so it may need a wait").
  - More descriptive prompts about real page behavior = more stable generated script next time.

---

### Question 13 (4 Marks)
**Explain the Page Object Model (POM). What are its key components, and what benefits does it provide in an enterprise automation framework?**

- What is POM:
  - A design pattern where each page/component gets its own class.
  - That class holds the locators and methods related to that page.
  - Tests call methods from the page class instead of writing locators directly (e.g., `loginPage.login(username, password)`).
- Key components:
  - Page classes – one per page/screen.
  - Reusable methods – e.g., login method, search method.
  - Common utilities – shared logic across pages (e.g., wait-for-loader-to-disappear).
- Benefits:
  - Maintainability – locator changes only need updating in one place.
  - Readability – test scripts read like business steps (login, search, update, delete) instead of raw commands.
  - Scales better in large enterprise codebases with multiple contributors.

---

### Question 14 (3 Marks)
**What is the importance of reporting in automation testing? What can be included in an HTML report (screenshots, video, trace), and why does this matter for stakeholders?**

- Importance of reporting:
  - Not everyone runs tests themselves or reads through code/logs.
  - Stakeholders need a clear summary of pass/fail status and reasons for failure.
- What an HTML report can include:
  - Overall pass/fail count.
  - Screenshot of the page at the point of failure.
  - Video of the full test run.
  - Trace file for a detailed step-by-step view.
- Why it matters:
  - Saves back-and-forth – visual proof is already there instead of having to reproduce the issue again.
  - Speeds up debugging.
  - Builds confidence in test results for anyone reviewing them.

---

### Question 15 (3 Marks)
**Explain the basic Git workflow (commit, push, pull request) and how automated tests are typically integrated into a CI/CD pipeline (Jenkins/Azure DevOps).**

- Basic Git workflow:
  - Make changes locally.
  - Commit with a clear message describing the change.
  - Push the commit to a remote branch.
  - Raise a pull request instead of pushing directly to main – allows team review before merging.
- CI/CD integration:
  - Jenkins/Azure DevOps can trigger the test suite automatically (on push, on schedule, or before deployment).
  - Pipeline runs Playwright tests in a clean environment.
  - Generates the test report automatically.
  - Can be configured to fail the build if tests don't pass, preventing a broken build from progressing.
  - Testing becomes part of the development process, not a separate manual step at the end.

---

**Total Marks: 50**
