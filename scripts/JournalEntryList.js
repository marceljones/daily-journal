/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useEntries, getEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";
import { JournalFormComponent } from "./JournalForm.js";

// DOM reference to where all entries will be rendered
const eventHub = document.querySelector(".hubEvent");
const entryLog = document.querySelector("#entryLog");

//Listen for save/submit button to be clicked
eventHub.addEventListener("entryStateChanged", (event) => {
  const newEntry = useEntries();
  addEntriesToDOM(newEntry);
});

// const dispatchStateChangeEvent = () => {
//     const entryStateChangedEvent = new CustomEvent("entryStateChanged")
//     eventHub.dispatchEvent(entryStateChangedEvent)
// }

export const EntryListComponent = () => {
  getEntries().then(() => {
    const entries = useEntries();
    let journal = "";

    for (const entry of entries) {
      journal += JournalEntryComponent(entry);
    }
    entryLog.innerHTML += `${journal}`;
  });
};

  const addEntriesToDOM = (theEntryArray) => {
      let HTMLArray = theEntryArray.map(entryObj => {
          return JournalEntryComponent(entryObj);
        })
        entryLog.innerHTML = HTMLArray.join("")

  }

//     eventHub.dispatchEvent(entryStateChangedEvent)
// // Now refactor your entry list component to listen for the
// // state change event you dispatched in the data provider module.
// // In the event listener get the new state and render the HTML
// // representations again.

//             // render();
//         // } else {
//         //     window.alert("Please complete your journal");
//         }
//     }
// }
// )
