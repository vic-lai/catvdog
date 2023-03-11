import { useState, useEffect } from 'react'
import './Picture.css'

const Picture = (props) => {
    const [catImage, setCatImage] = useState(null);
    const [dogImage, setDogImage] = useState(null);
    const handleCatClick = props.handleCatClick;
    const handleDogClick = props.handleDogClick;
    const catScore = props.catScore;
    const dogScore = props.dogScore;
    const isCatPending = props.isCatPending;
    const isDogPending = props.isDogPending;
    const setIsCatPending = props.setIsCatPending;
    const setIsDogPending = props.setIsDogPending;

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setCatImage(data[0].url);
                setIsCatPending(false);
            })
            fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setDogImage(data.message);
                setIsDogPending(false);
            })
    }, [catScore,dogScore])

    return (
        <div className="pics">
            { isCatPending && <div id="catLoading">Loading...</div> }
            { isDogPending && <div id="dogLoading">Loading...</div> }
            { !isCatPending && <img src={catImage} alt="cat" onClick={handleCatClick}></img> }
            { !isDogPending && <img src={dogImage} alt="dog" onClick={handleDogClick}></img> }
        </div>
    );
}
 
export default Picture;