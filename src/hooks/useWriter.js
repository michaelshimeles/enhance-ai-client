import { useQuery } from 'react-query';
import axios from 'axios';

const fetchWriter = ({ queryKey }) => {
  const data = queryKey[1];
  return axios.get(`${process.env.REACT_APP_API_URL}/gpt-zero/writer`, {
    params: {
      prompt: data.prompt,
    },
  });
};

export const useWriter = promptData => {
  let result = false;
  if (promptData) {
    result = true;
  }

  return useQuery(['writer', promptData], fetchWriter, {
    enabled: result,
    refetchInterval: 100000000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: 10000000,
  });
};
