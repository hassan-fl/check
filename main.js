let probar = document.querySelector(".circle");

probar.setAttribute("role","progressbar");
probar.setAttribute("data-valuenow","0");


document.addEventListener("click",(e) =>{
    if(e.target.dataset.value){
        let progress = e.target.dataset.value;
        probar.setAttribute("data-valuenow",`${progress}`);
        probar.style.setProperty("--progress", progress + "%");
    }
})

