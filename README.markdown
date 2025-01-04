# React examples

## counters

* [A simple counter.](counter.html) This is a basic React example. There is a functional component with the `useState` hook. Notice how the core logic — the `counter` state field — is mixed with the fluff — the fade effects.
* [A counter with separate core logic.](separate_logic.html) Here, the core logic is separate — it is defined as an object that has one command and one query. The fluff widget does not need to know how the core logic works.
* [Two counters with shared core logic.](shared_logic.html) Now we can control the same instance of the core logic from two different instances of our fluff widget. However, we have a synchronization issue: whenever one widget asks the core logic to bump the counter, the other widget has no idea it needs to redraw its readout! When you interact with one widget a few times, and then with the other widget, the latter will suddenly jerk the counter up. What we should like better is for the fade effect to happen on both widgets in synchrony.

## post office

* [Post office.](post_office.html) Here, one React component called _«sender»_ wants to send a message to another React component called _«receiver»_, and their shared ancestor called _«post office»_ is glad to help them.
* [Big post office.](big_post_office.html) Now, the village has grown into a city, and the post office had to train a pigeon and hire a postman to deliver mail.
* [Compromised post office.](compromised_post_office.html) But what if not everyone is who they say they are?
