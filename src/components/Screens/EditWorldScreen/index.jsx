import React, {useContext} from 'react'
import { Text, View, Button, StyleSheet, Image } from 'react-native'


const EditWorldScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Button title='Save'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      paddingHorizontal: 20,
      backgroundColor: '#F9FBFC',

    },
    pic: {
        width: 42,
        height: 42,
        borderRadius: 21,
        alignSelf: 'flex-end'
    },
    title: {
      fontWeight: 'bold',
      fontSize: 'xx-large',
      color: 'cornflowerblue',
      marginBottom: 35,
      marginTop: 10,
    },
});

export default EditWorldScreen