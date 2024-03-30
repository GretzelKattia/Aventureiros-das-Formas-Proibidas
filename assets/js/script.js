function calcularArea_Circulo() {
    var pi = Math.PI;
    var raio = parseFloat(prompt("Insira o raio do círculo:"));
    if (isNaN(raio) || raio <= 0) {
        alert("Por favor, insira um valor válido para o raio.");
        return calcularArea_Circulo();
    }

    var area_Circulo = pi * raio * raio;
    alert("A área do círculo é: " + area_Circulo.toFixed(2));
}

function calcularArea_Cubo() {
    var areaBase = parseFloat(prompt("Insirá o valor da medida da aresta: "));
    if (isNaN(areaBase) || areaBase <= 0) {
        alert("Por favor, insira um valor válido para a aresta.");
        return calcularArea_Cubo();
    }

    var area_Cubo = 6 * (areaBase) ** 2
    alert("A área do cubo é: " + area_Cubo.toFixed(2));
}

function calcularArea_Retangulo() {
    var valorBase = parseFloat(prompt("Insira o valor da base:"));
    if (isNaN(valorBase) || valorBase <= 0) {
        alert("Por favor, insira um valor válido para a base.");
        return calcularArea_Retangulo();
    } else {
        var valorAltura = parseFloat(prompt("Insira o valor da altura:"));
        if (isNaN(valorAltura) || valorAltura <= 0) {
            alert("Por favor, insira um valor válido para a altura.");
            return calcularArea_Retangulo();
        }
    }

    var area_Retangulo = valorBase * valorAltura;
    alert("A área do retângulo é: " + area_Retangulo.toFixed(2));
}

function calcularArea_Romboedro() {
    var diagonalMaior = parseFloat(prompt("Insira o valor para a diagonal maior:"));
    if (isNaN(diagonalMaior) || diagonalMaior <= 0) {
        alert("Por favor, insira um valor válido para a diagonal maior.");
        return calcularArea_Romboedro();
    } else {
        var diagonalMenor = parseFloat(prompt("Insira o valor para a diagonal menor:"));
        if (isNaN(diagonalMenor) || diagonalMenor <= 0 || diagonalMenor >= diagonalMaior) {
            alert("Por favor, insira um valor válido para a diagonal menor.");
            return calcularArea_Romboedro();
        }
    }

    var area_Romboedro = 3 * (diagonalMaior * diagonalMenor);
    alert("A área do retângulo é: " + area_Romboedro.toFixed(2));
}

function calcularArea_Trapezoide() {
    var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    if (isNaN(valor1) || valor1 <= 0) {
        alert("Por favor, insira um valor válido.");
        return calcularArea_Trapezoide();
    } else {
        var valor2 = parseFloat(prompt("Digite o segundo valor:"));
        if (isNaN(valor2) || valor2 <= 0 || valor1 == valor2) {
            alert("Por favor, insira um valor válido.");
            return calcularArea_Trapezoide();
        } else {
            var valor3 = parseFloat(prompt("Digite o terceiro valor:"));
            if (isNaN(valor3) || valor3 <= 0 || valor1 == valor3 || valor2 == valor3) {
                alert("Por favor, insira um valor válido.");
                return calcularArea_Trapezoide();
            } else {
                var valor4 = parseFloat(prompt("Digite o quarto valor:"));
                if (isNaN(valor4) || valor4 <= 0 || valor1 == valor4 || valor2 == valor4 || valor3 == valor4) {
                    alert("Por favor, insira um valor válido.");
                    return calcularArea_Trapezoide();
                }
            }
        }
    }

    var primeira_conta = (valor1 + valor2) / 2;
    var segunda_conta = (valor3 + valor4) / 2;
    var area_Romboedro = primeira_conta * segunda_conta;
    alert("A área do trapezoide irregular é: " + area_Romboedro.toFixed(2));
}

function calcularArea_Poligono() {
    var numeroLados = parseInt(prompt("Digite o número de lados do polígono:"));
    if (isNaN(numeroLados) || numeroLados <= 0) {
        alert("Por favor, insira um valor válido.");
        return calcularArea_Poligono();
    } else {
        var comprimentoLado = parseFloat(prompt("Digite o comprimento de um dos lados do polígono:"));
        if (isNaN(comprimentoLado) || comprimentoLado <= 0) {
            alert("Por favor, insira um valor válido.");
            return calcularArea_Poligono();
        } else {
            var apotema = parseFloat(prompt("Digite o valor do apótema do polígono:"));
            if (isNaN(apotema) || apotema <= 0) {
                alert("Por favor, insira um valor válido.");
                return calcularArea_Poligono();
            }
        }

        var perimetro = numeroLados * comprimentoLado;
        var semiperimetro = perimetro / 2;
        var area_Poligono = semiperimetro * apotema;
        alert("A área do polígono regular com N Lados é: " + area_Poligono.toFixed(2));
    }
}

function calcularArea_Quadrado() {
    var valorBase = parseFloat(prompt("Insira o valor da base:"));
    if (isNaN(valorBase) || valorBase <= 0) {
        alert("Por favor, insira um valor válido para a base.");
        return calcularArea_Quadrado();
    } else {
        var valorAltura = parseFloat(prompt("Insira o valor da altura:"));
        if (isNaN(valorAltura) || valorAltura <= 0) {
            alert("Por favor, insira um valor válido para a altura.");
            return calcularArea_Quadrado();
        }
    }

    var area_Quadrado = valorBase * valorAltura;
    alert("A área do quadrado é: " + area_Quadrado.toFixed(2));
}

function calcularArea_Cuboide() {
    var valor_comprimento = parseFloat(prompt("Digite o valor para o comprimento:"));
    if (isNaN(valor_comprimento) || valor_comprimento <= 0) {
        alert("Por favor, insira um valor válido para o comprimento.");
        return calcularArea_Cuboide();
    } else {
        var valor_largura = parseFloat(prompt("Digite o valor para a largura:"));
        if (isNaN(valor_largura) || valor_largura <= 0) {
            alert("Por favor, insira um valor para a largura.");
            return calcularArea_Trapezoide();
        } else {
            var valor_altura = parseFloat(prompt("Digite o terceiro valor:"));
            if (isNaN(valor_altura) || valor_altura <= 0) {
                alert("Por favor, insira um valor válido para a altura.");
                return calcularArea_Trapezoide();
            } 
        }
    }

    var area_Cuboide = 2*((valor_comprimento*valor_largura) + (valor_largura*valor_altura) + (valor_altura*valor_comprimento))
    alert("A área do cuboide é: " + area_Cuboide.toFixed(2));
}