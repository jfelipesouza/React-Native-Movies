import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background-color: ${props=>props.theme.primary.main};


`;

export const SearchContainer = styled.View`
  flex-direction:row;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 0 14px;
  margin-bottom: 8px;

`;

export const Input = styled.TextInput`
  width: 90%;
  background-color:rgba(255,255,255,0.5);
  border-radius: 100px;
  height:45px;
  padding: 0 10px;
  font-size:19px;
  color:${props=>props.theme.text.main};

`;


export const SearchButton = styled.TouchableOpacity`
  width: 10%;
  height: 50px;
  align-items: center;
  justify-content: center;
`;
