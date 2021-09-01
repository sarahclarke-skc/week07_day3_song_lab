import React from 'react';
import IndivSong from './IndivSong';

const SongList = ({ songs }) => {

    const songItems = songs.map((song, index) => {
        return <IndivSong song={song} key={index} />
    })

    return (
        <>
            <h2>Songlists</h2>
            <ul>
                {songItems}
            </ul>
        </>
    )
}

export default SongList;