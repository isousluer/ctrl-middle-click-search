# Ctrl+Middle Click Search

A lightweight Firefox extension that allows you to search selected text on Google using Ctrl + middle mouse button.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Firefox](https://img.shields.io/badge/firefox-compatible-orange.svg)

## Features

- 🔍 **Quick Search**: Search any selected text instantly
- ⌨️ **Simple Shortcut**: Just Ctrl + Middle Click
- 🚀 **Auto Focus**: Automatically switches to the search results tab
- 🪶 **Lightweight**: Minimal resource usage
- 🔒 **Privacy-Friendly**: No data collection or tracking
- 🌐 **Universal**: Works on all websites

## Installation

### From Firefox Add-ons (Recommended)
*Coming soon - awaiting Mozilla review*

### Manual Installation
1. Download or clone this repository
2. Open Firefox and navigate to `about:debugging`
3. Click "This Firefox"
4. Click "Load Temporary Add-on"
5. Select the `manifest.json` file from the extension folder

## Usage

1. **Select text** on any webpage
2. **Hold Ctrl** and **click middle mouse button** (scroll wheel)
3. Google search opens in a new tab automatically

## How It Works

The extension listens for Ctrl + middle mouse button clicks on selected text. When detected, it:
1. Captures the selected text
2. Creates a Google search URL
3. Opens it in a new tab with automatic focus

## File Structure

```
ctrl-middle-click-search/
├── manifest.json       # Extension configuration
├── content.js         # Content script for text selection
├── background.js      # Background script for tab management
├── icon48.png         # 48x48 icon
├── icon96.png         # 96x96 icon
├── LICENSE            # MIT License
└── README.md          # This file
```

## Browser Compatibility

- Firefox 48+
- Firefox for Android (with compatible version)

## Permissions

This extension requires the following permissions:

- **`tabs`**: To create new tabs and switch to them automatically

## Development

### Prerequisites
- Firefox Browser
- Basic knowledge of JavaScript

### Testing Locally
1. Clone the repository
```bash
git clone https://github.com/isousluer/ctrl-middle-click-search.git
cd ctrl-middle-click-search
```

2. Load in Firefox (see Installation > Manual Installation)

### Making Changes
1. Edit the relevant files
2. Reload the extension in `about:debugging`
3. Test your changes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

Potential features for future versions:
- [ ] Customizable search engines (DuckDuckGo, Bing, etc.)
- [ ] Configurable keyboard shortcuts
- [ ] Search history
- [ ] Context menu integration

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have suggestions:
- Open an issue on [GitHub Issues](https://github.com/isousluer/ctrl-middle-click-search/issues)
- Star ⭐ this repository if you find it useful!

## Changelog

### Version 1.0.0 (2024)
- Initial release
- Ctrl + middle click to search
- Automatic tab switching
- Works on all websites

## Author

**Your Name**
- GitHub: [@isousluer](https://github.com/isousluer)

---

Made with ❤️ for Firefox users