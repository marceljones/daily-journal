import { getEntries, useEntries } from "./JournalDataProvider.js";
import { saveEntry } from "./JournalDataProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".entryLog");

eventHub.addEventListener("click", clickEvent => {
    clickEvent.preventDefault();
    if (clickEvent.target.id === "saveEntry") {
        const entryDate = document.querySelector("#journalDate");
        const entryPrimary = document.querySelector("#primCovered");
        const entrySeconday = document.querySelector("#secCovered");
        const entryEntry = document.querySelector("#journalEntry");
        const entryAmMood = document.querySelector("#amMood");
        const entryPmMood = document.querySelector("#pmMood");
        const entryAchievement1 = document.querySelector("#achievement1");
        const entryAchievement2 = document.querySelector("#achievement2");
        const entryUnderstanding = document.querySelector("#understanding");
        
        if (entryPrimary.value !== "0" ) {
            const newEntry = {
                date: entryDate.value, 
                primary: entryPrimary.value, 
                secondary: entrySecondary.value,
                entry: entryEntry.value, 
                amMood: entryAmMood.value, 
                pmMood: entryPmMood.value,
                achievement1:entryAchievement1.value, 
                achievement2:entryAchievement2.value,
                understanding: entryUnderstanding.value
            }
            saveEntry(newEntry);
            render();
        } else {
            window.alert("Please complete your journal");
        }
    }
})
    
    const render = () => {
        contentTarget.innerHTML = `     
        <form>
        <h2>Marcy's Daily Coding Journal</h2>
        <fieldset>
            <label for="journalDate">Date of Entry</label>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>
        <br>
        <br>
        <h2>Concepts Covered</h2>
        
        <fieldset>
            <label for="conceptsCovered">Primary</label>
            <input type="text" name="primConcept" id="primCovered">
        </fieldset>
        <fieldset>
            <label for="conceptsCovered">Secondary</label>
            <input type="text" name="secConcept" id="secCovered">
        </fieldset>
        <br>
        <h2>Daily Journal & Notes</h2>
        
        <fieldset>
            <label for="journalEntry">Journal Entry</label>
            <textarea name="text" name="journalEntry" id="journalEntry" cols="70" rows="10"></textarea>
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
            <label for="saveEntry">Record Entry</label>
            <input type="submit" name="saveEntry" id="saveEntry value="Record Journal Entry>
        </fieldset>
        </form>
        `
    }






export const JournalFormComponent = () => {
    getEntries()
    .then(() => {
        render(useEntries())
    })
}
    
















		

			















