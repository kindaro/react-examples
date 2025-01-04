function Sender({ mail }) {
  const [message, setMessage] = React.useState("I love you!");
  return (
    <div class="card m-3">
      <div class="card-body">
        <h5 class="card-header mb-3">sender</h5>
        <label for="true-message" class="form-label">
          true message
        </label>
        <input
          id="true-message"
          class="form-control mb-3"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button class="btn btn-primary" onClick={() => mail(message)}>
          send message
        </button>
      </div>
    </div>
  );
}

function Receiver({ mail }) {
  return (
    <div class="card m-3">
      <div class="card-body">
        <h5 class="card-header mb-3">receiver</h5>
        <p>{mail}</p>
      </div>
    </div>
  );
}

function Faker({ mail }) {
  const [checked, setChecked] = React.useState(false);
  const [fakeMessage, setFakeMessage] = React.useState("I hate you!");
  return (
    <div class="card m-3">
      <div class="card-body">
        <h5 class="card-header mb-3">pig30n</h5>
        <div class="form-control">
          <label for="fake-message" class="form-label">
            fake message
          </label>
          <input
            id="fake-message"
            class="form-control mb-3"
            value={fakeMessage}
            onChange={(event) => setFakeMessage(event.target.value)}
          />
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="intercept"
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
            ></input>
            <label class="form-check-label" for="intercept">
              intercept
            </label>
          </div>
        </div>
        <Sender
          mail={(trueMessage) => mail(checked ? fakeMessage : trueMessage)}
        />
      </div>
    </div>
  );
}

function Spy({ mail }) {
  return (
    <div class="card m-3">
      <div class="card-body">
        <h5 class="card-header mb-3">p0stm4n</h5>
        <p>spying on the message</p>
        <pre>
          <code>
            [{mail}] : [{typeof mail}]
          </code>
        </pre>
        <Receiver mail={mail} />
      </div>
    </div>
  );
}

function PostOffice() {
  const [A, setA] = React.useState(undefined);
  return (
    <div class="card m-3">
      <div class="card-body">
        <h5 class="card-header mb-3">post office</h5>
        <div class="container">
          <div class="row">
            <div class="col">
              <Faker mail={setA} />
            </div>
            <div class="col">
              <Spy mail={A} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <PostOffice />,
  document.getElementById("compromised-post-office"),
);
