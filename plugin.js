
//  selector
const $=function(selectorName){
   return document.querySelector(selectorName)
}

// selector All
const $a=function(selectorName){
   return document.querySelectorAll(selectorName)
}

// dynamic create element


const createElement=function(tagName,className,content){
   const newElement=document.createElement(tagName);
  if(className){
   newElement.setAttribute("class", className);
  }
   if(content){
      newElement.innerHTML=content;
   }

   return newElement
}






















