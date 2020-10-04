import { useEntries } from "./JournalDataProvider.js";


const eventHub = document.querySelector(".hubEvent")
//try .container above









export const JournalEntryComponent = (entry) => {
    return `
    <section id="entry--${entry.id}" class="journalEntry">
    <p>
        <div class="currentDate">${entry.date}</div>
        <div class="currentPrimary"> ${entry.primary}</div>
        <div class="currentSecondary"> ${entry.secondary}</div>
        <div class="currentEntry"> ${entry.entry}</div>
        <div class="amMood"> ${entry.amMood}</div>
        <div class="pmMood"> ${entry.pmMood}</div>
        <div class="Understanding"> ${entry.understanding}</div>
    </p>
       </section>
    `
}












