
function display(){
    let height=parseFloat(document.getElementById("height").value);
    let weight=parseFloat(document.getElementById("weight").value);
    if(!isNaN(height) && !isNaN(weight)){
        let res=(weight/(height*height)).toFixed(1);
        if(res>=18.5&&res<25)
        document.getElementById("result").value=res+" - Healthy";
        else if(res>=25&&res<30)
        document.getElementById("result").value=res+" - Overweight";
        else if(res>30)
        document.getElementById("result").value=res+" - Obese";
        else 
        document.getElementById("result").value=res+" - Underweight";
    }
    else
    window.alert("Enter the details correctly!!!");
}

