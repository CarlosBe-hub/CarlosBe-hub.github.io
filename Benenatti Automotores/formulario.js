

function validar(){
    let flagError = false;

    const nom = document.getElementById('nombre');
    const email = document.getElementById('email');
    const tel = document.getElementById('telefono');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');

    const regexEmail = /^[a-zA-Z0-9._%+-ñÑáéíóúÁÉÍÓÚ]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(nom.value == '' || nom.value.length < 4){
        const spanerror = document.getElementById('errornom');
        spanerror.style.display = 'block';

        flagError = true;

    }

    if(email.value == '' || !regexEmail.test(email.value)){
        const spanerror = document.getElementById('erroremail');
        spanerror.style.display = 'block';

        flagError = true;
    }

    if(tel.value == '' || tel.value.length < 10){
        const spanerror = document.getElementById('errortel');
        spanerror.style.display = 'block';

        flagError = true;
    }

    if(asunto.value == ''){
        const spanerror = document.getElementById('errorasunto');
        spanerror.style.display = 'block';

        flagError = true;
    }

    if(mensaje.value == '' || mensaje.value.length > 150){
        const spanerror = document.getElementById('errormensaje');
        spanerror.style.display = 'block';

        flagError = true;
    }

    if(!flagError){
        const resultado = document.getElementById('respuesta');
        resultado.classList.add('mostrar');

        let resultText = document.createElement('h2');
        resultText.innerHTML = `${nom.value} Gracias por comunicarte con Benenatti Automotores. Nos pondremos en contacto contigo!`
        resultado.appendChild(resultText);

        nom.value = '';
        email.value = '';
        tel.value = '';
        asunto.value = '';
        mensaje.value = '';

        nom.focus();

    }
    return false;
}

function limpiarError(event){
    let spanerror = event.target.nextSibling;
    spanerror.style.display = 'none';

}