export interface User {
  getInfo(id_user: number): Promise<string>;
}
