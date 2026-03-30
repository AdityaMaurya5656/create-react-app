import App from "./App.jsx"


function handleCLick(event) {

    console.log("hello");
    console.log(event)
}

function printBye() {

    console.log("bye");
}

function handleDblClick() {

    console.log("on double click");
}

  export default function Button() {
    return(
    <div>
        <button onClick={handleCLick}>click Me!</button>
        <p onMouseOver={printBye}> Lorem ipsum dlendus! Animi nesciunt explicabo necessitatibus?</p>
        <button onDoubleClick={handleDblClick}>dblclick me</button>
        </div>
        );
}
