
 function converttemp() {
    const temp = parseFloat(document.getElementById('temp').value);
    const unit = document.getElementById('unit').value;
    let result ;
    if (unit == 'fahrenheit') {
      const fahrenheit = (temp * 9/5) + 32;
      result = `RESULT  :  ${fahrenheit.toFixed(2)}&deg;F`;
    } else if (unit == 'kelvin') {
      const kelvin = temp + 273.15;
      result = `RESULT  :  ${kelvin.toFixed(2)}K`;
    }

    document.getElementById('result').innerHTML= result;
  }
