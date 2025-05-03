import { Redirect, Stack } from "expo-router";

const loggedIn = false;

export default function LoggedInLayout() {
    if (!loggedIn) {
        return (
            <Redirect href="/auth/sign-in" />
        )
    }
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    );
}