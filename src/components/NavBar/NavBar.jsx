import React, {useState} from 'react'
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import useStyles from './styles';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)'); //Checks if the screen is larger than 600Px or not
  const theme = useTheme();
  const isAuthenticated = true;

  return (
    <>
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        { isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            style={{ outline: 'none' }}
            onClick={() => {}}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
        )}
        <IconButton color="inherit" sx={{ ml:1}} onClick={() => {}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && 'Search ...'}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/:id`}
                className={classes.linkButton}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width:30, height: 30 }} 
                  alt="Profile"
                  src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Favatar-icon-placeholder-facebook-1577909%2F&psig=AOvVaw3M1NdJMh3CuLtReHpaEk-K&ust=1687349958618000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCICbnuPq0f8CFQAAAAAdAAAAABAE"}                  
                  />
              </Button>
            )}
          </div>
          {isMobile && 'Search ...'}
      </Toolbar>

    </AppBar>
    <div>
      <nav className={classes.drawer}>
              {isMobile ? (
                <Drawer 
                variant='temporary'
                anchor='right'
                open={mobileOpen}
                className={classes.drawerBackground}
                classes={{ paper: classes.drawerPaper}}
                ModalProps={{ keepMounted: true}}
                >
                  <Sidebar setMobileOpen={setMobileOpen} />
                </Drawer>
              ) : (
                <Drawer />
              )}
      </nav>
    </div>
    </>
  )
}

export default NavBar;
