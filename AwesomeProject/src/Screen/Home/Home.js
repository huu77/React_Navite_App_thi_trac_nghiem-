import React from "react";
import { Button, View,Text } from "react-native";
import { styles } from "./style";
import LinearGradient from 'react-native-linear-gradient';
function HomeScreen({navigation}) {
    return (

      <View style={styles.container}>
         
       
  <LinearGradient
        colors={['#D3959B', '#BFE6BA']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <Text style={styles.textTitle}>WELLCOME TO MY APP</Text>
         <Button
          title="Go to Test"
          style={styles.buttonTest}
          onPress={() => navigation.navigate('Main')}
        />
      </LinearGradient>
    
      </View>
    );
  }
  export default HomeScreen;