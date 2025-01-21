# **Next.js JWT Dashboard**

A full-stack Next.js application with authentication, leveraging JSON Web Tokens (JWT) for secure user login and protected routes. The app uses **PostgreSQL** as the database and **Redis** for caching, ensuring a robust and efficient user experience.

---

## **Features**

- **Authentication**
  - User registration and login using bcrypt for secure password hashing.
  - JWT-based authentication with token validation and route protection.
  
- **Protected Routes**
  - Access control with middleware to protect specific routes like `/dashboard`.

- **Database Integration**
  - PostgreSQL with Prisma ORM for managing user data and migrations.

- **Caching**
  - Redis caching for optimized performance and scalability.

---

## **Technologies Used**

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation.
- [PostgreSQL](https://www.postgresql.org/) - Relational database management.
- [Prisma](https://www.prisma.io/) - ORM for database interaction.
- [Redis](https://redis.io/) - In-memory data structure store for caching.
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) or [jose](https://github.com/panva/jose) - For JWT handling.
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js/) - Password hashing.

---

## **Getting Started**

Follow these steps to run the project locally:

### **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) >= 16
- [PostgreSQL](https://www.postgresql.org/) >= 12
- [Redis](https://redis.io/)

---

### **1. Clone the Repository**

```bash
git clone https://github.com/omarmagh/nextjs-jwt-dashboard.git
cd nextjs-jwt-dashboard
```

---

### **2. Install Dependencies**

```bash
npm install
```

---

### **3. Set Up Environment Variables**

Create a `.env.local` file in the root directory and add the following:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
JWT_SECRET=your_jwt_secret_key
REDIS_URL=redis://localhost:6379 (or use remote redis url)
```

Replace `username`, `password`, `database_name`, and `your_jwt_secret_key` with your actual values.

---

### **4. Set Up the Database**

Initialize the database and run migrations using Prisma:

```bash
npx prisma migrate dev --name init
```

---

### **5. Run the Development Server**

Start the server:

```bash
npm run dev
```

Visit the app at `http://localhost:3000`.

---

### **6. Build for Production**

To build and start the app in production mode:

```bash
npm run build
npm start
```

---

## **Endpoints**

### **API Routes**
| Method | Endpoint          | Description               |
|--------|-------------------|---------------------------|
| POST   | `/api/auth/register` | Register a new user        |
| POST   | `/api/auth/login`    | Authenticate and get a JWT |
| GET    | `/dashboard`         | Protected dashboard page   |

---

## **Project Structure**

```
nextjs-jwt-dashboard/
├── pages/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login.js
│   │   │   ├── register.js
│   │   │   ├── refresh.js
│   ├── dashboard.js
│   ├── login.js
├── lib/
│   ├── prisma.js
│   ├── jwt.js
│   ├── redis.js
├── prisma/
│   ├── schema.prisma
├── middleware.js
├── package.json
```

---

## **Contributing**

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit changes:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [JWT Guide](https://jwt.io/)

---