<img width="1893" height="868" alt="image" src="https://github.com/user-attachments/assets/05bcc351-c644-4e99-b3d0-5ff4297bd063" />
https://movie-app-fsd.vercel.app/

# Movie App
A high-performance movie discovery application utilizing the TMDB API. This project is built with a focus on Clean Architecture and Scalable State Management.

## Tech Stack
* Framework: React 19 with TypeScript
* State Management: Redux Toolkit (RTK)
* Data Fetching: RTK Query with advanced caching
* Routing: React Router Dom v6
* Architecture: Feature-Sliced Design (FSD)

## Key Features & Goals
* Resource Optimization: Implemented RTK Query caching to minimize server requests and improve performance.
* Dynamic Routing: Flexible detail pages using URL parameters and custom hooks.
* Global Filtering: Centralized state for search queries, genres, and year filters.
* Data Integrity: Comprehensive TypeScript interfaces for API responses and component props.

## Setup
1. npm install
2. Add VITE_TMDB_API_KEY to your .env file
3. npm run dev
