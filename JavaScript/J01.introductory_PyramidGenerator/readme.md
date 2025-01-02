### 重點

- console.log()
- 宣告
  - let
  - const
- 資料類型
  - string(單雙引號)
  - number(可運算)
  - 陣列：長度、首位、尾位、索引、push()(retuen新的陣列長度)、pop()(return被刪的值)、
  - undifiend
- 賦值：=
- for 迴圈：for ("iterator"; "condition"; "iteration") {logic;}
  - iterator：初始值
  - condition：條件判斷，布林敘述
  - iteration：如何迭代
  - logic：邏輯，執行的程式碼
- if - else if -else 判斷式
  -  if (true) { console.log("Condition is true") }  // condition is true so this line is shown and executed
  - if (false) { console.log("Condition is true") } // condition is false so this line is not shown and not executed
  - if ("false") { console.log("Condition is true") } // condition is not a boolean
  - truly value
    - 布林解讀後為 True 的值
    - 條件被視為真的值
    - 非零數字（如 `1`, `-5.5`）
    - 非空字串（如 `"Hello"`, `" "`）
    - 非空容器（如 `[1, 2]`, `{}`，但空集合例外）
    - `rue` 本身
  - falsy value
    - `false` 本身
    - 數值 `0`、`0.0`、-0、0n
    - 空字串 `""`、''
    - 空值 `null`
    - 位定義 `undefined`
    - 非數值 `NaN`
- while 迴圈 while(continueLoop) {  done++ ; }
  - 無限循環：infinity loop
  - break：跳脫循環
  - 增量運算符：increment operator
    - 後置增量：i++
      - 當你需要變數的舊值作為某些操作的輸入，再讓變數自增
      - 在迴圈控制中，使用後置增量更直觀，因為增量的邏輯通常放在迴圈結尾
    - 前置增量：++i
      - 當你需要變數的更新值立即影響後續運算
      - 強調效能時，前置增量可能更快，因為少了一次返回舊值的動作。
- 相等運算符：==
  - 嚴格相等運算符：===
    - 資料類型必須相同
    - 不會自動進行型別轉型
- 函式：function
  - 宣告
  - 參數
  - 回傳值
  - 呼叫
- 變數範圍：
  - 全域
  - 區域
- return：回傳值
  - 另一個含意是結束函式，就是說在 return後的程式碼是不會執行的
  - 衍伸出來的意思是退出函式
- 註解
  - 單行 //
  - 多行 /* */

### 直角三角形的半金字塔圖形

- Lesson 38：用 for迴圈加上 push()方法將序列數字 (0~7)寫進 rows[]
- Lesson 42：用另一個 for迴圈將 rows[]的元素迭代並增加，寫進 result字串
- Lesson 43：在第二個 for迴圈中增加換行符號把數字改成做垂直排列
- Lesson 44：用#字元取代序列數字 (0~7)
- Lesson 45：在第一個 for迴圈中加入 repeat()方法讓#字元數量隨行數增加並維持垂直排列
- Lesson 46：在第一個 for迴圈修正 off-by-one的問題 (序列從0開始還是從1開始)
- Lesson 67：建立 padRow(rowNumber, rowCount)函式並取代 Lesson 45中的 repeat()方法

### 正三角形的金字塔圖形

- Lesson 68：修正 padRow(rowNumber, rowCount)函式中的回傳值，在 #字元前後分別加入一個空白字串" "，輸出為原直角三角形每列前面多一個空白
- Lesson 69：修正 padRow(rowNumber, rowCount)函式中的回傳值，把 #字元前後分別加入" ".repeat(rowCount - rowNumber)，輸出變成鏡像的直角三角形
- Lesson 70：修正 padRow(rowNumber, rowCount)函式中的回傳值，把 #字元修改成 character.repeat(2 * rowNumber - 1)，輸出變成正三角形，但頂部有一空白列，底部只有15個#字元
- Lesson 73：修正第一個 for迴圈讓i從1開始結果輸出少了第一列的一個#字元
- Lesson 74：修正第一個 for迴圈中呼叫 padRow(rowNumber, rowCount)函式時的引數從 i + 1變成 i,輸出頂部的第一列出現了但是底部少一列只有13個 #字元
- Lesson 75：修正第一個 for迴圈中條件式讓 i < count變成 i <= count，輸出底部恢復有15個 #字元，整體圖形正常

### 用 while迴圈製作的正三角形金字塔圖形

- Lesson 90：用while迴圈搭配 if判斷式取代第一個 for迴圈，在 while
- .迴圈中以row.push()呼叫padRow(done, count)，將資料填入row[ ]中，用 if判斷式來中止 while迴圈

### 精簡程式碼

- Lesson 92-93 & 97：將 if判斷式與 continueLoop與 done移除因為在呼叫padRow(done, count)函式中已經包含了該功能
- Lesson 94-95：將 while迴圈的判斷式改成 rows.length < count
- Lesson 96：將 padRow() 函式的參數改成 rows.length + 1, count

### 上下顛倒的金字塔圖形

- Lesson 99：取消 while迴圈

- Lesson 100-104：加入 for迴圈 

  ```
  for (let i = count; i > 0; i--) {
      rows.push(padRow(i, count))
  }
  ```

### 陣列方式介紹

- Lesson 107：array.unshift() vs array.push()
  - array.unshift() 在開頭新增元素，array.push()在結尾新增元素
  - 兩者的回傳值都是新的長度
  - array.unshift() 效能較差因為所有元素的索引都要更動
  - 使用情境不同，做不同的選擇
- Lesson 108：array.shift() vs array.pop()
  - array.shift() 在開頭刪除元素，array.pop()在結尾刪除元素
  - 兩者的回傳值都是被移除的元素，若為空陣列則回傳 undefined
  - array.shift() 效能較差因為所有元素的索引都要更動
  - 使用情境不同，做不同的選擇

### 另一種上下顛倒的金字塔圖形

- Lesson 110：恢復到 Lesson 75的狀態
- Lesson 111：修改第一個 for 迴圈，用 unshift()取代 push()

### 讓正置金字塔與顛倒金字塔可以切換

- Lesson 116：在第一個 for迴圈前增加一變數 inverted，賦值為true，並加入if 判斷式，當 inverted為 true，產生倒金字塔，否則產生正金字塔

  ```
  let inverted = true;
  for (let i = 1; i <= count; i++) {
    if (inverted) {
      rows.unshift(padRow(i, count));
    } else {
  	rows.push(padRow(i, count));
    }
  }
  ```

  
