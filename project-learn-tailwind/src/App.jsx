export default function App() {
  const cards = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsfGVufDB8fDB8fHww",
      title: "Enjoy the great cold",
      subtitle: "6,679 properties",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1719843013722-c2f4d69db940?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsfGVufDB8fDB8fHww",
      title: "Enjoy the great cold",
      subtitle: "6,679 properties",
    },
    {
      image:
        "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Enjoy the great cold",
      subtitle: "6,679 properties",
    },
  ];

  return (
    <div className="pt-12">
      <h1 className="text-center text-black text-4xl font-semibold mb-5">
        Live anywhere
      </h1>

      <h2 className="text-center text-gray-500 text-2xl font-light mb-10">
        Keep calm & travel on
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-7 md:gap-y-0 max-w-6xl mx-auto p-4">
        {cards.map((card) => (
          <div key={card.image}>
            <div className="h-96 mb-5">
              <img
                src={card.image}
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-center font-medium text-lg mb-3">
              {card.title}
            </h3>
            <span className="block text-center text-gray-500 text-sm">
              {card.subtitle}
            </span>
          </div>
        ))}
      </div>

      <button className="inline-block py-5 px-10 m-5 text-white bg-blue-600 rounded-lg transition-all lg:hover:bg-blue-700 motion-safe:hover:scale-110">
        Confirm
      </button>

      <div className="border border-red-50 group">
        <button className="inline-block py-5 px-10 m-5 text-white bg-blue-600 rounded-lg transition-colors lg:group-hover:bg-red-500">
          Confirm
        </button>
      </div>

      <input
        type="text"
        className="border border-red-500 py-3 px-3 ml-6 outline-none rounded-xl focus:border-blue-500 transition-colors"
      />
    </div>
  );
}
