import jwtDecode from "jwt-decode";

export default {
    methods: {
        getToken() {
            const token = localStorage.getItem('token')
            if (token) {
                return jwtDecode(token)
            }
            return null
        },
    }
}