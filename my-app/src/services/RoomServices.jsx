import { del, edit, get, post } from "../utils/request"

export const CreateRoomServices = async (options) => {
    const result = await post("rooms", options);
    return result;

}
export const GetListRoom = async () => {
    const result = await get("rooms");
    return result;
}

export const EditRoomServices = async (id, options) => {
    const result = await edit(`rooms/${id}`, options);
    return result;
}

export const DeleteRoomServices = async (id) => {
    const result = await del(`rooms/${id}`)
    return result;
}