import React from 'react'

function MoreButton({getMoreMovie}) {
    return (
        <div className='moreButtonContainer'>
            <button onClick={getMoreMovie} >More</button>
        </div>
    )
}

export default MoreButton
