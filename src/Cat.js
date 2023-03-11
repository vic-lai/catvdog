import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import "./Cat.css"

const Cat = () => {
    const [restart, setRestart] = useState(false);
    if(restart===true) {
        return <Navigate to="/" />;
    }
    return (
        <div id="catWinner">
            <h1 id="text">Congrulations! You are a cat person!</h1>
            <img src="https://media.tenor.com/1MG3j4q4W5AAAAAj/cat-jam.gif" id="catgif" alt="catGif"></img>
            <button onClick ={()=> {
                setRestart(true);
            }}
            >
                Restart</button>
            <div id="background"></div>
        </div>
    );
}
 
export default Cat;