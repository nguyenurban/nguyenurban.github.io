import warlocksgroove from '../assets/images/warlocksgroove.gif'

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <h2>Warlock's Groove</h2>
      <img src={warlocksgroove} alt="Warlock's Groove gameplay" width="800"/>
      <p className="description">A rhythm game I worked with a couple of others as a senior capstone project during my time at UW. The general gist was a typical top-down twin stick shooter, but attacks had to be done in time with the music. <br/>
        We used HaxeFlixel as our game engine at our professor's recommendation. The engine, as well as the language, Haxe, was a
        bit of a learning curve, but I think it went fairly well. Nevertheless, we probably would have prefered a more popular engine in retrospect.<br />
        Frankly, a majority of the class was focused more on aspects of the Agile development cycle. Once we went through a paper prototype and initial development phase,
        the rest of the class was split into weekly sprints, implementing logging functions and pulling data from the class-provided SQL database for sprint analysis and
        reflection presentations while implementing last sprint's goals. Certainly the most favorite part of game development for any developer, but at least the teacher seemed
        pleased with how we presented our gradual growth of user retention over each sprint. <br />
        We had to borrow all of our graphics as well as a lot of the music given the time constraints (I tried putting in a song I made), but I still think there is some merit in working more with this idea for a game. I would like to make a
        complete version of this game. Seeing as I don't have anyone in mind to help with graphics and level design, and I would like to take my time getting down music production, this probably won't be for a long time.
        On top of that Though, it'll also take extra time learning a new game engine, seeing how Unity is (or has been) going...
        

        </p>
      <em className="link">
        Our repo can be found <a href="https://github.com/laksh-g/Warlocks-Groove">here</a> under one of my teammate's Github 
      </em>
    </>
  )
}

export default Projects