import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <script dangerouslySetInnerHTML={`
document.onkeydown = function (e) {
  if (e.which == 115 /** F4 */) {
    if (location.pathname == '/flag') {
      location.href = '/'
    } else {
      location.href = '/flag'
    }
  }
}
      `}/>
      <main>
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://github.com/akiacode" target="_blank">
          Made with ♡ by Catry
        </a>
      </footer>
    </>
  );
});
