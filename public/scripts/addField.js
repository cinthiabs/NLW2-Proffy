//procurar o botao
document.querySelector("#add-time")
//quando clicar  no botao
.addEventListener('click', cloneField)


//executar uma ação
function cloneField() {
   //duplicar os campos 
  const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //clonenode para duplicar
  
    //pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')
   
    //para cada campo, limpar
    fields.forEach(function(field){
        field.value=""
    })
  
   //colocar na pagina
   document.querySelector("#schedule-items").appendChild(newFieldContainer)
}

