import React, { useState, useEffect } from 'react';
import SongList from '../components/SongList'

const ChartContainer = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getCharts();
    }, [])

    const getCharts = function () {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs.feed.entry))
    }

    return (
        <>
            <h1>Top 20 UK iTunes</h1>
            <SongList songs={songs} />
        </>
    )
}

export default ChartContainer;