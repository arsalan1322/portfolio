"use strict";

// Native <details>/<summary> handles the dropdowns, including keyboard input.
// No fixed heights: expanded content can grow as text wraps or images load.
(() => {
  function revealHash(hash) {
    if (!hash || hash === "#") return;
    let id;
    try {
      id = decodeURIComponent(hash.slice(1));
    } catch {
      return;
    }
    const target = document.getElementById(id);
    if (!target) return;

    let section = target.closest("details");
    while (section) {
      section.open = true;
      section = section.parentElement?.closest("details");
    }
    requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
  }

  // Also handle a repeated click on the current hash after closing its section.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      revealHash(link.getAttribute("href"));
    });
  });
  window.addEventListener("hashchange", () => revealHash(window.location.hash));
  revealHash(window.location.hash);

  // To add a photo, fill its data-src in index.html. Empty values make no request.
  // Failed images leave a labeled placeholder, or hide an optional thumbnail.
  document.querySelectorAll("img[data-src]").forEach((img) => {
    const source = img.dataset.src.trim();
    if (!source) return;
    const slot = img.closest(".asset-slot");
    if (!slot) return;
    const placeholder = slot.querySelector(".asset-placeholder");

    img.addEventListener("load", () => {
      img.hidden = false;
      slot.hidden = false;
      if (placeholder) placeholder.hidden = true;
    });
    img.addEventListener("error", () => {
      img.hidden = true;
      img.removeAttribute("src");
      if (placeholder) placeholder.hidden = false;
      if (slot.hasAttribute("data-optional")) slot.hidden = true;
    });

    // Images start hidden so a failed source never displays a broken icon.
    // Load configured sources eagerly: native lazy loading may defer hidden
    // images forever, including photos inside a closed details element.
    img.loading = "eager";
    img.src = source;
  });

  // Make browser printing useful while restoring the reader's previous state.
  let printState = null;
  window.addEventListener("beforeprint", () => {
    if (printState) return;
    printState = Array.from(document.querySelectorAll("details"), (section) => [section, section.open]);
    printState.forEach(([section]) => { section.open = true; });
  });
  window.addEventListener("afterprint", () => {
    if (!printState) return;
    printState.forEach(([section, wasOpen]) => { section.open = wasOpen; });
    printState = null;
  });
})();
