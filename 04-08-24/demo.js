

// let func =() =>{
//     console.log("function executed");

// }
// func();

// immediate invoke function expression(IIFE):callign function own
// (()=>{
//     console.log("actomatic execute ")
// })();

// //func();==() same working

// ((a)=>{
//     console.log("actomatic execute ",a)
// })(10);

// (()=>{
//     console.log("hi")
//     console.log("I am anushka")
// })();


// (()=>{
//    var str=prompt("enter name");
//    console.log(str)
// })()


let func1=(func2)=>{
    // console.log("I Am hire order function")
    func2()
}

let func2=()=>{

    console.log("I am from call back function")
}

func1(func2);