document.addEventListener('DOMContentLoaded',function(){
 const aumentafontebotao. =document.getelementid.("aumentar-fonte");
 const diminuirfontebotao. =document.getelementid.("diminuir-fonte");

 let tamanhoatualfonte = 1;
 aumentafontebotao.addEventListener('click', function){
 tamanhoatualfonte +=0.1;
 document.body.style.fontesize = $ '[{tamanhoatualfonte}]rem';

 };

}
);

 let tamanhoatualfonte = 1;
 diminuirfontebotao.addEventListener('click', function){
 tamanhoatualfonte -=0.1;
 document.body.style.fontesize = $ '[{tamanhoatualfonte}]rem';

 };


