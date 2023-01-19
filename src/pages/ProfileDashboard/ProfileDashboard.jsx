import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import { NavBar } from '../../components/NavBar/NavBar';
// eslint-disable-next-line
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { auth, db } from '../../Firebase';

export const ProfileDashboard = () => {
  const [profileInfo, setProfileInfo] = useState({});
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  useEffect(() => {
    const getUserInfo = async userId => {
      getDoc(doc(db, 'users', userId))
        .then(resp => {
          setProfileInfo(resp.data());
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
              <Button onClick={onOpen} w="20%">
                Save Changes
              </Button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    Are you sure you want to make these changes?
                  </ModalBody>

                  <ModalFooter>
                    <Button type="submit" variant="ghost" onClick={onClose}>
                      Save Changes
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Layout>
  );
};
