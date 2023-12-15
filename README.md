//--------------Teachings
// Focus on the entire element when adding event listeners, using event.target.id for conditions.
// When dynamically adding lists, use element.cloneNode(true) to prevent unintended removal.
// For sorting, push elements with matching colors into an array and then display them.
// Regarding the alarm, utilize date methods (e.g., .getHours()) to match the input type="time" .value.

//------Issue
// Encountered an issue where only one list was retrieved instead of all. Resolved by encapsulating the process in a function with an event listener attached to the button, ensuring all lists are fetched.
