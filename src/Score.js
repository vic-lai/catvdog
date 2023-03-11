import './Score.css';

const Score = (props) => {
    const catScore = props.catScore;
    const dogScore = props.dogScore;

    return (
        <div id="score">
            <div id="cat">
                <img src="https://pngfre.com/wp-content/uploads/cat-86.png" alt="catIcon"></img>
                <div id="catscore">Score: { catScore }</div>
            </div>
            <div id="dog">
                <img src="https://i.pinimg.com/originals/20/4e/23/204e2335da29c9aee33f672f249fe4e4.png" alt="dogIcon"></img>
                <div id="dogscore">Score: { dogScore }</div>
            </div>
        </div>
      );
}
 
export default Score;