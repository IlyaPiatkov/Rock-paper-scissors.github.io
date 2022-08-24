import { Router, Request, Response } from 'express'
import { check, validationResult } from 'express-validator'
import bcrypt from "bcrypt";

import { user } from '../../../models';


// export const registration = Router()

const validation = [
  check('email', 'Invalid email address').isEmail(),
  check('password', 'Must be 5 characters or more').isLength({ min: 5 })
]

export const registration = async (res: Response, req: Request) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Invalid data'
      })
    }

    const { email, password } = req.body

    const candidate = await user.findOne({ email })

    if (candidate) {
      return res.status(400).json({ message: 'This user already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const result = new user({ email, password: hashedPassword })

    await result.save()

    res.status(201).json({ message: 'User created' })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong, please try again' })
  }
}