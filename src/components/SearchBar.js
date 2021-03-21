import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';


const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
                style={styles.inputStyle}
                placeholder="Search"
                value = {term}
                autoCapitalize = 'none'
                autoCorrect = {false}
                onChangeText = {onTermChange}
                onEndEditing = {onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        margin: 5,
        flex:1,
        fontSize: 18
    },
    iconStyle: {
       fontSize: 32,
       marginHorizontal: 10,
       alignSelf: 'center'
    }

});

export default SearchBar;