
const inputTask = document.getElementById('input-task');
const taskList = document.getElementById('task-list');
// submit-task button add eventlitenar
let totalTaskCount = 0;
document.getElementById('submit-task').addEventListener('click', function () {
    if (inputTask.value != '') {
       
        const prent = document.createElement('div');
        prent.classList.add('card', 'mb-3');
        const subprent = document.createElement('div');
        subprent.classList.add('card-body');
        prent.appendChild(subprent);
        const h4 = document.createElement('h4');
        h4.classList.add('card-title');
        h4.innerText = inputTask.value;
        subprent.appendChild(h4);
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-primary');
        button.id = "done-button";
        button.innerText = "Done";
        subprent.appendChild(button);
        taskList.appendChild(prent);
        // console.dir(taskList.childElementCount);
        updateResult();
        buttonListener();
    }
    inputTask.value = '';
   

})
function buttonListener() {
    const cards = document.getElementsByClassName('card');
    for (card of cards) {
        card.addEventListener('click', function (event) {
            if (event.target.innerText == "Done") {
                event.target.setAttribute("disabled", true);
                event.target.innerText = "Completed";
                totalTaskCount++;
                updateResult();
            }
        })
    }
}
function updateResult() {
    const totalTask = document.getElementById('total-task');
    const doneTask = document.getElementById('done-task');
    const undoneTask = document.getElementById('undone-task');

    totalTask.innerText = taskList.childElementCount;
    doneTask.innerText = totalTaskCount;
    undoneTask.innerText = Number(taskList.childElementCount) - Number(totalTaskCount);
}

// Search 

function inputSearch(event) {
    const searchKey = event.target.value.toLowerCase();
    filtersearch(searchKey);
}

function filtersearch(searchKey) {
    const cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++){
        const element = cards[i];
        if (element.innerText.toLowerCase().includes(searchKey)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}