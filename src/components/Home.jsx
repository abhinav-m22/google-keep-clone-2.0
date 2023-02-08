import SwipeDrawer from "./SwipeDrawer";
import Notes from "./notes/Notes";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box style={{ display: 'flex', width: '100%' }}>
      <SwipeDrawer />
      <Notes />
    </Box>
  )
}

export default Home;