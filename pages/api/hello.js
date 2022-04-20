import {proyects} from "../../assets/proyects.js"
export default function handler(req, res) {
  res.status(200).json(proyects)
}
