# Webhook Subscription System

## Overview

This project is a Node.js-based application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to subscribe to webhooks and handle incoming webhook events. Users can register, log in, manage their webhook subscriptions, and view incoming events through a React.js frontend.

## Features

1. User Registration and Authentication
2. Webhook Subscription Management
3. Handling and Viewing Webhook Events
4. JWT-based Authentication
5. Simulation of Webhook Events

## Instalation(Make sure backend service is running )

cd frontend
npm install

npm run dev

## Components

AuthProvider: Context for managing authentication state.
PrivateRoute: Higher-order component for protecting routes.
Login: Login page.
Register: Registration page.
Dashboard: User dashboard displaying webhooks and allowing subscription management.
Subscribe: Form for subscribing to a new webhook.
WebhookEvents: Page for displaying incoming webhook events.

## Routing

The frontend uses React Router v6 for navigation. Routes are protected using the PrivateRoute component, ensuring only authenticated users can access certain pages.

## Folder Structure

frontend
│
├── src
│ ├── components
│ │ ├── PrivateRoute.jsx
│ │
│ ├── context
│ │ ├── AuthContext.js
│ │
│ ├── hooks
│ │ ├── useAuth.js
│ │
│ ├── pages
│ │ ├── Dashboard.jsx
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ ├── Subscribe.jsx
│ │ ├── WebhookEvents.jsx
│ │
│ ├── App.jsx
│ ├── index.js
│ ├── authService.js
│
└──
