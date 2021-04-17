class AddressBook{
    firstname;
    lastname;
    address;
    city;
    state;
    zip;
    phone_number;
    email;

    constructor(...params){
        this.firstname=params[0];
        this.lastname=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phone_number=params[6];
        this.email=params[7];   
    }

    toString(){
        return "FirstName= " +this.firstname+ " \nLastName= " +this.lastname+ " \nAddress= " +this.address+ " \nCity= " 
        +this.city+ " \nState= " +this.zip+ " \nZip= " +this.zip+ " \nPhoneNumber= " +this.phone_number+ " \nEmail= " +this.email;
    }
}

let addressbook = new AddressBook("Vishal","Salaskar","Ghatkopar","Mumbai","Maharashtra",40005,955709490,"vishal@gmail.com");
console.log(addressbook.toString());