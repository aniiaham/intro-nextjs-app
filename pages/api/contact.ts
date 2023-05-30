export default function handler(req: { method: string; body: any }, res: { json: (arg0: { message: string }) => void }) {
    if (req.method === 'POST') {
        // save to DB! 
        res.json({message: 'ok'})
        console.log(req.body)
    }
}