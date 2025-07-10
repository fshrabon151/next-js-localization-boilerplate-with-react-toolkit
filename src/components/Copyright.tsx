"use client";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-gray-200 mt-6 py-4 text-center text-[16px] md:text-lg font-medium text-brandRichBlack-60 container">
      ©{currentYear} hawamsh. All rights reserved.
    </div>
  );
};

export default Copyright;
