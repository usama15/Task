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
        width:'75%',
        marginLeft:'2%',
    },
    box3:{
        marginTop: '2%',
        flexDirection:'row',
    },
    image:{
        width:100,
        height:100,
        borderRadius:10,
    },
    title:{
       fontSize:17,
       fontWeight:'650',
    },
    categoryHead:{
        marginRight:5,
    },
    categoryBody:{
        color:'gray'
    },
    button:{
        marginLeft:'auto',
        marginRight:'5%',
        width:'25%',
    }
})

export default style