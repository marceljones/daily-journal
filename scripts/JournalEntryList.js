  
/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useEntries, getEntries, deleteEntry } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".entryLog")

export const EntryListComponent = () => {
    getEntries()
    .then(useEntries)
    .then(addEntriesToDOM)
}
        

  const addEntriesToDOM = (theEntryArray) => {
      let HTMLArray = theEntryArray.map(entryObj => {
          return JournalEntryComponent(entryObj);
        })
        contentTarget.innerHTML = HTMLArray.join("")
    
  }      
    
eventHub.addEventListener("entryStateChangedy", () => {
    EntryListComponent();
})

eventHub.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = event.target.id.split("--");
        deleteEntry(id);
    }
});  
//     eventHub.dispatchEvent(entryStateChangedEvent)
    // // Now refactor your entry list component to listen for the 
    // // state change event you dispatched in the data provider module.
    // // In the event listener get the new state and render the HTML 
    // // representations again.
    







        
        
        



    
        







   


