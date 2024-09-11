import Subscribe from "../models/subscribe.js";

export function getSubscribeById() {
  return Subscribe.find();
}

export function saveSubscribeData(email) {
  try {
    const newSubscribe = new Subscribe({ email }).save();
    console.log("Data saved successfully");
    return newSubscribe;
  } catch (error) {
    console.error("Error saving data:", error);
    throw error;
  }
}

export function findOneSubscribe(request) {
  return Subscribe.findOne({ email: request });
}
