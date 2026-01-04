# Habit Builder

A modern, responsive habit tracking application built with React 19 and Vite. Helper Builder allows users to create, track, and manage their daily habits with an intuitive interface and visual statistics.

## ✨ Features

- **Habit Management**: Easily add, edit, and delete habits.
- **Daily Tracking**: Mark habits as completed for the current day or toggle past dates.
- **Visual Statistics**:
  - **Streaks**: Track your current streak of consecutive days.
  - **Completion Rate**: View your total completion count.
  - **Monthly Stats**: Detailed views for long-term habits.
- **Data Persistence**: All data is saved locally using the browser's LocalStorage, so you never lose your progress.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Modern UI**: Clean and minimal interface styled with Tailwind CSS.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Linting**: ESLint

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have Node.js installed on your system.
- [Node.js](https://nodejs.org/) (Version 16 or higher recommended)

### Installation

1.  **Clone the repository** (or download usage files):
    ```bash
    git clone <repository-url>
    cd habit-builder
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```
    The application will typically start at `http://localhost:5173`.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📂 Project Structure

```
src/
├── components/      # React components
│   ├── HabitGrid.jsx
│   ├── HabitItem.jsx
│   ├── HabitList.jsx
│   └── StatsView.jsx
├── hooks/           # Custom hooks
│   └── useHabits.js # Logic for habit state & local storage
├── assets/          # Static assets
├── App.jsx          # Main application component
├── main.jsx         # Entry point
└── index.css        # Global styles & Tailwind imports
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

- © 2025 `Haseeb Javed.` All rights reserved.
