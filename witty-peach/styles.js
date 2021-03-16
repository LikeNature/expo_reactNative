import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    button: {
        flex:1, 
    },
    title: {
        fontSize: 15,
      },
  });

export default styles;