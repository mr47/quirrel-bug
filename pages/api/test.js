import { CronJob } from "quirrel/next";

export default CronJob(
    "api/test",
    "* * * * *",
    async () => {
        console.log("I am a cron job running every minute");
    }
);
