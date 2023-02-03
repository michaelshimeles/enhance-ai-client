import { useQuery } from 'react-query';
import axios from 'axios';

const fetchGPTZero = ({ queryKey }) => {
  const data = queryKey[1];
  return axios.get(`${process.env.REACT_APP_API_URL}/gpt-zero/fixer`, {
    params: {
      prompt: data.prompt,
      perplexity: data.perplexity,
    },
  });
};

export const useGPTZero = promptData => {
  let result = false;
  if (promptData) {
    result = true;
  }
  console.log('promptData', promptData);

  return useQuery(['gpt-zero', promptData], fetchGPTZero, {
    enabled: result,
    refetchInterval: 100000000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: 10000000,
  });
};
