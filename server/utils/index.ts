import CryptoJS from 'crypto-js'

export const encodeMessage = (message: string) => {
    const hash = CryptoJS.SHA224(message)
    return hash.toString(CryptoJS.enc.Hex)
}