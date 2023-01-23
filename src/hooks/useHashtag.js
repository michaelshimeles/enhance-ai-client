import axios from 'axios';
import { useQuery } from 'react-query';

const fetchHashtags = ({ queryKey }) => {
  const data = queryKey[1];
  return axios.get(`${process.env.REACT_API_URL}/captions/hashtags`, {
    params: {
      niche: data.niche,
    },
  });
};

export const useHashtag = data => {
  let result = false;
  if (data) {
    result = true;
  }
  return useQuery(['hashtags', data], fetchHashtags, {
    enabled: result,
    refetchInterval: 100000000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: 10000000,
  });
};
