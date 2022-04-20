export default async (req, res) => {
    if(!req.query.todo) {
        return res.status(400).send("todo parameter required.")
    }
    let todo = encodeURI(req.query.todo)

    const endpoint = process.env.UPSTASH_REDIS_REST_URL
    const token = process.env.UPSTASH_REDIS_REST_TOKEN

    const url = `${endpoint}/lrem/todo/1/${todo}?_token=${token}`

    return fetch(url)
        .then(r => r.json())
        .then(data => {
            let result = JSON.stringify(data.result)
            return res.status(200).json(result)
        })
}
