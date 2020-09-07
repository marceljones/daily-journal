
// *   Journal data provider for Daily Journal application
// *      Holds the raw data about each entry and exports
// *      functions that other modules can use to filter
// *      the entries for different purposes.
// * This is the original data.

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")

    eventHub.dispatchEvent(entryStateChangedEvent)
}

    let journal = []
    
export const getEntries = () => {
    return fetch("http://localhost:8088/entries") //Fetch from the API
        .then(response => response.json())
        .then(parsedEntries => {
          entries = parsedEntries
        })        
      }        
        
export const saveJournalEntry = entry => {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
        .then(getEntries)
        .then(dispatchStateChangeEvent)
    }
/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

