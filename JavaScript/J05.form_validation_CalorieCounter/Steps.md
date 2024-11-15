Step 1-3: work with html to add form
Step 4-7: add fieldset for breakfast lunch dinner snacks & exercise
Step 8-10: add dropdown menu & button for meal type
Step 11: add 2 buttons for calculating & reset
Step 12: add div for output
Step 13: add script link
Step 14-16: getElementById()
Step 17: prefixing a variable with is or has to represents a boolean value
Step 18: create cleanInputString() for recieve data from input & process them 
Step 19-23: declare regex for Regular Expressions with /[+-\s]/g include + - white space individually & blobally
Step 24: use .replace() to replace + - white space with ""
Step 25-26: test cleanInputString()
Step 27: organize codes
Step 28: create isInvalidInput() for Invalid Input
Step 29-32 : declare regex with /[0-9]+e[0-9]+/i including exponential notation insensitively & between any numbers & for many times
Step 33: shorthand regex to /\d+e\d+/i
Step 34: use .match() to filter exponential notation because it's legal
Step 35-36: test isInvalidInput()
Step 37: organize codes
Step 38: retrieve the value of entryDropdown.value & test it
Step 39: organize codes & create addEntry()
Step 40-41: modify addEntry() with declare targetId targetInputContainer & assign values
Step 42: rewrite targetInputContainer with template literals (模板文字，插入變數，使用反引號，變數用${})
Step 43: rewrite all from Step 40-42 with template literals &  organize codes
Step 44: modify addEntry() with declare entryNumber & assign value as targetInputContainer.querySelectorAll() to get a nodelist(array-like object)
Step 45: modify step 44 to get length of enTryNumber with 'input[type="text"]' as parameter in querySelectorAll()
Step 46: modify addEntry() with declare HTMLString & assign value as empty template literal string for temp HTML string
Step 47: modify empty template literal string with label & content using literal syntax for variables 
Step 48: modufy label with giving for attribute & using literal syntax for variables (for entry name)
Step 49: modify literal string with adding input & content using literal syntax for variables (for entry name)
Step 50: modify literal string with adding another lebel & content using literal syntax for variables (for entry calories)
Step 51: modify literal string with adding another input & content using literal syntax for variables (for entry calories)
Step 52: modify addEntry() with adding += & innerHTML for showing new html
Step 53: use addEventListener on addEntryButton to present onclick situation & to call addEntry()
Step 54: find bug testing add entry & fix it with entryNumber (index problem)
Step 55: find bug first entry disappeared when adding second entry & fit with replacing method innerHTML of targetInputContainer to insertAdjacentHTML() of targetInputContainer
Step 56: add arguments to targetInputContainer.insertAdjacentHTML() & finish addEntry()
Step 57: create getCaloriesFromInputs() with parameter called list
Step 58: modify getCaloriesFromInputs() with declare calories & assign 0 using let
Step 59-61: modify getCaloriesFromInputs() with adding for loop to read each item in list 
Step 62: modify getCaloriesFromInputs() with declare invalidInputMatch & assign it using isInvalidInput(currVal) to confirm each of them are valid 
Step 63-65: modify getCaloriesFromInputs() with adding if statement to check if invalidInputMatch is truthy & what should do  
Step 66-67: modify getCaloriesFromInputs() with use the addition assignment operator to add currVal to your calories total using Number() & return calories value
Step 68: create calculateCalories(e) e means browser event & this function will be an event listener
Step 69: modify calculateCalories(e) with e.preventDefault() to prevent default action of submit (reload page) & set isError as false
Step 70: modify calculateCalories(e) with declare breakfastNumberInputs & assign value by using document.querySelectorAll(`#breakfast input[type='number']`) to get data input from user
Step 71-72: modify calculateCalories(e) with same syntax with Step 70 to declare lunchNumberInputs dinnerNumberInputs snacksNumberInputs exerciseNumberInputs
Step 73: modify calculateCalories(e) with declare breakfastCalories & assign value using getCaloriesFromInputs(breakfastNumberInputs)
Step 74-75: modify calculateCalories(e) with same syntax with Step 73 to declare lunchCalories dinnerCalories snacksCalories exerciseCalories
Step 76: modify calculateCalories(e) with declare budgetCalories & assign value using getCaloriesFromInputs([budgetNumberInput])
Step 77: modify calculateCalories(e) with adding if statement to checks the truthiness of isError 
Step 78: modify calculateCalories(e) with declare consumedCalories & assign value by sum of calories comsumed
Step 79: modify calculateCalories(e) with declare remainingCalories & assign value by subtracting consumedCalories from budgetCalories and adding exerciseCalories
Step 80: modify calculateCalories(e) with declare surplusOrDeficit with ternary operator 
Step 81: modify calculateCalories(e) with assigning output.innerHTML as empty template literal prepare for output final html
Step 82-84: modify calculateCalories(e) output.innerHTML template literal with adding span part within class setting & using interpolation(插值法 ${}) toLowerCase() Math.abs()
Step 85: modify calculateCalories(e) output.innerHTML template literal with adding hr
Step 86-87: modify calculateCalories(e) output.innerHTML template literal with adding three p part using interpolation
Step 88: modify calculateCalories(e) to make #output visable by using classList property with remove() method
Step 89: use addEventListener on calorieCounter to present onclick situation & to call calculateCalories()
Step 90: create clearForm() to clear form
Step 91: modify clearForm() with declare inputContainers & assign value as querying document for #input-container
Step 92: modify clearForm() with wraping document.querySelectorAll('.input-container') by Array.from() to get real array not NodeList for better process later
Step 93: create for loop to make all input container empty
Step 94: clear budgetNumberInput
Step 95: clear output by setting output.innerText to empty string , defferent from output.HTML , innerText only clear text not HTML elements
Step 96: restore hide class to output element
Step 97:use addEventListener on clearButton to present onclick situation & to call clearForm()

