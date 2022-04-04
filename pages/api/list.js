export default async (req, res) => {
    // const token = "REPLACE_YOUR_TOKEN";
    // const url = "https://REPLACE_YOUR_ENDPOINT/lrange/todo/0/100?_token=" + token;


    // eu1-ace-bison-36183.upstash.io
    const endpoint = process.env.UPSTASH_REDIS_REST_URL
    const token = process.env.UPSTASH_REDIS_REST_TOKEN

    const url = `${endpoint}/lrange/todo/0/100?_token=${token}`
    // const url = "https://REPLACE_YOUR_ENDPOINT/lrange/todo/0/100?_token=" + token


    return fetch(url)
        .then(r => r.json())
        .then(data => {
            let result = JSON.stringify(data.result)
            return res.status(200).json(result)
        })
}
