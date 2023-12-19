import React, {useState} from 'react';


const BMI =()=>{

const [weight, setWeight]=useState('');
const [height, setHeight]=useState('');
const [bmi, setBMI]=useState(null);

const calculateBMI = ()=>{
if (weight && height){
const heightInMeters = height/100;
const bmiValue = (weight /(heightInMeters *heightInMeters)).toFixed(2);
setBMI(bmiValue);
}
};
return(
<div>
<h1> BMI CALCULATOR</h1>
<label>
Weight (kg): 
<input type="number"  value={weight} onChange={(e)=> setWeight(e.target.value)}/>
  </label>
  <br />
  <label>
  Height (cm): 
  <input type="number"  value={height}  onChange={(e)=> setHeight(e.target.value)}/>
  </label>
  <br />
  <button onClick={calculateBMI}> Calculate BMI</button>
  {bmi && <p>Your BMI is: {bmi}</p>}
  </div>

  
); 
 };
export default BMI;