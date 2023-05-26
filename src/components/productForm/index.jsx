import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
  FormControl,
  FormHelperText,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { thunks } from '../../store/products/products.thunks';
import { style } from './index.style';
import validationSchema from './index.config';
import { useNavigate } from 'react-router-dom';
import { MdShop } from 'react-icons/md';
import { MdCloudUpload } from 'react-icons/md';

const CreateProductForm = () => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const moveToProducts = () => {
    navigate('/');
  };

  const onFile = e => {
    const [file] = e.target.files;
    setImage(file);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      market: '',
      price: '',
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      const dataFile = new FormData();
      dataFile.append('file', image);
      dataFile.append('name', values.name);
      dataFile.append('price', values.price);
      dataFile.append('description', values.description);
      dataFile.append('market', values.market);

      await dispatch(thunks.create(dataFile, navigate));
    },
  });

  return (
    <>
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
              id="name"
              sx={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#0A1E29',
                pb: '8px',
                m: 0,
              }}
            >
              Name
            </FormHelperText>
            <TextField
              sx={style.name}
              fullWidth
              id="name"
              name="name"
              placeholder="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </FormControl>
          <FormControl
            sx={{ my: { xs: 2, md: 1, lg: 2 } }}
            fullWidth
            variant="outlined"
          >
            <FormHelperText
              id="market"
              sx={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#0A1E29',
                pb: '8px',
                m: 0,
              }}
            >
              Market
            </FormHelperText>
            <TextField
              sx={style.market}
              fullWidth
              id="market"
              name="market"
              placeholder="market"
              value={formik.values.market}
              onChange={formik.handleChange}
              error={formik.touched.market && Boolean(formik.errors.market)}
              helperText={formik.touched.market && formik.errors.market}
            />
          </FormControl>
          <FormControl
            sx={{ my: { xs: 2, md: 1, lg: 2 } }}
            fullWidth
            variant="outlined"
          >
            <FormHelperText
              id="price"
              sx={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#0A1E29',
                pb: '8px',
                m: 0,
              }}
            >
              Price
            </FormHelperText>
            <TextField
              sx={style.price}
              fullWidth
              id="price"
              name="price"
              placeholder="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
            />
          </FormControl>
          <FormControl
            sx={{ my: { xs: 2, md: 1, lg: 2 } }}
            fullWidth
            variant="outlined"
          >
            <FormHelperText
              id="description"
              sx={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#0A1E29',
                pb: '8px',
                m: 0,
              }}
            >
              Description
            </FormHelperText>
            <TextField
              fullWidth
              sx={style.description}
              id="description"
              name="description"
              placeholder="description"
              type={'text'}
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
          </FormControl>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#0A1E29',
              padding: '15px',
              marginRight: '0px',
              display: 'inline-block',
            }}
          >
            Upload photo for product
          </Typography>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            sx={{
              marginBottom: '5px',
              marginLeft: '150px',
              backgroundColor: '#0D76D7',
              color: '#FFF',
              '&:hover': {
                backgroundColor: '#2D95F5',
                boxShadow: 'none',
              },
            }}
          >
            <input onChange={onFile} hidden type="file" />

            {<MdCloudUpload size={30} />}
          </IconButton>
          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{
              fontFamily: 'Poppins',
              textTransform: 'capitalize',
              fontSize: '20px',
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
            Create
          </Button>
        </form>
      </Box>
    </>
  );
};

export default CreateProductForm;
