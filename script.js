// Dark/Light Mode Toggle
const toggleButton = document.getElementById('toggleMode');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? "🌞" : "🌙";
});

// Study Timer Functionality
let timer;
let minutes = 25;
let seconds = 0;
let timerRunning = false;

const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startTimer');

startButton.addEventListener('click', () => {
    if (timerRunning) {
        clearInterval(timer);
        startButton.textContent = "Start Timer";
    } else {
        timer = setInterval(startCountdown, 1000);
        startButton.textContent = "Stop Timer";
    }
    timerRunning = !timerRunning;
});

function startCountdown() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(timer);
            alert("Time's up! Take a break.");
            startButton.textContent = "Start Timer";
            timerRunning = false;
        } else {
            minutes--;
            seconds = 59;
        }
    } else {
        seconds--;
    }

    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Reminder Functionality
const reminderInput = document.getElementById('taskInput');
const reminderButton = document.getElementById('setReminder');
const reminderDisplay = document.getElementById('reminderDisplay');

reminderButton.addEventListener('click', () => {
    const task = reminderInput.value;
    if (task) {
        reminderDisplay.textContent = `Reminder: ${task}`;
        reminderInput.value = ''; // Clear input field
    } else {
        alert('Please enter a task!');
    }
});

// Basic Calendar Functionality (Static Example)
const calendar = document.getElementById('calendar');
function generateCalendar() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        calendar.appendChild(dayDiv);
    });

    for (let i = 1; i <= 30; i++) {  // Static month of 30 days
        const dateDiv = document.createElement('div');
        dateDiv.textContent = i;
        calendar.appendChild(dateDiv);
    }
}
generateCalendar();
// Add Task with Subject and Priority
document.querySelector(".add-task-btn").addEventListener("click", () => {
    const subject = document.querySelector(".task-input").value;
    const priority = document.querySelector(".priority-select").value;

    if (subject) {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");

        taskItem.innerHTML = `
            <div>${subject} - Priority: ${priority}</div>
        `;
        
        document.querySelector(".taskbar-items").appendChild(taskItem);

        // Clear input after adding task
        document.querySelector(".task-input").value = "";
    }
});

// Sample Motivational Quotes
const quotes = [
    "You're doing great! Keep going!",
    "Study like a cat - focus and relax.",
    "You can do it, step by step!",
    "Your future self will thank you!",
];

setInterval(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = randomQuote;
}, 5000);

