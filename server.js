const express = require('express')
const app = express()

const chalk = require('ansi-colors')

// async function send(c_code){
//     const response = await fetch("https://github.com/login/oauth/access_token", {
//         method: "POST",
//         body: {
//             "client_id": "4994ff7b736e37e78415",
//             "client_secret": "6b250e12d6c98d10d7451ffdc53fc41e49c92c0b",
//             "code": c_code,
//             "accept":"json"
//         }
//     })
//     return response;
// }


app.get("/log", (req, res)=>{
    const auth = createAppAuth({
  appId: 330693,
  privateKey: "MIIEowIBAAKCAQEA4f9m/s6g6rzTqJVK40rE2OXSP7AJ/PuIiAT9PW63Vf9C0sEYDPSCGKPpJN06ZQ+hbRSyLg5i0f0o2WZGQVWZra97JMZh+yUzQshpvTKgSIGBVt7HwohObqmokcE71UU0dRCYP8kgMRwoR4N0LoWi7aj2kEdx9kIyByHUQMBNu8F6/XJ1kuSF/VhTG48SmL375wREkkLCXfINy4hiZDg6akyyaDhBm+PPjaCR5j682H7M2ejnb7BURxBTQzpBEhmdT8pOJSb5bcl6a6V/kTGXGWiHSpARq9q79QS8A/JhwOzUsa10oA2Vb6aMQtg5FChDPlO49MghKxT7KhhgvBcc1wIDAQABAoIBAQCrMTjn08X5isgab9ymiEDMvGqja8plJHSr9HuQSYn/TrljxHlfdugFmkRFdH+Dhm+VnZPLZ4Jb5xVGeT7Gxvz+oGr71HrsL6XA9OeENhFMWy2KjH9tUKt5EHNs1Z9pUl8GPmfWCZilGts4MM+VXg2pUdBUQoqFLGeRF4Mc+Y7opZ7neTFVfiGyDIwwNLUx/gx3D6c+sdHUSHvd0wkyYXov3wkztP5q1fkmjeG2hGYDYZqjk8k0n9YjuPEptDYSKq4ji+gqz/IIay629zwy3NUZHJe+PAAn/lNh6vsWQFw4bwaUC4Af+X5ew4XrS/YnhEtX28REMu713I4oz1BNKNhAoGBAPb8xZSmmNBsk7Yd5X/jr9i+hxeEWc5ayxg3mBXEjBuBCQgChXzC+cV6vkAvEq3PaX4k4q1Yk7vURhcjCz6sKXj6UWJjjz327acdDugJIy7rQWQyq5mxM9s7PkpcCtlImMXA4bRB2y+U3EcSg8rX2qygbRyVbK1cGpKdAcwhZfDVAoGBAOo+ji6B57bieubkneQbiIuLhJb7Vx5ZMg405OUJAVEAi3vXRm6/i/PBesWM64kdbQVQ+vS0u9WCP6Qrg9xOFeozeX9eMpiwysM3HKBV85ytLJwNYFaYxwu5laIg//zBKoLCnGP6Cyxm11mTHZYTzXx8RqBpq99VQ2VvoCGbcgz7AoGAdb+UQoYaHGNnGE+wdgQKdX5/0Qpb9jD62hTHALmvQf2GXLc3BH+/rBIUWW0Xrp1PYcAcASBVbhqJP8aJOdvB+db8rbdhNt1d92m3DZAtodSuXCJ8BM2iN0ZLMBApa+VcUArgj5tF7608RvXgtvepXNsuqY3jPdLHKFaJ4NObUfECgYA50CypX9h/s9AfkodBmGYQAuQ7m1b6H4uSJA3mVV2kz1yduRkiFlaFV9hkT46GbePNbxoxMTY20QnCDBdkVUVlY0T2YZpdQy0YF08SZ4RTxA4Bie+gD974jtpWhIyJpmdGlJ+isUD2uX8nFX803jhWJBoOV2ZbHaEftPgxszrn5wKBgA9v3XNYjSpm6xnxCn93kcy56F932qUDRjAgdK0fexYY90NNTzYsP9TuztwUEOBpqHBhww3omN6AnLZeDhrItI/d6CKKxRMkw5I0ZzQeJbg12rcx7IPlQ8GsoZCNsIzIgcpFEX9BDhqiN90FWf8IASTm/RzIrDS9wzSOduel39XO",
  clientId: "lv1.cdd5382da8b8d3b5",
  clientSecret: "434311e67994e1d7b4b1cab3f7fe4b9f2041dd87",
});

const appAuthentication = auth({
  type: "oauth-app",
});
})

app.listen(3000, ()=>{console.log(chalk.bold.underline.green("\n\n\n\n\n\n\n\n\n\n\n\n\nServer Started!"))});