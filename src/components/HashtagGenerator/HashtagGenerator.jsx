import { Button, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHashtag } from '../../hooks/useHashtag';
import { CaptionResult } from '../CaptionResult/CaptionResult';

export const HashtagGenerator = () => {
  const { register, handleSubmit } = useForm();
  const [niche, setNiche] = useState('');

  const onSubmit = data => {
    // Adding the selected option to data
    console.log('On Submit', data);
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
        <VStack>
          <Input
            type="text"
            {...register('niche', {
              required: true,
            })}
            placeholder="Enter your niche"
            w="40%"
          />
          <Button isLoading={isLoading} type="submit" colorScheme="blue">
            Submit
          </Button>
        </VStack>
      </form>
      {newResult && <CaptionResult result={newResult} />}
    </VStack>
  );
};
