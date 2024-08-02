import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://megakorm.ru:3005/api'
    }),
    tagTypes: ['product'],
    endpoints: builder => ({
        getProduct: builder.query<productsItem, { id: number }>({
            query: ({ id }) => ({ url: `/product/${id}` }),
            providesTags: result => ['product']
        }),
        getAllProducts: builder.query<productsItem[], void>({
            query: () => ({ url: `/product` }),
            providesTags: result => ['product']
        }),
        createProduct: builder.mutation<any, any>({
            query: data => ({ url: `/product`, method: 'POST', body: data }),
            invalidatesTags: ['product']
        }),
        updateProduct: builder.mutation<any, any>({
            query: data => ({ url: `/product/${data.id}`, method: 'PATCH', body: data }),
            invalidatesTags: ['product']
        })
    })
})

export const { useGetAllProductsQuery, useGetProductQuery, useCreateProductMutation, useUpdateProductMutation } =
    productsApi
