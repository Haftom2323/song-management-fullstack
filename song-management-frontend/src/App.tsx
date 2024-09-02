/** @jsxImportSource @emotion/react */
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SongList from './components/SongList';
import Statistics from './components/Statistics';
import { Container, Sidebar, MainContent, SidebarButton, Text, LinkText } from './components/StyledComponents';
import { Analytics } from '@emotion-icons/material/Analytics';
import { FileEarmarkMusic } from '@emotion-icons/bootstrap/FileEarmarkMusic';

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Sidebar>
          <LinkText to='/'>
            <Text fontSize={3} fontWeight="bold" color="white" mb={4}>
              Dashboard
            </Text>
          </LinkText>
          <SidebarButton bg="#36454F" bghover="#edc" colorhover="black" as={Link} to="/">
            <Analytics size="20" style={{ marginRight: '8px' }} />
            Statistics
          </SidebarButton>
          <SidebarButton bg="#36454F" bghover="#edc" colorhover="black" as={Link} to="/songs">
            <FileEarmarkMusic size="20" style={{ marginRight: '8px' }} />
            Songs
          </SidebarButton>
        </Sidebar>

        <MainContent>
          <Routes>
            <Route path="/" element={<Statistics />} />
            <Route path="/songs" element={<SongList />} />
          </Routes>
        </MainContent>
      </Container>
    </Router>
  );
};

export default App;
