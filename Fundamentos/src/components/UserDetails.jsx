const UserDetails = ({id, name, age, occupation}) => {
    return (
        <div>
            <h1>Usuário {id}</h1>
            <p>Nome: {name}</p>
            <p>Idade: {age}</p>
            <p>Profissão: {occupation}</p>
            {
                age >= 18 ? 
                    <p className="Positivo">Pode tirar carteira de motorista</p> 
                : 
                    <p className="Negativo">Não pode tirar carteira de motorista</p>
            }
        </div>
    )
}

export default UserDetails