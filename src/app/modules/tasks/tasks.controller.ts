import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
} from "@nestjs/common";
import { ZodValidationPipe } from "src/app/common/pipes/zod-validation.pipe";
import { CreateTaskDto, createTaskSchema } from "./dto/create-task.dto";
import { TasksService } from "./tasks.service";

@Controller("tasks")
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  findMany() {
    return this.taskService.findMany();
  }

  @Get(":taskId")
  findOne(@Param("taskId") taskId: string) {
    if (!taskId) {
      throw new BadRequestException("Task ID is required");
    }
    return this.taskService.findOne(taskId);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createTaskSchema))
  create(@Body() body: CreateTaskDto) {
    return this.taskService.create(body);
  }

  @Put(":taskId")
  update(
    @Param("taskId") taskId: string,
    @Body() body: { name: string; description: string },
  ) {
    if (!taskId) {
      throw new BadRequestException("Task ID is required");
    }
    return this.taskService.update(taskId, body);
  }

  @Delete(":taskId")
  remove(@Param("taskId") taskId: string) {
    if (!taskId) {
      throw new BadRequestException("Task ID is required");
    }
    return this.taskService.remove(taskId);
  }
}
