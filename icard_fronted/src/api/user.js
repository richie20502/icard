import {BASE_API} from '../utils/constants';

export async function loginApi(formValue){
    try {
        const url = `${BASE_API}/api/auth/login/`
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formValue),
        };

        const response = await fetch(url, params);

        if(response.status !== 200){
            throw new Error("Usuario o constraseña incorrectas");
        }

        const result = await response.json();
        return result;

    } catch (error) {
        throw error;
    }
}

export async function getMeApi(token){
    try {
        const url = `${BASE_API}/api/auth/me/`
        const params = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        };
        const response = await fetch(url,params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}