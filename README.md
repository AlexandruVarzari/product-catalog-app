# Product Catalog Application

A modern e-commerce product catalog application built with React, TypeScript, and Vite. This application demonstrates a clean implementation of a product listing with shopping cart functionality, filtering, and sorting capabilities.

## Features

- 🛍️ **Product Catalog**: Browse through a collection of products with detailed information
- 🛒 **Shopping Cart**: Add/remove items and manage quantities
- 🔍 **Filtering**: Filter products by category
- 📊 **Sorting**: Sort products by price (ascending/descending)
- 🎨 **Responsive Design**: Mobile-friendly interface
- ⚡ **Performance**: Built with Vite for optimal performance
- 🔒 **Type Safety**: Full TypeScript implementation

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router v6
- Axios for API calls
- CSS for styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AlexandruVarzari/product-catalog-app.git
cd product-catalog-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── context/       # React Context for state management
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── services/      # API and other services
└── types/         # TypeScript type definitions
```

## Features Implementation

### Product Listing

- Fetches products from the Fake Store API
- Displays product cards with images, titles, prices, and categories
- Implements infinite scroll for better performance

### Shopping Cart

- Add/remove items
- Update quantities
- Calculate total price
- Persistent cart state using Context API

### Filtering and Sorting

- Filter products by category
- Sort products by price (ascending/descending)
- Real-time updates without page refresh

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Integration

The application uses the [Fake Store API](https://fakestoreapi.com/) for product data.

## Future Improvements

- Add user authentication
- Implement product search
- Add product details page
- Implement checkout process
- Add more unit tests
- Implement error boundaries
- Add loading skeletons

## License

This project is part of a technical assessment and is not licensed for public use.

## Author

Alexandru Varzari
