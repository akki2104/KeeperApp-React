import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
const Imanote = (props) => {

    const del=()=>{
        props.pass(props.index)
    }



    return (
        <>
            <Grid className='note' lg={3} style={{
                boxShadow: "5px 10px 7px 2px #DFA67B"
            }}>
                <h2>{props.title}</h2>
                <br />
                <p>{props.content}</p>
                <Button style={{
                    marginLeft: "80%"
                }} 
                variant="outlined"
                onClick={del}
                ><DeleteIcon /></Button>

            </Grid>
        </>
    )
}

export default Imanote