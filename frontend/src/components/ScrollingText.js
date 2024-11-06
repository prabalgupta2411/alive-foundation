import React from 'react';

const ScrollingText = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-light-blue-100 p-2 text-orange-600">
      <div className="flex animate-scroll">
        <span className="inline-block mr-10 text-xl font-bold">
          All donations are exempted under section 80G(5)(VI) of the Income Tax Act, 1961.
        </span>
      </div>
    </div>
  );
};

export default ScrollingText;
