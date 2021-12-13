# Godongramgi Slack BOT

## Usage

1. Signing ngrok 
```
yarn SIGNING_SECRET=<SIGNING_SECRET> port=<port> --path=/slack/events ngrok-verify
```

2. start ngrok
```
yarn ngrok-server
```

3. run bot server
```
yarn dev-server
```