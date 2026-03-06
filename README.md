# product_dashboard - Flairminds

## Running in Production without a Database

Since the Node backend explicitly requires database credentials to boot (otherwise it will crash parsing the connection string), you can start the application with mock credentials to serve your frontend production build.

**Step 1. Build and Prepare the Frontend**
```bash
# In the frontend directory, install dependencies and build
cd frontend
npm install
npm run build

# Go back to root, remove old dist, and move the new build
cd ..
rm -rf dist
mv frontend/dist dist
```

**Step 2. Start the Backend server**
Start the backend by injecting a new port and mock database credentials inline. It will fail database authentications but the server itself will successfully run to serve your frontend `dist` files and existing functional APIs.
```bash
PORT=5001 DATABASE_USERNAME=mock DATABASE_PASSWORD=mock DATABASE_HOST=localhost DATABASE_PORT=5432 DATABASE_NAME=mock npm start
```

Your full-stack application will now be live on `http://localhost:5001/`!
