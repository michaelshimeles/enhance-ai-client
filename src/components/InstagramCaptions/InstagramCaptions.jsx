import { useForm } from "react-hook-form";
import { useState } from "react";
import Select from "react-select";
import thinking from "../../assets/animations/thinking.json";
import Lottie from "lottie-react";

import "./InstagramCaptions.scss";
import { useCaption } from "../../hooks/useCaption";
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
  ];

  const handleSelect = (data) => {
    console.log(data.value);
    setSelectOptions(data.value);
  };

  // Query result
  const { data: result, isFetching, isLoading } = useCaption(response);
  console.log("Result", result?.data?.choices[0].text);

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "rgb(49, 49, 62)",
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
          {errors.product && <span className="ig-captions__label">This field is required</span>}
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
          {errors.description && <span className="ig-captions__label">This field is required</span>}
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
        {isFetching && isLoading ? (
          <div>
            <Lottie
              animationData={thinking}
              autoplay={true}
              loop={true}
              height={400}
              width={400}
              className="ig-captions__lottie"
            />
          </div>
        ) : (
          <></>
        )}
        {result ? (
          <p className="ig-captions__result">{result?.data?.choices[0].text}</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default InstagramCaptions;
