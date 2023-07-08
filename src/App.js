import './App.css';
import Header from './component/header';
import Right from './component/right';
import Left from './component/left';
import Grid from '@mui/material/Grid';



function App() {
  return (
    <>
        <Header/>
    <div className='d-flex'>
      <Grid container spacing={2}>
         <Grid item xs={12} md={6}><Left/></Grid>
          <Grid item xs={12} md={6}> <Right/></Grid>
      </Grid>
    </div>

    </>

  );
}

export default App;
