import { connectDB } from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const db = (await connectDB).db("dutchpay");
    const id = req.query.id as unknown as string;
    if (!id) {
      res
        .status(400)
        .json({ success: false, message: "id 쿼리가 빠졌습니다." });
    }
    const result = await db
      .collection("role")
      .findOne({ _id: new ObjectId(id) });
    res.status(200).json(result);
  } else {
    res
      .status(405)
      .json({ success: false, message: "메서드가 올바르지 않습니다." });
  }
}
