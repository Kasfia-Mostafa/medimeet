# 🏥 MediMeet - Medical Appointment Booking Platform

A modern, responsive medical appointment booking system built with React and Vite. MediMeet connects patients with healthcare professionals, making it easy to find doctors, book appointments, and manage medical consultations.

## ✨ Features

- 🔍 **Find Doctors** - Browse and search healthcare professionals by specialty
- 📅 **Book Appointments** - Easy appointment scheduling system
- 👤 **User Profiles** - Manage your personal information and medical history
- 📱 **Responsive Design** - Seamless experience across all devices
- 🔔 **Notifications** - Real-time updates with React Toastify
- 🎨 **Modern UI** - Built with TailwindCSS for a clean, professional look

## 🚀 Tech Stack

- **Frontend Framework:** React 19.0.0
- **Build Tool:** Vite 6.2.0
- **Styling:** TailwindCSS 4.0.14
- **Routing:** React Router DOM 7.3.0
- **HTTP Client:** Axios 1.8.3
- **Notifications:** React Toastify 11.0.5
- **Code Quality:** ESLint 9.21.0

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js:** >= 20.12.2 (LTS recommended)
- **npm:** >= 10.0.0

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd MediMeet/frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_backend_api_url
VITE_APP_NAME=MediMeet
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 📁 Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, icons, and media files
│   │   ├── assets_admin/
│   │   └── assets_frontend/
│   ├── components/     # Reusable React components
│   │   ├── Banner.jsx
│   │   ├── ConfirmModal.jsx
│   │   ├── DoctorCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── RelatedDoctors.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SpecialityMenu.jsx
│   │   └── TopDoctors.jsx
│   ├── context/        # React Context API
│   │   └── AppContext.jsx
│   ├── pages/          # Page components
│   │   ├── About.jsx
│   │   ├── Appointment.jsx
│   │   ├── Appointments.jsx
│   │   ├── Contact.jsx
│   │   ├── Doctors.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── NotFound.jsx
│   │   └── Profile.jsx
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── .nvmrc              # Node version specification
├── .node-version       # Node version for version managers
├── eslint.config.js    # ESLint configuration
├── index.html          # HTML entry point
├── package.json        # Project dependencies
├── vite.config.js      # Vite configuration
└── vercel.json         # Vercel deployment config
```

## 🌐 Deployment

### Deploy to Vercel

This project is configured for Vercel deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` directory.

## 🔧 Configuration

### Vite Configuration

The project uses Vite for fast development and optimized builds. Configuration can be found in `vite.config.js`.

### ESLint Configuration

Code quality rules are defined in `eslint.config.js`. Run linting with:

```bash
npm run lint
```

### TailwindCSS

TailwindCSS 4.0 is configured via the Vite plugin. Customize styles in `index.css` and component files.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Development Guidelines

- Follow the existing code style and structure
- Write clean, readable code with meaningful variable names
- Test your changes thoroughly before submitting
- Update documentation as needed
- Use ESLint to maintain code quality

## 🐛 Troubleshooting

### Node Version Issues

If using nvm (Node Version Manager):

```bash
nvm use
```

### Dependency Conflicts

Clear cache and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use

Change the port in `vite.config.js` or kill the process using port 5173.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Kasfia Mostafa

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing fast build tool
- TailwindCSS for the utility-first CSS framework

---

Made with ❤️ by the MediMeet Team
