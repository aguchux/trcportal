import Multer from 'multer'
const storage = Multer.memoryStorage()
export const multer = Multer({ storage })
export const uploadMiddleware = multer.single('file');