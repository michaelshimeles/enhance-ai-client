import { useQuery } from 'react-query';
import axios from 'axios';

const fetchCoverLetter = ({ queryKey }) => {
  const data = queryKey[1];
  return axios.get(`${process.env.REACT_API_URL}/resume/coverletter`, {
    params: {
      description: data.description,
      // resume: data.resume,
    },
  });
};

export const useCoverLetter = data => {
  let result = false;
  if (data) {
    result = true;
  }
  return useQuery(['cover-letter', data], fetchCoverLetter, {
    enabled: result,
    refetchInterval: 100000000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: 10000000,
  });
};
