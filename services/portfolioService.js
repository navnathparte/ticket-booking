import {
  findOneContact,
  findOneSubscribe,
  saveContactData,
  saveSubscribeData,
} from "./mongodbService.js";

export const submitData = async (obj) => {
  try {
    const data = {
      name: obj.name,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      email: obj.email,
      message: obj.message,
    };
    const existingContact = await findOneContact(obj.email);
    if (existingContact) {
      throw Error("Contact already submitted!!!");
    }

    const resp = await saveContactData(data);
    return resp;
  } catch (error) {
    throw error;
  }
};

export async function subscribeData(email) {
  try {
    const existingSubscribe = await findOneSubscriber(email);
    if (existingSubscribe) {
      throw Error("Email already subscribed");
    }

    const resp = await saveSubscribeData(email);
    return resp;
  } catch (error) {
    throw error;
  }
}

export function findOneSubscriber(email) {
  return findOneSubscribe(email);
}
