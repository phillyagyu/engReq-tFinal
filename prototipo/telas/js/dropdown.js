function drop(x){
    const botao = x.previousElementSibling;

    if(x.style.display === "none"){
        x.style.display = "flex";
        botao.classList.add("active");
    } else {
        x.style.display = "none";
        botao.classList.remove("active");
    }
}
function drop_rev(x){
    if( x.style.display === "flex")
        x.style.display = "none";
    else
        x.style.display = "flex";
}
function drop_inline(x){
    if( x.style.display === "inline")
        x.style.display = "none";
    else
        x.style.display = "inline";
}
function drop_once(x){
    x.classList.remove("mobile");
    x.style.display = "none"
    x.nextElementSibling.style.display = "flex";
}
function inverte_seta(x){
    if (x.querySelector('.seta').innerHTML === "▲")
        x.querySelector('.seta').innerHTML = "▼";
    else
        x.querySelector('.seta').innerHTML = "▲"
}