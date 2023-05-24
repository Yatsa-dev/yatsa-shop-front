import { Box } from '@mui/system';
import Item from '../productItem';

const Products = ({ data }) => {
  return <>{data.map(item => Item(item))}</>;
};

export default Products;
