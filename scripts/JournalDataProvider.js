  
/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "08/10/2020",
        primary: "Personal Intro's",
        secondary: "Meet the staff",
        entry: "We talked about Career goals",
        amMood: "excited",
        pmMood: "content",
        achievement1: "n/a",
        achievement2: "n/a",
        understanding: 2
    },
    {
        id: 2,
        date: "08/11/2020",
        primary: "Mac PC's",
        secondary: "Windows PC's",
        entry: "PC Requireents",
        amMood: "excited",
        pmMood: "content",
        achievement1: "I made the right purchase",
        achievement2: "n/a",
        understanding: 5
    },
    {
        id: 3,
        date: "08/12/2020",
        primary: "Class Schedule",
        secondary: "Holidays",
        entry: "Student Orientation",
        amMood: "excited",
        pmMood: "content",
        achievement1: "n/a",
        achievement2: "n/a",
        understanding: 5
    },
    {
        id: 4,
        date: "08/13/2020",
        primary: "Pre-work Session",
        secondary: "Codecademy",
        entry: "Completion rate",
        amMood: "excited",
        pmMood: "content",
        achievement1: "n/a",
        achievement2: "n/a",
        understanding: 5
    }
    

]

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