
import { Routes } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Box } from "native-base";


export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}


