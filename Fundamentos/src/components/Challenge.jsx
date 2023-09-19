import {useState} from "react";

const Challenge = () => {
    const [sum, setSum] = useState("?");
    const [num2, setNum2] = useState(Math.floor(Math.random() * 100));
    const [num, setNum] = useState(Math.floor(Math.random() * 100));

    const alterarValores = () => {
        setNum(Math.floor(Math.random() * 100));
        setNum2(Math.floor(Math.random() * 100));
        setSum("?");
    }

    return(
        <div>
            <p>
                O valor de A é <span className="Valor-Normal">{num}</span> e o valor de B é <span className="Valor-Normal">{num2}</span>
            </p> 
            <p>
                E o soma dos dois é <span className="Valor-Soma">{sum}</span>
            </p>
            <div>
                <button onClick={() => setSum(num+num2)}>Somar</button>
                <button onClick={alterarValores}>Alterar Valores</button>
            </div>
        </div>
    )
}

export default Challenge;