'use strict';
 const listContainer=document.getElementById('list-container');
 const inputBox=document.getElementById('input-box');



 function addTask(){
    if(inputBox.value=== ''){
        alert(`Enter Some Data`)
    }else{
        //  it's doing list, when you enter some text in input click add 
        let li=document.createElement(`li`);
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        //  its add remove x elements 
        let span=document.createElement('span')
        span.innerHTML = `\u00d7`;
        li.appendChild(span);
    }

    //   when you write some text in input and click add it it's appear in input
    inputBox.value="";
    saveTask();
 };
//  when i click list check image appear
 listContainer.addEventListener(`click`, function(e){

    if(e.target.tagName ==='LI'){
       e.target.classList.toggle(`checked`);
        saveTask();
        // remove elements
    }else if(e.target.tagName ==='SPAN'){
        e.target.parentElement.remove();
        saveTask();
    }
 });

// when click check image appear

 function saveTask(){
    localStorage.setItem(`data`, listContainer.innerHTML)
 }

function showTask(){
    listContainer.innerHTML=localStorage.getItem(`data`);
};
showTask();
