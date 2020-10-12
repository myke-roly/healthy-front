import { useRef } from "react";

export const useAnimation = () => {
	const ref = useRef(undefined);
	const keyFrame = [
		{
			transform: "scale(1)",
		},

		{
			transform: "scale(1.2)",
			opacity: "0.5",
		},

		{
			transform: "scale(2)",
			opacity: "0",
		},

		{
			transform: "scale(1.2)",
			opacity: "0.5",
		},

		{
			transform: "scale(1)",
		},
	];

	const options = {
		duration: 500,
		animationTimingFunction: "ease-out",
	};

	function animate() {
		ref.current.animate(keyFrame, options);
	}

	return { ref, animate };
};
