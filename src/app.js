import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Boton de reload page
  const reload = document.getElementById("reload");
  reload.addEventListener("click", (_) => {
    location.reload();
  });
  //write your code here
  document.querySelector("#domain").innerHTML = genDomainName()
};

let genDomainName = () => {

  let pronoun = ['the', 'our', 'we', 'their', 'our']
  let adj = ['great', 'big', 'chepeast', 'colorfull']
  let noun = ['jogger', 'racoon', 'doggy', 'company', 'snake']
  let dot = ['.es', '.com', '.net', '.io', '.us']

  let pronounIndex = Math.floor(Math.random() * pronoun.length)
  let adjIndex = Math.floor(Math.random() * adj.length)
  let nounIndex = Math.floor(Math.random() * noun.length)
  let dotIndex = Math.floor(Math.random() * dot.length)

  return pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] +  dot[dotIndex]
}
