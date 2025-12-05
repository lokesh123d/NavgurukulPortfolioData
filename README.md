# NavGurukul Student Portfolios

## Project Description
This is a web application built to manage and showcase the portfolios of students from NavGurukul. The main goal of this project is to provide a digital platform where students can display their skills, projects, and bio to potential recruiters and the world.

The application consists of two main parts:
1. **Public View**: A beautiful, responsive gallery where anyone can browse through student profiles.
2. **Admin Panel**: A secure, password-protected dashboard that allows administrators to add new students, update existing details, or remove profiles. All changes happen in real-time.

## Features
- **Live Student Gallery**: Automatically updates whenever new data is added.
- **Admin Dashboard**: Secure login system to manage student data.
- **Real-time Updates**: Uses Firebase Realtime Database to sync data instantly across all devices.
- **Responsive Design**: Fully optimized for laptops, tablets, and mobile phones.
- **Secure Authentication**: Only authorized admins can access the dashboard.

## Technologies Used
- **Frontend**: React.js, Vite
- **Styling**: Modern CSS (Glassmorphism effects, Responsive Grid)
- **Backend**: Firebase Realtime Database
- **Authentication**: Firebase Auth
- **Deployment**: Vercel

## How to Run Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/lokesh123d/NavgurukulPortfolioData.git
   cd NavgurukulPortfolioData
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Variables**
   Create a file named `.env` in the root folder and add your Firebase credentials (see `.env.example`).

4. **Start the Server**
   ```bash
   npm run dev
   ```

## Deployment
This project is deployed on Vercel. To deploy your own version:
1. Push your code to GitHub.
2. Import the project into Vercel.
3. Add the Environment Variables in Vercel Settings.
4. Deploy.

## License
This project is created for NavGurukul to help students showcase their talent.
