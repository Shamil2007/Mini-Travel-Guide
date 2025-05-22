function learnMore(destinationName) {
    saveToStorage('selectedDestination', destinationName);
    
    alert('Great choice! ' + destinationName + ' is an amazing destination. Check out the Travel Tips page to prepare for your trip!');
}

document.addEventListener('DOMContentLoaded', function() {
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const destinationName = this.getAttribute('data-destination');
            learnMore(destinationName);
        });
    });
});