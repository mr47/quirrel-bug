import { CronJob } from "quirrel/next";

export default CronJob(
    "api/test",
    "*/1 * * * *",
    async () => {
        console.log("I am a cron job running every minute");
    }
);
