import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    box:{
        padding: '5%',
        backgroundColor: 'white',
        marginTop:10,
        borderRadius:15,
        flexDirection:'row',
    },
    box2:{
        padding: '1%',
        width:'85%',
        marginLeft:'2%',
    },
    box3:{
        marginTop: '2%',
        flexDirection:'row',
    },
    image:{
        width:50,
        height:50,
        borderRadius:10,
        alignSelf:'center',
    },
    title:{
       fontSize:15,
       fontWeight:'650',
    },
    button:{
        marginLeft:'auto',
        marginRight:'5%',
        width:'30%',
    }
})

export default style