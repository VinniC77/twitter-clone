import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Status.css";

const answers = ["Concordo...", "Olha, faz sentido", "Parabéns pelo progresso"];

export const Status = () => {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eius reprehenderit dolorem aut eveniet repudiandae deserunt illum praesentium?" />

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/VinniC77.png"
            alt="Vini Clunc Github Pic Profile"
          />
          <textarea id="tweet" placeholder="Tweet you answer" />
        </label>
        <button type="submit">Answer</button>
      </form>
      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
};
