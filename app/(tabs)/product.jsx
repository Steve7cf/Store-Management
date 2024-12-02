import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, SafeAreaView} from "react-native";
import { StatusBar } from "expo-status-bar";

const testData = [
    {product:"Sugar", amount:"50kg", price:3000, time:"12/9/24"},
    {product:"Rice", amount:"100kg", price:1700, time:"1/9/24"},
    {product:"Beans", amount:"100kg", price:3000, time:"6/9/24"},
    {product:"Casava", amount:"100kg", price:1500, time:"11/9/24"},
    {product:"Maize", amount:"100kg", price:3000, time:"12/9/24"},
    {product:"Oil", amount:"50Litre", price:8500, time:"18/9/24"},
]

export default function ProductPage(){
    return(
        <View style={styles.container}>
            <StatusBar style="dark"/>
            <View style={styles.addSection}>
                <Text style={styles.headerText}>Add Products In Stock</Text>
                <TextInput placeholder="Product Name" style={styles.inputBox}/>
                <TextInput placeholder="Amount" style={styles.inputBox}/>
                <TextInput placeholder="Price" style={styles.inputBox}/>
                <TouchableOpacity style={styles.btn}><Text>Add To Stock</Text></TouchableOpacity>
            </View>
            <View style={styles.tableSection}>
                <Text style={styles.headerText}>In Stock</Text>
                <View style={styles.tableText}>
                    <Text>Product</Text>
                    <Text>Amount</Text>
                    <Text>Price</Text>
                    <Text>Time</Text>
                </View>
                <ScrollView>
                <View style={styles.productRow}>
                    <Text>Rice</Text>
                    <Text>100Kg</Text>
                    <Text>1700</Text>
                    <Text>12/9/24</Text>
                </View>
                <View style={styles.productRow}>
                    <Text>Rice</Text>
                    <Text>100Kg</Text>
                    <Text>1700</Text>
                    <Text>12/9/24</Text>
                </View>
                <View style={styles.productRow}>
                    <Text>Rice</Text>
                    <Text>100Kg</Text>
                    <Text>1700</Text>
                    <Text>12/9/24</Text>
                </View>
                <View style={styles.productRow}>
                    <Text>Rice</Text>
                    <Text>100Kg</Text>
                    <Text>1700</Text>
                    <Text>12/9/24</Text>
                </View>
                <View style={styles.productRow}>
                    <Text>Rice</Text>
                    <Text>100Kg</Text>
                    <Text>1700</Text>
                    <Text>12/9/24</Text>
                </View>
                <View style={styles.productRow}>
                    <Text>Rice</Text>
                    <Text>100Kg</Text>
                    <Text>1700</Text>
                    <Text>12/9/24</Text>
                </View>
                <View style={styles.productRow}>
                    <Text>Rice</Text>
                    <Text>100Kg</Text>
                    <Text>1700</Text>
                    <Text>12/9/24</Text>
                </View>
                </ScrollView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    headerText:{
        fontSize:25,
        margin:10
    },
    container:{
        flex:1,
        flexDirection:"column",
        display:"flex",
        backgroundColor:"white"
    },
    addSection:{
        height:400,
        backgroundColor:"white",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    btn:{
        width:300,
        backgroundColor:"orange",
        padding:15,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        marginTop:20
    },
    inputBox:{
        padding:10,
        width:350,
        borderWidth:0.5,
        borderColor:"gray",
        marginTop:10,
        textAlign:"center",
        borderRadius:10
    },
    tableSection:{
        flex:1,
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    tableText:{
        width:370,
        backgroundColor:"#f3f3f3",
        height:50,
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row",
        borderRadius:10
    },
    productRow:{
        width:370,
        backgroundColor:"white",
        height:50,
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row",
        borderRadius:10
    }
})