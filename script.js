const optionBtn = document.querySelectorAll(".option-button");
const advanceBtn = document.querySelectorAll(".adv-option-button");
const scriptBtn = document.querySelectorAll(".script");
const alignBtn = document.querySelectorAll(".align");
const spacingBtn = document.querySelectorAll(".spacing");
const format = document.querySelectorAll(".format");
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
    fontList.map((value)=>{
        let option = document.createElement("option");
        option.innerHTML = value;
        option.value = option.innerHTML;
        fontName.appendChild(option);
    });

    for(let i=1; i<10; i++){
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = option.value;
        fontSize.appendChild(option)
    }

    highlighter(alignBtn,true)
    highlighter(spacingBtn,true)
    highlighter(format,true)
    highlighter(scriptBtn,true)
    
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
    })
})

linkBtn.addEventListener("click",()=>{
    const userInput = promp("Enter the Url");
    if(/http/i.test(userInput)){
        modifyText(linkBtn.id,false,userInput)
    }
    else{
        userLink = "http://" + userLink;
        modifyText(linkBtn.id,false,userInput)
    }
})


const highlighter = (className , needsRemoval)=>{
    className.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            if(needsRemoval){
                let alreadyActive = false;
                if(btn.classList.contains("active")){
                    alreadyActive = true;
                }
                highlighterRemove(className);
                if(!alreadyActive){
                    btn.classList.toggle("active")
                }
            }
        })
    })
}
const highlighterRemove = (className) =>{
    className.forEach((button)=>{
       button.classList.remove("active")
    })
}

            
window.onload = () =>{
    initializer();
};