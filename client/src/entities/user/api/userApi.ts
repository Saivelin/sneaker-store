import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AddUserDto, UpdateUserDto, usersItem } from '../model/types';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://megakorm.ru:3005/api'
    }),
    tagTypes: ['USER'],
    endpoints: builder => ({
        getUser: builder.query<usersItem, { id: number }>({
            query: ({ id }) => ({ url: `/users/${id}` }),
            providesTags: result=>['USER']
        }),
        getAllUsers: builder.query<usersItem[], { count: number; page: number }>({
            query: ({ count, page }) => ({ url: `/users/pages?get=${count}&page=${page}` }),
            keepUnusedDataFor: 1,
            providesTags: result=>['USER']
        }),
        createUser: builder.mutation<any, AddUserDto>({
            query: data => ({ url: `/users`, method: 'POST', body: data }),
            invalidatesTags: ["USER"],
        }),
        updateUser: builder.mutation<any, UpdateUserDto>({
            query: data => ({ url: `/users/${data.id}`, method: 'PATCH', body: data }),
            invalidatesTags: ["USER"],
        }),
    })
})

export const {
    useGetUserQuery,
    useGetAllUsersQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
} = usersApi
