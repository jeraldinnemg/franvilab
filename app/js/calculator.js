
// Clear the localstorage

clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});


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

    if (dye.value == 'R63' || dye.value == 'R83' ) {
        checkDye();
        console.log("checkdye")
    }

    else if (dye.value == 'R83T') {
        checkDye2();
        console.log("checkdye2")
    }

    else if (dye.value == 'D100') {
        checkDye3();
        console.log("checkdye3")
    }

    else {
        checkDye4();

    }

});

// ---------------- FUNCTION TO SHOW SAL AND ALCALI ----------------

    function checkDye() {
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
            alcali_dos="2.025";
            
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
            
        } else  {
            sal = "75";
            alcali_uno="5.2";
            alcali_dos="3.6";
        }

        // ---------------- TEMPLATE R63 R83 METHOD DYE----------------

        const containerHTML = `
        <div class=" counter flex flex-jc-c flex-ai-c">
        <img src="images/sal.png" alt="sal">

        <div class="count" id="sal"> ${sal} g/l</div>
            <span>Sal</span>
        </div>
        <div class=" counter flex flex-jc-c flex-ai-c">
            <img src="images/alcali.png" alt="alcali">
            <div class="count"  id="alcali_uno">${alcali_uno} g/l</div>
                <span>1er Alcali: Solvay</span>
        </div>
        <div class=" counter flex flex-jc-c flex-ai-c">
            <img src="images/alcali.png" alt="alcali">
            <div class="count"  id="alcali_dos">${alcali_dos} g/l</div>
                <span>2do Alcali: GKS</span>
        </div>`

        counters.innerHTML += containerHTML;

    }

    function checkDye2() {
        let sulfato = document.getElementById('sulfato'); 
        let alcali_uno = document.getElementById('alcali_uno'); 
        let alcali_dos = document.getElementById('alcali_dos'); 
        
        let color = total;
        
        // ---------------- CONDITIONAL STATEMENTS FOR R83T METHOD----------------

        if  ((color.value < 0.1) && (dye.value == 'R83T')) {
            sulfato = "10";
            alcali_uno="0.3";
            alcali_dos="1.2";

        
        } else if  ((color.value <= 0.3) && (dye.value == 'R83T')) {
            sulfato  = "20";
            alcali_uno="0.5";
            alcali_dos="1.5";

        } else if  ((color.value <= 0.6) && (dye.value == 'R83T')) {
            sulfato = "35";
            alcali_uno="0.5";
            alcali_dos="2";

        } else if  ((color.value <= 1) && (dye.value == 'R83T')) {
            sulfato = "50";
            alcali_uno="0.5";
            alcali_dos="2.5";

        } else if  ((color.value <= 1.5) && (dye.value == 'R83T')) {
            sulfato = "50";
            alcali_uno="0.8";
            alcali_dos="3.2";

        } else if  ((color.value <=3) && (dye.value == 'R83T')) {
            sulfato = "50";
            alcali_uno="1";
            alcali_dos="4";

        } else if  ((color.value <= 5) && (dye.value == 'R83T')) {
            sulfato = "50";
            alcali_uno="1";
            alcali_dos="4.75";
                
        } else  {
            sulfato = "55";
            alcali_uno="1.25";
            alcali_dos="5.25";
                
        };

        // ---------------- TEMPLATE D83T METHOD DYE----------------

        const containerHTML = `
        <div class=" counter flex flex-jc-c flex-ai-c">
        <img src="images/sal.png" alt="sal">

        <div class="count" id="sulfato"> ${sulfato} g/l</div>
            <span>Sulfato</span>
        </div>
        <div class=" counter flex flex-jc-c flex-ai-c">
            <img src="images/alcali.png" alt="alcali">
            <div class="count"  id="alcali_uno">${alcali_uno} g/l</div>
                <span>1er Alcali: GKS</span>
        </div>
        <div class=" counter flex flex-jc-c flex-ai-c">
            <img src="images/alcali.png" alt="alcali">
            <div class="count"  id="alcali_dos">${alcali_dos} g/l</div>
                <span>2do Alcali: GKS</span>
        </div>`

        counters.innerHTML += containerHTML;
    }


    function checkDye3() {
        let sal = document.getElementById('sal'); 
  
        let color = total;
        
        // ---------------- CONDITIONAL STATEMENTS FOR D100 METHOD----------------

        if  ((color.value < 0.005) && (dye.value == 'D100')) {
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
            
        };

        // ---------------- TEMPLATE D100 METHOD DYE----------------

        const containerHTML = `
        <div class=" counter flex flex-jc-c flex-ai-c">
        <img src="images/sal.png" alt="sal">

        <div class="count" id="sal"> ${sal} g/l</div>
            <span>Sal</span>
        </div>`

        counters.innerHTML += containerHTML;
    }

    function checkDye4() {
        let sulfato = document.getElementById('sulfato'); 
  
        let color = total;
        
        // ---------------- CONDITIONAL STATEMENTS FOR D100T METHOD----------------

        if  ((color.value < 0.005) && (dye.value == 'D100T')) {
            sulfato = "0";

        
        } else if  ((color.value <= 0.025) && (dye.value == 'D100T')) {
            sulfato  = "3";

        } else if  ((color.value <= 0.2) && (dye.value == 'D100T')) {
            sulfato = "5";

        } else if  ((color.value <= 0.5) && (dye.value == 'D100T')) {
            sulfato = "8";

        } else if  ((color.value <= 0.75) && (dye.value == 'D100T')) {
            sulfato = "10";

        } else if  ((color.value <=1) && (dye.value == 'D100T')) {
            sulfato = "15";
        } else if  ((color.value <= 2) && (dye.value == 'D100T')) {
            sulfato = "16";

                
        } else if  ((color.value > 2) && (dye.value == 'D100T')) {
            sulfato = "20";
        };


        // ---------------- TEMPLATE D100 METHOD DYE----------------

        const containerHTML = `
        <div class=" counter flex flex-jc-c flex-ai-c">
        <img src="images/sal.png" alt="sal">

        <div class="count" id="sulfato"> ${sulfato} g/l</div>
            <span>Sulfato</span>
        </div>`

        counters.innerHTML += containerHTML;
    }


    

        
    




/*${sal}
${alcali_uno}
${alcali_dos}*/



    

    




