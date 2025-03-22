document.getElementById("convert-calculator").style.display = "none"

document.getElementById("convert").addEventListener("click",function(event){
    event.preventDefault()

    document.getElementById("form").style.display = "none"
    document.getElementById("convert-calculator").style.display = "block"
})



document.getElementById("submit-convert")
.addEventListener("click", function(event){
    event.preventDefault()

    const ft = document.getElementById("height-ft").value;
    const convertedFt = parseFloat(ft);
    // const me = document.getElementById("height-m").value;

    const me = convertedFt *  0.304;
    document.getElementById("height-m").value = me.toFixed(2);
})

document.getElementById("reload-convert").addEventListener("click", function(event){
    event.preventDefault()

    document.getElementById("height-m").value = "";
    document.getElementById("height-ft").value = "";
})