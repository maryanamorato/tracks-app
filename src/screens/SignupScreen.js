import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
    return(
        <View>
            <Text style={{ fontSize: 48 }}>SignupScreen</Text>
            <Button
                title="Go to Signin"
                onPress={()=>{navigation.navigate('Signin')}}
            />
            <Button
                title="Go to mainFlow"
                onPress={()=>{navigation.navigate('mainFlow')}}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default SignupScreen;
