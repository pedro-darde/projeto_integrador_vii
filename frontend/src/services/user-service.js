import {axiosPlugin} from "@/plugins/axios";

export class UserService {
    #modelName = 'user'

    async create(dados) {
        let response;
        try {
            response = await axiosPlugin.post(this.#modelName, dados)
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
        return response
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

    async edit(dados) {
        let response;
        try {
            response = await axiosPlugin.patch(`${this.#modelName}/${dados.id}`, dados);
        } catch (e) {
            throw e;
        }
        return response
    }

    async delete(id) {
        let response;
        try {
            response = await axiosPlugin.delete(`${this.#modelName}/${id}`)
        } catch (e) {
            throw e;
        }
    }
}

export const userService = new UserService()