

const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
const phoneInput = document.getElementById('phone');
const btnAddContact = document.getElementById('add-contact');
const contactsDiv = document.getElementById('contacts');

class Contact {
    fname;
    lname;
    phone;
    constructor(lname, fname, phone) {
        this.fname = fname;
        this.lname = lname;
        this.phone = phone;
    }
}

const contacts = []

const strContactFromDisk = localStorage.getItem('contacts');

if (strContactFromDisk != null) {
    const strContactsFromDisk = localStorage.getItem('contacts')
    const contactsFromDisk = JSON.parse(strContactsFromDisk);
    console.log(contactsFromDisk);
}


//show the contacts in html
contacts.forEach(c => {
    contactsDiv.innerHTML += `${c.lname}  ${c.fname}<br> ${c.phone} <br>`

    
})



//button click
btnAddContact.addEventListener('click', () => {
    //input values
    const fname = fnameInput.value;
    const lname = lnameInput.value;
    const phone = phoneInput.value;

    //object : input values
    const contact = new Contact(fname, lname, phone)
    contacts.push(contact);


    //arrayContact to localStorage

    localStorage.setItem('contacts', JSON.stringify(contacts));

    contactsDiv.innerHTML += `${contact.lname} ${contact.fname}  <br> Phone:  ${contact.phone} <br>`;


});


