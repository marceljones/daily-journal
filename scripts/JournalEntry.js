const eventHub = document.querySelector(".entryLog")
//try .container above

export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            ${entry.date}: ${entry.primary} - ${entry.secondary} - ${entry.entry} -
            ${entry.amMood} - ${entry.pmMood} - ${entry.achievement1} - 
            ${entry.achievement2} - ${entry.understanding}
            <button id="deleteEntry--${entry.id}">Delete Entry</button>
        </section>
    `
}


