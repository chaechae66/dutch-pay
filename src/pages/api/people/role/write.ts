import { connectDB } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (!req.body) {
      return res
        .status(400)
        .json({ success: false, message: "데이터를 입력해주세요." });
    }
    if (req.method === "POST") {
      if (!req.body.role) {
        res
          .status(400)
          .json({ success: false, message: "역할 데이터를 입력해주세요." });
      }
      if (!/^#([a-f0-9]{6}|[a-f0-9]{3})$/.test(req.body.bgColor)) {
        res.status(400).json({
          success: false,
          message: "양식에 맞는 컬러 값을 입력해주세요.",
        });
      }
      const db = (await connectDB).db("dutchpay");
      db.collection("role").insertOne(req.body);
      return res.status(200).json({ success: true });
    } else {
      res
        .status(405)
        .json({ success: false, message: "메서드가 올바르지 않습니다." });
    }
  } catch (e) {
    return res.status(500).json({ success: false, message: e });
  }
}
