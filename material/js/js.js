let balance = parseInt(localStorage.getItem('balance')) || 0;

function completeTask(reward, taskUrl) {
    const lastCompletedTime = localStorage.getItem(taskUrl);
    
    if (lastCompletedTime) {
        const timeElapsed = Date.now() - parseInt(lastCompletedTime);
        const twentyFourHoursInMillis =24 * 60 * 60 * 1000; // 24 hours in milliseconds

        if (timeElapsed < twentyFourHoursInMillis) {
            alert('You have already completed this task within the last 24 hours.');
            return;
        }
    }

    balance += reward;
    updateBalance();

    // Store the current timestamp of when the task was completed
    localStorage.setItem(taskUrl, Date.now().toString());
    localStorage.setItem('balance', balance);

    window.open(taskUrl, '_blank');
}

function updateBalance() {
    document.getElementById('balance').textContent = balance;
}

// Update balance on page load
updateBalance();
