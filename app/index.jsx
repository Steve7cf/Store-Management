import {useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Home(){
    const router = useRouter()
    return(
            <View style={styles.container}>
                <StatusBar style="light"/>
                <View style={styles.wrapper}>
                <Text style={styles.intro}>Bazaar</Text>
                <Text style={styles.subIntro}>Let's Shop With You</Text>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.button} onPress={() => router.push("/sales")}>
                        <Text style={styles.btnText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
    },
    wrapper:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    intro:{
        color:"orange",
        fontSize:60,
        letterSpacing:5,
        textTransform:"capitalize"
    },
    subIntro:{
        color:"#f2f2f2",
        letterSpacing:2
    },
    btn:{
        backgroundColor:"black",
        height:150,
        justifyContent:"center",
        alignItems:"center"
    },
    button:{
        backgroundColor:"orange",
        width:250,
        padding:20,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
    },
    btnText:{
        color:"white",
        fontSize:25
    }
}
)