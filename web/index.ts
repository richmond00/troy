import { UserEdit } from "./src/views/UserEdit";
import { User } from "./src/models/User";

const user = User.buildUser({ name: 'NAME', age: 20 });
const root = document.getElementById('root');

if (root) {
    const userEdit = new UserEdit(root, user);
    userEdit.render();
    console.log(userEdit);
} else {
    throw new Error('Root element not found');
}