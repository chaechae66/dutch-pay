export interface MemberType {
  id: number;
  nickname: string;
  role: { id: number; role: string; bgColor: string };
  image: null | string;
}
