import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import Lottie from 'lottie-react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import {
  Link as ReachLink,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import loadingAni from '../../assets/animations/loading.json';
import { auth } from '../../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const SignUpForm = () => {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log('New User', user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
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
    <Flex direction="column">
      <Flex justify="center" align="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading textAlign="center">Sign Up</Heading>
          <Flex direction="column" pt="1rem" gap="0.5rem">
            <Box>
              <FormLabel>Email address</FormLabel>
              <Input type="text" {...register('email', { required: true })} w="30rem" />
            </Box>
            <Box>
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register('password', { required: true })} />
            </Box>
            <HStack justify="space-between" pt="0.5rem">
              <Checkbox {...register('remember')}>Remember me</Checkbox>
              <Link as={ReachLink} to="/" _hover={{ textDecoration: 'none' }}>
                <Text textColor="blue.300">Forgot password</Text>
              </Link>
            </HStack>
            <Button w="full" type="submit" mt="0.5rem">
              Create Account
            </Button>
            {errors.email && <Text>Email field is required</Text>}
            {errors.password && <Text>Password field is required</Text>}
          </Flex>
        </form>
      </Flex>
      <VStack spacing="1rem" pt="1rem">
        <Button
          variant={'outline'}
          leftIcon={<FcGoogle />}
          onClick={GoogleLogin}
          w="100%"
        >
          <Center>
            <Text>Get access with Google</Text>
          </Center>
        </Button>
      </VStack>
    </Flex>
  );
};
