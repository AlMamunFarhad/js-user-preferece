// ************ Select HTML Element **************
   const selectFontSize = document.getElementById("selectFontSize");
   const selectBgColor = document.getElementById("selectBgcolor");
   const resetBtn = document.getElementById("resetBtn");
   const mainElement = document.querySelector("main");


   const setValues = (fontSize, bgColor) =>{
        selectFontSize.value = fontSize;
        selectBgColor.value = bgColor; 
        mainElement.style.fontSize = fontSize;   
        mainElement.style.backgroundColor = bgColor; 
   }
const initialSetup = () => {
        const fontSize = localStorage.getItem("fontSize");
        const bgColor = localStorage.getItem("bgColor");

        if (fontSize && bgColor) {
          setValues(fontSize, bgColor);
        }
        if (!fontSize && !bgColor){
          setValues("16px", "aqua");
        }
        if (fontSize && !bgColor){
          setValues(fontSize, "aqua");
        }
        if (!fontSize && bgColor){
          setValues("16px", bgColor);
        }
}
// ******** Change Font Size function ********
const changeFontSize = (event) =>{
         const seletedFontSize =  event.target.value;    
         mainElement.style.fontSize = seletedFontSize;
         localStorage.setItem("fontSize", seletedFontSize);
}
// ******** Change Background Color function ********
const changeBgColor = (event) =>{ 
         const selectedBgColor = event.target.value;    
         mainElement.style.backgroundColor = selectedBgColor;
         localStorage.setItem("bgColor", selectedBgColor);
}
// ******** Clear Local Storage function **********
const clearLocalStorage = () =>{ 
         localStorage.removeItem("fontSize");
         localStorage.removeItem("bgColor");
         setValues("16px", "aqua");
}
// ********* Add Event Listeners ***************
   selectFontSize.addEventListener("change", changeFontSize);
   selectBgColor.addEventListener("change", changeBgColor);  
   resetBtn.addEventListener("click", clearLocalStorage); 
 

   initialSetup();  