# Tale3 - Bus Reservation System

**Tale3** is a web-based bus reservation system that allows users to sign up, log in, book bus rides, rate their experience, and more. This project was developed as part of our Web Development 2 course using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

---

## 📌 Features

- 🏠 **Home Page**: User-friendly landing page with navigation.
- 🧾 **Signup/Login**: Secure authentication system for users.
- 📅 **Booking Page**: Users can reserve a seat on a selected bus.
- 📋 **Admin Panel**: Admins can manage bookings and view users.
- 📝 **Rating System**: Passengers can evaluate their trip experience.
- 📄 **About Us Page**: Information about the project and developers.
- 🔄 **Update Page**: Allows users to update their personal data.
- 🔐 **Private Routes**: Secure pages accessible only to authenticated users.

---

## 🧰 Technologies Used

### Frontend (React.js)
- React Router DOM for client-side routing
- Reusable components such as:
  - `Navbar`, `Footer`, `About`, `BookingForm`, `Evaluation`, etc.
- Custom pages for:
  - `/signup`, `/login`, `/booking`, `/about`, `/evaluation`, `/update`, `/schedule`

### Backend (Node.js + Express.js)
- RESTful API with multiple endpoints:
  - `/api/auth` - for authentication
  - `/api/users` - user management
  - `/api/BBook` - bus booking system
  - `/evaluation` - ratings and feedback
- MongoDB with Mongoose
- Environment variables managed using `dotenv`
- `cors` and `body-parser` middlewares enabled

---

## 📂 Project Structure
Tale3/
├── client/ # React frontend
│ ├── components/ # Reusable components
│ ├── pages/ # Different route pages
│ └── App.js # Routes & main structure
├── server/ # Node backend
│ ├── routes/ # Route handlers
│ ├── models/ # MongoDB models (not shown here)
│ └── server.js # Express setup
├── .env # Environment variables (not included)
└── README.md # Project documentation


---

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/tale3.git
   cd tale3
 
 2-   Install server dependencies:
   cd server
   npm install
 
   3- Create a .env file in the server folder: 
   MONGO_URI=your_mongodb_connection_string
   PORT=4000
  Start the server:
  npm start
5- Install client dependencies:
cd ../client
npm install

6- Start the React app:
npm start

نسخ
تحرير

نسخ
تحرير








