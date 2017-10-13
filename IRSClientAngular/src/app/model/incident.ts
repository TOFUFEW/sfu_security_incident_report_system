export class Incident {
    REPORT_ID: number;
    ACCOUNT_ID: number;
    CATEGORY_ID: number;
    DESCRIPTION: string;
    EXECUTIVE_SUMMARY: string;
    CLOSED: number;
    incidentElements: object[];

    constructor() {
      this.incidentElements = [];
    }
  }
  