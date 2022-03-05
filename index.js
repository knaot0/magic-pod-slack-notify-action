const core = require("@actions/core");
const axios = require("axios").default;

const API_TOKEN = core.getInput("API_TOKEN");
const ORGANIZATION = core.getInput("ORGANIZATION");
const PROJECT = core.getInput("PROJECT");
const INCOMING_WEBHOOK_URL = core.getInput("INCOMING_WEBHOOK_URL");

const main = async () => {
  try {
    const response = await axios.get(
      `https://magic-pod.com/api/v1.0/${ORGANIZATION}/${PROJECT}/batch-runs/?count=1`,
      {
        headers: { Authorization: `Token ${API_TOKEN}` },
      }
    );

    const batchRuns = response.data.batch_runs;
    if (batchRuns.length === 0) return;

    const { status, url } = batchRuns[0];
    if (status !== "failed") return;

    await axios.post(INCOMING_WEBHOOK_URL, {
      text: ["<!here>", `❌ ${PROJECT}`, url].join("\n"),
    });
  } catch (error) {
    core.setFailed(error.message);
  }
};

main();
