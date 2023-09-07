



const Button = (props) => {


    return (

        <div>
            <button onClick={() => props.allPokemon()} className="btn btn-secondary m-4">Fetch All Pokemon!</button>
        </div>
    )
}

export default Button