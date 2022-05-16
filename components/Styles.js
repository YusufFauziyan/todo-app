import {StyleSheet} from 'react-native'
export const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#27272a',
    },
    taskWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
  
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fafafa'
    },
    items: {
      marginTop: 30
    },
    writeTaskWrapper: {
      position: 'fixed',
      bottom: 20,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingRight: 20
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#f4f4f5',
      borderRadius: 60,
      width: 250,
      borderColor: '#C0C0C0',
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#71717a',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#3f3f46',
      borderWidth: 1,
    },
    addText: {
        color: '#fff'
    },
    item: {
        backgroundColor: '#3f3f46',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#55BCF6",
        opacity: .5,
        borderRadius: 5,
        marginRight: 15

    },
    itemText: {
        color: '#fafafa',
        maxWidth: '80%'
    },  
    circle: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5
    },
    inputContainer: {
      flex: 1,
      backgroundColor: '#27272a',
      paddingHorizontal: 15,
  },
  inputWrapper: {
      paddingTop: 30
  },
  inputSectionTitle: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      paddingBottom: 10,
  },
  titleInput: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#f4f4f5',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      width: '100%',
      textAlign: 'center'
  },
  inputSectionTask: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      paddingBottom: 10,
      marginTop: 30
  },
  textArea: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#f4f4f5',
      borderRadius: 10,
      borderColor: '#C0C0C0',
      width: '100%',
      textAlign: 'center',
      height: 200
  },
  inputSubmit: {
      width: 90,
      height: 30,
      backgroundColor: '#71717a',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#3f3f46',
      borderWidth: 1,
      marginTop: 30,
      marginLeft: 'auto'
  },
  inputText: {
      color: '#fff',
      fontWeight: 'bold'
  },
  detailTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    textAlign: 'center',
    marginBottom: 30
  },
  description: {
      color: '#fff',
      textAlign: 'justify',
  }
  });


  