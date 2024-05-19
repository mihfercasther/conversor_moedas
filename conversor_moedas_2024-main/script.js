var alterar_moeda = true; //true = Euro -> Dolar   false = Dolar -> Euro

    function calc(){
        if(alterar_moeda == true)
        {
            let euro = euroField.value;
            result = euro * 0.981;
            usd.value = result.toFixed(2).replace('.', ',');
        }
        else{
            let valor_usd = parseInt(usd.value);  
            result = valor_usd * 1.08;
            euroField.value = result.toFixed(2).replace('.', ',');
        }
    }





function trocarDivs() {
    alterar_moeda = !alterar_moeda;
    usd.value = null;
    euroField.value = null;
    var container = document.getElementById("container");
    var div2 = document.getElementById("div2");
    var div4 = document.getElementById("div4");

    
    var cloneDiv2 = div2.cloneNode(true);
    var cloneDiv4 = div4.cloneNode(true);

    
    container.replaceChild(cloneDiv2, div4);
    container.replaceChild(cloneDiv4, div2);
    if(alterar_moeda == true)
        {
            document.getElementById('usd').setAttribute("type", "text");
            document.getElementById('euroField').setAttribute("type", "number");
        }
        else{
            document.getElementById('usd').setAttribute("type", "number");
            document.getElementById('euroField').setAttribute("type", "text");
        }
}