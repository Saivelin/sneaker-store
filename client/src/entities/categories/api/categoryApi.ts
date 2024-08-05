import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Category, CategoryDto } from '../model/type';
import { productsItem } from '@/entities/products/model/types';

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://megakorm.ru:3005/api'
    }),
    tagTypes: ['CATEGORY'],
    endpoints: builder => ({
        getUser: builder.query<Category, { id: number }>({
            query: ({ id }) => ({ url: `/category/${id}` }),
            providesTags: result=>['CATEGORY']
        }),
        getAllCategories: builder.query<Category[], void>({
            query: () => ({ url: `/category`, method: "GET" }),
            keepUnusedDataFor: 1,
            providesTags: result=>['CATEGORY']
        }),
        getAllProductsInCategory: builder.query<{items: productsItem[], count: number}, {id: number, page: number, count: number}>({
            query: ({id, page, count})=>({url: `/${id}/products?page=${page}&count=${count}`})
        }),
        createUser: builder.mutation<any, Category>({
            query: data => ({ url: `/category`, method: 'POST', body: data }),
            invalidatesTags: ["CATEGORY"],
        }),
        updateUser: builder.mutation<any, Category>({
            query: data => ({ url: `/category/${data.id}`, method: 'PATCH', body: data }),
            invalidatesTags: ["CATEGORY"],
        }),
    })
})

export const {
    useGetUserQuery,
    useGetAllCategoriesQuery,
    useGetAllProductsInCategoryQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
} = categoriesApi
