import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

export async function setupProdMockServer() {
  const modules: Record<string, any> = import.meta.glob('./**/*.ts', {
    eager: true,
  });
  const defaults = Object.keys(modules).map((key) => modules[key].default);

  const mockList: any[] = [];
  defaults.forEach((item: any) => {
    mockList.push(...item);
  });

  createProdMockServer(mockList);
}
