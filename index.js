const ExampleReactComponent = function () {
  var [state, setState] = React.useState({ step: 0, opacity: 1, counter: 0 });
  const updateState = () => {
    if (state.step == 1) {
      if (state.opacity < 0)
        setState({ ...state, step: 2, counter: state.counter + 1 });
      else
        setTimeout(
          () => setState({ ...state, opacity: state.opacity - 0.1 }),
          100,
        );
    } else if (state.step == 2) {
      if (state.opacity > 1) setState({ ...state, step: 0, opacity: 1 });
      else
        setTimeout(
          () => setState({ ...state, opacity: state.opacity + 0.1 }),
          100,
        );
    }
  };
  if (state.step > 0) updateState();

  return (
    <div>
      <p>button updating thing</p>
      <button onClick={() => setState({ ...state, step: 1 })}>
        update state
      </button>
      <p style={{ opacity: state.opacity }}>{state.counter}</p>
      <p>{JSON.stringify(state)}</p>
    </div>
  );
};

ReactDOM.render(
  React.createElement(ExampleReactComponent),
  document.getElementById("react"),
);
ReactDOM.render(<ExampleReactComponent />, document.getElementById("react-2"));
