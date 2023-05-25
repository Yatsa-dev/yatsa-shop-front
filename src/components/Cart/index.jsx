import { Box } from '@mui/system';
import { Button, Grid, Typography } from '@mui/material';
import { MdPayment, MdShop } from 'react-icons/md';
import CartItem from '../CartItem/index';
import { useNavigate } from 'react-router-dom';

const Cart = ({ data }) => {
  const navigate = useNavigate();
  const moveToProducts = () => {
    navigate('/');
  };

  const costProducts = data => {
    let result = [];
    data.forEach(el => result.push(el.price));
    return result.reduce((a, b) => a + b, 0);
  };
  return (
    <Box>
      <Button
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}
        variant="contained"
        onClick={moveToProducts}
        startIcon={<MdShop size={30} />}
      >
        Products
      </Button>
      <Button
        sx={{
          position: 'absolute',
          top: 10,
          right: 180,
        }}
        variant="contained"
        startIcon={<MdPayment size={30} />}
      >
        Buy
      </Button>
      <Grid
        container
        columnSpacing={2}
        sx={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          alignContent: 'center',
        }}
      >
        {data.map(item => CartItem(item))}
      </Grid>
      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#0A1E29',
          padding: '15px',
          marginRight: '0px',
          display: 'inline-block',
          position: 'absolute',
          top: 10,
          left: 180,
        }}
      >
        Cost your products:{costProducts(data)}
      </Typography>
    </Box>
  );
};

export default Cart;
