import React from 'react';

// const SimplerComponent = props => {
    // return(
        // <div onClick={props.handleClick}>I am just happy</div>
    // )   
// }

const SimplerComponent = ({ handleClick }) => <div onClick={handleClick}>I am just happy.</div> //or you can write it this way as well

export default SimplerComponent
