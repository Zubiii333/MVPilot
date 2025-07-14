import { Router } from 'express';

const router = Router();

// TODO: Implement user management routes
// - GET /users - List all users
// - GET /users/:id - Get user by ID
// - PUT /users/:id - Update user
// - DELETE /users/:id - Delete user
// - PUT /users/:id/status - Update user status

router.get('/', (req, res) => {
  res.json({ message: 'Users route - Coming soon' });
});

export default router;