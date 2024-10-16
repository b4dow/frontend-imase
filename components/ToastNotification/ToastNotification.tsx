"use client";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

export function ToastNotification() {
  return <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />;
}
