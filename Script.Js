function BMI (Weight, Height)
{
 let weight = document.getElementById("weight").value;

 let height = document.getElementById("height").value;

 height = height/100;
 let bmi = weight / (height **2);
 
document.getElementById("Result").textContent = "Your BMI = bmi.toFixed(2);
}
