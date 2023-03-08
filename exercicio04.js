function inverterString(string) {
    let resultado = '';
    for (let c = string.length - 1; c >= 0; c--) {
        resultado += string[c];
    }
    console.log(resultado)
}

inverterString('Hello World')
inverterString('12345')
