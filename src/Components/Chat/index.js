import React from 'react';
import {useRef} from 'react';
import { TextField  ,Container,  Button, ListItemButton , ListItemText, ListSubheader, Collapse } from '@mui/material';
import ChatText from './ChatText'
import './index.css';

function Ranking() {
  var keyData = 0
  const [dataCHat, setdataCHat] = React.useState([
    {
      id:1,
      name: 'Skylar Baptosta',
      msg: 'how you doing mat',
      type: 0
    },
    {
      id:2,
      name: 'Skylar Baptosta 1',
      msg: 'how you doing mat 1',
      type: 0
    },
    {
      id:3,
      name: 'Nazanin',
      msg: 'has joind the game',
      type: 1
    }
  ]);
  const inputRef = useRef(null);
    function submitNewMsg() {
      const item = {
        id:dataCHat.length + 1,
        name: 'Me',
        msg: inputRef.current.value,
        type: 0
      }
      setdataCHat([...dataCHat, item])
      console.log(dataCHat, item)
    }
  return (
    <Container sx={{padding:'0px'}}>
      <ChatText dataCHat={dataCHat}/>
      <TextField
        inputRef={inputRef}
        hiddenLabel
        className='text-input'
        id="filled-hidden-label-small"
        defaultValue=''
        variant="filled"
        size="small"
        sx={{width: 'calc(100% - 120px)', marginRight: '10px', background: '#180C3C', borderRadius: '4px',color: '#FFFFFF'}}
      />
      <Button variant="contained" onClick={submitNewMsg} sx={{textTransform:'initial',background: 'linear-gradient(180deg, #995AFF -7.69%, rgba(108, 58, 252, 0.91) 127.88%)',borderRadius: '4px',color: '#FFFAFA',border: '1px solid #542D9F',textShadow: '0px 0px 1px rgba(0, 0, 0, 0.25), 0px -2px 35px rgba(0, 0, 0, 0.45)',fontWeight: '800',fontSize: '18px',lineHeight: '20px'}}>Send</Button>
    </Container>
  );
}

export default Ranking;
