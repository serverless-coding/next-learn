// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.method, "query params:", req.query,
    "version:", req.httpVersion,
    "cookie:", req.cookies,
    "headers:", req.headers
  )

  if (typeof window === undefined) {
    // 执行在服务端
    console.log('window=', window)
  }
  res.status(200).json({ name: 'John Doe' })
}
