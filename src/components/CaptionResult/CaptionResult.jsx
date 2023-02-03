import { Text, Card, CardBody, CardFooter, Button, Divider } from '@chakra-ui/react';

export const CaptionResult = ({ result }) => {
  return (
    <Card align="center" w="100%">
      <CardBody>
        <Text>{result}</Text>
      </CardBody>
      <Divider w="95%"/>
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
