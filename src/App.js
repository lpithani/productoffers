import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 250
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

function App() {
  const classes = useStyles();
  const [product, setProduct] = useState(
    {
      id:1,
      name: 'PRODUCT 01',
      rate: 100
    });
  const [offers, setOffers] = useState([
    {
      id:1,
      name: 'offer1',
      checked: true
    },{
      id:2,
      name: 'offer2',
      checked: false
    },{
      id:3,
      name: 'offer3',
      checked: false
    }]);
  function handleCheck(event) {
    // console.log(event.target.name,':',event.target.checked);
    setOffers(offers.map(ele=>{
      return {
        ...ele,
        checked: event.target.name === ele.name && event.target.checked ? true : false
      }
    }))
  }
  function buttonClicked(event){
    if(offers.length){
      console.log("Button:", {
        product,
        offers,
      });
      setOffers([])
    }
    else
      setOffers([
      {
        id:1,
        name: 'offer1',
        checked: true
      },{
        id:2,
        name: 'offer2',
        checked: false
      },{
        id:3,
        name: 'offer3',
        checked: false
      }])
  }
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="logo512.png"
        title="Product and Offers"
      />
      <div className={classes.details}>
      <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {product.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Rate : {product.rate}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Add Production
          </Typography>
          {offers.map(ele=>(
            <FormControlLabel control={
                <Checkbox
                  name={ele.name}
                  onChange={handleCheck}
                  checked={ele.checked}
                />
              }
              key={ele.id}
              label={ele.name}
            />
          ))}
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={buttonClicked}>
            Add to Cart
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}


export default App;