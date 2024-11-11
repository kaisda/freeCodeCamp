Step 1: SyntaxError => items in array should always be separated by commas
Step 2: ReferenceError => math object should be with capital M
Step 3-1 : darkColorsArr.length * Math.random() => 將陣列長度與隨機小數相乘，得到一個介於 0 到陣列長度之間的隨機數
Step 3-2 :　Math.floor(darkColorsArr.length * Math.random()) => 直接將浮點數向下取整，得到整數部分
Step 4: TypeError => calling or assign functions should follow the camel naming system
Step 5: null => document.querySelector should use # or . to select by id or class
Step 6: undefined => calling function should be with name + ()
Step 7: null => element name in document.querySelector should be the same in html definition
Step 8: 呼叫函式的方式
Step 8-1: 直接呼叫，立即執行並返回結果
'''
function sayHello() {
  console.log("Hello!");
}
sayHello(); // 立即呼叫並執行 sayHello 函式，輸出 "Hello!"
'''
Step 8-2: 把函數當作變數或屬性來參考
'''
function greet() {
  console.log("Greetings!");
}
const saySomething = greet; // 將 greet 函式本身賦值給 saySomething 變數
saySomething(); // 點擊時才會呼叫 `greet` 函式，輸出 "Greetings!"
'''
Step 8-3: 用於事件處理程序，例如 onclick
'''
function changeBackgroundColor() {
  document.body.style.backgroundColor = "lightblue";
}

button.onclick = changeBackgroundColor; // 點擊 button 時才會執行 changeBackgroundColor

'''
Step 8-4: 立即執行函式表達式(IIFE)
'''
(function() {
  console.log("This runs immediately!");
})();
// 輸出 "This runs immediately!"，並且這段程式碼只會執行一次
'''