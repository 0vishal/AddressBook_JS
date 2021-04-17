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
var book = [];

let addressbook1 = new AddressBook("Vishal","Salaskar","Ghatkopar","Mumbai","Maharashtra",400075,9898189891,"vishal@gmail.com");
console.log(addressbook1.toString());
book.push(addressbook1);


try {
    let addressbook2 = new AddressBook("Sarvesh","Salaskar","Ghatkopar","Mumbai","Maharashtra",400075,9898189891,"vishal@gmail.com");
    console.log(addressbook2.toString());
    book.push(addressbook2);

} catch (e) {
    console.error(e);
}


console.log(book)

if (book.find(name => name.firstname == 'Sarvesh')) {
    book.find(name => name.setfirstname = 'Krunal');
} else { console.log("This Name Contact not in addressBook"); }




