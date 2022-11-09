import { component$ } from "@builder.io/qwik";
import TipMessage from "~/components/TipMessage";

export default component$(() => {
  const list = [{ num: 1, ip: "1.1.1.1", points: 1 }];

  return (
    <div style={{ textAlign: "center" }}>
      <h1
        style={{
          textAlign: "center",
          "margin-bottom": "1em",
          "font-family": "MaplestoryOTFBold",
        }}
      >
        깃발
      </h1>
      <div class="input-group mb-2">
        <input
          type="text"
          class="form-control"
          placeholder="Put flag"
          aria-label="Put flag"
          aria-describedby="basic-addon2"
          style={{
            "margin-bottom": "0.8em",
            "font-family": "MaplestoryOTFBold",
          }}
        />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">
            Enter
          </button>
        </div>
      </div>
      {/** 맞춘 거대로 list화 하기 */}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ip</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        {/** google firebase로 바꾸기 */}
        {list.map((e) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{e.num}</th>
                <td>{e.ip}</td>
                <td>{e.points}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <TipMessage message="F4를 누르면 메인 페이지로 이동됩니다." />
    </div>
  );
});
