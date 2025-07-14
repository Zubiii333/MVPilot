import { Router } from 'express';

const router = Router();

// TODO: Implement interview routes
// - GET /interviews - List all interviews
// - POST /interviews - Schedule interview
// - GET /interviews/:id - Get interview by ID
// - PUT /interviews/:id - Update interview
// - DELETE /interviews/:id - Cancel interview
// - POST /interviews/:id/feedback - Add interview feedback
// - GET /interviews/calendar - Get calendar events
// - POST /interviews/google-calendar - Sync with Google Calendar

router.get('/', (req, res) => {
  res.json({ message: 'Interviews route - Coming soon' });
});

export default router;