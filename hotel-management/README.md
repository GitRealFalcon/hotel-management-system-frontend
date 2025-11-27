
# Hotel Management — Frontend

Modern, responsive frontend for a hotel management system built with React, Vite, and Redux Toolkit.

---

## 🚀 Overview

This repository contains the frontend of the Hotel Management System. It provides the user-facing UI for guests and an admin dashboard. Key functionality includes user authentication, room browsing, booking flow, payment integration (Razorpay), and administrative dashboards for customers, bookings, check-ins, and payments.

## 🧭 Key Features

- Authentication (Signup/Login) with automatic token management
- Browse rooms and make bookings
- Admin dashboard for managing customers, bookings, rooms, payments, and check-ins
- Payment integration using Razorpay
- Charts and dashboards with Chart.js for reports
- UI styled with Tailwind CSS & MUI components
- State management via Redux Toolkit

## 🔧 Tech Stack

- React (v19)
- Vite
- Redux Toolkit
- React Router
- MUI (Material UI)
- Tailwind CSS
- Axios for HTTP
- Razorpay for payments
- Chart.js + react-chartjs-2
- React Hook Form

## 📁 Folder Structure (Important files)

- `src/` — application source
	- `api/` — Axios instance and API configuration
	- `app/` — Redux store configuration
	- `components/` — reusable UI components (navbar, footer, forms, etc.)
	- `conf/confDotENV.js` — exports `VITE_BASE_URL` configuration
	- `features/` — Redux slices (auth, rooms, bookings, payments, etc.)
	- `pages/` — Top-level route pages (Home, Rooms, Bookings, Dashboard, etc.)
	- `payment/` — Razorpay integration helpers
	- `utils/` — helper utilities (error handling)

## 🔁 API & Environment

The app expects a backend API. By default, the Axios client falls back to `http://localhost:8000/api/v1`. You can change the value using a Vite environment variable.

- Environment variable: `VITE_BASE_URL`
	- Example `.env` value: `VITE_BASE_URL="http://localhost:8000/api/v1"`

Note: The project reads the base URL from `src/conf/confDotENV.js` which uses `import.meta.env.VITE_BASE_URL`.

The frontend calls endpoints similar to:
- `/users/register` (POST): create user
- `/users/login` (POST): login (returns token)
- `/users/get-user-details` (GET): get logged-in user
- `transections/create-order` (POST): create Razorpay order
- `transections/verify-payment` (POST): verify a payment

These paths are prefixed by the `VITE_BASE_URL` used by Axios.

## ⚙️ Development Setup

1. Install dependencies

```powershell
npm install
```

2. Create a `.env` file in the project root and add the backend base URL

```powershell
echo VITE_BASE_URL="http://localhost:8000/api/v1" > .env
```

3. Run the development server

```powershell
npm run dev
```

4. Open the app in your browser (default Vite host is usually):
http://localhost:5173

## 📦 Production Build

```powershell
npm run build
npm run preview
```

## 🧪 Linting

Run ESLint:

```powershell
npm run lint
```

## 🔁 Auth & Token Handling

- Login stores a Bearer token in `localStorage` (`token`).
- Axios attaches the token to the Authorization header for authenticated requests.
- `fetchUser` in `src/features/auth/authThunks.js` fetches the current user details.

## 💳 Payments

- Payment flow uses Razorpay; the frontend expects the backend to create orders and return a key + order ID for the Razorpay popup.
- The `handlePayment` helper calls server endpoints to create and verify payments.

## 🧰 Notes & Development Tips

- If your API is served on a separate host, set `VITE_BASE_URL` accordingly.
- The Axios interceptor for errors tries to redirect to `/login` on 401 — it attempts to use `useNavigate` inside Axios interceptors, which may cause issues. Consider moving the error handling into a shared helper or hooking it into a Redux thunk dispatch.
- Ensure backend responses match expectations (data keys like `data.user`, `data.token`, etc.)

## 🤝 Contributions

Contributions are welcome. Please open an issue for major changes or improvements and send a PR describing the purpose and modifications.

## 📜 License

No license file is included — make sure to add a license to the repo if you want to open-source or clarify usage permissions.

---

If you want, I can also:
- Add an example `.env.example` to document env variables
- Add a CONTRIBUTING.md template
- Add a `Dockerfile` for simple containerization

Let me know which of these you'd like next! ✅
