import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <main>
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://github.com/catry" target="_blank">
          Made with ♡ by Catry
        </a>
      </footer>
    </>
  );
});
