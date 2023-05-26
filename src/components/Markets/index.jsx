import { v4 as uuid } from 'uuid';
import { Box, Button } from '@mui/material';
import { MdOutlineSource } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { thunks as productsThunks } from '../../store/products/products.thunks';

const Markets = ({ markets }) => {
  const dispatch = useDispatch();

  const addParam = param => {
    dispatch(productsThunks.addParam(param));
  };

  const removeParam = () => {
    dispatch(productsThunks.removeParam());
  };

  return (
    <Box sx={{ position: 'absolute', top: 75, left: 10 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '180px' }}>
        <Button
          variant="contained"
          onClick={() => removeParam()}
          endIcon={<MdOutlineSource size={25} />}
          sx={{
            display: 'inline-flex',
            marginBottom: '5px',
            justifyContent: 'space-between',
          }}
        >
          Markets
        </Button>
        {markets.map(item => (
          <Box
            key={uuid()}
            sx={{ display: 'flex', flexDirection: 'column', maxWidth: '180px' }}
          >
            <Button
              variant="contained"
              onClick={() => addParam(item.market)}
              endIcon={<MdOutlineSource size={25} />}
              sx={{
                display: 'inline-flex',
                marginBottom: '5px',
                justifyContent: 'space-between',
              }}
            >
              {item.market}: {item.count}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Markets;
