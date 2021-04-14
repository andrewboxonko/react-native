import React, { useState } from 'react';
import {View, TextInput} from "react-native";
import styles from './Search.style'
import SearchIcon from '../../assets/icons/search_black_24dp.svg'

const Search = () => {
    const [text, setText] = useState('');

    return (
        <View style={styles.searchSection}>
            <TextInput
                style={styles.input}
                placeholder='Enter the name of the city'
                placeholderTextColor={'#8B8EA5'}
                onChangeText={text => setText(text)}
                value={text}
                maxLength={30}
            />
            <SearchIcon width={40} height={40} fill={"white"} />
        </View>
    )
}

export default Search