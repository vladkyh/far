import { useState } from "react";

function useInput (initialValue){ 
  const [value, setValue] = useState(initialValue)
  const onChange = (text) => {
    setValue(text.target.value) 
  }
  return {
    value, onChange
  }
}
export default useInput;