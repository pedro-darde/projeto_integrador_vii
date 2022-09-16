import {axiosPlugin} from "../plugins/axios";

class SoftwareService {
    #modelName = "software";

    async create(dados) {
        let response;
        try {
            response = await axiosPlugin.post(this.#modelName, dados);
            return response;
        } catch (e) {
            throw e;
        }
    }

    async list() {
        let response;
        try {
            response = await axiosPlugin.get(this.#modelName)
        } catch (e) {
            throw e;
        }
        return response
    }

    async get(id) {
        let response;
        try {
            response = await axiosPlugin.get(`${this.#modelName}/${id}`)
        } catch (e) {
            throw e;
        }
        return response.data
    }

    async edit(dados) {
        let response;
        try {
            response = await axiosPlugin.patch(`${this.#modelName}/${dados.id}`, dados)
        } catch (e) {
            throw e;
        }
        return response
    }
}

export const softwareService = new SoftwareService();
