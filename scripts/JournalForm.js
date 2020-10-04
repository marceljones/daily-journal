import { getEntries, useEntries, saveEntry } from "./JournalDataProvider.js";


const eventHub = document.querySelector(".hubEvent")
const contentTarget = document.querySelector(".formContainer");


eventHub.addEventListener("click", clickEvent => {
    // clickEvent.preventDefault();
    if (clickEvent.target.id === "saveEntry") {
        const entryDate = document.querySelector("#journalDate");
        const entryPrimary = document.querySelector("#primCovered");
        const entrySecondary = document.querySelector("#secCovered");
        const entryText = document.querySelector("#journalEntry");
        const entryAmMood = document.querySelector("#amMood");
        const entryPmMood = document.querySelector("#pmMood");
        const entryUnderstanding = document.querySelector("#understanding");
        

        // if (entryDate.value !== "" &&  entryPrimary.value !== "" && entryText.value !== "") {
            const newEntry = {
                "date": entryDate.value,
                "primary": entryPrimary.value,
                "secondary": entrySecondary.value,
                "entry": entryText.value,
                "amMood": entryAmMood.value,
                "pmMood": entryPmMood.value,
                "understanding": parseInt(entryUnderstanding)
                
            }
            saveEntry(newEntry);
        }
    }
)

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "clearForm") {
        const entryDate = document.querySelector("#journalDate");
        const entryPrimary = document.querySelector("#primCovered");
        const entrySecondary = document.querySelector("#secCovered");
        const entryText = document.querySelector("#journalEntry");
        const entryAmMood = document.querySelector("#amMood");
        const entryPmMood = document.querySelector("#pmMood");
        const entryUnderstanding = document.querySelector("#understanding");
       
            const newEntry = {
                "date": entryDate.value=null,
                "primary": entryPrimary.value=null,
                "secondary": entrySecondary.value=null,
                "entry": entryText.value=null,
                "amMood": entryAmMood.value=null,
                "pmMood": entryPmMood.value=null,
                "understanding": entryUnderstanding
            
        }
    }
})
    
    export const JournalFormComponent = () => {
        contentTarget.innerHTML = `     
        <fieldset>
            <label for="date">Date of Entry</label>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>
        <fieldset>
            <label for="conceptsCovered">Primary</label>
            <textarea name="primConcept" id="primCovered" cols="30" rows="2"></textarea>
        </fieldset>
        <fieldset>
            <label for="conceptsCovered">Secondary</label>
            <textarea name="secConcept" id="secCovered" cols="30" rows="2"></textarea>
        </fieldset>
        <fieldset>
            <label for="journalEntry">Journal Entry</label>
            <textarea name="journalEntry" id="journalEntry" cols="30" rows="10"></textarea>
        </fieldset>
        <fieldset>
            <label for="moodVariation">Morning</label>
            <select class="amMood" name="startMood" id="amMood">
            <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="relieved">Relieved</option>
                <option value="content">Content</option>
                <option value="idiotic">Idiotic</option>
                <option value="overworked">Overworked</option>
                <option value="disillusioned">Disillusioned</option>
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
        <fieldset>
            <label for="levelOfUnderstanding">0 to 5</label>
            <input type="number" id="quantity" name="quantity" min="0" max="5">
        </fieldset>
        </div>
        <button id="clearForm" type="button">Clear Form</button>
        <button id="saveEntry" type="button">Save Entry</button>
  
            
        
       
        `
    }





// export const JournalFormComponent = () => {
//     getEntries()
//     .then(() => {
//         render(useEntries())
//     })
// }
    
















		

			















