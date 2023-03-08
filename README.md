This is just my Next.js test repository

# Compare build time 

| Platform         | Region                              | Time(s)  | Log                                                                 |
|:---------------- |:----------------------------------- |:-------- |:------------------------------------------------------------------- |
| Heroku           | US region                           | 11       | [heroku.txt](./logs/heroku.txt), [heroku2.txt](./logs/heroku2.txt)  |
| Vercel           | Washington, D.C., USA (East) – iad1 | 56       | [vercel.txt](./logs/vercel.txt)                                     |
| Cloudflare Pages | ? (Cloudflare's global network)     | 87       | [cloudflare-pages.log](./logs/cloudflare-pages.log)                 |
| AWS Amplify      | ap-northeast-1                      | 188      | [amplify.txt](./logs/amplify.txt)                                   |
| Render           | Oregon (US West)                    | 254      | [render.txt](./logs/render.txt)                                     |

- Heroku: Deployed to Common Runtime, and running on Eco Dyno
- Render: Deployed to Web Service(Free);

