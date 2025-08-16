'use server'
import { SignJWT,importJWK } from "jose"

export async function login(prevSate,formData){
    const email = formData.get('email')
    const password = formData.get('password')
    if (email !== 'a@a.com' && password !== '1234'){
        return {message: 'Login Fail'}
    }
    console.log(email,password)
}