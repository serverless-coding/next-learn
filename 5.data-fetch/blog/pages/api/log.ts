import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    log: string
    id: string
    age: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({
        log: 'John Doe',
        id: '1',
        age: "111",
    })
}