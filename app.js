function show(id){
document.querySelectorAll("section").forEach(s=>s.classList.add("hidden"));
document.getElementById(id).classList.remove("hidden");
}
window.onload=()=>show("ohm");

/* BASIC */
function calcOhm(){
let v=parseFloat(v.value);
let i=parseFloat(i.value);
ohmOut.innerText="R = "+(v/i).toFixed(2)+" Ω";
}

function calcPower(){
powerOut.innerText="P = "+(vp.value*ip.value).toFixed(2)+" W";
}

function calcEnergy(){
energyOut.innerText="E = "+(pe.value*t.value).toFixed(2);
}

function calcAC(){
acOut.innerText="P = "+(Vrms.value*Irms.value*pf.value).toFixed(2)+" W";
}

function calcReactance(){
let XL=2*Math.PI*freq.value*induct.value;
let XC=1/(2*Math.PI*freq.value*cap.value);
reactOut.innerText=`XL=${XL.toFixed(2)} Ω | XC=${XC.toFixed(2)} Ω`;
}

function calcImpedance(){
let Z=Math.sqrt(Rz.value**2 + (Xl.value-Xc.value)**2);
impOut.innerText="Z = "+Z.toFixed(2)+" Ω";
}

/* RESISTOR */
const colors=["Black","Brown","Red","Orange","Yellow","Green","Blue","Violet","Gray","White"];

colors.forEach((c,i)=>{
b1.innerHTML+=`<option value="${i}">${c}</option>`;
b2.innerHTML+=`<option value="${i}">${c}</option>`;
b3.innerHTML+=`<option value="${i}">${c}</option>`;
mult.innerHTML+=`<option value="${10**i}">${c}</option>`;
});

tol.innerHTML=`<option>Gold</option><option>Silver</option>`;

function updateBands(){
b3.style.display = (bandType.value>=5)?"block":"none";
}

function calcRes(){
let value=(b1.value*10 + +b2.value)*mult.value;
resOut.innerText="Resistance = "+value+" Ω";
}
