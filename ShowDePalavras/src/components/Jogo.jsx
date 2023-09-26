import './Jogo.css';
import { useState } from 'react';
import { lista_palavras } from '../data/palavras';

const Jogo = () => {
    console.log("Jogo iniciou!");

    
    const [lista_categorias] = useState(Object.keys(lista_palavras));
    const [categoria] = useState(lista_categorias[Math.floor(Math.random() * lista_categorias.length)]);
    const [lista_palavras_categoria] = useState(lista_palavras[categoria]);
    const [palavra] = useState(lista_palavras_categoria[Math.floor(Math.random() * lista_palavras_categoria.length)]);
    const [palavra_array] = useState(palavra.split(''));
    const [palavra_na_tela, setPalavra_na_tela] = useState(Array(palavra_array.length).fill(' '));
    const [pontuacaoAtual, setPontuacaoAtual] = useState(0);
    const [tentativas, setTentativas] = useState(3);
    const [letras_usadas, setLetras_usadas] = useState([]);

    console.log("A Palavra é: " + palavra + " e a categoria é: " + categoria);

    
    const LetrasNaTela = () => {
        console.log("Letras irão aparecer na tela! " + palavra_na_tela);

        return (
            palavra_na_tela.map((letra, index) => {
                return <span key={index} className='Letras'>{letra}</span>
            })
        )
    }

    const EscolherLetra = (e) => {
        e.preventDefault();
        let input = document.getElementById('LetraEscolhida');
        let letra_escolhida = input.value;
        let n_letra_escolhida = letra_escolhida.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        console.log("A letra escolhida foi: " + n_letra_escolhida);
        
        if (letras_usadas.includes(n_letra_escolhida) === false && n_letra_escolhida !== '') {
            setLetras_usadas([...letras_usadas, n_letra_escolhida]);         

            let palavra_na_tela_aux = palavra_na_tela.slice();
            let achou = false;

            palavra_array.map((letra, index) => {
                console.log('Letra: ' + letra + ' na posição ' + index);
                let n_letra = letra.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                if (n_letra === n_letra_escolhida) {
                    achou = true;
                    console.log('Letra existe na posição ' + index);
                    palavra_na_tela_aux[index] = letra;
                    console.log(palavra_na_tela_aux);
                    setPalavra_na_tela(palavra_na_tela_aux);
                }
            })

             

            if (achou === false) {
                console.log('Letra não existe na palavra!');
                setTentativas(tentativas - 1);
            }    
        } else {
            console.log('Letra já foi usada!');
        }

        input.value = '';
        input.focus();
    }


    return (
        <>
            <div className='Pontuacao'>Pontuação: {pontuacaoAtual} </div>
            <h1>Adivinhe a Palavra: </h1>
            <h2>Dica sobre a palavra: <span className='Categoria'>{categoria.replace("_", " ")} </span></h2>
            <span>Você ainda tem {tentativas} {tentativas === 1 ? 'tentativa' : 'tentativas'} </span>
            <div className='Painel'> 
                {LetrasNaTela()}
            </div>
            <p>Escolha uma letra: </p>
            <form onSubmit={EscolherLetra}>
                <input id='LetraEscolhida' className='LetraEscolhida' type='text' maxLength='1' />
                <button>Enviar</button>
            </form>
            <p>Letras já escolhidas: </p>
            <p>{letras_usadas.join(', ')}</p>
        </>
    )
}

export default Jogo;