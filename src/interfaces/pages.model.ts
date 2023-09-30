/**
 * @Rulebook
 * Interface name should have prefix - `I` & suffix - `Model`.
 * example: IPagesModel
 */
export interface IPagesModel {
  id: string;
  name: string;
  order: number;
}

export interface IActionsModel {
  code: string;
  id: string;
  name: string;
  order: number;
  pageId: string;
}
