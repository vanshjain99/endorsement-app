# 🏆 We Are The Champions - Endorsement App

A real-time endorsement sharing application where users can send and receive public messages of appreciation. Built with vanilla JavaScript and Firebase Realtime Database.

## ✨ Features

- **Write Endorsements**: Send personalized messages to others
- **Real-time Updates**: All endorsements sync instantly across all devices
- **From/To Fields**: Specify sender and recipient names
- **Like System**: Show appreciation with heart reactions
- **Double-tap to Delete**: Remove endorsements by double-tapping (please use this feature after testing!)
- **Responsive Design**: Works seamlessly on mobile and desktop devices
- **PWA Support**: Install as a Progressive Web App with custom icons

## 🚀 Live Demo

The app is connected to a shared Firebase Realtime Database, so all endorsements are visible to everyone using the app!

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Database**: Firebase Realtime Database (v9.15.0)
- **Build Tool**: Vite
- **Fonts**: Google Fonts (Josefin Sans, Inter)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/vanshjain99/endorsement-app.git
cd endorsement-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm start
# or
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal)

## 📝 Usage

1. **Write an Endorsement**: Type your message in the text area
2. **Add Sender**: Fill in the "From" field with your name
3. **Add Recipient**: Fill in the "To" field with the recipient's name
4. **Publish**: Click the "Publish" button to share your endorsement
5. **Like**: Click the ❤ button to like an endorsement
6. **Delete**: Double-tap on any endorsement to remove it

## 🔧 Build Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🗂️ Project Structure

```
endorsement-app/
├── index.html           # Main HTML file
├── style.css           # Styling
├── script.js           # Application logic with Firebase integration
├── package.json        # Dependencies and scripts
├── freddie.png         # Header image
├── favicon.ico         # Favicon
├── site.webmanifest    # PWA manifest
└── android-chrome-*.png # PWA icons
```

## 🔥 Firebase Configuration

The app uses Firebase Realtime Database for storing and syncing endorsements. The database URL is configured in `script.js`:

```javascript
const appSettings = {
    databaseURL: "https://fir-app-c0248-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
```

## ⚠️ Important Note

**This app uses a shared Firebase Realtime Database!** All endorsements are visible to everyone using the app. Please be respectful and **delete your test endorsements by double-tapping them** after you're done testing.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**vanshjain99**
- GitHub: [@vanshjain99](https://github.com/vanshjain99)

---

Made with ❤️ using Firebase and Vite