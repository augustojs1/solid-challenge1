import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    if (Array.isArray(user_id)) {
      throw new Error("Id must be a string and not an array");
    }

    try {
      this.listAllUsersUseCase.execute({ user_id });

      return response.status(200).send();
    } catch (error) {
      return response.status(400).json({ error: "Error!" });
    }
  }
}

export { ListAllUsersController };
