import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { Layout } from '../../components/Layout/Layout';

export const Feedback = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({});

  const sendEmail = formData => {
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <Layout>
      <Flex justify="center" align="center" pt="4rem">
        <form onSubmit={handleSubmit(sendEmail)}>
          <Heading textAlign="center">Feedback Form</Heading>
          <Flex direction="column" pt="1rem" gap="0.5rem">
            <Box>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                {...register('firstName', { required: true })}
                w={['15rem', '15rem', '30rem']}
                name="firstName"
                id="firstName"
              />
            </Box>
            <Box>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                {...register('lastName', { required: true })}
                w={['15rem', '15rem', '30rem']}
                name="lastName"
                id="lastName"
              />
            </Box>
            <Box>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
                w={['15rem', '15rem', '30rem']}
                name="email"
                id="email"
              />
            </Box>
            <Box>
              <FormLabel>Feedback</FormLabel>
              <Textarea
                type="text"
                {...register('feedback', { required: true })}
                w={['15rem', '15rem', '30rem']}
                name="feedback"
                id="feedback"
              />
            </Box>
            <Button w={['15rem', '15rem', '30rem']} type="submit" mt="0.5rem">
              Submit
            </Button>
          </Flex>
        </form>
      </Flex>
    </Layout>
  );
};
