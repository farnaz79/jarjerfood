"use client";
import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import ApiClient from "../../sevieces/apiClient";

const useSendPost = () => {
    const queryClient = useQueryClient();

    const sendPost = async () => {
            const response = await ApiClient.post('/posts', {
                title: 'foo',
                body: 'bar',
                userId: 1,
            });
            return response.data;
    };

    return useMutation({
        mutationKey: ['sendPost'],
        mutationFn: sendPost,
        onSuccess: (data) => {
            toast.success("Your data sent successfully");

            // queryClient.invalidateQueries('posts');
        },
        onError: (error) => {
            console.log('useSendPost error:', error);
            toast.error(error.response?.data || "Your data didn't send");
        },
    });
};

export default useSendPost;