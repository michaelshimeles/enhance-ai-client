import { useQuery } from 'react-query';
import axios from 'axios';

const fetchResume = ({ queryKey }) => {
  const data = queryKey[1];
  return axios.get(`${process.env.REACT_APP_API_URL}/resume`, {
    params: {
      title: data.title,
      company: data.company,
      skills: data.skills,
    },
  });
};

export const useResume = data => {
  let result = false;
  if (data) {
    result = true;
  }
  return useQuery(['resume', data], fetchResume, {
    enabled: result,
    refetchInterval: 100000000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: 10000000,
  });
};
