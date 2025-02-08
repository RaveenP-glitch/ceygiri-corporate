import React from 'react';
import { getPostBySlug } from '../sanity/sanity-utils';

const getSinglePost = async(id) => {
    if (!id) {
        throw new Error("Post ID is required.");
    }

    try {
        const post = await getPostBySlug(id);
        return post;
    } catch (error) {
        console.error("Error fetching post:", error);
        return null;
    }
}

export default getSinglePost;