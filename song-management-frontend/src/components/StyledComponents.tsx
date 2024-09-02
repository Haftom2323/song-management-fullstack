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
  }
);


export const Button = styled('button')(
  space,
  layout,
  typography,
  color,
  border,
  (props) => ({
    padding: '10px 20px',
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
  })
);

export const Text = styled('p')(space, layout, typography, color);

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
  }
);


export const Container = styled(Box)({
  maxWidth: '1200px',
  margin: '0',
});

export const FlexBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: '16px', 
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
    
    
  })
);

export const StatItem = styled('div')({
  marginBottom: '12px',
  marginRight: '40px',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px 12px',
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
  }
});


export const SongCard = styled(Card)({
  marginTop: '18px',
  backgroundColor: '#e2e2e2',
  transition: 'transform 0.3s ease', 
  '&:last-child': {
    marginBottom: '0',
  },
  '&:hover': {
    transform: 'scale(1.07)', 
  }
});

export const FormBox = styled(Box)({
  padding: '16px',
  backgroundColor: '#fafafa',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

export const SubmitButton = styled(Button)({
  backgroundColor: '#28a745',
  '&:hover': {
    backgroundColor: '#218838',
  },
});

export const Sidebar = styled(Box)`
  width: 100%;
  background-color: #36454F;
  text-decoration: none;
  color: white
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: fixed;
  min-height: 100vh;
  margin: 0; 

  @media (min-width: 768px) {
    width: 250px;
  }
`;

export const LinkText = styled(Link)`
  text-decoration: none;
  color: inherit`; 

export const SidebarButton = styled('button')(
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
    border: 'none',
    textDecoration: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    '&:hover': {
      backgroundColor: props.bghover || '#006400',
      color: props.colorhover || '#fff',
    },
  })
);

export const MainContent = styled(Box)`
  margin-left: 100px;
  flex: 1;
  padding: 16px;

  @media (min-width: 768px) {
    margin-left: 250px;
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
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

export const CloseButton = styled.button`
  position: absolute;
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