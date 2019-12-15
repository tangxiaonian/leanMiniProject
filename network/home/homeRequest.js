import request from "../network.js";

export function requestHome(){
  return request({
    url: "/home/multidata",
  });
}