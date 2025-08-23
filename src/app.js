import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  
  let pronoun = ['the', 'our', 'we', 'their', 'our']
  let adj = ['great', 'big', 'chepeast', 'colorfull']
  let noun = ['jogger', 'racoon', 'doggy', 'compus', 'snake', 'columpio']
  let dot = ['es', 'com', 'net', 'io', 'us']

  let domainNames = []
  for (let elemPronoun of pronoun) {
    for (let elemAdj of adj) {
      for (let elemNoun of noun) {
        for (let elemDot of dot) {
           domainNames.push(`${elemPronoun}${elemAdj}${elemNoun}.${elemDot}`)
        }
      }
    }
  }

  document.querySelector("#domain").innerHTML = `<ul>${domainNames.map((domainName) => `<li>${domainName}</li>`).join(" ")}</ul>`
};

  // if ((noun[nounIndex]).slice(2) == dot[dotIndex]) {
  //   return pronoun[pronounIndex] + adj[adjIndex] + (noun[nounIndex]).slice(-2) + '.' + dot[dotIndex]
  // }

