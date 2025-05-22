function showDestinationMessage() {
    const savedDestination = getFromStorage('selectedDestination');
    const messageDiv = document.getElementById('destinationMessage');
    const destinationSpan = document.getElementById('selectedDestination');
    
    if (savedDestination && messageDiv && destinationSpan) {
        destinationSpan.textContent = savedDestination;
        messageDiv.style.display = 'block';
    }
}

function markAllItems() {
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    
    checkboxes.forEach((checkbox, index) => {
        setTimeout(() => {
            checkbox.checked = true;
        }, index * 100); 
    });
    
    setTimeout(() => {
        saveChecklistProgress();
        alert('All items marked complete! Have a great trip! 🎉');
    }, checkboxes.length * 100 + 200);
}

function saveChecklistProgress() {
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const progress = {};
    
    checkboxes.forEach(checkbox => {
        progress[checkbox.id] = checkbox.checked;
    });
    
    saveToStorage('checklistProgress', progress);
}

function loadChecklistProgress() {
    const savedProgress = getFromStorage('checklistProgress');
    
    if (savedProgress) {
        Object.keys(savedProgress).forEach(checkboxId => {
            const checkbox = document.getElementById(checkboxId);
            if (checkbox) {
                checkbox.checked = savedProgress[checkboxId];
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showDestinationMessage();
    
    loadChecklistProgress();
    
    const markAllBtn = document.getElementById('markAllBtn');
    if (markAllBtn) {
        markAllBtn.addEventListener('click', markAllItems);
    }
    
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', saveChecklistProgress);
    });
});