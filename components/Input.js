import * as React from "react";
import {
    View, 
    TextInput, 
    Text,
    TouchableOpacity
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Styles } from './Styles'
import {api} from "../core/api";

export default function input({navigation, route}) {
    console.log(route);
    const [title, setTitle] = React.useState("")

    const handleSubmit = async() => {
        const response = await api.post('/', {
            name: title
        })
        setTitle('')
        navigation.navigate("List")
        alert('Success add task!')
    }

    return(
        <View style={Styles.inputContainer}>
            <View style={Styles.inputWrapper}>
                <View>
                    <Text style={Styles.inputSectionTitle}>Task</Text>
                    <TextInput 
                        style={Styles.titleInput} 
                        placeholder={'Write a task'}
                        value={title}
                        onChangeText={text => setTitle(text)}
                    />
                </View>
            </View>
            <TouchableOpacity onPress={(e) => handleSubmit(e.preventDefault()) }>
                <View style={Styles.inputSubmit}>
                    <Text style={Styles.inputText}>Submit
                        <Ionicons name='ios-send' style={{paddingLeft: 5}}/>
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}