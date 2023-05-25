import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Backdrop, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import './App.css';
import Login from './components/Login';
import { tokenSelector } from './store/auth/auth.selectors';
import { errorSelector, loadingSelector } from './store/base/base.selectors';
import Products from './components/Products';
import Signup from './components/Signup';
import NotFound from './components/PageNotFound';
import CreateProductForm from './components/ProductForm';
import { thunks as productsThunsk } from './store/products/products.thunks';
import { thunks as usersThunks } from './store/user/user.thunks';
import {
  cartSelector,
  productsSelector,
} from './store/products/products.selectors';
import { roleSelector } from './store/user/user.selectors';
import Cart from './components/Cart';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const products = useSelector(productsSelector);
  const role = useSelector(roleSelector);
  const carts = useSelector(cartSelector);

  useEffect(() => {
    if (token) {
      dispatch(productsThunsk.find());
      dispatch(usersThunks.profile());
    }
  }, [dispatch, token]);

  return (
    <div className="App">
      <Box
        sx={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 50,
        }}
      >
        {error.map((e, index) => (
          <Alert severity="error" key={index}>
            {e}
          </Alert>
        ))}
      </Box>
      <Backdrop
        sx={{
          color: '#fff',
          height: '100%',
          zIndex: theme => theme.zIndex.drawer + 1,
        }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Routes>
        {token ? (
          <>
            <Route
              path="/"
              element={<Products data={products} role={role} />}
            ></Route>
            <Route path="/create" element={<CreateProductForm />}></Route>
            <Route
              path="/cart"
              element={<Cart data={carts} role={role} />}
            ></Route>
            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
