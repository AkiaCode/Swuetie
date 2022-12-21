import { component$, useStore } from "@builder.io/qwik";

export default component$(
  (props: { id: string; title: string; body: string, answer: string }) => {

    const f = useStore({
      answer: "",
      isAnswer: false
    });

    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            "margin-bottom": "1em",
            "font-family": "MaplestoryOTFBold",
          }}
        >
          {props.id}
        </h1>
        <div class="card">
          <div
            class="card-header"
            style={{ "font-family": "MaplestoryOTFBold" }}
          >
            {props.title}
          </div>
          <div class="card-body">
            <p class="card-text" dangerouslySetInnerHTML={ {__html: props.body.replace("\n", "<br/>")}}></p?
            <div style={{ textAlign: "center" }}>
              { f.isAnswer ? <>정답!!</> : <><input type="text" placeholder={"정답을 입력해주세요."} onChange$={(e) => {
                if (props.answer === e.target.value) {
                  f.answer = e.target.value
                }
              }}/>
              <button onClick$={() => {
                if (props.answer === f.answer) {
                  f.isAnswer = true
                }
               }}>제출!</button></> }
            </div>
          </div>
        </div>
      </div>
    );
  }
);
