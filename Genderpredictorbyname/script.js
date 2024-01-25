let URL = "https://api.genderize.io?name=";
// let result = document.querySelector("#result");
let wrapper=document.getElementById("wrapper");
let error=document.getElementById("error");
wrapper.innerHTML = "";
error.innerHTML = "";
const btn = document.querySelector("#submit");

const getinfo=()=>{
    let inpword = document.querySelector("#name").value;
    // console.log(inpword);
  
    if (inpword.length > 0 && /^[A-Za-z]+$/.test(inpword)) {
      fetch(`${URL}${inpword}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let div = document.createElement("div");
          div.setAttribute("id", "info");
          div.innerHTML = `<h2 id="result-name">${data.name}</h2>
          <img src="" id="gender-icon"/> 
          <h1 id="gender">${data.gender}</h1>
          <h4 id="prob">Probability: ${data.probability}</h4>`;
          wrapper.append(div);
          if (data.gender == "female") {
              div.classList.add("female");
              document
                .getElementById("gender-icon")
                .setAttribute("src", "female.png");
            } else {
              div.classList.add("male");
              document
                .getElementById("gender-icon")
                .setAttribute("src", "male.png");
            }
        });
        document.getElementById("name").value="";
    }else{
      error.innerHTML="Enter a valid name with no spaces";
    }
}

btn.addEventListener("click", getinfo);
window.addEventListener("load",getinfo);