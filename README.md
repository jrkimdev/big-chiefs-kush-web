# Big Chiefs Kush - Premium Cannabis Website

A modern, responsive informational website built with Next.js 15, React 19, and TypeScript for Big Chiefs Kush, showcasing premium cannabis products and company information.

## 🚀 Features

- **Modern React Architecture**: Built with Next.js 15 and React 19
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **State Management**: React Context for global state management
- **Component Library**: Reusable UI components with consistent styling
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- **Testing**: Jest and React Testing Library setup
- **Performance**: Optimized with Next.js features like Image optimization

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Testing**: Jest + React Testing Library
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd big-chiefs-kush-web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Generate coverage report:
```bash
npm run test:coverage
```

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── products/           # Products page
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── layout/             # Layout components
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx        # Hero section
│   │   └── FeaturedProducts.tsx
│   └── ui/                 # Reusable UI components
│       ├── Button.tsx      # Button component
│       └── Notification.tsx
├── contexts/               # React Context
│   └── AppContext.tsx      # Global app state
├── lib/                    # Utility functions
│   └── utils.ts            # Utility functions
└── __tests__/              # Test files
    ├── components/          # Component tests
    └── contexts/           # Context tests
```

## 🎨 Design System

The website uses a consistent design system with:

- **Colors**: Green-based palette for cannabis branding
- **Typography**: Inter font family for modern readability
- **Components**: Reusable UI components with consistent styling
- **Responsive**: Mobile-first design approach

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Pages

- **Home**: Hero section with featured products
- **Products**: Product categories and listings
- **About**: Company information and team
- **Contact**: Contact form and information

## 🔧 Development

### Adding New Components

1. Create component in `src/components/`
2. Add TypeScript interfaces
3. Include in appropriate page
4. Add tests in `src/__tests__/`

### State Management

Global state is managed through React Context in `src/contexts/AppContext.tsx`:
- Theme management
- Notifications
- Loading states

### Styling

- Uses Tailwind CSS for styling
- Custom CSS variables for theming
- Responsive design utilities
- Component-specific styles

## 📄 License

This project is private and proprietary to Big Chiefs Kush.

## 🤝 Contributing

This is a private project. For internal development:

1. Create feature branch
2. Make changes
3. Add tests
4. Submit pull request

## 📞 Support

For technical support or questions, contact the development team.