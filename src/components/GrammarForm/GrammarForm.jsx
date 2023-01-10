import { Flex, Button, Textarea, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useGrammar } from '../../hooks/useGrammar';
import { useState } from 'react';

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
      {result?.data?.choices[0].text ? (
        <Text>{result?.data?.choices[0].text}</Text>
      ) : (
        <></>
      )}
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
    </Flex>
  );
};
