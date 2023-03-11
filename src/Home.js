import { useState, useEffect} from 'react';
import Score from './Score';
import './Home.css';
import Picture from './Picture';
import { Navigate } from 'react-router-dom';

const Home = () => {
    const [catScore, setCatScore] = useState(0);
    const [dogScore, setDogScore] = useState(0);
    const [isCatPending, setIsCatPending] = useState(true);
    const [isDogPending, setIsDogPending] = useState(true);
    const [isCatWinner, setCatWinner] = useState(false);
    const [isDogWinner, setDogWinner] = useState(false);

    const handleCatClick = () => {
        setCatScore(catScore+1);
        setIsCatPending(true);
        setIsDogPending(true);
    }
    const handleDogClick = () => {
        setDogScore(dogScore+1);
        setIsCatPending(true);
        setIsDogPending(true);
    }

    useEffect(() => {
        if(catScore===10) {
            setCatWinner(true);
        }
        if(dogScore===10) {
            setDogWinner(true);
        }
    }, [catScore, dogScore])

    if(isCatWinner) {
        return <Navigate to="/Cat" />;
    }
    if(isDogWinner) {
        return <Navigate to="/Dog" />;
    }

    return (
        <div>
            <Score catScore={catScore} dogScore={dogScore}/>
            <Picture catScore={catScore} dogScore={dogScore} handleCatClick={handleCatClick} handleDogClick={handleDogClick} isDogPending={isDogPending} isCatPending={isCatPending}
            setIsCatPending={setIsCatPending} setIsDogPending={setIsDogPending} />
            <div className="left" onClick={handleCatClick}></div>
            <div className="right" onClick={handleDogClick}></div>
        </div>
      );
}
 
export default Home;