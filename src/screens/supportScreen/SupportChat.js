import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import HeaderWithArrow from '../../components/ArrowHeader';
import { bgColor } from '../../utils/colors/main_color';
import AsyncStorage from '@react-native-async-storage/async-storage';

const predefinedMessages = [
  "I have a question about my recent order. Can you provide me with an update on the progress?",
  "I'm experiencing an issue with downloading my translated documents. I need help.",
  "I need assistance with selecting the appropriate service for my specific translation needs!",
];

const SupportChat = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [showPredefinedMessages, setShowPredefinedMessages] = useState(true);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    loadMessages();
  }, []);

  const saveMessages = async (newMessages) => {
    try {
      await AsyncStorage.setItem('supportChatMessages', JSON.stringify(newMessages));
    } catch (e) {
      console.error('Failed to save messages.', e);
    }
  };

  const loadMessages = async () => {
    try {
      const savedMessages = await AsyncStorage.getItem('supportChatMessages');
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
        setShowPredefinedMessages(false);
      }
    } catch (e) {
      console.error('Failed to load messages.', e);
    }
  };

  const handleSendMessage = (message) => {
    if (message.trim()) {
      const newMessages = [...messages, { text: message, sender: 'user' }];
      setMessages(newMessages);
      saveMessages(newMessages);
      setShowPredefinedMessages(false);
      setInputText('');
    }
  };

  const handleClearChat = async () => {
    try {
      await AsyncStorage.removeItem('supportChatMessages');
      setMessages([]);
      setShowPredefinedMessages(true);
    } catch (e) {
      console.error('Failed to clear messages.', e);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 0 })}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <View style={styles.headerContainer}>
            <HeaderWithArrow
              arrowIcon={require('../../assets/backArrow.png')}
              headerContent="Chat with Support"
              onPressArrow={() => navigation.goBack()}
            />
            <TouchableOpacity onPress={handleClearChat} style={styles.clearButton}>
              <Text style={styles.clearButtonText}>Clear Chat</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            contentContainerStyle={styles.chatContainer}
            keyboardShouldPersistTaps="handled"
          >
            {showPredefinedMessages && (
              <View style={styles.predefinedMessagesContainer}>
                {predefinedMessages.map((message, index) => (
                  <TouchableOpacity key={index} onPress={() => handleSendMessage(message)}>
                    <View style={styles.predefinedMessage}>
                      <Text style={styles.predefinedText}>{message}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
            {messages.map((message, index) => (
              <View
                key={index}
                style={[
                  styles.messageContainer,
                  message.sender === 'user' && styles.userMessage
                ]}
              >
                <Text style={styles.messageText}>{message.text}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Ask me something..."
              placeholderTextColor="gray"
              value={inputText}
              onChangeText={setInputText}
              onSubmitEditing={() => handleSendMessage(inputText)}
            />
            <TouchableOpacity
              style={styles.sendButton}
              onPress={() => handleSendMessage(inputText)}
            >
              <Image source={require('../../assets/share.png')} style={styles.sendIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
    padding: 0,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButton: {
    padding: 5,
    bottom:20,
    left:-20,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
  },
  clearButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'red',
  },
  chatContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  predefinedMessagesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  predefinedMessage: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 15,
    marginBottom: 10,
    width: Dimensions.get('window').width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  predefinedText: {
    color: 'gray',
    opacity: 0.8,
    textAlign: 'center',
  },
  messageContainer: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: bgColor.secondary_color,
  },
  messageText: {
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#f9f9f9',
    backgroundColor: '#fff',
  },
  textInput: {
    flex: 1,
    height: 50,
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
  },
  sendButton: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: bgColor.primary_color,
  },
  sendIcon: {
    width: 25,
    height: 25,
    tintColor: '#fff',
  },
});

export default SupportChat;
