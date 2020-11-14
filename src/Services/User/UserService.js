import { generateUUID } from "./../../Helpers/User/UserHelpers";

export function getUsers() {
  return [
    { id: generateUUID(), name: "user1" },
    { id: generateUUID(), name: "user1" },
  ];
}
export function addUser(user) {
  return { id: generateUUID(), name: user };
}
export function deleteUser(id) {
  return id;
}
