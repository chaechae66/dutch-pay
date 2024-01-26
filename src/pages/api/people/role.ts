import { connectDB } from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (req.method === "GET") {
      const db = (await connectDB).db("dutchpay");
      const result = await db.collection("role").find().toArray();
      return res.status(200).json(result);
    } else if (req.method === "POST") {
      if (!req.body) {
        return res
          .status(400)
          .json({ success: false, message: "데이터를 입력해주세요." });
      }
      const body = JSON.parse(req.body);
      if (!body.role) {
        res
          .status(400)
          .json({ success: false, message: "역할 데이터를 입력해주세요." });
      }
      if (!/^#([a-f0-9]{6}|[a-f0-9]{3})$/.test(body.bgColor)) {
        res.status(400).json({
          success: false,
          message: "양식에 맞는 컬러 값을 입력해주세요.",
        });
      }
      const db = (await connectDB).db("dutchpay");
      db.collection("role").insertOne(body);
      return res.status(200).json({ success: true });
    } else if (req.method === "DELETE") {
      const body = JSON.parse(req.body);
      if (!body || body.lengh === 0) {
        res
          .status(400)
          .json({ success: false, message: "삭제할 데이터를 입력해주세요." });
      }
      const db = (await connectDB).db("dutchpay");
      const result = await db.collection("role").deleteMany({
        _id: { $in: body.map((elem: string) => new ObjectId(elem)) },
      });
      if (result.deletedCount > 0) {
        res.status(200).json({
          success: true,
          message: `${result.deletedCount}개 삭제가 성공하였습니다.`,
        });
      } else {
        res
          .status(400)
          .json({ success: false, message: "삭제를 실패하였습니다." });
      }
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
