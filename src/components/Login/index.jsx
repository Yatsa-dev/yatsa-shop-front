import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Button from '@mui/material/Button';
import { useGoogleLogin } from '@react-oauth/google';
import { thunks } from '../../store/auth/auth.thunks';
import validationSchema from './index.config';
import { style } from './index.style';
import { ReactComponent as GOOGLE } from '../../resources/svgs/google.svg';

const Login = () => {
  const [valuesShow, setValuesShow] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      await dispatch(thunks.login(values, navigate));
    },
  });

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      dispatch(thunks.googleCred(tokenResponse.code, navigate));
    },
    flow: 'auth-code',
  });

  const handleClickShowPassword = () => {
    setValuesShow(!valuesShow);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        height: '100%',
        textAlign: 'center',
        width: '400px',
        marginTop: '200px',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <FormControl
          sx={{ my: { xs: 2, md: 1, lg: 2 } }}
          fullWidth
          variant="outlined"
        >
          <FormHelperText
            id="username"
            sx={{
              fontSize: '12px',
              fontWeight: 600,
              color: '#0A1E29',
              pb: '8px',
              m: 0,
            }}
          >
            Username
          </FormHelperText>
          <TextField
            sx={style.username}
            fullWidth
            id="username"
            name="username"
            placeholder="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
        </FormControl>
        <FormControl
          sx={{ my: { xs: 2, md: 1, lg: 2 } }}
          fullWidth
          variant="outlined"
        >
          <FormHelperText
            id="password"
            sx={{
              fontSize: '12px',
              fontWeight: 600,
              color: '#0A1E29',
              pb: '8px',
              m: 0,
            }}
          >
            Password
          </FormHelperText>
          <TextField
            fullWidth
            sx={style.password}
            id="password"
            name="password"
            placeholder="password"
            type={valuesShow ? 'text' : 'password'}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {valuesShow ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{
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
          Log In
        </Button>
      </form>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button
          variant="contained"
          onClick={() => login()}
          sx={{
            textTransform: 'inherit',
            fontFamily: 'Poppins',
            marginTop: '20px',
            padding: '9.9px',
            backgroundColor: '#EA4335',
            borderRadius: '5px',
            fontSize: '15px',
            fontWeight: 500,
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: 'rgba(234,67,53,0.8)',
              boxShadow: 'none',
            },
          }}
        >
          <GOOGLE style={{ marginRight: '20px' }} />
          Log In with Google
        </Button>
      </Box>

      <Box sx={{ pt: { xs: '20px', md: '20px', lg: '50px' } }}>
        <Box sx={{ pb: '15px' }}>
          <Typography
            sx={{ fontSize: '14px', fontWeight: '400', color: '#515E65' }}
          >
            Don’t have an account?
          </Typography>
        </Box>
        <Box>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Typography sx={{ fontSize: '16px', color: '#0D76D7' }}>
              Create account
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
