    document.getElementById("submit-button").addEventListener("click", function(event){
    event.preventDefault(); // impede o envio do formulário
    var catetoA = document.getElementById("catetoA").value;
    var catetoB = document.getElementById("catetoB").value;

    if(catetoA == '' && catetoB == ''){
        document.getElementById('modal_title').innerHTML = 'Erro na inclusão!'
        document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
        document.getElementById('modal_conteudo').innerHTML = 'Favor insirir numero!!'
        document.getElementById('modal_btn').innerHTML = 'Voltar e corrigir' 
        document.getElementById('modal_btn').className = 'btn btn-danger'
        $('#modalRegistraDespesa').modal('show')

    }else if(catetoA == '' || catetoB == ''){
        document.getElementById('modal_title').innerHTML = 'Erro na inclusão!'
        document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
        document.getElementById('modal_conteudo').innerHTML = 'Favor verificar se todos os campos estao preenchidos corretamente!!'
        document.getElementById('modal_btn').innerHTML = 'Voltar e corrigir' 
        document.getElementById('modal_btn').className = 'btn btn-danger'
        $('#modalRegistraDespesa').modal('show')
    }

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "/test", true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            document.getElementById('modal_title').innerHTML = 'Resultado'
            document.getElementById('modal_titulo_div').className = 'modal-header text-sucess'
            document.getElementById('modal_conteudo').innerHTML = json.hypotenuse.toFixed(2);
            document.getElementById('modal_btn').innerHTML = 'Voltar'
            document.getElementById('modal_btn').className = 'btn btn-success'
            $('#modalRegistraDespesa').modal('show')
        }
    };
    var data = JSON.stringify({catetoA: catetoA, catetoB: catetoB});
    xhr.send(data);
    
     document.getElementById("catetoA").value = ''
     document.getElementById("catetoB").value = ''
});

