import './Jogo.css';
import { useState } from 'react';
import { lista_palavras } from '../data/palavras';

const Jogo = () => {
    console.log("Jogo iniciou!");

    const [pontuacaoAtual, setPontuacaoAtual] = useState(0);
    const [lista_categorias] = useState(Object.keys(lista_palavras));
    const [categoria, setCategoria] = useState(lista_categorias[Math.floor(Math.random() * lista_categorias.length)]);
    const [lista_palavras_categoria, setLista_palavras_categoria] = useState(lista_palavras[categoria]);
    const [palavra, setPalavra] = useState(lista_palavras_categoria[Math.floor(Math.random() * lista_palavras_categoria.length)]);
    const [palavra_array, setPalavra_array] = useState(palavra.split(''));
    const [palavra_na_tela, setPalavra_na_tela] = useState(Array(palavra_array.length).fill(' '));
    const [tentativas, setTentativas] = useState(3);
    const [letras_usadas, setLetras_usadas] = useState([]);
    const [ganhou,setGanhou] = useState(false);
    const [falhou,setFalhou] = useState(false);

    console.log("A Palavra é: " + palavra + " e a categoria é: " + categoria);

    const ReiniciarJogo = () => {
        const categ = lista_categorias[Math.floor(Math.random() * lista_categorias.length)] 
        setCategoria(categ);

        const lipalcatg = lista_palavras[categ];
        setLista_palavras_categoria(lipalcatg);
        
        const pal = lipalcatg[Math.floor(Math.random() * lipalcatg.length)]
        setPalavra(pal);
        
        const pal_array = pal.split('');
        setPalavra_array(pal_array);
        
        const pal_na_tela = Array(pal_array.length).fill(' ');
        setPalavra_na_tela(pal_na_tela);

        
        setTentativas(3);
        setLetras_usadas([]);
        setGanhou(false);
        setFalhou(false);
        
        console.log("A Palavra é: " + palavra + " e a categoria é: " + categoria);
    }

    
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
                if (tentativas-1 <= 0) {
                    console.log('Você perdeu!');
                    setFalhou(true);
                    let botao = document.getElementById('b_reiniciar');
                    botao.focus();
                }
            }
            
            if (palavra_na_tela_aux.join('') === palavra) {
                console.log('Você acertou a palavra!');
                
                setGanhou(true);
                let pontuacao = document.getElementById('Pontuacao');
                setTimeout(() => {
                    pontuacao.style.transform = 'scale(2)';
                    setTimeout(() => {
                        setPontuacaoAtual(pontuacaoAtual + 1);
                    },200);
                    setTimeout(() => {
                        pontuacao.style.transform = 'scale(1.5)';
                    },500);
                },500);

                let botao = document.getElementById('b_continuar');
                botao.focus();
            }
        } else {
            console.log('Letra já foi usada!');
        }

        input.value = '';
        input.focus();
    }


    return (
        <>
            <div style={{filter: ganhou || falhou ? 'blur(3px)' : 'blur(0px)'}}>
                <div className='Pontuacao'>Pontuação: {pontuacaoAtual} </div>
                <h1>Adivinhe a Palavra: </h1>
                <h2>Dica sobre a palavra: <span className='Categoria'>{categoria.replace(/_/g, " ")} </span></h2>
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
            </div>
            <div className='Parabens' style={{display: ganhou ? 'block' : 'none'}}>
                <h1>Parabéns! Você acertou a palavra!</h1>
                <h1>Sua pontuação atual é:</h1> 
                <h1 id='Pontuacao'>{pontuacaoAtual}</h1>
                <button id='b_continuar' onClick={ReiniciarJogo}>Continuar</button>
            </div>
            <div className='Parabens' style={{display: falhou ? 'block' : 'none'}}>
                <h1>Parabéns! Você ERROU a palavra!</h1>
                <h1>Sua pontuação foi de:</h1> 
                <h1 id='Pontuacao'>{pontuacaoAtual}</h1>
                <button id='b_reiniciar' onClick={() => {setPontuacaoAtual(0); ReiniciarJogo();}}>Reiniciar o jogo</button>
            </div>
        </>
    )
}

export default Jogo;