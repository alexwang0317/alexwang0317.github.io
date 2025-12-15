import strftime from "strftime";
const utc = strftime.utc();
function formatTime(format, date) {
  return utc(format, new Date(date));
}
export {
  formatTime as f
};
