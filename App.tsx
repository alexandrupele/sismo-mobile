/**
 * sismo-connect rn app
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  WebView,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {
  AuthRequest,
  AuthType,
  ClaimRequest,
  SismoConnect,
  SismoConnectClientConfig,
} from '@sismo-core/sismo-connect-client';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  let request = () => {
    const config: SismoConnectClientConfig = {
      // you will need to register an appId in the Factory
      appId: '0xd083e52833d6f2843a85a2a1650a789a',
      devMode: {
        enabled: true,
        displayRawResponse: false,
      },
    };

    const sismoConnect = SismoConnect(config);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const claim: ClaimRequest = {
      groupId: '0x81b5a6eab960875283f864836b8b396e',
    };
    const auth: AuthRequest = {
      authType: AuthType.VAULT,
    };
    const url = encodeURI(
      sismoConnect.getRequestLink({
        auth: auth,
      }),
    );

    console.log(url);
    Linking.openURL(url);
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.white}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{backgroundColor: Colors.white}}>
          <Section title="sismo-connect mobile">Connecting to Vault</Section>
          <Button title="Request proof from Vault" onPress={request} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Section({children, title}: SectionProps): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDescription}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default App;
