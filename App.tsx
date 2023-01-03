import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping } from '@eva-design/eva';
import * as eva from '@eva-design/eva';
import { Provider } from '@ant-design/react-native';
import { CustomSchemaType } from '@eva-design/dss';
import { myTheme } from './theme/custom-theme';
import useCachedResources from './hooks/useCachedResources';
// import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider>
        <ApplicationProvider
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...eva}
          theme={{ ...eva.light, ...myTheme }}
          customMapping={mapping as unknown as CustomSchemaType}
        >
          <SafeAreaProvider>
            <Navigation colorScheme="dark" />
            <StatusBar />
          </SafeAreaProvider>
        </ApplicationProvider>
      </Provider>
    );
  }
}
