import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Pressable,
  KeyboardAvoidingView,
  Image,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  setField,
  validateSignUpForm,
  clearErrors,
} from "../../redux/signUpSlice";
import Input_Field from '../../components/Input_Filed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { bgColor } from '../../utils/colors/main_color';

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();
  const { fullName, email, phoneNumber, password, confirmPassword, errors } = useSelector(state => state.signUp);

  const handleInputChange = (field, value) => {
    dispatch(setField({ field, value }));
    dispatch(clearErrors({ field }));
  };

  const handleSubmit = async () => {
    dispatch(validateSignUpForm());
  
    const currentState = {
      fullName,
      email,
      phoneNumber,
      password,
      confirmPassword,
      errors,
    };
  
    if (
      Object.keys(currentState.errors).length === 0 &&
      fullName &&
      email &&
      phoneNumber &&
      password &&
      confirmPassword
    ) {
      try {
        const userData = {
          fullName,
          email,
          phoneNumber,
          password,
        };
        await AsyncStorage.setItem('user', JSON.stringify(userData));
        console.log("User registered and data saved to AsyncStorage");
        navigation.navigate("MainTabs");
      } catch (error) {
        console.log("Error saving data to AsyncStorage: ", error);
      }
    }
  };
  

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 0 })}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.inputContainer}>
            <Text style={styles.subtitle}>Sign up to your New Account</Text>
            <View style={styles.input_field}>
              <View style={styles.textRow}>
                <Text style={styles.leftText}>Full Name</Text>
              </View>
              <Input_Field
                icon="user"
                placeholder="Full Name"
                value={fullName}
                onChangeText={(value) => handleInputChange('fullName', value)}
                error={errors.fullName}
              />
              {errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}

              <View style={styles.textRow}>
                <Text style={styles.leftText}>Email Address</Text>
              </View>
              <Input_Field
                icon="email"
                placeholder="Email"
                value={email}
                onChangeText={(value) => handleInputChange('email', value)}
                error={errors.email}
              />
              {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

              <View style={styles.textRow}>
                <Text style={styles.leftText}>Phone Number</Text>
              </View>
              <Input_Field
                icon="phone"
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={(value) => handleInputChange('phoneNumber', value)}
                error={errors.phoneNumber}
              />
              {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}

              <View style={styles.textRow}>
                <Text style={styles.leftText}>Password</Text>
              </View>
              <Input_Field
                icon="password"
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(value) => handleInputChange('password', value)}
                error={errors.password}
              />
              {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

              <View style={styles.textRow}>
                <Text style={styles.leftText}>Confirm Password</Text>
              </View>
              <Input_Field
                icon="password"
                placeholder="Confirm Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={(value) => handleInputChange('confirmPassword', value)}
                error={errors.confirmPassword}
              />
              {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
            </View>
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.orContinueContainer}>
              <View style={styles.line} />
              <View style={styles.textContainer}>
                <Text style={styles.orContinueText}>Or continue with</Text>
              </View>
              <View style={styles.line} />
            </View>
            <View style={styles.socialIconsContainer}>
              <View style={styles.socialIcons}>
                <Image source={require('../../assets/search.png')} style={styles.socialIcon} />
              </View>
              <View style={styles.socialIcons}>
                <Image source={require('../../assets/facebook.png')} style={styles.socialIcon} />
              </View>
              <View style={styles.socialIcons}>
                <Image source={require('../../assets/instagram.png')} style={styles.socialIcon} />
              </View>
            </View>
            <View style={styles.signup_in_login}>
              <Text style={{ fontSize: 12,  color: 'black', }}>Already have an Account?</Text>
              <Pressable onPress={() => navigation.navigate('login_email')}>
                <Text style={styles.signinText}>Sign-in</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  textRow: {
    width: '100%',
    flexDirection: 'row',
    left: 10,
  },
  leftText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  input_field: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 10,
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: -10,
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 60,
    backgroundColor: '#153518',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orContinueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    bottom: 30,
    width: '70%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#BCBCBC',
  },
  textContainer: {
    paddingHorizontal: 5,
  },
  orContinueText: {
    color: '#BCBCBC',
    fontSize: 14,
    opacity: 0.8,
    textAlign: 'center',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    bottom: 30,
  },
  socialIcons: {
    width: 90,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    borderRadius: 53,
    borderWidth: 1,
    borderColor: '#EDEDED',
    marginHorizontal: 5,
  },
  socialIcon: {
    width: 25,
    backgroundColor: 'white',
    height: 25,
    borderRadius: 5,
  },
  signup_in_login: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 30,
  },
  signinText: {
    fontSize: 14,
    color: bgColor.primary_color,
    fontWeight: 'bold',
    marginHorizontal: 3,
  },
});
