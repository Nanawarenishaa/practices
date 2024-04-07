document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskInput = document.getElementById('task-input').value;
    const timeInput = document.getElementById('time-input').value;
    const priorityInput = document.getElementById('priority-input').value;
    const categoryInput = document.getElementById('category-input').value;
    if (taskInput === '' || timeInput === '') return;
    addTask(taskInput, timeInput, priorityInput, categoryInput);
    document.getElementById('task-form').reset();
});

function addTask(task, time, priority, category) {
    const ul = document.getElementById('task-list');
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
        <span>${task}</span>
        <div class="icons">
            <i class="ri-alarm-line alarm-btn"></i>
            <span>${time}</span>
            <span class="priority">${priority}</span>
            <span class="category">${category}</span>
            <button class="complete-btn">Complete</button>
            <button class="pending-btn">Pending</button>
            <button class="progress-btn">In Progress</button>
            <i class="ri-delete-bin-line delete-btn"></i>
        </div>
    `;
    ul.appendChild(li);
    
    document.getElementById('task-list').addEventListener('click', function(event) {
        const target = event.target;
    
        // Check if the clicked element is a status button
        if (target.classList.contains('complete-btn')) {
            const taskItem = target.closest('.task-item');
            taskItem.classList.add('completed');
        } else if (target.classList.contains('pending-btn')) {
            const taskItem = target.closest('.task-item');
            taskItem.classList.remove('completed');
        } else if (target.classList.contains('progress-btn')) {
            const taskItem = target.closest('.task-item');
            taskItem.classList.add('in-progress');
        }
    });
    // Add event listeners for alarm and delete buttons
    const alarmBtn = li.querySelector('.alarm-btn');
    alarmBtn.addEventListener('click', function() {
        // Your code to handle alarm button click
        console.log("helo");
        alert('Set alarm for: ' + time);
    });

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        console.log("helo");
        // Your code to handle delete button click
        ul.removeChild(li);
    });
    
}


function setReminder(task, time) {
    const currentTime = new Date();
    const [hours, minutes] = time.split(':').map(Number);
    const reminderTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), hours, minutes);

    const timeDiff = reminderTime - currentTime;

    if (timeDiff > 0) {
        setTimeout(() => {
            showNotification(task);
        }, timeDiff);
    } else {
        alert("Please select a future time for the reminder.");
    }
}

function showNotification(task) {
    if (Notification.permission === 'granted') {
        new Notification('Reminder', {
            body: `Reminder for "${task}"`,
            icon: 'path_to_your_icon.png' // You can specify an icon for the notification
        });
    } else {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                showNotification(task);
            }
        });
    }
}

// Request permission for notifications when the script is loaded
if (Notification.permission !== 'granted') {
    Notification.requestPermission();
}