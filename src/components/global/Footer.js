import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Affiliate Billing System. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
