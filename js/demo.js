var prompt = require('prompt-sync')();

const userlist = []

choice = 10
while (choice != 0) {
    
    name = prompt("enter your name:")
    email = prompt("enter your email:")
    while (!email.includes("@")) {
        console.error("invalid email please provide valid email")
        email = prompt("enter your email:")
    }
    password = prompt("enter password :")
    while (password.length < 7) {
        console.error("invalid password length min 7 character is required")
        password = prompt("enter password :")
    }
    confirmPassword = prompt("re-enter password :")
    while (password != confirmPassword) {
        console.error("password mismatch ")
        confirmPassword = prompt("re-enter password :")
    }
    aadharId = prompt("enter your aadhar Id :")
    while (!isNaN(aadharId) && aadharId.length != 12) {
        console.error("invlaid aadhar id ")
        confirmPassword = prompt("re-enter aadhar id :")
    }

    const user = {}
    user["name"] = name
    user["email"] = email
    user["password"] = password
    user["aadharId"] = aadharId

    userlist.push(user)

    choice = prompt("enter 1 to continue, 0 to exit :")
}

console.log(userlist)

