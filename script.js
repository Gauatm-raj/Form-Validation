const email=document.getElementById("email");
const password=document.getElementById("password");
let msg1=document.querySelector(".msg1");
let msg2=document.querySelector(".msg2");
let submitBtn=document.querySelector(".btn")

email.addEventListener("input" , checkedemail);

function checkedemail(){
    let emailName=email.value;
    let length=emailName.length;
    let check1=emailName.includes("@");
    let check2=emailName.includes(".");
    let ans=emailName.slice(0 ,3);
    
    let verify=ans.includes("@");
    if(!verify && emailName.includes("@") && check2){
        msg1.innerText="";
    }


}
password.addEventListener("input", checking)
function checking(){
    if(password.value.length>8 && email.value!=""){
        msg2.innerText="All good to go !"
        msg2.style.color="green"; 
       
    }
}


submitBtn.addEventListener("click" , validate);
function validate(evt){
    evt.preventDefault();
     const isConfirmed = confirm("Are you sure you want to submit?");

    if(email.value!="" && password.value!=""){
        if (isConfirmed) {
             alert("Successful signup!");
          } else {
             document.getElementById("form").reset();
            msg1.innerText="Make sure email is more than 3 characters and has @ and a.";
            msg2.innerText="Make sure password is more than 8 characters"
              msg2.style.color="red"; 
          }
       }else{
        alert("fill email and password")
      }
    }

