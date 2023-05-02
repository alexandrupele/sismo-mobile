import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

const ProofScreen = () => {
  const route = useRoute<any>();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Proof data: ${route.params.proofData}</Text>
    </View>
  );
};

export default ProofScreen;
