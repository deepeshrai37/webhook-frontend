/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import WebhookEvents from "./WebhookEvents";

const Subscribe = () => {
  const [sourceUrl, setSourceUrl] = useState("");
  const [callbackUrl, setCallbackUrl] = useState("");
  const [message, setMessage] = useState("");
  const { user } = useAuth();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      
      await axios.post(
        "http://localhost:5000/api/webhooks/subscribe",
        { sourceUrl, callbackUrl },
        { headers: { Authorization: `${token}` } }
      );

      await axios.post(
        "http://localhost:5000/api/webhooks/events",
        {
          sourceUrl,
          event: {
            type: "event_subscription",
            data: `Subscription Created with ${sourceUrl}` 
          }
        },
        { headers: { Authorization: `${token}` } }
      );

      setMessage("Subscription Created Susscefully");
    } catch (error) {
      console.error("Error subscribing or posting event", error);
      setMessage("Subscription failed");
    }
  };

  return (
    <>
     <div className="subscribe-container">
      <h2>Subscribe to Webhook</h2>
      <form onSubmit={handleSubscribe}>
        <div>
          <label>Source URL</label>
          <input
            type="text"
            value={sourceUrl}
            onChange={(e) => setSourceUrl(e.target.value)}
          />
        </div>
        <div>
          <label>Callback URL</label>
          <input
            type="text"
            value={callbackUrl}
            onChange={(e) => setCallbackUrl(e.target.value)}
          />
        </div>
        <button type="submit">Subscribe</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    <WebhookEvents/>
    </>
   
  );
};

export default Subscribe;
