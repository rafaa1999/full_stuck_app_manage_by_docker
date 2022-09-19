
// define our schema we're gonna use zod
// zod is schema validation built in typescript
// it can generate typescript interfaces

import * as z from 'zod';
import { db } from '../../db';
// define a validator for Todo
// we use validator to valid
// things that comes form API
const Todo = z.object({
  // content should be a type of
  // string
  content:z.string().min(1),
  done:z.boolean().default(false),
});


// build an interface that 
// describe that interface(Todo)
// that we need it to describe
// the type of res API
// export the type (interface)
export type Todo = z.infer<typeof Todo>;

// Todo is a validation parser
// and also is an interface

/* export default Todo; */

// Todos is a generic collection
// export the collection
export const Todos = db.collection<Todo>('todos');