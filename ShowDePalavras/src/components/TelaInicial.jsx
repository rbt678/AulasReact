import './TelaInicial.css';

const TelaInicial = ({comecar}) => {    
    return (
        <>
            <h1>Seja bem-vindo(a) ao Show de Palavras!</h1>
            <p>Clique no botão abaixo para iniciar o jogo</p>
            <button onClick={comecar}>JOGAR</button>
        </>
    )
}

export default TelaInicial;