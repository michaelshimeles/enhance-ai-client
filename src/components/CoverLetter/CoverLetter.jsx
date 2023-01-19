import { Flex, Textarea, FormLabel, Button, Text } from '@chakra-ui/react';
import { Layout } from '../Layout/Layout';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useCoverLetter } from '../../hooks/UseCoverLetter';

export const CoverLetter = () => {
  // eslint-disable-next-line
  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line
  const [response, setResponse] = useState('');

  const onSubmit = data => {
    // Adding the selected option to data
    setResponse(data);
  };

  const {
    data: result,
    isLoading,
    isRefetching,
    refetch,
  } = useCoverLetter(response);

  const newResult = result?.data?.choices[0].text.split(/\s\d+\.\s/);

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
              {...register('description', {
                required: true,
              })}
              placeholder="Copy and paste the job listing here"
              mb="1rem"
            />
            <FormLabel>Your resume</FormLabel>
            <Textarea
              type="text"
              {...register('resume', {
                required: true,
              })}
              placeholder="Copy and paste the your Resume"
              mb="1rem"
            />
            <Flex justify="space-between" align="center" w="full">
              <Button
                isLoading={isLoading}
                type="submit"
                colorScheme="blue"
                w="10%"
              >
                Submit
              </Button>
              {newResult ? (
                <Button
                  isLoading={isRefetching}
                  colorScheme="green"
                  onClick={refetch}
                >
                  Refresh
                </Button>
              ) : (
                <></>
              )}
            </Flex>
          </Flex>
        </form>
        {newResult ? <Text>{newResult}</Text> : <></>}
      </Flex>
    </Layout>
  );
};
