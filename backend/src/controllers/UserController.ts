import {BaseController} from "./BaseController";
import {User} from "../models/User";
import {NextFunction, Request, Response} from "express";
import {hashPassword} from "../BcryptAdapter";

export class UserController extends BaseController<User> {
    constructor() {
        super(User, 'id');
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const {name, email, password, profile} = req.body
            const hashedPassword = await hashPassword(password)

            await this.repository.save({
                name,
                email,
                password: hashedPassword,
                profile
            })

            return res.status(201).json({message: 'Usuário criado com sucesso.'})

        } catch (e) {
            next(e)
        }
    }

    async edit(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params
            const {name, email, profile} = req.body

            const user = await this.repository.save({
                id: +id,
                name,
                email,
                profile
            })

            return res.status(201).json({user})
        } catch (e) {
            next(e)
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params

            await this.repository.delete({id: +id})
            return res.status(200).json({message: 'Usuário removido do sistema '})
        } catch (e) {
            next(e)
        }
    }
}