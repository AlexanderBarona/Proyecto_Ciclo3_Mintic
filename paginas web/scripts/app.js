const inputs = () => {
    console.log(form.indentificacion.value);

}

const letras = (e) => {
    var key = e.keyCode || e.which;
    var letras = "abcdefghijklmnñopqrstuvwxyz";
    var teclado = String.fromCharCode(key).toLocaleLowerCase();
    var especiales = "8-37-38-46-164";
    var teclado_especial = false;
    for (var i in especiales) {
        if (key == especiales[i]) {
            teclado_especial = true;
            break;
        }
    }
    if (letras.indexOf(teclado) == 1 && !teclado_especial) {
        return false;
    } else {
        return true;
    }
}


const numeros = (e) => {
    var key = e.keyCode || e.which;
    var letras = "0123456789";
    var teclado = String.fromCharCode(key).toLocaleLowerCase();
    var especiales = "8-37-38-46-164";
    var teclado_especial = false;
    for (var i in especiales) {
        if (key == especiales[i]) {
            teclado_especial = true;
            break;
        }

    }
    if (letras.indexOf(teclado) == -1 && !teclado_especial) {
        return false;
    } else {
        return true;
    }
}



