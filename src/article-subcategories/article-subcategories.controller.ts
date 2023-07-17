import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateArticleSubcategoryDto } from "./create-article-subcategory.dto";
import { ArticleSubcategoriesService } from "./article-subcategories.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ArticleSubcategory } from "./article-subcategories.model";

@ApiTags('Article categories')
@Controller('api/article-subcategories')
export class ArticleSubcategoriesController {
  constructor(private service: ArticleSubcategoriesService) {}

  @ApiOperation({summary: 'Create article subcategory'})
  @ApiResponse({status: 200, type: ArticleSubcategory})
  @Post()
  create(@Body() dto: CreateArticleSubcategoryDto) {
    return this.service.create(dto)
  }

  @ApiOperation({summary: 'Update article subcategory'})
  @ApiResponse({status: 200, type: ArticleSubcategory})
  @Post(":id")
  update(@Param() param: { id: string }, @Body() dto: CreateArticleSubcategoryDto) {
    return this.service.update(param.id, dto)
  }

  @ApiOperation({'summary': 'Get article subcategory by ID'})
  @ApiResponse({status: 200, type: ArticleSubcategory})
  @Get(":id")
  get(@Param() param: { id: string }) {
    return this.service.find(param.id)
  }

  @ApiOperation({'summary': 'Get all articles categories'})
  @ApiResponse({status: 200, type: [ArticleSubcategory]})
  @Get()
  findAll() {
    return this.service.findAll()
  }
}
