import React from 'react';
import {Container,SearchContainer,Input,SearchButton} from './styled';
import Headers from '../../components/header'
import {FontAwesome5} from '@expo/vector-icons'


export default function Home() {
  return (
    <Container>

      <Headers title = 'React Plus'/>

      <SearchContainer>
        <Input placeholder='search...' />
        <SearchButton>
          <FontAwesome5 name = 'search' size = {25} color = {"#ddd"}/>
        </SearchButton>
      </SearchContainer>

    </Container>
  )
}
