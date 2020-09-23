
// *   Journal data provider for Daily Journal application
// *      Holds the raw data about each entry and exports
// *      functions that other modules can use to filter
// *      the entries for different purposes.
// * This is the original data.


let entries = [];

const eventHub = document.querySelector(".container");

const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged");

    eventHub.dispatchEvent(entryStateChangedEvent);
};

    
export const getEntries = () => {
    return fetch("http://localhost:8088/entries") //Fetch from the API
        .then(response => response.json())
        .then(parsedEntries => {
          entries = parsedEntries;
          return entries;
        });        
      };        

      
        
      export const useEntries = () => {
          const sortedByDate = entries.sort(
              (currentEntry, nextEntry) =>
                  Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
          )
          return sortedByDate
      };
      
export const saveEntry = entry => {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        })
        .then(getEntries) 
        
        .then(dispatchStateChangeEvent)
    }

    export const deleteEntry = id => {
        return fetch(`http://localhost:8088/entries/${id}`, {
                method: "DELETE"
            })
            .then(getEntries)
            .then(dispatchStateChangeEvent);
    };
/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

