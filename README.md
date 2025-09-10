# Quote Generator

By  ly Sokunvoath

## Description

This is a simple web application that displays random quotes. It is built using React for the frontend, Vite for the build tool, and Supabase for the backend to store and retrieve quotes.

## Setup Instructions

To run this project locally, follow these steps:

1.  **Clone the repository:**
    bash
    git clone [(https://github.com/Lysokunvoath/Dynamic-quote-generator)
    
2.  **Navigate to the project directory:**
    bash
    cd QuoteGenerator
    
3.  **Install dependencies:**
    bash
    npm install
    
4.  **Run the development server:**
    bash
    npm run dev
    

## Architecture Explanation

The architecture of this project is a simple client-server model:

*   **Frontend:** The frontend is a single-page application built with React. It is responsible for rendering the user interface and fetching quotes from the backend.
*   **Backend:** The backend is powered by Supabase, a Backend-as-a-Service (BaaS) platform. Supabase provides a PostgreSQL database and a RESTful API to interact with the data.
*   **Database:** The quotes are stored in a PostgreSQL database managed by Supabase. The frontend communicates with the database through the Supabase API.

The `supabaseClient.ts` file in the `src` directory contains the logic for connecting to the Supabase backend and fetching the quotes. The React components in `App.tsx` then use this client to get the data and display it to the user.