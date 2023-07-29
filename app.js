const input = document.querySelector('.entered-list');
const addBtn = document.querySelector('.add-list');
const tasks = document.querySelector('.tasks');

//addbtn disabled

input.addEventListener('keyup' , () => {
    if(input.value.trim () !=0){
        addBtn.classList.add('active')
    } else{
        addBtn.classList.remove('active')
    }
})

//add new item to the list

addBtn.addEventListener('click' , () => {
    if (input.value.trim() !=0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
                <div class="itembutton">
                    <i class="fa-solid fa-circle-check" style="color: #000000;"></i>
                    <i class="fa-solid fa-eraser" style="color: #000000;"></i>
                    
                </div>        
        `
        tasks.appendChild(newItem);
        input.value = " ";
    } else{
        alert('Please enter a task')
    }
})

//delete item from list

tasks.addEventListener('click' , (e) => {
    if (e.target.classList.contains('fa-eraser')) {
        e.target.parentElement.parentElement.remove();
    }
})

//mark item as completed

tasks.addEventListener('click' , (e) => {
    if (e.target.classList.contains('fa-circle-check')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})
