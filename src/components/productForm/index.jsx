import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
  FormControl,
  FormHelperText,
  IconButton,
  TextField,
} from '@mui/material';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { thunks } from '../../store/products/products.thunks';
import { style } from './index.style';
import { SvgPhoto } from '../../resources/svgs/index';
import validationSchema from './index.config';

const CreateProductForm = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);

  const onFile = e => {
    const [file] = e.target.files;
    setImage(file);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
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

      await dispatch(thunks.create(dataFile));
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
            helperText={formik.touched.description && formik.errors.description}
          />
        </FormControl>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          sx={{
            bgcolor: '#1649FF',
            border: 2,
            borderColor: 'background.default',
            position: 'absolute',
            width: { xs: '30px', md: '42px', lg: '55px' },
            height: { xs: '30px', md: '42px', lg: '55px' },
            bottom: 10,
            right: 10,
            '&:hover': {
              bgcolor: '#1611FF',
            },
          }}
        >
          <input onChange={onFile} hidden type="file" />
          <SvgPhoto color="#FFF" />
        </IconButton>
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
          Create
        </Button>
      </form>
    </Box>
  );
};

export default CreateProductForm;
