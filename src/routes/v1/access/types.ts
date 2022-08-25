import { Router, Request, Response } from 'express'

// import { User } from '../../../models'

export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}

export type ErrorResponse = {
    messages: Array<string>
    resultCode: ResultCodeEnum.Error
}

export type LoginResponse = Response<ErrorResponse | {
    data: {
        access: string
        refresh: string
        tokenExpire: number
        email: string
        userId: string
    }
    messages: Array<string>
    resultCode: ResultCodeEnum.Success
}>