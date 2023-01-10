import {
  Button,
  Center,
  Flex,
  Heading,
  Text,
  VStack
} from '@chakra-ui/react';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import Lottie from 'lottie-react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate, useSearchParams } from 'react-router-dom';
import loadingAni from '../../assets/animations/loading.json';
import { auth } from '../../Firebase';

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
      <VStack spacing="1rem">
        <Heading textAlign="center">Enhance Your AI Experience</Heading>
        <Text align="center" px="1rem">
          Powered by OpenAI's state-of-the-art language model, you can trust
          EnhanceAI to deliver top-notch results every time.
        </Text>

        <Button
          
          variant={'outline'}
          leftIcon={<FcGoogle />}
          onClick={GoogleLogin}
        >
          <Center>
            <Text>Get access with Google</Text>
          </Center>
        </Button>
      </VStack>
    </Flex>
  );
};
