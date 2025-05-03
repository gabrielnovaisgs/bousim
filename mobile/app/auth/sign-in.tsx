
import { SignInForm } from "@/components/auth/sign-in-form";
import { Link } from "expo-router";
import { View } from "react-native";
import { Text } from "@/components/ui/text";
export default function SignIn() {
    return (
        <View>
            <SignInForm />

            <Text>Ainda não possui uma conta?
                <Link href={"/auth/sign-up"}>Cadastre-se</Link>
            </Text>
        </View>
    )
}