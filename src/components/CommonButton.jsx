import React from 'react';

const CommonButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-[.9rem] bg-slate-200 rounded-md"
    >
        
      {children}
    </button>
  );
};

export default CommonButton;
