// creating variable for retriving text input field
const textInput = document.getElementById('text-input');
const tasksForm = document.getElementById('tasks-form');
const addTaskForm = document.getElementById('add-task-form');
const subBtn = document.getElementById('subBtn');


//preventing submiting form
tasksForm.addEventListener('submit',function(event){event.preventDefault()});
addTaskForm.addEventListener('submit',function(event){event.preventDefault()});

//adding functionality to elements
textInput.addEventListener('keypress',function(event){createTask(event)});
subBtn.addEventListener('click',function(event){event.preventDefault;createTask(event)});


//function to create task element
function createTask(event) { 
     if(event.key === 'Enter' || event.type==='click'){
    event.preventDefault();
    if(textInput.value==''){
      alert('please enter some value');
    }else{
  let div = document.createElement('div');
  div.id = textInput.value;
  tasksForm.appendChild(div);

  let input = document.createElement('input');
  let span = document.createElement('button');
  input.setAttribute('type', 'text');
  input.value=  textInput.value
  span.setAttribute('class', 'text-btn remove-btn');
  span.innerText = 'Trash Icon';
  div.appendChild(input)
  div.appendChild(span)
  textInput.value = ''
  span.addEventListener('click',function(event){
    event.preventDefault;
    this.parentElement.remove();
  
  });
}
}}





    
    


