import axios from 'axios'
import { type ChangeEventHandler } from 'react'

export default function TestUpload() {
  const uploadFiles: ChangeEventHandler<HTMLInputElement> = async e => {
    const { files } = e.target

    if (files !== null) {
      const formData = new FormData()
      Array.from(files).forEach(file => {
        formData.append('file', file)
      })

      await axios.post('/api/upload', formData)
    }
  }

  return (
    <div>
      <input type="file" multiple onChange={uploadFiles} />
    </div>
  )
}
