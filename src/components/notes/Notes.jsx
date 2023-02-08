import { Box, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Form from "./Form";
import Note from "./Note";

import { DataContext } from "../../context/DataProvider";
import { useContext } from "react";
import EmptyNotes from "./EmptyNotes";

const DrawerHeader = styled('div')(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Notes = () => {

  const { notes } = useContext(DataContext);

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ p: 3, width: '100%' }}>
        <DrawerHeader />
        <Form />
        {
          notes.length > 0 ?
            <Grid container>
              {
                notes.map(note => (
                  <Grid item>
                    <Note note={note} />
                  </Grid>

                ))
              }
            </Grid>
            : <EmptyNotes />
        }
      </Box>
    </Box>
  )
}

export default Notes;