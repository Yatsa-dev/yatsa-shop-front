import Item from '../ProductItem';
import { Box, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MdOutlineShoppingCart, MdCreate, MdLogout } from 'react-icons/md';
import { thunks as authThunks } from '../../store/auth/auth.thunks';
import { useDispatch } from 'react-redux';
import Markets from '../Markets/index';

const Products = ({ data, role, markets }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moveToCart = () => {
    navigate('/cart');
  };
  const moveToCreate = () => {
    navigate('/create');
  };

  const logout = () => {
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
        onClick={logout}
        startIcon={<MdLogout size={30} />}
      >
        Logout
      </Button>
      <Box
        sx={{
          display: 'flex',
          maxWidth: '900px',
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {data.map(item => Item(item, role))}
      </Box>
      <Markets markets={markets} />
    </>
  );
};

export default Products;
