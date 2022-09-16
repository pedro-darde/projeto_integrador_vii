import {User} from "../models/User";
import jwt from 'jsonwebtoken'
import {NextFunction, Request, Response} from "express";
import {BaseController} from "./BaseController";
import {comparePassword} from "../BcryptAdapter";

export class SessionController extends BaseController<User> {
    constructor() {
        super(User, 'id');
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const {email, password} = req.body
            const user = await this.repository.findOneBy({
                email
            })

            if (!user) {
                return res.status(404).json({message: 'Usuário não encontrado.'})
            }

            const isValidPassword = await comparePassword(password, user.password)
            if (!isValidPassword) {
                return res.status(401).json({message: 'A senha informada é inválida.'})
            }

            const token = this.createToken(user)

            return res.status(200).json({token})
        } catch (e) {
            next(e)
        }
    }

    private createToken(user: User) {
        return jwt.sign({
            id: user.id,
            profile: user.profile
        }, 'b8814486f44d9582dcbf6f89ecb27b86', {
            expiresIn: '84d',
        })
    }
}