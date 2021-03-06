import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen213694Navigator from '../features/BlankScreen213694/navigator';
import CopyOfBlankScreen013693Navigator from '../features/CopyOfBlankScreen013693/navigator';
import BlankScreen013686Navigator from '../features/BlankScreen013686/navigator';
import BlankScreen013647Navigator from '../features/BlankScreen013647/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen213694: { screen: BlankScreen213694Navigator },
CopyOfBlankScreen013693: { screen: CopyOfBlankScreen013693Navigator },
BlankScreen013686: { screen: BlankScreen013686Navigator },
BlankScreen013647: { screen: BlankScreen013647Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
