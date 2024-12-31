// Function to add a new guest to the guest list
function addGuest() {
    const guestName = document.getElementById('guestName').value;
    if (guestName.trim() !== '') {
        const guestList = document.getElementById('guestList');
        const listItem = document.createElement('li');
        listItem.textContent = guestName;
        guestList.appendChild(listItem);
        document.getElementById('guestName').value = ''; // Clear input field
    } else {
        alert('Please enter a guest name.');
    }
}

// Function to add a new event to the schedule
function addEvent() {
    const eventName = document.getElementById('eventName').value;
    if (eventName.trim() !== '') {
        const scheduleList = document.getElementById('scheduleList');
        const listItem = document.createElement('li');
        listItem.textContent = eventName;
        scheduleList.appendChild(listItem);
        document.getElementById('eventName').value = ''; // Clear input field
    } else {
        alert('Please enter an event name.');
    }
}
