import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase';

export const LoginForm = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);
  const [loginInfo, setLoginInfo] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // onAuthStateChanged(auth, currentUser => {
  //   console.log(currentUser);
  // });

  const onSubmit = data => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(userCredential => {
        // Signed in
        // eslint-disable-next-line
        const user = userCredential.user;
        navigate('/');
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoginError(errorCode);
        console.log(error);
        console.log(errorMessage);
      });
  };

  const handleForgotEmail = e => {
    console.log(e.target.value);
    setLoginInfo(e.target.value);
  };

  const handleForgotSubmit = e => {
    e.preventDefault();
    sendPasswordResetEmail(auth, loginInfo, {
      url: `/login`,
    })
      .then(() => {
        // Password reset email sent!
        console.log('Password reset worked');
        // ..
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('ErrorCode Login', errorCode);
        console.log('ErrorMessage Login', errorMessage);
      });
  };

  return (
    <Flex justify="center" align="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading textAlign="center">Login</Heading>

        <Flex direction="column" pt="1rem" gap="0.5rem">
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
          <HStack justify="space-between" pt="0.5rem">
            <Button onClick={onOpen} variant="link">
              <Text textColor="blue.300">Forgot password</Text>
            </Button>
          </HStack>
          <Button w={['15rem', '15rem', '30rem']} type="submit" mt="0.5rem">
            Login
          </Button>
          {errors.email && <Text>Email field is required</Text>}
          {errors.password && <Text>Password field is required</Text>}
          {loginError === 'auth/user-not-found' && (
            <Text>User doesn't exist</Text>
          )}
          {loginError === 'auth/wrong-password' && (
            <Text>Password is incorrect</Text>
          )}
          {loginError?.includes('too-many-requests') && (
            <Text>
              Your account has been temporarily locked, try again later
            </Text>
          )}
        </Flex>
      </form>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleForgotSubmit}>
          <ModalContent>
            <ModalHeader>Forgot Password</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input onChange={handleForgotEmail} placeholder="Email" />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => {
                  onClose();
                  toast({
                    title: 'Password has been reset.',
                    description: 'Check your email to reset your password.',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  });
                }}
                type="submit"
                colorScheme="blue"
                mr={3}
              >
                Reset Password
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </Flex>
  );
};
