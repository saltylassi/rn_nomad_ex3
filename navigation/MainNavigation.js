import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";
import { headerStyles } from "./config";

const MainNavigation = createStackNavigator(
  {
    Tabs: { 
        screen: TabNavigation, 
        navigationOptions: { 
            header:null 
        } 
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        ...headerStyles,
        headerBackTitleVisible:false
      }
    }
  },
  {
      headerMode : "float"
  }
);

export default createAppContainer(MainNavigation);

