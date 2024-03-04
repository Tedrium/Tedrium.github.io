
let x6D6F64616C = document.getElementById("myModal");
let  x6D6F64616C50616765  = document.getElementById("ocultar");

let x636C6F7365 = document.getElementsByClassName("close")[0];
x636C6F7365.onclick = function() {
  x6D6F64616C.style.display = "none";
  window.location.reload()
}

// Função para preencher os resultados no modal
function x726573756C74446973706C6179(x73686F772076616C7565) {
    x6D6F64616C.style.display = "block";
    x6D6F64616C50616765.style.zIndex = 1;
    x6D6F64616C50616765.style.visibility = "visible";
    let x76616C7565  = document.getElementById("value");
    x76616C7565.innerHTML = x73686F772076616C7565;
}

export{x726573756C74446973706C6179}