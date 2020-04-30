import { useState } from 'react';

const useInputState = (defaultValue) => {
  const [userInput, setInputs] = useState(defaultValue);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setInputs({ ...userInput, [name]: value });
  };

  const handleReset = () => {
    setInputs(defaultValue);
  };

  return [userInput, handleChange, handleReset];
};

export default useInputState;
