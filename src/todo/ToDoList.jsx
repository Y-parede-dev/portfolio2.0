import { useEffect, useState } from 'react';
import './todo.css'
export const ToDoList = () => {
    
    const [test, settest] =  useState(false)
    const r = ()=>{
        settest(!test)
    }
    window.onload = ()=>{

        let $ = document;
          const addTodoBtn = $.getElementById("add_btn");
          const todoFormModal = $.getElementById("todo_form");
          const closeModal = $.querySelector(".close-modal");
          const todoInput = $.getElementById("todo_input");
          const todoSubmit = $.getElementById("todo_submit");
          const noStatus = $.getElementById("no_status");
          const statusTables = $.querySelectorAll(".status");
    
          function openModalTodo() {
            todoFormModal.classList.add("active");
            closeModal.addEventListener("click", function () {
              todoFormModal.classList.remove("active");
            });
          }
    
          function removeTodo(event) {
            todoFormModal.classList.remove("active");
            event.target.parentElement.remove();
          }
    
          function addTodoInTable() {
            const inputValue = todoInput.value;
            if (inputValue) {
              const spanElem = $.createElement("span");
              spanElem.innerHTML = "&times;";
    
              const divElem = $.createElement("div");
              divElem.className = "todo";
              divElem.setAttribute("draggable", "true");
              divElem.innerHTML = inputValue;
    
              divElem.append(spanElem);
              noStatus.append(divElem);
              todoInput.value = "";
    
              spanElem.addEventListener("click", removeTodo);
    
              // divElem.forEach(function(elem) {
              //     elem.addEventListener("dragstart", function(event) {
              //         console.log("helo")
              //     })
              // })
    
              statusTables.forEach(function (statusTable) {
                statusTable.addEventListener("dragover", function (event) {
                  event.preventDefault();
                });
    
                statusTable.addEventListener("drop", function (event) {
                  event.target.append(divElem);
                });
              });
            }
          }
    
          addTodoBtn.addEventListener("click", openModalTodo);
          todoSubmit.addEventListener("click", addTodoInTable);
          todoInput.addEventListener("keydown", function (event) {
            if (event.keyCode === 13) {
              addTodoInTable();
            }
          });
    }

    return(
    <div className='TDL'>
    
     <button onClick={r} className='reduce'>{!test?<span>TODO</span>:<span>X</span>}</button>
   
       {test? <div>
       <div className="modal" id="todo_form">
        <div className="header">
            <div className="title">Add Todo</div>
            <button className="btn-close-modal close-modal">&times;</button>
        </div>
        <div className="body">
            <input type="text" id="todo_input" />
            <input type="submit" value="Add Todo" id="todo_submit" />
        </div>
        </div>
        <div className="todo-container">
        <div className="status" id="no_status">
            <h1>No Status</h1>
            <button id="add_btn" data-target-modal="#todo_form">+ Add Todo</button>
            
        </div>
        <div className="status">
            <h1>Not Started</h1>
        </div>
        <div className="status">
            <h1>In Progress</h1>
        </div>
        <div className="status">
            <h1>Completed</h1>
        </div>
        </div>

        <div id="overlay"></div></div>:""
}
    
  </div>
    )
}