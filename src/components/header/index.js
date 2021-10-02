import React from "react";
import { Container,Title,MenuButton, } from "./styled";
import {MaterialIcons} from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";


const Headers = ({title}) => {
  const navigation = useNavigation();

  function open() {
    navigation.openDrawer()
  }


  return(
    <Container>

      <MenuButton onPress ={()=>open()} >
        <MaterialIcons name = {'menu'} size={36} color = '#fff'/>
      </MenuButton>

      <Title>
        {title}
      </Title>

    </Container>
  )
}

export default Headers;
