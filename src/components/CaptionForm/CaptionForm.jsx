import {
  Button,
  Flex,
  FormLabel,
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useCaption } from '../../hooks/useCaption';
import { CaptionResult } from '../CaptionResult/CaptionResult';

export const CaptionForm = () => {
  const { register, handleSubmit } = useForm();
  const [response, setResponse] = useState('');

  const onSubmit = data => {
    // Adding the selected option to data
    console.log('On Submit', data);
    setResponse(data);
  };

  // Query result
  const { data: result, isLoading, refetch, isRefetching } = useCaption(response);

  // Formatted result
  const newResult = result?.data?.choices[0].text.split(/\s\d+\.\s/);

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      gap="0.5rem"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: '100%',
        }}
      >
        <Flex direction="column" justify="center" align="flex-start" w="full">
          <FormLabel>Product Name</FormLabel>
          <Input
            type="text"
            {...register('product', {
              required: true,
            })}
            placeholder="Taco Platter"
            size="md"
          />
        </Flex>
        <Flex
          direction="column"
          justify="center"
          align="flex-start"
          w="full"
          py="1rem"
        >
          <FormLabel>Enter product description</FormLabel>
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
          <Select
            type="select"
            // placeholder="Mini description of product / service..."
            {...register('tone', {
              required: true,
            })}
            placeholder="Tone of caption"
            name="tone"
            id="tone"
            isRequired={true}
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
            <Button isLoading={isRefetching} colorScheme="green" onClick={refetch}>
              Refresh
            </Button>
          ) : (
            <></>
          )}
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
