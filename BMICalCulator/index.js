 const form = document.querySelector('form')

 form.addEventListener('submit' , (event) => {
    event.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results");

    if(height === "" || height < 0 || isNaN(height)){
     result.innerText = `Please enter a valid number` 
     console.log("1");
    }
    else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please enter a VALID number`
        console.log("2");
    }
    else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML =  `<span>${BMI}</span>`
        console.log("3");
    }
   
 });