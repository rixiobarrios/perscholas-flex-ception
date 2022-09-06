let body = document.querySelector("body")
// document.body.style.backgroundColor = "black";
// document.body.style.color = "white";
for (let i = 0; i < 4; i++) {
  let div = document.createElement("div")
  div.classList.add("p-div")
  // div.setAttribute('style', 'background-color: blue') //<--- not working
  // div.style.backgroundColor = "blue"; //<--- not working

  for (let j = 0; j < 4; j++) {
    let sDiv = document.createElement("div")
    sDiv.classList.add("s-div")
    sDiv.setAttribute('style', 'background-color: green')
    // sDiv.style.backgroundColor = "green"; //<--- not working

    for (let k = 0; k < 4; k++) {
      let xDiv = document.createElement("div")
      xDiv.classList.add("x-div")
      xDiv.style.backgroundColor = "red"; //<--- not working
      sDiv.appendChild(xDiv)
    }
    div.appendChild(sDiv)
  }
  body.appendChild(div)
}

