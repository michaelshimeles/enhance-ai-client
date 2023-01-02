import "./LoadingAnimation";
import Lottie from "lottie-react";

export const LoadingAnimation = ({ thinking, className }) => {
  return (
    <div>
      <Lottie
        animationData={thinking}
        autoplay={true}
        loop={true}
        height={400}
        width={400}
        className={className}
      />
    </div>
  );
};
