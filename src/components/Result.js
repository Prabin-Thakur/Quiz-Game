import { Link } from 'react-router-dom'

const Result = (props) => {
    return ( 
        <div className="last_container">
            <div className="text">
                <p>You have total of <span className="correctPoints">{props.scoreDigit}</span> correct answers and total of <span className="incorrectPoints">{props.questions.length - props.scoreDigit}</span> incorrect answers.</p>
            </div>
            <Link to="/" className="restart_button">Restart</Link>
        </div>
     );
}
 
export default Result;