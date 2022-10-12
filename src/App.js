import './App.css';
import { Grid, Container } from '@mui/material';
import Ranking from './Components/Ranking/index'
import Players from './Components/Players/index'
import Game from './Components/Game/index'
import Chat from './Components/Chat/index'
function App() {
  return (
    <Container maxWidth="lg" sx={{padding:'10px'}}>
      <Grid container spacing={0}>
        <Grid item xs={12} className='animation-game'>
          <Game />
        </Grid>
        <Grid item md={3} xs={12}>
            <Ranking />
        </Grid>
        <Grid item md={6} xs={12}>
          <Chat />
        </Grid>
        <Grid item md={3} xs={12}>
          <Players />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
