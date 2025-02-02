// import { TodoModel } from "../models/todo.js";
// import { addTodovalidator } from "../validators/todo.js";

// export const addTodo = async (req, res, next) => {
//     try {
//         // Validate user inputs
//         const { error, value } = addTodovalidator.validate({
//             ...req.body,
//             icon: req.file?.filename
//         });
//         if (error) {
//             return res.status(422).json(error);
//         }

//         // Write todo to database
//         await TodoModel.create(value);
//         // Respond to request
//         res.status(201).json("Todo was added!");
//     } catch (error) {
//        next(error); 
//     }
// }

// export const getTodos = async (req, res, next) => {
//     try {
//         const { filter = "{}", limit =10,skip =0  } = req.query;
//         // Fetch todos from database
//         const todos = await TodoModel
//         .find(JSON.parse(filter))
//         .limit(limit)
//         .skip(skip);
//         // Return response
//         res.status(200).json(todos);
//     } catch (error) {
//         next(error);
//     }
// }

// export const updateTodo = (req, res, next) => {
//     res.json("Todo updated!");
// }

// export const deleteTodo = (req, res, next) => {
//     res.json("Todo deleted!");
// }

import { advertModel } from "../models/advertmodel.js";
import { addAdvertvalidator } from "../validators/advert.js";

export const addAdvert = async (req, res, next) => {
    try {
        // Validate user inputs
        const { error, value } = addAdvertvalidator.validate({
            ...req.body,
            icon: req.file?filename
        });
        if (error) {
            return res.status(422).json(error);
        }

        // Write advert to database
        await advertModel.create(value);
        // Respond to request
        res.status(201).json("Advert was added!");
    } catch (error) {
        next(error);
    }
}

export const getAdverts = (req, res, next) => {
    try {
        const { filter = "{}", limit =10,skip =0 } = req.query;
    } catch (
        
    ) {
        
    }
}
