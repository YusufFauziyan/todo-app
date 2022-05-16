import * as React from "react";
import {
    View, 
    Text,
    TouchableOpacity
} from 'react-native'
import { Styles } from './Styles'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Detail({route, navigation}) {
    const {id, name} = route.params
    return(
        <View style={Styles.inputContainer}>
            <View style={Styles.inputWrapper}>
                <View>
                    <Text style={Styles.detailTitle}>Todo</Text>
                    <Text style={Styles.description}>{name}</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Edit', route.params)}>
                        <View style={Styles.inputSubmit}>
                            <Text style={Styles.inputText}>Edit
                                <Ionicons name='ios-pencil-sharp' style={{paddingLeft: 5}}/>
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}