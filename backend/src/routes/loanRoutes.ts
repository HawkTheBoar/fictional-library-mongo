import express from 'express';

const router = express.Router();

/**
 * POST /api/loans
 * Creates a new loan
 */
router.post('/loans', (req, res) => {
  // TODO: Implement create loan logic
  res.status(501).json({ message: 'Not Implemented' });
});

/**
 * POST /api/loans/:id/return
 * Marks a loan as returned
 */
router.post('/loans/:id/return', (req, res) => {
  // TODO: Implement return loan logic
  res.status(501).json({ message: 'Not Implemented' });
});

export { router as loanRouter };