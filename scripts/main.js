console.log("You Got This!!!");

import { useJournalEntries } from './JournalDataProvider';
import { EntryListComponent } from './JournalEntryList.js';
import { JournalEntryComponent } from './JournalEntry';

const allTheEntries = useJournalEntries();
console.log("all the entries", allTheEntries);

for (const entry of allTheEntries) {
    console.log("daily entries", entry);
}
// JournalEntryList();
// JournalEntryComponent();
EntryListComponent();
// useJournalEntries();