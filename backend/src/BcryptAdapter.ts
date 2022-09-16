import bcrypt from 'bcrypt'

const hashPassword = async (password: string, salt = 12): Promise<string> => {
    return await bcrypt.hash(password, salt)
}

const comparePassword = async (password: string, compare: string): Promise<boolean> => {
    return await bcrypt.compare(password, compare);
}

export {hashPassword, comparePassword}