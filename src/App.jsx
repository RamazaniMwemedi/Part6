import { useSelector, useDispatch } from "react-redux";
import { createAnecdote, toggleVote } from "./reducers/anecdoteReducer";

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(toggleVote(id));
  };

  const addAnecdote = (event) => {
    event.preventDefault();
    const anecdote = event.target.anacdote.value;
    event.target.anacdote.value = "";
    dispatch(createAnecdote(anecdote));
  };
  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);

  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anacdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default App;
