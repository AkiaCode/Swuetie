import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={`
document.onkeydown = function (e) {
  if (e.which == 113 /** F2 */) {
    if (location.pathname == '/flag') {
      location.href = '/'
    } else {
      $.getJSON("https://api.ipify.org?format=json", function(data) {
        console.log(data.ip)
        location.href = '/flag?ip=' + data.ip
      })
    }
  }
}
      `}
      />
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
