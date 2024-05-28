import * as express from "express";
import persons from "../../../entities/antani";

export class PersonHandler {
    // getting all person
    public static list(req: express.Request, res: express.Response, next: express.NextFunction): any {
        // return all person
        res.status(200);
        return res.json(persons);
    }

    // adding a person
    public static add(req: express.Request, res: express.Response, next: express.NextFunction): any {
        // get the data from req.body
        const data = req.body;
        // add the person
        persons.push(data);
        // return response
        res.status(200);
        return res.json(persons);
    }
    
    // updating a person
    public static edit(req: express.Request, res: express.Response, next: express.NextFunction): any {
        // get the data from req.body
        const data = req.body;
        console.log(data)
        // get peson id from the req.params
        const id =  req.params.id || "";
        // get index
        const index = persons.findIndex(item => item.id === id);
        if (index !== -1) {
            // update the person
            persons[index] = data;
            res.status(200);
            // return response
            return res.json({
                data: data,
                message: "update successful"
            })
        } else {
            next("update unsuccessful");
        }
    }

    // deleting a person
    public static remove(req: express.Request, res: express.Response, next: express.NextFunction): any {
        // get peson id from the req.params
        const id =  req.params.id || "";
        // get index
        const index = persons.findIndex(item => item.id === id);
        if (index !== -1) {
            // delete person
            persons.splice(index, 1);
            // return response
            res.status(200);
            return res.json({
                message: "delete successful"
            })
        } else {
            next("delete unsuccessful");
        }
    }

}

export default PersonHandler