const appConfig = {
  url: `https://openexchangerates.org/api`,
  APP_ID: "f560bbf510d64434a45d4f37963c0bf8", // this should be moved to .env file
  timeSyncDiff: 60, // in Minutes, New data will be fetched if the time difference is more than timeSyncDiff
};

export default appConfig;
