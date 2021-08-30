import React from 'react';
import { Link } from 'react-router-dom'

const Start = (props) =>{
    const reset = () => {
        props.setNumber(0)
        props.setScoreDigit(0)
    }
    return (
        <div>
            <Link to="/questions" onClick={reset}className="start_button">
                Start
            </Link>
        </div>
    );
};

export default Start