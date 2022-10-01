import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './styles';

import { Main } from '../pages/Main';
import { User } from '../pages/User';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTitleAlign: 'center',
        headerBackVisible: 'false',
        headerTitleStyle: {
          color: '#fff',
        },
      }}
    >
      <Screen name="Usuários" component={Main} />
      <Screen name="Perfil" component={User} />
    </Navigator>
  );
}
