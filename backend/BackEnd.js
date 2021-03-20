import React from "react";
import "react-native-gesture-handler";
import { AuthProvider } from "./providers/AuthProvider";
import BackNav from './BackNav'

const BackEnd = () => {
  return (
    <AuthProvider>
      <BackNav/>
    </AuthProvider>
  );
};

export default BackEnd;
