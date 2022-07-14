import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CreateAccount from "../../screens/Account/CreateAccount";

const Stack = createStackNavigator();
const CreateAccountStack = () =>{
    return (
        <Stack.Screen
            name='CreateAccount'
            component={CreateAccount}
        />
    );

} 

export default CreateAccountStack;