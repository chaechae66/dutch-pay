import { connectDB } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (req.method === "GET") {
      const db = (await connectDB).db("dutchpay");
      const result = await db.collection("member").find().toArray();
      return res.status(200).json(result);
    } else {
      res
        .status(405)
        .json({ success: false, message: "메서드가 올바르지 않습니다." });
    }
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e,
    });
  }
}
