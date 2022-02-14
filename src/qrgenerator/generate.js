import React, {useState} from 'react';
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button} from '@material-ui/core';
import QRCode from 'qrcode';


function App() { 
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const classes = useStyles();


  const generateQrCode = async () => {
    try {
          const response = await QRCode.toDataURL(text);
          setImageUrl(response);
    }catch (error) {
      console.log(error);
    }
  }
  return (
    <Container className={classes.conatiner}>
          <Card>
              <h2 className={classes.title}>Generate Qr Code</h2>
              <CardContent className={classes.cardContent}>
                          <TextField label="Enter Text Here" onChange={(e) => setText(e.target.value)}/>
                          <Button className={classes.btn} variant="contained" 
                            color="primary" onClick={() => generateQrCode()}>Generate</Button>
                            <br/>
                            <br/>
                            <br/>
                            {imageUrl ? (
                              <a href={imageUrl} download>
                                  <img src={imageUrl} alt="img"/>
                              </a>) : null}
              </CardContent>
          </Card>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
    conatiner: {
      marginTop: 10,
      alignItems: 'center'
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      alignItems:  'center',
      background: '#3f51b5',
      color: '#fff',
      padding: 20
    },
    cardContent:{
      paddingLeft: '40%'
    },
    btn : {
      marginTop: 10,
      marginBottom: 20
    }
}));
export default App;