console.log("Good morning")
console.error("please say good morning to me ")
console.warn("good morning")

window.console.log("hello")
console.log("I am learning seleneium")
window.console.error("hello")
window.console.warn("say hello")

// console.log(window)


// // let a=10
// // console.log(a)

// call stack
// global executable contex : two different phase
// 1 declaration of variable phase  //let a
// 2 executation phase  a=10 , console.log(a)
// read code for two times for only declaration and only for execution


let func12=()=>{
console.log("hekko")
}
func12()

// let func12-declaration

// execution ::funct12=()=>{},funct12()---->new call well generate 
// for function ---> declaration -->empty and execution-->clg("hekko")

// after function call execution control gose back and funtion call will go to garbage collector
// main will be go garbage collector
