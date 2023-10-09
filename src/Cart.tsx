import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 30,
      top: 20,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

function Cart() {
  return (
    <IconButton aria-label="cart">
        <StyledBadge badgeContent={1} color="secondary">
        <ShoppingCartIcon />
        </StyledBadge>
    </IconButton>
    )
}

export default Cart