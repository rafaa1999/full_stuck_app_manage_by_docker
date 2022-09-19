import { Router, Request, Response } from 'express';
import Todo from './Todos.model';


const router = Router();

router.get('/', (req: Request, res: Response<Todo[]>)=>{
  res.json([{
    content: 'rafa',
    done: false,
  }]);
});

// is the same as the one above

// router.get<{}, Todo[]>('/', (req, res)=>{
//   res.json([{
//     content: 'rafa',
//     done: false,
//   }]);
// });

export default router;

