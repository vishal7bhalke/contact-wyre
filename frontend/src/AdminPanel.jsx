import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [students, setStudents] = useState([]);
  const navigate= useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/students").then((res) => {
      setStudents(res.data);
      toast.success("Data fetched successfully!");
      console.log(res.data);
    });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">All form Submissions</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Mobile</th>
              <th className="px-6 py-3 text-left">DOB</th>
              <th className="px-6 py-3 text-left">College</th>
              <th className="px-6 py-3 text-left">Gender</th>
              <th className="px-6 py-3 text-left">Caste</th>
              <th className="px-6 py-3 text-left">Address</th>
              <th className="px-6 py-3 text-left">Year</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {students.map((s) => (
              <tr key={s._id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{s.name}</td>
                <td className="px-6 py-4">{s.email}</td>
                <td className="px-6 py-4">{s.mobile_no}</td>
                <td className="px-6 py-4">{s.date_of_birth}</td>
                <td className="px-6 py-4">{s.college}</td>
                <td className="px-6 py-4">{s.gender}</td>
                <td className="px-6 py-4">{s.caste}</td>
                <td className="px-6 py-4">{s.address}</td>
                <td className="px-6 py-4">{s.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    <div className="mt-6 flex justify-center">
  <button onClick={()=> navigate('/')}
    className="px-6 py-2 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-md shadow-md hover:from-purple-500 hover:to-blue-500 transition duration-300"
  >
    ⬅ Back to Form
  </button>
</div>
   </div>
  );
};

export default AdminPanel;
