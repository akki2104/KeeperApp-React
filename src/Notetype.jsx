import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddReactionIcon from '@mui/icons-material/AddReaction';
const Note = (props) => {
    const [expand,setExpand]= useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const inputEvent = (event) => {

        const { name, value } = event.target   //array destruction

        setNote((oldValue) => {
            return { ...oldValue, [name]: value }  //oldvalue+title and its value+content and its value
        })
    }
    const clicked = () => {
        props.forValue(note);
        setNote({
            title :"",
            content :""
        })
    }

    const expandIt=()=>{
        setExpand(true);
    }
    const compressIt=()=>{
        setExpand(false);
    }

    return (
        <>
            <Box onClick={expandIt} onDoubleClick={compressIt} sx={{
                backgroundColor: "white",
                margin: "auto",
                marginTop: "2%",
                width: "30%",
                borderRadius: "10px",
                boxShadow: "5px 10px 7px 2px #9f9f9e",
                paddingLeft: "2%",
                paddingTop: "1%",
                paddingBottom:"1%",
                display: "flex",
                flexDirection: "column"
            }}>
                {expand?<TextField
                    style={{
                        marginBottom: "5%",
                        width: "30%"
                    }}
                    value={note.title}
                    name="title"
                    onChange={inputEvent}
                    label="Title"
                    type="text"
                    autoComplete="none"
                    variant="standard"
                />:null}
                <TextField style={{
                    width: "70%"
                }}
                    value={note.content}
                    name="content"
                    onChange={inputEvent}
                    id="outlined-basic"
                    label="Type a note..."
                    variant="outlined" />
                {expand?<Button style={{
                    position: "absolute",
                    left: "59%",
                    top: "25%",
                    borderRadius: "100px"
                }}
                    variant="contained"
                    onClick={clicked}
                ><AddReactionIcon /></Button>:null}


            </Box>
        </>
    )
}

export default Note