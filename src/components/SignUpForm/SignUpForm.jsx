import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { auth } from '../../Firebase';
import Lottie from 'lottie-react';
import loadingAni from '../../assets/animations/loading.json';

export const SignUpForm = () => {
  // const { register, handleSubmit } = useForm();
  // const onSubmit = data => console.log(data);
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  // Sign in with google
  const provider = new GoogleAuthProvider();

  const [searchParams] = useSearchParams();
  const returnUrl = searchParams.get('returnUrl');

  const GoogleLogin = async () => {
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate(returnUrl || '/dashboard');
    }
    // eslint-disable-next-line
  }, [user]);

  return loading && !user ? (
    <>
      <Lottie animationData={loadingAni} />
    </>
  ) : !loading && user ? null : (
    <Flex>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <VStack spacing="1rem">
        <Heading textAlign="center">Enhance Your AI Experience</Heading>
        <Text align="center" w="80rem">
          Powered by OpenAI's state-of-the-art language model, you can trust
          EnhanceAI to deliver top-notch results every time.
        </Text>
        <Box pt="1rem" w="30rem">
          {/* <FormLabel pt="1rem">First Name</FormLabel>
          <Input {...register('firstname')} />
          <FormLabel pt="1rem">Last Name</FormLabel>
          <Input {...register('lastname')} />
          <FormLabel pt="1rem">Email address</FormLabel>
          <Input {...register('email')} />
          <FormLabel pt="1rem">Password</FormLabel>
          <Input {...register('password')} />
          <Button w="full" type="submit" my="1rem">
            Login
          </Button> */}
          <Button
            w={'full'}
            variant={'outline'}
            leftIcon={<FcGoogle />}
            onClick={GoogleLogin}
          >
            <Center>
              <Text>Get access with Google</Text>
            </Center>
          </Button>
        </Box>
      </VStack>
      {/* </form> */}
    </Flex>
  );
};
