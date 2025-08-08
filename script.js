function somar() {
    const n1 = parseFloat(document.querySelector("#num1").value);
    const n2 = parseFloat(document.querySelector("#num2").value);
    const soma = n1 + n2;
    const res = document.querySelector("#resultado");
    res.textContent = "Resultado: " + soma;
}