import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './JokeList.css'
import Joke from './Joke';
import uuid from 'uuid/v4'
import { Button, Paper, Typography } from '@material-ui/core'

export default function JokeList()
{

    const [joke, setJoke] = useState([])
    const [numJokes, setNumJokes] = useState(10)
    const [loading, setLoading] = useState(false)
    let jokeVote = joke.sort((a, b) => b.votes - a.votes)



    useEffect(() => { getJokes() }, [])

    const getJokes = async () =>
    {
        let jokes = []
        while (jokes.length < numJokes)
        {
            const joke = await axios.get('https://icanhazdadjoke.com/', {
                headers: { Accept: 'application/json' }
            })
            jokes.push({ id: uuid(), text: joke.data.joke, votes: 0 })
        }
        setJoke(jokes)
        setLoading(false);
        window.localStorage.setItem("jokes", JSON.stringify(jokes))
    }
    if (joke.length === 0) { getJokes() }


    const handleVotes = () =>
    {
        setLoading(true);
        getJokes();
    }

    if (loading)
    {
        return (
            <div className="spinner">
                <i className="far fa-8x fa-laugh fa-spin"></i>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div className='joke-list'>
            <Paper className='jokelist-sidebar'>
                <h1 className="jokelist-title">
                    <Typography variant='h2' style={{ fontFamily: 'Rubik' }}> <b>Dad</b> Jokes </Typography>
                </h1>
                <img
                    src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" alt="" />
                <Button
                    className='jokelist-getmore'
                    variant='contained'
                    color='primary'
                    onClick={handleVotes}
                >
                    New Jokes
                </Button>
            </Paper>


            <Paper className="jokelist-jokes">
                {jokeVote.map(j =>
                    (
                        <Joke key={j.id} text={j.text} />
                    ))}
            </Paper>

        </div >
    )
}
