import App from "./App.jsx"

function handleFormSubmit() {
        event.preventDefault();


    console.log("form was submitted")
}
export default function Form() {

    return(
    <form>
        <input placeholder="itisme" />
         <button onClick={handleFormSubmit}>Submit</button>      

       </form>
       );
}