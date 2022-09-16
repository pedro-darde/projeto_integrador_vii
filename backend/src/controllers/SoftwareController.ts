import {BaseController} from "./BaseController";
import {Software} from "../models/Software";
import {Response, Request} from "express";
import {NextFunction} from "express-serve-static-core";
import {Requirement} from "../models/Requirement";
import {AppDataSource} from "../database/data-source";

export class SoftwareController extends BaseController<Software> {
    constructor() {
        super(Software, "id");
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const {name, startDate, endDate, created_by, about, requirements} =
                req.body;

            const software = await this.repository.save({
                description: about,
                end_date: endDate,
                start_date: startDate,
                name,
            });

            if (requirements.length) {
                await this.createRequirement(requirements, software);
            }
            return res.status(201).json({software})
        } catch (e) {
            next(e);
        }
    }

    async edit(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params
            const {name, startDate, endDate, created_by, about, requirements} =
                req.body;

            const software = await this.repository.save({
                id: +id,
                name,
                start_date: startDate,
                end_date: endDate,
                description: about
            })

            if (requirements.length) {
                await this.createRequirement(requirements, software)
            }

            return res.status(201).json({software})

        } catch (e) {
            next(e)
        }
    }

    private async createRequirement(
        requirements: Requirement[],
        software: Software
    ) {
        const requirementRepository = AppDataSource.getRepository(Requirement);
        requirements.forEach((item) => {
            item.software = software;
        });
        await requirementRepository.save(requirements);
    }
}
