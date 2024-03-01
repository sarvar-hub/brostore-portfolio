export interface IMenuList {
  id: number;
  name: string;
  child?: IMenuList[];
}

export interface ISliderMenu {
  id: number;
  name: string;
  type: string;
  img: string;
}
