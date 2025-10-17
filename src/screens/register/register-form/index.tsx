import { AppButton } from "@/components/app-button";
import { Input } from "@/components/input";
import type { PublicStackParamsList } from "@/routes/public-routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation, type NavigationProp } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { schema } from "./ schame";

interface FormRegisterParams {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm = ({}) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormRegisterParams>({
    defaultValues: {
      name: "",
      confirmPassword: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const navigation = useNavigation<NavigationProp<PublicStackParamsList>>();

  return (
    <>
      <Input
        control={control}
        name="name"
        leftIconName="person"
        label="NOME"
        placeholder="Seu nome"
      />
      <Input
        control={control}
        name="email"
        leftIconName="mail-outline"
        label="EMAIL"
        placeholder="mail@example.com"
      />
      <Input
        control={control}
        name="password"
        leftIconName="mail-outline"
        label="SENHA"
        placeholder="Confirme sua senha"
        secureTextEntry
      />

      <View className="flex-1 justify-between mt-8 mb-6 min-h-[250px]">
        <AppButton iconName="arrow-forward">Cadastrar</AppButton>

        <View>
          <Text className="mb-6 text-gray-300 text-base">
            Ja possui uma conta ?
          </Text>
          <AppButton
            onPress={() => navigation.navigate("login")}
            mode="outline"
            iconName="arrow-forward"
          >
            Acessar
          </AppButton>
        </View>
      </View>
    </>
  );
};
