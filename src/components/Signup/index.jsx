import React from 'react';
import { useFormik } from 'formik';
import { FormControl, FormHelperText, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { thunks } from '../../store/auth/auth.thunks';
import validationSchema from './index.config';
import { style } from './index.style';
import { useNavigate } from 'react-router';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      await dispatch(thunks.signup(values, navigate));
    },
  });

  return (
    <Box sx={{ height: '100%' }}>
      <form onSubmit={formik.handleSubmit}>
        <FormControl
          sx={{ my: { xs: 2, md: 1, lg: 2 } }}
          fullWidth
          variant="outlined"
        >
          <FormHelperText
            id="email"
            sx={{
              fontSize: '12px',
              fontWeight: 600,
              color: '#0A1E29',
              pb: '8px',
              m: 0,
            }}
          >
            Email
          </FormHelperText>
          <TextField
            sx={style.email}
            fullWidth
            id="email"
            name="email"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </FormControl>
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
            type={'text'}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
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
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Signup;
