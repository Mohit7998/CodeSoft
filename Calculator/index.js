let screen = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e)=> {
        if (e.target.innerHTML == '=') {
            screen = eval(screen);
            document.querySelector('input').value = screen;
        }
        else if(e.target.innerHTML == 'AC'){
            screen = ""
            document.querySelector('input').value = screen;
        }
        else if(e.target.innerHTML == 'DEL'){
            screen = screen.slice(0, -1);
            document.querySelector('input').value = screen;
        }
        else {
            console.log(e.target)
            screen = screen + e.target.innerHTML;
            document.querySelector('input').value = screen;
        }
    })
})

