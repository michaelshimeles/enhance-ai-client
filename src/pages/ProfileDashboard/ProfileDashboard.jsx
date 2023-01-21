import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Progress,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import { NavBar } from '../../components/NavBar/NavBar';
// eslint-disable-next-line
import { onAuthStateChanged, updateEmail } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { auth, db } from '../../Firebase';

export const ProfileDashboard = () => {
  const [profileInfo, setProfileInfo] = useState({});
  const [user, loading] = useAuthState(auth);
  const [emailChange, setEmailChange] = useState(false);
  const navigate = useNavigate();
  const { onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    updateEmail(auth.currentUser, data.email)
      .then(() => {
        // Email updated!
        console.log('Email updated');
        setEmailChange(true);
      })
      .catch(error => {
        // An error occurred
        // ...
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
      <Layout>
        <Progress size="xs" isIndeterminate />
      </Layout>
    );
  } else if (!loading && !user) {
    return navigate('/account');
  }

  return !user ? null : (
    <Layout>
      <NavBar />
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

          <Text>Email: {user?.email}</Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction="column" pt="1rem" gap="0.5rem">
              {/* <Box>
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
              </Box> */}
              <Box>
                <FormLabel>Email</FormLabel>

                <Input
                  type="text"
                  {...register('email', { required: true })}
                  w={['15rem', '15rem', '30rem']}
                />
              </Box>
              <Button type="submit" w="20%">
                Save Changes
              </Button>
              <Button
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
                w="20%"
              >
                Sign Out
              </Button>
              {errors.email && <Text>Email field is required</Text>}
              {errors.password && <Text>Password field is required</Text>}
            </Flex>
          </form>
        </Flex>
      </Flex>
      <Modal isOpen={emailChange} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Email has been changed</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Email has been changed. Congrats Mike it works.</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Layout>
  );
};
