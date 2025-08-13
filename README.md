# 🐋 Pentwheel Dashboard

<p align="center">
  <img src="./assets/logo.png" alt="Pentwheel logo" />
</p>  

A modern sales and warehouse management dashboard built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Real-time Metrics**: Track incoming/outgoing shipments and budget usage
- **Returns Management**: Monitor merchandise returns and processing status
- **Service Repairs**: Track repair status and component requirements
- **Inventory Tracking**: Overseas shipments with serial number ranges
- **Bill of Materials**: Component stock levels and requirements
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom glassmorphism effects
- **Development**: ESLint, PostCSS, Autoprefixer
- **Future Backend**: Express.js, FastAPI, PostgreSQL, Redis, GraphQL

## Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- python3  

## Quick Start

1. **Clone and setup:**
   ```bash
   git clone https://github.com/TimothyLe/pentwheel-api.git
   cd pentwheel-dashboard
   chmod +x scripts/setup.sh
   ./scripts/setup.sh
   ```

2. **Or manual setup:**
   ```bash
   npm install
   cp .env.example .env.local
   npm run dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Landing Page  
![Pentwheel Landing Page](./assets/landing.png "Pentwheel Landing")  

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── PentwheelDashboard.tsx  # Main dashboard component
│   └── Loading.tsx          # Loading component
└── types/
    └── index.ts             # Shared TypeScript interfaces
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
DATABASE_URL=postgresql://username:password@localhost:5432/pentwheel_db
REDIS_URL=redis://localhost:6379
```

## Customization

### Colors
The dashboard uses a custom purple color palette. Modify `tailwind.config.js` to change the theme:

```js
colors: {
  'pentwheel-purple': {
    // Custom color scale
  }
}
```

### Data
Currently uses dummy data. To connect to your backend:

1. Replace dummy data arrays in `PentwheelDashboard.tsx`
2. Add API calls using `fetch` or your preferred HTTP client
3. Implement state management with `useState` and `useEffect`

### Components
All components are typed with TypeScript interfaces. Extend the types in `src/types/index.ts` as needed.

## Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for fast loading
- **Bundle Size**: Optimized with Next.js automatic splitting

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Docker
```bash
# Create Dockerfile as needed
docker build -t pentwheel-dashboard .
docker run -p 3000:3000 pentwheel-dashboard
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests: `npm run type-check && npm run lint`
4. Submit a pull request

## Future Enhancements

- [ ] Real-time WebSocket updates
- [ ] User authentication and roles
- [ ] Advanced filtering and search
- [ ] Export functionality (PDF, Excel)
- [ ] Dark mode toggle
- [ ] Mobile app with React Native
- [ ] Advanced analytics and reporting

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  

MIT License - see LICENSE file for details

## Support

For questions or issues:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

Built with ❤️ for efficient warehouse and sales management.
