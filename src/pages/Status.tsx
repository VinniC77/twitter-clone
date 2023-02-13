import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Status.css";

/**
 * Como o React funciona por baixo dos panos:
 * - Através do algoritmo de reconciliação
 *
 * 1. Cria em memória a nova versão do HTML do componente.
 * 2. Compara essa nova versão com a versão anterior do HTML. (isso é chamado de Diff)
 * 3. Aplica as operações JavaScript no componente que foi alterado, atualizando o HTML
 */

/**
 * Fluxo de Renderização no React:
 *
 * 1. Toda vez que alteramos o estado do componente, TODO componente é recalculado.
 * 2. Toda vez que o seu componente PAI renderizar.
 * 3. Toda vez que a propriedade do componente mudar.
 */

export const Status = () => {
  const [answers, setAnswers] = useState([
    "Concordo...",
    "Olha, faz sentido",
    "Parabéns pelo progresso",
  ]);
  const [newAnswer, setNewAnswer] = useState("");

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && event.ctrlKey) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eius reprehenderit dolorem aut eveniet repudiandae deserunt illum praesentium?" />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/VinniC77.png"
            alt="Vini Clunc Github Pic Profile"
          />
          <textarea
            id="tweet"
            placeholder="Tweet you answer"          
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
          />
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
          </button>
      </form>
      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
};
