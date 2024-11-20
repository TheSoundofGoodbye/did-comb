import React from 'react';


function Relic(props) {
    return (
        <div className="relic">
            <h3>{props.name}</h3>
            <p>{props.index}</p>
        </div>
    )
}

export default Relic;