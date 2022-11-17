import moment from "moment";
/* Function Header
 *
 * function to format dates
 * @author Peter Walton
 * @param  {UTCDateString}
 * @return {string}
 */
export function formatDate(UTCDateString) {
  return moment(UTCDateString).format("DD MMM yyyy - hh:mm");
}
