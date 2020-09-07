  
/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getEntries, saveJournalEntry } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector("#entryLog")
const eventHub = document.querySelector(".entryFormContainer")

const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")

    eventHub.dispatchEvent(entryStateChangedEvent)
// Now refactor your entry list component to listen for the 
// state change event you dispatched in the data provider module.
// In the event listener get the new state and render the HTML 
// representations again.

const render = () => {
    contentTarget.innerHTML = `
        <h3>New Entry Details</h3>
    <section id="entry--${entry.id}" class="journalEntry">
        ${entry.date}: ${entry.primary} - ${entry.secondary} - 
        ${entry.amMood} - ${entry.pmMood} - ${entry.achievement1} - 
        ${entry.achievement2} - ${entry.understanding}
    </section>
        button id="saveNote">Save Note</button>
`
}

eventHub.addEventListener("enryStateChanged", event => {
    if(event.detail.entryStateChanged === true) {
        render(newEntry)
    }


        
        
        



    
        





// Use the journal entry data from the data provider component

export const EntryListComponent = () => {
    getEntries().then(() => {
        entriesArray = useJournalEntries();
        render(entriesArray);
    });
};
    /*
        Invoke the component that returns an
        HTML representation of a single entry
    */



   


