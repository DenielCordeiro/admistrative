class UserService {
    constructor() {
        this.users = [];
    }

    login(user) {
        console.log(user);
    }

    addUser(user) {
        this.users.push(user);
        console.log(`User ${user.name} added.`);
    }

    getAllUsers() {
        return this.users;
    }
}

export default UserService;