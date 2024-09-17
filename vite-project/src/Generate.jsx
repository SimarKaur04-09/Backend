import { useState } from 'react';
 
const useGenerateRandomColor = () => {
    const [color, setColor] = useState("")
    
    let arr = new Array(n);
    for (let i = 0; i <n; i++) {
      arr[i] = setColor(Math.floor(Math.random() * 10));
    }
    return {color,arr};
    
 
};
export default useGenerateRandomColor;
