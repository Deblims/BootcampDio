/*function verificaPalidromo(string){
    if (!string) return "string inexistente!";

    //qdo damos um split a string retona um array, por isso podemos usar o reverse.
    return string.split("").reverse().join("") === string;
}

console.log(verificaPalidromo("anotaram a data da maratona"));*/


function testar() {
   var input = document.getElementById('text')
    var text = input.value;
    let resp = document.getElementById('retorno');
   

    function verificaPalidromo2(texto) {
        var up = texto.toUpperCase().replace(/ /g, '');
        var invertida = up.split('').reverse().join('');
        if (up == invertida) {
            resp.innerHTML = `É um palíndromo, pois ${up} é igual à ${invertida}`;
        } else {
            resp.innerHTML = `Não é um palíndromo pois  ${up} é diferente de  ${invertida}`;
        }


    }
    verificaPalidromo2(text); 
     
};

