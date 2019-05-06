import axios from "axios";
import config from "./config";
import urls from "./actionURLS";

export const GET_COLLABRATIVES = "GET_COLLABRATIVES";
export const GET_COLLABRATIVEDETAILS = "GET_COLLABRATIVEDETAILS";

export function getCollaboratives() {
  return dispatch => {
    axios
      .get(`${urls.getAllCollabratives}`, config)
      .then(result => {
        dispatch({
          type: GET_COLLABRATIVES,
          data: result.data
        });
      })
      .catch();
  };
}

export function getCollabrativeDetail(collaborationId) {
  return dispatch => {
    axios
      .get(`${urls.getCollabrativeInfo}${collaborationId}`, config)
      .then(result => {
        dispatch({
          type: GET_COLLABRATIVEDETAILS,
          data: result.data
        });
      })
      .catch();
  };
}