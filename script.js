// Take your to-do list app to the next level. Implement features such as categorizing tasks, setting deadlines, and sorting tasks based on priority.

//priority mein color allocation kar skta hun

//container.prepend(toDoList)was not working bcoz it was deleting that node 
//--------------Teachings
// bro dekh instead of focussing on single sub-element focus on whole elemenet  and then add event listener with conditions even,target.id or whatnot 
// when i was dynamically adding list it was adding but it was also removing , so use element.cloneNode(true)  mtlb uska clone use kar rhe hain
// for sorting what i checked the color of parentNode and push them into array then display it 
// regaring alarm what i did was use date methods(like .getHours()) to get similar to the input type="time"  .value

//------issue 
// that i faced was i not getting desired elements when i have 4 list it was showing me only one list , add it into a function with eventlistner attached to the button jitni teri screen pe honge utne aa jaayenge jab tu add kar rha hai list tab bhi kr skta hain

document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("to_do_container");
  let add_list = document.getElementById("add");
  let toDoList = document.getElementById("to_do_list");

  container.addEventListener("click", (event) => {
    if (event.target.id === "subtract") {
      event.target.parentNode.parentNode.remove();
    } else if (event.target.id === "add") {
     
      let clonedToDoList = toDoList.cloneNode(true);
      container.prepend(clonedToDoList);
  
    } else if (event.target.className != null) {
      let value = event.target.getAttribute("value");
      event.target.parentNode.parentNode.style.backgroundColor = `${value}`;
    }
  });
});

// let sort_list = document.querySelectorAll("#to_do_list"); isliye work nhi kar rha tha kyunki iski pheli value aa gyi thi broo

let arr=[]
 document.getElementById("up").addEventListener("click",()=>{
  let sort_list = document.querySelectorAll("#to_do_list")
   function create_arr(color){
     sort_list.forEach((ele)=>{
      if(ele.style.backgroundColor==color){
        arr.push(ele)

      }
     })
   }
   create_arr("red")
   create_arr("yellow")
   create_arr("pink")
 
   arr.forEach((ele)=>{
      let container = document.getElementById("to_do_container");
       container.append(ele)
    
    
   })
 
})


let arr1=[]
 document.getElementById("down").addEventListener("click",()=>{
  let sort_list = document.querySelectorAll("#to_do_list")
   function create_arr(color){
     sort_list.forEach((ele)=>{
      if(ele.style.backgroundColor==color){
        arr1.push(ele)
      }
     })
   }
   create_arr("red")
   create_arr("yellow")
   create_arr("pink")
    arr1.forEach((ele)=>{
      let container = document.getElementById("to_do_container");
       container.prepend(ele)


   })

})

//for alarm 


let alarm = document.getElementById("alarm")
alarm.addEventListener("click",()=>{
  setInterval(()=>{
    let deadline = new Date();
    let ele= document.querySelectorAll('input[type="time"]')
   ele.forEach((element)=>{
                     console.log(element.value)
            if(element.value === `${deadline.getHours().toString().padStart(2, '0')}:${deadline.getMinutes().toString().padStart(2, '0')}`){
                      alert("alarm");
                     }
                   })},30000)
 
})






 

