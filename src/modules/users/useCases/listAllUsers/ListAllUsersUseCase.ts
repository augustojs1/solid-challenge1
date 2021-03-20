import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const id = user_id;

    const user = this.usersRepository.findById(id);

    if (!user) {
      throw new Error("User not found!");
    }

    if (!user.admin) {
      throw new Error("User not authorized!");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
