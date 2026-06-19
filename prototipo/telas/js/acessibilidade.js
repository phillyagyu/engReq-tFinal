var r = document.querySelector(':root');
var b = document.getElementsByClassName("img-busca")
var skin = false;

function skin_alto_contraste() {
    if (!skin){
        r.style.setProperty('--cinza-escuro', '#000');
        r.style.setProperty('--cinza-login', '#000');
        r.style.setProperty('--cinza-login-hover', '#333');
        r.style.setProperty('--branco', '#000');
        r.style.setProperty('--azul', '#333');
        r.style.setProperty('--azul-claro', '#ff6');
        r.style.setProperty('--txt-preto', '#fff');
        r.style.setProperty('--txt-cinza', '#fff');
        r.style.setProperty('--txt-cinza-claro', '#fff');
        r.style.setProperty('--borda-transparente', '#fff');

        r.style.setProperty('--sist-borda-cinza', '#fff');
        r.style.setProperty('--sist-preench-cinza', '#000');
        r.style.setProperty('--sist-auth-borda', '#ff6');
        r.style.setProperty('--sist-auth-preench', '#333');
        r.style.setProperty('--sist-borda-amarela', '#fff');
        r.style.setProperty('--sist-preench-amarelo', '#000');
        r.style.setProperty('--sist-preench-verm', '#000');
        r.style.setProperty('--sist-txt-cinza-escuro', '#fff');
        for( var i = b.length; i--;){
            b[i].style.filter = "invert()";
        }
    }else{
        r.style.setProperty('--cinza-escuro', '#3f4e55');
        r.style.setProperty('--cinza-login', '#576870');
        r.style.setProperty('--cinza-login-hover', '#879398');
        r.style.setProperty('--branco', '#fff');
        r.style.setProperty('--azul', '#0072bb');
        r.style.setProperty('--azul-claro', '#0087de');
        r.style.setProperty('--txt-preto', '#333');
        r.style.setProperty('--txt-cinza', '#e0e0e0');
        r.style.setProperty('--txt-cinza-claro', '#bbb');
        r.style.setProperty('--borda-transparente', '#0000');

        r.style.setProperty('--sist-borda-cinza', '#ddd');
        r.style.setProperty('--sist-preench-cinza', '#eee');
        r.style.setProperty('--sist-auth-borda', '#037A74');
        r.style.setProperty('--sist-auth-preench', '#BCEFED');
        r.style.setProperty('--sist-borda-amarela', '#e6d59b');
        r.style.setProperty('--sist-preench-amarelo', '#fff4c8');
        r.style.setProperty('--sist-preench-verm', '#fdd');
        r.style.setProperty('--sist-txt-cinza-escuro', '#888');
        for( var i = b.length; i--;){
            b[i].style.filter = "unset";
        }
    }
    skin = !skin;
}
function fonte_maior(){
    r.style.setProperty('--fonte-top', '24px');
    r.style.setProperty('--fonte-padrao', '20px');
    r.style.setProperty('--fonte-h1', '40px');
    r.style.setProperty('--fonte-h3', '28px');
}
function fonte_normal(){
    r.style.setProperty('--fonte-top', '16px');
    r.style.setProperty('--fonte-padrao', '14px');
    r.style.setProperty('--fonte-h1', '30px');
    r.style.setProperty('--fonte-h3', '18px');
}