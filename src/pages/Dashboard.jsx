/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Subscribe from "./Subscribe";

const Dashboard = () => {
  const [webhooks, setWebhooks] = useState([]);
  const { user, logout } = useAuth();

  useEffect(() => {
    const fetchWebhooks = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:5000/api/webhooks/list",
          {
            headers: { Authorization: `${token}` },
          }
        );
        setWebhooks(response.data);
      } catch (error) {
        console.error("Error fetching webhooks", error);
      }
    };

    fetchWebhooks();
  }, [webhooks]);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/webhooks/cancel/${id}`, {
        headers: { Authorization: `${token}` },
      });
      setWebhooks(webhooks.filter((webhook) => webhook._id !== id));
      console.log('Subscription Cancelled');
    } catch (error) {
      console.error("Error deleting webhook", error);
    }
  };

  return (
    <>
      <div className="dashboard-container">
        <h2>Dashboard</h2>
        <button onClick={logout}>Logout</button>
        <h3>Your Webhooks</h3>
        <ul>
          {webhooks.map((webhook) => (
            <li key={webhook._id}>
              {webhook.sourceUrl} - {webhook.callbackUrl}
              <button onClick={() => handleDelete(webhook._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <Subscribe />
    </>
  );
};

export default Dashboard;
