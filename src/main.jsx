import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AllEvents from "./pages/AllEvents.jsx";
import store from "./redux/store.js";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Protected from "./components/shared/AuthLayout.jsx";
import EditEvents from "./pages/EditEvents.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";
import Event from "./pages/Event.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        ),
      },
      {
        path: "/signup",
        element: (
          <Protected authentication={false}>
            <Signup />
          </Protected>
        ),
      },
      {
        path: "/all-events",
        element: (
          <Protected authentication>
            <AllEvents />
          </Protected>
        ),
      },
      {
        path: "/create-event",
        element: (
          <Protected authentication>
            <CreateEvent />
          </Protected>
        ),
      },
      {
        path: "/edit-event/:slug",
        element: (
          <Protected authentication>
            <EditEvents />
          </Protected>
        ),
      },
      {
        path: "/event/:slug",
        element: (
          <Protected authentication>
            <Event />
          </Protected>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <Protected authentication>
            <Dashboard />
          </Protected>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
