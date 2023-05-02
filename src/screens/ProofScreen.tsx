import React from 'react';
import {Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

const ProofScreen = () => {
  const route = useRoute<any>();
  return <Text>Proof data: ${route.params.proofData}</Text>;
};

export default ProofScreen;
