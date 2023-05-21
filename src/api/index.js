import {conversation, currentUser} from './mock-data'
const LATENCY = 16

export function getAllMessages (cb) {
  setTimeout(() => {
    cb(conversation)
  }, LATENCY)
}
export function getCurrentUser (cb) {
  setTimeout(() => {
    cb(currentUser)
  }, LATENCY)
}

export function createMessage ({id, text}, cb) {
  const d = new Date();
  const datestring = d.getFullYear() + "-" + (d.getMonth()+1) + "-" +  d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + d.getSeconds()
  const message = {
    id,
    from: JSON.parse(currentUser),
    message: text,
    date: datestring
  }
  setTimeout(function () {
    cb(message)
  }, LATENCY)
}