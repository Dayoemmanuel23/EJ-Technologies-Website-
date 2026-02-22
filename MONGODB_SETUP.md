# MongoDB Setup Guide for EJ Technologies Website

## Prerequisites

1. **MongoDB Community Server** - Download from https://www.mongodb.com/try/download/community
2. **MongoDB Compass** - Download from https://www.mongodb.com/products/compass (GUI for managing MongoDB)

## Installation & Setup

### Step 1: Install MongoDB

1. Download MongoDB Community Edition for Windows
2. Run the installer and follow the installation wizard
3. Choose "Install MongoDB as a Service" (recommended)
4. MongoDB will run in the background automatically

### Step 2: Verify MongoDB is Running

```powershell
# Check if MongoDB service is running
Get-Service MongoDB
```

If not running, start it:
```powershell
Start-Service MongoDB
```

### Step 3: Open MongoDB Compass

1. Launch MongoDB Compass
2. Click "Connect" to connect to your local MongoDB instance
3. You should see your local database at `mongodb://localhost:27017`

### Step 4: Create Database

1. In MongoDB Compass, click "Create Database"
2. Database name: `ej-technologies`
3. Collection name: `contacts` (optional - will be created automatically)
4. Click "Create Database"

### Step 5: Environment Configuration

The `.env.local` file is already configured with:
```
VITE_API_URL=http://localhost:5000
MONGODB_URI=mongodb://localhost:27017/ej-technologies
NODE_ENV=development
```

If you need to use MongoDB Atlas (cloud):
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Update `MONGODB_URI` in `.env.local` with your connection string

### Step 6: Run the Server

In a **separate terminal**, run:
```powershell
npm run dev:server
```

You should see: `🚀 Server running on http://localhost:5000`

### Step 7: Run the Frontend (in another terminal)

```powershell
npm run dev
```

## API Endpoints

### Contact Form
- **POST** `/api/contact` - Submit a contact form
- **GET** `/api/contacts` - Get all contacts (admin)

### Newsletter
- **POST** `/api/subscribe` - Subscribe to newsletter
- **GET** `/api/subscribers` - Get all subscribers (admin)

### Health Check
- **GET** `/api/health` - Check if server is running

## Testing the Connection

Use this in your browser console:
```javascript
fetch('http://localhost:5000/api/health')
  .then(res => res.json())
  .then(data => console.log(data))
```

## Troubleshooting

### MongoDB won't connect
- Check if MongoDB service is running: `Get-Service MongoDB`
- Verify MongoDB is installed correctly
- Check firewall settings

### CORS errors
- Make sure the backend server is running on port 5000
- Check `VITE_API_URL` in `.env.local`

### Port already in use
- Change PORT in server.ts if 5000 is taken
- Update `VITE_API_URL` accordingly

## Database Collections

### Contacts Collection
```json
{
  "_id": ObjectId,
  "name": "string",
  "email": "string",
  "service": "string",
  "message": "string",
  "createdAt": Date
}
```

### Newsletter Collection
```json
{
  "_id": ObjectId,
  "email": "string",
  "subscribedAt": Date
}
```

## Next Steps

1. Start MongoDB service
2. Open MongoDB Compass to verify connection
3. Run `npm run dev:server` in one terminal
4. Run `npm run dev` in another terminal
5. Your website is now connected to MongoDB!
