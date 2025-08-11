# 📱 QR Code Scanner

A modern, responsive web application for scanning QR codes from images. Built with vanilla JavaScript, HTML, and CSS. No server required - everything runs locally in your browser!

## ✨ Features

- **🔍 QR Code Detection**: Scan QR codes from uploaded images
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **🔄 Drag & Drop**: Simply drag and drop images to scan
- **🔒 Privacy First**: All processing happens locally - no data uploaded to servers
- **⚡ Fast & Lightweight**: No heavy frameworks, loads instantly
- **🎨 Modern UI**: Beautiful gradient design with smooth animations
- **🌙 Dark Mode**: Automatic dark mode support
- **♿ Accessible**: Built with accessibility in mind
- **📊 Multiple Formats**: Supports JPEG, PNG, GIF, and WebP images

## 🚀 Live Demo

[View Live Demo](https://your-domain.com) (replace with your actual domain)

## 📋 Requirements

- Modern web browser with JavaScript enabled
- No server or backend required
- No dependencies to install

## 🛠️ Installation

### Option 1: Simple Setup (Recommended)
1. Download or clone this repository
2. Open `index.html` in your web browser
3. That's it! The app is ready to use

### Option 2: Local Development Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📁 Project Structure

```
inten/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── style.css           # Styling and responsive design
├── README.md           # This file
└── remo.js            # (Legacy file - can be removed)
```

## 🎯 Usage

1. **Upload Image**: Click the file input or drag and drop an image containing a QR code
2. **Automatic Scan**: The app will automatically detect and decode the QR code
3. **View Results**: The decoded content will be displayed below
4. **Click Links**: If the QR code contains a URL, click it to open in a new tab

## 🔧 Customization

### Changing Colors
Edit `style.css` to modify the color scheme:
```css
/* Main gradient background */
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Container background */
.container {
  background: white;
}
```

### Adding Features
The main logic is in `script.js`. Key functions:
- `scanQRCode(file)` - Main scanning function
- `validateFile(file)` - File validation
- `showSuccess(data)` - Display successful results
- `showError(message)` - Display error messages

## 🌐 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop the `inten` folder to [Netlify](https://netlify.com)
2. Your site will be deployed instantly
3. Get a custom domain or use the provided Netlify URL

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

### Traditional Web Hosting
1. Upload all files to your web server
2. Ensure `index.html` is in the root directory
3. Access via your domain

## 🔒 Security Features

- **XSS Protection**: Input sanitization for QR code content
- **File Validation**: Type and size restrictions
- **Local Processing**: No data leaves your device
- **Security Headers**: CSP and other security meta tags

## 📱 PWA Features

The app includes Progressive Web App capabilities:
- Offline functionality (with service worker)
- Installable on mobile devices
- App-like experience

## 🐛 Troubleshooting

### QR Code Not Detected
- Ensure the image is clear and well-lit
- Try a different image format (JPEG, PNG)
- Check that the QR code is not too small or blurry

### File Upload Issues
- Maximum file size: 10MB
- Supported formats: JPEG, PNG, GIF, WebP
- Try refreshing the page if issues persist

### Browser Compatibility
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Internet Explorer: Not supported

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [jsQR](https://github.com/cozmo/jsQR) - QR code detection library
- Modern CSS techniques for responsive design
- Browser APIs for file handling and canvas manipulation

## 📞 Support

If you encounter any issues or have questions:
- Create an issue on GitHub
- Check the troubleshooting section above
- Ensure you're using a modern browser

---

**Made with ❤️ for the open source community**
