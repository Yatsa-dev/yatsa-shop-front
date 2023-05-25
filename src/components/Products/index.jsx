import Item from '../ProductItem';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MdOutlineShoppingCart, MdCreate, MdLogout } from 'react-icons/md';
import { thunks as authThunks } from '../../store/auth/auth.thunks';
import { useDispatch } from 'react-redux';

const Products = ({ data, role }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moveToCart = () => {
    navigate('/cart');
  };
  const moveToCreate = () => {
    navigate('/create');
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    dispatch(authThunks.logout());
  };

  return (
    <>
      {role === 'admin' ? (
        <Button
          sx={{
            position: 'absolute',
            top: 10,
            right: 150,
          }}
          variant="contained"
          onClick={moveToCreate}
          startIcon={<MdCreate size={30} />}
        >
          Create
        </Button>
      ) : null}

      <Button
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}
        variant="contained"
        onClick={moveToCart}
        startIcon={<MdOutlineShoppingCart size={30} />}
      >
        Cart
      </Button>
      <Button
        sx={{
          position: 'absolute',
          top: 10,
          left: 10,
        }}
        variant="contained"
        onClick={clearLocalStorage}
        startIcon={<MdLogout size={30} />}
      >
        Logout
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
        {data.map(item => Item(item, role))}
      </Grid>
    </>
  );
};

export default Products;
