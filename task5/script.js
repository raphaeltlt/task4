const  inputWord = document.querySelector('input');
const  dupStr = document.querySelector('#duplicateField');
const  logButton = document.querySelector('button');

inputWord.addEventListener('keypress', (e)=>{

    dupStr.textContent = inputWord.value;

})

logButton.addEventListener('click', (e)=>{

    dupStr.textContent = '';

    console.log(inputWord.value);

    e.preventDefault();

})
