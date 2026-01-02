# Movie App (In Progress)
A high-performance movie discovery application utilizing the TMDB API. This project is built with a focus on Clean Architecture and Scalable State Management.

## Tech Stack
* Framework: React 19 with TypeScript
* State Management: Redux Toolkit (RTK)
* Data Fetching: RTK Query with advanced caching
* Routing: React Router Dom v6
* Architecture: Inspired by Feature-Sliced Design (FSD)

## Key Features & Goals
* Resource Optimization: Implemented RTK Query caching to minimize server requests and improve performance.
* Dynamic Routing: Flexible detail pages using URL parameters and custom hooks.
* Global Filtering: Centralized state for search queries, genres, and year filters.
* Data Integrity: Comprehensive TypeScript interfaces for API responses and component props.

## Current Status
* The project is under active development. Current focus: implementing movie detail pages and refining the caching strategy.

## Setup
1. npm install
2. Add VITE_TMDB_API_KEY to your .env file
3. npm run dev
