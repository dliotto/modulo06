import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

class User extends Component { 

    state = {
        stars: [],
    };

    static setOptions = () => ({
        title: route.params.user.name
    });

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
        }).isRequired,
    };

    async componentDidMount(){
        const user = this.props.route.params.user;

        const response = await api.get(`/users/${user.login}/starred`);

        
        this.setState({ stars: response.data });

    }
    
   
    render(){
        let name = this.props.route.params.user.name;
        
        const { stars } = this.state;

        console.log(stars);

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Usuario: {name}</Text>
                <Button title="Voltar à Usuários" color="#7159c1" fontWeight="bold" onPress={() => navigation.navigate('Usuarios')} />
            </View> 
        );
    }
}

export default User;
