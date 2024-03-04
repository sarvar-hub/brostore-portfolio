export interface IImage {
  id: number;
  url: string;
}

export interface IColor {
  id: number;
  color: string;
}

export interface ILaptop {
  id: number;
  name: string;
  price: number;
  colors: IColor[];
  images: IImage[];
}
