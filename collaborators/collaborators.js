import UserService from '../services/user-service';

class Collaborators {
   collaborators = {};
    #userService;

    constructor(userServiceInstance) {
        if (!(userServiceInstance instanceof UserService)) {
            console.warn("Expected an instance of UserService.");
        } 
        this.#userService = userServiceInstance;
        this.collaborators = this.getAllCollaborators();
    }

    getAllCollaborators() {
        const users = this.#userService.getAllUsers();

        console.log("users: ", users);

        const collaborators = users.reduce((acc, user) => {
            acc[user.id] = { ...user, isCollaborator: true };
            return acc;
        }, {});

        console.log("collaborators: ", collaborators);

        return collaborators;
    }
}

const userService = new UserService();
const AppCollaborators = new Collaborators(userService);

userService.addUser({ id: 1, name: 'Alice' });
userService.addUser({ id: 2, name: 'Bob' });
console.log("Colaboradores após adicionar usuários:", AppCollaborators.getAllCollaborators());

