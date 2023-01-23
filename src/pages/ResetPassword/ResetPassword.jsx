import { Button, Flex, Heading, Input, Text, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Layout } from '../../components/Layout/Layout';
import { verifyPasswordResetCode, confirmPasswordReset } from 'firebase/auth';
import { useParams, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase';

export const ResetPassword = () => {
  // eslint-disable-next-line
  const { mode, actionCode, continueUrl, lang } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (mode !== 'resetPassword') {
    return navigate('/');
  }

  const onSubmit = data => {
    console.log(data);
    verifyPasswordResetCode(auth, actionCode)
      .then(() => {
        // const accountEmail = email;

        // TODO: Show the reset screen with the user's email and ask the user for
        // the new password.
        const newPassword = data.password;

        // Save the new password.
        confirmPasswordReset(auth, actionCode, newPassword)
          .then(resp => {
            console.log('Confirm Password Reset Response', resp);
            if (!resp) {
              toast({
                title: 'It didnt work',
                description:
                  'Hit up Michael or Zain (Actually dont bother). Nigga',
                status: 'error',
                isClosable: true,
              });
              return;
            }
            toast({
              title: 'Password has been reset',
              description: 'Please login with new password',
              status: 'success',
              isClosable: true,
            });
            // Password reset has been confirmed and new password updated.
            // TODO: Display a link back to the app, or sign-in the user directly
            // if the page belongs to the same domain as the app:
            // auth.signInWithEmailAndPassword(accountEmail, newPassword);
            // TODO: If a continue URL is available, display a button which on
            // click redirects the user back to the app via continueUrl with
            // additional state determined from that URL's parameters.
            navigate(continueUrl);
          })
          .catch(error => {
            // Error occurred during confirmation. The code might have expired or the
            // password is too weak.
            console.log(error);
          });
      })
      .catch(error => {
        // Invalid or expired action code. Ask user to try to reset the password
        // again.
      });
  };

  // Pull query params from redirect link

  // onSubmit import { verifyPasswordResetCode, confirmPasswordReset } from "firebase/auth";

  return (
    <Layout>
      <Flex direction="column" pt="3rem">
        <Flex justify="center" align="center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Heading textAlign="center">Reset Password</Heading>
            <Flex direction="column" pt="1rem" gap="0.5rem">
              <Input
                type="text"
                {...register('password', { required: true })}
                w={['15rem', '15rem', '30rem']}
              />
              <Button w={['15rem', '15rem', '30rem']} type="submit" mt="0.5rem">
                Confirm New Password
              </Button>
              {errors.password && <Text>Password field is required</Text>}
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Layout>
  );
};
