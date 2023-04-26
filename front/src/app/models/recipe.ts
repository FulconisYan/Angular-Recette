import { Tool } from "./tool";
import { Ingredient } from "./ingredient";

export interface Recipe {
  _id: string;
  title: string;
  difficulty: number;
  rate: number;
  calories: number;
  commentaries: Array<string>;
  diet: string;
  ingredients: Array<Ingredient>;
  likes: number;
  pictures: Array<string>;
  season: string;
  steps: Array<string>;
  summary: string;
  tools: Array<Tool>;
  videos: Array<string>;
  __v?: number
  cookTime: Object
  preparationTime: Object
  carbonPrint: number;
}
