import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
    },
    header: {
        fontSize: 24,
        fontWeight: '700',
    },
    text: {
        color: 'blue',
        fontSize: 20,
    }

});

const Main = () => {
    return(
        <View style= {styles.container}>
            <View>
                <Text style={styles.header}> Rate Repository Application </Text>
            </View>
            <View >  
                <RepositoryList />
            </View>
        </View>
        
    )
};



export default Main;