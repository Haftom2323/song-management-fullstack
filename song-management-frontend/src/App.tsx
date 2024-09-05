/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SongList from './components/SongList';
import Statistics from './components/Statistics';
import { Container, Sidebar, MainContent, SidebarButton, Text, LinkText, Drawer, DrawerContent, Overlay, CloseButton1 } from './components/StyledComponents';
import { Analytics } from '@emotion-icons/material/Analytics';
import { FileEarmarkMusic } from '@emotion-icons/bootstrap/FileEarmarkMusic';
import { useMediaQuery } from 'react-responsive';

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 769px)' });

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false); 

  return (
    <Router>
      <Container>
        {isMobile ? (
          <>
            <SidebarButton onClick={toggleDrawer} bg="#36454F" bghover="#edc" colorhover="black" padding="5px 5px">
              ☰ <Text fontSize={2} justifyContent="center">Song Management System</Text>
            </SidebarButton>
            {drawerOpen && (
              <>
                <Overlay onClick={closeDrawer} />  
                <Drawer>
                  <CloseButton1 onClick={closeDrawer}>&times;</CloseButton1>  
                  <DrawerContent>
                    <LinkText to="/" onClick={closeDrawer}>
                      <FileEarmarkMusic size="20" style={{ marginRight: '8px' }} />
                      Songs
                    </LinkText>
                    <LinkText to="/statistics" onClick={closeDrawer}>
                      <Analytics size="20" style={{ marginRight: '8px' }} />
                      Statistics
                    </LinkText>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </>
        ) : (
          <Sidebar>
            <LinkText to='/statistics'>
              <Text fontSize={3} fontWeight="bold" color="white" mb={4}>
                Dashboard
              </Text>
            </LinkText>
            <SidebarButton bg="#36454F" bghover="#edc" colorhover="black" as={Link} to="/">
              <FileEarmarkMusic size="20" style={{ marginRight: '8px' }} />
              Songs
            </SidebarButton>
            <SidebarButton bg="#36454F" bghover="#edc" colorhover="black" as={Link} to="/statistics">
              <Analytics size="20" style={{ marginRight: '8px' }} />
              Statistics
            </SidebarButton>
          </Sidebar>
        )}

        <MainContent>
          <Routes>
            <Route path="/" element={<SongList />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
        </MainContent>
      </Container>
    </Router>
  );
};

export default App;
