# MediMeet Admin Portal

A comprehensive medical appointment management system built with React and Vite. This admin portal provides separate interfaces for administrators and doctors to manage appointments, patient records, and medical services.

## 🌟 Features

### Admin Features
- **Dashboard**: Overview of appointments, doctors, and system statistics
- **Doctor Management**: Add, view, and manage doctor profiles
- **Appointments Management**: View and manage all patient appointments
- **User Authentication**: Secure login and role-based access control

### Doctor Features
- **Doctor Dashboard**: Personalized dashboard with appointment statistics
- **Appointment Management**: View and manage patient appointments
- **Profile Management**: Update professional information and availability

## 🚀 Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.7
- **Routing**: React Router DOM 7.6.1
- **HTTP Client**: Axios 1.9.0
- **Notifications**: React Toastify 11.0.5
- **Code Quality**: ESLint 9.25.0

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd admin-portal
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (if required):
```bash
# Create a .env file in the root directory
# Add your environment variables
```

## 🏃‍♂️ Running the Application

### Development Mode
Start the development server with hot reload:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Production Build
Build the application for production:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Linting
Run ESLint to check code quality:
```bash
npm run lint
```

## 📁 Project Structure

```
admin-portal/
├── public/
│   └── DoctorImage/        # Doctor profile images
│       ├── female/
│       └── Male/
├── src/
│   ├── assets/             # Static assets
│   │   └── assets.js
│   ├── components/         # Reusable components
│   │   ├── DoctorCard.jsx
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   ├── context/            # React Context providers
│   │   ├── AdminContext.jsx
│   │   ├── AppContext.jsx
│   │   └── DoctorContext.jsx
│   ├── layouts/            # Layout components
│   │   ├── AdminLayout.jsx
│   │   └── DoctorLayout.jsx
│   ├── pages/              # Page components
│   │   ├── admin/
│   │   │   ├── AddDoctor.jsx
│   │   │   ├── AllAppointments.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── DoctorsList.jsx
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   ├── NotAuthorized.jsx
│   │   │   └── NotFound.jsx
│   │   └── doctor/
│   │       ├── DoctorAppointments.jsx
│   │       ├── DoctorDashboard.jsx
│   │       └── DoctorProfile.jsx
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── eslint.config.js        # ESLint configuration
├── vite.config.js          # Vite configuration
├── vercel.json             # Vercel deployment configuration
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

## 🔑 Key Components

### Context Providers
- **AdminContext**: Manages admin-related state and operations
- **AppContext**: Global application state
- **DoctorContext**: Manages doctor-related state and operations

### Layouts
- **AdminLayout**: Layout wrapper for admin pages
- **DoctorLayout**: Layout wrapper for doctor pages

### Routing Structure
- `/admin/dashboard` - Admin dashboard
- `/admin/doctors` - Doctors list
- `/admin/add-doctor` - Add new doctor
- `/admin/appointments` - All appointments
- `/doctor/dashboard` - Doctor dashboard
- `/doctor/appointments` - Doctor appointments
- `/doctor/profile` - Doctor profile
- `/login` - Authentication page

## 🌐 Deployment

This project is configured for deployment on Vercel. The `vercel.json` file contains the necessary configuration.

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🔧 Configuration Files

- **vite.config.js**: Vite build configuration
- **eslint.config.js**: ESLint rules and settings
- **vercel.json**: Vercel deployment settings
- **tailwind.config.js**: Tailwind CSS configuration (auto-configured with Vite plugin)

## 📝 Version

Current version: **1.0.0** (see VERSION file)

## 📄 License

This project is licensed under the MIT License.

## 👥 Author

MediMeet Team

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Support

For support, please contact the MediMeet Team.

---

Built with ❤️ using React and Vite
