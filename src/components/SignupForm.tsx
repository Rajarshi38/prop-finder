import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerUser } from "../service/service";
import { useSetAtom } from "jotai";
import userAtom from "../store/userAtom";

type SignupValues = {
  name: string;
  email: string;
  password: string;
};

const SignupForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignupValues>();
  const setUser = useSetAtom(userAtom);

  const onSubmit: SubmitHandler<SignupValues> = async (data) => {
    const { name, email, password } = data;
    const user = await registerUser({ name, email, password });
    setUser(user);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="4">
        <FormControl isInvalid={!!errors?.name}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: true })}
          />
        </FormControl>
        <FormControl isInvalid={!!errors?.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
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

        <Button type="submit" colorScheme="teal" my="4">
          Register
        </Button>
      </Flex>
    </form>
  );
};

export default SignupForm;
