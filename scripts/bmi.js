document.getElementById("submit")
.addEventListener("click", function(event){
    event.preventDefault()

    const weight = document.getElementById("weight").value;
    const convertedWeight = parseFloat(weight);
    const height = document.getElementById("height").value;
    const convertedHeight = parseFloat(height);

    const bmi = convertedWeight / (convertedHeight * convertedHeight);
    if(isNaN(convertedWeight) || isNaN(convertedHeight) || convertedWeight <= 0 || convertedHeight <= 0){
        alert("What's your problem")
        return;
    }

    
    if (bmi < 18.5) {
       
       const container = document.getElementById("bmi-containner");
            const div = document.createElement("div")
            div.innerHTML =`
            
            <h1 class="text-xl font-medium">Your BMI : ${bmi.toFixed(2)}</h1>
            <p>You are Underweight</p>

            `
            container.appendChild(div);

    } 
    else if (bmi >= 18.5 && bmi < 24.9) {
        
        const container = document.getElementById("bmi-containner");
            const div = document.createElement("div")
            div.innerHTML =`
            
            <h1 class="text-xl font-medium">Your BMI : ${bmi.toFixed(2)}</h1>
            <p>You weight is Normal </p>
            `
            container.appendChild(div);
    } 
    else if (bmi >= 25 && bmi < 29.9) {
        
        const container = document.getElementById("bmi-containner");
            const div = document.createElement("div")
            div.innerHTML =`
            
            <h1 class="text-xl font-medium">Your BMI : ${bmi.toFixed(2)}</h1>
            <p>You are Overweight</p>
            `
            container.appendChild(div);
    } 
    else if (bmi >= 30 && bmi < 34.9) {
        
        const container = document.getElementById("bmi-containner");
            const div = document.createElement("div")
            div.innerHTML =`
            
            <h1 class="text-xl font-medium">Your BMI : ${bmi.toFixed(2)}</h1>
            <p>You are Motu</p>
            `
            container.appendChild(div);

    } 
    else if (bmi >= 35 && bmi < 39.9) {
        
        const container = document.getElementById("bmi-containner");
            const div = document.createElement("div")
            div.innerHTML =`
            
            <h1 class="text-xl font-medium">Your BMI : ${bmi.toFixed(2)}</h1>
            <p>Your category is Elephent</p>
            `
            container.appendChild(div);
    } 
    else {
        const container = document.getElementById("bmi-containner");
            const div = document.createElement("div")
            div.innerHTML =`
            
            <h1 class="text-xl font-medium">Your BMI : ${bmi.toFixed(2)}</h1>
            <p>Carry ON</p>
            `
            container.appendChild(div);
    }
   
})
document.getElementById("reload").addEventListener("click", function(event){
    event.preventDefault()

    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("bmi-containner").innerHTML = "";
})
