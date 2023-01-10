import {
    Button,
    Flex,
    FormLabel, Select,
    Textarea
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useGenericCaption } from '../../hooks/useGenericCaption';
import { CaptionResult } from '../CaptionResult/CaptionResult';

export const GenericCaption = () => {
  const { register, handleSubmit } = useForm();
  const [response, setResponse] = useState('');

  const onSubmit = data => {
    // Adding the selected option to data
    console.log('On Submit', data);
    setResponse(data);
  };

  // Query result
  const {
    data: result,
    isLoading,
    refetch,
    isRefetching,
  } = useGenericCaption(response);

  // Formatted result
  const newResult = result?.data?.choices[0].text.split(/\s\d+\.\s/);

  console.log(newResult);
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
        <Flex
          direction="column"
          justify="center"
          align="flex-start"
          w="full"
          py="1rem"
        >
          <FormLabel>Enter Generic Caption</FormLabel>
          <Textarea
            type="text"
            // placeholder="Mini description of product / service..."
            {...register('description', {
              required: true,
            })}
            placeholder="Our Taco Platter contains the best and freshest chicken, salsa, cheese and sour cream. Come try it out at Baro for a limited time only."
          />
        </Flex>
        <Flex
          direction="column"
          justify="center"
          align="flex-start"
          w="full"
          py="1rem"
        >
          <FormLabel>Pick social platform</FormLabel>
          <Select
            type="select"
            // placeholder="Mini description of product / service..."
            {...register('platform', {
              required: true,
            })}
            // placeholder="Pick the social platform"
            name="tone"
            id="tone"
          >
            <option value="instagram">Instagram</option>
            <option value="facebook">facebook</option>
          </Select>
        </Flex>
        <Flex
          direction="column"
          justify="center"
          align="flex-start"
          w="full"
          py="1rem"
        >
          <FormLabel>Pick the tone</FormLabel>
          <Select
            type="select"
            // placeholder="Mini description of product / service..."
            {...register('tone', {
              required: true,
            })}
            placeholder="Pick the tone"
            name="tone"
            id="tone"
          >
            <option value="Witty">Witty</option>
            <option value="Funny">Funny</option>
            <option value="Funny with Puns">Funny with Puns</option>
            <option value="Friendly">Friendly</option>
            <option value="Luxury">Luxury</option>
            <option value="Professional">Professional</option>
            <option value="Bold">Bold</option>
            <option value="Adventure">Adventure</option>
            <option value="Persuasive">Persuasive</option>
            <option value="Empathetic">Empathetic</option>
          </Select>
        </Flex>
        <Flex justify="space-between" align="center" w="full">
          <Button isLoading={isLoading} type="submit" colorScheme="blue">
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
      </form>
      {newResult ? (
        newResult.slice(1).map((line, index) => {
          console.log(line);
          return <CaptionResult result={line} key={index} />;
        })
      ) : (
        <></>
      )}
    </Flex>
  );
};
