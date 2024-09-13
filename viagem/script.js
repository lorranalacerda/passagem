document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
  
    form.addEventListener('submit', async function(event) {
      event.preventDefault();

      const nome = document.getElementById('nome').value;
      const cpf = document.getElementById('cpf').value;
      const date = document.getElementById('date').value;
      const destino = document.getElementById('destino').value;
      const embarque = document.getElementById('embarque').value;
      const hora = document.getElementById('hora').value;
      const resultDiv = document.getElementById('mensagem');
      const mensagem = `
            <h3> A passagem está confirmada! <h3>
            <p>Titular: ${nome}<p>
            <p>CPF do titular: ${cpf}<p>
            <p>Dia: ${date}<p>
            <p>Embarque: ${embarque}<p>
            <p>Horário: ${hora}<p>
            <p>Destino: ${destino}<p>`;

    resultDiv.innerHTML = 'Verificando seus dados...';

    try{
        await fakeApiCall({nome, date, destino});
        resultDiv.innerHTML = `${mensagem}`;
    } catch (error) {
        resultDiv.innerHTML = `erro: ${error.messge}`;
    }
});

function fakeApiCall(retorno) {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            if (retorno.nome && retorno.date && retorno.destino) {
                resolve('passagem verificada');
            } else {
                reject(new Error('dados inválidos'));
            }
        }, 3000); // espera de 3 segundos
    })  
} 
})

// cookies 

document.addEventListener('DOMContentLoaded', function() {
    const msg = document.getElementById('cookie-msg');
    const aceite = document.getElementById('aceite');

    // mostrar msg
    function mostrarmsg(){
        msg.classList.add('mostrar')
    }
    // esconder
    function escondermsg(){
        msg.classList.remove('mostrar')
    }
    // determinar tempo
    mostrarmsg();
        // botao
        aceite.addEventListener('click', function() {
            escondermsg();
        });
})