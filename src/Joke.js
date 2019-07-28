import React, { useEffect, useState } from 'react'

import './Joke.css'
import { List, Divider, Button, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';

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
        <List className='joke'>
            <ListItemIcon style={{ paddingLeft: '20px' }}>
                <i className="fas fa-arrow-up" onClick={() => setVote(vote + 1)} />
                <span className='joke-votes' style={{ borderColor: getColor() }}>{vote}</span>
                <i className="fas fa-arrow-down" onClick={() => setVote(vote - 1)} />
            </ListItemIcon>

            <ListItem>
                <ListItemText primary={props.text} />
            </ListItem>
            <Divider variant='inset' component='li' />
        </List >
    )
}
