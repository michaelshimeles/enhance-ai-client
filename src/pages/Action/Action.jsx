import {
  Button,
  Flex,
  Heading,
  Input,
  Text,
  useToast,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import {
  applyActionCode,
  checkActionCode,
  confirmPasswordReset,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
} from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import { auth } from '../../Firebase';
import { useQuery } from '../../utils/useQuery';

export const Action = () => {
  const query = useQuery();
  // eslint-disable-next-line
  //mode, actionCode, continueUrl, lang
  const mode = query.get('mode');
  const oobCode = query.get('oobCode');
  const continueUrl = query.get('continueUrl');

  // const navigate = useNavigate();
  const toast = useToast();

  console.log('Mode', mode);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    switch (mode) {
      case 'resetPassword':
        verifyPasswordResetCode(auth, oobCode)
          .then(() => {
            // const accountEmail = email;
            const newPassword = data.password;
            confirmPasswordReset(auth, oobCode, newPassword)
              .then(() => {
                window.location.replace(continueUrl);
              })
              .catch(error => {
                toast({
                  title: 'It didnt work',
                  description: 'Please try again later',
                  status: 'error',
                  isClosable: true,
                });
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

            console.log('Recover Email', info);
            console.log('restoredEmail', restoredEmail);
            // Revert to the old email.
            return applyActionCode(auth, oobCode);
          })
          .then(() => {
            // Account email reverted to restoredEmail

            // TODO: Display a confirmation message to the user.

            // You might also want to give the user the option to reset their password
            // in case the account was compromised:
            sendPasswordResetEmail(auth, restoredEmail)
              .then(resp => {
                // Password reset confirmation sent. Ask user to check their email.
                console.log('Recover Password reset confirmation sent', resp);
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
        console.log('We in the case');
        // Try to apply the email verification code.
        applyActionCode(auth, oobCode)
          .then(resp => {
            console.log('Verify Email', resp);
          })
          .catch(error => {
            // Code is invalid or expired. Ask the user to verify their email address
            // again.
            toast({
              title: 'It didnt work',
              description: 'Please try again later',
              status: 'error',
              isClosable: true,
            });
            console.log('Verify Email Error', error);
          });

        break;
      default:
        break;
      // Error: invalid mode.
    }
  };

  return (
    <Layout>
      {mode === 'resetPassword' ? (
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
      ) : mode === 'recoverEmail' ? (
        <Flex direction="column" pt="3rem">
          <Flex justify="center" align="center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Card align="center">
                <CardHeader>
                  <Heading size="md"> Recover Email</Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    Please contact support @ michaelwasihun96@gmail.com
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button type="submit" colorScheme="blue">
                    Recover
                  </Button>
                  <Link to="/">
                    <Button type="submit" colorScheme="blue">
                      Go Home
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </form>
          </Flex>
        </Flex>
      ) : mode === 'verifyEmail' ? (
        <Flex direction="column" pt="3rem">
          <Flex justify="center" align="center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Card align="center">
                <CardHeader>
                  <Heading size="md"> Verify Email</Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    Click on the "Verify" button to verify your account
                  </Text>
                </CardBody>
                <CardFooter>
                  <Flex justify="center" align="center" gap="2rem">
                    <Button
                      type="submit"
                      colorScheme="blue"
                      onClick={() => {
                        window.location.reload(false);
                        toast({
                          title: 'Verification worked',
                          description:
                            'You have been verified, please click on "Go Home"',
                          status: 'success',
                          isClosable: true,
                        });
                      }}
                    >
                      Verify
                    </Button>
                    <Link to="/">
                      <Button type="submit" colorScheme="blue">
                        Go Home
                      </Button>
                    </Link>
                  </Flex>
                </CardFooter>
              </Card>
            </form>
          </Flex>
        </Flex>
      ) : (
        <></>
      )}
    </Layout>
  );
};
