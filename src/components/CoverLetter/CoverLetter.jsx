import { Flex, Textarea, FormLabel, Button } from '@chakra-ui/react';
import { Layout } from '../Layout/Layout';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export const CoverLetter = () => {
    // eslint-disable-next-line
    const { register, handleSubmit } = useForm();
    // eslint-disable-next-line
    const [response, setResponse] = useState('');
  
    const onSubmit = data => {
        // Adding the selected option to data
        console.log('On Submit', data);
        setResponse(data);
      };

  return (
    <Layout>
      <Flex direction="column" justify="center" align="center" gap="0.5rem">
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            width: '100%',
          }}
        >
          <Flex direction="column" w="100%">
            <FormLabel>Job posting</FormLabel>
            <Textarea
              type="text"
              placeholder="Copy and paste the job listing here"
              mb="1rem"
            />
            <FormLabel>Your resume</FormLabel>
            <Textarea
              type="text"
              placeholder="Copy and paste the your Resume"
              mb="1rem"
            />
            <Button type="submit" colorScheme="blue" w="10%">
              Submit
            </Button>
          </Flex>
        </form>
      </Flex>
    </Layout>
  );
};
