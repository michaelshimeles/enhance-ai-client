import { useForm } from "react-hook-form";
import { useState } from "react";
import Select from "react-select";
import thinking from "../../assets/animations/thinking.json";
import "./InstagramCaptions.scss";
import { useCaption } from "../../hooks/useCaption";
import { LoadingAnimation } from "../LoadingAnimation/LoadingAnimation";
import { InstagramResult } from "../InstagramResult/InstagramResult";

const InstagramCaptions = () => {
  const [response, setResponse] = useState("");
  const [selectOptions, setSelectOptions] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Adding the selected option to data
    data.tone = selectOptions;
    setResponse(data);
    console.log("On Submit", data);
  };

  const options = [
    { value: "Witty", label: "Witty" },
    { value: "Funny", label: "Funny" },
    { value: "Serious", label: "Serious" },
    { value: "Funny With Puns", label: "Funny with Puns" },
    { value: "Friendly", label: "Friendly" },
    { value: "Luxury", label: "Luxury" },
    { value: "Professional", label: "Professional" },
    { value: "Bold", label: "Bold" },
    { value: "Adventures", label: "Adventures" },
    { value: "Persuasive", label: "Persuasive" },
    { value: "Empathetic", label: "Empathetic" },
  ];

  const handleSelect = (data) => {
    console.log(data.value);
    setSelectOptions(data.value);
  };

  // const handleRefresh = () => {
  //   setRefresh(true);
  // };

  // Query result
  const { data: result, isFetching, isLoading } = useCaption(response);

  // Formatted result
  const newResult = result?.data?.choices[0].text.split(/\s\d+\.\s/);

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      // backgroundColor: "rgb(49, 49, 62)",
      border: "none",
    }),
  };

  return (
    <div className="ig-captions">
      <div className="ig-captions__container">
        <h1 className="ig-captions__title">Instagram Captions 💬</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="ig-captions__form">
          <label className="ig-captions__label">Name of the product</label>
          <input
            type="text"
            // placeholder="Name of Product..."
            {...register("product", {
              required: true,
            })}
            className="ig-captions__product"
          />
          {errors.product && (
            <span className="ig-captions__label">This field is required</span>
          )}
          <label className="ig-captions__label">
            Mini description of product / service
          </label>
          <textarea
            type="text"
            // placeholder="Mini description of product / service..."
            {...register("description", {
              required: true,
            })}
            className="ig-captions__description"
          />
          {errors.description && (
            <span className="ig-captions__label">This field is required</span>
          )}
          <label className="ig-captions__label">
            Enter a custom tone or choose a preset tone
          </label>
          <Select
            className="ig-captions__select"
            options={options}
            onChange={handleSelect}
            placeholder="Choose a tone..."
            styles={colorStyles}
          />
          <input
            disabled={!selectOptions}
            type="submit"
            className="ig-captions__submit"
          />
        </form>
        {/* <button onClick={handleRefresh}>Refresh</button> */}
        {isFetching && isLoading ? (
          <LoadingAnimation
            thinking={thinking}
            className={"ig-captions__lottie"}
          />
        ) : (
          <></>
        )}
        {result ? (
          <InstagramResult
            newResult={newResult}
            className={"ig-captions__result"}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default InstagramCaptions;
