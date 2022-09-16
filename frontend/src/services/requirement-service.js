import {axiosPlugin} from "../plugins/axios";

class RequirementService {
    #modelName = "requirement";
    async delete(id) {
        let response;
        try {
            response = await axiosPlugin.delete(`${this.#modelName}/${id}`)
        } catch (e) {
            throw e;
        }
        return response.data
    }
    async edit(requirement) {
        let response;
        try {
            response = await axiosPlugin.patch(`${this.#modelName}/${requirement.id}`, requirement)
        } catch (e) {
            throw e;
        }
        return response;
    }
}

export const requirementService = new RequirementService();
