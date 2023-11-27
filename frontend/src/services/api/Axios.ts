import { AxiosResponse } from "axios";
import { formState } from "../../interfaces/FormTypes";
import axios from "./AxiosConfig";

const GetRecords = async (url: string): Promise<AxiosResponse> => {
  return await axios.get(url);
};

const PostReacord = (Url: string, data?: formState) => axios.post(Url, data);
const PatchRecord = (
  Url: string,
  id: string,
  data: formState | object = {}
) => {
  return axios.patch(`${Url}/${id}`, data);
};
const DeleteRecord = (Url: string, id: string) => {
  return axios.delete(`${Url}/${id}`);
};

export { GetRecords, PostReacord, PatchRecord, DeleteRecord };
