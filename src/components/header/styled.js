import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  flex-direction:row;
  align-items: center;

`;

export const Title = styled.Text`
  text-transform:uppercase;
  color: ${props=>props.theme.text.main};
  font-size: 24px;
  margin-left: 10px;
`
export const MenuButton = styled.TouchableOpacity`
  margin-left:15px;

`
