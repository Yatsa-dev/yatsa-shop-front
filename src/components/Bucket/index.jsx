import { Box } from '@mui/system';
import Button from '../Button';

const Bucket = () => {
  return (
    <Box sx={{}}>
      <Button
        sx={{
          bgcolor: 'rgba(6, 25, 35, 0.1)',
          p: '5px',
          border: '1px solid #e6e8e9',
          fontSize: '12px',
          whiteSpace: 'nowrap',
          color: 'text.primary',
        }}
      >
        Bucket
      </Button>
    </Box>
  );
};

export default Bucket;
