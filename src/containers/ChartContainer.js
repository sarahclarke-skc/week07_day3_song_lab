import React, { useState, useEffect } from 'react';
import SongList from '../components/SongList'
import GenreOption from '../components/GenreOption'

const ChartContainer = () => {

    const [songs, setSongs] = useState([]);
    const [genre, setGenre] = useState('top20')

    useEffect(() => {
        getCharts(genre);
    }, [genre])

    const getCharts = function (genre) {
        if (genre === 'top20') {
            fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))
        } else if (genre === 'rock') {
            fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json')
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))
        } else if (genre === 'dance') {
            fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json')
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))
        } else if (genre === 'country') {
            fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json')
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))
        } else if (genre === 'baby') {
            fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=4/json')
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))
        } else if (genre === 'kpop') {
            fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=51/json')
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))
        } else if (genre === 'blues') {
            fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=2/json')
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))
        }
    }

    return (
        <>
            <h1>Top 20 UK iTunes</h1>
            <GenreOption setGenre={setGenre} />
            <SongList songs={songs} />
        </>
    )
}

export default ChartContainer;