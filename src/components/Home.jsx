import SwipeDrawer from "./SwipeDrawer";
import Notes from "./notes/Notes";
import { Box } from "@mui/material";
import DeleteNotes from "./delete/DeleteNotes";
import Archives from "./archive/Archives";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const Home = () => {
  return (
    <Box style={{ display: 'flex', width: '100%' }}>
      <Router>
        <SwipeDrawer />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archive" element={<Archives />} />
          <Route path="/delete" element={<DeleteNotes />} />
        </Routes>
      </Router>

    </Box>
  )
}

export default Home;
