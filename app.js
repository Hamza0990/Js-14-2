let user = {
    name: "Hamza",
    age: 17,

    setAge: function(newAge) {
        this.age = newAge;
    },

    getYearsBeforeRetirement: function() {
        let retirement = 65;
        let yearsAfter = 0;

        if (this.age < retirement) {
            yearsAfter = retirement - this.age;
        }
        return yearsAfter;
    }
};


user.setAge(18);
console.log(user.age); 

let a = user.getYearsBeforeRetirement();
console.log("Pensiyeye qeder qalan iller:", a); 