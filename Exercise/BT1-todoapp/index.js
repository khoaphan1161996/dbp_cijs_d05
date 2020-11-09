let input = document.getElementById("input")
let btn_add = document.getElementById("btn_add")
let res = document.getElementById("res")
let btn_delete = document.getElementsByClassName("btn_delete")
let checkbox = document.getElementsByClassName("checkbox")

btn_add.addEventListener('click',add)

function add(){
    let input_value = input.value 
    if(input_value!=""){
        res.insertAdjacentHTML('beforeend',createContent(input_value))
        input.value = ""
        checkboxtrue()
        xoa()
    }
    else alert("Không được để trống")
}

function createContent(input_value){
    let innerHTML=`<div class="task">
            <input type="checkbox" class="checkbox">
            <span contenteditable="true" type="text" class="inputtask">${input_value}</span>
            <button class="btn_delete">Delete</button>
        </div>`
    return innerHTML
}

function xoa(){
    for (let i = 0 ; i < btn_delete.length ; i ++){
        btn_delete[i].addEventListener('click', function(e){
            console.log(e.target.parentElement)
            e.target.parentElement.remove()
        })
    }
}

function checkboxtrue(){
    for(let i = 0; i <checkbox.length ; i ++){
        checkbox[i].addEventListener('click',function(e){
            if(e.target.checked==true){
                e.target.parentElement.className  = "taskcomplete"
            }
            else {
                e.target.parentElement.className  = "task"
            }
        })
    }
}

input.addEventListener('keyup',enter)

function enter(a){
    if(a.key=="Enter"){
        add()
    }
}

