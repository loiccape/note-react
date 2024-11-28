import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";

import './index.css'
import LoginPage from "./pages/LoginPage";
import AllNotesPage from "./pages/AllNotesPage";
import { NoteProvider } from "./hooks/NoteContext";
import NoteDetailPage from "./pages/NoteDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path:"/all-notes",
    element: <AllNotesPage/>
  },
  {
    path:"/note",
    element: <NoteDetailPage/>
  }
]);

createRoot(document.getElementById("root")!).render(
  <NoteProvider>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </NoteProvider>
);