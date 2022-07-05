import React from 'react'
import { StyledHeader, Nav, Logo,Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled';
import { Button } from './styles/Button.styled';

import {Flex} from './styles/Flex.styled'
const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="logo" />
          <Button>Try it free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Commuunity Fans Will Love</h1>
            <p>
              Huddle re-imagins the way we build communities. You have a voice,
              but so dies your audience. Create connections with your usrs as
              you engage in the genuine discussions
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started for Free
            </Button>
          </div>

          <Image src="./images/illustration-mockups.svg" alt="Mock-ups" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header