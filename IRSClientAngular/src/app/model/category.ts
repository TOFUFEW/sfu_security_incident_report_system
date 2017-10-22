export class Category {
    CATEGORY_ID: number;
    MAIN_CATEGORY: string;
    SUB_CATEGORY: string;
    INCIDENT_TYPE: string;

    constructor ( id, mainCategory, subCategory, type ) {
        this.CATEGORY_ID = id;
        this.MAIN_CATEGORY = mainCategory;
        this.SUB_CATEGORY = subCategory;
        this.INCIDENT_TYPE = type;
      }
  }

export class CategoryDictionary {
    ID: number;
    MAIN_CATEGORY: string;
    SUBCATEGORIES: SubCategory[] ;

    constructor () {
        this.ID = 0;
        this.MAIN_CATEGORY = "";
        this.SUBCATEGORIES = [];
    }
}

export class SubCategory {
    CATEGORY_ID: number;
    SUB_CATEGORY: string;
    TYPES: CategoryType[];

    constructor () {
        this.SUB_CATEGORY = "";
        this.TYPES = [];
    }
}

export class CategoryType {
    CATEGORY_ID: number;
    INCIDENT_TYPE: string;

    constructor () {
        this.INCIDENT_TYPE = "";
    }
}
