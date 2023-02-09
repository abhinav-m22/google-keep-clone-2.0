import { Typography, Box, styled } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const DeleteIcon = styled(DeleteOutlineIcon)`
    font-size: 120px;
    color: #F5F5F5;
    margin-top: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    padding-top: 100px;
`

const Text = styled(Typography)`
    color: #80868b;
    font-size: 22px;
`

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled(Typography)`
  color: #202124;
  justify-content: center;
  padding-top: 24px;
  padding-bottom: 8px;
  font-size: 17px;
  font-family: "Roboto",arial,sans-serif;
  font-style: italic;
`

const EmptyDeleteNotes = () => {
  return (
    <Container>
      <Header>Notes in the Recycle Bin are deleted after 7 days.</Header>
      <DeleteIcon style={{ color: '#202124', opacity: 0.1, marginBottom: 20 }} />
      <Text style={{ color: '#5f6368' }}>No notes in Recycle Bin</Text>
    </Container>
  )
}

export default EmptyDeleteNotes;