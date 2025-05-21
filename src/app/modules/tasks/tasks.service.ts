import { Injectable } from "@nestjs/common";
import { Task } from "./entities/task.entity";
import { PrismaService } from "src/app/infra/prisma/prisma.service";

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async findMany() {
    const tasks = await this.prisma.task.findMany();

    return { tasks };
  }

  findOne(taskId: string) {
    console.log("taskId", taskId);
    return { id: 1, name: "task1" };
  }

  async create(task: { name: string; description: string }) {
    /*  await this.prisma.task.create({
      where
    }) */
    console.log("taskId", task);
    return { id: 1, name: "task1" };
  }

  update(taskId: string, task: { name: string; description: string }) {
    console.log("taskId", task, taskId);
    return { id: 1, name: "task1" };
  }

  remove(taskId: string) {
    return "Removido com sucesso!";
  }
}
