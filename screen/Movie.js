import React from 'react'
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Btn = styled.TouchableOpacity`
flex: 1;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.mainBgColor} ;
`;

const Movie = ({navigation: { navigate }}) => (
    <Btn
    onPress={() => navigate("Stack", { screen : "Three"})} 
    style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <Text>Movie</Text>
    </Btn>
)

export default Movie
