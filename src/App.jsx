import './App.css'

function App() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    alert('完了通知が届くまでに時間が掛かる場合もあります。完了通知が表示されるまでそのままお待ちください。')
    
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
            デジタルの力で人々の生活を豊かにすることを目指しています。シンプルだけど印象深い、そんなウェブサイトを作るために日々努力しています。私のポートフォリオをご覧いただき、あなたのプロジェクトに私をどうぞお使いください。
          </p>
          <a href="#contact">
          <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact</button>
          </a>
          
        </div>
        <div className='md:w-1/2 lg:max-w-lg w-5/6'>
          <img src="./img/icon.jpeg" alt="" />
        </div>
      </div>
    </section>


    <section className='text-gray-700 border-t border-gray-200' id="about">
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
          <p className='pb-10'>プログラミングの世界に飛び込んでから、私は日々、ウェブ技術の新しい側面を発見し、理解を深めることに情熱を傾けています。</p>
          <p>私のウェブ開発への旅は、HTML、CSS、JavaScriptから始まり、現在はReactやNode.jsといったフロントエンドおよびバックエンド技術の習得に焦点を当てています。これらのスキルを通じて、クリーンで効率的なコードを書き、ユーザーフレンドリーなインターフェースを作成する能力を養っています。学習プロセスの一環として、いくつかの個人プロジェクトに取り組んでおり、これらを通じて実践的な経験を積み重ねています。これらのプロジェクトは、私がこれまでに学んだことを形にし、新しいアイデアを試す場となっています。私は、ウェブ開発がただ技術的なスキル以上のものであると深く信じています。それは、創造性と解決策を結びつけ、人々の生活を向上させる機会です。私の目標は、この分野での知識をさらに深め、将来的にはウェブ技術を活用して社会に貢献するプロジェクトに携わることです。もしあなたが私の学習の旅、またはこれまでに手掛けたプロジェクトに興味を持っていただけたら、ぜひさらに詳しくご覧になってください。ウェブ開発の世界での成長と進化の過程で、私がどのように貢献できるかを探ることを楽しみにしています。</p>
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
                  NASA APIを使用したカレンダー
                  </h2>
                
              </div>
              <div>
                <p>任意の日付を選択して、その日の地球のEPIC画像を取得します。美しい地球の画像を通じて、宇宙からの視点を提供します。</p>
                <a href="https://node-earth.onrender.com/" className='flex mt-3 text-green-500 items-center'>
                  プロジェクトを見る
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
                  火星探索器の画像取得
                  </h2>
                
              </div>
              <div>
                <p>火星探索器からの最新の画像を取得し、火星の探索の現状を伝えます。興味深い火星の景色を地球に届けます。</p>
                <a href="https://mars-cam.onrender.com/" className='flex mt-3 text-green-500 items-center'>
                  プロジェクトを見る
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
                  OpenWeather APIを使用した世界の現在の天気
                  </h2>
                
              </div>
              <div>
                <p>世界中の任意の場所の現在の天気情報を取得します。リアルタイムで更新される天気データを通じて、世界各地の気象条件を確認できます。</p>
                <a href="https://node-weather-app2.onrender.com/" className='flex mt-3 text-green-500 items-center'>
                  プロジェクトを見る
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
                  Dog APIとCat APIを使用した画像取得と統計表示
                  </h2>
                
              </div>
              <div>
                <p>犬と猫の画像をランダムに表示し、どちらの画像がより多く表示されたかを円グラフで示します。ペットの好みの統計を楽しみながら確認できます。</p>
                <a href="https://cat-or-dog-y7tr.onrender.com/" className='flex mt-3 text-green-500 items-center'>
                  プロジェクトを見る
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
                  データベースを組み合わせた掲示板
                  </h2>
                
              </div>
              <div>
                <p>ユーザーが投稿できる掲示板アプリケーションです。リアルタイムでのコミュニケーションと情報共有の場を提供します。</p>
                <a href="https://free-bord.onrender.com/" className='flex mt-3 text-green-500 items-center'>
                  プロジェクトを見る
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
                  LINE BOT
                  </h2>
                
              </div>
              <div>
                <p>LINEプラットフォーム上で動作するボットを開発しました。歌詞検索ができるなど、便利な機能を提供します。</p>
                <a href="https://lin.ee/5Dplj4d" className='flex mt-3 text-green-500 items-center'>
                プロジェクトを見る
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

    <section className='text-gray-700 border-t border-gray-200' id="skills">
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
            <div className='shaow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none text-center text-black' style={{width: "40%"}}>40%</div>
            </div>

            <h2>react</h2>
            <div className='shaow bg-blue-100 mt-2 w-full'>
              <div className='bg-blue-600 text-xs leading-none text-center text-black' style={{width: "20%"}}>20%</div>
            </div>

          </div>
        </div>
      </div>
    </section>
    

    <section className="text-gray-700" id="contact">
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
