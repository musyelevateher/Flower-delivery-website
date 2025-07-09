# Flower Delivery Website Backend

This is the backend API for a Flower Delivery Website, built with Node.js, Express, MongoDB Atlas, and Multer for image uploads.

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
├── README.md
```
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
2. Navigate to the backend folder:
   ```sh
   cd Flower-delivery-website/backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Running the Server

```sh
node server.js
```

## API Endpoints

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
  `http://localhost:4000/uploads/<filename>`

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

- Deploy on [Render.com](https://flower-delivery-website-backend-v9d6.onrender.com) 
- A live video using loom: [Loom Video](https://www.loom.com/share/13164ab62fa64881af89c349922f93d9?sid=447f6c62-0a82-41f0-8571-969becda45d0)
- Ensured `.env` and `node_modules` are in `.gitignore` before pushing to GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors
- **Name:** Musayyiba Shu'aibu
- **Email:** musayyiba@gmail.com
- **Github:** [musyelevateher](https://github.com/musyelevateher)