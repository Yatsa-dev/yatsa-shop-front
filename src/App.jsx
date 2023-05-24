import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Backdrop, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import Login from './components/Login';
import { tokenSelector } from './store/auth/auth.selectors';
import { errorSelector, loadingSelector } from './store/base/base.selectors';
import Products from './components/Products';
import Signup from './components/Signup';
import Bucket from './components/Bucket';
import NotFound from './components/PageNotFound';
import CreateProductForm from './components/productForm';
import { thunks as productThunsk } from './store/products/products.thunks';
import { productsSelector } from './store/products/products.selectors';
export const ColorModeContext = React.createContext({ App: () => {} });

const App = () => {
  const token = useSelector(tokenSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const products = useSelector(productsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(productThunsk.find());
    }
  }, [token]);

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
            <Route path="/" element={<Products data={products} />}></Route>
            <Route path="/create" element={<CreateProductForm />}></Route>
            <Route path="/bucket" element={<Bucket />}></Route>
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
