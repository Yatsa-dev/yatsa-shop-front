import { Button, styled } from '@mui/material';

const MButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.background.thirty,
  border: '1px solid',
  borderColor: theme.palette.background.dnd,
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: theme.palette.background.paper,
    color: '#fff',
  },
  '&:active': {
    backgroundColor: theme.palette.background.paper,
    color: '#fff',
  },
  textTransform: 'none',
}));

export default MButton;
