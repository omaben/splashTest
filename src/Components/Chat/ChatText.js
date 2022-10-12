import React from 'react';
import { Container,  Typography } from '@mui/material';

function ChatText(props) {
  return (
    <Container className='chat-msgs' sx={{padding:'10px', background:' #180C3C',borderRadius: '16px', height:'210px', marginBottom: '15px'}}>
        { props.dataCHat.map((item, index) => (
          <Typography key={index}  variant="p" component="p" className={item.type === 0 ?'normal-msg' : 'notice-msg'}>
            {item.name} {item.type === 0 ?':' : ''}
            <Typography variant="span" component="span"> {item.msg}</Typography>
          </Typography>
        ))}
    </Container>
  );
}

export default ChatText;
