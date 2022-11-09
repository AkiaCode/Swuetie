import { component$ } from "@builder.io/qwik";

export default component$(
  (props: { id: string; title: string; body: string }) => {
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
            <p class="card-text">{props.body}</p>
          </div>
        </div>
      </div>
    );
  }
);
