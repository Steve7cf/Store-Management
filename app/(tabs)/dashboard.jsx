import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Dashboard(){
    return(
        <View style={styles.container}>
            <ScrollView style={{flex:1}}>
            <View style={styles.card}>
                <View style={styles.cardTitle}>
                <MaterialCommunityIcons name="cash-multiple" size={35} color="#949494"/>
                <Text style={styles.cardText}>Sales</Text>
                </View>
                <View style={styles.income}>
                    <View style={styles.incomePart}>
                        <View style={styles.incomeText}><Text>year</Text><Text>4000,000</Text></View>
                        <View style={styles.incomeText}><Text>Month</Text><Text>1200,000</Text></View>
                        <View style={styles.incomeText}><Text>Week</Text><Text>300,000</Text></View>
                        <View style={styles.incomeText}><Text>Day</Text><Text>110,000</Text></View>
                    </View>
                </View>
                <View>
                    
                </View>
            </View>
            <View style={styles.card}>
            <View style={styles.cardTitle}>
                <MaterialCommunityIcons name="bookshelf" size={35} color="#949494"/>
                <Text style={styles.cardText}>Debt</Text>
                </View>
                <View style={styles.income}>
                    <View style={styles.incomePart}>
                        <View style={styles.incomeText}><Text>Paid</Text><Text>100,000</Text></View>
                        <View style={styles.incomeText}><Text>Not Paid</Text><Text>130,000</Text></View>
                        <View style={styles.incomeText}><Text>Pending</Text><Text>300,000</Text></View>
                        <View style={styles.incomeText}><Text>Total</Text><Text>700,000</Text></View>
                    </View>
                </View>
            </View>
            <View style={styles.card}>
            <View style={styles.cardTitle}>
                <MaterialCommunityIcons name="table-account" size={35} color="#949494"/>
                <Text style={styles.cardText}>Products</Text>
                </View>
                <View style={styles.income}>
                    <View style={styles.incomePart}>
                        <View style={styles.incomeText}><Text>In Stock</Text><Text>30</Text></View>
                        <View style={styles.incomeText}><Text>Pending</Text><Text>10</Text></View>
                        <View style={styles.incomeText}><Text>Out Of Stock</Text><Text>5</Text></View>
                    </View>
                </View>
            </View>
            <View style={styles.card}>
            <View style={styles.cardTitle}>
                <MaterialCommunityIcons name="graph" size={35} color="#949494"/>
                <Text style={styles.cardText}>Trends</Text>
                </View>
                <View style={styles.income}>
                    <View style={styles.incomePart}>
                        <View style={styles.incomeText}><Text>Sales</Text><Text>500,000/Year</Text></View>
                        <View style={styles.incomeText}><Text>Debts</Text><Text>300,000/Year</Text></View>
                        <View style={styles.incomeText}><Text>In Stock</Text><Text>56/Year</Text></View>
                    </View>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"transparent",
        flex:1,
        display:'flex',
        justifyContent:"space-evenly",
        alignItems:"center",
        marginTop:30
    },
    card:{
        backgroundColor:"#E0E0E0",
        height:200,
        width:350,
        margin:10,
        borderRadius:20,
        padding:10,
    },
    cardTitle:{
        width:"100%",
        backgroundColor:"#f2f2f2",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        height:80,
        borderRadius:20,
        gap:15
    },
    cardText:{
        fontSize:32,
        fontFamily:"sans-serif",
        color:"#949494"
    },
    income:{
        width:"100%",
        backgroundColor:"transparent",
        borderRadius:0,
        height:100,
        marginTop:5,
    },
    incomePart:{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"transparent",
        height:"100%",
        width:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"center",
        paddingHorizontal:20
    },
    incomeText:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        padding:2,
        color:"#2c2c2c"
    }
})