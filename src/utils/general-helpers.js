import { formatDistanceToNow } from "date-fns";

class GeneralHelpers {
  static getImageUrl(image) {
    return `${this.getBaseUrl()}${image}`;
  }

  static getTimeAgo(date) {
    return formatDistanceToNow(new Date(date), { addSuffix: true });
  }
}

export default GeneralHelpers;
