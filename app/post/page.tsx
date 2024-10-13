'use client'
import Link from 'next/link';
import useSWR from 'swr';
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const PostPage = () => {
    const { data: posts, error, isLoading } = useSWR<any>(`/api/posts`, fetcher);
    if(error) return <div>failed to load</div>
    if(isLoading) return <div>loading...</div>
    return (
        <div className="w-full max-w-5xl m-auto">
            <h1 className='text-3xl text-blue-500 text-center pt-10 font-bold underline'>List Posts</h1>
            <Link href="/post/create" className='text-xl text-blue-500 text-center p-1 font-bold underline'>Create Post</Link>
           <table className='w-full mt-10 border-separate border-spacing-2 border border-slate-400'>
                <tr>
                <th className='border border-slate-300 p-2'>ID</th>
                    <th className='border border-slate-300 p-2'>Title</th>
                    <th className='border border-slate-300 p-2'>Content</th>
                    <th className='border border-slate-300 p-2'>User</th>
                    <th className='border border-slate-300 p-2'>Pushlish</th>
                    <th className='border border-slate-300 p-2'>Modify</th>
                </tr>
                {posts?.map((post) => 
                    {
                        return (
                            <tr>
                                <td className='border border-slate-300 p-2'>{post.id}</td>
                                <td className='border border-slate-300 p-2'>{post.title}</td>
                                <td className='border border-slate-300 p-2'>{post.content}</td>
                                <td className='border border-slate-300 p-2'>{post.user.name}</td>
                                <td className='border border-slate-300 p-2'>{post.published?"Success":"pending"}</td>
                                <td className='border border-slate-300 p-2 flex flex-row gap-2'>
                                    <Link href={`/post/edit/${post.id}`} className='bg-yellow-500 font-bold p-1 inline-block rounded-md text-white'>Edit</Link>
                                    <Link href={`/post/delete/${post.id}`} className='bg-red-500 font-bold p-1 inline-block rounded-md text-white'>Delete</Link>
                                    <Link href={`/post/read/${post.id}`} className='bg-blue-500 font-bold p-1 inline-block rounded-md text-white'>View</Link>
                                </td>
                            </tr>
                        )
                    }
                )}
           </table>
        </div>
    );

}

export default PostPage;