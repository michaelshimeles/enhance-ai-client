import { Text, Card, CardBody, CardFooter, Button } from '@chakra-ui/react';

export const CaptionResult = ({ result }) => {
  return (
    <Card align="center" w="full">
      <CardBody>
        <Text>{result}</Text>
      </CardBody>
      <CardFooter>
        <Button
          colorScheme="blue"
          onClick={() => navigator.clipboard.writeText(`${result}`)}
        >
          Copy
        </Button>
      </CardFooter>
    </Card>
  );
};
