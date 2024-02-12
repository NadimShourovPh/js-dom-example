const allSection = document.querySelectorAll("section")
for (const section of allSection){
    section.style.backgroundColor = "red";
    section.style.padding = "15px"
    section.style.marginBottom = "10px"
    section.style.color = "white"
}
// section.style.backgroundColor = "red";

const pAll = document.getElementById("part-2")
const p = document.createElement("p")
p.innerText = "i love bangladesh"
pAll.appendChild(p);
const h2All = document.getElementById("part-2")
const h2 = document.createElement("h2")
h2.innerText = "i love bangladesh"
pAll.appendChild(h2);

const h3All