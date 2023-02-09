import { Box, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import DeleteNote from './DeleteNote';

import { DataContext } from "../../context/DataProvider";
import { useContext } from "react";

const DrawerHeader = styled('div')(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {

  const { deleteNotes } = useContext(DataContext);

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ p: 3, width: '100%' }}>
        <DrawerHeader />
            <Grid container style={{marginTop: 16}}>
              {
                deleteNotes.map(note => (
                  <Grid item>
                    <DeleteNote note={note} />
                  </Grid>

                ))
              }
            </Grid>
      </Box>
    </Box>
  )
}

export default DeleteNotes;