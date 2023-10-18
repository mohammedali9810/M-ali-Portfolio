import Google from "../assets/google.jpg";
import Verizon from "../assets/verizon.jpg";
import ProjectImg from "../assets/project.jpg";
import ProjectImg2 from "../assets/proj1.jpeg";
interface Map {
  [key: string]: string | undefined;
}

export const logo: Map = {
  google: Google,
  verizon: Verizon,
};

export enum Constants {
  USERNAME = "Mohammed Ali",
}

export const projectImage: Map = {
  "project name 1": ProjectImg,
  "project name 2": ProjectImg,
  "project name 3": ProjectImg2
};
