- Step 1: declare taskForm confirmCloseDialog openTaskFormBtn & assign each value by getElementById()
- Step 2: declare closeTaskFormBtn addOrUpdateTaskBtn cancelBtn & assign each value by getElementById()
- Step 3: declare discardBtn tasksContainer titleInput & assign each value by getElementById()
- Step 4: declare dateInput descriptionInput & assign each value by getElementById()
- Step 5: declare taskDate[] as empty array for saving tracking & displaying all the tasks , declare currentTask{} as empty object for tracking state when editing & discarding tasks
- Step 6: add openTaskFormBtn.addEventListener("click", () =>{taskForm.classList.toggle("hidden")}) to make the form model visible by using .classList.toggle() method (add or remove by status)
- Step 7: add closeTaskFormBtn.addEventListener("click", () => { confirmCloseDialog.showModal() }) to display Discard and Cancel button using .showModal() method
- Step 8: add cancelBtn.addEventListener("click", () => { confirmCloseDialog.close() }) to cancel process & close modal to let user continue edit by .close() method
- Step 9: add discardBtn.addEventListener("click", () => { confirmCloseDialog.close() taskForm.classList.toggle("hidden")
}) to close modal & hidden form
- Step 10: add taskForm.addEventListener("submit", (e) => { e.preventDefault() }) to stop the browser from refreshing the page after submitting the form
- Step 11: declare dataArrIndex & assign value as taskData.findIndex() method & pass in an arrow function with item as the parameter & in arrow function check if item.id === currentTask.id inside Step 10
- Step 12: declare taskObj with value of empty object assigned & use console.log to see taskObj in console inside Step 10
- Step 13: inside taskObj add id property with titleInput.value as value
- Step 14: make titleInput.value in lowercase by chaining  .toLowerCase() method 
- Step 15-16: chain .split(" ") method to titleInput.value & chain .join("-") method to titleInput.value to make value of id to hyphenated string (連字號字串)
- Step 17-18 : put entire value of id into `${ }` & add -${date.now()} in the end of ` ` to make value of id more unique
- Step 19-20: retrieve value from titleInput, dateInput, descriptionInput & save them in property title, date, description in taskObj then remove console.log
- Step 21: add if statement with condition dataArrIndex === -1 then add taslObj to the begining of taskDat[] using .unshift() method inside Step 10
- Step 22: use .foreach() method on taskData & use id, title, date, description as destructure parameters in foreach()
- Step 23: Using arrow syntax complete the forEach callback function & assign tasksContainer.innerHTML use an addition assignment(+=) to empty backticks(``)
- Step 24: add div element with class="task" id="${id}"
- Step 25: add p element with ${title}(template strings) as content & before it add strong element with Title: as content
- Step 26: use the same way as Step:25 to deal with Date: ${date}
- Step 27: use the same way as Step:25 to deal with Description: ${description}
- Step 28: create two buttons with type="button" class="btn" text for Edit & Delete
- Step 29: close form modal by using classList.toggle("hidden")
- Step 30: declare reset using arrow syntax as a function to reset the input fields
- Step 31: set value of titleInput, dateInput, descriptionInput to an empty string & use classList to toggle the class hidden on taskForm & set currentTask to empty object
- Step 32: replace taskForm.classList.toggle("hidden") at the bottom of the taskForm.addEventListener(){} with callling reset function
- Step 33: replace taskForm.classList.toggle("hidden") in discardBtn.addEventListener(){} with callling reset function
- Step 34: declare formInputContainValues for checking if titleInput field、dateInput field or descriptionInput field is empty or not at the begining of closeTaskFormBtn.addEventListener(){} 
- Step 35: add if statemet to check if formInputsContainValues is true then indicate user there are changes using confirmCloseDialog.showModal() otherwise calll reset function
- Step 36: refactor submit event listener to two functions which 1st is to add input values to taskData() & 2nd is to add tasks to DOM. declare addOrUpdateTask using arrow syntax then move dataArrIndex variable, taskObj object if statement into the addOrUpdateTask function
- Step 37: declare addOrUpdateTask using arrow syntax then move taskData.forEach() and its content into addOrUpdateTask function
- Step 38: inside addOrUpdateTask function call updateTaskContainer() & reset()
- Step 39: remove reset() & call addOrUpdateTask() at the end of taskForm.addEventListener(){}
- Step 40: UpdateTaskContainer() should set tasksContainer.innerHTML to empty string to prevent the duplicated tasks
- Step 41: add onclick attribute to both button in taskData.forEach() in updateTaskContainer() & set value of onclick attribute to editTask(this) for Edit button & deleteTask(this) for Delete button. "this" is a keyword reffers to the current context 
- Step 42: delcare deleteTask using arrow syntax & pass buttonEl as parameter with empty content in function part
- Step 43: inside deleteTask() declare dataArrIndex as variable with taslData.findIndex() as value & pass in an arrow callback function with item as the parameter & in arrow function check if item.id === buttonEl.id to find the index of the task to be deleted
- Step 44: remove rask from DOM using remove() method & remove taskData[] using .splice() method by buttonEl.parentElement.remove() & taskData.splice(dataArrIndex, 1)
- Step 45: declare editTask using arrow syntax & pass buttonEl as parameter with empty content in function part
- Step 46: same as Step 43 to find the index of the task to be edited
- Step 47: assign taskData[dataArrIndex] to currentTask to keep track of the task to be edited
- Step 48: assign value of titleInput, dateInput, descriptionInput with currentTask.title, currentTask.date, currentTask.description 
- Step 49: set addUpdateTaskBtn to "Update Task" string
- Step 50: display form modal by using classList.toggle("hidden"), (the edit function is still not working right now)
- Step 51: find if statement inside addOrUpdateTask & add else statement to set taskData[dataArrIndex] to taskObj to complete the edit function(Update Task BTN)
- Step 52: use titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description to check if there is any changes in the input fields & assign to new const formInputsContainValues inside closeTaskFormBtn.addEventListener() because if there is no change t hen no need to show the Discard and Cancel button
- Step 53: inside closeTaskFormBtn. change if statement condition to be formInputsContainValues && formInputValuesUpdated then when user click the closeTask button without any change then the cancel & discard button will not be displayed
- Step 54: use localStorage.setItem() method to practice saving demo data myTaskaArr & observe in the console localStore find out there only objects no data inside object
- Step 55: use JSON.stringify() method to convert myTaskArr to string in order to fit the rule that everything you save in localStorage needs to be in string format &　observe in the console localStore find out there are data inside object
- Step 56: use localStorage.getItem() method to retrive myTaskArr[] from localStorage & assign to getTaskArr & use console.log(getTaskArr) to verify data print in console
- Step 57: use JSON.parse(localStorage.getItem("data")) method to convert string to original form & assign to getTaskArrObj & use console.log(getTaskArrObj) to verify data print in console
- Step 58: use localStorage.removeItem() method to remove myTaskArr[] from localStorage & observe in the console localStore find out there are no data inside object
- Step 59: use localStorage.clear() method to replace localStorage.removeItem() to remove all data from localStorage & observe in the console localStore find out there are no data inside object
- Step 60: clear all related codes to myTaskArr[] & localStorage because the demo ends
- Step 61: 