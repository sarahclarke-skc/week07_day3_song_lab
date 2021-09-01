import React from 'react';

const GenreOption = ({setGenre}) => {
    
    const handleChange = (e) => {
        const chosenGenre = e.target.value;
        setGenre(chosenGenre)
    }

    return (
        <>
            <select onChange={handleChange}>
                <option value="top20" key='1' selected>Top 20</option>
                <option value="rock" key='2'>Top 20: Rock</option>
                <option value="dance" key='3'>Top 20: Dance</option>
                <option value="country" key='4'>Top 20: Country</option>
                <option value="baby" key='5'>Top 20: Baby</option>
            </select>
        </>
    )
}

export default GenreOption;