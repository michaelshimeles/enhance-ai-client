import { Button, Heading, Progress, VStack } from '@chakra-ui/react';
import { Layout } from '../../components/Layout/Layout';
import { NavBar } from '../../components/NavBar/NavBar';
import { auth } from '../../Firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line
import { useEffect } from 'react';

export const ProfileDashboard = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (loading && !user) {
  //     return (
  //       <Layout>
  //         <Progress size="xs" isIndeterminate />
  //       </Layout>
  //     );
  //   } else if (!loading && !user) {
  //     return navigate('/');
  //   }
  //   // eslint-disable-next-line
  // }, [user, loading]);

  if (loading && !user) {
    return (
      <Layout>
        <Progress size="xs" isIndeterminate />
      </Layout>
    );
  } else if (!loading && !user) {
    return navigate('/');
  }

  return !user ? null : (
    <Layout>
      <NavBar />
      <VStack>
        <Heading>Welcome {user.displayName}</Heading>
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
        >
          Sign Out
        </Button>
      </VStack>
    </Layout>
  );
};
