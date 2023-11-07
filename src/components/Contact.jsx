const Contact = () => {
  return (
    <div name="Contact"
    className="bg-gradient-to-b from-rose-200 to-rose-300 w-full h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline">Contact Me</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/4b67981a-cb59-4fa2-900a-b735b7c31ec9" 
          className="flex flex-col w-full md:w-1/2"
          method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent placeholder-black border-2 border-black rounded-md focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent placeholder-black border-2 border-black rounded-md focus:outline-none"
            />

            <textarea
              name="message"
              rows="10"
              className="p-2 bg-transparent placeholder-black border-2 border-black rounded-md focus:outline-none"
              placeholder="Enter your message here ..."
            ></textarea>
            <button className="bg-black text-rose-300 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
