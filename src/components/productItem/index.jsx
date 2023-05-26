import { Box, Button, Typography } from '@mui/material';
import { thunks as productsThunks } from '../../store/products/products.thunks';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

const Item = (item, role) => {
  const dispatch = useDispatch();

  const add = productId => {
    dispatch(productsThunks.add(productId));
  };

  const remove = productId => {
    dispatch(productsThunks.remove(productId));
  };

  return (
    <Box
      key={uuid()}
      sx={{
        alignContent: 'center',
        maxWidth: '180px',
        marginTop: '60px',
        marginRight: '10px',
      }}
    >
      <img src={item.file} alt={item.name} width={320} />
      <Typography sx={{ fontSize: '18px', fontWeight: '400', color: '#000' }}>
        {item.name}
      </Typography>
      <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#000' }}>
        {item.price}
      </Typography>
      <Typography
        sx={{ fontSize: '15px', fontWeight: '400', color: '#515E65' }}
      >
        {item.description}
      </Typography>

      <Button
        variant="contained"
        onClick={() => add(item.id)}
        sx={{
          marginRight: '10px',
          fontFamily: 'Poppins',
          textTransform: 'capitalize',
          fontSize: '15px',
          fontWeight: '500',
          height: '46px',
          backgroundColor: '#0D76D7',
          boxShadow: 'none',
          borderRadius: '5px',
          '&:hover': {
            backgroundColor: '#2D95F5',
            boxShadow: 'none',
          },
        }}
      >
        Add
      </Button>
      {role === 'admin' ? (
        <Button
          variant="contained"
          onClick={() => remove(item.id)}
          sx={{
            fontFamily: 'Poppins',
            textTransform: 'capitalize',
            fontSize: '15px',
            fontWeight: '500',
            height: '46px',
            backgroundColor: '#EA4335',
            boxShadow: 'none',
            borderRadius: '5px',
            '&:hover': {
              backgroundColor: 'rgba(234,67,53,0.8)',
              boxShadow: 'none',
            },
          }}
        >
          Delete
        </Button>
      ) : null}
    </Box>
  );
};
export default Item;
