import Image from "next/image";
import React from "react";
import BookIcon from "../vectors/BookIcon";
import BookMarkIcon from "../vectors/BookmarkIcon";
import CommentIcon from "../vectors/CommentIcon";
import PlusIcon from "../vectors/PlusIcon";
import ShareIcon from "../vectors/ShareIcon";
import TwitterIcon from "../vectors/TwitterIcon";

const Content = () => {
  const content = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.",

    "from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
    "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
  ];
  const tags = ["nature", "human", "terrestial", "inhabitat"];
  const cards = [
    {
      title:
        "Observing Nature At Sunset: Wonders Of God Beyond Normal Reasoning",
      author: "Seun",
      logo: "/img/profile-logo.webp",
      contentCover: "/img/bg-1.webp",
      summary:
        "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title:
        "Observing Nature At Sunset: Wonders Of God Beyond Normal Reasoning",
      author: "Seun",
      logo: "/img/profile-logo.webp",
      contentCover: "/img/bg-1.webp",
      summary:
        "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title:
        "Observing Nature At Sunset: Wonders Of God Beyond Normal Reasoning",
      author: "Seun",
      logo: "/img/profile-logo.webp",
      contentCover: "/img/bg-1.webp",
      summary:
        "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  const likes = [
    { emoji: "👍", count: "6" },
    { emoji: "❤️", count: "6" },
    { emoji: "👏", count: "6" },
    { emoji: "🍺", count: "6" },
    { emoji: "🏆", count: "6" },
    { emoji: "😍", count: "6" },
    { emoji: "🐴", count: "5" },
    { emoji: "💰", count: "5" },
    { emoji: "🌂", count: "3" },
    { emoji: "✈️", count: "3" },
  ];
  return (
    <div className="flex-1">
      <div className="space-y-8 lg:max-w-[75%] 2xl:max-w-[60%] mx-auto w-full">
        <span className="relative w-full h-[30vh] lg:h-[75vh] 2xl:h-[65vh] block">
          <Image src="/img/bg-1.webp" alt="content-img" fill />
        </span>
        <h1 className="text-3xl lg:text-5xl font-bold lg:max-w-[70%] text-center mx-auto lg:leading-[3.5rem]">
          Observing Nature At Sunset: Wonders Of God Beyond Normal Reasoning
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-x-3 gap-y-4 lg:gap-y-0">
          <div className="flex items-center gap-x-3">
            <span className="relative h-12 w-12">
              <Image
                src="/img/profile-logo.webp"
                alt="profile-logo"
                fill
                className="rounded-full"
              />
            </span>
            <span className="text-lg font-medium">Seun</span>
          </div>
          <div className="flex items-center gap-x-3">
            <span className="h-1 w-1 bg-[#8b8b8b] rounded-full hidden lg:block"></span>
            <span className="text-lg text-[#374151]">December 06, 2022</span>
            <span className="h-1 w-1 bg-[#8b8b8b] rounded-full"></span>
            <div className="flex items-center gap-x-2">
              <BookIcon />
              <span className="text-lg text-[#374151]">14 min read</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 lg:max-w-[75%] 2xl:max-w-[55%] mx-auto w-full mt-8 lg:grid lg:grid-cols-[0.8fr_0.2fr]">
        <article className="flex flex-col gap-y-10 flex-1 scrollbar-hide py-8 overflow-auto lg:h-screen">
          <p className="text-xl text-justify">{content[0]}</p>
          <p className="text-xl text-justify">{content[1]}</p>
          <h2 className="text-4xl font-bold">Where does it come from?</h2>
          <p className="text-xl text-justify">{content[2]}</p>
          <p className="text-xl text-justify">{content[3]}</p>
          <span className="relative w-full h-[30vh] lg:h-[75vh] block">
            <Image src="/img/bg-2.webp" alt="content-img" fill />
          </span>
          <p className="text-xl text-justify">{content[2]}</p>
          <h2 className="text-4xl font-bold">Why do we use it?</h2>
          <p className="text-xl text-justify">{content[1]}</p>
          <p className="text-xl text-justify">{content[4]}</p>
          <p className="text-xl text-justify">{content[2]}</p>
          <p className="text-xl text-justify">{content[3]}</p>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">References</h2>
            <div className="flex items-center gap-x-2">
              <span className="h-1 w-1 bg-[#8b8b8b] rounded-full"></span>
              <p className="text-xl font-semibold underline text-[#111827]">
                Researching Natural Inhabitats On Earth and Its Interaction With
                Human
              </p>
            </div>
            <div className="flex gap-4 lg:gap-x-2 lg:gap-y-0 flex-wrap">
              {tags.map((tag, i) => (
                <span
                  key={tag + i}
                  className="font-medium text-[#374151] capitalize rounded-md border px-3 py-1 hover:bg-[#dbdbdb] bg-[#f2f2f2] cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-x-4 border-y py-8">
            <span className="relative h-[4.5rem] w-[5rem] rounded-full">
              <Image
                src="/img/profile-logo.webp"
                alt="profile-logo"
                fill
                className="rounded-full object-cover"
              />
            </span>
            <div className="flex flex-col w-[80%] lg:w-full gap-y-4 text-justify">
              <div className="flex flex-col lg:flex-row justify-between lg:items-center w-full">
                <div className="flex flex-col">
                  <span className="uppercase text-sm text-[#6b7280] font-semibold">
                    Written by
                  </span>
                  <span className="text-2xl font-semibold">Seun</span>
                </div>
                <div className="w-max mt-2 lg:mt-0 flex p-2 border rounded-md gap-x-1 hover:shadow-lg hover:cursor-pointer">
                  <span className="">
                    <PlusIcon />
                  </span>
                  <span className="font-semibold block mr-1">Follow</span>
                </div>
              </div>
              <p className="text-[#4b5563]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </article>
        <div className="flex flex-col-reverse lg:flex-col px-4 gap-y-4">
          <div className="flex lg:grid lg:grid-cols-2 flex-wrap justify-evenly gap-y-4">
            {likes.map((like, i) => (
              <div
                key={like.emoji + like.count}
                className="flex items-center hover:bg-[#e8e8e8] cursor-pointer px-4 py-1 gap-x-2 rounded-full"
              >
                <span className="font-medium text-2xl">{like.emoji}</span>
                <span className="font-semibold">{like.count}</span>
              </div>
            ))}
          </div>
          <div className="flex lg:flex-col justify-center lg:justify-start items-center gap-y-2">
            <span className="hover:bg-[#e8e8e8] cursor-pointer p-5 h-8 w-8 grid place-content-center rounded-full">
              <CommentIcon />
            </span>
            <span className="hover:bg-[#e8e8e8] cursor-pointer p-5 h-8 w-8 grid place-content-center rounded-full">
              <BookMarkIcon />
            </span>
            <span className="hover:bg-[#e8e8e8] cursor-pointer p-5 h-8 w-8 grid place-content-center rounded-full">
              <TwitterIcon color="#374151" />
            </span>
            <span className="hover:bg-[#e8e8e8] cursor-pointer p-5 h-8 w-8 grid place-content-center rounded-full">
              <ShareIcon />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 2xl:mx-auto 2xl:max-w-[80%] 2xl:px-8 w-full px-4 py-8">
        <h4 className="font-semibold text-[#6b7280] uppercase text-center">
          More articles
        </h4>
        <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 gap-x-8 mb-8">
          {cards.map((card, i) => (
            <div
              className="flex flex-col rounded-md border px-4 py-3 gap-y-2"
              key={card.title + i}
            >
              <div className="flex gap-x-2 items-center">
                <span className="relative h-8 w-8 rounded-full">
                  <Image
                    src="/img/profile-logo.webp"
                    alt="user-img"
                    fill
                    className="rounded-full object-cover"
                  />
                </span>
                <span className="font-bold">{card.author}</span>
              </div>
              <span className="relative h-[15rem] w-full rounded-">
                <Image
                  src={card.contentCover}
                  alt="article-img"
                  fill
                  className="rounded-sm object-cover"
                />
              </span>
              <h2 className="font-bold text-2xl">{card.title}</h2>
              <p className="text-[#374151]">{card.summary}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row items-center border lg:justify-between mx-auto max-w-2xl w-full p-4 rounded-md my-8">
          <span className="text-xl font-bold">Comments</span>
          <span className="font-medium text-[#2962ff] flex border border-[#2962ff] py-2 px-1 pr-2 rounded-md">
            <PlusIcon color="#2962ff" />
            Write a comment
          </span>
        </div>
      </div>
    </div>
  );
};

export default Content;
