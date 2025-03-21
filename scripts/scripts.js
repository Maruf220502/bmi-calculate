document.getElementById("form").style.display ="none"
document.getElementById("join-us")
.addEventListener("click",function(event){
    event.preventDefault()

    document.getElementById("form").style.display ="flex"
})

document.getElementById('login-btn')
.addEventListener('click', function(){
    const enterName = document.getElementById("name").value.trim();
    const value = document.getElementById("pin").value
    const convertedValue = parseInt(value);

        if( enterName === ""){
            alert("Enter Your Name")
            return;
        }
        if( convertedValue === 123456){
            window.location.href = "./main.html";
        }
        else{
            alert("Enter Pin 123456")
        }
        
})

document.getElementById("forgot")
.addEventListener("click", function(){
    alert("I Don't Work")
})