const optionBtn = document.querySelectorAll(".option-button");
const advanceBtn = document.querySelectorAll(".adv-option-button");
const scriptBtn = document.querySelectorAll(".script");
const alignBtn = document.querySelectorAll(".align");
const spacingBtn = document.querySelectorAll(".spacing");
const format = document.querySelector(".format");
const fontName = document.getElementById("fontName");
const fontSize = document.getElementById("fontSize");
const linkBtn = document.getElementById("createLink");

// console.log(optionBtn);
// console.log(advanceBtn);
// console.log(scriptBtn);
// console.log(alignBtn);
// console.log(spacingBtn);
// console.log(format);
// console.log(fontName);
// console.log(fontSize);
// console.log(linkBtn);




let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];

const initializer = () =>{
    fontList.forEach((element)=>{
        let option = document.createElement("option");
        option.innerHTML = element;
        option.value = option.innerHTML;
        fontName.appendChild(option);
    });

    for(let i=1; i<10; i++){
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = option.value;
        fontSize.appendChild(option)
    }

   highlighter(alignBtn,false)
   highlighter(format,false)
   highlighter(spacingBtn,false)
   highlighter(alignBtn,false)
    
}

const modifyText = (command,defaultUi,valueArgument)=>{
    document.execCommand(command,defaultUi,valueArgument)
}

optionBtn.forEach((element)=>{
    element.addEventListener("click",()=>{
        modifyText(element.id,false,null)
    });
});

advanceBtn.forEach((element)=>{
    element.addEventListener("click",()=>{
        modifyText(element.id,false,element.value)
        console.log(element.value)
    })
})

const highlighter = () =>{

}
window.onload = () =>{
    initializer();
};