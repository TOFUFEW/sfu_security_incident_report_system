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