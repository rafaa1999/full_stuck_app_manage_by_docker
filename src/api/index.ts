import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';

import todos from '../api/Todos/Todos.route';

const router = express.Router();

// the existance of MessageResponse is 
// is to define the type of res
// and MessageResponse is an interface
// that we should override his continue
// validate if we pass the correct data

// {} define the param in the url
router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    // the is from the MessageResponse
    // that has been overrided  
    message: 'API - 👋🌎🌍🌏',
  });
});


router.use('/todos', todos);

export default router;

/**
 * Note:
 *  for every api handler we're gonna
 *  create an interface to describe the
 *  response
 */
