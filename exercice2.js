/***********************************************************************************
 * ---------------------------------------------------------------------------------
 * @author Melissa Kouadio <angemelisk@gmail.com>
 * @description : 
 * Create a paragraph and make it draggable.
 * You should be able to drag and drop the paragraph.
 * Change the font size of the paragraph according to the screen coordinates.
 * **********************************************************************************/ 

let p = document.querySelector('p')
p.setAttribute('draggable', true)
p.addEventListener('dragend', (e) => {
    p.style.position = 'absolute';
    p.style.left = (e.x) + "px";
    p.style.top = (e.y) + "px";
    p.style.fontSize = (((e.x + e.y) / 2) % 48).toString() + "pt";
    p.style.color = "blue";
})