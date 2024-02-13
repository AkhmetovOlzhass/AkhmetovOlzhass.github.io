document.addEventListener('DOMContentLoaded', () => {
    const addWrap = document.querySelector(".promo__tasks");
    const addInput = document.querySelector(".promo form input");
    const addForm = document.querySelector(".promo form");
    let counter = 0;

    getData();
    deleteTask();

    if(addWrap.querySelectorAll(".promo__tasks-task").length > 0){
        addWrap.style.border = "1px solid #c3c3c3";
    }

    addWrap.addEventListener('click', (e) => {
        if(e.target.tagName === "LABEL"){
            const checkBlock = e.target.parentElement;
            checkBlock.classList.toggle("checkTask");
            saveData();
        } 
    })
    
    function createTask(text){
        addWrap.style.border = "1px solid #c3c3c3";

        const elem = document.createElement('div');
        elem.classList.add("promo__tasks-task");

        elem.innerHTML = `
            <div class="checkbox-block">
                <input id="check${counter}" type="checkbox">
                <label for="check${counter}"></label>
            </div>
            <p  class="checkValue">${text}</p>
            <button>
                <svg fill="#fe4d4d" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 900.5 900.5" xml:space="preserve"
                    >
                <g>
                    <path d="M176.415,880.5c0,11.046,8.954,20,20,20h507.67c11.046,0,20-8.954,20-20V232.487h-547.67V880.5L176.415,880.5z
                        M562.75,342.766h75v436.029h-75V342.766z M412.75,342.766h75v436.029h-75V342.766z M262.75,342.766h75v436.029h-75V342.766z"/>
                    <path d="M618.825,91.911V20c0-11.046-8.954-20-20-20h-297.15c-11.046,0-20,8.954-20,20v71.911v12.5v12.5H141.874
                        c-11.046,0-20,8.954-20,20v50.576c0,11.045,8.954,20,20,20h34.541h547.67h34.541c11.046,0,20-8.955,20-20v-50.576
                        c0-11.046-8.954-20-20-20H618.825v-12.5V91.911z M543.825,112.799h-187.15v-8.389v-12.5V75h187.15v16.911v12.5V112.799z"/>
                </g>
                </svg>
            </button>
        `;
        counter++;
        addWrap.prepend(elem);

    }

    function deleteTask(){
        let deleteBtns = document.querySelectorAll(".promo__tasks button");

        deleteBtns.forEach((el) => {
            el.onclick = function(){
                el.parentElement.remove();
                
                deleteBtns = document.querySelectorAll(".promo__tasks button");
    
                if(deleteBtns.length == 0){
                    addWrap.style.border = "none";
                }
                saveData()
            }
        });
    }



    function saveData(){
        localStorage.setItem('items', addWrap.innerHTML);
        localStorage.setItem("counter", counter);
    }

    function getData(){
        addWrap.innerHTML = localStorage.getItem('items');
        counter = localStorage.getItem("counter");
    }

    addForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let value = addInput.value;
        createTask(value);
        addForm.reset();


        saveData();
        deleteTask();

    });

});