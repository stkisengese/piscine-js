// Function to query servers
function queryServers(serverName, q) {
  const mainServer = getJSON(`/${serverName}?q=${q}`);
  const backupServer = getJSON(`/${serverName}_backup?q=${q}`);

  return Promise.race([mainServer, backupServer]);
}

// Function to perform a search across multiple servers
async function gougleSearch(q) {
  const servers = ["web", "image", "video"];

  const searchPromise = Promise.all(
    servers.map((server) =>
      queryServers(server, q).then((result) => ({ [server]: result }))
    )
  ).then((results) => Object.assign({}, ...results));

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("timeout")), 80)
  );

  return Promise.race([searchPromise, timeoutPromise]);
}
