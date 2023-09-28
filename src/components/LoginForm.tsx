import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="4">
        <FormControl isInvalid={!!errors?.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            my="1px"
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
        </FormControl>
        <FormControl isInvalid={!!errors?.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" alignSelf="flex-start" my="4">
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export default LoginForm;
