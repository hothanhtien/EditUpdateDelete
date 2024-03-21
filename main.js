var contact = [
    {
        name: 'hi',
        phone: '0912590577',
        email: 'hothanhtien@gmail.com'
    },
    {
        name: 'hi',
        phone: '0912590577',
        email: 'hothanhtien@gmail.com'
    }
]


if (localStorage.getItem('contact')) {
    contact = JSON.parse(localStorage.getItem('contact'));
}

var cardContainer = document.querySelector('.cards')
function render() {
    let element = contact.map(function(item, index) {
        return `
        <div class="card">
                <div class="card-item">
                    <img src="./assets/img/icon/contact.svg" alt="">
                    <span id="name">${item.name}</span>
                </div>
                <div class="card-item">
                    <img src="./assets/img/icon/contact.svg" alt="">
                    <span id="phone">${item.phone}</span>
                </div>
                <div class="card-item">
                    <img src="./assets/img/icon/email.svg" alt="">
                    <span id="mail">${item.email}</span>
                </div>
                <div class="action">
                    <img id="edit" src="./assets/img/icon/edit.svg" alt="" onclick="editt(${index})">
                    <img id="delete" src="./assets/img/icon/delete.svg" alt="" onclick="deletee(${index})">
                </div>
            </div>
        `
    })
    cardContainer.innerHTML = element.join("");
}

function deletee(id) {
    contact.splice(id, 1);
    localStorage.setItem('contact', JSON.stringify(contact));

    render();
}


var createBtn = document.querySelector('#create-btn');
var popupp = document.querySelector('.popup-container');
// console.log(createBtn)


createBtn.addEventListener('click', function() {
    popupp.classList.toggle('active')
})

popupp.addEventListener('click', function(event) {
    // console.log(event);
    popupp.classList.toggle('active')
    document.getElementById('field-name').value ="";
    document.getElementById('field-phone').value ="";
    document.getElementById('field-email').value ="";
})

var popupMain = document.querySelector('.popup-main');

popupMain.addEventListener('click', function(event) {
    event.stopPropagation();
})

function onCreate() {
    console.log('okokoko')
    var name = document.getElementById('field-name').value
    var phone =  document.getElementById('field-phone').value
    var email =  document.getElementById('field-email').value
    // console.log('nè', name, phone)
    contact.push({
        name,
        phone,
        email
    })

    localStorage.setItem('contact', JSON.stringify(contact));

    render();
}

render();








var edit = document.querySelectorAll('#edit');


var editContainer = document.querySelector('.edit-container');
var editMain = document.querySelector('.edit-main');


editContainer.addEventListener('click', function(event) {
    editContainer.classList.toggle('active')
    document.getElementById('field-nameEdit').value ="";
    document.getElementById('field-phoneEdit').value ="";
    document.getElementById('field-emailEdit').value ="";
})

editMain.addEventListener('click', function(event) {
    event.stopPropagation();
})

var idd;
function editt(id) {
    // console.log(id)
    console.log('okokoko')
    editContainer.classList.toggle('active')
    idd = id;
}

let editBtnSubmit = document.querySelector('.editBtn');

editBtnSubmit.addEventListener('click', function() {
    var name1 = document.getElementById('field-nameEdit').value
    var phone1 =  document.getElementById('field-phoneEdit').value
    var mail1 =  document.getElementById('field-emailEdit').value
    
    
    contact[idd].name = name1;
    contact[idd].phone = phone1;
    contact[idd].email = mail1;

    // console.log(contact[id].name)
    localStorage.setItem('contact', JSON.stringify(contact));

    console.log('12345')
    render();
})







