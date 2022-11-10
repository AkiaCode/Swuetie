import { component$, useServerMount$, useStore } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import TipMessage from "~/components/TipMessage";

interface Iflags {
  id: string;
  title: string;
  body: string;
}

export default component$(() => {
  const location = useLocation();

  const f = useStore({
    flags: null as Iflags[] | null,
  });

  useServerMount$(async () => {
    f.flags = await (await fetch(location.href + `/flags.json`, {})).json();
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1
        style={{
          textAlign: "center",
          "margin-bottom": "1em",
          "font-family": "MaplestoryOTFBold",
        }}
      >
        게시판
      </h1>
      <div class="list-group">
        {f.flags === null ? (
          <>Errno</>
        ) : (
          f.flags.map((e) => {
            return (
              <a
                href={"/flag/" + e.id}
                class="list-group-item list-group-item-action"
                style={{ "text-overflow": "ellipsis" }}
              >
                {e.title}
              </a>
            );
          })
        )}
      </div>
      <TipMessage message="F2를 누르면 flag 입력하는 페이지로 이동됩니다." />
    </div>
  );
});
