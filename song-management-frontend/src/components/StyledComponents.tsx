import styled from '@emotion/styled';
import { space, layout, typography, color, border, flexbox } from 'styled-system';
import { Link } from 'react-router-dom';

export const Box = styled('div')(space, layout, color, flexbox, border);

export const Input = styled('input')(
  space,
  layout,
  typography,
  color,
  border,
  {
    padding: '8px',
    marginBottom: '12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  {
    '@media (max-width: 769px)': {
      width: '100%',  
      padding: '6px',
      marginBottom: '8px',
    }
  }
);

export const Button = styled('button')(
  space,
  layout,
  typography,
  color,
  border,
  (props) => ({
    padding: '8px 16px',
    backgroundColor: props.bg || '#36454F',
    color: '#fff',
    border: 'none',
    textDecoration: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: props.bghover || '#000000',
      color: props.colorhover || '#fff'
    },
  }),
  {
    '@media (max-width: 769px)': {
      width: '20%',  
      padding: '6px 12px',
    }
  }
);

export const Text = styled('p')(
  space,
  layout,
  typography,
  color,
  {
    margin: '4px 0',
    whiteSpace: 'nowrap',  
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '@media (max-width: 769px)': {
      whiteSpace: 'normal', 
      overflow: 'visible',
    }
  }
);

export const Card = styled('div')(
  space,
  layout,
  color,
  flexbox,
  border,
  {
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.3s ease',
  },
  {
    '@media (max-width: 769px)': {
      width: '100%',  // Full width on mobile
      margin: '8px 0',
      padding: '12px',
    }
  }
);

export const Container = styled(Box)({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '16px',
  width: '100%',
  '@media (max-width: 769px)': {
    padding: '8px',
  }
});

export const FlexBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '5px',
  gap: '16px',
  '@media (max-width: 769px)': {
    flexDirection: 'row',  // Stack items vertically on mobile
    gap: '6px',
    justifyContent: 'space-around',
  }
});

export const StatisticsCard = styled('div')(
  space,
  layout,
  color,
  flexbox,
  border,
  (props) => ({
    padding: '24px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: props.flexDirection || 'column',
    justifyContent: 'center',
  }),
  {
    '@media (max-width: 769px)': {
      padding: '16px',
    }
  }
);

export const StatItem = styled('div')({
  marginBottom: '12px',
  marginRight: '40px',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '6px 10px',
  borderRadius: '4px',
  backgroundColor: '#36454F',
  color: '#fff',
  transition: 'transform 0.3s ease',
  maxWidth: '100%', 
  '&:last-child': {
    marginBottom: '0',
  },
  '&:hover': {
    transform: 'scale(1.05)',
  },
  '@media (max-width: 769px)': {
    padding: '6px 10px',
  }
});

export const SongCard = styled('div')(
  space,
  layout,
  color,
  flexbox,
  border,
  {
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: '#e2e2e2',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '250px',  
    maxWidth: '300px',  
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  {
    '@media (max-width: 769px)': {
      width: '100%',  
      height: 'auto',  
      padding: '12px',
    },
  }
);

export const FormBox = styled(Box)({
  padding: '16px',
  backgroundColor: '#fafafa',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  '@media (max-width: 769px)': {
    padding: '12px',
  }
});

export const SubmitButton = styled(Button)({
  backgroundColor: '#28a745',
  '&:hover': {
    backgroundColor: '#218838',
  },
  '@media (max-width: 769px)': {
    width: '100%',  // Full width on mobile
  }
});

export const Sidebar = styled(Box)`
  width: 250px;
  background-color: #36454F;
  text-decoration: none;
  color: white;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: fixed;
  height: 100vh;
  margin: 0;
  left: 0;
  top: 0;

  @media (max-width: 769px) {
    width: 200px;
  }
`;

export const LinkText = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const SidebarButton = styled(Button)(
  space,
  layout,
  typography,
  color,
  border,
  (props) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: props.bg || '#008000',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    '&:hover': {
      backgroundColor: props.bghover || '#006400',
    },
  }),
  {
    '@media (max-width: 769px)': {
      padding: '8px 16px',
    }
  }
);

export const MainContent = styled(Box)`
  margin-left: 250px;
  flex: 1;
  padding: 16px;

  @media (max-width: 769px) {
    margin-left: 0;  // No margin when sidebar is replaced by drawer
    padding: 12px;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const Modal = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  width: 80%;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 769px)': {
    padding: '16px',
    width: '90%',
  }
`;

export const CloseButton = styled(Button)`
  position: absolute;
  text-align: center;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #000;
  }
`;

export const Drawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #36454F;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  transform: translateX(0);

  @media (min-width: 769px) {
    display: none;
  }
`;

export const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #000;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;