window.addEventListener("load", () => {
  const todoInput = document.querySelector("#todoInput");
  const addBtn = document.querySelector(".addBtn");
  const taskBox = document.querySelector(".taskBox");
  const totalTasks = document.querySelector('.totalTasks');
  let savedTasks = { ...localStorage };
  // console.log(Object.values(savedTasks));
  let allTasks = Object.values(savedTasks);
  addBtn.addEventListener("click", () => {
    const task = todoInput.value;
    let taskID = Date.now();
    // console.log(taskID);
    localStorage.setItem(taskID, task);
    allTasks.push(JSON.stringify(localStorage.getItem(taskID)));

    if (!task) {
      alert("Please Enter Some Task to Add");
      return;
    }

    const taskElem = document.createElement("div");
    taskElem.classList.add("task");

    const taskInput = document.createElement("input");
    taskInput.setAttribute("type", "checkbox");

    const taskLabel = document.createElement("input");
    taskLabel.setAttribute('class', 'text');
    taskLabel.setAttribute('type', 'text');
    taskLabel.setAttribute('readonly', 'readonly');
    taskLabel.value = task.trim();

    const taskEditSaveBtn = document.createElement("button");
    taskEditSaveBtn.classList.add("taskEditSaveBtn");
    taskEditSaveBtn.innerText = "Edit";

    const taskDoneBtn = document.createElement("button");
    taskDoneBtn.classList.add("taskDone");
    taskDoneBtn.innerText = "Delete";

    taskElem.appendChild(taskInput);
    taskElem.appendChild(taskLabel);
    taskElem.appendChild(taskDoneBtn);
    taskElem.appendChild(taskEditSaveBtn);

    // taskBox.appendChild(taskElem);
    taskBox.insertAdjacentElement('afterbegin', taskElem)
    todoInput.value = "";

    totalTasks.innerText = `Total Tasks: ${taskBox.getElementsByClassName('task').length}`;

    console.log(taskBox.getElementsByClassName('task').length);

    taskEditSaveBtn.addEventListener("click", () => {
      taskLabel.toggleAttribute('readonly');
      taskLabel.setSelectionRange(taskLabel.value.length, taskLabel.value.length);

      if (taskLabel.hasAttribute('readonly')) {
        taskEditSaveBtn.innerHTML = 'Edit';
      } else {
        taskEditSaveBtn.innerHTML = 'Save';
        taskLabel.focus();
      }
    });


    taskDoneBtn.addEventListener("click", () => {
      taskBox.removeChild(taskElem);
      totalTasks.innerText = `Total Tasks: ${taskBox.getElementsByClassName('task').length}`;
    });
  });

});

// const sunBtn = document.querySelector('.sun')
// const moonBtn = document.querySelector('.moon')

const navbar = document.querySelector('.nav-section');
const container = document.querySelector('.container');
const day = document.querySelector('#day')
const night = document.querySelector('#night')

day.addEventListener('click', () => {
  document.body.style.filter = 'invert(1) hue-rotate(200deg)';
})

night.addEventListener('click', () => {
  document.body.style.filter = '';
})

$(document).ready(() => {

  $('#night').fadeOut();

  $('#day').click(() => {
    $('#day').fadeOut()
    $('#night').fadeIn()

  })

  $('#night').click(() => {
    $('#day').fadeIn()
    $('#night').fadeOut()
  })
})






