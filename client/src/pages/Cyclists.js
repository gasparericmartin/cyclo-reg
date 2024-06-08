


function Cyclists() {
    fetch('http://localhost:5555/cyclists')
    .then(r => r.json())
    .then(data => console.log(data))



    return <h1>Cyclists</h1>
}

export default Cyclists