import { Injectable } from "@nestjs/common";
import { Task } from "./entities/task.entity";
import { PrismaService } from "src/app/infra/prisma/prisma.service";

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}
  private tasks: Task[] = [
    {
      id: "dfskg22351k424kms",
      name: "task1",
      description: "description1",
      isCompleted: false,
    },
  ];

  findMany() {
    return { tasks: this.tasks };
  }

  findOne(taskId: string) {
    console.log("taskId", taskId);
    return { id: 1, name: "task1" };
  }

  create(task: { name: string; description: string }) {
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
