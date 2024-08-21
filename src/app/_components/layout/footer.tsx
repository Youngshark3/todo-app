const footer = () => {
    return (
        <div className="container w-full md:w-10/12 mx-auto">
      
            <div className="section1 flex justify-between items-center">
                <div className="logo">
                    <img src="/assets/logo.jpeg" alt="" />
                </div>              
                <div className="contact">
                        <ol>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Telegram</li>
                        </ol>
                </div>

                <div className="about w-1/2">
                    <section>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Odio vitae ullam necessitatibus, voluptatibus numquam molestias,
                        voluptas similique earum quo velit dolorum ad nulla atque quasi
                        quae dignissimos asperiores, quia porro.
                    </section>
                </div>
                <div className="newsletter">
                    <ol>
                        <li>News</li>
                        <li>Articles</li>
                        <li>Posts</li>
                    </ol>
                </div>
            </div>

            
        </div>
    )
}

export default footer;