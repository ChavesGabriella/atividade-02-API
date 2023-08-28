const axios = require('axios');

function mostrarGatoEPiada(){
    const titulo = document.getElementById('tituloPiada');
    axios.get('https://v2.jokeapi.dev/joke/Any').then(response => {
        const joke = response.data;
        if(joke.type === 'single'){
            console.log(joke.joke);
        }else if(joke.type === 'twopart'){
            console.log(joke.setup + '\n' + joke.delivery);
        }
        imagemAleatorioGato();
        titulo.innerHTML = piada.setup;
    }).catch(error => {
        console.error(error);
    });
}

function imagemAleatorioGato(){
    const resposta = document.getElementById('respostaPiada');
    axios.get('https://api.thecatapi.com/v1/images/search').then(response => {
        const catImageUrl = response.data[0].url;
        resposta.innerHTML = piada.delivery;
        console.log('Imagem do Gato:', catImageUrl);
    }).catch(error => {
        console.error(error);
    });
}

mostrarGatoEPiada();
