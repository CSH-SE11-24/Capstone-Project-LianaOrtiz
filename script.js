let header = document.querySelectorAll(".header")
let ha = document.querySelectorAll("label")
console.log(header)
console.log(ha)
for(let k = 0; k < header.length; k++){
  header[k].addEventListener("mouseover", function(event){
    console.log("mouseover")
    
    header[k].style.fontSize = "210%"
  })
}


for(let i = 0; i < header.length; i++){
  header[i].addEventListener("mouseout", function(event){
    console.log("mouseout")

    header[i].style.fontSize = "100%"
  })
}

for(let a = 0; a < ha.length; a++){
  ha[a].addEventListener("mouseover", function(event){
    console.log("mouseover")

    ha[a].style.fontSize = "210%"
  })
}

for(let n = 0; n < ha.length; n++){
  ha[n].addEventListener("mouseout", function(event){
    console.log("mouseout")

    ha[n].style.fontSize = "100%"
  })
}