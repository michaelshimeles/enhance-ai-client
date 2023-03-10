import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPromptResult = ({ queryKey }) => {
  const prompt = queryKey[1];
  return axios.get(`${process.env.REACT_APP_API_URL}/prompt`, {
    params: {
      prompt: prompt,
    },
  });
};

export const useGrammar = prompt => {
  let result = false;
  if (prompt) {
    result = true;
  }
  return useQuery(['grammar', prompt], fetchPromptResult, {
    enabled: result,
    refetchInterval: 100000000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: 10000000,
  });
};
