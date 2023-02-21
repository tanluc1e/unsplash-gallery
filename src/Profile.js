import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Profile() {
  const [person, setPerson] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    const fetchPerson = async () => {
      const response = await fetch(
        `https://api.unsplash.com/users/${username}?client_id=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setPerson(data);
      console.log(data);
    };

    fetchPerson();
  }, [username]);

  return (
    <>
      {person.id == null ? (
        <div>Loading...</div>
      ) : (
        <section className="showcase">
          ;
          <div className="p-16">
            <div className="p-8 bg-white shadow mt-24">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                  <div>
                    <p className="font-bold text-gray-700 text-xl">
                      {person.total_photos}
                    </p>
                    <p className="text-gray-400">Photos</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-700 text-xl">
                      {person.total_likes}
                    </p>
                    <p className="text-gray-400">Likes</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-700 text-xl">
                      {person.followers_count}
                    </p>
                    <p className="text-gray-400">Followers</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                    {person.photos[0].urls.raw && (
                      <a href={person.links.html} target="_blank">
                        <img
                          src={
                            person.profile_image.large +
                            "&auto=format&fit=crop&w=150&h=150&q=100&crop=faces&bg=fff"
                          }
                          alt={person.name}
                          className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 flex items-center justify-center text-indigo-500"
                        />
                      </a>
                    )}
                  </div>
                </div>
                <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                  <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                    Connect
                  </button>
                  <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                    Message
                  </button>
                </div>
              </div>
              <div className="mt-20 text-center border-b pb-12">
                <h1 className="text-4xl font-medium text-gray-700">
                  {person.name}
                </h1>
                <p className="font-light text-gray-600 mt-3">
                  {" "}
                  {person.location}
                </p>
              </div>
              <div className="mt-12 flex flex-col justify-center">
                <p className="text-gray-600 text-center font-light lg:px-16">
                  {person.bio}
                </p>
                <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
                  Show more
                </button>
              </div>
            </div>
          </div>
          <Link
            to="/"
            className="bg-black py-2 px-6 rounded shadow text-white tracking-wide inline-block mt-5"
          >
            &larr; Back
          </Link>
        </section>
      )}
    </>
  );
}
