"use strict";

import wrapper    from "../constants/wrapper";
import Network    from "../constants/network";

// Local actions
const actions = [];

// Actions that make an api request
const requests = [
  "SEND_SCORE"
];

export const Constants = wrapper(actions, requests);

export const sendScore = (score, lis_outcome_service_url, lis_result_sourcedid, lms_user_id) => {
  return {
    type:   Constants.SEND_SCORE,
    method: Network.POST,
    url:    `api/outcomes`,
    body: {
      score,
      lis_outcome_service_url,
      lis_result_sourcedid,
      lms_user_id
    }
  };
};