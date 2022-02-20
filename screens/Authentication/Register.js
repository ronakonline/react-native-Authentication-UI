import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../styles/Authentication/register";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <View style={styles.header}>
          <AntDesign
            name="back"
            size={28}
            color="black"
            style={{ marginRight: 10 }}
          />
          <Text style={styles.backText}>Back</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.body}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.text}>
          Create an account so you can order {"\n"}
          your favorite food even faster
        </Text>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.formText}>Name</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.formText}>Email</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.formText}>Password</Text>
            <TextInput style={styles.input} />
          </View>
          <Text style={styles.passwordText}>Your password must be 8 or more character long & container
            a mix of upper & lower case letters, numbers & symbols
          </Text>
          <View style={styles.registerBtn}>
            <Button title="Create an account" color="#1A202E" onPress={() => navigation.navigate('VerifyEmail')} />
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.termsText}>By signing up, you agree to our {"\n"}
          <Text style={styles.blackText}>Terms of Use</Text> and <Text style={styles.blackText}>Privacy Policy.</Text></Text>
          <View style={styles.loginFooter}>
            <Text style={styles.alreadyText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}


 