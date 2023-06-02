// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { request } from '../../interfaces/request'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let request:request = req.body;

  let params = {
    method: request.method,
    headers: request.headers,
    //body: JSON.stringify(request.body),
  }


  const resp = await fetch(request.baseUrl+request.endpoint, params)
  .then((response) => response.json())
  .then((responseJson) => {
    res.status(200).json(JSON.stringify(responseJson))
  })
  .catch((error) => {
    console.error("Error:", error);
    res.status(200).json(JSON.stringify(error))
  });
}