import nc from 'next-connect'
import multer from 'multer'
import path from 'path'
import { type NextApiRequest, type NextApiResponse, type PageConfig } from 'next'

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
}

const upload = multer({
  storage: multer.diskStorage({
    destination: path.join(process.cwd(), 'uploads'),
    filename(_req, file, callback) {
      callback(null, file.originalname)
    },
  }),
})

const handler = nc<NextApiRequest, NextApiResponse>()

handler.use(upload.array('file'))

handler.post((req, res) => {
  const files = req.files
  console.log(files)
  res.status(200).json('Done!')
})

export default handler
