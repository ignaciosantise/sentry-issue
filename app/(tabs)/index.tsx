import { Image, StyleSheet, Platform, Alert, TouchableOpacity, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';

import * as Sentry from '@sentry/react-native';

// Comment this to make Promise.allSettled work (refresh app after commenting)
Sentry.init({
  dsn: 'PUT_SENTRY_DSN_HERE',

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // enableSpotlight: __DEV__,
});

export default function HomeScreen() {
  const test = () => {
    try {
      Promise.allSettled([Promise.resolve(1), Promise.resolve(2)]).then(() =>
        Alert.alert('promise.allSettled worked'),
      );
    } catch (error: any) {
      Alert.alert('error', error.message);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.stepContainer}>
        <TouchableOpacity onPress={test} style={styles.button}>
          <Text>
            Press me
          </Text>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  button: {
    backgroundColor: '#A1CEDC',
    padding: 10,
    width: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
