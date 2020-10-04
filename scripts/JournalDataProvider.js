
// *   Journal data provider for Daily Journal application
// *      Holds the raw data about each entry and exports
// *      functions that other modules can use to filter
// *      the entries for different purposes.
// * This is the original data.

const eventHub = document.querySelector(".hubEvent");

let journalEntries = [];


const dispatchStateChangeEvent = () => {
   eventHub.dispatchEvent(new CustomEvent("entryStateChanged"));
}
    

export const useEntries = () => {
    const sortedByDate = journalEntries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
};
    
export const getEntries = () => {
    return fetch("http://localhost:8088/entries") //Fetch from the API
        .then(response => response.json())
        .then(parsedEntries => {
          journalEntries = parsedEntries;
          return journalEntries;
        });        
      };        

      
        
      
export const saveEntry = newJournalEntry => {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        })
        .then(getEntries) 

        //This will broadcast the state change event
        .then(dispatchStateChangeEvent)
    }

 

