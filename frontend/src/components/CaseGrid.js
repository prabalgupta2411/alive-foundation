import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import CaseCard from "../components/CaseCard";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const CaseGrid = () => {
  const [patients, setPatients] = useState([]);
  const { isAdminAuthenticated } = useContext(AuthContext); // Access admin state

  useEffect(() => {
    // Fetch patient data from backend
    axios
      .get(`${process.env.REACT_APP_API}/api/patients/all`)
      .then((response) => {
        setPatients(response.data); // Store patient data in state
      })
      .catch((error) => {
        console.error("Error fetching patient data:", error);
      });
  }, []);

  return (
    <div className="case-grid-container p-6 rounded-lg mb-10">
      {isAdminAuthenticated && (
        <div className="flex justify-end mb-4">
          <Link to="/admin/addPatient">
            <button className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-200">
              Add Patient
            </button>
          </Link>
        </div>
      )}

      {/* Container for the grid */}
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-3xl font-bold text-[#294a54] mb-2">Save a Life</h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {patients.map((patient) => (
          <div key={patient._id}>
            {/* CaseCard displays patient data */}
            <CaseCard patient={patient} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseGrid;
