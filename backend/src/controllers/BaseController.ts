import {
    Repository,
    EntityTarget,
    FindOptionsWhere,
    FindOptionsOrder,
} from "typeorm";
import {AppDataSource} from "../database/data-source";
import {Response, NextFunction, Request} from "express";

export abstract class BaseController<T> {
    private model: EntityTarget<T>;
    public primaryKey: string;
    public repository: Repository<T>;

    constructor(model: EntityTarget<T>, primaryKey: string) {
        this.model = model;
        this.primaryKey = primaryKey;
        this.initialize();
    }

    initialize(): void {
        this.repository = AppDataSource.getRepository(this.model);
    }

    async findById(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        try {
            const {id} = req.params;

            let options: FindOptionsWhere<T> = {};
            options["id"] = id;
            const result = await this.repository.findOneBy(options);
            return res.status(201).json({result});
        } catch (e) {
            next(e);
        }
    }

    async findAll(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        try {
            let orderBy: FindOptionsOrder<T> = {};
            orderBy[this.primaryKey] = "DESC";

            const result = await this.repository.find({order: orderBy});

            return res.status(201).json({result});
        } catch (e) {
            next(e);
        }
    }
}
