import React from 'react';

const IndivSong = ({ song, rank }) => {
    
    const songStyle = {
        margin: '4rem 0',
        color: 'green',
        cursor: 'pointer'
    }

    return (
        <div style={songStyle}>
            <h3>{rank + 1}</h3>
            <img src={song['im:image'][2].label} />
            <h3>{song['im:name'].label}</h3>
            <h3>{song['im:artist'].label}</h3>
        </div>
    )
}

export default IndivSong;