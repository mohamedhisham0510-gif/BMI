function BMI (Weight, Height)
{
 let weight = document.getElementById("weight").value;

 let height = document.getElementById("height").value;
 if (weight === null || height === null)
 {
    alert("Please enter valid input !");
    return;
 }
 height = height/100;
 let bmi = weight / (height **2);
 
document.getElementById("Result").textContent = `Your BMI is ${bmi.toFixed(2)}`;
}
BMI();