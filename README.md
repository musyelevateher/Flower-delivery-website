# Flower Delivery Website 

This project includes both the backend API and an admin frontend for a Flower Delivery Website.

- The **backend API** is built with Node.js, Express, MongoDB Atlas, and Multer for image uploads.
- The **admin frontend** is a React-based dashboard for administrators to manage flowers (list, add, and delete flowers with image upload).

## Demo Link

- Deploy on [Render.com](https://flower-delivery-website-backend-v9d6.onrender.com) 
- Deploy on [Render.com](https://flower-delivery-website-admin-frontend.onrender.com)

## Features

- RESTful API for managing flowers (CRUD)
- User authentication (register/login) with JWT
- Image upload support for flower pictures (using Multer)
- MongoDB Atlas integration for cloud database
- CORS enabled for frontend-backend communication

## Folder Structure

```
Flower-delivery-website/
│
├── backend/
│   ├── controllers/
│   │   ├── flowerController.js
│   │   └── authController.js
│   ├── models/
│   │   ├── flowerModel.js
│   │   └── user.js
│   ├── routes/
│   │   ├── flowerRoutes.js
│   │   └── authRoutes.js
│   ├── uploads/
│   │   └── (uploaded images)
│   ├── server.js
│   ├── .env           # (ignored by git)
│   ├── node_modules/  # (ignored by git)
│   └── package.json
│
├── admin/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Flowers.js
│   │   │   ├── AddFlowers.js
│   │   │   └── (other admin pages)
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── frontend
│
├── README.md
```

## Admin Folder

The `admin/` folder contains a React-based admin dashboard.  
It allows administrators to manage flowers in the system, including:
- Listing all flowers
- Adding new flowers (with image upload)
- Deleting flowers (with instant UI feedback)


This dashboard provides an easy-to-use interface for managing the flower catalog and interacts with the backend API.

## User Model

The `User` model includes the following fields:
- `name` (String, required)
- `email` (String, required, unique)
- `password` (String, required unless using Google OAuth)
- `googleId` (String, optional, for Google OAuth users)
- `cartData` (Object, default: `{}`)

Authentication uses:
- **Validator** for input validation
- **bcrypt** for password hashing
- **JWT** for authentication tokens


## Environment Variables

Create a `.env` file in the backend root:

```
PORT_NUMBER=4000
MONG_URI=mongodb+srv://musyelevateher:Abda0101@cluster0.fk0cdv6.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=mysupersecretjwtkey123
```
## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/musyelevateher/Flower-delivery-website.git
   ```

2. Navigate to the backend folder and install dependencies:
   ```sh
   cd Flower-delivery-website/backend
   npm install
   ```

3. In a new terminal, navigate to the admin folder and install dependencies:
   ```sh
   cd ../admin
   npm install
   ```

## Running the Server

Start the backend server:
```sh
cd backend
node server.js
```

Start the admin frontend (in a separate terminal):
```sh
cd ../admin
npm start
```


### Auth

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login a user

### Flowers

- `GET /api/flowers` — Get all flowers
- `POST /api/flowers` — Add a new flower (use form-data, include image)
- `PATCH /api/flowers/:id` — Update a flower (use form-data, image optional)
- `DELETE /api/flowers/:id` — Delete a flower

### Image Access

- Uploaded images are accessible at:  
  `https://flower-delivery-website-backend-v9d6.onrender.com/uploads/<filename>`

## Testing with Postman

- Use `form-data` for POST and PATCH requests to `/api/flowers`.
- Fields: `name` (text), `description` (text), `price` (number), `category` (text), `image` (file).
- For authentication, use JSON body for `/api/auth/register` and `/api/auth/login`:
  ```json
  { "name": "",
    "email": "",
    "password": ""
    
  }
  ```

## Deployment

- A live video using loom: [Loom Video](https://www.loom.com/share/629ccc080da14055b5fb4c4ab9d85c41?sid=44c5115a-e1ff-48f9-84cc-83028f86d5c9)
- Ensured `.env` and `node_modules` are in `.gitignore` before pushing to GitHub.

## Screenshots

Include screenshots or GIFs of your project in action. This helps users understand what your project looks like and how it functions.

![Screenshot 1] ![alt text](<Screenshot (86).png>)
![Screenshot 2] ![alt text](<Screenshot (87).png>)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors
- **Name:** Musayyiba Shu'aibu
- **Email:** musayyiba@gmail.com
- **Github:** [musyelevateher](https://github.com/musyelevateher)