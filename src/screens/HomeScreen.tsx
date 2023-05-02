import {
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  let requestProof = () => {
    Linking.openURL('http://localhost:3000').then(Promise.resolve);
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Button title="Request proof from Vault" onPress={requestProof} />
          <Button
            title="Go to proof screen"
            onPress={() =>
              navigation.navigate('Proof', {proofData: 'undefined'})
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
