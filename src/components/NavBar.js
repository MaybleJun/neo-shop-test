import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";
import { SHOP_ROUTE, BASKET_ROUTE, FAVORITE_ROUTE} from "../utils/consts";
// import {useNavigate} from 'react-router-dom';
import { useStore } from "../store/CountNav";


    const Logo = styled.span`
  font-family: var(--family);
  color: #101010;
  font-weight: var(--fw-bold);
  font-size: 25px;
`;

const NavbarBlock = styled.header`
  padding-top: 16px;
  margin-bottom: 15px;
`;

const IconsBlock = styled.div`
  display: flex;
  gap: 45px;
  padding-right: 25px;
`;

const FavoriteIcon = styled.i`
  color: #838383;
  position: relative;
  font-size: 21px;
`;

const ShoppingCartIcon = styled.i`
  color: #838383;
  position: relative;
  font-size: 22px;
`;

const Counter = styled.span.attrs({})`
  background-color: #ffa542;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: absolute;
  font-size: 15px;
  font-weight: var(--fw-mediun);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 16px;
  bottom: 10px;
  font-family: var(--family);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLink = styled(NavLink)`
  text-decoration: none;
`;

const Wrapper = styled.div`
  max-width: 1135px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;
const NavBar = observer(() => {
  
  const { shopCards } = useStore().CardStore;
  const arrayLength = shopCards.length;
  // const navigate = useNavigate()

    return (
        <NavbarBlock>
             <Wrapper>
                <Content>
                    <NavbarLink to={SHOP_ROUTE}>
                        <Logo>QPICK</Logo>
                    </NavbarLink>
           
                     <IconsBlock>                      
                     <NavbarLink  to={FAVORITE_ROUTE}>
                       <FavoriteIcon className="i-fav">
                         <Counter>2</Counter>
                       </FavoriteIcon>
                     </NavbarLink>

                     <NavbarLink to={BASKET_ROUTE}>
                       <ShoppingCartIcon className="i-shopping">
                       {arrayLength !== 0 && <Counter>{arrayLength}</Counter>}
                       </ShoppingCartIcon>
                     </NavbarLink>
                   </IconsBlock>
              
                </Content>
            </Wrapper>
        </NavbarBlock>

    );
});

export default NavBar;