var texto = '';
var btn = document.getElementById('botao');
var opt = document.getElementById('linguagem');
var radioC = document.getElementById('radioCod');
var radioD = document.getElementById('radioDecod');
var incremento = document.getElementById('baseCesar')

btn.addEventListener('click',()=>{ 
        if(opt.value == 'base64'){  
            if(radioC.checked == true){    
                texto = document.getElementById('textinho').value
                var codificado = btoa(texto);
                document.getElementById('pResultado').innerText = codificado
            }
            

            else if(radioD.checked == true){
                texto = document.getElementById('textinho').value
                var codificado = atob(texto);
                document.getElementById('pResultado').textContent = codificado
            }
        }
        
        else{
                trocaSelect
                if(radioC.checked == true){ 
                    var numeroIncr = parseInt(incremento.value);
                    var arr = [];
                    var arr2 = [];
                    var teste = '';
                    texto = document.getElementById('textinho').value
                    var splitado = texto.split('')
                    for(var i = 0; i < splitado.length; i++){
                        arr.push(texto.charCodeAt(i)+ numeroIncr) 
                        arr2.push(String.fromCharCode(arr[i]))
                        teste = arr2.join("")
                    }
                    
                    document.getElementById('pResultado').textContent = teste
                }

                else if(radioD.checked == true){
                    var numeroIncr = parseInt(incremento.value);
                    var arr = [];
                    var arr2 = [];
                    var teste = '';
                    texto = document.getElementById('textinho').value
                    var splitado = texto.split('')
                    for(var i = 0; i < splitado.length; i++){
                        arr.push(texto.charCodeAt(i)- numeroIncr) 
                        arr2.push(String.fromCharCode(arr[i]))
                        teste = arr2.join("")
                    }
                    
                    document.getElementById('pResultado').textContent = teste
                }
            
        }

        

    }
        
)

var trocaSelect = opt.addEventListener('change', ()=>{
    if(opt.value == 'cesar'){
        document.getElementById('qtdCesar').classList.remove('classCesar')
    }
    else{
        document.getElementById('qtdCesar').classList.add('classCesar')
    }
} )

radioC.addEventListener('change', ()=>{
    console.log('clicou')
    btn.innerHTML = 'Codificar'
})

radioD.addEventListener('change', ()=>{
    console.log('clicou')
    btn.innerHTML = 'Decodificar'
})