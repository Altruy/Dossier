import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import Icon from "react-native-vector-icons/SimpleLineIcons";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton {...props} IconComponent={Icon} iconSize={20} color="white" />
  );
};

export default CustomHeaderButton;
