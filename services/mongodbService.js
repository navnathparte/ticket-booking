import Subscribe from "../models/subscribe.js";
import contacts from "../models/contacts.js";

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

export function getContactById() {
  return contacts.find();
}

export function saveContactData(data) {
  try {
    const newContacts = new contacts(data).save();
    console.log("Contacts saved successfully");
    return newContacts;
  } catch (error) {
    console.error("Error saving data:", error);
    throw error;
  }
}

export function findOneContact(request) {
  return contacts.findOne({ email: request });
}
