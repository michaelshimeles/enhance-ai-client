import { Button, Flex, Heading, Input, Text, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Layout } from '../../components/Layout/Layout';
import {
  verifyPasswordResetCode,
  confirmPasswordReset,
  checkActionCode,
  applyActionCode,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase';
import { useQuery } from '../../utils/useQuery';

export const Action = () => {
  const query = useQuery();

  // eslint-disable-next-line
  //mode, actionCode, continueUrl, lang
  const mode = query.get('mode');
  const oobCode = query.get('oobCode');
  const continueUrl = query.get('continueUrl');

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
    switch (mode) {
      case 'resetPassword':
        // Display reset password handler and UI.
        verifyPasswordResetCode(auth, oobCode)
          .then(() => {
            // const accountEmail = email;

            // TODO: Show the reset screen with the user's email and ask the user for
            // the new password.
            const newPassword = data.password;

            // Save the new password.
            confirmPasswordReset(auth, oobCode, newPassword)
              .then(() => {
                // Password reset has been confirmed and new password updated.
                // TODO: Display a link back to the app, or sign-in the user directly
                // if the page belongs to the same domain as the app:
                // auth.signInWithEmailAndPassword(accountEmail, newPassword);
                // TODO: If a continue URL is available, display a button which on
                // click redirects the user back to the app via continueUrl with
                // additional state determined from that URL's parameters.
                window.location.replace(continueUrl);
              })
              .catch(error => {
                toast({
                  title: 'It didnt work',
                  description: 'Please try again later',
                  status: 'error',
                  isClosable: true,
                });
                // Error occurred during confirmation. The code might have expired or the
                // password is too weak.
                console.log(error);
              });
          })
          .catch(error => {
            // Invalid or expired action code. Ask user to try to reset the password
            // again.
          });
        break;
      case 'recoverEmail':
        // Display email recovery handler and UI.
        let restoredEmail = null;
        // Confirm the action code is valid.
        checkActionCode(auth, oobCode)
          .then(info => {
            // Get the restored email address.
            restoredEmail = info['data']['email'];

            // Revert to the old email.
            return applyActionCode(auth, oobCode);
          })
          .then(() => {
            // Account email reverted to restoredEmail

            // TODO: Display a confirmation message to the user.

            // You might also want to give the user the option to reset their password
            // in case the account was compromised:
            sendPasswordResetEmail(auth, restoredEmail)
              .then(() => {
                // Password reset confirmation sent. Ask user to check their email.
              })
              .catch(error => {
                // Error encountered while sending password reset code.
              });
          })
          .catch(error => {
            // Invalid code.
          });

        break;
      case 'verifyEmail':
        // Display email verification handler and UI.
        // Localize the UI to the selected language as determined by the lang
        // parameter.
        // Try to apply the email verification code.
        applyActionCode(auth, oobCode)
          .then(resp => {
            // Email address has been verified.
            // TODO: Display a confirmation message to the user.
            // You could also provide the user with a link back to the app.
            // TODO: If a continue URL is available, display a button which on
            // click redirects the user back to the app via continueUrl with
            // additional state determined from that URL's parameters.
          })
          .catch(error => {
            // Code is invalid or expired. Ask the user to verify their email address
            // again.
          });

        break;
      default:
      // Error: invalid mode.
    }
  };

  // Pull query params from redirect link

  // onSubmit import { verifyPasswordResetCode, confirmPasswordReset } from "firebase/auth";

  return (
    <Layout>
      {mode === 'resetPassword' ? (
        <Layout>
          <Flex direction="column" pt="3rem">
            <Flex justify="center" align="center">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Heading textAlign="center">Reset Password</Heading>
                <Flex direction="column" pt="1rem" gap="0.5rem">
                  <Input
                    type="password"
                    {...register('password', { required: true })}
                    w={['15rem', '15rem', '30rem']}
                  />
                  <Button
                    w={['15rem', '15rem', '30rem']}
                    type="submit"
                    mt="0.5rem"
                  >
                    Confirm New Password
                  </Button>
                  {errors.password && <Text>Password field is required</Text>}
                </Flex>
              </form>
            </Flex>
          </Flex>
        </Layout>
      ) : mode === 'recoverEmail' ? (
        <Layout>
          <Flex direction="column" pt="3rem">
            <Flex justify="center" align="center">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Heading textAlign="center">Recover Email</Heading>
              </form>
            </Flex>
          </Flex>
        </Layout>
      ) : (
        <Layout>
          <Flex direction="column" pt="3rem">
            <Flex justify="center" align="center">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Heading textAlign="center">Reset Password</Heading>
              </form>
            </Flex>
          </Flex>
        </Layout>
      )}
    </Layout>
  );
};