import { Button, Input, VStack, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHashtag } from '../../hooks/useHashtag';
import { CaptionResult } from '../CaptionResult/CaptionResult';

export const HashtagGenerator = () => {
  const { register, handleSubmit } = useForm();
  const [niche, setNiche] = useState('');

  const onSubmit = data => {
    // Adding the selected option to data
    setNiche(data);
  };

  const { data: result, isLoading } = useHashtag(niche);
  
  const newResult = result?.data?.choices[0].text.split(/\s\d+\.\s/);

  return (
    <VStack>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: '100%',
        }}
      >
        <VStack w={["100%", "80%", "50%"]}>
          <Input
            type="text"
            {...register('niche', {
              required: true,
            })}
            placeholder="Enter your niche"
            w="full"
          />
          <Button isLoading={isLoading} type="submit" colorScheme="blue" w="full">
            Submit
          </Button>
        </VStack>
      </form>
      {newResult && <Box pt="1rem"><CaptionResult result={newResult} /></Box>}
    </VStack>
  );
};
