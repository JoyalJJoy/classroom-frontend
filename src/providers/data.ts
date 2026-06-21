import { DataProvider, GetListParams, GetListResponse, BaseRecord } from "@refinedev/core";
import { mockSubjects } from "./mockSubjects";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({ resource }: GetListParams ): Promise<GetListResponse<TData>> => {
    if(resource !== 'subject') return { data: [] as TData[], total: 0 };

    return {
      data: mockSubjects as unknown as TData[],
      total: mockSubjects.length,
    }
  },
  getOne: async () => { throw new Error('This function is not present in mock data provider')},
  create: async () => { throw new Error('This function is not present in mock data provider')},
  update: async () => { throw new Error('This function is not present in mock data provider')},
  deleteOne: async () => { throw new Error('This function is not present in mock data provider')},


  getApiUrl: () => '',


}