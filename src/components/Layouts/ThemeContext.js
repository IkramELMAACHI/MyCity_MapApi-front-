import React,{ createContext, useContext } from 'react';

// export default React.createContext( {
//  render :  false ,
//  updateRender : (  ) => {

//   }

// });

export const ThemeContext = createContext({
  render :  false ,
  updateRender : (  ) => {
 
   }
 
 });

export function useThemeContext() {
  return useContext(ThemeContext);
}