document.addEventListener('DOMContentLoaded', function () {
    const tasks = document.querySelectorAll('.list-group-item');
    tasks.forEach(task => {
        task.addEventListener('click', function () {
            alert(`Task clicked: ${task.textContent.trim()}`);
        });
    });
});
