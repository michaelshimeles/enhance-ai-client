import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Progress,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../Firebase';
import { Layout } from '../Layout/Layout';
import { useState } from 'react';

export const SignUpForm = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [errorMessage, setErrorMessage] = useState(null);

  // Sign in with google
  // const provider = new GoogleAuthProvider();

  // const GoogleLogin = async () => {
  //   try {
  //     await signInWithRedirect(auth, provider);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const database = collection(db, 'users');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const newData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    };

    // let res = await validate(data.email)
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(userCredential => {
        // Signed in
        // eslint-disable-next-line
        setDoc(doc(db, 'users', userCredential.user.uid), newData)
          .then(() => {
            console.log('Data sent to db');
          })
          .catch(error => {
            console.log(error.message);
          });

        sendEmailVerification(auth.currentUser).then(() => {
          // Email verification sent!
          console.log('Email sent');
        });
      })
      .catch(error => {
        setErrorMessage(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return loading && !user ? (
    <Layout>
      <Progress isIndeterminate size="xs" />
    </Layout>
  ) : !loading && user ? (
    navigate('/')
  ) : (
    <Flex direction="column">
      <Flex justify="center" align="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading textAlign="center">Sign Up</Heading>
          <Flex direction="column" pt="1rem" gap="0.5rem">
            <Box>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                {...register('firstName', { required: true })}
                w={['15rem', '15rem', '30rem']}
              />
            </Box>
            <Box>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                {...register('lastName', { required: true })}
                w={['15rem', '15rem', '30rem']}
              />
            </Box>
            <Box>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
                w={['15rem', '15rem', '30rem']}
              />
            </Box>
            <Box>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                {...register('password', { required: true })}
                w={['15rem', '15rem', '30rem']}
              />
            </Box>
            <Button w={['15rem', '15rem', '30rem']} type="submit" mt="0.5rem">
              Create Account
            </Button>
            {errors.email && <Text>Email field is required</Text>}
            {errors.password && <Text>Password field is required</Text>}
            {errorMessage?.code === "auth/email-already-in-use" && <Text>Email already in use. Please login</Text>}
          </Flex>
        </form>
      </Flex>
      {/* <VStack spacing="1rem" pt="1rem">
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
      </VStack> */}
    </Flex>
  );
};
