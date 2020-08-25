l/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <ul>
            <li class= currentDate">${entry.date}</li>
            <li class="primary"${entry.primary}</li>
            <li class="secondary"${entry.secondary}</li>
            <li class="entry"${entry.entry}</li>
            <li class="amMood"${entry.amMood}</li>
            <li class="pmMood"${entry.pmMood}</li>
            <li class="achievement1"${entry.achievement1}</li>
            <li class="achievement2"${entry.achievement2}</li>
            <li class="understanding"${entry.understanding}</li>
        </ul>
        </section>
        `
}
       
        
