import { Typography, Box, styled } from '@mui/material';
import { ArchiveOutlined as ArchiveIcon } from '@mui/icons-material';

const Archive = styled(ArchiveIcon)`
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

const EmptyArchiveNotes = () => {
  return (
    <Container>
      <Archive style={{ color: '#202124', opacity: 0.1, marginBottom: 20 }} />
      <Text style={{ color: '#5f6368' }}>Your archived notes appear here</Text>
    </Container>
  )
}

export default EmptyArchiveNotes;