import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import './Dog.css'

const Dog = () => {
    const [restart, setRestart] = useState(false);
    if(restart===true) {
        return <Navigate to="/" />;
    }
    return (
        <div id="dogWinner">
            <h1 alt="dogWiner" id="text">Congrulations! You are a dog person!</h1>
            <img src="https://media.tenor.com/twOxYKWAI5IAAAAM/dog.gif" id="dogGif" alt="dogGif"></img>
            <button onClick ={()=> {
                setRestart(true);   
            }}
            >
                Restart</button>
            <div id="dogBackground"></div>
        </div>
    );
}
 
export default Dog;