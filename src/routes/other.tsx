import aicertificate from '../assets/images/aicertificate.png'

const Other = () => {
  return (
    <>
      <h1>Miscellaneous thoughts</h1>
      <div className="blurb">Other things worth mentioning or random thoughts of interest go here. Maybe works as a blog of sorts...</div>
      <h2>AI Skills Certificate Thing</h2>
      <img src={aicertificate} alt="Microsoft Learn AI Skills Challenge certificate" width="800"/>
      <p className="description">A while ago a friend told me about Microsoft Learn hosting an event to learn more about machine learning.
      Machine learning as a whole has always resided in that area of being familiar enough, but understanding how it worked always escaped me.
      Now that I've gone through some of their pages, I feel like I have the fundamental concepts like the kinds of models, ways to break down problems
      into an ML problem down now. <br/>
      Though, it doesn't seem like this certificate is as great as a formal certificate, particularly one that requires a proper test. All I really had to do
      was read through a handful of modules. Nevertheless, it felt like a good time investment, and I do feel more confident and less confused when I encounter
      any article or piece related to machine learning.</p>
    </>
  )
}

export default Other