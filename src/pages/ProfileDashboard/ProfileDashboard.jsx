import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure,
  useToast
} from '@chakra-ui/react';
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  sendEmailVerification,
  signOut,
} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
// eslint-disable-next-line
import { onAuthStateChanged, updateEmail } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { auth, db } from '../../Firebase';

export const ProfileDashboard = () => {
  const [user, loading] = useAuthState(auth);
  // eslint-disable-next-line
  const [emailChange, setEmailChange] = useState(false);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState({});
  const toast = useToast()

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const [overlay, setOverlay] = useState(<OverlayOne />);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { register: registerName, handleSubmit: handleNameChange } = useForm();

  // eslint-disable-next-line
  const userInfo = auth.currentUser;

  const onSubmit = data => {
    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      data.password
    );

    reauthenticateWithCredential(auth.currentUser, credential)
      .then(() => {
        // User re-authenticated.
        console.log('User re-authenticated');
        updateEmail(auth.currentUser, data.newEmail)
          .then(() => {
            // Email updated!
            console.log('Email updated');
            setEmailChange(true);
          })
          .catch(error => {
            // An error occurred
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('ErrorCode Change Email', errorCode);
            console.log('ErrorMessage Change Email', errorMessage);

            // ...
          });
      })
      .catch(error => {
        // An error ocurred
        console.log(error);
      });
  };

  // const userRef = doc(db, 'users', userInfo?.uid);

  const onNameChange = async data => {
    const userRef = doc(db, 'users', userInfo?.uid);
    console.log('DATA', data);
    await updateDoc(userRef, {
      firstName: data?.firstName,
      lastName: data?.lastName,
    });
    setName({
      firstName: data?.firstName,
      lastName: data?.lastName,
    });
    toast({
      title: `Name Successfully Changed`,
      position: "top",
      isClosable: true,
      status: 'success',
    })
  };

  useEffect(() => {
    const getUserInfo = async userId => {
      getDoc(doc(db, 'users', userId))
        .then(resp => {
          setName(resp.data());
          setEmailChange(false);
        })
        .catch(err => {
          console.log(err);
        });
    };

    onAuthStateChanged(auth, currentUser => {
      getUserInfo(currentUser.uid);
    });
  }, [user]);

  if (loading && !user) {
    return (
      <Layout>
        <Flex justify="center" align="center" h="50vh">
          <Spinner />
        </Flex>
      </Layout>
    );
  } else if (!loading && !user) {
    return navigate('/account');
  }

  return !user ? null : (
    <Layout>
      <Flex justify="center" align="center" w="100%">
        <Flex
          direction="column"
          justify="flex-start"
          w="80%"
          pt="2rem"
          gap="0.5rem"
        >
          <Text fontSize="3xl" as="b">
            Welcome {name?.firstName} {name?.lastName}
          </Text>
          <Text fontWeight="semibold">{user?.email}</Text>
          {user?.emailVerified === false && (
            <Text>Please verify your email to be able to use EnhanceAI</Text>
          )}
          <Flex direction="column" pt="1rem" gap="0.5rem">
            <form onSubmit={handleNameChange(onNameChange)}>
              <Flex direction="column" gap="0.5rem">
                <Input
                  defaultValue={name?.firstName}
                  type="text"
                  {...registerName('firstName')}
                  w={['15rem', '15rem', '30rem']}
                />
                <Input
                  defaultValue={name?.lastName}
                  type="text"
                  {...registerName('lastName')}
                  w={['15rem', '15rem', '30rem']}
                />
                <Button
                  type="submit"
                  variant="outline"
                  w={['15rem', '15rem', '30rem']}
                >
                  Update Name
                </Button>
              </Flex>
            </form>
            {user?.emailVerified === false && (
              <Button
                w={['15rem', '15rem', '30rem']}
                onClick={() => {
                  sendEmailVerification(auth?.currentUser).then(() => {
                    // Email verification sent!
                    console.log('Email sent');
                  });
                }}
              >
                Resend Verification
              </Button>
            )}
            <Button
              w={['15rem', '15rem', '30rem']}
              onClick={() => {
                setOverlay(<OverlayOne />);
                onOpen();
              }}
            >
              Change Email
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    // Sign-out successful.
                    console.log('Successful Log');
                  })
                  .catch(error => {
                    // An error happened.
                    console.log(error);
                  });
              }}
              w={['15rem', '15rem', '30rem']}
            >
              Sign Out
            </Button>
            {errors.email && <Text>Email field is required</Text>}
            {errors.password && <Text>Password field is required</Text>}
          </Flex>
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalContent>
                <ModalHeader>Confirm change by logging in</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      {...register('email', { required: true })}
                      placeholder="Email"
                      type="text"
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input
                      {...register('password', { required: true })}
                      placeholder="Password"
                      type="password"
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>New Email</FormLabel>
                    <Input
                      {...register('newEmail', { required: true })}
                      placeholder="New Email"
                      type="text"
                    />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button type="submit" onClick={onClose}>
                    Change
                  </Button>
                </ModalFooter>
              </ModalContent>
            </form>
          </Modal>
        </Flex>
      </Flex>
    </Layout>
  );
};
