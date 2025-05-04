import { Input, InputField } from "@/components/ui/input";
import { View } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query";
import api from "@/api/api";
import { setAuthToken } from "@/hooks/use-auth-token";


export function SignInForm() {

    const signInUserFormSchema = z.object({
        email: z.string().email("Email invalido").nonempty("Email is required"),
        password: z.string().nonempty("Password is required")
    })

    type signInUserFormType = z.infer<typeof signInUserFormSchema>

    const { control, handleSubmit: formHandleSubmit, formState: { errors } } = useForm<signInUserFormType>({
        resolver: zodResolver(signInUserFormSchema)
    });


    const { mutate: signIn } = useMutation({
        mutationFn: async (data: signInUserFormType) => {
            console.log("data mutation", data)
            return api.post("/auth/sign-in", data)
        },
        onSuccess: (data) => {
            console.log("on success", data)
            setAuthToken(data.data.access_token)
        },
        onError: (error) => {
            console.log("on error", error)
        }
    })

    async function handleSubmit(data: signInUserFormType) {
        console.log("data", data)
        const response = await signIn(data)
        console.log("response", response)

    }

    return (
        <View className="gap-2 m-4 items-center">
            <Text className="w-full ">Email</Text>
            <Controller
                control={control}
                name="email"
                rules={{
                    required: true
                }}
                render={({ field: { onChange, value } }) => (
                    <Input >
                        <InputField
                            type="text"
                            placeholder="Email"
                            onChangeText={onChange} value={value} />
                    </Input>
                )}
            />
            <Text className="w-full ">Senha</Text>
            <Controller
                control={control}
                name="password"
                rules={{
                    required: true
                }}
                render={({ field: { onChange, value } }) => (
                    <Input >
                        <InputField

                            type="password"
                            placeholder="Senha"
                            onChangeText={onChange} value={value} />
                    </Input>
                )}
            />
            {errors.email && <Text>{errors.email.message}</Text>}
            <Button
                className="w-fit "
                onPress={formHandleSubmit(handleSubmit)}>
                <ButtonText className="w-fit">Sign In</ButtonText>
            </Button>

        </View>
    )
}
