import { NextFunction, Request, Response } from "express";
import { Requirement } from "../models/Requirement";
import { BaseController } from "./BaseController";

export class RequirementController extends BaseController<Requirement> {
  constructor() {
    super(Requirement, "id");
  }

  async edit(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name, description, complexity, priority, type, software } =
        req.body;
      const oldRequirement = await this.repository.findOneBy({ id: +id });
      oldRequirement.active = false;

      /** @ts-ignore */
      const newRequirement = await this.repository.save({
        name,
        description,
        complexity,
        priority,
        type,
        version: oldRequirement.version + 1,
        active: true,
        software,
        requirement: id,
      });

      await this.repository.save(oldRequirement);

      return res.status(201).json(newRequirement);
    } catch (e) {
      next(e);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      let { id } = req.params;
      await this.repository.delete({ id: +id });
      return res.status(200).json({ message: "Deletado com sucesso." });
    } catch (e) {
      next(e);
    }
  }
}
