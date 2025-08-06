import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentTable = ({ token, id }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/myAppointments',
        { userId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log(response.data);
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  return (
    <div className="w-full mr-4 justify-center mx-auto">
      <h1 className="text-2xl text-center font-bold p-4 mb-6">My Appointments</h1>
      <table className="w-full divide-y justify-center items-center divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-3 text-center text-lg border font-bold text-black uppercase tracking-wider">
              Uhid
            </th>
            <th scope="col" className="px-4 py-3 text-center text-lg border font-bold text-black uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-4 py-3 text-center text-lg border font-bold text-black uppercase tracking-wider">
              Gender
            </th>
            <th scope="col" className="px-4 py-3 text-center text-lg border font-bold text-black uppercase tracking-wider">
              Location
            </th>
            <th scope="col" className="px-4 py-3 text-center text-lg border font-bold text-black uppercase tracking-wider">
              Date
            </th>
            <th scope="col" className="px-4 py-3 text-center text-lg border font-bold text-black uppercase tracking-wider">
              Clinician
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td className="px-4 py-3 text-center text-lg border font-bold text-gray-500 uppercase tracking-wider">{appointment.userId}</td>
              <td className="px-4 py-3 text-center text-lg border font-bold text-gray-500 uppercase tracking-wider">{appointment.name}</td>
              <td className="px-4 py-3 text-center text-lg border font-bold text-gray-500 uppercase tracking-wider">{appointment.gender}</td>
              <td className="px-4 py-3 text-center text-lg border font-bold text-gray-500 uppercase tracking-wider">{appointment.location}</td>
              <td className="px-4 py-3 text-center text-lg border font-bold text-gray-500 uppercase tracking-wider">{appointment.selectedDate}</td>
              <td className="px-4 py-3 text-center text-lg border font-bold text-gray-500 uppercase tracking-wider">{appointment.clinician}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentTable;
