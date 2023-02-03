import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    Link,
    ListItem,
    OrderedList,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Stack,
    StackDivider, Text,
    Textarea,
    VStack
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CaptionResult } from '../../components/CaptionResult/CaptionResult';
import { useGPTZero } from '../../hooks/useGPTZero';

function Rewriter() {
  const [sliderValue, setSliderValue] = useState(30);
  const [promptData, setPromptData] = useState(null);
  const {
    data: result,
    isLoading,
    // refetch,
    // isRefetching,
  } = useGPTZero(promptData);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const newData = {
      prompt: data.prompt,
      perplexity: sliderValue,
    };

    console.log('NEW DATA', newData);
    setPromptData(newData);
  };

  console.log('result', result);
  const newResult = result?.data?.choices[0].text.split(/\s\d+\.\s/);
  return (
    <Flex direction="column" justify="center" align="center" w="100%">
      <Heading>Defeat GPTZero</Heading>

      <Flex direction="column" w="50%" gap="1rem" mt="2rem">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Textarea {...register('prompt', { required: true })} />
          <Flex justify="space-between" align="center" w="full" py="1rem">
            <Button isLoading={isLoading} type="submit" colorScheme="blue">
              Submit
            </Button>
            <Link
              href="https://gptzero.me/"
              _hover={{ textDecoration: 'none' }}
              target="_blank"
            >
              <Button colorScheme="red">GPTZero</Button>
            </Link>
          </Flex>
          <Text fontSize="sm" pb="0.5rem">
            Perplexity Score: {sliderValue}
          </Text>
          <Slider
            aria-label="slider-ex-1"
            defaultValue={30}
            w="30%"
            onChange={val => setSliderValue(val)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </form>
        <VStack>
          {<Flex>{newResult && <CaptionResult result={newResult} />}</Flex>}
        </VStack>
      </Flex>
      <Card w="50%" mt="1rem" textAlign="left">
        <CardHeader>
          <Heading size="md">How To Use</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <OrderedList pb="1rem">
                <ListItem>
                  Use ChatGPT to generate a regular prompt (e.g. "Write a
                  500-word essay explaining why Jesus is God").
                </ListItem>
                <ListItem>
                  Copy the response generated by ChatGPT into GPTZero.
                </ListItem>
                <ListItem>
                  GPTZero will then identify the response as generated by an AI
                  and provide you with the average perplexity score.
                </ListItem>
                <ListItem>
                  Copy original prompt (e.g. "Write a 500-word essay explaining
                  why Jesus is God") and use the average perplexity score shared
                  by GPTZero
                </ListItem>
              </OrderedList>
              <Text as="b">
                FYI: I don't condone cheating or plagiarism but with how hard
                it's been to get a full stack dev job I needed to do kill
                GPTZero to go viral. I'll probably take it down soon so tell a
                friend to tell a friend.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Rewriter;
