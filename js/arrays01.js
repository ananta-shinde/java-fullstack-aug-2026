
const data = [20,"Mango","Apple","Pune",true,20]

// index = data.indexOf("Pune")
// data[index] = "mumbai"

data.map((value,index)=>{ 
    if(value == "Pune"){
        data[index] = "Mumbai"
    }
    });



function print(value){
    console.log(value)
}

// for(i=0;i<data.length;i++){
//     print(data[i])
// }


// data.forEach(print)


// console.log(data.filter((value)=>(value>=20 && value<30)))
// console.log(data.filter((value)=>(typeof(value) == "string")))

console.log(data.sort())

// data.push(250)
// data.pop()
// data.shift()




// console.log(data.slice(1,4))

// console.log(data.splice(2,1))
// console.log(data.length)
console.log(data)