
var vid = document.getElementById("VideoInteractivo");
var comprobarMaleta = -1
var comprobarAsignatura = -1
var comprobarFestivales = -1

var fiesta = 0
var fiestaTimeStamps = [184.3, 202.6, 219.5, 295.2]

var estudiar = 0
var estudiarTimeStamps = [47, 68.5, 85, 91.7]


var maletas = 16.22
var poesia = 112.5
var rugby = 160

var ligar = 0
var ligarTimeStamps = [345.4, 374.6]

var graduacion = 396


 
vid.ontimeupdate = function () { myFunction() };

function myFunction() {
    
    document.getElementById("tiempo").innerHTML = vid.currentTime;

    if ((vid.currentTime >= 13) && (vid.currentTime <= 15)) {
        document.getElementById('InitialText').style.display = 'block';
    } else {
        document.getElementById('InitialText').style.display = 'none';
    }

    if ((vid.currentTime >= 13) && (vid.currentTime <= 15)) {
        vid.pause();
        document.getElementById('pregunta2').style.display = 'block';
        
    } else {
        document.getElementById('pregunta2').style.display = 'none';
    }

    if ((vid.currentTime >= 44.1) && (vid.currentTime <= 44.5) && (comprobarMaleta == -1)) {
        vid.pause();
        document.getElementById('pregunta1').style.display = 'block';
        
    } else {
        document.getElementById('pregunta1').style.display = 'none';
    }

    if ((vid.currentTime >= 44.6) && (vid.currentTime <= 46.6)) {
        vid.pause();
        document.getElementById('pregunta3').style.display = 'block';
        
    } else {
        document.getElementById('pregunta3').style.display = 'none';
    }

    if ((vid.currentTime >= 63.9) && (vid.currentTime <= 65.5)) {
        vid.pause();
        document.getElementById('pregunta7').style.display = 'block';
        
    } else {
        document.getElementById('pregunta7').style.display = 'none';
    }

    if ((vid.currentTime >= 82) && (vid.currentTime <= 84)) {
        vid.pause();
        document.getElementById('pregunta8').style.display = 'block';
        
    } else {
        document.getElementById('pregunta8').style.display = 'none';
    }

    if ((vid.currentTime >= 88.65) && (vid.currentTime <= 90)) {
        vid.pause();
        document.getElementById('pregunta9').style.display = 'block';
        
    } else {
        document.getElementById('pregunta9').style.display = 'none';
    }

    if ((vid.currentTime >= 109.5) && (vid.currentTime <= 110) && (comprobarAsignatura == -1)) {
        vid.pause();
        document.getElementById('pregunta10').style.display = 'block';
        
    } else {
        document.getElementById('pregunta10').style.display = 'none';
    }

    if ((vid.currentTime >= 110.1) && (vid.currentTime <= 112.2)) {
        vid.currentTime = graduacion

    }

    if ((vid.currentTime >= 157.5) && (vid.currentTime <= 159.6)) {
        vid.pause();
        document.getElementById('pregunta4').style.display = 'block';
        
    } else {
        document.getElementById('pregunta4').style.display = 'none';
    }

    if ((vid.currentTime >= 181.6) && (vid.currentTime <= 183.6)) {
        vid.pause();
        document.getElementById('pregunta5').style.display = 'block';
        
    } else {
        document.getElementById('pregunta5').style.display = 'none';
    }

    if ((vid.currentTime >= 193.3) && (vid.currentTime <= 195.3)) {
        vid.pause();
        document.getElementById('pregunta11').style.display = 'block';
        
    } else {
        document.getElementById('pregunta11').style.display = 'none';
    }

    if ((vid.currentTime >= 216) && (vid.currentTime <= 218)) {
        vid.pause();
        document.getElementById('pregunta12').style.display = 'block';
        
    } else {
        document.getElementById('pregunta12').style.display = 'none';
    }

    if ((vid.currentTime >= 292) && (vid.currentTime <= 294)) {
        vid.pause();
        document.getElementById('pregunta13').style.display = 'block';
        
    } else {
        document.getElementById('pregunta13').style.display = 'none';
    }

    if ((vid.currentTime >= 303) && (vid.currentTime <= 305) && comprobarFestivales == -1) {
        vid.pause();
        document.getElementById('pregunta14').style.display = 'block';
        
    } else {
        document.getElementById('pregunta14').style.display = 'none';
    }


    if ((vid.currentTime >= 370.8) && (vid.currentTime <= 371.9)) {
        vid.currentTime = 372
    }

    if ((vid.currentTime >= 372) && (vid.currentTime <= 374)) {
        vid.pause();
        document.getElementById('pregunta6').style.display = 'block';
        
    } else {
        document.getElementById('pregunta6').style.display = 'none';
    }

    if (vid.currentTime >= 397) {
        vid.pause();
        document.getElementById('GraduacionText').style.display = 'block';

    } else {
        document.getElementById('GraduacionText').style.display = 'none';
    }

    if ((vid.currentTime >= 392.6) && (vid.currentTime <= 393.5)) {
        document.getElementById('LigarText').style.display = 'block';
        vid.pause();
    } else {
        document.getElementById('LigarText').style.display = 'none';
    }

    if ((vid.currentTime >= 343) && (vid.currentTime <= 345)) {
        vid.setAttribute('src', 'VIDEO MULTIMEDIA/YOU DIED (HD).mp4');
        vid.play();
    }

    if ((vid.currentTime >= 6) && (vid.currentTime <= 9) && vid.getAttribute('src') == 'VIDEO MULTIMEDIA/YOU DIED (HD).mp4') {
        document.getElementById('DiedText').style.display = 'block';
        vid.pause();
    } else {
        document.getElementById('DiedText').style.display = 'none';
}}

$('.opcionFiesta').on('click', function(){
    vid.currentTime = fiestaTimeStamps[fiesta];
    fiesta = fiesta + 1
    vid.play();
})

$('.opcionEstudiar').on('click', function(){
    vid.currentTime = estudiarTimeStamps[estudiar];
    estudiar = estudiar + 1
    vid.play();
})

$('.opcionMaletas').on('click', function(){
    vid.currentTime = maletas;
    vid.play();
})

$('.opcionPoesia').on('click', function(){
    vid.currentTime = poesia;
    vid.play();
})

$('.opcionRugby').on('click', function(){
    vid.currentTime = rugby;
    vid.play();
})

$('.opcionLigar').on('click', function(){
    vid.currentTime = ligarTimeStamps[ligar];
    ligar = ligar + 1
    vid.play();
})


 var cerrarPregunta1 = overlay => {
    opcion = document.pregunta1.test1.value;
    if(opcion == "Reposa culos"){
        document.getElementById(overlay).style.display = "none";
        vid.play();
    }
    else{
        document.getElementById("messages").innerHTML="¡Trata de responder de forma correcta antes!"
    }
  
}

var cerrarPregunta10 = overlay => {
    opcion = document.pregunta10.test2.value;
    if(opcion == "Quimica"){
        document.getElementById(overlay).style.display = "none";
        vid.currentTime = graduacion;
        vid.play();
    }
    else{
        document.getElementById("messages2").innerHTML="¡Trata de responder de forma correcta antes!"
    }
  
}

var cerrarPregunta14 = overlay => {
    document.getElementById(overlay).style.display = "none";
    comprobarFestivales = 1
    vid.currentTime = 306.2
    vid.play();
  
}

function comprobarMaletas(){
    comprobarMaleta = document.pregunta1.test1.value;
    var index;
    var mensajes=["¡Correcto!","¡Inténtalo de nuevo!"];
    

    if(comprobarMaleta == "Reposa culos"){
        index = 0;
    }
    if(comprobarMaleta == "Esponjas"){
        index = 1;
    }
    if(comprobarMaleta == "Chisme"){
        index = 1;
    }

    document.getElementById("after_submit").style.visibility="visible";
    document.getElementById("messages").innerHTML=mensajes[index];

}

function comprobarAsignaturas(){
    comprobarAsignatura = document.pregunta10.test2.value;
    var index;
    var mensajes=["¡Correcto!","¡Inténtalo de nuevo!"];
    

    if(comprobarAsignatura == "Quimica"){
        index = 0;
    }
    if(comprobarAsignatura == "Fisica"){
        index = 1;
    }
    if(comprobarAsignatura == "Biologia"){
        index = 1;
    }

    document.getElementById("after_submit2").style.visibility="visible";
    document.getElementById("messages2").innerHTML=mensajes[index];

}