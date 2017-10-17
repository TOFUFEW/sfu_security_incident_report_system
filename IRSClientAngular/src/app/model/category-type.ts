export class CategoryType {
    CATEGORY_ID: number;
    SUB_CATEGORY: number;
    NAME: string;

    constructor ( id, subCategory, name ) {
        this.CATEGORY_ID = id;
        this.SUB_CATEGORY = subCategory;
        this.NAME = name;
      }
  }