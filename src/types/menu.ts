export interface IMenuList {
  id: number;
  name: string;
  child?: IMenuList[];
}
