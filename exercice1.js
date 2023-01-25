
/***********************************************************************************
 * ---------------------------------------------------------------------------------
 * @author Melissa Kouadio <angemelisk@gmail.com>
 * @description : 
 * Create multiple squares / boxes with letters inside.There should be 26 squares / boxes for all the letters(A to Z) next to each other.
 * Make all the squares draggable.
 * You should be able t
 * **********************************************************************************/   


let alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];
alphabet.forEach(a => {
    let d = document.createElement('div')
    document.querySelector('.container').appendChild(d)
    d.classList.add('box')
    d.textContent = a
    d.setAttribute('draggable', true) // add draggable attribut
    d.addEventListener('dragend', (e) => { // parametre draggable event options
        d.style.position = 'absolute'
        d.style.left = (e.clientX - 50) + "px"
        d.style.top = (e.clientY - 50) + "px"
    })
});