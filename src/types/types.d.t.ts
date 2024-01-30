export interface MemberType {
  _id: number;
  nickname: string;
  role: { id: number; role: string; bgColor: string };
  image: null | string;
}

export interface RoleType {
  _id: string;
  bgColor: string;
  role: string;
}
