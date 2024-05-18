import React from 'react';

const CommonButton = ({ children, onClick,styler ,texter}) => {
  return (
    <button
      onClick={onClick}
      className= {` ${texter?texter:"bg-slate-200 "} rounded-md ${styler?styler:"py-[.4rem] px-[1rem]"}`}
    >
        
      {children}
    </button>
  );
};

export default CommonButton;
