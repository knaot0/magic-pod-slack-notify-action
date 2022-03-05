# MagicPod Slack Notify Action

Slack notification

## Inputs

## `API_TOKEN`

**Required** API Token.

## `ORGANIZATION`

**Required** Organization name.

## `PROJECT`

**Required** Project name.

## `INCOMING_WEBHOOK_URL`

**Required** Incoming Webhook URL

## Example usage

```yml
uses: knaot0/magic-pod-slack-notify-action@v1.1
with:
  API_TOKEN: ${{ secrets.MAGIC_POD_API_TOKEN }}
  ORGANIZATION: "Organization name"
  PROJECT: "Project name"
  INCOMING_WEBHOOK_URL: "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX"
```
