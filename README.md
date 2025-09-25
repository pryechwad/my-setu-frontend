# 🚀 Setu Docs - Digital Document Revolution

A beautiful, secure, and lightning-fast digital document signing platform built with React and Setu APIs.



## ✨ Features

- 🔒 **Bank-Level Security** - 256-bit SSL encryption
- ⚡ **Lightning Fast** - Process documents in under 30 seconds
- 🎨 **Beautiful Design** - Modern UI with handwritten fonts and custom illustrations
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🔔 **Toast Notifications** - Real-time feedback for all user actions
- 🎯 **Real-time Tracking** - Live status updates and auto-polling
- 📄 **Smart Upload** - Drag & drop with intelligent validation

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Fonts**: Poppins (Blinkit-style), Dancing Script, Kalam, Caveat
- **API**: Setu Document Signing APIs
- **Storage**: localStorage for credentials

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-setu-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📱 Pages & Features

### 🏠 Landing Page
- Hero section with custom SVG illustrations
- Feature showcase with animations
- Trust indicators and statistics
- Creative CTA buttons

### ⚙️ Settings Page
- Secure API credential configuration
- localStorage management
- Security warnings and tips
- Form validation

### 📤 Upload Page
- Drag & drop file upload
- Progress tracking with animations
- Document validation (PDF, 10MB max)
- Signature initiation
- Embedded iframe signing

### 📊 Status Page
- Real-time document tracking
- Auto-polling for status updates
- Download signed documents
- Detailed status information

## 🎨 Design Features

- **Custom Illustrations**: Hand-crafted SVG animations
- **Handwritten Fonts**: Personal touch with script fonts
- **Gradient Effects**: Beautiful color transitions
- **Micro-animations**: Hover effects and loading states
- **Glass Morphism**: Modern backdrop blur effects
- **Toast Notifications**: Success, error, and info messages

## 🔧 Configuration

1. **Get Setu API Credentials**
   - Visit Setu Developer Dashboard
   - Get your `x-client-id`, `x-client-secret`, and `x-product-instance-id`

2. **Configure in App**
   - Go to Settings page
   - Enter your credentials
   - Credentials are stored in localStorage (use test credentials only)

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌟 Key Components

- `Layout.jsx` - Navigation and footer
- `Illustrations.jsx` - Custom SVG animations
- `Toast.jsx` - Notification system
- `FileUploader.jsx` - Drag & drop upload
- `ProgressBar.jsx` - Animated progress tracking

## 🔒 Security Notes

⚠️ **Important**: This is a frontend-only demo application. API credentials are stored in localStorage, which is not secure for production use. Only use test/sandbox credentials.

## 📱 Responsive Design

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Perfect for tablets (768px+)
- **Desktop**: Full desktop experience (1024px+)
- **Large Screens**: Enhanced for large displays (1440px+)

## 🎯 API Integration

The app integrates with Setu APIs for:
- Document upload
- Signature initiation
- Status tracking
- Document download

## 🚀 Performance

- ⚡ Fast loading with Vite
- 🎨 Optimized animations
- 📱 Mobile-first approach
- 🔄 Efficient re-renders

## 📄 License

This project is for demonstration purposes.

---

**Made with ❤️ using React + Vite + Tailwind CSS**