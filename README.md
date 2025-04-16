# Real-time Chat Application

A simple and scalable real-time chat application built with **React**, **TypeScript**, and **Socket.IO**.

Users can join the chat by entering a username and instantly start communicating in real-time.

---

## Features

- 💬 Real-time messaging with Socket.IO  
- 🎨 Themed UI with styled-components 
- 📱 Responsive design  
- 🛠️ Error boundaries
- Auto-scroll to Latest Message
- Preserve session using sessionStorage
- Message Persistence ensuring chat history is not lost on refresh
- Shows username & timestamp of each message
- Modular and scalable codebase (with contexts, hooks, types)
- Input validations (min/max length, required)


---

## Tech Stack

**Frontend**  
- React + TypeScript  
- Context API + Hooks  
- Styled-components  
- Vite 
- React Testing Library + Vitest  

**Backend (optional)**  
- Node.js + Express  
- Socket.IO  
- PostgreSQL

---

## 🔌 Backend Integration

- **API & Realtime Communication**: Handled by Express and Socket.IO.
- **Database**: PostgreSQL accessed via Prisma ORM.
- **Environment Variables**:
  - `DATABASE_URL`: PostgreSQL connection string
  - `PORT`: Backend port
- **Running**:
  - Backend runs on `http://localhost:5000`
  - Frontend communicates with backend over WebSocket (`/socket.io`)

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- PostgreSQL (locally or remote)
- Docker (optional for containerized setup)

### Installation

```bash
#Clone the frontend repo
git clone https://github.com/javedalikhan/realtime-chat-frontend.git
cd realtime-chat-frontend

#Install dependencies
npm install
```

### Running the App locally

```bash
npm run dev
```

### Open the app in browser(localhost)

```bash
Open http://localhost:5173 in your browser
```

### Running Tests

```bash
npm test
```


### 📦 Build for Production

```bash
npm run build
```

---

## Backend Integration

Make sure backend service is up and running.

Example:

```bash
## The backend repo for this project is available here with complete instructions:
https://github.com/javedalikhan/realtime-chat-backend
```

---

## Project Structure

```
realtime-chat-frontend/
│
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   ├── contexts/           # Context providers (e.g., ChatContext)
│   ├── hooks/              # Custom React hooks
│   ├── styles/             # Styled-components or CSS modules
│   ├── types/              # TypeScript types/interfaces
│   ├── utils/              # Utility/helper functions
│   ├── App.tsx             # Main App component
│   ├── main.tsx            # Entry point
│
├── .env                   # Environment variables
├── vite.config.ts         # Vite configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

---


## License

This project is licensed under the MIT License.

## 🚀 Possible Enhancements

### 🌟 Feature Enhancements
- **User Authentication**
  - Implement login/signup using JWT or OAuth
  - Add support for anonymous guest mode
- **Chat Rooms / Channels**
  - Support multiple chat rooms or topic-based channels
  - Option to create/join private rooms
- **Typing Indicators**
  - Show “User is typing…” when someone is composing a message

### 🎨 UI/UX Improvements
- **Dark Mode / Theme Switcher**
- **Message editing and deletion** (with confirmation)

### 🔧 Code & Architecture
- **Use Redux Toolkit or Zustand**
  - For more scalable state management in frontend
- **Form Validation with Yup or Zod**
  - Stronger frontend validation with schema-based libraries
- **Pagination / Infinite Scroll for Chat History**
- **Unit + Integration + E2E Testing**
  - Add Playwright or Cypress for frontend E2E
