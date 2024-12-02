import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BottomTab(){
    return(
        <Tabs screenOptions={{headerShown:false, tabBarActiveTintColor:"orange"}}>

                <Tabs.Screen name="dashboard" options={{
                tabBarLabel: "Dashboard",
                tabBarIcon:({color}) =>(
                    <MaterialCommunityIcons
                    name="compass"
                    size={24}
                    color={color }
                    />
                )
                }}/>

                <Tabs.Screen name="sales" options={{
                tabBarLabel: "Sales",
                tabBarIcon:({color}) =>(
                    <MaterialCommunityIcons
                    name="cash-multiple"
                    size={24}
                    color={color }
                    />
                )
                }}/>

                <Tabs.Screen name="debt" options={{
                tabBarLabel: "Debt",
                tabBarIcon:({color}) =>(
                    <MaterialCommunityIcons
                    name="bookshelf"
                    size={24}
                    color={color }
                    />
                )
                }}/>

                <Tabs.Screen name="product" options={{
                tabBarLabel: "Products",
                tabBarIcon:({color}) =>(
                    <MaterialCommunityIcons
                    name="table-account"
                    size={24}
                    color={color }
                    />
                )
                }}/>
        </Tabs>
    )
}