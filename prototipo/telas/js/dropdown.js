function drop(x){
    if( x.style.display === "none")
        x.style.display = "flex";
    else
        x.style.display = "none";
}
function drop_mobile(x){
    if( x.style.display === "flex")
        x.style.display = "none";
    else
        x.style.display = "flex";
}