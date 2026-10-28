const parameterek = new URLSearchParams(window.location.search);
const kepForras = parameterek.get("src");
const kepLeiras = parameterek.get("alt");
const visszaElem = parameterek.get("returnTo");
const kepElem = document.querySelector("#kivalasztott-kep");
const cimElem = document.querySelector("#kep-cim");
const visszaLink = document.querySelector(".kep-vissza");

if (visszaElem && /^(elso-gep|masodik-gep|harmadik-gep|negyedik-gep)$/.test(visszaElem)) { //linux tudásnak végre haszna is lett
    visszaLink.href = `index.html#${encodeURIComponent(visszaElem)}`;
}

kepElem.src = kepForras;
kepElem.alt = kepLeiras || "A kiválasztott kép";
cimElem.textContent = kepLeiras || "Kiválasztott kép";
