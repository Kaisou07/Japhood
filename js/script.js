/* Menu script */
function menu(){
		var texto="";
		texto = texto + "<nav id=\"menu\">";
		texto = texto + "<ul>";
		texto = texto +	"<li><a href=\"home.html\"><img src=\"img/logolaranja.png\" id=\"home\" alt=\"Home\" title=\"Home\"></a></li>";
		texto = texto +	"<li><a id=\"restaurante\" href=\"restaurante.html\" alt=\"Restaurante\" title=\"Restaurante\" onMouseOver=\"muda('restaurante')\" onMouseOut=\"volta('restaurante')\">RESTAURANTE</a></li>";
		texto = texto +	"<li><a id=\"reservas\" href=\"reservas.html\" alt=\"Reservas\" title=\"Reservas\" onMouseOver=\"muda('reservas')\" onMouseOut=\"volta('reservas')\">RESERVAS</a></li>";
		texto = texto +	"<li><a id=\"cardapio\" href=\"doc/cardapio.pdf\" target=\"_blank\" alt=\"Cardápio\" title=\"Cardápio\" onMouseOver=\"muda('cardapio')\" onMouseOut=\"volta('cardapio')\">CARDÁPIO</a></li>";
		texto = texto +	"<li><a id=\"contato\" href=\"contato.html\" alt=\"Contato\" title=\"Contato\" onMouseOver=\"muda('contato')\" onMouseOut=\"volta('contato')\">CONTATO</a></li>";
		texto = texto +	"<li><a id=\"galeria\" href=\"galeria.html\" alt=\"Galeria\" title=\"Galeria\" onMouseOver=\"muda('galeria')\" onMouseOut=\"volta('galeria')\">GALERIA</a></li>";
		texto = texto +	"</ul>";
		texto = texto +	"</nav>";
		document.write(texto);
		//document.getElementById("menu").innerHTML = texto;
}

/* Rodapé script */
function rodape(){
		var texto="";
		texto = texto + "<nav>";
		texto = texto +	"<ul>";
		texto = texto +	"<li><a  href=\"home.html\"><img src=\"img/logobranco.png\" id=\"logof\" alt=\"Home\" title=\"Home\"/></a></li>";
		texto = texto +	"<li id=\"copy\">© COPYRIGHT 2019 - Japhood</li>";
		texto = texto +	"<li id=\"apres\">Comidas incríveis para você aproveitar o melhor da culinária japonesa.</li>";
		texto = texto +	"</ul>";
		texto = texto +	"</nav>";
		document.write(texto);
		//document.getElementById("footer").innerHTML = texto;
}

/* Mudar cor da fonte */
function muda(n){
document.getElementById(n).style.color="#ffff00";
}

/* Voltar cor da fonte */
function volta(n){
document.getElementById(n).style.color="#FFF";
}

/* Galeria efeito */
function galeria(){
	/* Quando o documento estiver pronto */
$(document).ready(function() {
	/* Quando passar o mouse pela imagem menor */
   $('.small-img img').hover(function() {
    var imgSrc = $(this).attr('src');
	/* A imagem maior irá aparecer no quadro */
    $('.large-img img').attr('src', imgSrc);
   });
});
document.getElementById("galeria").innerHTML = "";
}
