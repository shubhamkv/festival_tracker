export const Background = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative flex items-center justify-center text-black"
      style={{ backgroundImage: "url('/ram_mandir.jpg')" }}
      folder
    >
      <div className="absolute inset-0 bg-orange  bg-opacity-50"></div>

      <div className="relative z-10 text-center -500 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">जय श्री राम 🚩</h1>
        <p className="text-lg md:text-2xl italic max-w-2xl font-bold mx-auto">
          "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।"
          <br />
          <span className="text-sm md:text-lg">
            ("You have a right to perform your duty, but never to the fruits of
            your work.")
          </span>
        </p>
      </div>
    </div>
  );
};
