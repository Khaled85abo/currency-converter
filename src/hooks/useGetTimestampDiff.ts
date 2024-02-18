import { useAppSelector } from "./redux";

const getTimestampInSeconds = () => {
  return Math.floor(Date.now() / 1000);
};

const useGetTimestampDiff = () => {
  const timestamp = useAppSelector((state) => state.currency.timestamp);
  /**
   *
   * @param diffMinutes the time difference to check in minutes
   * @returns boolean
   */
  const isOutdated = (diffMinutes: number = 10) => {
    if (!timestamp) return true;
    const minuteDiff = getTimestampInSeconds() - timestamp;
    if (Math.floor(minuteDiff / 60) > diffMinutes) {
      return true;
    }
    return false;
  };

  return isOutdated;
};

export default useGetTimestampDiff;
