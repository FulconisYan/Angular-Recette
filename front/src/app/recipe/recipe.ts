export interface Recipe {
  _id: string;
  name: string;
  title: string;
  difficulty: number;
  rate: number;
  calories: number;
  carbon_print: string;
  commentaries: string[];
  cookTime: string;
  diet: "meat";
  ingredients: string[];
  carbonTime: 0;
  likes:5;
  pictures:string[];
  preparationTime: string;
  season: string;
  steps: string[];
  summary: string;
  tools: string[];
  videos: string[];
  __v?: number;
}
