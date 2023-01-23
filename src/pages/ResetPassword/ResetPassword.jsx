import { Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Layout } from '../../components/Layout/Layout';

export const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Layout>
      <Flex direction="column" pt="3rem">
        <Flex justify="center" align="center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Heading textAlign="center">Reset Password</Heading>
            <Flex direction="column" pt="1rem" gap="0.5rem">
              <Input
                type="text"
                {...register('password', { required: true })}
                w={['15rem', '15rem', '30rem']}
              />
              <Button w={['15rem', '15rem', '30rem']} type="submit" mt="0.5rem">
                Confirm New Password
              </Button>
              {errors.password && <Text>Password field is required</Text>}
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Layout>
  );
};
