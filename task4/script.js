const  testRef = document.querySelector('a');


testRef.addEventListener('click', (e)=>{


    testRef.textContent = prompt("Введите текст");
    
    e.preventDefault();

})

