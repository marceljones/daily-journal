import { saveJournalEntry } from "./JournalDataProvider.js";

const contentTarget = document.querySelector(".form-container");
const eventHub = document.querySelector.apply("container")

const JournalFormComponent = () => {
    contentTarget.innerHTML = `
    <form action="">
        <h2>Marcy's Daily Coding Journal</h2>
        <fieldset>
            <label for="journalDate">Date of Entry</label>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>
        h2>Concepts Covered</h2>
        <fieldset>
            <label for="conceptsCovered">Primary</label>
            <input type="text" name="primConcept" id="primCovered" value="primary">
        </fieldset>
        <fieldset>
            <label for="conceptsCovered">Seconday</label>
            <input type="text" name="secConcept" id="secCovered">
        </fieldset>
        <h2>Daily Journal & Notes</h2>
        <fieldset>
            <label for="journalEntry">Journal Entry</label>
            <textarea name="text" name="journalEntry" id="journalEntry" value="entries"></textarea>
        </fieldset>
            <h2>Mood Variation</h2>
        <fieldset>
            <label for="moodVariation">Morning</label>
            <select class="amMood" name="startMood" id="amMood">
                <option value="excited">Excited</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="relaxed">Relaxed</option>
                <option value="content">Content</option>
                <option value="anxious">Anxious</option>
                <option value="overwhelmed">Overwhelmed</option>
            </select>
        </fieldset>
        <fieldset>
                <label for="moodVariation">Evening</label>
            <select class="pmMood" name="endMood" id="pmMood">
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="relieved">Relieved</option>
                <option value="content">Content</option>
                <option value="idiotic">Idiotic</option>
                <option value="overworked">Overworked</option>
                <option value="disillusioned">Disillusioned</option>
            </select>
        </fieldset>
            <h2>Daily Achievements</h2>
        <div class="achievement1">
        <fieldset>
            <label for="achievements">Item #1</label>
            <input type="text">
        </fieldset>
        </div>
        <div class="achievement2">
        <fieldset>
            <label for="achievements">Item #2</label>
            <input type="text">
        </fieldset>
        </div>
            <h2>Level of Understanding</h2>
            <h3>0 = None  5 = Excellent</h3>
        <div class="Understanding">
        <fieldset>
            <label for="levelOfUnderstanding">0 to 5</label>
            <input type="number" id="quantity" name="quantity" min="0" max="5">
        </fieldset>
        </div>
        <fieldset>
            <label for="journalSubmit">Record Entry</label>
            <input type="submit" name="journalSubmit" id="journalSubmit value="Record Journal Entry>
        </fieldset>
        </form>
        `
        // const entryContent = document.querySelector("#entryForm--text")
}

eventHub.addEventListener("change", event => {
    event.preventDefault();
    if (event.target.id === "journalSubmit") {
        if (document.getElementById("primCovered").value === "primary" || document.getElementById("journalEntry").value == "Entries") {
            window.alert("Please complete your entry!");
          } else {
            // Build a new object representation of a journal entry.
            const newEntry = {
              // Add your key and value pairs here
              text: document.getElementById("entry-text").value,
              date: Date.now(),
            };
      
            // Change API state and application state
            saveEntry(newEntry);
          }
        }
      });
    

// const render = () => {
//     contentTarget.innerHTML = `
//        <h3>New Entry Details</h3>
//        <section id="entry--${entry.id}" class="journalEntry">
//        ${entry.date}: ${entry.primary} - ${entry.secondary} - 
//        ${entry.amMood} - ${entry.pmMood} - ${entry.achievement1} - 
//        ${entry.achievement2} - ${entry.understanding}
//    </section>
//    button id="saveNote">Save Note</button>
//    `
// }
// export const EntryForm = () => {
//     render();
//     }













		

			
















