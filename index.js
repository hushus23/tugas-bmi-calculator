//calling for variabel input from HTML 
let weightInput = document.querySelector(".weight");
let heightInput = document.querySelector(".height");
let calculateButton= document.querySelector(".calculate");
let result = document.querySelector(".showresult");
let statement = document.querySelector(".result-stat");
let image = document.querySelector(".showimage");

//calculate the BMI
let BMI, height, weight;
calculateButton.addEventListener("click", ()=>{
	height = heightInput.value;
	weight = weightInput.value;
	BMI = (weight/((height/100)**2)).toFixed(1);
	//show result BMI
	result.innerText = BMI;

	if(BMI < 18.5){
		image.src = "images/underweight.png"
        statement.innerText = "Your BMI is " + BMI + " which means You are Underweight";    
    }else if((BMI > 18.5) && (BMI <= 24.9)){
		image.src = "images/ideal.png"
        statement.innerText = "Your BMI is " + BMI + " which means You are Normal";
    }else if((BMI >= 25) && (BMI <= 29.9 )){
		image.src = "images/overweight.png"
        statement.innerText = "Your BMI is " + BMI + " which means You are Overweight";
    }else{
		image.src = "images/obese.png"
        statement.innerText = "Your BMI is " + BMI + " which means You are Obese";
    }
});