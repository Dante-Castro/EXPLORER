import { FiPlus, FiSearch } from 'react-icons/fi';


import {Container, Brand, Menu, Search, Content, NewNote} from './style';

import { Note } from '../../components/Note'
import { Header } from '../../components/Header';
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Home(){
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>      
      </Brand>

      <Header />      

      <Menu>
        <li><ButtonText title= "Todos"/></li>
        <li><ButtonText title= "Frontend"/></li>
        <li><ButtonText title= "Node"/></li>
        <li><ButtonText title= "React"/></li>
      </Menu>

      <Search>
        <Input placeholder= "Pesquisar pelo título" />
      </Search>

      <Content>
        <Section title='Minhas Notas'>
          <Note data={{
            title: 'React Modal', 
            tags: [
              {id: '1', name: 'react' },
              {id: '2', name: 'nodejs' }
            ]
          }}
          />
        </Section>
        
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota

      </NewNote>

     
    </Container>
  );
}