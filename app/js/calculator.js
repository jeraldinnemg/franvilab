// Funnction to add every color of the recipe

function addColor() {

    try {
        let colorOne = Number (parseFloat(document.getElementById("color-one").value)) || 0;
         colorTwo = Number (parseFloat(document.getElementById("color-two").value)) || 0 ;
         colorThree =  Number (parseFloat(document.getElementById("color-three").value)) || 0;
        
        total.value = (colorOne + colorTwo + colorThree).toFixed(4);
 
    } catch (e){}
    
}

// Button and template to the DOM

const btn = document.getElementById('btn');
const counters = document.getElementById('counter__container');

btn.addEventListener('click', () => {

    let sal = document.getElementById('sal'); 
    let alcali_uno = document.getElementById('alcali_uno'); 
    let alcali_dos = document.getElementById('alcali_dos'); 
    

    let color = total;

    // ----------------CONDITIONAL STATEMENTS FOR R63 METHOD--------------------

    if ((color.value < 0.1)  && (dye.value == 'R63'))  {
        sal = "10";
        alcali_uno="2";
        alcali_dos="1.25";  
    } else if ((color.value <= 0.3)  && (dye.value == 'R63')) {
        sal = "20";
        alcali_uno="3";
        alcali_dos="2";
        

    } else if  ((color.value <= 0.6) && (dye.value == 'R63')) {
        sal = "30";
        alcali_uno="3";
        alcali_dos="2.25";
        
        
    } else if  ((color.value <= 1) && (dye.value == 'R63')) {
        sal = "40";
        alcali_uno="4";
        alcali_dos="2.25";
        

    } else if  ((color.value <= 1.5) && (dye.value == 'R63')) {
        sal = "50";
        alcali_uno="4.8";
        alcali_dos="2.65";
        

    } else if  ((color.value <= 3) && (dye.value == 'R63')) {
        sal = "60";
        alcali_uno="5";
        alcali_dos="3.2";
        
    } else if  ((color.value <= 5) && (dye.value == 'R63')) {
        sal = "70";
        alcali_uno="5";
        alcali_dos="3.6";
        
    } else if  ((color.value > 5) && (dye.value == 'R63')) {
        sal = "75";
        alcali_uno="5";
        alcali_dos="4";
        

        // ---------------- CONDITIONAL STATEMENTS FOR R83 METHOD ----------------

    } else if  ((color.value < 0.1) && (dye.value == 'R83')) {
        sal = "10";
        alcali_uno="2";
        alcali_dos="1.25";
        

    } else if  ((color.value <= 0.3) && (dye.value == 'R83')) {
        sal = "20";
        alcali_uno="3";
        alcali_dos="2";
        
    } else if  ((color.value <= 0.6) && (dye.value == 'R83')) {
        sal = "30";
        alcali_uno="3";
        alcali_dos="2.25";
        
    } else if  ((color.value <= 1) && (dye.value == 'R83')) {
        sal = "40";
        alcali_uno="4";
        alcali_dos="2.25";
        
    } else if  ((color.value <= 1.5) && (dye.value == 'R83')) {
        sal = "50";
        alcali_uno="4.8";
        alcali_dos="2.385";
        
    } else if  ((color.value <=3) && (dye.value == 'R83')) {
        sal = "60";
        alcali_uno="5";
        alcali_dos="2.88";
        
    } else if  ((color.value <= 5) && (dye.value == 'R83')) {
        sal = "70";
        alcali_uno="5";
        alcali_dos="3.24";
        
    } else if  ((color.value > 5) && (dye.value == 'R83')) {
        sal = "75";
        alcali_uno="5.2";
        alcali_dos="3.6";
    }
    
    
    // ---------------- CONDITIONAL STATEMENTS FOR R83T METHOD----------------

    else if  ((color.value < 0.1) && (dye.value == 'R83T')) {
        sal = "10";
        alcali_uno="0.3";
        alcali_dos="1.2";

    
    } else if  ((color.value <= 0.3) && (dye.value == 'R83T')) {
        sal  = "20";
        alcali_uno="0.5";
        alcali_dos="1.5";

    } else if  ((color.value <= 0.6) && (dye.value == 'R83T')) {
        sal = "35";
        alcali_uno="0.5";
        alcali_dos="2";

    } else if  ((color.value <= 1) && (dye.value == 'R83T')) {
        sal = "50";
        alcali_uno="0.5";
        alcali_dos="2.5";

    } else if  ((color.value <= 1.5) && (dye.value == 'R83T')) {
        sal = "50";
        alcali_uno="0.8";
        alcali_dos="3.2";

    } else if  ((color.value <=3) && (dye.value == 'R83T')) {
        sal = "50";
        alcali_uno="1";
        alcali_dos="4";

    } else if  ((color.value <= 5) && (dye.value == 'R83T')) {
        sal = "50";
        alcali_uno="1";
        alcali_dos="4.75";
            
    } else if  ((color.value > 5) && (dye.value == 'R83T')) {
        sal = "55";
        alcali_uno="1.25";
        alcali_dos="5.25";
            
    }
            // CONDITIONAL STATEMENTS FOR D100 METHOD

    else if  ((color.value < 0.005) && (dye.value == 'D100')) {
        sal = "0";
    
    } else if  ((color.value <= 0.025) && (dye.value == 'D100')) {
        sal  = "2";
    

    } else if  ((color.value <= 0.2) && (dye.value == 'D100')) {
        sal = "3.5";


    } else if  ((color.value <= 0.5) && (dye.value == 'D100')) {
        sal = "5.5";


    } else if  ((color.value <= 0.75) && (dye.value == 'D100')) {
        sal = "7.5";

    } else if  ((color.value <=1) && (dye.value == 'D100')) {
        sal = "12";

    } else if  ((color.value <= 2) && (dye.value == 'D100')) {
        sal = "14";

            
    } else if  ((color.value > 2) && (dye.value == 'D100')) {
        sal = "16";
    }
    // CONDITIONAL STATEMENTS FOR D100T METHOD

    else if  ((color.value < 0.005) && (dye.value == 'D100T')) {
        sal = "0";


    
    } else if  ((color.value <= 0.025) && (dye.value == 'D100T')) {
        sal  = "3";


    } else if  ((color.value <= 0.2) && (dye.value == 'D100T')) {
        sal = "5";


    } else if  ((color.value <= 0.5) && (dye.value == 'D100T')) {
        sal = "8";

    } else if  ((color.value <= 0.75) && (dye.value == 'D100T')) {
        sal = "10";


    } else if  ((color.value <=1) && (dye.value == 'D100T')) {
        sal = "15";
    } else if  ((color.value <= 2) && (dye.value == 'D100T')) {
        sal = "16";

            
    } else if  ((color.value > 2) && (dye.value == 'D100T')) {
        sal = "20";
    }


    // RESULT OF SAL - ALCALI 1 - ALCALI 2 DEPENDING ON THE PROCESS AND THE COLOR

    const containerHTML = `
    <div class=" counter flex flex-jc-c flex-ai-c">
    <img src="images/sal.png" alt="sal">

    <div class="count" id="sal"> ${sal} g/l</div>
        <span>Sal</span>
    </div>
    <div class=" counter flex flex-jc-c flex-ai-c">
        <img src="images/alcali.png" alt="alcali">
        <div class="count"  id="alcali_uno">${alcali_uno} g/l</div>
            <span>Alcali 1</span>
    </div>
    <div class=" counter flex flex-jc-c flex-ai-c">
        <img src="images/alcali.png" alt="alcali">
        <div class="count"  id="alcali_dos">${alcali_dos} g/l</div>
            <span>Alcali 2</span>
    </div>`


    counters.innerHTML += containerHTML;
    
})




/*${sal}
${alcali_uno}
${alcali_dos}*/



    

    




