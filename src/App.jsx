import React, { useState } from 'react'
import Header from './Header'
import Notetype from "./Notetype"
import Noteshow from "./Noteshow"

import Grid from '@mui/material/Grid';




const App = () => {
  const [noteArray, setNoteArray] = useState([]);

  const takeValue = (note) => {
    console.log(note);
    if (note.content !== "") {
      setNoteArray((oldvalue) => {
        return [...oldvalue, note];
      })
    }
  }
  const delThis = (id) => {
    setNoteArray(noteArray.filter((currData, indx) => {
      return indx !== id;
    }))
  }

  return (
    <>
      <Header />
      <Notetype forValue={takeValue} />
      <Grid container marginTop="5%" style={{
        display: "flex",
        justifyContent: "flex-start",

      }} >
        {noteArray.map((currEle, index) => {
          return (
            <Noteshow
              key={index}
              index={index}
              title={currEle.title}
              content={currEle.content}
              toDel={delThis}
            />
          )

        })}
      </Grid>

    </>
  )
}

export default App;