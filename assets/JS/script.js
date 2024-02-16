const  form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let heightInput = document.getElementById("height").value;
    let height = parseFloat(heightInput);
    

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById("value");
    let description = '';

    document.getElementById("infos").classList.remove("hidden");

    if (bmi < 18.5) {
        description = "Cuidado! Você está chupado de magro!";
    } else if (bmi >= 18.5 && bmi <= 25 ) {
        description = "Você está no peso ideal!";
    } else if (bmi > 25 && bmi <= 30) {
        description = "Cuidado! Você está com sobrepeso!";
    } else if (bmi > 30 && bmi <= 35) {
        descrition = "Cuidado! Você está com obesidade severa";
    } else if (bmi > 35 && bmi <= 40) {
        description = "Cuidaado! Você está com obesidade moderada";
    } else {
        description = "Cuidade! Você está com obesidade morbida!";
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById("description").textContent = description;


});
