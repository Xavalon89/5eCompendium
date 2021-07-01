import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TabsScrollableExample from './src/screens/TabsScreen';
import ClassesScreen from './src/screens/ClassesScreen';
import RacesScreen from './src/screens/RacesScreen';
import SpellsScreen from './src/screens/SpellsScreen';
import EquipmentScreen from './src/screens/EquipmentScreen';
import MonstersScreen from './src/screens/MonstersScreen';
import ClassShowScreen from './src/screens/ClassShowScreen';
import RaceShowScreen from './src/screens/RaceShowScreen';
import SpellShowScreen from './src/screens/SpellShowScreen';
import EquipmentShowScreen from './src/screens/EquipmentShowScreen';
import MonsterShowScreen from './src/screens/MonsterShowScreen';

const navigator = createStackNavigator(
  {
    Tabs: TabsScrollableExample,
    Class: ClassesScreen,
    Race: RacesScreen,
    Spell: SpellsScreen,
    Equipment: EquipmentScreen,
    Monsters: MonstersScreen,
    ClassShow: ClassShowScreen,
    RaceShow: RaceShowScreen,
    SpellShow: SpellShowScreen,
    EquipmentShow: EquipmentShowScreen,
    MonsterShow: MonsterShowScreen
  },
  {
    initialRouteName: 'Tabs',
    defaultNavigationOptions: {
      title: '5e Compendium'
    }
  }
);

export default createAppContainer(navigator);
