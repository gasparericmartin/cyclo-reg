

function CyclistCard({cyclist}) {
    const {id, name, age, hometown} = cyclist

    return (
        <>
        <h2>{name}</h2>
        <p>{age}</p>
        <p>{hometown}</p>
        </>
    )
}

export default CyclistCard