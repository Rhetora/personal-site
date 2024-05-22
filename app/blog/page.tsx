import { PostData, getSortedPostsData} from "../../lib/posts";

export default async function BlogPage() {
  
  const posts: PostData[] = await getSortedPostsData();

  return (
    <div className="container mx-auto p-4 pt-20 min-h-[calc(100vh-4rem)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((postData, index) => (
          <div
            key={index}
            className="relative card rounded-none bg-base-100 shadow-xl overflow-hidden"
          >
            <a href={`./blog/${postData.fileName}`}>
              <figure>
                <img
                  src={postData.cover_url}
                  alt={postData.title}
                  className="object-cover aspect-square"
                />
              </figure>
              <div className="absolute bottom-0 text-center left-0 w-full bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-4">
                <h2 className="text-lg uppercase font-light text-gray-300">
                  {postData.title}
                </h2>
                <p className="text-sm font-sans italic">{postData.subtitle}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}