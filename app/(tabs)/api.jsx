import {View, Text, ActivityIndicator, ScrollView, StyleSheet} from "react-native";
import{useEffect, useState} from "react";




function ApiRequest(){
    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        // fetch("https://fakestoreapi.com/products")
        fetch("http://192.168.86.118:3000/")
        .then(response => {
            if(!response){
                alert("Error fetching data");
            }
            return response.json();
        })
        .then(data => {
            setData(JSON.stringify(data));
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
    }, []);

        if(loading){
            return <ActivityIndicator size={35} color={"green"}/>
        }


        if(error){
            return <Text style={{color:"red"}}>{error.message}</Text>
        }

    return(
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.res}>{data}</Text>
            </ScrollView>
        </View>
    )
}

export default ApiRequest

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"transparent",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        marginTop:40
    },
    res:{
        fontSize:34,
        color:"green"
    }
})