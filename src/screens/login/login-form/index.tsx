import { AppButton } from "@/components/app-button";
import { Input } from "@/components/input";
import { useForm } from "react-hook-form";

export interface FormLoginParams {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormLoginParams>();

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

      <AppButton mode="outline" iconName="arrow-forward">
        Login
      </AppButton>
    </>
  );
};
