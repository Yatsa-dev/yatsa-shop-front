import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string('Enter name for product').required('Name is required'),
  market: yup.string('Enter market for product').required('Market is required'),
  price: yup.number('Enter price for product').required('Price is required'),
  description: yup
    .string('Enter description for product')
    .required('Description is required'),
});

export default validationSchema;
