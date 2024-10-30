const Counter = function () {
  var [state, setState] = React.useState({ step: 0, opacity: 1, counter: 0 });
  const updateState = () => {
    if (state.step == 1) {
      if (state.opacity < 0)
        setState({ ...state, step: 2, counter: state.counter + 1 });
      else
        setTimeout(
          () => setState({ ...state, opacity: state.opacity - 0.125 }),
          100,
        );
    } else if (state.step == 2) {
      if (state.opacity > 1) setState({ ...state, step: 0, opacity: 1 });
      else
        setTimeout(
          () => setState({ ...state, opacity: state.opacity + 0.125 }),
          100,
        );
    }
  };
  if (state.step > 0) updateState();

  return (
    <div class="card">
      <div class="card-body">
        <h1 class="card-title">counter</h1>
        <p class="card-text">
          quantity:{" "}
          <strong style={{ opacity: state.opacity }}>{state.counter}</strong>
        </p>
        <DictionaryTable dictionary={state} />
        <button
          class="btn btn-primary"
          disabled={state.step !== 0}
          onClick={() => setState({ ...state, step: 1 })}
        >
          one more please
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById("counter"));
