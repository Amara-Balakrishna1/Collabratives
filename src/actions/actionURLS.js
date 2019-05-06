const serverURL = "https://datacollaborativeapi.azurewebsites.net/api/users";

function getCookie(name) {
  const re = new RegExp(`${name}=([^;]+)`);
  const value = re.exec(document.cookie);
  return value != null ? unescape(value[1]) : null;
}

const userID = getCookie("userId") || "e497ab73-5d33-447d-aa36-ecd6354c9133";

const url = {
  getAllCollabratives: `${serverURL}/${userID}`,
  getCollabrativeInfo: `${serverURL}/${userID}/collaborations/`,
  postCollaboration: `${serverURL}/${userID}/collaborations`
};

export default url;
