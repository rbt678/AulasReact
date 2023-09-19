import UserDetails from "./UserDetails"


const Pagina2 = () => {
    const users = [
        {id: 1, name: 'Roberto', age: 2, occupation: 'Programador'},
        {id: 2, name: 'João', age: 18, occupation: 'Estudante'},
        {id: 3, name: 'Maria', age: 33, occupation: 'Professora'},
        {id: 4, name: 'José', age: 4, occupation: 'Médico'},
        {id: 5, name: 'Ana', age: 19, occupation: 'Estudante'},
        {id: 6, name: 'Paulo', age: 3, occupation: 'Advogado'}
    ]

    return (
        <>
            {users.map((users) => (
                <UserDetails id={users.id} name={users.name} age={users.age} occupation={users.occupation} />
            ))}
        </>    
    )
}

export default Pagina2