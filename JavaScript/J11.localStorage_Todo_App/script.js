/* 透過 HTML id 標籤建立相對應變數 */
const taskForm = document.getElementById('task-form')
const confirmCloseDialog = document.getElementById('confirm-close-dialog')
const openTaskFormBtn = document.getElementById('open-task-form-btn')
const closeTaskFormBtn = document.getElementById('close-task-form-btn')
const addOrUpdateTaskBtn = document.getElementById('add-or-update-task-btn')
const cancelBtn = document.getElementById('cancel-btn')
const discardBtn = document.getElementById('discard-btn')
const tasksContainer = document.getElementById('tasks-container')
const titleInput = document.getElementById('title-input')
const dateInput = document.getElementById('date-input')
const descriptionInput = document.getElementById('description-input')

/* 建立陣列用以追蹤、儲存、顯示所有task資料 */
// const taskData = []  // replaced by Step 63
/* 建立 taskData 陣列並透過 localStorage.getItem() 方法取得瀏覽器內的特定資料或是空陣列 */
const taskData = JSON.parse(localStorage.getItem('data')) || []

/* 建立物件用以追蹤目前編輯中或要刪除的task的狀態 */
let currentTask = {}

/* 建立 removeSpecialChars() 去除使用者誤輸入的特殊字元避免程式出錯 */
// 用箭頭函數也是可以的，但教程希望使用完整函數
// const removeSpecialChars = (string) => {
//     return string.replace(/[^A-Za-z0-9\s]/g, '');
// }
function removeSpecialChars(inputString) {
    return inputString.replace(/[^a-zA-Z0-9\s]/g, '');
}

/* 將 submit event listener 拆分重構成兩個獨立的函式, 一個將輸入值加進 taskData, 一個將任務添加到 DOM */
const addOrUpdateTask = () => {
    /* 判斷titleInput是否為空並予以提醒，不然即便在HTML中的input已經設定為reguired也沒用 */
    if (!titleInput.value.trim()) {
        alert("Please provide a title");
        return
    }
    /* 建立函數變數並使用findIndex()方法在陣列中尋找目前編輯中的task的id是否已經存在 */
    /* findIndex 會回傳符合條件的元素索引，若沒有找到，則回傳 -1 */
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);

    /* 建立物件變數用以儲存使用者新增的task資料 */
    const taskObj = {
        /* 根據使用者輸入的 title 建立獨有的 id 值並儲存到物件中 */
        // id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,  //change by Step 68 
        id: `${removeSpecialChars(titleInput.value).toLowerCase().split(" ").join("-")}-${Date.now()}`,
        /* 將使用者輸入的資料儲存到物件中 */
        title: removeSpecialChars(titleInput.value), //titleInput.value,    //change by Step 68 
        date: dateInput.value,
        description: removeSpecialChars(descriptionInput.value), //descriptionInput.value   //change by Step 68 
    };
    /* 如果 dataArrIndex 的值為 -1，表示 taskData 中還沒有這個任務（id 不存在） */
    /* 用 unshift 方法將新的任務物件 taskObj 插入到 taskData 的開頭位置 */
    if (dataArrIndex === -1) {
        taskData.unshift(taskObj);
    } /* 編輯中的 task 的 id 已經存在的狀況 */ else {
        taskData[dataArrIndex] = taskObj
    }
    /* 當使用者新增、編輯 task 時，將task items 存入至 localStorage 中 */
    localStorage.setItem("data", JSON.stringify(taskData));

    updateTaskContainer();
    reset();
}
const updateTaskContainer = () => {
    /* 清空 tasksContainer 內的內容以避免重複加入 */
    tasksContainer.innerHTML = "";
    /* 用 forEach() 方法來迭代陣列中的每個元素 */
    taskData.forEach(
        ({ id, title, date, description }) => {
            tasksContainer.innerHTML += `
            <div class="task" id="${id}">
              <p><strong>Title:</strong> ${title}</p>
              <p><strong>Date:</strong> ${date}</p>
              <p><strong>Description:</strong> ${description}</p>
              <button type="button" class="btn" onclick="deleteTask(this)">Delete</button>
              <button type="button" class="btn" onclick="editTask(this)">Edit</button>
            </div>
          `
        }
    );
}

/* 建立函式用以刪除 task */
const deleteTask = (buttonEl) => {
    /* 找出要刪除的 task 的 id */
    const dataArrIndex = taskData.findIndex(
        (item) => item.id === buttonEl.parentElement.id
    );
    /* 用 .remove() 方法刪除該元素的父元素  */
    buttonEl.parentElement.remove();
    /* 用 .splice() 方法將該任務從 taskData 陣列中刪除 */
    taskData.splice(dataArrIndex, 1);   // 1 是參數不是數量
    /* 當使用者刪除 task 時，將task items 存入至 localStorage 中 */
    localStorage.setItem("data", JSON.stringify(taskData));
}

/* 建立函式用以編輯 task */
const editTask = (buttonEl) => {
    /* 找出要編輯的 task 的 id */
    const dataArrIndex = taskData.findIndex(
        (item) => item.id === buttonEl.parentElement.id
    );
    /* 將目前編輯中的 task 的狀態儲存到 currentTask 變數中 */
    currentTask = taskData[dataArrIndex];
    /* 將目前編輯中的 task 的資料填入到輸入欄位中 */
    titleInput.value = currentTask.title;
    dateInput.value = currentTask.date;
    descriptionInput.value = currentTask.description;
    /* 設定按鈕的文字 */
    addOrUpdateTaskBtn.innerText = "Update Task";
    /* 切換顯示表單 */
    taskForm.classList.toggle("hidden");

}

/* 建立函式變數用以清除輸入欄位的內容 */
const reset = () => {
    /* 設定按鈕的文字不然會出現錯誤的文字"Update Task" */
    addOrUpdateTaskBtn.innerText = "Add Task"
    titleInput.value = ""
    dateInput.value = ""
    descriptionInput.value = ""
    taskForm.classList.toggle("hidden")
    currentTask = {}

}

/* 檢查 taskData 陣列是否為空，若不為空則執行 updateTaskContainer() */
if (taskData.length) {
    updateTaskContainer()
}


/* 建立物件的事件監聽器當按鈕被點擊時,開啟或關閉新增/編輯 task 的表單 */
openTaskFormBtn.addEventListener("click", () => {
    taskForm.classList.toggle("hidden")
})

/* 建立物件的事件監聽器當按鈕被點擊時,顯示 Discard and Cancel按鈕 */
closeTaskFormBtn.addEventListener("click", () => {
    const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value
    const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description
    /* chage by Step 35 & Step 53*/
    if (formInputsContainValues && formInputValuesUpdated) {
        confirmCloseDialog.showModal()
    } else {
        reset()
    }

})

/* 建立物件的事件監聽器當按鈕被點擊時,取消程序並關閉 modal 讓使用者繼續編輯 */
cancelBtn.addEventListener("click", () => {
    confirmCloseDialog.close()
})

/* 建立物件的事件監聽器當按鈕被點擊時,關閉 Discard and Cancel按鈕,並隱藏表單 */
discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close()
    // taskForm.classList.toggle("hidden")  replace with reset() by Step 33
    reset()
})

/* 建立物件的事件監聽器當按鈕被點擊時,收取輸入的表單資料,存入taskData陣列,並顯示在頁面上 */
taskForm.addEventListener("submit", (e) => {
    /* 阻止預設的表單提交行為，避免頁面重新載入 */
    e.preventDefault();

    /* move all below to addOrUpdateTask() & updateTaskContainer() seperately in Step 36-38 */
    // /* 建立函數變數並使用findIndex()方法在陣列中尋找目前編輯中的task的id是否已經存在 */
    // /* findIndex 會回傳符合條件的元素索引，若沒有找到，則回傳 -1 */
    // const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);

    // /* 建立物件變數用以儲存使用者新增的task資料 */
    // const taskObj = {
    //     /* 根據使用者輸入的 title 建立獨有的 id 值並儲存到物件中 */
    //     id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    //     /* 將使用者輸入的資料儲存到物件中 */
    //     title: titleInput.value,
    //     date: dateInput.value,
    //     description: descriptionInput.value
    // };
    // /* 如果 dataArrIndex 的值為 -1，表示 taskData 中還沒有這個任務（id 不存在） */
    // /* 用 unshift 方法將新的任務物件 taskObj 插入到 taskData 的開頭位置 */
    // if (dataArrIndex === -1) {
    //     taskData.unshift(taskObj);
    // }
    // /* 用 forEach() 方法來迭代陣列中的每個元素 */
    // taskData.forEach(
    //     ({ id, title, date, description }) => {
    //         tasksContainer.innerHTML += `
    //         <div class="task" id="${id}">
    //           <p><strong>Title:</strong> ${title}</p>
    //           <p><strong>Date:</strong> ${date}</p>
    //           <p><strong>Description:</strong> ${description}</p>
    //           <button type="button" class="btn">Edit</button>
    //           <button type="button" class="btn">Delete</button>
    //         </div>
    //       `
    //     }
    // );
    // // taskForm.classList.toggle("hidden"); replace with reset() by Step 32
    // reset()
    addOrUpdateTask()
});

/* DEMO 透過 localStorage 存取 taskData 陣列 */
// const myTaskArr = [
//     { task: "Walk the Dog", date: "22-04-2022" },
//     { task: "Read some books", date: "02-11-2023" },
//     { task: "Watch football", date: "10-08-2021" },
// ];

/* 用 localStorage.setItem() 方法來將陣列儲存到瀏覽器內，data是key，JSON.stringify()方法將陣列轉換為字串 */
// localStorage.setItem("data", JSON.stringify(myTaskArr))

// /* localStorage.remove() 方法用來刪除瀏覽器內的特定資料 */
// // localStorage.removeItem("data")  // replaced by Step 59
// // console.log(localStorage.getItem("data"))   // get result as null
/* localStorage.clear() 方法用來清空瀏覽器內的所有資料 */
// localStorage.clear()
// console.log(localStorage.getItem("data"))   // get result as null

/* localStorage.getItem("data") 用來取得瀏覽器內的特定資料 */
// const getTaskArr = localStorage.getItem("data")
// console.log(getTaskArr)

/* JSON.parse(localStorage.getItem("data")) 取得瀏覽器內的特定資料並轉換為陣列 */
// const getTaskArrObj = JSON.parse(localStorage.getItem("data"))
// console.log(getTaskArrObj)

