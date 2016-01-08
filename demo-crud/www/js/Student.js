// Constructor
function Student(id, name, age, address){
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
    this.setName = setName;
}

// Override toString()
Student.prototype.toString = function() {
    return "ID: " + this.id + "Name: " + this.name + ", Age: " + this.age + ", Address: " + this.address;
}

// Methods
function setName(name) {
    this.name = name;
}