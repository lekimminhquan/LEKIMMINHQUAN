import React from 'react'
import { MantineProvider } from "@mantine/core";
import "./globals.css";
import '@mantine/core/styles.css';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" rel="stylesheet"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    </head>
    <body>
      <MantineProvider theme={{
        fontFamily: 'Inter, sans-serif',
      }}>
        {children}
      </MantineProvider>
    </body>
  </html>
  );
}
