function Sender({ mail }) {
  const [message, setMessage] = React.useState("");
  return (
    <div class="card m-3">
      <div class="card-body">
        <h5 class="card-header mb-3">sender</h5>
        <input
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

function Pigeon({ mail }) {
  return (
    <div class="card m-3">
      <div class="card-body">
        <h5 class="card-header mb-3">pigeon</h5>
        <Sender mail={mail} />
      </div>
    </div>
  );
}

function Postman({ mail }) {
  return (
    <div class="card m-3">
      <div class="card-body">
        <h5 class="card-header mb-3">postman</h5>
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
              <Pigeon mail={setA} />
            </div>
            <div class="col">
              <Postman mail={A} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<PostOffice />, document.getElementById("big-post-office"));
