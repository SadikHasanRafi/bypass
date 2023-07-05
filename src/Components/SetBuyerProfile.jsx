import  { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    preciseLocation: '',
    name: '',
    phoneNumber: '',
    uid:"uid",
    email:"email",
    transactionID:[],
    isLoyal:[],
    totalSpendMoney:0,
    role:"buyer"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://sadai-vandar-server.onrender.com/registered-buyers', formData);
      console.log('Data inserted successfully');
      // Reset the form fields after successful insertion
      setFormData({
        location: '',
        preciseLocation: '',
        name: '',
        phoneNumber: '',
      });
    } catch (error) {
      console.error('Failed to insert data:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Buyer Registration Form</h2>
      <form onSubmit={handleSubmit} className='w-[70vw]'>
        <label className="block mb-2">
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </label>
        <br />
        <label className="block mb-2">
          Precise Location:
          <input
            type="text"
            name="preciseLocation"
            value={formData.preciseLocation}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </label>
        <br />
        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </label>
        <br />
        <label className="block mb-2">
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </label>
        <br />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
