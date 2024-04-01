Lenguajes FrontEnd: HTML, CSS, JS & Web Components
Lenguajes Backend: node JS, php, python, java
Frameworks CSS: Bootstrap
Librerias JS: JQuery, React
Frameworks JS: Angular, Vue
Frameworks php: symphony, laravel
Herramientas: DevTools, Visual Studio Code, 

# Developer tools
Plataforma:: Platzi
CURSO:: https://platzi.com/new-home/clases/1867-devtools/
Profesor:: Diego de la Granda (Google Developer Engineer)

Chrome:: https://developer.chrome.com/docs/devtools?hl=es-419
Firefox:: https://firefox-dev.tools/
Edge:: https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/overview

 # Twitch

 ManzDev


 //---------------------------------------

<link rel="stylesheet" href="highlight_atom-one-dark.min.css">
<script src="highlight.min.js"></script>

<div class="logoJS">
	{{Seccion}}&nbsp;<img src="js-svgrepo-com.svg" width="25px">
</div>

<div class="anverso">
	{{Anverso}}
</div>


<script>hljs.highlightAll();</script>

//--------------------------------------

{{FrontSide}}

<hr id=answer>

<div>
{{Reverso}}
</div>

<hr>

<button id="btnEjemplos">Ejemplos</button>

<div id="ejemploContent" class="display-none" >

{{#EjemploCode}}
<pre><code>{{EjemploCode}}</code></pre>
{{/EjemploCode}}

{{#EjemploRun}}
<div class="ejemploRun">{{EjemploRun}}</div>
{{/EjemploRun}}

</div>


<script>
document.getElementById("btnEjemplos").addEventListener("click", function() {
    var ejemploContent = document.getElementById("ejemploContent"); 

    // Alternar la clase entre display-none y display-block
    ejemploContent.classList.toggle("display-block");

    // Asegurarse de que se remueva la clase contraria para mantener el estado correcto
    if (ejemploContent.classList.contains("display-none")) {
        ejemploContent.classList.remove("display-none");
    } else {
        ejemploContent.classList.add("display-none");
    }

});
</script>

<hr>
<div class="mdn">
{{MDN}}
</div>

<script>hljs.highlightAll();</script>

//-----------------------------------------------------------------------------

.card {
    background-color:  #f4f5d5 ;
	  font-size: 20px;
}

.logoJS{
		/* border: 1px solid black;*/
		text-align: right;
		display: flex;
		justify-content: flex-end;
	  font-weight: bold;
		text-shadow: 2px 2px 4px #cccccc;
		padding: 2px 2px 20px 2px;

}

div{
    font-family: Roboto, Arial;
    text-align: justify;
		 padding: 4px;

}

pre code {
    padding: 5px;
		font-size: 14px; 
}

#ejemploContent {}
.ejemploCode {margin: 0px;}
.ejemploRun {margin: 0px;}

.mdn{
		font-family: Roboto;
		font-size: 12px;
}

.display-none {
    display: none;
}

.display-block {
    display: block;
}


//----------------------------------------------------------------------------

