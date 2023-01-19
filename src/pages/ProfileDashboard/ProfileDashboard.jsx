import { Button, Heading, Progress, Text, VStack } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import { NavBar } from '../../components/NavBar/NavBar';
// eslint-disable-next-line
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { auth, db } from '../../Firebase';

export const ProfileDashboard = () => {
  const [profileInfo, setProfileInfo] = useState({});
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

  useEffect(() => {
    const getUserInfo = async () => {
      getDoc(doc(db, 'users', user?.uid))
        .then(resp => {
          setProfileInfo(resp.data())
        })
        .catch(err => {
          console.log(err);
        });
    };
    getUserInfo();
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
      <VStack>
        <Heading>Welcome {profileInfo.firstName}</Heading>
        <Text>Email: {profileInfo.email}</Text>
        <Button
          onClick={() => {
            signOut(auth)
              .then(() => {
                // Sign-out successful.
                console.log('Successful Logout');
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
