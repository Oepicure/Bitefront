import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
      backgroundColor: '#d4d4d4'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    row: {
      flexDirection: 'row',
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    space: {
      justifyContent: 'space-between'
    },
    padding: {
      padding: 8,
    },
    paddingSmall: {
      padding: 3,
    },
    marginSmall: {
      margin: 8,
    },
    paddingTopBottom: {
      paddingTop: 10,
      paddingBottom: 10,
    },
    left: {
      justifyContent: 'flex-start'
    },
    right: {
      justifyContent: 'flex-end'
    },
    headercontainer: {
      flex: 1,
      width: '100%',      
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
      letterSpacing: 1,
    },
    menuicon: {
      marginLeft: 10,
      marginRight: 10,
    },
    profilephoto: {
      height: 40,
      width: 40,
    },
    profilephotoLarge: {
      height: 70,
      width: 70,
    },
    listsphoto: {
      width: '100%',
      height: 200,
    },
    restaurantPhotos: {
      width: '100%',
      height: 120,
    },
    listphoto: {
      width: 200,
      height: 110,
    },
    listPhotoRound: {
      width: 110,
      height: 110,
      borderRadius: 110/2,
    },
    bold: {
      fontWeight: 'bold',
    },
    grey: {
      color: 'grey',
      fontSize: 11,
      fontStyle: 'italic',
    },
    greySmall: {
      color: 'silver',
      fontStyle: 'italic',
      fontSize: 10,
    },
    italic: {
      color: 'black',
      fontStyle: 'italic',
      fontSize: 10,
    },
    adresseText: {
      fontSize: 14,
      color: 'grey',
      padding: 2,
    },
    textHeadline: {
      fontSize: 17,
    },
    textHeadlineLarge: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'grey', 
      marginTop: 10,
    },
    textTab: {
      fontSize: 11,
      padding: 5,
      textAlign: 'center',
    },
    border: {
      padding: 15,
      width: '80%',
      height: 160,
      borderColor: '#d3d3d3',
      borderWidth: 1,
      alignItems: 'center',
      textAlign: 'auto'
    },
    input: {
      width: '90%',
      margin: 15,
      marginTop: 15,
      padding: 15,
      alignSelf: 'center',
      borderColor: '#d3d3d3',
      borderWidth: 1,
      fontSize: 16,
    },
    textInput: {
      marginTop: 20, 
      borderBottomColor: '#d3d3d3', 
      borderBottomWidth: 1, 
      padding: 10, 
      width: 400
    },
    button: {
      marginTop: 20,
      paddingVertical: 10,
      alignItems: 'center',
      borderColor: '#d3d3d3',
      borderWidth: 1,
      borderRadius: 5,
      width: 200,
    },
    uploadButton: {
      alignItems: 'center',
      borderColor: '#d3d3d3',
      borderWidth: 1,
      borderRadius: 20,
      padding: 35,
    }
  });

export default styles;