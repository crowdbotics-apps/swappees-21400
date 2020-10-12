import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps138968Navigator from '../features/Maps138968/navigator';
import Settings138946Navigator from '../features/Settings138946/navigator';
import Settings138931Navigator from '../features/Settings138931/navigator';
import NotificationList138930Navigator from '../features/NotificationList138930/navigator';
import Maps138929Navigator from '../features/Maps138929/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps138968: { screen: Maps138968Navigator },
Settings138946: { screen: Settings138946Navigator },
Settings138931: { screen: Settings138931Navigator },
NotificationList138930: { screen: NotificationList138930Navigator },
Maps138929: { screen: Maps138929Navigator },

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
