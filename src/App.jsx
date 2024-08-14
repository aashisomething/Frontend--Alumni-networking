import React from 'react';

function Header() {
  return (
    <div className="bg-white shadow-lg p-4 flex justify-between items-center">
      <img src="logo" alt="Logo" className="w-24 h-24" />
      <ul className="flex space-x-6 text-lg font-semibold">
        <li><a href="#" className="text-gray-800 hover:text-blue-600 transition">Home</a></li>
        <li><a href="#" className="text-gray-800 hover:text-blue-600 transition">Community</a></li>
        <li><a href="#" className="text-gray-800 hover:text-blue-600 transition">Events</a></li>
        <li><a href="#" className="text-gray-800 hover:text-blue-600 transition">Study</a></li>
        <li><a href="#" className="text-gray-800 hover:text-blue-600 transition">More</a></li>
      </ul>
      <div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mr-3">Sign in</button>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">Sign up</button>
      </div>
    </div>
  );
}

function AlumniDetails() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full md:w-1/3">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Alumni Details</h2>
      <input
        type="search"
        placeholder="Search"
        className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function Post({ post }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-md">
      <h3 className="text-xl font-semibold text-gray-900">{post.username}</h3>
      <p className="text-gray-700 my-2">{post.text}</p>
      <span className="text-gray-500 text-sm">{post.time}</span>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-700 transition block">Connect</button>
    </div>
  );
}

function NewsItem({ news }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-md">
      <h3 className="text-xl font-semibold text-gray-900">{news.title}</h3>
      <p className="text-gray-700 my-2">{news.text}</p>
      <span className="text-gray-500 text-sm">{news.time}</span>
    </div>
  );
}

function App() {
  const posts = [
    {
      username: 'Walter White',
      text: 'Hello Everyone, Soon I’m going to drop my merch. Make sure you watch it! It is a clean one, not too shabby. Hope you like it! One more thing; I’m going to do some new shows in Mumbai, Pune, Bangalore. See you soon!',
      time: '10:00 AM · Jan 01 2022'
    },
    {
      username: 'Walter White',
      text: 'Hello Everyone, Soon I’m going to release my new song. Make sure you watch it! It is a classical song. Hope you like it! One more thing; I’m going to do some new shows in Mumbai. See you soon!',
      time: '12:00 AM · Jan 02 2022'
    },
    {
      username: 'Bran Mike',
      text: 'Hello Everyone, Soon I’m going to drop my merch. Make sure you watch it! It is a clean one, not too shabby. Hope you like it! One more thing; I’m going to do some new shows in Mumbai, Pune, Bangalore. See you soon!',
      time: ''
    }
  ];

  const news = [
    {
      title: 'Avoid a Disappointing Vacation',
      text: 'Make sure to plan your trips ahead to avoid any mishaps...',
      time: 'Eugene Franklin · 10:30 PM'
    },
    {
      title: 'Gotham City New Look Released by Batman',
      text: 'The latest design is out, and fans are excited!',
      time: 'Falana Reporter · 9:30 AM'
    },
    {
      title: 'Planting Tree Goes Wrong; Tree Collapses',
      text: 'A mishap during a tree planting event led to unexpected results...',
      time: 'Magnet Media · 10:30 PM'
    },
    {
      title: 'Alex Benjamin University of Music in 2006',
      text: 'A detailed overview of the events at the university...',
      time: ''
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Header />
      <div className="flex flex-col md:flex-row mt-8 space-y-6 md:space-y-0 md:space-x-6">
        <AlumniDetails />
        <div className="flex-1 md:w-1/3">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Posts</h2>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
        <div className="flex-1 md:w-1/3">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Recent News</h2>
          {news.map((news, index) => (
            <NewsItem key={index} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
