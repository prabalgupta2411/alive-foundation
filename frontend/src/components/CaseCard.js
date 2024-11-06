import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const CaseCard = ({ patient }) => {
  const {
    name,
    dob,
    description,
    image,
    pdf,
    amountRaised,
    numDonors,
    donationGoal,
  } = patient;

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    const ageInMonths =
      (today.getFullYear() - birthDate.getFullYear()) * 12 +
      today.getMonth() -
      birthDate.getMonth();

    if (ageInMonths < 12) {
      return `${ageInMonths} months`;
    }

    const years = Math.floor(ageInMonths / 12);
    const months = ageInMonths % 12;

    return `${years} year${years !== 1 ? "s" : ""} ${months} month${
      months !== 1 ? "s" : ""
    }`;
  };

  const handleViewDetails = () => {
    if (pdf) {
      window.open(`${pdf}`, "_blank"); // Opens the PDF in a new tab
    } else {
      alert("No PDF available for this patient.");
    }
  };

  // Calculate progress percentage
  const progressPercentage = Math.min((amountRaised / donationGoal) * 100, 100);

  return (
    <div
      className="flex flex-col max-w-screen-sm sm:max-w-xs md:max-w-xs lg:max-w-xs rounded-xl overflow-hidden shadow-xl bg-white m-4 transition-all duration-300 ease-in-out hover:shadow-2xl"
      style={{
        backgroundImage: `url('/assets/cp55.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        className="w-full h-48 object-cover rounded-t-xl"
        src={image}
        alt={name}
        style={{ maxWidth: "100%", maxHeight: "200px" }}
      />
      <div className="px-4 py-4">
        <div className="font-bold text-xl mb-2 text-white">{name}</div>
        <p className="text-white text-base mb-4">
          {description} - {calculateAge(dob)} old
        </p>
        <div className="mt-4">
          <p className="font-semibold text-white text-sm pb-2">
            Rs. {amountRaised} Raised Out Of Rs. {donationGoal}
          </p>
          <div className="bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex items-center justify-between pt-4">
            <p className="text-xs text-white mt-1">
              {progressPercentage.toFixed(0)}% of goal reached
            </p>
            <div className="flex items-center space-x-1">
              <FaHeart className="text-red-500" />
              <p className="text-xs text-white">{numDonors} Donors</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pt-2 pb-4 flex justify-between items-center">
        <Link to="/donateNow">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded-lg transition duration-200">
            Donate
          </button>
        </Link>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-3 rounded-lg transition duration-200"
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CaseCard;
