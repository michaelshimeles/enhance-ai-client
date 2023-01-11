import { Flex, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useResume } from '../../hooks/useResume';
import { CaptionResult } from '../CaptionResult/CaptionResult';

export const ResumeFixer = () => {
  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line
  const [response, setResponse] = useState('');

  const onSubmit = data => {
    // Adding the selected option to data
    console.log('On Submit', data);
    setResponse(data);
  };

  const {
    data: result,
    isLoading,
    isRefetching,
    refetch,
  } = useResume(response);

  // Formatted result
  const newResult = result?.data?.choices[0].text.split(/\s\d+\.\s/);
  console.log('newResult', newResult);
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      // w="100%"
      gap="0.5rem"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: '100%',
        }}
      >
        <Flex direction="column" w="100%">
          <FormLabel>Job title</FormLabel>
          <Input
            type="text"
            {...register('title', {
              required: true,
            })}
            placeholder="Social Media Manager"
            mb="1rem"
          />
          <FormLabel>Company name</FormLabel>
          <Input
            type="text"
            {...register('company', {
              required: true,
            })}
            placeholder="EnhanceAI"
            mb="1rem"
          />
          <FormLabel>Tasks & Accomplishment</FormLabel>
          <Textarea
            type="text"
            {...register('skills', {
              required: true,
            })}
            placeholder="In your own words, tell me all the stuff you did and accomplished. I'll make them resume friendly"
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
      {newResult ? (
        newResult.slice(1).map((line, index) => {
          return <CaptionResult result={line} key={index} />;
        })
      ) : (
        <></>
      )}
    </Flex>
  );
};
