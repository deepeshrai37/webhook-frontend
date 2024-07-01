/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const WebhookEvents = () => {
  const [events, setEvents] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:5000/api/webhooks/list",
          {
            headers: { Authorization: `${token}` },
          }
        );
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events", error);
      }
    };

    fetchEvents();
  }, [events]);

  return (
    <div className="webhook-events-container">
      <h2>Webhook Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>Source URL:</strong> {event.sourceUrl}
            <br />
            <strong>Callback URL:</strong> {event.callbackUrl}
            <br />
            <strong>Event:</strong> 
            {event.events && Array.isArray(event.events) ? (
              <ul>
                {event.events.map((e, i) => (
                  <li key={i}>
                    <strong>Type:</strong> {e.type}
                    <br />
                    <strong>Data:</strong> {e.data}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No event data available</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WebhookEvents;
