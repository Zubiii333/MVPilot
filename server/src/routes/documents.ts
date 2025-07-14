import { Router } from 'express';

const router = Router();

// TODO: Implement document routes
// - POST /documents/upload - Upload document
// - GET /documents/:id - Get document
// - DELETE /documents/:id - Delete document
// - POST /documents/parse-resume - Parse resume with AI
// - GET /documents/candidate/:id - Get candidate documents

router.get('/', (req, res) => {
  res.json({ message: 'Documents route - Coming soon' });
});

export default router;