# EduBridge - Coursera for Iranian Students

EduBridge is an educational platform designed to help Iranian students access Coursera courses and degree programs by overcoming regional restrictions. This application provides resources, guides, and tools to make world-class education accessible to students in Iran.

## Features

- Course catalog with detailed information about available Coursera courses
- Degree program listings from top global universities
- Access guides for overcoming regional restrictions
- Supplementary learning resources
- Comprehensive information on payment methods and financial aid
- Step-by-step tutorials for navigating the Coursera platform

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/edubridge.git
cd edubridge
```

2. Install dependencies:
```
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
VITE_PUBLIC_APP_ID=
VITE_PUBLIC_APP_ENV=
VITE_PUBLIC_SENTRY_DSN=
VITE_PUBLIC_UMAMI_WEBSITE_ID=
COURSERA_API_KEY=
```

4. Start the development server:
```
npm run dev
```

## Built With

- React - Frontend framework
- Vite - Build tool
- Tailwind CSS - CSS framework
- React Router - Navigation
- Sentry - Error tracking

## Deployment

The application is configured for deployment on Vercel.