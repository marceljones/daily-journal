
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            ${entry.date}: ${entry.primary} - ${entry.secondary} - 
            ${entry.amMood} - ${entry.pmMood} - ${entry.achievement1} - 
            ${entry.achievement2} - ${entry.understanding}
        </section>
    `
}


