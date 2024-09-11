import { findOneSubscribe, saveSubscribeData } from "./mongodbService.js";

export const submitData = (obj) => {
  const data = {
    name: obj.name,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    email: obj.email,
    message: obj.message,
    access_key: "",
  };

  const issues = JSON.parse(fs.readFileSync(contactsFilePath, "utf8"));
  issues.push(data);

  fs.writeFileSync(contactsFilePath, JSON.stringify(issues, null, 2), "utf8");

  return data;
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
