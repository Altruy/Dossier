import React from "react";
import { View } from "react-native";
import { useAuth } from "../providers/AuthProvider";
import { ListItem } from "react-native-elements";
import Logout from '../components/Logout'

export function ProjectsView({ navigation }) {
  const { projectData } = useAuth();

  // the onClickProject navigates to the Task List with the project name
  // and project partition value
  const onClickProject = async (project) => {
    navigation.navigate("TaskView", {
      name: project.name,
      projectPartition: project.partition,
    });
  };

  ProjectsView.navigationOptions = {
    headerLeft: function Header() {
      return <Logout />;
    },
  };
  

  return (
    <View>
      {projectData.map((project) => (
        <View key={project.name}>
          <ListItem
            title={project.name}
            onPress={() => onClickProject(project)}
            bottomDivider
            key={project.name}
          />
        </View>
      ))}
    </View>
  );
}