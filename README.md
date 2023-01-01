# OneTask
How many times have you sat down starting at a large task unsure of how to break it down? Let OneTask do it for you!

OneTask is an AI assisted Todo list app. It taps into ChatGPT and breaks down any task that you throw at it into as many subtasks as you want!

Create breakdown tasks by
```
<task> --breakdown <numberOfSubtasks>
```
### Example
```
Visit a doctor --breakdown 3
```

### demo
![onetask demo](https://user-images.githubusercontent.com/88381529/210173646-8c819915-fa52-4450-a34c-051c8afaa205.gif)

### Setup
create .env and add your cloudflare session token. to find your session token, go to application tab under dev tooks, cookies, and find next-auth-session-token
`python ./server/main.py`
then run `npm run dev` after `cd client`

### Warning
Using chatgpt this way is a violation of openai's ToS. However, it is in no way illegal. the maximum thats gonna happen is your openai account getting banned. as long as you dont care about that. feel free to do whatever
