import * as React from 'react'
import { 
    Text, 
    View, 
    TouchableOpacity, 
} from 'react-native';
import {Styles} from './Styles'
import {api} from '../core/api';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function List({navigation}) {
  const [task, setTask] = React.useState([])

  const getData = () => {
    api.get('/')
    .then((res) => { 
      setTask(res.data)
    })
  }

  React.useEffect(() => {
    getData()
  },[task])
  
  const deleteData = async (_id) => {
    await api.delete(`/${_id}`)
    getData()
  }
  

  return (
    <View style={Styles.container} >
    
      <View style={Styles.taskWrapper}>
      <TouchableOpacity onPress={() => navigation.navigate('Calculator')} style={{          
          position: 'absolute',
          top: 40,
          right: 20}}>
        <Ionicons name='ios-calculator' style={{
          fontSize: 30,
          color: '#fff',
        }}/>
      </TouchableOpacity>
        <Text style={Styles.sectionTitle}>Today's task</Text>
          <View style={Styles.items}>
          {
            task.length > 0 ?
            task.map(item => (
              <TouchableOpacity style={Styles.item} onPress={() => navigation.navigate('Detail', item)}>
                <View style={Styles.itemLeft}>
                  <TouchableOpacity TouchableOpacity style={Styles.square}></TouchableOpacity>
                  <Text style={Styles.itemText}>{item.name.slice(0,20)}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <TouchableOpacity key={item._id} onPress={() => navigation.navigate(`Edit`, item)} >
                    <Ionicons name='ios-pencil-sharp' style={{
                      color: 'white', 
                      fontSize: 18
                      }}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => deleteData(item._id)}>
                    <Ionicons name='ios-trash-outline' style={{
                      color: 'white', 
                      paddingLeft: 20,
                      fontSize: 18
                      }}/>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )) :
            <Text style={Styles.addText}>No Activities Found</Text>
            
          }
        </View>
      </View>
      

      <View style={Styles.writeTaskWrapper}> 
        <TouchableOpacity onPress={() => navigation.navigate('Input', task)}>
          <View style={Styles.addWrapper}>
            <Text style={Styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}

