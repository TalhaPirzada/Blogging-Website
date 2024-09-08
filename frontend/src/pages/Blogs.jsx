import React from 'react';

const Blogs = () => {
  console.log("Blog Component added");

  return (
    <div className="flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-3xl">
        {/* Blog Title */}
        <div className="font-serif text-3xl md:text-5xl text-gray-600 mb-4">
          This is going to be the heading title of the blog.
        </div>

        {/* Tagline */}
        <div className="text-xl md:text-2xl text-gray-700 py-2">
          This is the tag line for blog.
        </div>

        {/* Author and Details */}
        <div className="flex items-center py-4">
          <img
            src="#"
            alt="Author"
            className="rounded-full max-h-12 w-auto"
          />
          <div className="flex flex-col ml-4">
            <div className="flex items-center gap-2 text-sm md:text-base">
              <a href="#" className="font-semibold text-gray-800">
                Username
              </a>
              <span>·</span>
              <a href="#" className="text-[#771200] hover:text-[#ac482f]">
                Follow
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
              <div>Published in xyz</div>
              <span>·</span>
              <div>28 min read.</div>
              <span>·</span>
              <div>Feb 14, 2018</div>
            </div>
          </div>
        </div>

        {/* Blog Interaction */}
        <div className="border-t border-gray-300 flex justify-between py-2 px-4 md:px-6">
          <div className="flex gap-4 text-sm md:text-base">
            <div>84K</div>
            <div>233</div>
          </div>
          <div className="flex gap-4 text-sm md:text-base">
            <div>II</div>
            <div>O</div>
            <div>[ ]</div>
            <div>---</div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed">
          <p className="mb-4">
            Let me make one thing clear first. If you are a beginner programmer,
            this article is not meant to make you feel bad about the mistakes
            that you might be making but rather to make you aware of them, teach
            you to spot signs of them, and remind you to avoid them.
          </p>
          <p className="mb-4">
            I have made these mistakes in the past and learned from
            each and every one of them. I am happy to have formed coding habits
            to help me avoid them. You should do too.
          </p>
          <p className="mb-4">
            These mistakes are not presented here in any particular order.
          </p>
          <p className="mb-4">
            Writing Code Without Planning High-quality written content, in
            general, cannot be created easily. It requires careful thinking and
            research. High-quality programs are no exception.
          </p>
          <p className="mb-4">
            Writing quality programs is a process with a flow: Think. Research.
            Plan. Write. Validate. Modify. Unfortunately, there is no good
            acronym for this. You need to create a habit to always go through
            the right amount of these activities.
          </p>
          <p>
            One of the biggest mistakes I have made as a beginner programmer was
            to start writing code right away without much thinking and
            researching.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
