import React from "react";
import { useNavigate } from "react-router-dom";

export const EventCard = ({
  name,
  details,
  event_heads,
  volunteer_heads,
  image,
  event_poster,
  registration_link,
  event_posters,
  registration_links,
  CondDirect,
  DirectURL,
  rule_book,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col space-y-3 justify-center items-center bg-black bg-opacity-75 opacity-100 rounded-2xl px-2 py-4 xl:w-[300px] cursor-pointer"
      onClick={() => {
        if (CondDirect) {
          window.open(DirectURL, "_blank");
        } else {
          navigate(`/eventdetail/${name}`, {
            state: {
              details: {
                event_name: name,
                event_detail: details,
                event_poster: event_poster,
                event_heads: event_heads,
                volunteer_heads: volunteer_heads,
                registration_link: registration_link,
                event_posters: event_posters,
                registration_links: registration_links,
                rule_book: rule_book,
              },
            },
          });
        }
      }}
    >
      <div className="z-0">
        <img
          src={image}
          className="h-40 md:h-48 w-40 md:w-48 bg-cover transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ... "
          alt=""
        />
      </div>
      <div>
        <div className="text-xl tracking-wide text-center">{name}</div>
      </div>
    </div>
  );
};
