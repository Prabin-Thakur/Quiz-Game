import { useHistory} from 'react-router-dom'

const Header = (props) => {
    const history = useHistory();

    const handleHistory = () => {
        if(props.number === props.questions.length - 1){
            history.push('/results');
            props.setNumber(0);
            props.setOption1Color(null);
            props.setOption2Color(null);
            props.setOption3Color(null);
            props.setTracker1(false);
            props.setTracker2(false);
        }else {
            props.setNumber(props.number + 1);
            props.setOption1Color(null);
            props.setOption2Color(null);
            props.setOption3Color(null);
            props.setTracker1(false);
            props.setTracker2(false);
        }
    }
    return ( 
        <div>
            <div className="header">
                <p className="score">Score : <span className="score_number">  {props.scoreDigit} </span></p>
                <button onClick={handleHistory} className="next_button">Next</button>
            </div>
        </div>
     );
}
 
export default Header;