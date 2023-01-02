import "./FixGrammar.scss";
import { useForm } from "react-hook-form";
import { useGrammar } from "../../hooks/useGrammar";
import { useState } from "react";
import thinking from "../../assets/animations/thinking.json";
import Lottie from "lottie-react";

export const FixGrammar = () => {
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
  const { data: result, isFetching, isLoading } = useGrammar(response);
  console.log("Result", result?.data?.choices[0].text);

  console.log(errors);

  return (
    <div className="fix-grammar">
      <div className="fix-grammar__container">
        <div className="fix-grammar__result-box">
          {result ? (
            <h1 className="fix-grammar__result">
              {result?.data?.choices[0].text}
            </h1>
          ) : (
            <></>
          )}
          {isFetching && isLoading ? (
            <div className="fix-grammar__lottie">
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
        <form onSubmit={handleSubmit(onSubmit)} className="fix-grammar__form">
          <textarea
            className="fix-grammar__input"
            autoComplete="off"
            {...register("prompt", {
              required: true,
              minLength: {
                value: 4,
                message: "Min length is 4",
              },
            })}
          />
          <input type="submit" className="fix-grammar__button" />
        </form>
      </div>
    </div>
  );
};
