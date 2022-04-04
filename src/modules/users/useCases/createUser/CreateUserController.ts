import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response) {

    try {
      const { name, email } = request.body
      this.createUserUseCase.execute({ name, email });

    } catch (err) {

    }
  }
}

export { CreateUserController };
