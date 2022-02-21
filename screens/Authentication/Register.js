import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../styles/Authentication/register";
import { authentication } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner
} from "expo-firebase-recaptcha";
import { initializeApp, getApp } from "firebase/app";
import {
  getAuth,
  PhoneAuthProvider,
  signInWithCredential
} from "firebase/auth";
import * as Google from "expo-google-app-auth";

const app = getApp();

export default function Register({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const recaptchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();
  const [message, showMessage] = React.useState();
  const attemptInvisibleVerification = false;

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId:"825739640707-efg88ne87bqj6d52khphgogdgl1vh38n.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        console.log(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e);
      return { error: true };
    }
  }

  const signInWithGoogle = () => {
    signInWithGoogleAsync();
  };

  const handleRegister = async () => {
    // createUserWithEmailAndPassword(authentication, email, password)
    //   .then((re) => {
    //     console.log(re);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    try {
      const phoneProvider = new PhoneAuthProvider(authentication);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        email,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
      showMessage({
        text: "Verification code has been sent to your phone."
      });
    } catch (err) {
      showMessage({ text: `Error: ${err.message}`, color: "red" });
    }
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={app.options}
        // attemptInvisibleVerification
      />
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
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.formText}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.formText}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <Text style={styles.passwordText}>
            Your password must be 8 or more character long & container a mix of
            upper & lower case letters, numbers & symbols
          </Text>
          <View style={styles.registerBtn}>
            <Button
              title="Create an account"
              color="#1A202E"
              onPress={handleRegister}
            />
          </View>
          <TouchableOpacity style={styles.googleregistrationBtn} onPress={() => signInWithGoogle()}>
            <AntDesign name="google" size={24} color="black" />
            <Text style={styles.googlebtn}>Sign Up with Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.termsText}>
            By signing up, you agree to our {"\n"}
            <Text style={styles.blackText}>Terms of Use</Text> and{" "}
            <Text style={styles.blackText}>Privacy Policy.</Text>
          </Text>
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
