# 🌤️ ESP32 Cloud Weather Station

### 🧠 About

This is a demo project that tests WiFi communication between an ESP32 microcontroller and a local Express.js server with a simple React client. The goal was to explore how sensor data (e.g. temperature) could be retrieved over HTTP and exposed to a client application.

> ⚠️ Note: The ESP32 firmware was not authored by me and is not included in this repository — it was only used for testing purposes ("vibe coded").

---

### ⚙️ Technologies Used

**Server**  
- [Express.js](https://expressjs.com/) – REST API
- [CORS](https://www.npmjs.com/package/cors) – cross-origin communication
- [Axios](https://axios-http.com/) – HTTP client for server-to-ESP communication

**Client**  
- [React](https://reactjs.org/) – minimal UI
- [Axios](https://axios-http.com/) – fetching data from the API

**ESP32**  
- C/C++ (Arduino framework) – running a lightweight HTTP server to respond with mock temperature/humidity data

---

### 🚀 Features

- Simple REST API (`/iot/temperature`, `/iot/humidity`) that retrieves or receives sensor data
- Frontend with a single toggle button that triggers temperature fetch from ESP32 (via server)
- CORS configuration for secure client-server communication in LAN
- Mock fallback for testing without a live ESP32

---

### 💡 What's Next?

I'm considering evolving this into a fully functional **cloud-based home weather station**, with:

- ✅ Live sensor data (temperature, humidity, pressure)
- ☁️ Remote access via mobile or desktop
- 📈 Data logging and charting (e.g. using MongoDB + Chart.js)
- 🔌 More sensors: air quality, light intensity, motion

---

### 📥 Setup Instructions

1. Clone the repo
2. Configure `.env` with your local IPs and ports (the same `.env` file in `/client` and `/server` directory)
3. Run the server:
   ```bash
   cd server
   npm install
   npm start
   ```
4. Run the client:
   ```bash
   cd client
   npm install
   npm start
   ```