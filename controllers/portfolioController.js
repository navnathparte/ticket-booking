import * as portfolioService from "../services/portfolioService.js";

export const submitContacts = (req, res) => {
  try {
    const { name, email, message } = req.body;
    const savedata = portfolioService.submitData({ name, email, message });
    res.status(201).json(savedata);
  } catch (error) {
    console.log(error);
  }
};

export async function subscribe(req, res) {
  try {
    const { email } = req.body;
    const subscribeData = await portfolioService.subscribeData(email);
    res.status(201).json(subscribeData);
  } catch (error) {
    console.log(error.message);
    res.status(409).json({ message: error.message });
  }
}

export async function checkSubscription(req, res) {
  const { email } = req.body;
  try {
    const subscriber = await portfolioService.findOneSubscriber(email);
    if (subscriber) {
      return res.json({ isSubscribed: true });
    }
    return res.json({ isSubscribed: false });
  } catch (error) {
    console.error("Error checking subscription:", error);
    res.status(500).send({ message: "Error checking subscription" });
  }
}
