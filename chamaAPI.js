function mostrarPiada(){
    axios.get('https://v2.jokeapi.dev/joke/Any').then(response => {
        const joke = response.data;
        piadaAleatoria(joke);
        
    })
}

function  mostrarCachorro(){
    axios.get('https://dog.ceo/api/breeds/image/random').then(response => {

        const cachorro = response.data.message;
        console.log(response.data.message)
        // console.log(response.data)
        // console.log(response.data.url)

        imagemAleatorioCachorro(cachorro);
    })
}

const botao = document.getElementById('btChama');

botao.addEventListener('click', () =>{
    mostrarPiada();
    mostrarCachorro();
})

function piadaAleatoria(joke){
    const pergunta = document.getElementById('tituloPiada');
    const resposta = document.getElementById('respostaPiada');

    pergunta.innerHTML = joke.setup;
    resposta.innerHTML = joke.delivery;
}

function imagemAleatorioCachorro(cachorro){

    const imagem = document.getElementById('imgReacao').src = cachorro;

    //console.log('O que tem aqui ?',gato.data[0].url);
}

