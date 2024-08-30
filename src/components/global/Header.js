import { HeaderContainer, HeaderContent, Logo, Nav, NavLink, LoginButton } from "./Header.styles";



const Header = () => (
    <HeaderContainer>
        <HeaderContent>
        <Logo src="https://res.cloudinary.com/dw5uzflen/image/upload/v1724923402/agh-logo1_cuz9ns_n7krtq.png" alt="Affiliate Marketing Logo" />
        <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/billing">Billing Details</NavLink>
            <NavLink to="/marketing">Marketing Status</NavLink>
            <NavLink to="/products">Products</NavLink>
        </Nav>
        <LoginButton>Login</LoginButton>
        </HeaderContent>
    </HeaderContainer>
);

export default Header;