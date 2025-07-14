# Anime-notifier 🎌

A Chrome extension that keeps you updated with the latest anime releases. Never miss an episode again!

## ✨ Features

- **Daily Release Notifications**: Get notified when new anime episodes are released
- **Real-time Updates**: Stay current with the latest anime releases
- **Clean Interface**: Simple and intuitive design
- **Lightweight**: Minimal impact on browser performance
- **Customizable**: Personalize your notification preferences

## 🚀 Installation

### From Chrome Web Store
1. Visit the [Chrome Web Store](https://chrome.google.com/webstore) (link to be added)
2. Search for "Anime-notifier"
3. Click "Add to Chrome"
4. Click "Add extension" to confirm

### Manual Installation (Developer Mode)
1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked" and select the extension folder
5. The extension should now appear in your Chrome toolbar

## 📱 Usage

1. Click the Anime-notifier icon in your Chrome toolbar
2. Browse today's anime releases
3. Enable notifications to get alerts for new episodes
4. Click on any anime title to get more information

## 🛠️ Development

### Prerequisites
- Chrome browser
- Basic knowledge of JavaScript, HTML, and CSS
- Node.js (for development tools)

### Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/anime-notifier.git

# Navigate to the project directory
cd anime-notifier

# Install dependencies (if any)
npm install
```

### File Structure
```
anime-notifier/
├── manifest.json          # Extension manifest
├── popup.html             # Extension popup interface
├── popup.js               # Popup functionality
├── background.js          # Background script
├── content.js             # Content script
├── styles/
│   └── popup.css         # Popup styles
├── icons/
│   ├── icon16.png        # 16x16 icon
│   ├── icon48.png        # 48x48 icon
│   └── icon128.png       # 128x128 icon
└── README.md             # This file
```

### Building
```bash
# Run development build
npm run dev

# Create production build
npm run build
```

## 🔧 Configuration

The extension can be configured through the options page:

1. Right-click the extension icon
2. Select "Options"
3. Customize your notification preferences
4. Set your preferred anime sources
5. Configure update intervals

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Use ESLint for JavaScript linting
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly

## 📋 Requirements

- Chrome version 88 or higher
- Internet connection for fetching anime data
- Notification permissions (optional, for alerts)

## 🐛 Known Issues

- Occasionally, anime data might be delayed due to source API limitations
- Some anime titles might not appear immediately after release

## 📝 Changelog

### v1.0.0
- Initial release
- Basic anime release notifications
- Simple popup interface

## 🙏 Acknowledgments

- Thanks to all anime databases and APIs that make this extension possible
- Special thanks to the anime community for feedback and support
- Icons provided by [Icon Source]

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you encounter any issues or have questions:

- Create an issue on [GitHub Issues](https://github.com/yourusername/anime-notifier/issues)
- Email: support@anime-notifier.com
- Discord: [Join our community](https://discord.gg/anime-notifier)

## 🌟 Show Your Support

If you like this extension, please:
- ⭐ Star this repository
- 🔄 Share it with fellow anime fans
- 📝 Leave a review on the Chrome Web Store
- 🐛 Report bugs or suggest features

---

**Don't miss any episodes with Anime-notifier!** 🎬✨
