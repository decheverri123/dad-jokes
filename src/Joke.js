import React, { useEffect, useState } from 'react'

import './Joke.css'

export default function Joke(props)
{

    const [vote, setVote] = useState(0)

    const getColor = () =>
    {

        if (vote >= 15) { return "green" }
        else if (vote >= 12) { return "lightblue" }
        else if (vote >= 9) { return "lightorange" }
        else if (vote >= 6) { return "orange" }
        else if (vote >= 3) { return "red" }
    }



    return (
        <div className='joke'>
            <div className="joke-buttons">
                <i className="fas fa-arrow-up" onClick={() => setVote(vote + 1)} />
                <span className='joke-votes' style={{ borderColor: getColor() }}>{vote}</span>
                <i className="fas fa-arrow-down" onClick={() => setVote(vote - 1)} />
            </div>
            <div className="joke-text">{props.text}</div>

        </div >
    )
}
