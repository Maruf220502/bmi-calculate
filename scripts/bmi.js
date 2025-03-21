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

    document.getElementById("bmi-id").innerText = bmi.toFixed(2);
    if (bmi < 18.5) {
       alert("Underweight")
    } else if (bmi >= 18.5 && bmi < 24.9) {
        alert("Normal weight")
    } else if (bmi >= 25 && bmi < 29.9) {
        alert("Overweight")
    } else if (bmi >= 30 && bmi < 34.9) {
        alert("Motu")
    } else if (bmi >= 35 && bmi < 39.9) {
        alert("Your category is Elephent")
    } else {
        alert("carry on")
    }
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
})