const Card = ({props}) => {
    return (
        <>
            <div>
                <h1>{props.name}</h1>
                <button>info</button>
                <button>edit</button>
                <button>youtube</button>
                <button>instagram</button>
                <button>twitch</button>
                <p>{props.description}</p>
            </div>
        </>
    )
}

export default Card;