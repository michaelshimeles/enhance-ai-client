import { useQuery } from 'react-query';
import axios from 'axios';

const fetchCaptionResult = ({ queryKey }) => {
  const data = queryKey[1];
  return axios.get(`${process.env.REACT_APP_API_URL}/captions/generic`, {
    params: {
      platform: data.platform,
      tone: data.tone,
      description: data.description,
    },
  });
};

export const useGenericCaption = data => {
  let result = false;
  if (data) {
    result = true;
  }
  return useQuery(['generic-caption', data], fetchCaptionResult, {
    enabled: result,
    refetchInterval: 100000000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: 10000000,
  });
};
