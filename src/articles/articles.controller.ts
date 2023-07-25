import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateArticleDto } from "./create-article.dto";
import { ArticlesService } from "./articles.service";
import { Article } from "./articles.model";

@ApiTags("Articles")
@Controller("api/articles")
export class ArticlesController {
  constructor(private service: ArticlesService) {}

  @ApiOperation({ summary: "Create article" })
  @ApiResponse({ status: 200, type: Article })
  @Post()
  create(@Body() dto: CreateArticleDto) {
    return this.service.create(dto);
  }

  @ApiOperation({ summary: "Get article by ID" })
  @ApiResponse({ status: 200, type: Article })
  @Get(":id")
  get(@Param() param: { id: string }) {
    return this.service.find(param.id);
  }

  @ApiOperation({ summary: "Update article" })
  @ApiResponse({ status: 200, type: Article })
  @Post(":id")
  update(@Param() param: { id: string }, @Body() dto: CreateArticleDto) {
    dto.active = dto.active ? dto.active : false;
    return this.service.update(param.id, dto);
  }

  @ApiOperation({ summary: "Delete article" })
  @ApiResponse({ status: 200 })
  @Delete(":id")
  delete(@Param() param: { id: string }) {
    return this.service.delete(param.id);
  }

  @ApiOperation({ summary: "Get all articles" })
  @ApiResponse({ status: 200, type: [Article] })
  @Get()
  findAll() {
    return this.service.findAll();
  }
}
