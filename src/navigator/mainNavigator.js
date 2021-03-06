import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps139078Navigator from '../features/Maps139078/navigator';
import Add-Item139077Navigator from '../features/Add-Item139077/navigator';
import Maps139073Navigator from '../features/Maps139073/navigator';
import UserProfile139069Navigator from '../features/UserProfile139069/navigator';
import UserProfile139046Navigator from '../features/UserProfile139046/navigator';
import Maps139027Navigator from '../features/Maps139027/navigator';
import Settings139005Navigator from '../features/Settings139005/navigator';
import Settings138990Navigator from '../features/Settings138990/navigator';
import NotificationList138989Navigator from '../features/NotificationList138989/navigator';
import Maps138988Navigator from '../features/Maps138988/navigator';
import UserProfile138987Navigator from '../features/UserProfile138987/navigator';
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
Maps139078: { screen: Maps139078Navigator },
Add-Item139077: { screen: Add-Item139077Navigator },
Maps139073: { screen: Maps139073Navigator },
UserProfile139069: { screen: UserProfile139069Navigator },
UserProfile139046: { screen: UserProfile139046Navigator },
Maps139027: { screen: Maps139027Navigator },
Settings139005: { screen: Settings139005Navigator },
Settings138990: { screen: Settings138990Navigator },
NotificationList138989: { screen: NotificationList138989Navigator },
Maps138988: { screen: Maps138988Navigator },
UserProfile138987: { screen: UserProfile138987Navigator },
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
