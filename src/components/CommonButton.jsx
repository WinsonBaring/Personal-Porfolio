import React from 'react';

const CommonButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-[.4rem] px-[1rem] bg-slate-200 rounded-md"
    >
        
      {children}
    </button>
  );
};

export default CommonButton;
