import './navbar.scss'

import { Button, Stack } from '@mui/material'

const Navbar = () => {
  return(
    <div className='navbar'>
      <span className='logo'><a href='#'>REDITEK</a></span>
      <Stack direction='row' spacing={1}>
          <Button color='black' variant="text">HOME</Button>
          <Button color='black' variant="text">SHOP</Button>
          <Button color='black' variant="text">CART</Button>
      </Stack>
    </div>
  )
}
export default Navbar;