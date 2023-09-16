import {RiShutDownLine} from 'react-icons/ri'

import { Container, Profile, Logout } from './style';

export function Header(){
  return (
    <Container>
      <Profile to="profile">
        <img 
          src="https://github.com/Dante-Castro.png" 
          alt="Foto do usuário" 
        />

        <div>
          <span>Bem-vindos</span>
          <strong>Dante de Castro</strong>
        </div>
      </Profile>

      <Logout>

        <RiShutDownLine />
      </Logout>

    </Container>
  );
}