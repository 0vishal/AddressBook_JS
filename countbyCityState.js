class AddressBook {
    firstname;
    lastname;
    address;
    city;
    state;
    zip;
    phone_number;
    email;

    constructor(...params) {
        this.firstname = params[0];
        this.lastname = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone_number = params[6];
        this.email = params[7];
    }

    constructor(...params) {

        let regexname = new RegExp('[A-Z]{1}[a-z]{3,}');
        if (regexname.test(params[0]) && regexname.test(params[1])) {
            this.firstname = params[0];
            this.lastname = params[1];
        } else { throw "Incorrect name"; }


        let regexaddress = new RegExp('[A-Z]{1}[a-z]{4,}');
        if (regexaddress.test(params[2]) && regexaddress.test(params[3]) && regexaddress.test(params[4])) {
            this.address = params[2];
            this.city = params[3];
            this.state = params[4];
        } else { throw "Incorrect Address or City or State"; }


        let regexpincode = RegExp('^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$');
        if (regexpincode.test(params[5])) {
            this.zip = params[5];
        } else { throw "Incorrect Pincode"; }


        let regexphone = RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
        if (regexphone.test(params[6])) {
            this.phone_number = params[6];
        } else { throw "Incorrect PhoneNumber"; }


        let emailregex = RegExp('^[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-])*@[A-Za-z0-9-]+(?:\\.[A-Za-z0-9-]+)*$');
        if (emailregex.test(params[7])) {
            this.email = params[7];
        } else { throw "Incorrect Email Id"; }
    }


    toString() {
        return "FirstName= " + this.firstname + " \nLastName= " + this.lastname + " \nAddress= " + this.address + " \nCity= "
            + this.city + " \nState= " + this.zip + " \nZip= " + this.zip + " \nPhoneNumber= " + this.phone_number + " \nEmail= " + this.email;
    }
}

let addressbook = new AddressBook("Vishal","Salaskar","Ghatkopar","Mumbai","Maharashtra",40005,955709490,"vishal@gmail.com");
console.log(addressbook.toString());

try {
    let addressbook = new AddressBook("Vishal","Salaskar","Ghatkopar","Mumbai","Maharashtra",40005,955709490,"vishal@gmail.com");
    console.log(addressbook.toString());
} catch (e) {
    console.error(e);
}



let addressBook = [];
try {
    let contact1 = new AddressBook("Vishal","Salaskar","Ghatkopar","Mumbai","Maharashtra",40005,955709490,"vishal@gmail.com");
    let contact2 = new AddressBook("Sarvesh", "Shah", "Kurla", "Navimumbai", "Maharashtra", 759090, 879909095, "shah@gmail.com");

    addressBook.push(contact1);
    addressBook.push(contact2);

    let duplicate = addressBook.map(eval => eval.getfirstname === contact2.getfirstname);
    console.log(duplicate);

    if (duplicate.includes(true)) {
        console.log("Contact already in Adressbook ");
    } else { addressBook.push(contact3); }
    console.log(addressBook);


    if (addressBook.find(name => name.firstname == 'Sarvesh')) {
        addressBook.find(name => name.setfirstname = 'Krunal');
    } else { console.log("This Name Contact not in addressBook"); }


    console.log("Before " + addressBook.length);

    if (addressBook.find(name => name.firstname == 'Vishal')) {
        addressBook.splice(1, 1);

    }
    console.log("After: " + addressBook.length);


    let count = addressBook.reduce(function(acc,curr) {
        return acc+curr;
    });
    console.log(count);
    
} catch (e) {
    console.error(e);
}

console.log(addressBook);


   
let city = addressBook.map(eval => eval.city === 'Mumbai' );
let searchByCity = city.reduce((a, b)=> a + b); 
console.log("contact by city are: "+searchByCity);

let state = addressBook.map(eval => eval.state === 'Maharashtra' );
let searchByState = state.reduce((a, b)=> a + b); 
console.log("contact by state are: "+searchByState);


console.log("view contact by city: \n"+addressBook.filter(values => values.city == 'Mumbai'));
console.log()
console.log("view contact by state: \n"+addressBook.filter(values => values.state == 'Maharashtra'));


let city = addressBook.map(eval => eval.city === 'Mumbai' );
let searchByCity = city.reduce((a, b)=> a + b); 
console.log("contact by city are: "+searchByCity);

let state = addressBook.map(eval => eval.state === 'Maharashtra' );
let searchByState = state.reduce((a, b)=> a + b); 
console.log("contact by state are: "+searchByState);
