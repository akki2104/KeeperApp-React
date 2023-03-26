import React from 'react'
import Imanote from './Imanote';
const Noteshow = (props) => {

    const toPass = () => {
        props.toDel(props.index);
    }

    return (
        <>
            <Imanote index={props.index} title={props.title} content={props.content} pass={toPass} />
        </>
    )
}

export default Noteshow;