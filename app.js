function show(id) {
document.querySelectorAll('.card').forEach(c => c.classList.add('hidden'));
document.getElementById(id).classList.remove('hidden');
}

// OHM
function calcOhm() {
let V = parseFloat(voltage.value);
let I = parseFloat(current.value);

if (!V || !I) return alert("Enter values");

let R = V / I;
ohmOut.innerText = "Resistance = " + R.toFixed(2) + " Ω";
}

// POWER
function calcPower() {
let V = parseFloat(pv.value);
let I = parseFloat(pi.value);

let P = V * I;
powerOut.innerText = "Power = " + P.toFixed(2) + " W";
}

// ENERGY
function calcEnergy() {
let P = parseFloat(ep.value);
let t = parseFloat(et.value);

let E = P * t;
energyOut.innerText = "Energy = " + E.toFixed(2) + " Wh";
}

// REACTANCE
function calcReactance() {
let f = parseFloat(freq.value);
let L = parseFloat(induct.value);
let C = parseFloat(cap.value);

let XL = 2 * Math.PI * f * L;
let XC = 1 / (2 * Math.PI * f * C);

reactOut.innerText =
`XL = ${XL.toFixed(2)} Ω | XC = ${XC.toFixed(2)} Ω`;
}

// IMPEDANCE
function calcImpedance() {
let R = parseFloat(Rz.value);
let XL = parseFloat(Xl.value);
let XC = parseFloat(Xc.value);

let Z = Math.sqrt(R*R + Math.pow((XL - XC), 2));

impOut.innerText = "Z = " + Z.toFixed(2) + " Ω";
}
