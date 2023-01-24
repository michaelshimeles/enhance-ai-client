import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay, Spinner,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  signOut
} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
// eslint-disable-next-line
import { onAuthStateChanged, updateEmail } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { auth, db } from '../../Firebase';

export const ProfileDashboard = () => {
  const [profileInfo, setProfileInfo] = useState({});
  const [user, loading] = useAuthState(auth);
  // eslint-disable-next-line
  const [emailChange, setEmailChange] = useState(false);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  // eslint-disable-next-line
  const userInfo = auth.currentUser;

  const onSubmit = data => {
    console.log(data);
    // console.log('auth.currentUser.email', auth.currentUser.email);

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

  useEffect(() => {
    const getUserInfo = async userId => {
      getDoc(doc(db, 'users', userId))
        .then(resp => {
          setProfileInfo(resp.data());
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
      <Flex justify="center" align="center" h="50vh">
        <Spinner />
      </Flex>
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
          <Heading>
            Welcome {profileInfo?.firstName} {profileInfo?.lastName}
          </Heading>

          <Text fontWeight="semibold">{user?.email}</Text>
          <Flex direction="column" pt="1rem" gap="0.5rem">
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
