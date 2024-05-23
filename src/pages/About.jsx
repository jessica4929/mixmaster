import Wrapper from "../assets/wrappers/AboutPage";

const About = () => {
  return (
    <Wrapper>
      <h3>Welcome to Mix Master: The Ultimate Cocktail Companion </h3>
      <p>
        Are you tired of rummaging through dusty recipe books or scrolling
        through endless cocktail lists on your phone? Look no further! Mix
        Master is here to shake things up (pun intended). We're a team of
        cocktail enthusiasts who believe that mixing drinks should be a breeze,
        not a hassle. That's why we've created a web app that's as easy to use
        as a well-crafted martini (but without the ice, shaker, and potential
        mess).{" "}
      </p>
      <h4>How it works</h4>
      <p>
        Type in the name of an ingredient or cocktail, and our magical algorithm
        will conjure up a list of relevant cocktails that'll make your taste
        buds do the tango. Click on one that catches your eye, and you'll be
        treated to a treasure trove of info, including:{" "}
      </p>
      <ul className="drink-info">
        <li>
          <span className="drink-data">Ingredients:</span> Because who doesn't
          love a good recipe?{" "}
        </li>
        <li>
          <span className="drink-data"> Instructions:</span> Follow these simple
          steps, and you'll be sipping like a pro in no time.{" "}
        </li>
        <li>
          <span className="drink-data">Glassware: </span>Because the right glass
          can make all the difference (and add a touch of flair to your cocktail
          party).{" "}
        </li>
        <li>
          <span className="drink-data">Alcohol content:</span> Because, let's be
          real, some of us like to keep things strictly PG.
        </li>
      </ul>

      <h4>What sets us apart</h4>
      <p>
        Mix Master is more than just a cocktail app – it's a community of
        mixologists, enthusiasts, and fun-lovers who are passionate about the
        art of crafting the perfect drink. We're constantly updating our
        database with new recipes, ingredients, and tips from the industry's
        best bartenders and mixologists. So, what are you waiting for? Dive into
        the world of Mix Master and discover new flavors, drinks, and friends.
        Cheers to the perfect cocktail experience!
      </p>
    </Wrapper>
  );
};
export default About;
