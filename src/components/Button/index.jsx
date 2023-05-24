import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MButton from './index.style';

const Button = ({
  type,
  component,
  icon,
  onClick,
  children,
  sx = {},
  style = {},
}) => (
  <MButton
    type={type}
    fullWidth
    variant="outlined"
    component={component}
    endIcon={icon ? <ArrowForwardIosIcon sx={{ fontSize: '1.7rem' }} /> : null}
    onClick={onClick}
    sx={{
      height: '100%',
      fontSize: { xs: '12px', md: '14px' },
      ...sx,
      ...style,
    }}
  >
    {children}
  </MButton>
);

export default Button;
