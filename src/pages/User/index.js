import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

function User({ navigation, route}){ 
    
    console.log(route.params);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Usuario: {route.params.user.name}</Text>
            <Button title="Voltar à Usuários" color="#7159c1" fontWeight="bold" onPress={() => navigation.navigate('Usuarios')} />
        </View>
    );
}

export default User;
