import { useCallback, useRef, useState } from "react";

function useDepounce (callback, delay){ 
    const timer = useRef() 

    const debounceCallBack = useCallback(
      (...args) => {
        if(timer.current){
            clearTimeout(timer.current)

        }
        timer.current = setTimeout( () =>{
            callback(...args)
        }, delay)
      },
      [delay, callback],
    )
    
  return debounceCallBack
}
export default useDepounce;