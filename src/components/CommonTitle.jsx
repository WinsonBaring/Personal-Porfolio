import React from 'react';

const CommonTitle = ({ children, onClick ,styler}) => {
  return (
    <h1
      onClick={onClick}
      className="font-mono font-bold mt-[10px] text-green-500 text-4xl w-[50rem] "
    >
        
      {children}
    </h1>
  );
};

export default CommonTitle;
