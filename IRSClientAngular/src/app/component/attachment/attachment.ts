import { Config } from '../../util/config.service';
import { IncidentElement } from '../report/incident-element';

export class Attachment implements IncidentElement {
  table: string;
  attributes: AttachmentAttributes;
  searchString: string;

  constructor() {
      this.attributes = new AttachmentAttributes();
      this.table = Config.AttachmentTable;
  }

  setSearchString() {
      this.searchString =
      this.attributes.FILE_NAME
  };
}

export class AttachmentAttributes {
    FILE_NAME: string;
}
