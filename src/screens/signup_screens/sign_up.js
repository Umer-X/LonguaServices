import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Platform,
  Image,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  setField,
  validateSignUpForm,
  clearErrors,
  setUser,
} from '../../redux/signUpSlice';
import Input_Field from '../../components/Input_Filed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth'; // Import Firebase Auth
import { bgColor } from '../../utils/colors/main_color';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon library
import { GoogleSignin } from '@react-native-google-signin/google-signin'; // Import Google Sign-In components

const SignUp = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { fullName, email, phoneNumber, password, confirmPassword, errors } =
    useSelector(state => state.signUp);

  // Initialize Google Sign-In
  GoogleSignin.configure();

  const handleInputChange = (field, value) => {
    dispatch(setField({ field, value }));
    dispatch(clearErrors({ field }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    dispatch(validateSignUpForm());

    if (
      Object.keys(errors).length === 0 &&
      fullName &&
      email &&
      phoneNumber &&
      password &&
      confirmPassword
    ) {
      try {
        const userData = { fullName, email, phoneNumber, password };
        await AsyncStorage.setItem('user', JSON.stringify(userData));
        dispatch(setUser(userData));
        setLoading(false);
        console.log('User registered and data saved to AsyncStorage');
        navigation.navigate('MainTabs');
      } catch (error) {
        setLoading(false);
        console.log('Error saving data to AsyncStorage: ', error);
      }
    } else {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      console.log('User signed in with Google successfully!');
      // Navigate to the desired screen after successful sign-in
      navigation.navigate('MainTabs');
    } catch (error) {
      console.log('Error signing in with Google: ', error);
      Alert.alert('Google Sign-In Error', 'Failed to sign in with Google.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 0 })}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
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
                onChangeText={value => handleInputChange('fullName', value)}
                error={errors.fullName}
              />
              {errors.fullName && (
                <Text style={styles.errorText}>{errors.fullName}</Text>
              )}

              <View style={styles.textRow}>
                <Text style={styles.leftText}>Email Address</Text>
              </View>
              <Input_Field
                icon="email"
                placeholder="Email"
                value={email}
                onChangeText={value => handleInputChange('email', value)}
                error={errors.email}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <View style={styles.textRow}>
                <Text style={styles.leftText}>Phone Number</Text>
              </View>
              <Input_Field
                icon="phone"
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={value =>
                  handleInputChange('phoneNumber', value)
                }
                error={errors.phoneNumber}
              />
              {errors.phoneNumber && (
                <Text style={styles.errorText}>{errors.phoneNumber}</Text>
              )}

              <View style={styles.textRow}>
                <Text style={styles.leftText}>Password</Text>
              </View>
              <Input_Field
                icon="password"
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={value =>
                  handleInputChange('password', value)
                }
                error={errors.password}
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              <View style={styles.textRow}>
                <Text style={styles.leftText}>Confirm Password</Text>
              </View>
              <Input_Field
                icon="password"
                placeholder="Confirm Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={value =>
                  handleInputChange('confirmPassword', value)
                }
                error={errors.confirmPassword}
              />
              {errors.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}
            </View>
          </View>

          {/* Google Sign-In with Custom Icon */}
          <TouchableOpacity
            style={styles.googleButton}
            onPress={handleGoogleSignIn}
            disabled={loading}
          >
            <FontAwesomeIcon
              name="google"
              size={30}
              color="#DB4437"
              style={{ marginRight: 10 }}
            />
            <Text style={{ fontSize: 18, color: '#DB4437' }}>
              Sign up with Google
            </Text>
          </TouchableOpacity>

          {/* Sign Up Button */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            {loading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={styles.buttonText}>Sign Up</Text>
            )}
          </TouchableOpacity>

          {/* Existing user sign-in link */}
          <View style={styles.signup_in_login}>
            <Text style={{ fontSize: 12, color: 'black' }}>
              Already have an Account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('login_email')}>
              <Text style={styles.signinText}>Sign-in</Text>
            </TouchableOpacity>
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
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    width: '80%',
    height: 60,
    borderRadius: 10,
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
  signup_in_login: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 30,
  },
  signinText: {
    fontSize: 12,
    color: bgColor.primary_color,
    fontWeight: 'bold',
    marginHorizontal: 3,
  },
});
