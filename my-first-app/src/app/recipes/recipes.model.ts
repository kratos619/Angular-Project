export class Recipes {
  public name: string;
  public description: string;
  public image_path: string;

  constructor(name:string,desc:string,img_path:string){
    this.name = name;
    this.description = desc;
    this.image_path = img_path;
  }
}
