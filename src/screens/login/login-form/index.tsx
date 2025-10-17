import { AppButton } from "@/components/app-button";
import { Input } from "@/components/input";
import type { PublicStackParamsList } from "@/routes/public-routes";
import { useNavigation, type NavigationProp } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
export interface FormLoginParams {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormLoginParams>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const navigation = useNavigation<NavigationProp<PublicStackParamsList>>();

  const onSubmit = () => {};
  return (
    <>
      <Input
        control={control}
        name="email"
        label="EMAIL"
        placeholder="mail@example.br"
        leftIconName="mail-outline"
      />
      <Input
        control={control}
        name="password"
        label="SENHA"
        placeholder="Sua senha"
        leftIconName="lock-outline"
        secureTextEntry
      />

      <View className="flex-1 justify-between mt-8 mb-6 min-h-[250px]">
        <AppButton iconName="arrow-forward" onPress={handleSubmit(onSubmit)}>
          Login
        </AppButton>

        <View>
          <Text className="mb-6 text-gray-300 text-base">
            Ainda nao possui uma conta ?
          </Text>
          <AppButton
            onPress={() => navigation.navigate("register")}
            mode="outline"
            iconName="arrow-forward"
          >
            Cadastrar
          </AppButton>
        </View>
      </View>
    </>
  );
};
