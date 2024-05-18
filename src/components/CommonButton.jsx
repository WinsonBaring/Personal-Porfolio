import React from 'react';

const CommonButton = ({ children, onClick,styler }) => {
  return (
    <button
      onClick={onClick}
      className= {`  bg-slate-200 rounded-md ${styler?styler:"py-[.4rem] px-[1rem]"}`}
    >
        
      {children}
    </button>
  );
};

export default CommonButton;
