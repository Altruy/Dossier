import React, { useState, useEffect } from "react";

import { View, Button } from "react-native";
import styles from "../stylesheet";

import { Overlay } from "react-native-elements";
import { ManageTeam } from "../components/ManageTeam";

import { useTasks } from "../providers/TasksProvider";
import { TaskItem } from "../components/TaskItem";
import { AddTask } from "../components/AddTask";

import TasksProvider from "../providers/TasksProvider"

export function TasksView({ navigation}) {
  const { name } = route.params;

  const [overlayVisible, setOverlayVisible] = useState(false);

  const { tasks, createTask } = useTasks();
  useEffect(() => {
    navigation.setOptions({
      headerRight: function Header() {
        return <AddTask createTask={createTask} />;
      },
      title: `${name}'s Tasks`,
    });
  }, []);

  return (
    <TasksProvider user={navigation.getParam('user')} projectPartition={navigation.getParam('projectPartition')}>
    <View>
      {tasks.map((task) =>
        task ? <TaskItem key={`${task._id}`} task={task} /> : null
      )}

      {name === "My Project" ? (
        <>
          <View style={styles.manageTeamButtonContainer}>
            <Button
              title="Manage Team"
              onPress={() => setOverlayVisible(true)}
            />
          </View>
          <Overlay
            isVisible={overlayVisible}
            onBackdropPress={() => setOverlayVisible(false)}
          >
            <ManageTeam />
          </Overlay>
        </>
      ) : null}
    </View>
    </TasksProvider>
  );
}
