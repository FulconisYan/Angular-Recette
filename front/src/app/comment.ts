export interface Comment {
  _id: string;
  user_id: string;
  summary: string;
  image: string;
  likes:number;
  dislikes:number;
  __v?: number;
}
