import './Jogo.css';
import { useState } from 'react';
import { lista_palavras } from '../data/palavras';

const Jogo = () => {
    const [pontuacaoAtual, setPontuacaoAtual] = useState(0);
    const [categoria, setCategoria] = useState('Frutas');
    const [tentativas, setTentativas] = useState(3);
    const [palavra, setPalavra] = useState(lista_palavras[Math.floor(Math.random() * lista_palavras.length)]);

    console.log(palavra);

    const LetrasNaTela = () => {
        
    }


    return (
        <>
            <div className='Pontuacao'>Pontuação: {pontuacaoAtual}</div>
            <h1>Adivinhe a Palavra:</h1>
            <h2>Dica sobre a palavra: <span className='Categoria'>{categoria}</span></h2>
            <span>Você ainda tem {tentativas} {tentativas === 1 ? 'tentativa' : 'tentativas'}</span>
            <div className='Painel'>
                {LetrasNaTela()}
            </div>
            <p>Escolha uma letra:</p>
            <form>
                <input className='LetraEscolhida' type='text' maxLength='1' />
                <button>Enviar</button>
            </form>
        </>
    )
}

export default Jogo;