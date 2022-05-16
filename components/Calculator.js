import * as React from 'react'
import {
    View, 
    TouchableOpacity,
    Text
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

import { Styles } from './Styles'

export default function Calculator({navigation}) {

    const [count, setCount] = React.useState(0)

    const handleNumber = (value) => {
        if (count == 0) {
            return setCount(count + value)
        } else {
            return setCount ( count + '' + value)
        }
    }
    
    const clear = () => {
        setCount(0)
    }
    
    const result =() => {
        let total = eval(count)
        return setCount(total)
    }

    const del = () => {
        if (count.length > 0) {
            return setCount(count.slice(0, -1))
        } else {
            return setCount(0)
        }
    }

    return (
        <View style={{flex: 1,backgroundColor: '#212121'}}>
        <TouchableOpacity style={{
                top: 15,
                left: 10
        }} onPress={() => navigation.navigate('List')} >
            <Ionicons name='ios-arrow-back' style={{
                color: '#fff',
                fontSize: 30,
            }}/>
        </TouchableOpacity>
            <View style={{flex: 1}}>
                <Text style={Styles.number_total}>{count}</Text>
            </View>

            <View style={{paddingVertical: 25, backgroundColor: '#1A1A1A'}}>
                <View style={Styles.num_row}>
                    <TouchableOpacity style={{flex: 1 }} onPress={() => clear()}>
                        <Text style={Styles.number_grey}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}}>
                        <Text style={Styles.number_grey} onPress={() => del()}>⌫</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={() => handleNumber('%')}>
                        <Text style={Styles.number_grey}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={() => handleNumber('/')}>
                        <Text style={Styles.number_red}>/</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.num_row}>
                    <TouchableOpacity style={{flex: 1 }} onPress={() => handleNumber(7)}>
                        <Text style={Styles.number}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={() => handleNumber(8)}>
                        <Text style={Styles.number}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={() => handleNumber(9)}>
                        <Text style={Styles.number}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={() => handleNumber('*')}>
                        <Text style={Styles.number_red}>x</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.num_row}>
                    <TouchableOpacity style={{flex: 1 }} onPress={() => handleNumber(4)}>
                        <Text style={Styles.number}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={() => handleNumber(5)}>
                        <Text style={Styles.number}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={() => handleNumber(6)}>
                        <Text style={Styles.number}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={() => handleNumber('+')}>
                        <Text style={Styles.number_red}>+</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.num_row}>
                    <TouchableOpacity style={{flex: 1 }} onPress={() => handleNumber(1)}>
                        <Text style={Styles.number}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={() => handleNumber(2)}>
                        <Text style={Styles.number}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={() => handleNumber(3)}>
                        <Text style={Styles.number}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={() => handleNumber('-')}>
                        <Text style={Styles.number_red}>-</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.num_row}>
                    <TouchableOpacity style={{flex: 1 }} onPress={() => handleNumber('.')}>
                        <Text style={Styles.number_grey}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={() => handleNumber(0)}>
                        <Text style={Styles.number}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 2}} onPress={() => result()}>
                        <Text style={Styles.number_equal}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
