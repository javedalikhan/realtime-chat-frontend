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

**Backend (https://github.com/javedalikhan/realtime-chat-backend)**  
- Node.js + Express  
- Socket.IO  
- PostgreSQL
- [Backend Repo](https://github.com/javedalikhan/realtime-chat-backend)

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- **PostgreSQL** (only required for backend, not frontend)
- **Docker** (optional for containerized setup of backend)

### Environment Variables
- Add the `.env` file
Before running the app, create a `.env` file in the root directory. You can copy the values from `.env.example` and fill in the required values, such as API URLs or other environment-specific settings.

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
This project uses **React Testing Library** for unit and integration tests, and **Vitest** for running the tests.

To run the tests:
```bash
npm test
```


### 📦 Build for Production

```bash
npm run build
```

---

### Backend Integration
Make sure the backend service is up and running. The frontend expects the backend API to be running on `http://localhost:3001` (or the URL specified in your `.env` file).

The backend repo for this project is available here with complete instructions:
https://github.com/javedalikhan/realtime-chat-backend

---

## Project Structure

```
realtime-chat-frontend
├─ LICENSE
├─ README.md
├─ env.d.ts
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ src
│  ├─ App.tsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ chat
│  │  │  ├─ ErrorFallback
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ styles.ts
│  │  │  ├─ MessageInput
│  │  │  │  ├─ MessageInput.test.tsx
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ styles.ts
│  │  │  ├─ MessageList
│  │  │  │  ├─ MessageList.test.tsx
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ styles.ts
│  │  │  ├─ UserNameForm
│  │  │  │  ├─ UserNameForm.test.tsx
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ styles.ts
│  │  │  └─ index.ts
│  │  └─ layout
│  │     ├─ Footer.tsx
│  │     └─ Header.tsx
│  ├─ contexts
│  │  └─ ChatContext
│  │     ├─ hooks.ts
│  │     ├─ index.ts
│  │     ├─ provider.tsx
│  │     └─ types.ts
│  ├─ hooks
│  │  ├─ useAutoScroll.ts
│  │  ├─ useSessionStorage.ts
│  │  └─ useSocket.tsx
│  ├─ main.tsx
│  ├─ services
│  │  ├─ api.ts
│  │  ├─ httpClient.ts
│  │  ├─ index.ts
│  │  └─ socket.ts
│  ├─ styles
│  │  ├─ GlobalStyles.ts
│  │  ├─ styled.d.ts
│  │  └─ theme.ts
│  ├─ types
│  │  └─ chat.ts
│  ├─ vite-env.d.ts
│  └─ vitest.config.ts
├─ test-utils
│  ├─ mocks
│  │  └─ serverHandlers.ts
│  └─ testUtils.tsx
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
├─ tsconfig.test.json
├─ vite.config.ts
└─ vitest.setup.ts

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
