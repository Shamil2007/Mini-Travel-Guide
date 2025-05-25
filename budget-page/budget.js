function showDestinationInfo() {
    const savedDestination = getFromStorage('selectedDestination');
    const infoDiv = document.getElementById('destinationInfo');
    const destinationSpan = document.getElementById('budgetDestination');
    
    if (savedDestination && infoDiv && destinationSpan) {
        destinationSpan.textContent = savedDestination;
        infoDiv.style.display = 'block';
    }
}

function calculateBudget() {
    const flights = parseFloat(document.getElementById('flights').value) || 0;
    const localTransport = parseFloat(document.getElementById('localTransport').value) || 0;
    const nights = parseInt(document.getElementById('nights').value) || 1;
    const hotelPerNight = parseFloat(document.getElementById('hotelPerNight').value) || 0;
    const foodPerDay = parseFloat(document.getElementById('foodPerDay').value) || 0;
    const activities = parseFloat(document.getElementById('activities').value) || 0;
    const shopping = parseFloat(document.getElementById('shopping').value) || 0;
    const emergency = parseFloat(document.getElementById('emergency').value) || 0;

    const transportTotal = flights + localTransport;
    const accommodationTotal = nights * hotelPerNight;
    const foodTotal = nights * foodPerDay;
    const activitiesTotal = activities;
    const extrasTotal = shopping + emergency;

    const grandTotal = transportTotal + accommodationTotal + foodTotal + activitiesTotal + extrasTotal;

    document.getElementById('transportTotal').textContent = `$${transportTotal.toFixed(2)}`;
    document.getElementById('accommodationTotal').textContent = `$${accommodationTotal.toFixed(2)}`;
    document.getElementById('foodTotal').textContent = `$${foodTotal.toFixed(2)}`;
    document.getElementById('activitiesTotal').textContent = `$${activitiesTotal.toFixed(2)}`;
    document.getElementById('extrasTotal').textContent = `$${extrasTotal.toFixed(2)}`;
    document.getElementById('grandTotal').textContent = `$${grandTotal.toFixed(2)}`;

    generateBudgetTips(grandTotal, transportTotal, accommodationTotal, foodTotal);

    document.getElementById('budgetResult').style.display = 'block';

    saveBudgetData({
        flights, localTransport, nights, hotelPerNight, 
        foodPerDay, activities, shopping, emergency, grandTotal
    });
}

function generateBudgetTips(total, transport, accommodation, food) {
    const tips = [];
    
    if (total > 3000) {
        tips.push("Consider traveling during off-season for better deals");
        tips.push("Look for package deals that combine flights and hotels");
    } else if (total < 1000) {
        tips.push("Great budget-friendly trip! Consider local experiences");
        tips.push("Look for free walking tours and local markets");
    }

    if (transport > total * 0.4) {
        tips.push("Transportation is a large part of your budget - consider alternative airports");
    }

    if (accommodation > total * 0.3) {
        tips.push("Consider hostels, Airbnb, or guesthouses to save on accommodation");
    }

    if (food > total * 0.25) {
        tips.push("Try local street food and markets for authentic, affordable meals");
    }

    tips.push("Always keep 10-20% extra for unexpected expenses");
    tips.push("Use travel reward credit cards to earn points");
    tips.push("Book flights and hotels in advance for better prices");

    const tipsList = document.getElementById('budgetTipsList');
    tipsList.innerHTML = '';
    tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });
}

function saveBudgetData(budgetData) {
    saveToStorage('budgetData', budgetData);
}

function loadBudgetData() {
    const savedBudget = getFromStorage('budgetData');
    
    if (savedBudget) {
        document.getElementById('flights').value = savedBudget.flights || '';
        document.getElementById('localTransport').value = savedBudget.localTransport || '';
        document.getElementById('nights').value = savedBudget.nights || '';
        document.getElementById('hotelPerNight').value = savedBudget.hotelPerNight || '';
        document.getElementById('foodPerDay').value = savedBudget.foodPerDay || '';
        document.getElementById('activities').value = savedBudget.activities || '';
        document.getElementById('shopping').value = savedBudget.shopping || '';
        document.getElementById('emergency').value = savedBudget.emergency || '';
    }
}

function setupRealTimeCalculation() {
    const inputs = document.querySelectorAll('input[type="number"]');
    let timeout;
    
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                const hasValues = Array.from(inputs).some(inp => inp.value !== '');
                if (hasValues) {
                    calculateBudget();
                }
            }, 1000);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    showDestinationInfo();
    loadBudgetData();
    const calculateBtn = document.getElementById('calculateBtn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateBudget);
    }
    setupRealTimeCalculation();

    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value < 0) {
                this.value = 0;
                this.style.borderColor = '#e74c3c';
                setTimeout(() => {
                    this.style.borderColor = '#ddd';
                }, 2000);
            }
        });
    });
});
