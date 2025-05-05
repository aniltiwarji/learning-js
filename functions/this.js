
let profile = {
    fristName: "anil",
    lastName:  "tiwari",
    lastName2: " pareek",
    age:       "19",

    fullName: function() {
        return this.fristName+ " " + this.lastName;
    },

    // fullName: function () {
    //     return this.fristName+ " " +this.lastName2
    // },

    about: function() {
        return `Hello my name is ${this.fristName} and i am ${this.age} years old `
    }
}
// console.log(profile.fullName())
console.log(profile.about())

  

