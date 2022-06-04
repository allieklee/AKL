export const AboutHero = () => {
  return (
    <div className="bg-egg px-10">
      <div className="mx-4 bg-offwhite grid justify-items-center">
        <div className="bg-egg w-3/4 text-5xl sm-text-3xl text-center font-serif text-dustypink outline outline-double outline-gray-400 rounded shadow py-6 mt-4">
          About me
        </div>
        <div className="text-4xl sm-text-3xl font-serif text-center font-bold text-gray-900 pt-4 pb-2">
          Hi, I&apos;m Allie!
        </div>
        <div className="text-lg sm-text-md font-serif font-bold text-gray-900">
          {" "}
          Welcome to my blog :)
        </div>
        <img src="/profile.jpg" className="w-3/4 p-4" />
      </div>
    </div>
  );
};
