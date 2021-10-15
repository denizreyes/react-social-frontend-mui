import React, {useState} from 'react'
import {
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Search as SearchIcon,
  Mail as MailIcon,
  Notifications as NotificacionsIcon,
  Clear as ClearIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';

const sxVagabond= {display: {xs:'none', sm: 'block'}};
const sxVgb= {display: {xs:'block', sm: 'none'}};
const sxToolbar= {display: 'flex', justifyContent: 'space-between'};
const sxAvatarWrapper= {marginLeft: '6px'};
const sxSearchBtn= {display: {xs: 'flex', sm: 'none'}};
const sxIcon= {color: '#FFF'};
const sxMenu= {
  overflow: 'visible',
  marginTop: {xs: '0px', sm: '4px'},
  marginLeft: -1,
  '&:before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    right: 14,
    width: 10,
    height: 10,
    bgcolor: 'background.paper',
    transform: 'translateY(-50%) rotate(45deg)',
    zIndex: 0,
  }
};
const Search= styled('div')(({theme, open}) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'rgba(255,255,255,0.15)',
  borderRadius: 4,
  width: '50%',
  padding: '6px 12px',
  transition: 'all 0.3s ease-in-out',
  [theme.breakpoints.down('sm')]:{
    display: open ? 'flex' : 'none'
  },
  '&:hover': {
    backgroundColor: '#1412123f',
  },
  '& .icon': {
    cursor: 'pointer'
  },
  '& .input': {
    color: '#FFF',
    marginLeft: theme.spacing(1),
    width: '100%'
  },
  '& .cancel': {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));

const MenuBox= styled('div')(({open}) => ({
  display: !open ? 'flex' : 'none',
  alignItems: 'center'
}));

const Navbar = () => {
  const [searchOpen, setSearchOpen]= useState(false);
  const [menuOpenElement, setMenuOpenElement]= useState(null);
  const menuOpen= Boolean(menuOpenElement);

  const handleMenuOpen= (event) => setMenuOpenElement(event.currentTarget);
  const handleMenuClose= () => setMenuOpenElement(null);
  
  const renderMenu = (
    <Menu
      anchorEl={menuOpenElement}
      open={menuOpen}
      onClick={handleMenuClose}
      onClose={handleMenuClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      PaperProps={{
        sx: sxMenu
      }}
    >
      <MenuItem>
        <ListItemIcon>
          <PersonIcon fontSize="small"/>
        </ListItemIcon>
        Perfil
      </MenuItem>
      <Divider/>
      <MenuItem>
        <ListItemIcon>
          <SettingsIcon fontSmall="small"/>          
        </ListItemIcon>
        Configurar
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <LogoutIcon fontSize="small"/>
        </ListItemIcon>
        Cerrar sesión
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar>
        <Toolbar sx={sxToolbar}>
          <Typography variant="h6" sx={sxVagabond}>
            VAGABOND
          </Typography>
          <Typography variant="h6" sx={sxVgb}>
          VAGABOND
          </Typography>
          <Search open={searchOpen}>
            <SearchIcon className="icon" />
            <InputBase className="input" placeholder="Buscar..." />
            <ClearIcon className="cancel" onClick={() => setSearchOpen(false)} />
          </Search>
          <MenuBox open={searchOpen}>
            <IconButton sx={sxSearchBtn} onClick={() => setSearchOpen(true)}>
              <SearchIcon sx={sxIcon}/>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <MailIcon sx={sxIcon}/>
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <NotificacionsIcon sx={sxIcon}/>
              </Badge>
            </IconButton>
            <IconButton sx={sxAvatarWrapper} onClick={handleMenuOpen}>
              <Avatar>A</Avatar>
            </IconButton>
          </MenuBox>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </>
  )
}

export default Navbar
