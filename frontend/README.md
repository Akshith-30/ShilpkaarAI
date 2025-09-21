# 🎨 ShilpkaarAI - Artisan Marketplace Frontend

A modern, AI-enhanced artisan marketplace platform connecting skilled Indian artisans with customers worldwide.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Webpage Flow](#webpage-flow)
- [User Roles & Permissions](#user-roles--permissions)
- [Key Features](#key-features)
- [Installation & Setup](#installation--setup)
- [Development Commands](#development-commands)

## 🌟 Overview

ShilpkaarAI is a comprehensive e-commerce platform that bridges the gap between traditional Indian artisans and modern customers. The platform features AI-powered storytelling, role-based authentication, and a seamless shopping experience.

## 🛠 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom botanical patterns
- **UI Components**: Radix UI primitives
- **State Management**: Zustand
- **Routing**: Custom router implementation
- **Authentication**: JWT-based with role guards
- **Notifications**: React Hot Toast
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/
│   ├── auth/                 # Authentication components
│   ├── artisan/              # Artisan-specific features
│   ├── cart/                 # Shopping cart functionality
│   ├── customer/             # Customer-specific features
│   ├── marketplace/          # Product browsing & discovery
│   ├── messaging/            # Chat & communication
│   ├── settings/             # User settings
│   ├── support/              # Help & support
│   ├── ui/                   # Reusable UI components
│   └── figma/                # Design system components
├── stores/                   # State management
├── styles/                   # Global styles
└── main files
```

## 🔄 Webpage Flow

### 🏠 **Public Pages (No Authentication Required)**

#### 1. **Home Page** (`/home`)
- **Components**: `HeroSection`, `CategoriesSection`, `AIFeaturesSection`, `TestimonialsSection`
- **Features**: 
  - Hero banner with AI storytelling
  - Category showcase
  - Featured products
  - Customer testimonials
  - Call-to-action for registration

#### 2. **Explore Page** (`/explore`)
- **Purpose**: Browse all products without filters
- **Features**: Product grid, search functionality, trending items

#### 3. **Categories Page** (`/categories`)
- **Purpose**: Browse products by craft categories
- **Categories**: Textile, Pottery, Jewelry, Wood Carving, etc.

#### 4. **Artisans Page** (`/artisans`)
- **Purpose**: Discover verified artisans
- **Features**: Artisan profiles, craft specializations, ratings

#### 5. **Product Detail Page** (`/product-detail`)
- **Purpose**: View individual product details
- **Features**: Image gallery, artisan info, reviews, add to cart

#### 6. **Support Page** (`/support`)
- **Purpose**: Help center and customer support
- **Features**: FAQ, contact forms, help articles

### 🔐 **Authentication Pages**

#### 7. **General Auth Page** (`/auth`)
- **Purpose**: Landing page for authentication
- **Options**: Customer or Artisan registration

#### 8. **Customer Authentication** (`/customer-auth`)
- **Features**: 
  - Sign In/Sign Up tabs
  - Mobile number + password
  - Social auth options (Google, Phone OTP)
  - Customer feature highlights

#### 9. **Artisan Authentication** (`/artisan-auth`)
- **Features**:
  - Sign In/Sign Up tabs
  - Craft selection dropdown
  - Experience level input
  - Artisan feature highlights
  - Verification process initiation

### 👤 **Customer Journey (Authenticated)**

#### 10. **Customer Dashboard** (`/customer-dashboard`)
- **Access**: Role Guard (Customer only)
- **Features**:
  - Order history
  - Wishlist summary
  - Recommended products
  - Quick actions

#### 11. **Shopping Cart** (`/cart`)
- **Access**: Role Guard (Customer only)
- **Features**: 
  - Cart items management
  - Quantity updates
  - Price calculations
  - Proceed to checkout

#### 12. **Checkout Page** (`/checkout`)
- **Access**: Role Guard (Customer only)
- **Features**:
  - Shipping address
  - Payment methods
  - Order summary
  - Place order

#### 13. **Order Confirmation** (`/order-confirmation`)
- **Access**: Role Guard (Customer only)
- **Features**: Order details, tracking information, next steps

#### 14. **Order Tracking** (`/order-tracking`)
- **Access**: Role Guard (Customer only)
- **Features**: 
  - Real-time order status
  - Timeline view
  - Artisan contact info
  - Delivery updates

#### 15. **My Orders** (`/orders`)
- **Access**: Role Guard (Customer only)
- **Features**: Order history, status filters, reorder options

#### 16. **Favorites** (`/favorites`)
- **Access**: Role Guard (Customer only)
- **Features**: Saved products, wishlist management

#### 17. **Messages** (`/messages`)
- **Access**: Role Guard (Customer + Artisan)
- **Features**: Chat with artisans, order-related conversations

### 🎨 **Artisan Journey (Authenticated)**

#### 18. **Artisan Dashboard** (`/artisan-dashboard`)
- **Access**: Role Guard (Artisan only)
- **Features**:
  - Sales analytics
  - Order management
  - Product performance
  - Quick actions

#### 19. **Artisan Verification** (`/artisan-verification`)
- **Access**: Role Guard (Artisan only)
- **Purpose**: Complete profile verification
- **Features**: Document upload, portfolio showcase

#### 20. **My Products** (`/artisan-products`)
- **Access**: Role Guard (Artisan only)
- **Features**: 
  - Product inventory
  - Add/edit/delete products
  - Stock management
  - Performance metrics

#### 21. **Add Product** (`/add-product`)
- **Access**: Role Guard (Artisan only)
- **Features**:
  - Product creation form
  - Image upload
  - Pricing setup
  - Category selection

#### 22. **AI Tools** (`/artisan-ai-tools`)
- **Access**: Role Guard (Artisan only)
- **Features**:
  - AI product descriptions
  - SEO optimization
  - Marketing content generation
  - Story creation

#### 23. **Analytics** (`/artisan-analytics`)
- **Access**: Role Guard (Artisan only)
- **Features**:
  - Sales reports
  - Customer insights
  - Product performance
  - Revenue tracking

### ⚙️ **Shared Features**

#### 24. **Settings** (`/settings`)
- **Access**: Role Guard (Customer + Artisan)
- **Features**: Profile management, preferences, account settings

#### 25. **Messages** (`/messages`)
- **Access**: Role Guard (Customer + Artisan)
- **Features**: 
  - Real-time messaging
  - Order-related chats
  - File sharing
  - Message history

## 🔐 User Roles & Permissions

### **Guest Users**
- ✅ Browse products and categories
- ✅ View artisan profiles
- ✅ Access support pages
- ❌ Purchase products
- ❌ Access user-specific features

### **Customers**
- ✅ All guest permissions
- ✅ Purchase products
- ✅ Manage orders and favorites
- ✅ Chat with artisans
- ✅ Access customer dashboard
- ❌ Access artisan tools

### **Artisans**
- ✅ All customer permissions
- ✅ Manage product inventory
- ✅ Access analytics and AI tools
- ✅ Respond to customer messages
- ✅ Access artisan dashboard
- ❌ Access customer-specific features

## ✨ Key Features

### **🎯 Core Functionality**
- **Role-based Authentication**: Separate flows for customers and artisans
- **Product Management**: Comprehensive CRUD operations for artisans
- **Shopping Cart**: Persistent cart with real-time updates
- **Order Management**: Complete order lifecycle tracking
- **Real-time Messaging**: Direct communication between users

### **🤖 AI Integration**
- **Product Storytelling**: AI-generated product descriptions
- **SEO Optimization**: Automated meta tags and descriptions
- **Marketing Content**: AI-assisted promotional content
- **Customer Insights**: Analytics and recommendation engine

### **📱 User Experience**
- **Responsive Design**: Mobile-first approach
- **Botanical Theme**: Unique Indian craft-inspired design
- **Accessibility**: Voice-friendly interface
- **Performance**: Optimized loading and interactions

### **🔒 Security & Data**
- **JWT Authentication**: Secure token-based auth
- **Role Guards**: Component-level access control
- **Input Validation**: Comprehensive form validation
- **Error Handling**: User-friendly error messages

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

```bash
# Navigate to frontend directory
cd "GenAi hackathon/ShilpkaarAI-main/frontend"

# Install dependencies
npm install

# Install TypeScript types (if needed)
npm install --save-dev @types/react @types/react-dom

# Start development server
npm run dev
```

## 📝 Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint
```

## 🌐 Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=ShilpkaarAI
VITE_APP_VERSION=1.0.0
```

## 🎨 Design System

### **Color Palette**
- **Primary**: Craft-inspired earthy tones
- **Secondary**: Botanical greens and natural hues
- **Accent**: Warm gold and terracotta
- **Background**: Gradient botanical patterns

### **Typography**
- **Headings**: Playfair Display (serif)
- **Body**: System font stack
- **Accent**: Custom craft-inspired fonts

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  