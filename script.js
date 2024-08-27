function encriptarTexto() {
    let texto = document.getElementById("input-text").value;
    let textoEncriptado = encriptar(texto);
    document.getElementById("output-text").value = textoEncriptado;
}

function desencriptarTexto() {
    let texto = document.getElementById("input-text").value;
    let textoDesencriptado = desencriptar(texto);
    document.getElementById("output-text").value = textoDesencriptado;
}

function encriptar(texto) {
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}

function copiarAlPortapapeles() {
    let textoResultado = document.getElementById("output-text");
    textoResultado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
