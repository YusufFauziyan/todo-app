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

export default function Update({route, navigation}) {
    console.log(route.params);
    const {_id, name} = route.params

    const [title, setTitle] = React.useState('')

    const handleUpdate = async(_id) => {
        const response = await api.patch(`/${_id}`, {
            name: title
        })
        console.log(response.data);
        setTitle('')
        navigation.navigate('List')
        alert('Success update task!')
    }

    return(
        <View style={Styles.inputContainer}>
            <View style={Styles.inputWrapper}>
                <View>
                    <Text style={Styles.inputSectionTitle}>Task</Text>
                    <TextInput 
                        style={Styles.titleInput} 
                        placeholder={name}
                        value={title}
                        onChangeText={text => setTitle(text)}
                    />
                </View>
            </View>
            <TouchableOpacity onPress={() => handleUpdate(_id)}>
                <View style={Styles.inputSubmit}>
                    <Text style={Styles.inputText}>Update
                        <Ionicons name='ios-send' style={{paddingLeft: 5}}/>
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}