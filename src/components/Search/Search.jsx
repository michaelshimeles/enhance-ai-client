import "./Search.scss";
import { useForm } from "react-hook-form";
import { useSearch } from "../../hooks/useSearch";
import { useState } from "react";
import thinking from "../../assets/animations/thinking.json";
import Lottie from "lottie-react";

export const Search = () => {
  const [response, setResponse] = useState("");
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("The input", data);
    setResponse(data.prompt);
  };

  // Query result
  const { data: result, isFetching } = useSearch(response);
  console.log("Result", result?.data?.choices[0].text);

  console.log(errors);

  return (
    <div className="search">
      <div className="search__container">
        <form onSubmit={handleSubmit(onSubmit)} className="search__form">
          <textarea
            className="search__input"
            {...register("prompt", {
              required: "This is required",
              minLength: {
                value: 4,
                message: "Min length is 4",
              },
            })}
            placeholder="Let me fix your grammar"
          />
          <input type="submit" className="search__button" />
        </form>
        {result ? <h1>{result?.data?.choices[0].text}</h1> : <></>}
        {isFetching ? (
          <div className="search__lottie">
            <Lottie
              animationData={thinking}
              autoplay={true}
              loop={true}
              height={400}
              width={400}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
