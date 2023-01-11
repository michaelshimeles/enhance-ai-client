import { Button, Flex, Textarea } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useGrammar } from '../../hooks/useGrammar';
import { CaptionResult } from '../CaptionResult/CaptionResult';

export const GrammarForm = () => {
  const [response, setResponse] = useState('');

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    setResponse(data.prompt);
  };

  const { data: result, isLoading } = useGrammar(response);

  return (
    <Flex
      justify="center"
      align="flex-start"
      direction="column"
      w="60%"
      gap="1rem"
    >
      <form
        style={{
          width: '100%',
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Textarea
          size="sm"
          h="25rem"
          type="text"
          {...register('prompt', {
            required: true,
            minLength: {
              value: 10,
              message: 'Min length is 10',
            },
          })}
        />
        <Button
          isLoading={isLoading}
          type="submit"
          colorScheme="blue"
          mt="1rem"
        >
          Submit
        </Button>
      </form>
      <Flex w="100%" justify="center" align="center">
        {result?.data?.choices[0].text ? (
          <CaptionResult result={result?.data?.choices[0].text} />
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  );
};
