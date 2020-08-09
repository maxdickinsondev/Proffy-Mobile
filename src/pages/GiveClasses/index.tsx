import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesBbImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

export default function GiveClasses() {
    const navigation = useNavigation();

    function handleNavigateBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
                style={styles.content}
                resizeMode="contain"
                source={giveClassesBbImage}
            >
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton
                onPress={handleNavigateBack} 
                style={styles.okButton}
            >
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    );
}