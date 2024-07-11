import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Pressable,
  Platform,
  ActivityIndicator,
} from 'react-native';
import Input_Field from '../../components/Input_Filed.js';
import {bgColor} from '../../utils/colors/main_color.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {setField, clearErrors, setUser} from '../../redux/loginSlice.js';

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

const loginScreensData = [
  {
    id: 'email',
    title: 'Sign in to your Account',
    fields: [
      {
        label: 'Email Address',
        placeholder: 'Email',
        icon: 'email',
        secure: false,
        id: 'email',
      },
      {
        label: 'Password',
        placeholder: 'Password',
        icon: 'password',
        secure: true,
        id: 'password',
      },
    ],
    alternate: 'Use Phone Number',
    navigateTo: 'phone',
  },
  {
    id: 'phone',
    title: 'Sign in to your Account',
    fields: [
      {
        label: 'Phone Number',
        placeholder: 'Phone',
        icon: 'phone',
        secure: false,
        id: 'phoneNumber',
      },
      {
        label: 'Password',
        placeholder: 'Password',
        icon: 'password',
        secure: true,
        id: 'password',
      },
    ],
    alternate: 'Use Email Address',
    navigateTo: 'email',
  },
];

const LoginScreens = ({navigation}) => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {email, phoneNumber, password, errors} = useSelector(
    state => state.login,
  );

  useEffect(() => {
    dispatch(clearErrors({field: null}));
  }, [currentScreenIndex, dispatch]);

  const handleAlternate = () => {
    setCurrentScreenIndex(currentScreenIndex === 0 ? 1 : 0);
  };

  const handleInputChange = (field, value) => {
    dispatch(setField({field, value}));
    dispatch(clearErrors({field}));
  };

  const handleSubmit = async () => {
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setLoading(true);

    if (currentScreenIndex === 0) {
      if (!email || email.trim().length === 0) {
        valid = false;
        dispatch(
          setField({
            field: 'errors',
            value: {...errors, email: 'Email is required'},
          }),
        );
      } else if (!emailRegex.test(email)) {
        valid = false;
        dispatch(
          setField({
            field: 'errors',
            value: {...errors, email: 'Invalid email format'},
          }),
        );
      }

      if (!password || password.trim().length === 0) {
        valid = false;
        dispatch(
          setField({
            field: 'errors',
            value: {...errors, password: 'Password is required'},
          }),
        );
      } else if (password.length < 8) {
        valid = false;
        dispatch(
          setField({
            field: 'errors',
            value: {
              ...errors,
              password: 'Password must be at least 8 characters long',
            },
          }),
        );
      }
    } else {
      if (!phoneNumber || phoneNumber.trim().length === 0) {
        valid = false;
        dispatch(
          setField({
            field: 'errors',
            value: {...errors, phoneNumber: 'Phone number is required'},
          }),
        );
      }

      if (!password || password.trim().length === 0) {
        valid = false;
        dispatch(
          setField({
            field: 'errors',
            value: {...errors, password: 'Password is required'},
          }),
        );
      } else if (password.length < 8) {
        valid = false;
        dispatch(
          setField({
            field: 'errors',
            value: {
              ...errors,
              password: 'Password must be at least 8 characters long',
            },
          }),
        );
      }
    }

    if (valid) {
      try {
        const userDataString = await AsyncStorage.getItem('user');
        const userData = JSON.parse(userDataString);

        if (
          (currentScreenIndex === 0 &&
            userData.email === email &&
            userData.password === password) ||
          (currentScreenIndex === 1 &&
            userData.phoneNumber === phoneNumber &&
            userData.password === password)
        ) {
          console.log('User authenticated successfully');
          dispatch(setUser(userData));
          navigation.navigate('MainTabs');
        } else {
          console.log('Invalid login credentials');
          if (currentScreenIndex === 0) {
            dispatch(
              setField({
                field: 'errors',
                value: {...errors, email: 'Invalid email or password'},
              }),
            );
          } else {
            dispatch(
              setField({
                field: 'errors',
                value: {
                  ...errors,
                  phoneNumber: 'Invalid phone number or password',
                },
              }),
            );
          }
        }
      } catch (error) {
        console.log('Error retrieving data from AsyncStorage: ', error);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const getFieldValue = field => {
    switch (field) {
      case 'email':
        return email;
      case 'phoneNumber':
        return phoneNumber;
      case 'password':
        return password;
      default:
        return '';
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              Welcome to
              <Text style={{color: bgColor.primary_color}}>
                {' '}
                Longua Services
              </Text>
            </Text>
            <Text style={styles.description}>
              Simplifying translation and document services. Translate,
              collaborate, and digitize effortlessly.
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.subtitle}>
              {loginScreensData[currentScreenIndex].title}
            </Text>
            {loginScreensData[currentScreenIndex].fields.map((field, index) => (
              <View key={index} style={styles.fieldContainer}>
                <View style={styles.textRow}>
                  <Text style={styles.leftText}>{field.label}</Text>
                  {index === 0 && (
                    <Pressable onPress={handleAlternate}>
                      <Text style={styles.rightText}>
                        {loginScreensData[currentScreenIndex].alternate}
                      </Text>
                    </Pressable>
                  )}
                </View>
                <View style={styles.inputFieldContainer}>
                  <Input_Field
                    icon={field.icon}
                    placeholder={field.placeholder}
                    secureTextEntry={field.secure}
                    value={getFieldValue(field.id)}
                    onChangeText={value => handleInputChange(field.id, value)}
                  />
                </View>
                {errors[field.id] && (
                  <Text style={styles.errorText}>{errors[field.id]}</Text>
                )}
              </View>
            ))}
            <TouchableOpacity
              style={styles.forgotPasswordContainer}
              onPress={() => navigation.navigate('forget_password')}>
              <Text style={styles.forgotPasswordText}>Forget Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            {loading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={styles.buttonText}>Sign In</Text>
            )}
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
              <Image
                source={require('../../assets/search.png')}
                style={styles.socialIcon}
              />
            </View>
            <View style={styles.socialIcons}>
              <Image
                source={require('../../assets/facebook.png')}
                style={styles.socialIcon}
              />
            </View>
            <View style={styles.socialIcons}>
              <Image
                source={require('../../assets/instagram.png')}
                style={styles.socialIcon}
              />
            </View>
          </View>
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an Account?</Text>
            <Pressable onPress={() => navigation.navigate('sign_up')}>
              <Text style={styles.signupLink}>Sign-up</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 40,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    top: 30,
  },
  textContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 0,
    color: 'black',
  },
  description: {
    textAlign: 'center',
    fontWeight: '500',
    color: '#BCBCBC',
  },
  inputContainer: {
    width: '100%',
    top: -30,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'flex-start',
    marginBottom: 40,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftText: {
    color: '#BCBCBC',
  },
  rightText: {
    fontWeight: 'bold',
    color: bgColor.primary_color,
  },
  inputFieldContainer: {
    marginVertical: -10,
    top: 13,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    bottom: 10,
  },
  forgotPasswordText: {
    fontSize: 13,
    color: bgColor.primary_color,
  },
  button: {
    width: windowWidth - 100,
    backgroundColor: bgColor.primary_color,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2.62,
    elevation: 3,
    marginVertical: 10,
    top: -10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  orContinueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 0,
    top: -10,
  },
  line: {
    height: 1,
    bottom: 20,
    width: 60,
    backgroundColor: '#BCBCBC',
  },
  orContinueText: {
    fontSize: 12,
    color: '#BCBCBC',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 0,
    padding: 0,
    top: -20,
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
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 40,
  },
  signupText: {
    fontSize: 12,
    color: 'black',
  },
  signupLink: {
    fontSize: 14,
    color: bgColor.primary_color,
    fontWeight: 'bold',
    marginHorizontal: 3,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    marginBottom: 5,
    fontSize: 12,
    left: 10,
  },
});
