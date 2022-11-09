import { component$ } from "@builder.io/qwik";

export default component$((props: { message: string }) => {
  return (
    <div>
      <script
        type="module"
        dangerouslySetInnerHTML={`
import { annotate } from 'https://unpkg.com/rough-notation?module';
const e = document.querySelector('span');
const annotation = annotate(e, { type: 'highlight', color: 'yellow', iterations: 1, multiline: true });
annotation.show();
      `}
      ></script>
      <div
        style={{
          "margin-top": "1em",
          textAlign: "center",
          fontSize: "0.8em",
          "font-family": "MaplestoryOTFLight",
        }}
      >
        <span>Tip: {props.message}</span>
      </div>
    </div>
  );
});
