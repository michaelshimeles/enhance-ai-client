import { useQuery } from "react-query";
import axios from "axios";

const fetchCaptionResult = ({ queryKey }) => {
  const data = queryKey[1];
  return axios.get(`${process.env.REACT_APP_URL}/captions`, {
    params: {
      product: data.product,
      description: data.description,
      tone: data.tone,
    },
  });
};

export const useCaption = (data) => {
  let result = false;
  if (data) {
    result = true;
  }
  return useQuery(["caption", data], fetchCaptionResult, {
    enabled: result,
  });
};
