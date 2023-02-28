let addtodobutton=document.getElementById('addbutton');
let todocontent=document.getElementById('todocontainer');
let inputfield=document.getElementById('inputfield');

addtodobutton.addEventListener('click',function(){
    var paragraph=document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText=inputfield.value;
    todocontent.appendChild(paragraph);


    inputfield.value='';
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration='line-through';
    })

    paragraph.addEventListener('dblclick',function(){
        todocontent.removeChild(paragraph);
    })
})