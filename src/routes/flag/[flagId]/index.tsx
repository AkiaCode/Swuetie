import { component$, useServerMount$, useStore } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import FlagPanel from "~/components/FlagPanel";
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
    f.flags = await (
      await fetch(
        location.href.replace(location.pathname, "") + `/flags.json`,
        {}
      )
    ).json();
  });

  const pathname = location.pathname.replace("/flag/", "")
  const flag = f.flags?.find((e) => e.id === pathname)

  if (flag === undefined) return (<div>
        <>Errno</>
        <TipMessage message="F4를 누르면 flag 입력하는 페이지로 이동됩니다." />
  </div>)
  else return (<div>
        <FlagPanel id={flag.id} title={flag.title} body={flag.body} />
        <TipMessage message="F4를 누르면 flag 입력하는 페이지로 이동됩니다." />
    </div>)
});
