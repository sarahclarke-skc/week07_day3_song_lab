import React from 'react';

const IndivSong = ({ song }) => {
    
    const songStyle = {
        margin: '4rem 0',
        color: 'green',
        cursor: 'pointer'
    }

    return (
        <div style={songStyle}>
            <h3>{song['im:name'].label}</h3>
            <h3>{song['im:artist'].label}</h3>
        </div>
    )
}

export default IndivSong;