"use strict"



//  NUSXALASH
const pokemons1=pokemons.map((e,i)=>{
   return {
      id:i,
      img:e.img,
      name:e.name,
      type:e.type,
      weight:e.weight,
      height:e.height
}
})



//  ELEMENTS
pokemons.forEach((e,i)=>{
   const card=createElement('div', 'card', ` <div class="card2">
   <img src="${e.img}" alt="pokemon" class="rasm">
<div class="line"></div>
<h2 class="title_first">${e.name}</h2>

<h4 class="title_second">${e.type}</h4>
<p class="text1">${e.weight}</p>
<p class="text2">${e.height}</p>
</div>`)

$('.wrap2').appendChild(card)
});




// find function

const findName=function(title){

   const searchName=pokemons.filter((name1)=>{
     return name1.name.toLocaleLowerCase().includes(title) 
   })

   renderNames(searchName)

}

// find event

$('#searchName').addEventListener('input', (e)=>{
   e.preventDefault()
   $('.wrap2').innerHTML=""

   const searchTerm=$('#searchName').value.trim().toLowerCase();

   const regexpSearch=new RegExp (searchTerm , "gi")

   const result=searchTerm.match(regexpSearch);

   findName(result)

 
})


// render function

function renderNames( searchName){
   searchName.forEach((e,i)=>{
      const card=createElement('div', 'card', ` <div class="card2">
      <img src="${e.img}" alt="pokemon" class="rasm">
   <div class="line"></div>
   <h2 class="title_first">${e.name}</h2>
   
   <h4 class="title_second">${e.type}</h4>
   <p class="text1">${e.weight}</p>
   <p class="text2">${e.height}</p>
   </div>`)
   
   $('.wrap2').appendChild(card)
   });
}

