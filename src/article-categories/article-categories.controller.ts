import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateArticleCategoryDto } from "./create-article-category.dto";
import { ArticleCategoriesService } from "./article-categories.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ArticleCategory } from "./article-categories.model";

@ApiTags("Article categories")
@Controller("api/article-categories")
export class ArticleCategoriesController {
  constructor(private service: ArticleCategoriesService) {}

  @ApiOperation({ summary: "Create article category" })
  @ApiResponse({ status: 200, type: ArticleCategory })
  @Post()
  create(@Body() dto: CreateArticleCategoryDto) {
    return this.service.create(dto);
  }

  @ApiOperation({ summary: "Update article category" })
  @ApiResponse({ status: 200, type: ArticleCategory })
  @Post(":id")
  update(
    @Param() param: { id: string },
    @Body() dto: CreateArticleCategoryDto,
  ) {
    return this.service.update(param.id, dto);
  }

  @ApiOperation({ summary: "Get article category by ID" })
  @ApiResponse({ status: 200, type: ArticleCategory })
  @Get(":id")
  get(@Param() param: { id: string }) {
    return this.service.find(param.id);
  }

  @ApiOperation({ summary: "Delete article category" })
  @ApiResponse({ status: 200 })
  @Delete(":id")
  delete(@Param() param: { id: string }) {
    return this.service.delete(param.id);
  }

  @ApiOperation({ summary: "Get all articles categories" })
  @ApiResponse({ status: 200, type: [ArticleCategory] })
  @Get()
  findAll() {
    return this.service.findAll();
  }
}
