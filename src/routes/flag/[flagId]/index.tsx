import { component$, useServerMount$, useStore } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import FlagPanel from "~/components/FlagPanel";
import TipMessage from "~/components/TipMessage";

interface Iflags {
  id: string;
  title: string;
  body: string;
  answer: string
}

export default component$(() => {
  const location = useLocation();
  const f = useStore({
    flags: null as Iflags[] | null,
  });

  useServerMount$(async () => {
    f.flags = await (
      await fetch(
        location.href.replace(location.pathname, "") + `/flags.json`,
        {}
      )
    ).json();
  });

  const pathname = location.pathname.replace("/flag/", "");
  const flag = f.flags?.find((e) => e.id === pathname);

  if (flag === undefined)
    return (
      <div>
        <>Errno</>
      </div>
    );
  else
    return (
      <div>
        <FlagPanel id={flag.id} title={flag.title} body={flag.body} answer={flag.answer} />
        <TipMessage message="고1 정보 교과서에 있는 내용들로 출제되었습니다." />
      </div>
    );
});
