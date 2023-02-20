import { format } from "date-fns";

export default function Image(props) {
  return (
    <>
      <article className="shadow-mg bg-white rounded-3xl p-5">
        <img
          src={props.urls.full}
          alt={props.alt_description}
          loading="lazy"
          className="h-52 w-full object-cover rounded-3xl md:h-80"
        ></img>

        <article className="flex flex-wrap items-center justify-between">
          <div className="pt-5 flex items-center justify-start">
            <a href={props.user.links.html} target="_blank">
              <img
                src={props.user.profile_image.large}
                alt={props.user.name}
                loading="lazy"
                className="w-20 rounded-full shadow"
              />
            </a>

            <ul className="ml-3">
              <li className="font-bold text-lg text-slate-800 mb-1">
                {props.user.name}
              </li>
              <li className="text-slate-600 text-sm">
                {format(new Date(props.created_at), "dd MMMM yyyy")}
              </li>
            </ul>
          </div>

          <div>
            <ul className="text-scale-600 text-sm text-right mt-3">
              <li>
                <a
                  href={`https://instagram.com/${props.user.instagram_username}`}
                  className="underline"
                >
                  Instagram
                </a>
              </li>
              <li>{props.likes} ❤️</li>
            </ul>
          </div>
        </article>
      </article>
    </>
  );
}
