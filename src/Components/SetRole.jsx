import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SetRole = () => {
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const handleButtonClick = async (selectedRole) => {
    try {
      setLoading(true);

      const roleData = {
        uid: "eta asbe auth context theke",
        displayName: "etao auth context theke",
        serviceReview: "eta initially empty thakbe",
        phone: "etao auth context theke asbe na hole empty thakbe eta",
        email: "etao auth context theke asbe",
        role: selectedRole
      };

      // Call the API to insert the data
      await axios.post("https://sadai-vandar-server.onrender.com/roles-and-reviews", roleData);

      // Redirect to the "/setBuyerProfile" path
      if (roleData.role==="shopkeeper") {
        history("/setSellerProfile");
      }else{
        history("/setBuyerProfile");
      }
    } catch (error) {
      console.error('Error inserting data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
        <button
          className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
          onClick={() => handleButtonClick('shopkeeper')}
          disabled={loading}
        >
          Shopkeeper
        </button>
        <button
          className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
          onClick={() => handleButtonClick('buyer')}
          disabled={loading}
        >
          Buyer
        </button>
      </span>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default SetRole;
