import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { View } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"


export function SignUpForm() {

    const signInUserFormSchema = z.object({
        email: z.string().email("Email invalido").nonempty("Email is required"),
        password: z.string().nonempty("Password is required"),
        confirmPassword: z.string().nonempty("Password is required")
    }).refine(({ password, confirmPassword }) => {
        return password === confirmPassword
    }, {
        message: "Password doens't match",
        path: ['confirmPassword']
    })

    type signInUserFormType = z.infer<typeof signInUserFormSchema>

    const { control, handleSubmit, formState: { errors }, watch } = useForm<signInUserFormType>({
        resolver: zodResolver(signInUserFormSchema)
    });

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <View>
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
            <Controller
                control={control}
                name="confirmPassword"
                rules={{
                    required: true
                }}
                render={({ field: { onChange, value } }) => (
                    <Input >
                        <InputField

                            type="password"
                            placeholder="Repita sua senha"
                            onChangeText={onChange} value={value} />
                    </Input>
                )}
            />
            {errors.confirmPassword && <Text>{errors.confirmPassword.message}</Text>}
            {errors.email && <Text>{errors.email.message}</Text>}
            <Button onPress={handleSubmit(onSubmit)}>
                <ButtonText>Sign In</ButtonText>
            </Button>

        </View>
    )
}
