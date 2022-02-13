import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>To Do </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nova Tarefa"
          placeholderTextColor="#FFFFFF"
        />
        <TouchableOpacity style={styles.buttonAdd} activeOpacity={0.8}>
          <Ionicons name="add" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
