import { Schema, model, Document} from 'mongoose'


export interface User extends Document {
    email: string;
    password: string;
    // comparePassword(candidatePassword: string): Promise<boolean>;
}

const schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

export const user = model<User>('User', schema)
