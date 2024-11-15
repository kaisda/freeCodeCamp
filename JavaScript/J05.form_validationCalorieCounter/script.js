const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
    // console.log("original string: ", str);   Step 25-26
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

// console.log(cleanInputString("+-99"));   Step 25-26 result is 99

function isInvalidInput(str) {
    // const regex = /[0-9]+e[0-9]+/i;  // Step 33
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

// console.log(isInvalidInput("1e3")); // Step 35 result is [ '1e3', index: 0, input: '1e3', groups: undefined ]
// console.log(isInvalidInput("10"));  // Step 36 result is null

// console.log(entryDropdown.value);    //Step 39 result is breakfast

function addEntry() {
    // const targetId = "#" + entryDropdown.value;  // Step 40 & comment by Step 43
    // const targetInputContainer = document.querySelector(targetId + ' .input-container'); // Step 41 & comment by Step 42
    // const targetInputContainer = document.querySelector(`${targetId} .input-container`); // Step 42 & comment by Step 43
    // const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`); //Step 54
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input
      type="number"
      min="0"
      id="${entryDropdown.value}-${entryNumber}-calories"
      placeholder="Calories"
    />`;
    // targetInputContainer.innerHTML += HTMLString;    Step 55
    targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

function getCaloriesFromInputs(list) {
    let calories = 0;
    for (const item of list) {
        // const currVal = item.value;  Step 61
        const currVal = cleanInputString(item.value);
        const invalidInputMatch = isInvalidInput(currVal);
        if (invalidInputMatch) {
            alert(`Invalid Input: ${invalidInputMatch[0]}`);
            isError = true;
            return null;
        }
        calories += Number(currVal);
    }
    return calories;
}

function calculateCalories(e) {
    e.preventDefault();
    isError = false;

    const breakfastNumberInputs = document.querySelectorAll(`#breakfast input[type='number']`);
    const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
    const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
    const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
    const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");

    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

    if (isError) {
        return;
    }

    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    const surplusOrDeficit = (remainingCalories < 0) ? "Surplus" : "Deficit";

    output.innerHTML = `
    <span class="${surplusOrDeficit.toLowerCase()}">${remainingCalories} Calorie ${surplusOrDeficit}</span>
    <hr>
    <p>${budgetCalories} Calories Budgeted</p>
    <p>${consumedCalories} Calories Consumed</p>
    <p>${exerciseCalories} Calories Burned</p>
    `;
    output.classList.remove('hide');
}

function clearForm() {
    const inputContainers = Array.from(document.querySelectorAll('.input-container'));
    for (const container of inputContainers) {
        container.innerHTML = "";
    }
    budgetNumberInput.value = "";
    output.innerText = "";
    output.classList.add('hide');
}

addEntryButton.addEventListener("click", addEntry);

calorieCounter.addEventListener("submit", calculateCalories);

clearButton.addEventListener("click", clearForm);