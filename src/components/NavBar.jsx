import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Container, Drawer, List, ListItem, ListItemIcon, ListItemText, useMediaQuery, IconButton, useScrollTrigger, Slide } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function NavBar() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
  
      setIsNavBarVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]); // Include handleScroll in the dependency array
  

  const list = () => (
    <List sx={{ padding: '20px', color:'#fff' }}>
      <ListItem
  button
  component={NavLink}
  to="/"
  onClick={toggleMobileMenu}
  activeClassName="active-link"
>
  <ListItemIcon sx={{ color: '#EDDEA4' }}>
    <HomeIcon />
  </ListItemIcon>
  <ListItemText primary="Home" />
</ListItem>
<ListItem
  button
  component={NavLink}
  to="/about"
  onClick={toggleMobileMenu}
  activeClassName="active-link"
>
  <ListItemIcon sx={{ color: '#EDDEA4' }}>
    <InfoIcon />
  </ListItemIcon>
  <ListItemText primary="About Me" />
</ListItem>
<ListItem
  button
  component={NavLink}
  to="/projects"
  onClick={toggleMobileMenu}
  activeClassName="active-link"
>
  <ListItemIcon sx={{ color: '#EDDEA4' }}>
    <WorkIcon />
  </ListItemIcon>
  <ListItemText primary="Portfolio" />
</ListItem>
<ListItem
  button
  component={NavLink}
  to="/skills"
  onClick={toggleMobileMenu}
  activeClassName="active-link"
>
  <ListItemIcon sx={{ color: '#EDDEA4' }}>
    <CodeIcon />
  </ListItemIcon>
  <ListItemText primary="Skills" />
</ListItem>
<ListItem
  button
  component={NavLink}
  to="/locations"
  onClick={toggleMobileMenu}
  activeClassName="active-link"
>
  <ListItemIcon sx={{ color: '#EDDEA4' }}>
    <ContactMailIcon />
  </ListItemIcon>
  <ListItemText primary="Contact" />
</ListItem>

    </List>
  );

  return (
    <>
      <ScrollToTop />
      {isMobile && !isMobileMenuOpen && (
        <HideOnScroll>
          <IconButton
            color="inherit"
            onClick={toggleMobileMenu}
            sx={{ position: 'fixed', top: '20px', left: '20px', zIndex: 9999, color:'#fff' }}
          >
            <MenuIcon />
          </IconButton>
        </HideOnScroll>
      )}
      <Drawer
  anchor="left"
  open={!isMobile || isMobileMenuOpen}
  onClose={!isMobile ? undefined : toggleMobileMenu}
  variant={isMobile ? 'temporary' : 'permanent'}
  sx={{
    width: '240px',
    position: 'absolute', // Position the drawer absolutely
    zIndex: 10000, // Ensure it appears above the content
    '& .MuiDrawer-paper': {
      backgroundColor: 'rgba(255, 255, 255, 0.125)',
      backdropFilter: 'blur(5px)',
    },
  }}
>
  {list()}
</Drawer>

      <Container maxWidth="lg" sx={{ marginLeft: isNavBarVisible ? (isMobileMenuOpen && isMobile ? '240px' : '0') : '-80px', transition: 'transform 0.3s ease' }}>
        
      </Container>
    </>
  );
}

export default NavBar;
