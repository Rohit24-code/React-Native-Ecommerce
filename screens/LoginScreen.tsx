import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
import React, {FormEvent, useState} from 'react';
import {Formik, FormikValues, useFormik} from 'formik';
import {object, string, number, date, InferType} from 'yup';
import Icons from '../components/Icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/LoginRegisterStyles';

let userSchema = object({
  email: string().email().required(),
  password: string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      'Password must have at least one uppercase and one lowercase letter',
    )
    .required('Password is required'),
});

const logo = require('../Assests/AmazonIcon.jpeg');
const LoginScreen = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigation:any=useNavigation()

  const generatePassword = (text: string) => {
    console.log('password', text);
  };

  return (
    // SafeAreaView in React Native is a component that ensures that its children are rendered within the safe area boundaries of a device
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar animated={true} backgroundColor="#fff" />
      <View>
        <Image source={logo} width={150} height={100} />
      </View>

      <KeyboardAvoidingView>
        <View style={styles.loginScreen}>
          <Text style={styles.Header}>Login In to your Account</Text>
        </View>

        <View style={{marginTop: 70}}>
          <Formik
            initialValues={{email: '', password: ''}}
            validateOnChange={true}
            validateOnBlur={true}
            onSubmit={values => {
              console.log(values);
              generatePassword(values.password);
            }}
            validationSchema={userSchema}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                <View>
                  <View style={styles.inputView}>
                    <Icons
                      style={styles.IconStyle}
                      name="envelope"
                      size={22}
                      color="grey"
                      solid={true}
                    />
                    <TextInput
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      style={styles.TextInput}
                      placeholder="Enter Email"
                    />
                  </View>
                  <View>
                    {touched.email && errors.email && (
                      <Text style={styles.error}>{errors.email}</Text>
                    )}
                  </View>
                </View>

                <View>
                  <View style={styles.inputView}>
                    <Icons
                      style={styles.IconStyle}
                      name={open ? 'lock-open' : 'lock-close'}
                      size={open? 17 : 22}
                      color="grey"
                      solid={false}
                    />
                    <TextInput
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      style={styles.TextInput}
                      placeholder="Enter Password"
                      secureTextEntry={open ? false : true}
                    />
                    <Pressable onPress={() => setOpen(!open)}>
                      <Icons
                        style={styles.IconEyeStyle}
                        name="eye"
                        size={22}
                        color="grey"
                        solid={false}
                      />
                    </Pressable>
                  </View>
                  <View>
                    {touched.password && errors.password && (
                      <Text style={styles.error}>{errors.password}</Text>
                    )}
                  </View>
                </View>

                <View style={styles.keepMeLogged}>
                  <Text>Keep me logged in</Text>

                  <Text style={styles.forgotPassword}>Forgot Password</Text>
                </View>

                <View style={{marginTop: 80}} />

                <Pressable
                  style={styles.loginButton}
                  onPress={() => handleSubmit()}>
            
                    <Text style={styles.loginText}>Login</Text>

                </Pressable>

                <Pressable onPress={()=>navigation.navigate("Register")}>
                  <Text style={styles.textForSignUp}>
                    Don't have a account? Sign Up
                  </Text>
                </Pressable>
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

