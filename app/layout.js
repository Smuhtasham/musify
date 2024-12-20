"use client"
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";


// Create a Query Client instance
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
