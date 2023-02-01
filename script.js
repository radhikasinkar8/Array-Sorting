const list =document.querySelector('.list');

const sort_name_btn = document.querySelector('.sort-option .sort-name');
const sort_age_btn = document.querySelector('.sort-option .sort-age');


let list_items = [
    {
        name: 'Steve',
        age: '21',
        id : 1
    },
    {
        name: 'Mark',
        age: '82',
        id : 2
    },
    {
        name: 'Khonsu',
        age: '90',
        id : 3
    },
    {
        name: 'Laila',
        age: '25',
        id : 4
    },
    {
        name:'Amet',
        age: '98',
        id : 5

    }
];

function validateForm(){
    let x = document.forms['myForm']['fname']['fage'].value;
    if(x == ""){
        return false;
    }
    
}

//adding Object

const addObj = (e) => {
    
    e.preventDefault();
    validateForm();
     
    let list_obj = {
    name : document.getElementById('name').value,
    age : document.getElementById('age').value,
    
}
     
list_items.push(list_obj);

document.forms[0].reset();

console.warn('add', {list_items});
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click',addObj);
    
});



//deleting Object

const delObj = (ev) => {
    ev.preventDefault();

    let list_obj = {
        name :document.getElementById('name').value,
        age : document.getElementById('age').value,
    }

    list_items.shift(list_obj);
    document.forms[0].reset();

    console.warn('delete', {list_items});
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn1').addEventListener('click',delObj);
});


console.assert(delObj);


 let desc = false;
 sort_name_btn.addEventListener('click', () => {
     let array = sort_array_by(list_items, 'name', desc);
    displayList(array);

     desc = !desc;
        });

 sort_age_btn.addEventListener('click', () => {
    let array = sort_array_by(list_items, 'age', desc);
     displayList(array);

     desc = !desc;
   });

//sorting Object
function sort_array_by(array, sort, desc){
    array.sort(function(a,b){
        if(a[sort] < b[sort]) return -1;
        if(a[sort] > b[sort]) return 1;
        return 0;
    });

    if(desc) array.reverse();

    return array;
};

function displayList (array = []){
    list.innerHTML = "";

    for(let i = 0; i < array.length;i++){
        let item = array[i];

        let item_element = document.createElement('div');
        item_element.classList.add('list-item');

        //names
        let title = document.createElement('div');
        title.classList.add('item-title');
        title.innerText = item.name;

        item_element.appendChild(title);
      
        //age
        let age = document.createElement('div');
        age.classList.add('item-age');
        age.innerText = item.age;

        item_element.appendChild(age);
        


        list.appendChild(item_element);
    }
}

displayList(list_items);
