import React from 'react'
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
import {FormEvent, useState} from 'react';
import {Formik, FormikValues, useFormik} from 'formik';
import {object, string, number, date, InferType} from 'yup';
import Icons from '../components/Icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/LoginRegisterStyles';
const logo = require('../Assests/AmazonIcon.jpeg');
const RegisterScreen = () => {
  
  const [open, setOpen] = useState<boolean>(false);
  const navigation:any=useNavigation()
  return (
    <SafeAreaView style={styles.mainContainer}>
    <StatusBar animated={true} backgroundColor="#fff" />
    <View>
      <Image source={logo} width={150} height={100} />
    </View>

    <KeyboardAvoidingView>
      <View style={styles.loginScreen}>
        <Text style={styles.Header}>Register to your Account</Text>
      </View>

      <View style={{marginTop: 70}}>
        <Formik
          initialValues={{name:"" ,email: '', password: ''}}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={values => {
            console.log(values);
            // generatePassword(values.password);
          }}
          // validationSchema={userSchema}
          >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
                <View style={styles.inputRegisterView}>
                  <Icons
                    style={styles.IconStyle}
                    name="envelope"
                    size={22}
                    color="grey"
                    solid={true}
                  />
                  <TextInput
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    style={styles.TextInput}
                    placeholder="Enter Name"
                  />
                </View>
                <View>
              </View>

              <View>
                <View style={styles.inputRegisterView}>
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
              </View>

              <View>
                <View style={styles.inputRegisterView}>
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
                  <Pressable onPress={()=>setOpen(!open)}>
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
                </View>
              </View>

              {/* <View style={styles.keepMeLogged}>
                <Text>Keep me logged in</Text>

                <Text style={styles.forgotPassword}>Forgot Password</Text>
              </View> */}

              <View style={{marginTop: 60}} />

              <Pressable
                style={styles.loginButton}
                onPress={() => handleSubmit()}>

                  <Text style={styles.loginText}>Login</Text>

              </Pressable>

              <Pressable onPress={()=>navigation.navigate("Login")}>
                <Text style={styles.textForSignUp}>
                  Already have a account? Sign In
                </Text>
              </Pressable>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAvoidingView>
  </SafeAreaView>
  )
}

export default RegisterScreen
