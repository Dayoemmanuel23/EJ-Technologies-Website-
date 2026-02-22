
<div align="center">
   <img width="1200" height="475" alt="EJ Technologies Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# EJ Technologies Website

Official website for EJ Technologies, bridging the gap between technology and corporate compliance in Nigeria.

## Features

- Modern, responsive design built with React and Vite
- Custom branding, logo, and images for all services
- Direct WhatsApp Business messaging button (bouncing icon)
- Social media links (Facebook, Instagram, Twitter)
- Service sections: Software Development, Web & Mobile Apps, CAC Registration, Tax Consultancy, Solar Energy, Branding, and more
- Newsletter subscription form
- Contact information and location
- Footer with copyright

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Dayoemmanuel23/EJ-Technologies-Website.git
    cd EJ-Technologies-Website/EJ-Technologies-Website
    ```

2. Install dependencies:
    ```sh
    npm install
    ```


### Running Locally (Frontend & Backend)

#### 1. Start the Backend (Express + MongoDB)

First, ensure MongoDB is running locally. You can use [MongoDB Compass](https://www.mongodb.com/products/compass) to start and view your database.

In a terminal, run:
```sh
cd EJ-Technologies-Website/EJ-Technologies-Website
npx tsx server.ts
```
You should see:
```
🚀 Server running on http://localhost:5000
✅ MongoDB connected successfully
```

#### 2. Start the Frontend (Vite + React)

In a separate terminal, run:
```sh
cd EJ-Technologies-Website/EJ-Technologies-Website
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

#### 3. Test the App
- Use the contact form and newsletter subscription on the site.
- Data will be saved to MongoDB collections: `contacts` and `newsletters`.

#### 4. View Data in MongoDB Compass
- Open MongoDB Compass and connect to `mongodb://localhost:27017`.
- Select the `EJ-TECHNOLOGIES` database (case-sensitive).
- View the `contacts` and `newsletters` collections for your data.

### Building for Production

```sh
npm run build
```
The output will be in the `dist` folder.

### Preview Production Build

```sh
npm run preview
```
## Backend API Endpoints

- `POST /api/contact` — Save contact form submission
- `POST /api/subscribe` — Save newsletter subscription
- `GET /api/health` — Health check (returns `{ status: 'Server is running' }`)
- `GET /api/contacts` — (Admin) Get all contacts
- `GET /api/subscribers` — (Admin) Get all newsletter subscribers

## Troubleshooting

- **Cannot GET /** — This is normal for the backend root URL. Use `/api/health` or the frontend for real functionality.
- **TypeScript error: Property 'env' does not exist on type 'ImportMeta'** — Fixed by adding `vite-env.d.ts` with `/// <reference types="vite/client" />`.
- **MongoDB not showing data:**
   - Make sure you are using the correct database name: `EJ-TECHNOLOGIES` (case-sensitive)
   - Refresh MongoDB Compass after submitting forms
   - Check backend terminal for logs/errors



## Folder Structure (Key Files)

```
EJ-Technologies-Website/
   App.tsx
   components/
      Navbar.tsx
      Hero.tsx
      Footer.tsx
      WhatsAppButton.tsx
      ...
   Images/
      logo.png
      Brand1.png
      Solar.jpeg
      ...
   index.html
   package.json
   tsconfig.json
   vite.config.ts
   ...
```

## Customization

- **Images:** Replace images in the `Images` folder for each service.
- **Logo:** Update `logo.png` for your brand.
- **WhatsApp:** Edit `WhatsAppButton.tsx` to change the phone number or message.
- **Social Media:** Update links in `Footer.tsx`.

## Deployment

You can deploy the production build (`dist` folder) to any static hosting service, such as:
- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
