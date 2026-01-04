# MediMeet Backend

<div align="center">

![MediMeet](https://img.shields.io/badge/MediMeet-Doctor%20Appointment%20System-blue)
![Node.js](https://img.shields.io/badge/Node.js-v14%2B-green)
![Express](https://img.shields.io/badge/Express-v5.1.0-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-v8.15.1-green)
![License](https://img.shields.io/badge/License-ISC-yellow)

</div>

## 📋 Overview

A robust full-stack **Doctor Appointment Booking System** backend built with Node.js, Express.js, and MongoDB. The system streamlines healthcare interactions by allowing users to browse doctors, book appointments, and manage their profiles efficiently.

---

## ✨ Features

### 👨‍⚕️ For Doctors
- Doctor registration and profile management
- Appointment management (view, accept, cancel)
- Dashboard with earnings and statistics
- Profile updates with image upload

### 👤 For Users/Patients
- Browse available doctors by specialty
- Book appointments with preferred doctors
- View and manage appointment history
- Profile management
- Payment integration

### 🔧 For Admins
- Complete dashboard for system management
- Add/remove doctors
- Manage all appointments
- View system-wide statistics
- User management

---

## 🛠️ Tech Stack

- **Runtime:** Node.js (v14+)
- **Framework:** Express.js v5.1.0
- **Database:** MongoDB (Mongoose ODM v8.15.1)
- **Authentication:** JWT (JSON Web Tokens v9.0.2)
- **Password Security:** Bcrypt v6.0.0
- **File Upload:** Multer v2.0.0
- **Cloud Storage:** Cloudinary v2.6.1
- **Validation:** Validator.js v13.15.0
- **CORS:** CORS v2.8.5
- **Environment Variables:** Dotenv v16.5.0

---

## 📁 Project Structure

```
backend/
├── config/
│   ├── cloudinary.js       # Cloudinary configuration
│   └── mongodb.js          # MongoDB connection setup
├── controllers/
│   ├── adminController.js  # Admin business logic
│   ├── doctorController.js # Doctor business logic
│   └── userController.js   # User business logic
├── middlewares/
│   ├── authAdmin.js        # Admin authentication middleware
│   ├── authDoctor.js       # Doctor authentication middleware
│   ├── authUser.js         # User authentication middleware
│   └── multer.js           # File upload middleware
├── models/
│   ├── appointmentModel.js # Appointment schema
│   ├── doctorModel.js      # Doctor schema
│   └── userModel.js        # User schema
├── routes/
│   ├── adminRoute.js       # Admin API routes
│   ├── doctorRoute.js      # Doctor API routes
│   └── userRoute.js        # User API routes
├── DoctorData.json         # Sample doctor data
├── package.json            # Project dependencies
├── requirements.txt        # Dependency version reference
├── server.js               # Application entry point
└── README.md              # This file
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory with the following variables:
   ```env
   # Server Configuration
   PORT=8000

   # MongoDB Configuration
   MONGODB_URI=your_mongodb_connection_string

   # JWT Secret
   JWT_SECRET=your_jwt_secret_key

   # Cloudinary Configuration
   CLOUDINARY_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY=your_cloudinary_api_secret

   # Admin Credentials
   ADMIN_EMAIL=admin@medimeet.com
   ADMIN_PASSWORD=your_admin_password
   ```

4. **Start the server**

   **Development mode (with auto-restart):**
   ```bash
   npm run server
   ```

   **Production mode:**
   ```bash
   npm start
   ```

5. **Verify the server is running**
   ```
   Server is running on PORT 8000
   ```

---

## 🔌 API Endpoints

### Base URL
```
http://localhost:8000
```

### 👨‍💼 Admin Routes (`/api/admin`)
- `POST /login` - Admin login
- `POST /add-doctor` - Add new doctor (requires admin auth)
- `GET /all-doctors` - Get all doctors (requires admin auth)
- `GET /appointments` - Get all appointments (requires admin auth)
- `POST /cancel-appointment` - Cancel appointment (requires admin auth)
- `GET /dashboard` - Get admin dashboard data (requires admin auth)

### 👨‍⚕️ Doctor Routes (`/api/doctor`)
- `POST /login` - Doctor login
- `GET /appointments` - Get doctor appointments (requires doctor auth)
- `POST /complete-appointment` - Mark appointment as complete (requires doctor auth)
- `POST /cancel-appointment` - Cancel appointment (requires doctor auth)
- `GET /dashboard` - Get doctor dashboard data (requires doctor auth)
- `GET /profile` - Get doctor profile (requires doctor auth)
- `POST /update-profile` - Update doctor profile (requires doctor auth)

### 👤 User Routes (`/api/user`)
- `POST /register` - User registration
- `POST /login` - User login
- `GET /profile` - Get user profile (requires user auth)
- `POST /update-profile` - Update user profile (requires user auth)
- `POST /book-appointment` - Book an appointment (requires user auth)
- `GET /appointments` - Get user appointments (requires user auth)
- `POST /cancel-appointment` - Cancel appointment (requires user auth)
- `GET /doctors` - Get list of all doctors
- `POST /payment` - Process payment (requires user auth)

---

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Three types of authentication are implemented:

1. **Admin Authentication** - Full system access
2. **Doctor Authentication** - Access to doctor-specific features
3. **User Authentication** - Access to patient-specific features

### Using Authentication

Include the JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

---

## 📦 Dependencies

### Production Dependencies
- `bcrypt@^6.0.0` - Password hashing
- `cloudinary@^2.6.1` - Cloud storage for images
- `cors@^2.8.5` - Cross-origin resource sharing
- `dotenv@^16.5.0` - Environment variables
- `express@^5.1.0` - Web framework
- `jsonwebtoken@^9.0.2` - JWT implementation
- `mongoose@^8.15.1` - MongoDB ODM
- `multer@^2.0.0` - File upload handling
- `validator@^13.15.0` - Input validation

### Development Dependencies
- `nodemon@^3.1.10` - Development server auto-reload

For detailed version information, see [requirements.txt](requirements.txt).

---

## 🗄️ Database Models

### User Model
- Name, email, password
- Contact information
- Address
- Gender, date of birth
- Profile image

### Doctor Model
- Name, email, password
- Specialization
- Degree, experience
- About section
- Fees
- Address
- Availability status
- Appointment slots

### Appointment Model
- User ID, Doctor ID
- Appointment date & time
- Amount
- Status (pending, completed, cancelled)
- Payment status
- Timestamps

---

## 🔧 Configuration Files

### Cloudinary (`config/cloudinary.js`)
Handles image upload and storage configuration.

### MongoDB (`config/mongodb.js`)
Manages database connection with error handling.

---

## 🛡️ Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Route protection with custom middleware
- Input validation and sanitization
- CORS configuration
- Environment variable protection

---

## 📝 Scripts

```json
{
  "start": "node server.js",           // Production mode
  "server": "nodemon server.js",       // Development mode with auto-reload
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

---

## 🐛 Error Handling

The API implements comprehensive error handling:
- 404 handler for unmatched routes
- Authentication errors
- Validation errors
- Database errors
- File upload errors

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License.

---

## 🙏 Acknowledgments

- Express.js community
- MongoDB documentation
- Cloudinary API documentation
- All contributors and supporters

---

<div align="center">
Made with ❤️ by Kasfia Mostafa
</div>
