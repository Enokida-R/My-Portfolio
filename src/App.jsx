import './App.css'

function App() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
try{
    const response = await fetch('https://mail-send-23un.onrender.com/api/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if(response.ok) {
        alert('メールを送信しました');
    } else {
        alert('メールの送信に失敗しましたok');
    }
} catch (error){
    console.error('送信エラー',error);
    alert('メールの送信に失敗しましたno');
}

};

  return (
    <>
    <header className="text-gray-700 border-b border-gray-200">
      <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
        <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
          <span className='text-xl ml-3'>EnoCode</span>
        </a>
        <nav className='md:ml-auto text-base'>
          <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
          <a href="#about" className='mr-5 hover:text-blue-400 duration-300'>About</a>
          <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
          <a href="#blog" className='hover:text-blue-400 duration-300'>Blog</a>
        </nav>
      </div>
    </header>

    <section className='text-gray-700' id='home'>
      <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
        <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
          <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>
            Hi!
            <br />
            I'm EnoCode
            <br />
            Web Developer
            </h1>
          <p className='mb-8 leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos omnis recusandae quisquam deserunt quia eius architecto impedit laboriosam repellendus?
          </p>
          <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact</button>
        </div>
        <div className='md:w-1/2 lg:max-w-lg w-5/6'>
          <img src="./img/icon.jpeg" alt="" />
        </div>
      </div>
    </section>


    <section className='text-gray-700 border-t border-gray-200'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
          <p className='pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore incidunt excepturi animi id vero aliquid sed perspiciatis doloribus ullam.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, ea maxime laborum id deleniti aliquam quas inventore earum commodi ad rem cupiditate nisi nostrum magnam laboriosam tempora nihil mollitia dolorum, animi repellendus autem perferendis hic praesentium adipisci! Veritatis minus necessitatibus illo, repellat corrupti dicta, perspiciatis recusandae atque amet quaerat, dolorum voluptates? Laudantium fugit consequuntur dolorem facilis eaque neque adipisci dolorum, debitis voluptatum, quisquam repellendus culpa, molestias aperiam voluptatem quam omnis ducimus. Eaque odio expedita sapiente maiores quasi explicabo minus nostrum, nam fugit optio dolores dolore earum. Reiciendis voluptate asperiores sed maxime numquam, totam quidem maiores sit autem nesciunt accusamus temporibus!</p>
        </div>

        {/*カードのdivタグ */}
        <div className='flex flex-wrap'>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-200 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-activity-heartbeat" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5" />
                  </svg>
                </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>
                    Web Developre
                  </h2>
                
              </div>
              <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti consequuntur blanditiis veritatis placeat dolor quo alias reiciendis cumque minima hic.</p>
                <a href="#" className='flex mt-3 text-green-500 items-center'>
                  more
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M15 16l4 -4" />
                  <path d="M15 8l4 4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-200 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-activity-heartbeat" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5" />
                  </svg>
                </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>
                    Web Developre
                  </h2>
                
              </div>
              <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti consequuntur blanditiis veritatis placeat dolor quo alias reiciendis cumque minima hic.</p>
                <a href="#" className='flex mt-3 text-green-500 items-center'>
                  more
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M15 16l4 -4" />
                  <path d="M15 8l4 4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-200 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-activity-heartbeat" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5" />
                  </svg>
                </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>
                    Web Developre
                  </h2>
                
              </div>
              <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti consequuntur blanditiis veritatis placeat dolor quo alias reiciendis cumque minima hic.</p>
                <a href="#" className='flex mt-3 text-green-500 items-center'>
                  more
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M15 16l4 -4" />
                  <path d="M15 8l4 4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='text-gray-700 border-t border-gray-200'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap justify-center'>
        {/* leftside  */}
        <div className='lg:w-1/2 mb-10 lg:mb-0 '>
          <img src="./img/pc.jpg" alt="" className='rounded'/>
        </div>

        {/* rightside */}
        <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
          <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10'>My Skills</h1>
          <div className='w-full'>
            <h2>javascript</h2>
            <div className='shaow bg-yellow-100 mt-2 w-full'>
              <div className='bg-yellow-600 text-xs leading-none text-center text-black' style={{width: "80%"}}>80%</div>
            </div>

            <h2>nodejs</h2>
            <div className='shaow bg-yellow-100 mt-2 w-full'>
              <div className='bg-yellow-600 text-xs leading-none text-center text-black' style={{width: "40%"}}>40%</div>
            </div>

            <h2>javascript</h2>
            <div className='shaow bg-yellow-100 mt-2 w-full'>
              <div className='bg-yellow-600 text-xs leading-none text-center text-black' style={{width: "80%"}}>80%</div>
            </div>

            <h2>javascript</h2>
            <div className='shaow bg-yellow-100 mt-2 w-full'>
              <div className='bg-yellow-600 text-xs leading-none text-center text-black' style={{width: "80%"}}>80%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    <section className="text-gray-700">
      <div className="container px-5 py-24 mx-auto">
        <form id="contact-form" className="flex flex-col w-full max-w-md mx-auto" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Your Email" required className="px-3 py-2 mb-4 border rounded"/>
          <textarea name="message" placeholder="Your Message" required className="px-3 py-2 mb-4 border rounded"></textarea>
          <button type="submit" className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">Send</button>
        </form>
      </div>
    </section>
    </>
    
  );

}

export default App 
