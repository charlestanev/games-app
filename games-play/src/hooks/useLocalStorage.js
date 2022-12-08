import { useState } from "react";

export const useLocalStorage = (defaultValue) => {
	const [value, setValue] = useState(defaultValue);

	return [
		value,
		setValue,
	]
}