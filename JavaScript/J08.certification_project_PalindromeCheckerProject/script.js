// 1.接收用户输入
// 2.檢查是否為回文
// 2.1 檢查是否有輸入
// 2.1.1 如果沒有輸入,顯示請輸入文字
// 2.2 去除所有非字母數字的字符（標點、空格和符號）
// 2.3 轉成大寫或小寫
// 3.輸出結果
// 4.顯示結果

// 

const userInput = document.querySelector('#text-input');
const checkButton = document.querySelector('#check-btn');
const resultDiv = document.querySelector('.result');

const checkInput = input => {
    const originalInput = input;
    if (input === '') {
        alert('Please input a value');
        return;
    }

    resultDiv.replaceChildren();

    const lowerCaseString = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

    let resultMsg = () => {
        if (lowerCaseString === [...lowerCaseString].reverse().join('')) {
            return `${originalInput} is a palindrome.`;
        } else {
            return `${originalInput} is not a palindrome.`;
        }
    }

    const resultTag = document.createElement('p');
    resultTag.className = 'user-input';
    resultTag.innerText = resultMsg();
    resultDiv.appendChild(resultTag);
    resultDiv.classList.remove('hidden');
}

checkButton.addEventListener('click', () => {
    checkInput(userInput.value);
    userInput.value = '';
})